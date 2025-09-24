# Custom node n8n: Random

## Descrição

Conector (node) personalizado para a plataforma n8n chamado **Random** que permite gerar um número aleatório utilizando a API do [Random.org](https://www.random.org/). Possui a operação **True Random Number Generator* com inputs de números mínimo e máximo (inteiros) para retornar um número aleatório entre eles (com ambos inclusos).


Desenvolvido como parte de um desafio técnico, contemplando:

- Node.js + TypeScript (v22 LTS)
- Docker compose para subir o n8n + instância Postgres para o n8n
- Criação e configuração de conector personalizado



---


## Instalação e execução


### 1. Instalação das dependências

- Baixe e instale o Node.js v22 (LTS)
- Docker e Docker Compose: baixe o Docker Desktop (Windows) ou Docker Engine + Docker Compose (linux) e execute

### 2. Clonar o repositório
```
git clone https://github.com/caiopgaspar/custom-node-random.git
```
---

### 3. Instalar dependências do Node (caso queira alterar o node)
Abra o terminal na pasta custom_nodes/Random e rode o comando:
```
npm install
```
O arquivo .js já está incluído no repositório, então não é necessário compilar o TypeScript para usar o node.
Caso queira modificar algo  no node, é preciso recompilar rodando o seguinte comando:
```
tsc Random.node.ts --module commonjs --target es6
```

---
### 4. Subir a infraestrutura via Docker Compose, executando localmente
Abra o terminal na pasta raiz do projeto e rode o comando:
```
docker-compose up -d
```
Isso vai subir o n8n e o PostgreSQL configurado para n8n localmente

---

### 5. Acessar n8n e criar um workflow com o conector Random

Abra no navegador: http://localhost:5678

Na interface do n8n, crie o usuário e faça login

Crie um workflow (botão Create Workflow) e adicione o node (botão "+") buscando pelo nome: **Random**

O node possui ícone e nomes amigáveis, que deixam a interface intuitiva

---
### 6. Executar e testar o node

Coloque valores inteiros nos campos Min e Max

Clique para executar

O output deve ser um número aleatório entre os valores mínimo e maximo informados


