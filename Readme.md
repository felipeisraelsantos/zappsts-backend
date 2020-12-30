# Desafio Backend Zappts



### Instalações

```
$ yarn init -y
$ yarn add express
$ yarn add @types/express -D
$ yarn add typescript -D
$ yarn run tsc --init
$ yarn add ts-node-dev -D
$ yarn add typeorm mysql
```

### Para a utilização de Testes

```
$ yarn add jest -D
$ yarn add @types/jest -D
$ yarn jest --init
$ yarn add jest ts-jest typescript jest-preset-typescript --dev
$ yarn add supertest -D
$ yarn add @types/supertest -D
```

#### Para teste foi instalado a dependência 

```
$ yarn add sqlite3 -D 
```

### Para a utilização de JWT

```
$ yarn add jsonwebtoken
$ yarn add @types/jsonwebtoken
$yarn add dotenv
```



> A base de dados foi construida em MariaDB através do docker-compose



### Endpoints

Para criação de um usuário 

```
| GET  |   /users
```



Para a autenticação

```
| POST |  /auth
```



Para o envio de dados , o usuário precisa estar autenticado

```
| POST | /letters { middleware }
```

