<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

- 설문을 받을 수 있는 Nest백엔드 API입니다.
- Graphql 방식을 사용하여 통신합니다.

## Installation

```bash
$ cd survey
$ npm install
```

## Running the app

```bash
# run postgres
$ sudo docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## ERD
![image](https://user-images.githubusercontent.com/97277365/211705035-9e7a00b0-78e8-4ef5-975c-471aa1020b1b.png)


## API 기능 구현

### 설문지 CRUD

- 설문지를 조회, 생성, 수정, 삭제할 수 있습니다.

### 문항 CRUD

- 문항을 조회, 생성, 수정, 삭제할 수 있습니다.

### 선택지 CRUD

- 각 문항의 선택지를 조회, 생성, 수정, 삭제할 수 있습니다.

### 답변 CRUD

- 선택지에 답변을 조회, 생성, 수정, 삭제할 수 있습니다.

### 설문지 완료

- 설문지의 모든 선택지들의 상태를 변경하여 더 이상 답변을 조작할 수 없습니다.

### 완료된 설문지 확인

- 완료된 설문지의 점수와 정보를 확인할 수 있습니다.

## Stay in touch

- Author - [RunningLearner](https://github.com/RunningLearner)
- Email - tkacnsdms@naver.com

## License

Nest is [MIT licensed](LICENSE).
