# Desafio para Estágio na Tegra - Loja de Livros 2020

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Desafio para programa de estágio na Tegra 2020

## O Problema

Você precisa implementar uma lógica de carrinho de compras de uma loja de livros. Temos uma lista de livros com seus respectivos autores, preço e quantidade em estoque.

## Requisitos da Aplicação

Sua aplicação deve:

- Permitir o cadastro, remoção, alteração e listagem de livros
  - Cadastro de novos livros com os seguintes dados: Nome do livro, Autor(es), Preço e Quantidade em Estoque
  - Remoção de livros, a partir do seu ID
  - Alteração de valores de um livro
  - Listagem de livros
- Permitir adicionar livros ao carrinho de compras
- Permitir remover livros do carrinho de compras
- Exibir o valor subtotal de cada livro no carrinho de compras
- Exibir o valor total do carrinho de compras
- Ao adicionar livros ao carrinho de compras, exibir um erro e impedir que o usuário tente adicionar uma quantidade de livros maior do que o disponível em estoque

Mais Informações em: https://github.com/tegraoss/desafio-estagio-tegra

***

### Requisitos Cumpridos

✓ Permitir o cadastro, remoção, alteração e listagem de livros  
  ✓ Cadastro de novos livros com os seguintes dados: Nome do livro, Autor(es), Preço e Quantidade em Estoque  
  ✓ Remoção de livros, a partir do seu ID  
  ✓ Alteração de valores de um livro  
  ✓ Listagem de livros  
✓ Permitir adicionar livros ao carrinho de compras  
✓ Permitir remover livros do carrinho de compras  
✓ Exibir o valor subtotal de cada livro no carrinho de compras  
X Exibir o valor total do carrinho de compras  
✓ Ao adicionar livros ao carrinho de compras, exibir um erro e impedir que o usuário tente adicionar uma quantidade de livros maior do que o disponível em estoque  



#### Bug  

- Ao adicionar o mesmo livro no carrinho (adicionar um mesmo livro mais de uma vez) e depois deletar um deles da lista de compras, todos os livros iguais são deletados.

*** 

### Desafios enfrentados  

1 - A escolha da linguagem para o desenvolvimento.  
    Comecei fazendo o desafio em HTML, CSS e Javascript.
    Contudo, após desenvolver parte do projeto, alguns amigos meus me alertaram que usar React seria a melhor opção para esse desafio.  
    Meus conhecimentos em React são básicos, porém, aceitei o desafio e comecei a fazer em React.

2 - Preencher uma lista com dados que não vieram de uma API ou um banco externo.
    Minha solução foi preencher uma lista inicial no state do componente "Vitrine".

3 - Fazer o CRUD da lista principal de livros  
    Após várias pesquisas, cheguei a solução utilizando os dados usados no state do componente principal "Vitrine".  

4 - Manipulação de um dado recebido do state do componente "Pai" no componente "filho"  
    A operação de pegar a quantidade requerida de itens na compra de um livro, vezes o valor do estoque, para então gerar um subTotal a se pagar por item foi bastante complexa devido ao fato de que os dados estavam sendo recebidos a partir do state do componente "Pai". A solução que tive foi criada juntamente de um amigo meu que tem maiores conhecimentos em React. E por fim, acredito que ter usado os dados no state não foi a melhor solução, contudo foi o que consegui fazer dentro do prazo estipulado.

***


## 🚀 Como executar o projeto:
Para executar e visualizar o projeto em **modo de desenvolvimento**, você precisará seguir as próximas etapas.

### Pré-requisitos:
Abaixo estará listada as ferramentas necessárias para o funcionamento do projeto.
- [![Nodejs](https://amandacleto.github.io/images-for-projects/public/images/github-readme/icon-nodejs.svg)](https://nodejs.org/en/) **: NodeJS v12**  
  [<ins>Guia de instalação NodeJS</ins>](https://nodejs.org/en/).
  
### Instalando dependencias:
Execute o comandos para instalar as dependencias do projeto.
   ```sh
   npm install
   ```  
  
### Executando o projeto:
  ```sh
   npm run start
   ```
<br>


## License
This project is licensed under the [MIT] license - see the LICENSE.md file for more details.

