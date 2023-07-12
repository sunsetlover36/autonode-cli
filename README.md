# AutoNode CLI

![AutoNode CLI](https://i.ibb.co/BKLjhfv/2023-06-04-16-16-55.png)

## How it works?
Using the AutoNode CLI, you can install or remove nodes that the AutoNode CLI supports.
* To install nodes, enter `install [node1] [node2]`
* To uninstall nodes, type `uninstall [node1] [node2]`

AutoNode CLI supports installing and uninstalling multiple nodes at the same time.

### Example
* `install shardeum lava defund`

## Installation
For a stable installation, you need to run commands through the `root` user, or a user with `root` privileges. You can try running with `sudo`.    

Copy and paste into shell:
```shell
bash <(curl -s https://gist.githubusercontent.com/sunsetlover36/621038d1976c6e464f539040255bcb04/raw/31e3cd36a37e7f1d288fc8f22ae82cbbcae3846e/setup-autonode-cli.sh)
```
Then, enter the OpenAI API key as requested and choose whether to install Docker (if you have it installed - type `n` and press Enter, if not - just press Enter).  

After installation, type `autonode-cli` to work with AutoNode CLI.

## Fork and work

You must have `nodejs` version 18 or higher installed.

1. `git clone https://github.com/sunsetlover36/autonode-cli.git`
2. `cd autonode-cli`.
3. `npm install`
4. Rename `.env.example` to `.env`.
5. Add your OpenAI API key to `.env`. Example - `OPENAI_API_KEY=sk-...`.
6. `npm run build`
7. `npm run start`.

On subsequent runs, simply type `npm run start`.

## .env settings

1. `OPENAI_API_KEY` - OpenAI API key
2. `DISABLE_BUILD_ESSENTIALS` - Do not install on first run system packages, Docker, Rust, Node, etc.
3. `DISABLE_DOCKER_INSTALLATION` - Do not install Docker on first startup
