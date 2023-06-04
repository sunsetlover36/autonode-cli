export const uninstallScript = () => ({
  script: `docker rmi -f test-dashboard local-dashboard registry.gitlab.com/shardeum/server && docker stop $(docker ps -a -q --filter="name=shardeum-dashboard") && docker rm $(docker ps -a -q --filter="name=shardeum-dashboard") && rm -rf $HOME/.shardeum`,
})
