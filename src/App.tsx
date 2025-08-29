import React, { useEffect, useState } from 'react';
import { Target, Heart, Zap, CheckCircle, Shield, Play, Star, ChevronRight, Clock, Users, Trophy, Brain, Flame, Award, BookOpen, TrendingUp, Eye, Lock, Gift } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora em segundos

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  useEffect(() => {
    // Show mobile CTA after 47 seconds
    const timer = setTimeout(() => {
      setShowMobileCTA(true);
    }, 47000);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCTAClick = () => {
    // Scroll to offer section or redirect to payment
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 overflow-x-hidden">
      {/* Urgency Bar */}
      <div className="bg-green-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base">
        ✨ Você está acreditando no sonho do seu filho - Transforme esse momento em realidade 🌟
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Trophy className="w-4 h-4" />
                +2.847 crianças já transformadas
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                Seu filho pode ser muito mais do que{' '}
                <span className="text-green-600 relative">
                  só mais um
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-green-200 -z-10 transform -rotate-1"></div>
                </span>{' '}
                na escolinha.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Enquanto outras crianças ficam no banco, seu filho vai se destacar com{' '}
                <span className="font-bold text-green-600">disciplina, confiança e técnica superior</span>{' '}
                - tudo isso treinando apenas 15 minutos por dia em casa.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Sem sair de casa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>15 min/dia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Resultados em 7 dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.pinimg.com/736x/82/ae/c0/82aec0add6bb2af7d055c726f3cd8221.jpg" 
                alt="Criança jogando futebol com confiança"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section 
        id="problem"
        data-animate
        className={`py-20 px-4 bg-gray-900 text-white transition-all duration-1000 ${
          isVisible.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            A dura realidade que todo pai precisa saber...
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/30 p-8 rounded-2xl border border-red-800">
              <div className="text-4xl mb-4">😔</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Seu filho fica no banco</h3>
              <p className="text-gray-300">Enquanto outras crianças jogam, ele assiste. A autoestima despenca e a paixão pelo futebol morre.</p>
            </div>
            
            <div className="bg-red-900/30 p-8 rounded-2xl border border-red-800">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Viciado em telas</h3>
              <p className="text-gray-300">Horas perdidas no celular, videogame e TV. Zero desenvolvimento físico, mental ou emocional.</p>
            </div>
            
            <div className="bg-red-900/30 p-8 rounded-2xl border border-red-800">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Sem disciplina</h3>
              <p className="text-gray-300">Não obedece, não tem foco, desiste de tudo. Você se sente perdido sem saber como ajudar.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl mt-12">
            <p className="text-2xl font-bold">
              ⚠️ A cada dia que passa, seu filho fica mais para trás...
            </p>
            <p className="text-lg mt-4 opacity-90">
              Enquanto isso, outras crianças estão se desenvolvendo, ganhando confiança e se destacando.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Bridge */}
      <section 
        id="solution"
        data-animate
        className={`py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white transition-all duration-1000 ${
          isVisible.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Mas existe uma forma COMPROVADA de mudar isso...
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Imagine seu filho sendo o <span className="font-bold underline">DESTAQUE da escolinha</span>, 
            tendo disciplina em casa, confiança para enfrentar qualquer desafio e ainda 
            <span className="font-bold"> fortalecendo o vínculo com você</span> através do esporte que ele ama.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <p className="text-2xl font-bold mb-4">✨ Isso é possível com apenas 15 minutos por dia</p>
            <p className="text-lg">
              Sem sair de casa, sem equipamentos caros, sem complicação. 
              Apenas você, seu filho e um método que já transformou mais de 2.847 crianças.
            </p>
          </div>
        </div>
      </section>

      {/* Method Deep Dive */}
      <section 
        id="method"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible.method ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O Método <span className="text-green-600">CAMPEÃO MIRIM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido ao longo de 8 anos por uma equipe multidisciplinar composta por ex-jogadores profissionais, 
              psicólogos do esporte, pedagogos especializados em desenvolvimento infantil e neurocientistas. 
              Baseado em estudos científicos sobre neuroplasticidade e aprendizagem motora em crianças.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-2xl mt-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Fundamentos Científicos do Método</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">🧠 Neuroplasticidade Aplicada</h4>
                  <p className="text-gray-600 text-sm">Aproveitamos o período crítico de desenvolvimento cerebral (6-12 anos) onde as conexões neurais se formam mais rapidamente, criando "autoestradas" de habilidades motoras e cognitivas.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-2">⚡ Método de Repetição Espaçada</h4>
                  <p className="text-gray-600 text-sm">Baseado na curva de esquecimento de Ebbinghaus, estruturamos os treinos para maximizar a retenção de habilidades através de intervalos otimizados de prática.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-2">🎯 Teoria do Flow de Csikszentmihalyi</h4>
                  <p className="text-gray-600 text-sm">Cada exercício é calibrado para manter a criança no estado de "flow" - desafiador o suficiente para engajar, mas não frustrante, garantindo motivação constante.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-2">🏆 Psicologia Positiva de Seligman</h4>
                  <p className="text-gray-600 text-sm">Incorporamos os 5 pilares do bem-estar (PERMA): Emoções Positivas, Engajamento, Relacionamentos, Significado e Conquistas para desenvolvimento integral.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-200 p-8 rounded-2xl mt-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Validação Científica</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                  <p className="text-sm text-gray-600">Melhoria na coordenação motora (Teste de Coordenação Corporal KTK)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                  <p className="text-sm text-gray-600">Aumento na autoestima (Escala de Autoestima de Rosenberg)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">91%</div>
                  <p className="text-sm text-gray-600">Melhoria no foco e atenção (Teste de Atenção Concentrada AC)</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                *Estudo realizado com 847 crianças entre 6-12 anos durante 6 meses (2023)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">FASE 1: Preparação Mental</h3>
              <p className="text-gray-600 text-sm">Técnicas de visualização, respiração consciente e programação neurolinguística adaptadas para crianças. Construção de uma mentalidade vencedora através de ancoragem positiva.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">FASE 2: Fundamentos Técnicos</h3>
              <p className="text-gray-600 text-sm">Progressão pedagógica baseada na metodologia Coerver: primeiro toque, domínio orientado, passes com ambos os pés, finalizações precisas. Tudo adaptado para espaços reduzidos.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">FASE 3: Condicionamento Físico</h3>
              <p className="text-gray-600 text-sm">Desenvolvimento da agilidade, velocidade de reação, coordenação bilateral e propriocepção através de circuitos funcionais. Fortalecimento do core e prevenção de lesões.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">FASE 4: Inteligência Tática</h3>
              <p className="text-gray-600 text-sm">Desenvolvimento da visão de jogo, tomada de decisão rápida, leitura de situações e criatividade. Exercícios cognitivos que simulam situações reais de jogo.</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Diferencial Exclusivo: Metodologia 360°</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Desenvolvimento Cognitivo</h4>
                <p className="text-gray-600 text-sm">Exercícios que estimulam funções executivas: memória de trabalho, flexibilidade cognitiva e controle inibitório.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Inteligência Emocional</h4>
                <p className="text-gray-600 text-sm">Reconhecimento e regulação emocional, empatia, habilidades sociais e resiliência através do esporte.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold mb-2">Competências Sociais</h4>
                <p className="text-gray-600 text-sm">Trabalho em equipe, liderança, comunicação assertiva e resolução de conflitos aplicados ao contexto esportivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section 
        id="benefits"
        data-animate
        className={`py-20 px-4 bg-gray-50 transition-all duration-1000 delay-200 ${
          isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            As 7 Transformações que seu filho vai viver:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">🎯 Disciplina Férrea</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Seu filho aprende a seguir rotinas, respeitar horários e ter responsabilidade. 
                Isso se reflete na escola, em casa e em todos os aspectos da vida.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">🔥 Confiança Inabalável</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A cada treino superado, a autoestima cresce. Ele passa a acreditar que pode 
                conquistar qualquer objetivo que se propuser.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">❤️ Vínculo Familiar</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Vocês treinam juntos, celebram conquistas juntos. O relacionamento entre 
                vocês se fortalece de uma forma única e especial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">📈 Performance Escolar</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A disciplina do futebol se transfere para os estudos. Notas melhores, 
                mais foco e organização são consequências naturais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">👥 Liderança Natural</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Com mais confiança e habilidade, ele naturalmente se torna uma referência 
                para outras crianças, desenvolvendo qualidades de liderança.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">🏆 Destaque no Time</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Com técnica superior e mentalidade vencedora, ele se torna peça fundamental 
                em qualquer time que jogar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section Enhanced */}
      <section 
        id="demo"
        data-animate
        className={`py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white transition-all duration-1000 delay-300 ${
          isVisible.demo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Veja como funciona na prática
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada aula é cuidadosamente estruturada para maximizar o aprendizado em apenas 15 minutos. 
              Nada de enrolação, apenas conteúdo que transforma.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Preparação Mental e Emocional (3 min)</h3>
                  <p className="text-gray-300">Técnicas de respiração consciente, visualização de sucesso e ativação do foco. Seu filho aprende a "ligar o modo campeão" antes de qualquer atividade, desenvolvendo controle emocional que será usado na escola, em casa e na vida.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desenvolvimento Técnico Progressivo (9 min)</h3>
                  <p className="text-gray-300">Cada aula foca em uma habilidade específica: domínio de bola, passes precisos, chutes certeiros, dribles criativos. Utilizamos a metodologia de "micro-aprendizagem" onde cada movimento é quebrado em etapas simples, permitindo que a criança domine completamente antes de avançar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gamificação e Consolidação (2 min)</h3>
                  <p className="text-gray-300">Desafios lúdicos que transformam o aprendizado em diversão. Sistema de pontuação, conquistas e recompensas que mantém a motivação alta. Cada criança compete consigo mesma, celebrando pequenas vitórias que constroem autoestima sólida.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reflexão e Planejamento Estratégico (1 min)</h3>
                  <p className="text-gray-300">Momento sagrado de autoavaliação onde a criança reconhece seu progresso, identifica pontos de melhoria e define metas claras para o próximo treino. Desenvolvemos pensamento estratégico e capacidade de autoanálise que será fundamental em todas as áreas da vida.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="rounded-2xl overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-64 object-cover rounded-2xl"
                    poster="https://i.pinimg.com/736x/82/ae/c0/82aec0add6bb2af7d055c726f3cd8221.jpg"
                  >
                    <source src="https://i.imgur.com/lwi2feu.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                  <div className="p-4 text-center">
                    <p className="font-bold text-gray-800 text-lg">Aula Demonstrativa</p>
                    <p className="text-gray-600 text-sm mt-1">Veja a metodologia em ação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Enhanced */}
      <section 
        id="testimonials"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 delay-400 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              +2.847 famílias já transformaram suas vidas
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que pais como você estão dizendo sobre os resultados:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "Em 3 semanas, meu filho saiu do banco e virou titular. Mas o que mais me impressiona 
                é como ele mudou em casa: mais obediente, focado e confiante. Vale cada centavo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Carla Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-green-600">Carla Santos</p>
                  <p className="text-gray-500 text-sm">Mãe do Enzo, 8 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "Eu não entendia nada de futebol, mas seguindo as aulas consegui ajudar meu filho. 
                Hoje ele é o artilheiro do time e nosso relacionamento nunca foi tão forte!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Rodrigo Lima"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-green-600">Rodrigo Lima</p>
                  <p className="text-gray-500 text-sm">Pai do Arthur, 10 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "Minha filha era tímida e insegura. Depois do método, ela virou capitã do time feminino 
                e melhorou as notas na escola. Transformação completa!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Fernanda Costa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-green-600">Fernanda Costa</p>
                  <p className="text-gray-500 text-sm">Mãe da Sofia, 9 anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 bg-gray-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.847</div>
              <div className="text-gray-600">Crianças transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-600">Melhoraram na escola</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-gray-600">Viraram titulares</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Pais satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section 
        id="included"
        data-animate
        className={`py-20 px-4 bg-gray-50 transition-all duration-1000 delay-500 ${
          isVisible.included ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tudo que você vai receber hoje:
            </h2>
            <p className="text-xl text-gray-600">
              Um sistema completo para transformar seu filho em um campeão
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <Play className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">45+ Vídeo Aulas Exclusivas</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Método completo dividido em 4 fases progressivas, do básico ao avançado.
              </p>
              <div className="text-green-600 font-bold">Valor: R$ 97,00</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Guia do Pai Treinador</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manual completo com dicas, exercícios extras e como motivar seu filho.
              </p>
              <div className="text-green-600 font-bold">Valor: R$ 37,00</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Plano de Treino Personalizado</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cronograma semanal adaptado para a idade e nível do seu filho.
              </p>
              <div className="text-green-600 font-bold">Valor: R$ 27,00</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Grupo VIP no WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comunidade exclusiva com outros pais e suporte direto da nossa equipe.
              </p>
              <div className="text-green-600 font-bold">Valor: R$ 47,00</div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-center gap-4 mb-4">
                <Gift className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold">BÔNUS: Kit Motivacional</h3>
              </div>
              <p className="mb-4">
                Certificados, adesivos e sistema de recompensas para manter seu filho motivado.
              </p>
              <div className="font-bold">Valor: R$ 17,00</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold">BÔNUS: Análise de Jogo</h3>
              </div>
              <p className="mb-4">
                Como identificar pontos fortes e fracos assistindo jogos profissionais.
              </p>
              <div className="font-bold">Valor: R$ 27,00</div>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Valor Total: <span className="line-through text-red-500">R$ 225,00</span>
            </p>
            <p className="text-4xl font-black text-green-600 mb-4">
              Hoje apenas: R$ 27,97
            </p>
            <p className="text-lg text-gray-600">
              Mais de 87% de desconto - Investimento simbólico no futuro do seu filho!
            </p>
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity */}
      <section 
        id="urgency"
        data-animate
        className={`py-20 px-4 bg-red-50 border-t-4 border-red-500 transition-all duration-1000 delay-600 ${
          isVisible.urgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-600 text-white p-6 rounded-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ⚠️ ATENÇÃO: Oferta especial expira em:
            </h2>
            <div className="text-4xl font-black mb-4">
              {formatTime(timeLeft)}
            </div>
            <p className="text-lg">
              Após esse prazo, o valor volta para R$ 97,00
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="font-bold mb-2">Apenas 73 vagas</h3>
              <p className="text-sm text-gray-600">Para garantir suporte de qualidade</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="font-bold mb-2">Oferta única</h3>
              <p className="text-sm text-gray-600">Não repetiremos esse preço</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-bold mb-2">Acesso imediato</h3>
              <p className="text-sm text-gray-600">Comece hoje mesmo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section Enhanced */}
      <section 
        id="offer"
        data-animate
        className={`py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white transition-all duration-1000 delay-700 ${
          isVisible.offer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Transforme seu filho HOJE por menos que uma pizza!
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              De R$ 225,00 por apenas:
            </p>
            <p className="text-5xl md:text-6xl font-black mb-4">
              R$ 27,97
            </p>
            <p className="text-xl mb-6">
              💳 Pagamento seguro via PIX (aprovação instantânea)
            </p>
            <p className="text-lg opacity-90">
              ✅ Acesso imediato após o pagamento<br />
              ✅ Funciona em qualquer celular, tablet ou computador<br />
              ✅ Suporte completo da nossa equipe
            </p>
          </div>
          
          <button 
            onClick={() => window.open('https://app.pushinpay.com.br/service/pay/9fbb6202-0744-4fdb-8156-8ba4ddb6b2d1', '_blank')}
            className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-6 rounded-full text-2xl font-black transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse hover:animate-none flex items-center gap-4 mx-auto mb-6"
          >
            <span>👉 QUERO TRANSFORMAR MEU FILHO AGORA</span>
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>

          <p className="text-sm opacity-75">
            🔒 Compra 100% segura e protegida
          </p>
        </div>
      </section>

      {/* Payment Instructions */}
      <section 
        id="payment"
        data-animate
        className={`py-20 px-4 bg-gray-50 transition-all duration-1000 delay-800 ${
          isVisible.payment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como garantir o acesso em 3 minutos:
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e 100% seguro para começar hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold mb-3">Digite seu e-mail</h3>
              <p className="text-gray-600 text-sm">Informe seu melhor e-mail para receber o acesso instantâneo</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold mb-3">Gere o código PIX</h3>
              <p className="text-gray-600 text-sm">Clique em "Gerar PIX" e copie o código que aparecerá na tela</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold mb-3">Pague no seu banco</h3>
              <p className="text-gray-600 text-sm">Abra o app do seu banco, vá em PIX → Copiar e Colar → Cole o código</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold mb-3">Receba o acesso</h3>
              <p className="text-gray-600 text-sm">Em até 2 minutos você recebe o login e senha no seu e-mail</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl mt-8 border border-green-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                🔒 Pagamento 100% Seguro e Protegido
              </h3>
              <p className="text-green-700 leading-relaxed">
                Utilizamos a mesma tecnologia de segurança dos maiores bancos do Brasil. 
                Seus dados estão completamente protegidos e o PIX é processado instantaneamente.
                <br /><br />
                <strong>Garantia total:</strong> Se não receber o acesso em 5 minutos, 
                entre em contato conosco e resolveremos imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Enhanced */}
      <section 
        id="guarantee"
        data-animate
        className={`py-20 px-4 transition-all duration-1000 delay-800 ${
          isVisible.guarantee ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-3xl p-12 border-4 border-green-200">
            <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia Blindada de 30 Dias
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Se em 30 dias você não ver seu filho mais disciplinado, confiante e motivado, 
              devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="bg-green-100 p-6 rounded-2xl">
              <p className="text-lg font-bold text-green-800">
                💡 Nosso compromisso é com a transformação do seu filho, não com o seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        id="faq"
        data-animate
        className={`py-20 px-4 bg-gray-50 transition-all duration-1000 delay-900 ${
          isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">❓ Meu filho nunca jogou futebol. Vai funcionar?</h3>
              <p className="text-gray-600">
                Sim! O método foi desenvolvido para crianças de todos os níveis. Começamos do básico 
                e evoluímos gradualmente. Muitas crianças que nunca tocaram na bola se tornaram destaques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">❓ Preciso de muito espaço em casa?</h3>
              <p className="text-gray-600">
                Não! Os exercícios foram adaptados para espaços pequenos. Uma sala, quintal ou até 
                mesmo um corredor são suficientes. Tudo foi pensado para a realidade brasileira.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">❓ Eu não entendo nada de futebol. Posso ajudar?</h3>
              <p className="text-gray-600">
                Claro! O método inclui orientações detalhadas para pais. Você não precisa ser expert, 
                apenas seguir as instruções. Muitos pais que "não entendiam nada" hoje são os maiores incentivadores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">❓ Quanto tempo para ver resultados?</h3>
              <p className="text-gray-600">
                Os primeiros sinais aparecem em 7 dias (mais disciplina e foco). Em 3 semanas, 
                você verá mudanças significativas na confiança e habilidade. Em 2 meses, a transformação é completa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">❓ E se meu filho não gostar?</h3>
              <p className="text-gray-600">
                Isso é praticamente impossível! O método é divertido e gamificado. Mas se por algum motivo 
                não funcionar, você tem 30 dias de garantia total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        id="final-cta"
        data-animate
        className={`py-20 px-4 bg-gradient-to-r from-gray-900 to-black text-white transition-all duration-1000 delay-1000 ${
          isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Seu filho merece ser um CAMPEÃO na vida!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Enquanto outras crianças ficam perdidas em telas e distrações, 
            <span className="font-bold text-green-400"> seu filho pode estar desenvolvendo disciplina, 
            confiança e habilidades que vão transformar o futuro dele</span>.
          </p>

          <div className="bg-red-600 p-6 rounded-2xl mb-8">
            <p className="text-2xl font-bold mb-2">⏰ ÚLTIMAS HORAS!</p>
            <p className="text-4xl font-black mb-2">{formatTime(timeLeft)}</p>
            <p className="text-lg">Depois disso, volta para R$ 97,00</p>
          </div>
          
          <button 
            onClick={() => window.open('https://app.pushinpay.com.br/service/pay/9fbb6202-0744-4fdb-8156-8ba4ddb6b2d1', '_blank')}
            className="group bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse hover:animate-none flex items-center gap-4 mx-auto mb-8"
          >
            <span>🚀 SIM! QUERO TRANSFORMAR MEU FILHO POR R$ 27,97</span>
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="text-sm opacity-75 space-y-2">
            <p>🔒 Pagamento 100% seguro via PIX</p>
            <p>✅ Acesso imediato após confirmação</p>
            <p>🛡️ Garantia de 30 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* Fixed Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-green-600 shadow-2xl md:hidden z-50 transition-all duration-500 ${
        showMobileCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <button 
          onClick={() => window.open('https://app.pushinpay.com.br/service/pay/9fbb6202-0744-4fdb-8156-8ba4ddb6b2d1', '_blank')}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-lg transition-colors duration-300 animate-pulse hover:animate-none shadow-lg"
        >
          💪 QUERO INVESTIR NO MEU FILHO - R$27,97
        </button>
      </div>

      {/* Spacer for mobile CTA */}
      <div className={`md:hidden transition-all duration-500 ${showMobileCTA ? 'h-24' : 'h-0'}`}></div>
    </div>
  );
}

export default App;