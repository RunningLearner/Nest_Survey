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

- 도커 실행 필수!

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

![image](https://user-images.githubusercontent.com/97277365/211719243-ab5f4296-f01b-4c64-b126-edbaec11269b.png)

## API 기능 구현

### 설문지 CRUD

### Query

- findOneSurvey : 특정 설문의 정보를 조회합니다.
- findAllSurveys : 모든 설문의 정보를 조회합니다.

### Mutation

- createSurvey : 설문을 생성합니다.
- updateSurvey : 특정 설문의 정보를 수정합니다.
- removeSurvey : 특정 설문을 삭제합니다.

### 문항 CRUD

### Query

- findOneQuestion : 특정 질문의 정보를 조회합니다.
- findAllQuestions : 모든 질문의 정보를 조회합니다.

### Mutation

- createQuestion : 질문을 생성합니다.
- updateQuestion : 특정 질문의 정보를 수정합니다.
- removeQuestion : 특정 질문을 삭제합니다.

### 선택지 CRUD

### Query

- findOneChoice : 특정 선택지의 정보를 조회합니다.
- findAllChoices : 모든 선택지의 정보를 조회합니다.

### Mutation

- createChoice : 선택지를 생성합니다.
- updateChoice : 특정 선택지를 수정합니다.
- removeChoice : 특정 선택지를 삭제합니다.

### 답변 CRUD

### Query

- findOneAnswer : 특정 답변의 정보를 조회합니다.
- findAllAnswers : 모든 답변의 정보를 조회합니다.

### Mutation

- updateAnswer : 답변을 생성합니다.
- updateSurvey : 특정 답변을 수정합니다.
- removeAnswer : 특정 답변을 삭제합니다.

### 설문지 완료

### Mutation

- finishSurvey : 설문지의 상태를 완료로 변경합니다. 답변 정보를 조작할 수 없습니다.

### 완료된 설문지 확인

### Query

- findFinishedSurveys : 완료된 설문지들의 점수와 정보를 확인할 수 있습니다.

## Stay in touch

- Author - [RunningLearner](https://github.com/RunningLearner)
- Email - tkacnsdms@naver.com

## License

Nest is [MIT licensed](LICENSE).
