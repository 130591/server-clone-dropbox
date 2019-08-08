# Server DropBox API

Esta API foi desenvolvida durante a semana omnistack da [Rocketseat](https://rocketseat.com.br/), a API disponibiliza para as aplicações que a consumirem
a possíbilidade de criação de boxes (pastas) e upload de arquivos dentro das boxes criadas.

A API será publicada no [Heroku](https://www.heroku.com/) para ser consumida por aplicações [web](https://github.com/gabrielmq/rocketbox-web) e mobile desenvolvidas em ReactJS e React Native, 
também desenvolvidas durante a semana Omnistack da [Rocketseat](https://rocketseat.com.br/).

## Executando a API localmente

### Pré-requisitos

* NodeJS v8+
* Yarn ou Npm
* MongoDB

### Endpoints

Abaixo estão listados os endpoints da API

__POST__
  - `/boxes`
    - body: `{ "title": "título box" }` 
  - `/boxes/:boxId/files`
    - body: `form-data - key: file`

__GET__
  - `/boxes/:boxId`
