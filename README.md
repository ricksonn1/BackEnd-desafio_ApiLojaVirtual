# Utilizei esse teste open-source da aikodigital pra testar meus conhecimentos. 


# Teste Back-end

Neste teste serão avaliados seus conhecimentos e a metodologia aplicada no desenvolvimento do back-end de uma aplicação.

## O Desafio

Crie uma API RESTful de uma loja virtual que permita ao usuário cadastrar, atualizar, excluir e listar produtos e categorias.

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste.

### CRUD

Cada categoria deve ter os seguintes atributos:
nome
descrição

Um produto pode ter apenas uma categoria, mas uma categoria pode ter vários produtos.
nome
descrição
preço
categoriaId

### Os endpoints devem ser os seguintes:

GET /produtos: Retorna todos os produtos cadastrados com as suas categorias.
GET /produtos/:id: Retorna o produto com o id especificado e a sua categoria.
POST /produtos: Cadastra um novo produto associado a uma categoria existente.
PUT /produtos/:id: Atualiza os dados do produto com o id especificado.
DELETE /produtos/:id: Remove o produto com o id especificado.

GET /categorias: Retorna todas as categorias cadastradas com os seus produtos.
GET /categorias/:id: Retorna a categoria com o id especificado e os seus produtos.
POST /categorias: Cadastra uma nova categoria associada a vários produtos existentes.
PUT /categorias/:id: Atualiza os dados da categoria com o id especificado.
DELETE /categorias/:id: Remove a categoria com o id especificado e todos os seus produtos associados.

## Extras

* Estrutura MVC
* Services 

## Pra rodar o Projeto

* Estou utilizando MySQL
* Postman

* Npx sequelize-cli db:migrate

* Npm start pra rodar a aplicação
