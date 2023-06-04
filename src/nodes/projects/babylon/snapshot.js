export const curlSnapshot = ({
  infoUrl,
  projectFolder,
}) => `SNAP_NAME=$(curl -s ${infoUrl} | jq -r .fileName)
curl "https://snapshots2-testnet.nodejumper.io/althea-testnet/\${SNAP_NAME}" | lz4 -dc - | tar -xf - -C $HOME/.${projectFolder}`;
