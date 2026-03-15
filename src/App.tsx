import React from 'react';
import { motion } from 'motion/react';
import { Code, PenTool, ShoppingCart, Zap, ArrowRight, Instagram, Facebook } from 'lucide-react';

const WKLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* W Shape */}
    <polygon points="0,0 12,0 30,60 48,0 52,0 70,60 88,0 100,0 70,100 50,33.333 30,100" />
    {/* < Shape */}
    <polygon points="140,0 128,0 98,50 128,100 140,100 110,50" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1218] text-[#F2EBE0] font-sans selection:bg-[#F2EBE0] selection:text-[#0B1218]">
      {/* Header (Sticky Glassmorphism) */}
      <header className="fixed top-0 w-full z-50 bg-[#0B1218]/60 backdrop-blur-md border-b border-[#F2EBE0]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <WKLogo className="h-8 w-auto text-[#F2EBE0]" />
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium opacity-80">
            <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
            <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
            <a href="#approach" className="hover:opacity-100 transition-opacity">Approach</a>
          </nav>
          <a href="https://wa.me/919324365638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium border border-[#F2EBE0]/20 px-5 py-2.5 rounded-full hover:bg-[#F2EBE0] hover:text-[#0B1218] transition-all duration-300">
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Chat with Us</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center relative overflow-hidden z-0">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none bg-[#0B1218]">
            <iframe
              src="https://www.youtube.com/embed/WanyfYa1qF0?autoplay=1&mute=1&loop=1&playlist=WanyfYa1qF0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            ></iframe>
          </div>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1218]/80 via-[#0B1218]/60 to-[#0B1218] -z-10 pointer-events-none"></div>

          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2EBE0]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 md:mb-8">
              Digital Excellence, <br className="hidden md:block" /> Crafted for Business.
            </h1>
            <p className="text-base sm:text-lg md:text-2xl opacity-70 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed">
              We engineer elegant, high-performance web solutions that drive growth.
            </p>
            <a href="https://wa.me/919324365638" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 bg-[#F2EBE0] text-[#0B1218] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(242,235,224,0.15)]">
              <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
              Start Your Project
            </a>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section id="approach" className="py-32 md:py-48 px-6 border-t border-[#F2EBE0]/10">
          <div className="max-w-6xl mx-auto text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
            >
              More than just code. <br className="hidden md:block" />
              <span className="opacity-50">We build digital experiences that transform businesses.</span>
            </motion.h2>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="py-32 px-6 border-t border-[#F2EBE0]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Our Expertise</h2>
              <p className="text-base md:text-lg opacity-70 max-w-2xl font-light">Comprehensive digital solutions tailored to elevate your brand and optimize your operations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, title: "Web Development", desc: "High-performance, scalable web applications built with modern frameworks." },
                { icon: PenTool, title: "UI/UX Design", desc: "Intuitive, engaging, and conversion-optimized user interfaces." },
                { icon: ShoppingCart, title: "E-Commerce", desc: "Custom online stores designed to maximize sales and user retention." },
                { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast load times and seamless interactions." }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 border border-[#F2EBE0]/20 rounded-3xl hover:border-[#F2EBE0]/50 transition-colors duration-500 group bg-[#F2EBE0]/[0.02]"
                >
                  <service.icon className="w-8 h-8 mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{service.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed font-light">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="work" className="py-32 px-6 border-t border-[#F2EBE0]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Selected Work</h2>
                <p className="text-base md:text-lg opacity-70 max-w-2xl font-light">A glimpse into our recent digital transformations.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "OneAlexaB",
                  category: "Singer/Songwriter Portfolio",
                  image: "https://onealexab.com/wp-content/uploads/2025/09/received_1137578204374081.jpeg",
                  link: "https://onealexab.com/"
                },
                {
                  title: "Creative Artist World",
                  category: "Artist Management Agency",
                  image: "https://creativeartistworld.net/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-14-at-19.12.09.jpeg",
                  link: "https://creativeartistworld.net/"
                },
                {
                  title: "Dr. Reddy's",
                  category: "Pharmaceutical Company",
                  image: "/drreddys-logo.svg",
                  link: "https://www.drreddys.com/"
                },
                {
                  title: "Springtek",
                  category: "Sleep Solutions",
                  image: "https://springtek.in/cdn/shop/files/springtek-logo-new-purple_9cb7d1dd-8343-4c81-96a2-3059b7f01794.png",
                  link: "https://springtek.in/"
                }
              ].map((project, index) => (
                <motion.a 
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : "_self"}
                  rel={project.link !== "#" ? "noopener noreferrer" : ""}
                  key={index}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative aspect-[4/3] md:aspect-video bg-[#F2EBE0]/5 rounded-3xl overflow-hidden cursor-pointer border border-[#F2EBE0]/10 block"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1218] via-[#0B1218]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                    <p className="text-[#F2EBE0]/60 text-sm font-medium tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{project.category}</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">{project.title}</h3>
                    
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-out flex items-center gap-2 font-medium text-[#F2EBE0]">
                      Visit Website <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* The WhatsApp CTA & Footer */}
        <section className="py-32 md:py-48 px-6 border-t border-[#F2EBE0]/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F2EBE0]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-12 leading-[1.1]"
            >
              Ready to elevate your digital presence? Let's talk directly.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="https://wa.me/919324365638" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 border border-[#F2EBE0] px-6 py-3 md:px-10 md:py-5 rounded-full text-base md:text-lg font-medium hover:bg-[#F2EBE0] hover:text-[#0B1218] transition-all duration-500 group">
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                Message Us on WhatsApp
              </a>
              <p className="mt-8 opacity-50 text-sm font-light tracking-wide">
                Skip the inbox. Get a direct response from our lead developers.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F2EBE0]/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center opacity-80">
            <WKLogo className="h-6 w-auto text-[#F2EBE0]" />
          </div>
          <p className="text-sm opacity-50 font-light">
            &copy; {new Date().getFullYear()} WK Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6 opacity-60">
            <a href="https://www.instagram.com/webkamen" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/profile.php?id=61576799994690" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
