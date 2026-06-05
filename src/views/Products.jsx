import React from 'react';
import SEO from '../components/SEO';
import productsData from '../data/products.json';

export default function Products() {
  return (
    <div className="bg-white">
      <SEO 
        title={productsData.seo.title}
        description={productsData.seo.description}
        keywords={productsData.seo.keywords}
      />
      {/* Intro Section */}
      <section className="py-20 md:py-14 bg-brand-bg-muted">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="max-w-[900px]">
            <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-brand-accent mb-2 block">
              {productsData.intro.subtitle}
            </span>
            <h1 className="text-4xl sm:text-[3.5rem] font-bold leading-tight text-brand-primary mb-6">
              {productsData.intro.title}
            </h1>
            <p className="text-[1.25rem] text-gray-500 leading-relaxed">
              {productsData.intro.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Core Products Showcase (Alternating Layout) */}
      <section className="pb-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-8">
          {productsData.coreProducts.map((product) => (
            <div 
              key={product.index} 
              className={`group grid grid-cols-1 items-center py-12 border-b border-brand-border last:border-b-0 gap-10 lg:gap-20 ${
                product.alignLeft ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'
              }`}
            >
              {/* Product Image Wrapper */}
              <div className={`aspect-[16/10] bg-brand-bg-muted overflow-hidden border border-brand-border rounded-sm w-full ${
                product.alignLeft ? '' : 'lg:order-2'
              }`}>
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
              </div>

              {/* Product Info Panel */}
              <div className={`flex flex-col items-start py-4 ${
                product.alignLeft ? '' : 'lg:order-1'
              }`}>
                <span className="text-[0.75rem] font-bold text-brand-accent tracking-wider mb-4 font-sans">{product.index}</span>
                <h2 className="text-3xl sm:text-[2.25rem] font-bold text-brand-primary leading-tight mb-5">{product.title}</h2>
                <p className="text-[1.05rem] text-gray-500 leading-relaxed">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Products Section */}
      <section className="py-20 md:py-14 bg-brand-bg-muted border-t border-brand-border">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-4xl font-bold leading-snug text-brand-primary">{productsData.otherProducts.title}</h2>
            <p className="text-[1.1rem] text-gray-500 mt-4 max-w-[600px]">
              {productsData.otherProducts.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.otherProducts.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-brand-border rounded-sm p-8 flex items-center gap-4 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-primary-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></span>
                <h4 className="text-[0.95rem] font-semibold text-brand-primary leading-snug">{item}</h4>
              </div>
            ))}
            {/* Blank Placeholder card to align 3x2 grid as shown in screenshots */}
            <div className="hidden lg:flex bg-transparent border-none pointer-events-none p-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
