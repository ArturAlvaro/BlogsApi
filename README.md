# <p align="center">Blogs API</p>

![programming gif](https://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6)

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

## A rota POST '/user' recebe no corpo da requisição os seguintes dados:
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

## A rota GET '/post' lista todos os usuários:
<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

<p>&nbsp;</p>

### Em caso de sucesso, a resposta será:

![resposta correta na rota GET /user](./images/getUser.png)

## A rota GET '/user/:id' lista usuário específico:

<p>&nbsp;</p>

* Verifica que não é possível listar usuário inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

<p>&nbsp;</p>

### Em caso de sucesso, a resposta será:

![resposta correta na rota GET /user/id](./images/getUserId.png)

## A rota DELETE '/user/me' deleta o próprio usuário:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será:

![resposta correta de DELETE /user/me](./images/deleteUser.png)

## /login

## A rota POST '/login' recebe os seguintes dados no corpo da requisição e realiza login:

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

## A rota POST '/categories' recebe os seguintes dados no corpo da requisição e cria uma nova categoria:

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

## A rota GET '/categories' lista todas as categorias:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de GET /categories](./images/getCategories.png)

## /post

## A rota POST '/post' recebe os seguintes dados no corpo da requisição e cria uma publicação:

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

## A rota GET '/post' lista todas as publicações:

<p>&nbsp;</p>

* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![a resposta correta de GET /post](./images/getPost.png)

## A rota GET '/post/:id' lista uma publicação específica:

<p>&nbsp;</p>

* Verifica que não é possível listar uma publicação inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![resposta correta de GET /post/:id](./images/getPostId.png)

## A rota PUT '/post/:id' atualiza uma publicação e recebe os seguintes dados no corpo da requisição:

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

## A rota DELETE /post/:id deleta uma publicação específica:

<p>&nbsp;</p>

* Verifica que não é possível deletar uma publicação de outro usuário;
* Verifica que não é possível deletar uma publicação inexistente;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![a resposta correta de DELETE post/:id](./images/deletePostId.png)

## A rota GET post/search?q=:searchTerm exibe o resultado procurado:

<p>&nbsp;</p>

* Verifica que é possível buscar uma publicação inexistente e retornar um array vazio;
* Verifica que é possível buscar todas as publicações quando a busca está vazia;
* Verifica que é possível buscar uma publicação pelo título;
* Verifica que é possível buscar uma publicação pelo conteúdo;
* Verifica se o usuário possui token de validação;
* Verifica se o usuário possui token em um formato válido;

### Em caso de sucesso, a resposta será a seguinte:

![reposta correta de GET post/search](./images/getSearch.png)

# <p align="center">Obrigado!</p>

![thank you](https://giphy.com/gifs/the-office-thank-you-michael-scott-1Z02vuppxP1Pa)

<p>&nbsp;</p>

# <p align="center">Contato</p>

<a href = "mailto:artur.alvaro73@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
<a href="https://www.linkedin.com/in/arturalvaro/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
