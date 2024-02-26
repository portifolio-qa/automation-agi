# Project - Automação Agi

Este projeto, foi desenvolvido para o cliente Agi Bank. 

## Requisitos:

- Aplicação: https://blogdoagi.com.br/
- Considerando a pesquisa de artigos do blog (lupa no canto superior esquerdo):
- Mínimo dois cenários mais relevantes para a automação;

  - **TC001** - Validar que ao pesquisar pelo artigo vaga. O sistema deve retornar com a mensagem: "Search Results for: vagas"
  - **TC002** - Validar que ao pesquisar um artigo inexistente no blog, o sistem deve retornar a seguinte mensagem "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras."

- Liguagem de livre escolha. Foi escolhido o framework Cypress, por ser multiplataforma e multibrowser e também, pela compatibilidade da linguagem de front end, utilizada no cliente Agi ReactJs.
- Criar repositório GitHub (público) com o código disponível para avaliação;
- Boas práticas são bem vindas;
- Instruções necessárias para executar o projeto;
- Código executável multiplataforma;
- Pipeline (Jenkins, GitHub Actions, GitLab CI/CD);
  
# Técnicas de testes escolhida:

O projeto de teste apresenta as seguintes tecnologias:

- Desenvolvido multiplataforma;
- Cypress: framework de testes;
- Desing Patterns: Page Objects;
- Testes contínuos: Github Actions

# Justificativa das tecnologias do projeto:

 As seguintes tecnologias foram escolhidas, devido a facilidade para utilizar o projeto com CI (integração contínua) e para ser executado multiplataforma (Linux/Windows/MacOs), outro ponto a ser considerado foi a arquitetura do framework, que facilita lidar com pontos chaves problematicos em outras ferramentas de automação, como a inscossistencia e indisponibilidade dos elementos.
 O projeto se adapta para qualquer linguagem;

# Estrutura do Projeto:


# Execuçao do projeto:

* Gitclone: https://github.com/portifolio-qa/automation-agi.git

### Comandos:

* yarn cypress open (roda na interface gráfica)
* yarn cypress run (roda em modo heandless)
* yarn cypress run --browser chrome (informe o browser que deseja rodar)
* yarn allure serve (executa o servidor de relatório)


