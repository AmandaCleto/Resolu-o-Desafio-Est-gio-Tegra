# Desafio para Estágio na Tegra - Loja de Livros

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
    Contudo, após três dias de trabalho, alguns amigos meus me alertaram que usar React seria a melhor opção para esse desafio.  
    Meus conhecimentos em React são básicos, porém, aceitei o desafio e comecei a fazer em React.

2 - Preencher uma lista com dados que não vieram de uma API ou um banco externo.
    Minha solução foi preencher uma lista inicial no state do componente "Vitrine".

3 - Fazer o CRUD da lista principal de livros  
    Após várias pesquisas, cheguei a solução utilizando os dados usados no state do componente principal "Vitrine".  

4 - Passagem de dados do state para outro componente.  
    A princípio, eu havia criado duas rotas, uma para a Listagem de livros e outra para o Carrinho, que possuiria os livros adicionados. Contudo, ao ter que passar dados do state do componente Vitrine para o componente Carrinho, este então era renderizado logo abaixo do componente Vitrine e também em sua própria rota.  
    Não achei a solução para esse problema, e tive que dispensar as rotas em busca de terminar a tempo.

5 - Manipulação de um dado recebido do state do componente "Pai" no componente "filho"  
    A simples operação de pegar a quantidade requerida de itens na compra de um livro, vezes o valor do estoque, para então gerar um subTotal a se pagar por item foi bastante complexa devido ao fato de que os dados estavam sendo recebidos a partir do state do componente "Pai". A solução que tive foi criada juntamente de um amigo meu que tem maiores conhecimentos em React. E por fim, acredito que ter usado os dados no state não foi a melhor solução, contudo foi o que consegui fazer dentro do prazo estipulado.

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
