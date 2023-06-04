# AutoNode CLI

## Локальная установка

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
