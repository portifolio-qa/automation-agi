# Project - Automação Agi

Este projeto, foi desenvolvido para o cliente Agi Bank. 

## Requisitos:

- Aplicação: https://blogdoagi.com.br/
- Considerando a pesquisa de artigos do blog (lupa no canto superior esquerdo):
- Mínimo dois cenários mais relevantes para a automação;

  - **TC001** - Validar que a aplicação retorna para a página de pesquisa.
  - **TC002** - Validar campo e-mail obrigatório p/ inscrição na Newsletter da página pesquisa.

- Liguagem de livre escolha. Foi escolhido o framework Cypress, por ser multiplataforma e multibrowser e também, pela compatibilidade da linguagem de front end, utilizada no cliente Agi ReactJs.
- Criar repositório GitHub (público) com o código disponível para avaliação;
- Boas práticas são bem vindas;
- Instruções necessárias para executar o projeto;
- Código executável multiplataforma;
- Pipeline (Jenkins, GitHub Actions, GitLab CI/CD);
  
# Técnicas de testes escolhida:

O projeto de teste apresenta as seguintes tecnologias:

- Desenvolvido multiplataforma;
- Cypress.io v12: framework de testes web;
- Desing Patterns: Page Objects;
- Testes contínuos: Github Actions

# Justificativa das tecnologias do projeto:

 As seguintes tecnologias foram escolhidas, devido a facilidade para utilizar o projeto com CI (integração contínua) e para ser executado multiplataforma (Linux/Windows/MacOs), outro ponto a ser considerado foi a arquitetura do framework, que facilita lidar com pontos chaves problematicos em outras ferramentas de automação, como a inscossistencia e indisponibilidade dos elementos.
 O projeto se adapta para qualquer linguagem;

# Estrutura do Projeto:

<img src="image/README/icon_folder.png"/> **Automation-Front-end-Agii:** Pasta principal do projeto

<img src="image/README/icon_folder.png"/> **cypress:** Pasta do framework Cypress

<img src="image/README/icon_folder.png"/> ***e2e***: Arquivos de teste


<img src="image/README/icon_folder.png"/> **pages:** Padrão page objects

<img src="image/README/icon_folder.png"/> **screenshots:** Evidências (prints) dos testes que falharam

<img src="image/README/icon_folder.png"/> **suport:** Pasta default do cypress para comandos e configurações

<img src="image/README/icon_folder.png"/> **videos:** Evidências dos testes em videos dos testes

<img src="image/README/javascript_icon_.png"/> **Arquivo cypress.json:** Configurações para executar o projetos browser

<img src="image/README/javascript_icon_.png"/> **Arquivo [commandjs]**(https://docs.cypress.io/api/table-of-contents "Doc Comandos Cypress"): Comandos do cypress

<img src="image/README/javascript_icon_.png"/> **Arquivo e2e:** Primeiro arquivo carregado do cypress, tudo que precisa antes rodar os testes

<img src="image/README/javascript_icon_.png"/> **pakage.json:** Arquivo Informações do projeto


<img src="image/README/md_file_icon_.png"/> **README.md:** Documentação do Projeto

# Execuçao do projeto:

* Gitclone: https://github.com/portifolio-qa/automation-agi.git

### Comandos:

* yarn cypress open (roda na interface gráfica)
* yarn cypress run (roda em modo heandless)
* yarn cypress run --browser chrome (informe o browser que deseja rodar)
* yarn allure serve (executa o servidor de relatório)


