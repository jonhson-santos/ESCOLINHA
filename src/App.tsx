import React from 'react';
import { Play, CheckCircle, Star, Users, Trophy, Heart, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Futebol Infantil</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu filho através do{' '}
              <span className="text-green-600">futebol</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Desenvolva disciplina, confiança e conexão familiar com treinos simples em casa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Começar Agora - R$ 19,90
              </button>
              <button className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors">
                Ver demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vídeo: Aula Demonstrativa
            </h2>
            <p className="text-xl text-gray-600">
              Veja a metodologia em ação
            </p>
          </div>
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-auto"
              controls
              poster="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
              preload="metadata"
            >
              <source src="https://i.imgur.com/ZUWtrQ4.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nosso método?
            </h2>
            <p className="text-xl text-gray-600">
              Resultados comprovados em milhares de famílias
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conexão Familiar</h3>
              <p className="text-gray-600">
                Fortaleça o vínculo com seu filho através de atividades divertidas e educativas
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desenvolvimento</h3>
              <p className="text-gray-600">
                Desenvolva habilidades motoras, disciplina e confiança de forma natural
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidade</h3>
              <p className="text-gray-600">
                Faça parte de uma comunidade de pais comprometidos com o desenvolvimento dos filhos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Método CAMPEÃO MIRIM
            </h2>
            <p className="text-xl text-gray-600">
              Um sistema completo para desenvolver seu filho através do futebol
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg" 
                alt="Criança jogando futebol"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Treinos Estruturados</h3>
                  <p className="text-gray-600">Exercícios progressivos adaptados para cada idade</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Desenvolvimento Integral</h3>
                  <p className="text-gray-600">Foco no físico, mental e emocional da criança</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-600">Acompanhamento e orientação para toda a família</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que os pais estão dizendo
            </h2>
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Maria Silva"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">Mãe do João, 7 anos</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Meu filho desenvolveu muito mais confiança e disciplina. Os treinos são divertidos e eu participo junto!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" 
                  alt="Carlos Santos"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos Santos</h4>
                  <p className="text-gray-600 text-sm">Pai da Ana, 5 anos</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Incrível como minha filha melhorou a coordenação em apenas 2 semanas. Recomendo muito!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" 
                  alt="Ana Costa"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Ana Costa</h4>
                  <p className="text-gray-600 text-sm">Mãe do Pedro, 8 anos</p>
                </div>
              </div>
              <p className="text-gray-600">
                "O método é fantástico! Meu filho está mais focado e nossa relação ficou ainda melhor."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Invista no futuro do seu filho hoje mesmo
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <p className="text-gray-500 text-lg mb-2">De R$ 197,00 por apenas</p>
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">
                R$ 19,90
              </div>
              <p className="text-red-600 font-semibold text-lg">
                🔥 Desconto de 90% - Apenas hoje!
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Acesso vitalício ao método completo</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Suporte direto com especialistas</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Garantia de 30 dias</span>
              </div>
            </div>
            
            <button className="w-full bg-green-600 text-white py-4 px-8 rounded-full text-xl font-bold hover:bg-green-700 transition-colors shadow-lg">
              QUERO TRANSFORMAR MEU FILHO AGORA
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              ✅ Pagamento 100% seguro • ✅ Garantia de satisfação
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Futebol Infantil</span>
            </div>
            <p className="text-gray-400 mb-8">
              Transformando vidas através do esporte
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Futebol Infantil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;