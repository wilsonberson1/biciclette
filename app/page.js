import { ShoppingBag } from 'lucide-react';

const produtosExemplo = [
  {
    id: "ml-1029",
    titulo: "Bicicleta Aro 29 Mountain Bike Alumínio 24v Freio Hidráulico",
    preco: "1.420,00",
    imagem: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
    linkAfiliado: "https://www.mercadolivre.com.br/", 
    origem: "Mercado Livre"
  },
  {
    id: "amzn-405",
    titulo: "Capacete Ciclismo Premium Mtb com Led Traseiro",
    preco: "119,90",
    imagem: "https://images.unsplash.com/photo-1557167173-3b52a8293301?w=500",
    linkAfiliado: "https://www.amazon.com.br/",
    origem: "Amazon"
  }
];

export default function Home() {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
          Ofertas de Ciclismo Selecionadas
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Preços atualizados em tempo real direto do Mercado Livre e da Amazon.
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
        {produtosExemplo.map((produto) => (
          <div key={produto.id} className="bg-white border rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <div className="w-full h-56 bg-gray-200 rounded-xl overflow-hidden mb-4">
                <img src={produto.imagem} alt={produto.titulo} className="w-full h-full object-center object-cover" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-2 ${
                  produto.origem === 'Amazon' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {produto.origem}
                </span>
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                  {produto.titulo}
                </h3>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-baseline mb-4" style={{display: 'flex', alignItems: 'baseline', marginBottom: '16px'}}>
                <span className="text-sm font-semibold text-gray-500 mr-1">R$</span>
                <span className="text-2xl font-bold text-gray-900">{produto.preco}</span>
              </div>
              <a
                href={produto.linkAfiliado}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-blue-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                style={{display: 'block', width: '100%', textAlign: 'center'}}
              >
                Ver melhor preço
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}