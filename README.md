# <p align="center">Blogs API</p>

<img src="https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e472ww7y70zrfyql6aj1eimcul9oubuedk5e2l45u43&rid=giphy.gif&ct=g" align="right" />

<p>&nbsp;</p>

# Sumário

- [Dependências](#dependências)
- [Ao iniciar o projeto](#ao-iniciar-o-projeto)
- [Entendendo o projeto](#entendendo-o-projeto)
- [Rotas](#rotas)
  - [/user](#user)
    - [POST user](#post-user)
    - [GET user](#get-user)
    - [GET user/id](#get-userid)
    - [DELETE user/me](#delete-userme)
  - [/login](#login)
    - [POST login](#post-login)
  - [/categories](#categories)
    - [POST categories](#post-categories)
    - [GET categories](#get-categories)
  - [/post](#post)
    - [POST post](#post-post)
    - [GET post](#get-post)
    - [GET post/id](#get-postid)
    - [PUT post/id](#put-postid)
    - [DELETE post/id](#delete-postid)
    - [GET post/search](#get-postsearch)
- [Obrigado](#obrigado)
- [Contato](#contato)


## Dependências

* Hapi/Joi
* EsLint
* Http-Status-Codes
* JSON-Web-Token
* Sequelize
* Express
* MySQL2
* Nodemon

#### Ao iniciar o projeto:

Use o seguinte comando:

~~~
npm install
~~~

# <p align="center">Entendendo o projeto</p>

## <p align="center">Rotas</p>
<p>&nbsp;</p>

## /user

<p>&nbsp;</p>

## POST user

### A rota POST '/user' recebe no corpo da requisição os seguintes dados:
<p>&nbsp;</p>

~~~
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
~~~

* Verifica a existência dos seguintes campos;
* Verifica se displayName é maior que 8 caracteres;
* Verifica se email tem formato de email;
* Verifica se password tem mais que 6 caracteres;
* Verifica que não é possível cadastrar um usuário existente;

<p>&nbsp;</p>

### Em caso de sucesso, terá um resultado semelhante:

![resposta correta na rota POST /user](./images/userSuccess.png)

## GET user

### A rota GET '/user' lista todos os usuários:
<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

<p>&nbsp;</p>

### Em caso de sucesso, a resposta será:

![resposta correta na rota GET /user](./images/getUser.png)

## GET user/id

### A rota GET '/user/:id' lista usuário específico:

<p>&nbsp;</p>

* Verifica que não é possível listar usuário inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

<p>&nbsp;</p>

### Em caso de sucesso, a resposta será:

![resposta correta na rota GET /user/id](./images/getUserId.png)

## DELETE user/me

### A rota DELETE '/user/me' deleta o próprio usuário:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será:

![resposta correta de DELETE /user/me](./images/deleteUser.png)

## /login

## POST login

### A rota POST '/login' recebe os seguintes dados no corpo da requisição e realiza login:

<p>&nbsp;</p>

~~~
{
  "email": "email@mail.com",
  "password": "123456"
}
~~~

<p>&nbsp;</p>

* Verifica que os campos são existentes;
* Verifica que os campos não estão em branco;
* Verifica que não é possível fazer login com usuário que não existe;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de POST /login](./images/postLogin.png)

## /categories

## POST categories

### A rota POST '/categories' recebe os seguintes dados no corpo da requisição e cria uma nova categoria:

<p>&nbsp;</p>

~~~
{
  "name": "Inovação"
}
~~~

<p>&nbsp;</p>

* Verifica que o campo name existe;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de POST /categories](./images/postCategories.png)

## GET categories

### A rota GET '/categories' lista todas as categorias:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de GET /categories](./images/getCategories.png)

## /post

## POST post

### A rota POST '/post' recebe os seguintes dados no corpo da requisição e cria uma publicação:

<p>&nbsp;</p>

~~~
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
~~~

<p>&nbsp;</p>

* Verifica se os campos não são inexistentes;
* Verifica se categoryIds não está vazio;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de POST /post](./images/postPost.png)

## GET post

### A rota GET '/post' lista todas as publicações:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![a resposta correta de GET /post](./images/getPost.png)

## GET post/id

### A rota GET '/post/:id' lista uma publicação específica:

<p>&nbsp;</p>

* Verifica que não é possível listar uma publicação inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de GET /post/:id](./images/getPostId.png)

## PUT post/id

### A rota PUT '/post/:id' atualiza uma publicação e recebe os seguintes dados no corpo da requisição:

<p>&nbsp;</p>

~~~
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
~~~

<p>&nbsp;</p>

* Verifica que não é possível editar o ID da publicação;
* Verifica que não é possível editar uma publicação de outro usuário;
* Verifica a existência dos campos;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de PUT post/:id](./images/putPostId.png)

## DELETE post/id

### A rota DELETE /post/:id deleta uma publicação específica:

<p>&nbsp;</p>

* Verifica que não é possível deletar uma publicação de outro usuário;
* Verifica que não é possível deletar uma publicação inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![a resposta correta de DELETE post/:id](./images/deletePostId.png)

## GET post/search

### A rota GET post/search?q=:searchTerm exibe o resultado procurado:

<p>&nbsp;</p>

* Verifica que é possível buscar uma publicação inexistente e retornar um array vazio;
* Verifica que é possível buscar todas as publicações quando a busca está vazia;
* Verifica que é possível buscar uma publicação pelo título;
* Verifica que é possível buscar uma publicação pelo conteúdo;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![reposta correta de GET post/search](./images/getSearch.png)

<p>&nbsp;</p>

# <p align="center">Obrigado</p>

<div align="center">
  <img src="https://media1.giphy.com/media/n4oKYFlAcv2AU/giphy.gif?cid=ecf05e47k4proh9828yhsf7jicofkeoq692r87e9nypalnr3&rid=giphy.gif&ct=g" />
</div>

<p>&nbsp;</p>

# <p align="center">Contato</p>

<a href = "mailto:artur.alvaro73@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
<a href="https://www.linkedin.com/in/arturalvaro/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
