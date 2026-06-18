import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Search, ShoppingBag, Star, ShieldCheck, Zap, Bike } from 'lucide-react'
import { products } from './products'
import './style.css'

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))]

  const filtered = useMemo(() => products.filter(p => {
    const text = `${p.name} ${p.category} ${p.description} ${p.marketplace}`.toLowerCase()
    return (category === 'Todos' || p.category === category) && text.includes(search.toLowerCase())
  }), [search, category])

  return <main>
    <section className="hero">
      <nav>
        <div className="brand"><Bike size={28}/> Biciclette Produtos</div>
        <a className="nav-cta" href="#produtos">Ver ofertas</a>
      </nav>
      <div className="hero-grid">
        <div>
          <p className="eyebrow">curadoria de afiliados para ciclismo</p>
          <h1>Produtos bons para pedalar melhor, comprar melhor e evitar cilada.</h1>
          <p className="lead">Uma vitrine simples e direta com acessórios, eletrônicos, ferramentas e equipamentos selecionados para ciclistas.</p>
          <div className="hero-actions">
            <a href="#produtos" className="button primary">Explorar produtos</a>
            <a href="#como-funciona" className="button secondary">Como funciona</a>
          </div>
        </div>
        <div className="hero-card">
          <Star />
          <h3>Escolhas do Julio</h3>
          <p>Produtos úteis para estrada, treino solo, segurança e manutenção básica.</p>
          <div className="mini-stats"><span>Amazon</span><span>Mercado Livre</span><span>Afiliados</span></div>
        </div>
      </div>
    </section>

    <section className="benefits" id="como-funciona">
      <div><ShieldCheck/><h3>Curadoria</h3><p>Produtos organizados por uso real no ciclismo.</p></div>
      <div><Zap/><h3>Links rápidos</h3><p>Botões diretos para Amazon e Mercado Livre.</p></div>
      <div><ShoppingBag/><h3>Afiliados</h3><p>Você compra no marketplace e o site pode receber comissão.</p></div>
    </section>

    <section className="products-section" id="produtos">
      <div className="section-title">
        <p className="eyebrow">vitrine</p>
        <h2>Produtos em destaque</h2>
      </div>
      <div className="toolbar">
        <div className="search"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar produto, categoria ou marketplace..." /></div>
        <div className="chips">{categories.map(c => <button className={category===c ? 'active' : ''} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div>
      </div>
      <div className="grid">
        {filtered.map(product => <article className="product" key={product.id}>
          <img src={product.image} alt={product.name}/>
          <div className="product-body">
            <div className="meta"><span>{product.category}</span><strong>{product.marketplace}</strong></div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="bottom"><span className="badge">{product.badge}</span><a href={product.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer">Comprar</a></div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="notice">
      <strong>Aviso de afiliado:</strong> alguns links podem gerar comissão para o Biciclette, sem custo adicional para você. Os preços e disponibilidade devem ser confirmados no marketplace.
    </section>

    <footer>Biciclette Produtos · Curadoria independente de produtos para ciclismo</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
