## Команды рассмотренные в курсе:

### Работа с образом:
`docker login` - залогиниться в Docker
`docker pull <name>` - загрузить образ с Docker Hub
`docker pull <name>` - загрузить образ в Docker Hub
`docker images` - посмотреть список всех образов
`docker image rm  <id | name>` или `docker rmi  <id | name>` - удалить образ
`docker rmi  <id | name> <id | name> <id | name>` - удалить несколько образов
---

### Работа с контейнером:
`docker ps` - посмотреть список запущенных контейнеров
`docker ps -a` - посмотреть список всех контейнеров
`docker run <id | name>` - запустить контейнер
`docker run -d <id | name>` - запустить контейнер в фоновом режиме
`docker run -it <id | name>` - запустить контейнер в интерактивном режиме
`docker stop <id | name>` - остановить контейнер
`docker start <id | name>` - запустить заново уже существующий контейнер
`docker rm <id | name>` - удалить контейнер
`docker rm -f <id | name>` - удалить проблемный контейнер (зависший)
---

### Сборка образа:
`docker build -t <name> <path to dockerfile>` - создать образ
`docker build -t <name>:<tag> <path to dockerfile>` - создать тэгированный образ (с версией)
---

### Запуск контейнера:
`docker run --name <container name> -p 3001:3000 <image name>` - запустить контейнер с именем "container name", на основании образа "image name", в контейнере открыть порт 3001
`docker run --name <container name> -p 3001:3000 <image name> -v <local path>:<container path>` - запустить контейнер с именем "container name", на основании образа "image name", в контейнере открыть порт 3001 и добавить том
---

### Работа с Docker Compose:
`docker compose version` - получить версию Docker Compose
`docker compose up` - запустить контейнер через Docker Compose
`docker compose down` - остановить запущенный контейнер
`docker compose down --rmi all` - остановить запущенный контейнер и удалить созданный образ
---

### Дополнительно:
`docker system prune -a` - удаление образов, остановка и удаление контейнеров, очистка кэша
---
