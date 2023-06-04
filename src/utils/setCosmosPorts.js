import { getAvailablePort } from "./getAvailablePort";

export const setCosmosPorts = async (metadata) => {
  const {
    folders: { project: projectFolder },
  } = metadata;

  const addendum = 100;
  const grpc = await getAvailablePort(9090, addendum),
    grpcWeb = await getAvailablePort(9091, addendum),
    proxyApp = await getAvailablePort(26658, addendum),
    laddr = await getAvailablePort(26657, addendum),
    pprofLaddr = await getAvailablePort(26656, addendum),
    laddrP2p = await getAvailablePort(6060, addendum),
    prometheus = await getAvailablePort(26660, addendum),
    api = await getAvailablePort(1317, addendum);
  return {
    script: `sed -i.bak -e "s%^proxy_app = \\"tcp://127.0.0.1:26658\\"%proxy_app = \\"tcp://127.0.0.1:${proxyApp}\\"%; s%^laddr = \\"tcp://127.0.0.1:26657\\"%laddr = \\"tcp://127.0.0.1:${laddr}\\"%; s%^pprof_laddr = \\"localhost:6060\\"%pprof_laddr = \\"localhost:${laddrP2p}\\"%; s%^laddr = \\"tcp://0.0.0.0:26656\\"%laddr = \\"tcp://0.0.0.0:${pprofLaddr}\\"%; s%^prometheus_listen_addr = \\":26660\\"%prometheus_listen_addr = \\":${prometheus}\\"%" $HOME/.${projectFolder}/config/config.toml && sed -i.bak -e "s%^address = \\"0.0.0.0:9090\\"%address = \\"0.0.0.0:${grpc}\\"%; s%^address = \\"0.0.0.0:9091\\"%address = \\"0.0.0.0:${grpcWeb}\\"%; s%^address = \\"tcp://0.0.0.0:1317\\"%address = \\"tcp://0.0.0.0:${api}\\"%" $HOME/.${projectFolder}/config/app.toml && sed -i.bak -e "s%^node = \\"tcp://localhost:26657\\"%node = \\"tcp://localhost:${laddr}\\"%" $HOME/.${projectFolder}/config/client.toml`,
    ports: {
      grpc,
      grpcWeb,
      proxyApp,
      laddr,
      pprofLaddr,
      laddrP2p,
      prometheus,
      api,
    },
  };
};
