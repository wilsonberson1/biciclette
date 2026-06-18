# Biciclette Produtos

Site moderno de produtos afiliados para Amazon e Mercado Livre.

## Como editar produtos
Abra `src/products.js` e troque:
- `name`
- `category`
- `marketplace`
- `description`
- `image`
- `affiliateUrl`

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicar no Vercel
1. Suba esta pasta para um repositório GitHub.
2. Importe no Vercel.
3. Configure o domínio `produtos.biciclette.cc` apontando para o projeto.

## Próxima evolução
- Integração com Amazon Product Advertising API.
- Integração/rotina de importação Mercado Livre.
- Painel admin simples para cadastrar produtos sem mexer no código.
