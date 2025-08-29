import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Trophy, 
  Heart, 
  Shield, 
  Target,
  ArrowDown,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Optimize page load
  useEffect(() => {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = 'https://i.imgur.com/ZUWtrQ4.mp4';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Transforme seu filho através do 
              <span className="text-yellow-300"> FUTEBOL</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Com treinos simples em casa, seu filho desenvolve <strong>disciplina</strong>, 
              <strong> confiança</strong> e fortalece o <strong>vínculo familiar</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300" />
                <span className="font-semibold">Método comprovado</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-300" />
                <span className="font-semibold">+5.000 famílias</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="font-semibold">Resultados garantidos</span>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('video')}
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Ver Demonstração Gratuita
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-8 h-8 text-white/70 cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollToSection('video')}
          />
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vídeo: Aula Demonstrativa
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Veja a metodologia em ação
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src="https://i.imgur.com/ZUWtrQ4.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all cursor-pointer">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('method')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Conhecer o Método
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O Método <span className="text-green-600">CAMPEÃO MIRIM</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um sistema completo que transforma crianças através do futebol, 
                desenvolvendo habilidades físicas, mentais e emocionais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Desenvolvimento Técnico</h3>
                <p className="text-gray-600 mb-6">
                  Exercícios progressivos que desenvolvem coordenação, equilíbrio e habilidades com a bola
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inteligência Emocional</h3>
                <p className="text-gray-600 mb-6">
                  Atividades que ensinam autocontrole, resiliência e trabalho em equipe
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Disciplina e Foco</h3>
                <p className="text-gray-600 mb-6">
                  Rotinas estruturadas que criam hábitos positivos e aumentam a concentração
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('offer')}
                className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Ver Oferta Especial
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefícios Comprovados
              </h2>
              <p className="text-xl text-gray-600">
                Veja como o futebol transforma a vida do seu filho
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Autoconfiança",
                  description: "Cada conquista no futebol aumenta a autoestima e confiança da criança"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Socialização",
                  description: "Desenvolve habilidades sociais e capacidade de trabalhar em equipe"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Disciplina",
                  description: "Cria rotinas saudáveis e ensina a importância do comprometimento"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Saúde Física",
                  description: "Melhora coordenação, força, resistência e desenvolvimento motor"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Resiliência",
                  description: "Ensina a lidar com frustrações e superar desafios"
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Liderança",
                  description: "Desenvolve capacidade de liderança e tomada de decisões"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-green-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('offer')}
                className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Ver Oferta Especial
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que os pais estão dizendo
              </h2>
              <p className="text-xl text-gray-600">
                Depoimentos reais de famílias transformadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Maria Silva",
                  text: "Meu filho João era muito tímido. Depois do método, ele se tornou mais confiante e fez novos amigos na escola!",
                  rating: 5
                },
                {
                  name: "Carlos Santos",
                  text: "A disciplina que meu filho desenvolveu no futebol se refletiu nas notas da escola. Estou muito orgulhoso!",
                  rating: 5
                },
                {
                  name: "Ana Costa",
                  text: "Nossos momentos de treino em casa se tornaram os melhores do dia. O vínculo familiar ficou muito mais forte.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('guarantee')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('offer')}
                className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Ver Oferta Especial
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-yellow-300" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia de 30 Dias
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Se você não ver resultados positivos no comportamento e desenvolvimento do seu filho 
              em 30 dias, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Nossa Promessa</h3>
              <p className="text-lg text-green-100">
                Acreditamos tanto no poder transformador do nosso método que assumimos todo o risco. 
                Sua satisfação é nossa prioridade número 1.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('offer')}
                className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
              >
                Garantir Minha Vaga
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 md:py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block mb-8 font-bold text-lg animate-pulse">
              🔥 OFERTA LIMITADA - ÚLTIMAS VAGAS
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforme seu filho HOJE
            </h2>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-2xl font-bold">
                DESCONTO 87%
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-gray-500 text-lg line-through relative">
                      De R$ <span className="relative">
                        225
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded font-bold">
                          97
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-black text-green-600 mb-2">
                    R$ 19,90
                  </p>
                  <p className="text-gray-600 text-lg">
                    Pagamento único • Acesso vitalício
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "✅ Método Campeão Mirim Completo",
                  "✅ 50+ Exercícios Práticos",
                  "✅ Guia para Pais",
                  "✅ Suporte Especializado",
                  "✅ Garantia de 30 dias",
                  "✅ Acesso Vitalício",
                  "✅ Atualizações Gratuitas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center text-lg text-gray-700">
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                🚀 QUERO TRANSFORMAR MEU FILHO AGORA
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Compra 100% Segura e Protegida</span>
              </div>
            </div>

            <div className="text-center text-gray-800">
              <p className="text-lg font-semibold mb-2">
                ⏰ Restam apenas 24 horas para esta oferta
              </p>
              <p className="text-base">
                Não perca a chance de transformar o futuro do seu filho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Futebol Infantil</h3>
            <p className="text-gray-400 mb-6">
              Transformando vidas através do esporte
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Futebol Infantil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;