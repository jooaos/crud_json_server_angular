### Sobre esse repositório

Olá! Tudo bem? Bom esse repositório tem o intuito de apresentar um CRUD simples utilizando Angular e uma API Rest construida com ajuda do JSON Server

### Dependências
Para fazer os testes, você precisa ter instalado em sua máquina:
 - [Angular] (>= 11)


### Debugando a aplicação
> Observação: Nessa aplicação é preciso contar com dois terminais, para que em um você consiga deixar a API ativa


```sh
https://github.com/jooaos/crud_json_server_angular.git
cd crud_json_server_angular
```
> Para a API ( a partir do arquivo fonte)

```sh
cd dados
json-server --watch db.json
```
> Para o front-end (outro terminal e a partir do arquivo fonte)

```sh
npm install
ng serve
```
Ao final do **ng serve** será gerado um link para uma porta em localhost, é só você acessar que verá a aplicação rodando.

##### The end

[//]: #
   [JSON Server]: <https://www.npmjs.com/package/json-server>
   [Angular]: <https://angular.io/>
