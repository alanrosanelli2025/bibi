# Aplicação VTEX Orders

Este projeto fornece um pequeno script Node.js para se conectar à API da VTEX e obter informações de pedidos.

## Pré-requisitos

- Node.js 14 ou superior
- Credenciais de acesso à API da VTEX (AppKey e AppToken)

## Instalação

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
VTEX_ACCOUNT=<sua-conta>
VTEX_APPKEY=<seu-app-key>
VTEX_APPTOKEN=<seu-app-token>
# Opcional: ambiente, padrao vtexcommercestable
VTEX_ENVIRONMENT=vtexcommercestable
```

## Uso

Execute o script para listar pedidos:

```bash
node index.js
```

O resultado será exibido no terminal em formato JSON.

