import './globals.css';

export const metadata = {
  title: 'Biciclette - Ofertas de Ciclismo',
  description: 'As melhores ofertas de bicicletas e acessórios',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased m-0 p-0">
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="text-2xl font-bold tracking-tight text-blue-600">Biciclette<span className="text-gray-500">.cc</span></span>
            <span className="text-xs bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded-full">Atualizado Automaticamente</span>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}