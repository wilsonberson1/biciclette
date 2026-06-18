import { NextResponse } from 'next/server';

const AMAZON_TAG = process.env.AMAZON_TRACKING_ID || "biciclette20-20";
const MERCADO_LIVRE_CLIENT_ID = process.env.ML_CLIENT_ID || "exemplo";

export async function GET(request) {
  const produtosBuscados = [
    {
      id: "ml-1029",
      titulo: "Bicicleta Aro 29 Mountain Bike Alumínio 21v",
      preco: 1299.00,
      imagem: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
      linkOriginal: "https://www.mercadolivre.com.br/p/MLB123456",
      origem: "Mercado Livre"
    },
    {
      id: "amzn-405",
      titulo: "Capacete Ciclismo com Sinalizador de Led Mtb",
      preco: 89.90,
      imagem: "https://images.unsplash.com/photo-1557167173-3b52a8293301?w=500",
      linkOriginal: "https://www.amazon.com.br/dp/B07XJ88XYZ",
      origem: "Amazon"
    }
  ];

  const produtosComSeuLink = produtosBuscados.map(produto => {
    let linkAfiliado = produto.linkOriginal;
    if (produto.origem === "Amazon") {
      linkAfiliado = `${produto.linkOriginal}?tag=${AMAZON_TAG}`;
    } else if (produto.origem === "Mercado Livre") {
      linkAfiliado = `https://click.linksynergy.com/deeplink?id=${MERCADO_LIVRE_CLIENT_ID}&murl=${encodeURIComponent(produto.linkOriginal)}`;
    }
    return { ...produto, linkAfiliado };
  });

  return NextResponse.json({ 
    sucesso: true, 
    produtosProcessados: produtosComSeuLink.length,
    dados: produtosComSeuLink 
  });
}