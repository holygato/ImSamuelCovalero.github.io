# Bem-vindo ao Portfólio de Samuel Covalero

Este portfólio é uma aplicação web em React.js que apresenta minhas habilidades, experiências e projetos desenvolvidos durante meu aprendizado na Trybe. O aplicativo é responsivo e se adapta a diversos tamanhos de tela, desde dispositivos móveis até telas maiores. Ele também possui temas claro e escuro e muda para um cabeçalho superior com menu "hamburger" quando a largura da tela é inferior a 768 pixels.

> - Veja o post sobre a aplicação [no LinkedIn aqui.](https://www.linkedin.com/posts/samuelcovalero_frontend-css-frontend-activity-6986069228311207936-lOwP?utm_source=share&utm_medium=member_desktop)
> - Acesse o [deploy da aplicação aqui](https://project-star-wars-planets-search.vercel.app/)

<details>
<summary>Informações para utilizar a aplicação no deploy</summary><br>
 
 - Não precisa logar, basta acessar e navegar.
 
</details>

## Sumário
- [Portfólio de Samuel Covalero](#bem-vindo-ao-portfólio-de-samuel-covalero)
- [Visualização](#visualização)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
  - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
  - [Lint](#lint)

## Visualização

<div align="center">

![portfolio](https://user-images.githubusercontent.com/98184355/230674423-38e1815b-6320-4c55-b871-807b6ca2f4a7.gif)

</div>

## Contexto

O __meu Portfólio__ é um espaço onde compartilho minhas habilidades, experiências e projetos desenvolvidos. O aplicativo é dividido em seções que apresentam informações sobre mim, alguns projetos que desenvolvi, habilidades técnicas, linguagens e tecnologias que conheço, estou estudando e pretendo aprender, acesso ao meu currículum e como entrar em contato comigo.

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [React.js](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
- [Styled Components](https://styled-components.com/) | Biblioteca para estilização do CSS.
- [Context API](https://pt-br.reactjs.org/docs/context.html) | API utilizada para gerenciamento de estado.

O React.js foi escolhido como biblioteca para criar interfaces de usuário devido à sua popularidade, facilidade de aprendizado e ampla comunidade de desenvolvedores, facilitando a busca por soluções para problemas comuns. Já o Styled Components, que permite escrever o CSS em formato de componente, torna o código mais legível e fácil de entender. Por fim, a Context API foi utilizada para gerenciamento de estado, permitindo compartilhar informações importantes da aplicação entre diferentes componentes sem a necessidade de passá-las manualmente através de props, resultando em um código mais limpo e fácil de compreender.

## Instalação e Execução

Esta aplicação possui um Dockerfile e pode ser executada usando o Docker ou diretamente no seu ambiente de desenvolvimento. Siga as instruções abaixo de acordo com a sua preferência.

### Sem Docker

#### Download do projeto
```
git clone git@github.com:imsamuelcovalero/imsamuelcovalero.github.io
```
#### Instalar dependências
```
cd imsamuelcovalero.github.io
npm install
```
#### Rodar a aplicação
```
cd imsamuelcovalero.github.io
npm start
```

### Usando Docker

Se você deseja utilizar o Docker para rodar a aplicação, siga os passos abaixo:

1. Construa a imagem do Docker com o comando:
```docker build -t <nome-da-imagem> .```
Substitua `<nome-da-imagem>` pelo nome que deseja dar à imagem do Docker. Não esqueça do ponto no final, pois ele indica o caminho do Dockerfile.

2. Execute o container pela primeira vez utilizando o comando:
```docker run -d --name <nome-do-container> -p <porta-local>:3000 -v $(pwd):/app <nome-da-imagem>```
Substitua `<nome-do-container>` pelo nome que deseja dar ao container e `<porta-local>` pela porta em que deseja executar o aplicativo no localhost. Lembre-se de usar o mesmo `<nome-da-imagem>` utilizado no passo anterior.

3. Para as próximas vezes em que desejar executar a aplicação, utilize o comando:
```docker container start <id-container ou nome-do-container>```
Substitua `<id-container ou nome-do-container>` pelo ID ou nome do container criado anteriormente.

Agora, você pode acessar a aplicação no seu navegador através do endereço `http://localhost:<porta-local>/`.

## Notas
### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).
