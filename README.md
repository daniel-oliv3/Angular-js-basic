### Requisitos necessários:
- Conhecimentos sólidos de HTML5 e CSS3.
- Bons conhecimentos de JavaScript/TypeScript.

- NodeJs (NPM) e Angular CLI.
- Editor de código: Visual Studio Code.
- Browser: Google Chrome.

### Breve resumo histórico.
- AngularJs != Angular2 & Angular4.
- AngularJs (AngularJs 1.x) surge em outubro de 2010.
- Angular 2 anunciado em setembro de 2014. Versão final em setembro de 2016.
- Angular 4, Versão final, em março de 2017.
- Está prevista a versão 5 para final de outubro de 2017.
- etc.. atualmente na versão 12, O angular 12, foi lançado em 12 de maio de 2021.
- link com as versões completa - https://pt.wikipedia.org/wiki/Angular_(framework)


### O que é o Angular?
- É um framework para criação de aplicações web, mobile e desktop.
- É desenvolvida pela Google e é multiplataforma.
- Recorre ao uso de HTML e JavaScript/TypeScript.
- Está intimamente relacionada com a criação de SPAs, PWAs, ...
- Permite criar aplicações mobile (Ionic, NativeScript, React Native, ...)...
- Permite criar aplicações desktop multiplataforma.
- Geração automática de código (CLI - command line interface).
- Forte solução de visualização para aplicações com lógica no servidor.
- É uma framework direcionada para a vertente do cliente.


### O que vamos fazer?
- Instalar o editor de código - Visual Studio Code.
- Instalar o NodeJs para ter acesso ao NPM.
- Instalar o Angular CLI.
- Instalar globalmente a framework.
- Criar o nosso primeiro projeto.


### Instalações Essências.
- Visual Studio Code - https://code.visualstudio.com/
- NodeJs - https://nodejs.org/en/
- AngularJs - https://angular.io/cli

### Comandos para a criação do projeto.
- npm install -g @angular/cli

### 3 - Criação do primeiro projeto de Angular.
- cd Angular-js-basic
- ng new primeiro_projeto

### Rodar o projeto.
- ng serve

### 4 - Breve análise sobre a forma como o Angular funciona.
- Extensões no vs-code
- vscode-icons

### 5 - Criando o nosso primeiro Component.
- Ex webapp-002

### 6 - Exercício prático de criação de Components.
- 1. Remover o componente do exercício anterior.
- 2. Adicionar dois novos componentes (area1 e area2).
- 3. Colocar esses dois componentes visíveis na aplicação.


- Bónus. No componente area2, criar ficheiro de CSS com formatação
- de um Div com cor amarela de background e padding de 20px.

- Ex webapp-002

### 7 - Criar Components com a CLI.
- Ex webapp-003

- ng generate component my_component
## Outra forma
- ng g c my_component

### 8 - Nesting Components e Component Templates.
- Ex webapp-004 via cdn
- ng generate component socio
- ng generate component clube

### 9 - Utilizar o Bootstrap no Angular.
- Ex webapp-005 - por CDN
- Site do Bootstrap - https://getbootstrap.com/docs/5.1/getting-started/introduction/

- Ex webapp-006 - Por Downloads
- Downloads - https://getbootstrap.com/docs/5.1/getting-started/download/ 

- Ex webapp-007 - Por CLI Bootstrap
- npm install --save bootstrap


### 10 - Utilização de CSS nos Components.
- Ex webapp-008 + Bootstrap + css
- Ex webapp-009 + Bootstrap + css

### 11 - Uma atenção especial ao elemento Selector.
- Ex webapp-010
- selector: 'app-root', -> Cria um elemento novo no HTML
- selector: '[app-root]', -> Cria um novo no atributo para adicionar ao HTML

- Ex webapp-011
- selector: '.app-root', -> Cria um componente que funciona como uma classe

### 12 - Databinding String Interpolation.
- Ex webapp-012

### 13 - Databinding Property binding.
- Ex webapp-013

### 14 - Databinding Event binding.
- Ex webapp-014

### HTML Events List
- Global Event Attributes
- Site - https://www.w3schools.com/tags/ref_eventattributes.asp

### 15 - Exercício prático de Databinding.
- Criar três botões, 1* ativa e inativa, 2* altera o texto dos botões para "..."
- 3* colocar o texto original nos botões.
- Ex webapp-015

### 16 - Event binding e o $event.
- Ex webapp-016

### 17 - Event binding e o $event - parte 2.
- Ex webapp-017 *

### 18 - Databinding nos dois sentidos.
- Ex webapp-018

### 19 - Introdução às Directives.
- Ex webapp-019

### 20 - Directive ngIf com uma condição Else.
- Ex webapp-020


