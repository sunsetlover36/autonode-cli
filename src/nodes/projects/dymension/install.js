import { generate as generateRandomStr } from "randomstring";

import { metadata } from "./metadata";
import { curlSnapshot } from "./snapshot";

export const installScript = ({ customPorts }) => {
  const {
    alias,
    folders: { git: gitFolder, project: projectFolder },
    gitBranch,
    chainId,
    denom,
    syncUtils: { genesisUrl, addrBookUrl, infoUrl, seeds, peers },
  } = metadata;

  const { script: customPortsScript } = customPorts;

  const moniker = `dymension-${generateRandomStr(12)}`;
  return {
    script: `cd || return
rm -rf ${gitFolder}
git clone https://github.com/dymensionxyz/${gitFolder}.git
cd ${gitFolder} || return
git checkout ${gitBranch}
make install

${alias} config keyring-backend test
${alias} config chain-id ${chainId}
${alias} init "${moniker}" --chain-id ${chainId}

curl -s ${genesisUrl} > $HOME/.${projectFolder}/config/genesis.json
curl -s ${addrBookUrl} > $HOME/.${projectFolder}/config/addrbook.json

SEEDS="${seeds}"
PEERS="${peers}"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.${projectFolder}/config/config.toml

sed -i 's|^pruning *=.*|pruning = "custom"|g' $HOME/.${projectFolder}/config/app.toml
sed -i 's|^pruning-keep-recent  *=.*|pruning-keep-recent = "100"|g' $HOME/.${projectFolder}/config/app.toml
sed -i 's|^pruning-interval *=.*|pruning-interval = "10"|g' $HOME/.${projectFolder}/config/app.toml
sed -i 's|^snapshot-interval *=.*|snapshot-interval = 0|g' $HOME/.${projectFolder}/config/app.toml

sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001${denom}"|g' $HOME/.${projectFolder}/config/app.toml
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.${projectFolder}/config/config.toml

${customPortsScript}

sudo tee /etc/systemd/system/${alias}.service > /dev/null << EOF
[Unit]
Description=Dymension Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which ${alias}) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000
[Install]
WantedBy=multi-user.target
EOF

${alias} tendermint unsafe-reset-all --home $HOME/.${projectFolder} --keep-addr-book

${curlSnapshot({ infoUrl, projectFolder })}

sudo systemctl daemon-reload
sudo systemctl enable ${alias}
sudo systemctl start ${alias}`,
  };
};
