import { checkFlag } from "./checkFlag";
import { execCommand } from "./execCommand";

export const buildEssentials = async () => {
  try {
    await execCommand(
      `sudo apt -q update && \
      sudo apt install -qy curl git jq lz4 build-essential unzip libpq-dev libssl-dev pkg-config openssl ocl-icd-opencl-dev libopencl-clang-dev libgomp1 sysstat && \
      sudo apt -qy upgrade && rm -rf update-golang && git clone https://github.com/udhos/update-golang && cd update-golang && sudo ./update-golang.sh && cd .. && rm -rf update-golang && \
      ${
        !checkFlag(process.env.DISABLE_DOCKER_INSTALLATION)
          ? "wget https://raw.githubusercontent.com/ProNodes11/NodeGuides/main/docker.sh && chmod +x docker.sh && ./docker.sh &&"
          : ""
      } \
      curl https://sh.rustup.rs -sSf | sh -s -- -y && \
      curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && [ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion" && nvm install node`
    );
  } catch (e) {
    console.error(e);
  }
};
