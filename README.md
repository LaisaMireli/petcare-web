# PetCare Web

Interface de usuário do sistema PetCare, focada na gestão ágil e visual da saúde e rotina de animais de estimação.

## Pré-requisitos

É necessário ter o Node.js instalado na máquina. 
**Atenção:** É estritamente necessário que a API do PetCare (Back-end) já esteja rodando simultaneamente em outro terminal para que a interface consiga buscar e salvar os dados reais no banco de dados.

## Como executar o projeto

**Passo 1: Clone o repositório e acesse a pasta**
Execute o comando `git clone https://github.com/LaisaMireli/petcare-web.git` no seu terminal e entre na pasta digitando `cd petcare-web`.

**Passo 2: Instale as dependências**
Na raiz do projeto, execute o comando abaixo para baixar todos os pacotes necessários da aplicação:
`npm install`

**Passo 3: Inicie a aplicação**
Com as dependências devidamente instaladas, rode o servidor de desenvolvimento:
`npm run dev`

O terminal informará em qual porta local a aplicação está rodando (geralmente `http://localhost:3000`. Acesse o link informado no navegador para visualizar o sistema operando integrado com a API.