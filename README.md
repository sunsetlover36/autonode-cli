# AutoNode CLI

![AutoNode CLI](https://i.ibb.co/BKLjhfv/2023-06-04-16-16-55.png)

## Как это работает?
С помощью AutoNode CLI можно устанавливать или удалять ноды, которые поддерживает AutoNode CLI.
* Для установки нод - вводи `install [нода1] [нода2]`
* Для удаления нод - вводи `uninstall [нода1] [нода2]`

AutoNode CLI поддерживает установку нескольких нод одновременно.

### Пример
* `install shardeum lava defund`

## Установка

1. `bash <(curl -s https://gist.githubusercontent.com/sunsetlover36/621038d1976c6e464f539040255bcb04/raw/dc49a401acd0fedd89101c046c9e113498e925ae/setup-autonode-cli.sh)`
2. Введи OpenAI API ключ по запросу
3. Выбери устанавливать ли Docker (если он у тебя установлен - вводи `n` и нажимай Enter, если нет - то просто нажимай Enter)
4. После установки вводи `autonode-cli` для работы с AutoNode CLI

## Работа с репозиторием

У тебя должен быть установлен `nodejs` версии не ниже 18.

1. `git clone https://github.com/sunsetlover36/autonode-cli.git`
2. `cd autonode-cli`
3. `npm install`
4. Переименуй `.env.example` в `.env`
5. Добавь OpenAI API ключ в `.env.example`
6. `npm run build`
7. `npm run start`

При последующих запусках достаточно просто вводить `npm run start`

## Опции .env

1. `OPENAI_API_KEY` - API ключ OpenAI
2. `DISABLE_BUILD_ESSENTIALS` - Не устанавливать при первом запуске системные пакеты, Docker, Rust, Node, etc.
3. `DISABLE_DOCKER_INSTALLATION` - Не устанавливать Docker при первом запуске
