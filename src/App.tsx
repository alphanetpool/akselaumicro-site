import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight, 
  Gamepad2, 
  Trophy, 
  RefreshCcw,
  ArrowRight,
  Shield,
  Menu,
  X,
  History,
  Map,
  Palette,
  Flag,
  Users
} from 'lucide-react';

const Youtube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3v6Z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { quizQuestions } from './data/quizQuestions';
import { cn } from './utils/cn';

// TikTok Icon (Custom as Lucide doesn't have it)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    stroke="none"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.447 6.447 0 0 1-1.87-1.62v7.94c.03 3.12-1.55 6.34-4.59 7.46-3.17 1.25-7.13.15-8.97-2.91-1.88-3.12-.74-7.65 2.44-9.22 1.64-.81 3.59-.9 5.35-.39V14.7c-1.06-.44-2.27-.38-3.23.27-.82.53-1.37 1.44-1.35 2.41.02 1.62 1.58 2.9 3.13 2.55 1.25-.28 2.1-1.52 2.06-2.77V.02z"/>
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Quiz Logic
  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getResultLevel = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage <= 20) return { title: "Touriste perdu au Sahara", color: "text-gray-400" };
    if (percentage <= 40) return { title: "Apprenti patriote", color: "text-orange-400" };
    if (percentage <= 60) return { title: "Défenseur du Royaume", color: "text-yellow-400" };
    if (percentage <= 80) return { title: "Ambassadeur de la Tamghrabit", color: "text-green-400" };
    return { title: "Gardien de la Souveraineté", color: "text-red-500" };
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] selection:bg-[#c1272d] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-bold font-['Poppins'] tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => scrollTo('hero')}
          >
            <span className="text-[#c1272d]">Aksel</span>
            <span>au Micro</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollTo('about')} className="hover:text-[#c1272d] transition-colors">À PROPOS</button>
            <button onClick={() => scrollTo('book')} className="hover:text-[#c1272d] transition-colors">LE LIVRE</button>
            <button onClick={() => scrollTo('quiz')} className="hover:text-[#c1272d] transition-colors">QUIZ TAMGHRABIT</button>
            <button onClick={() => scrollTo('socials')} className="hover:text-[#c1272d] transition-colors">RÉSEAUX</button>
            <button 
              onClick={() => scrollTo('book')}
              className="bg-[#c1272d] px-5 py-2.5 rounded-full hover:bg-[#a11f25] transition-all hover:scale-105"
            >
              ACHETER LE LIVRE
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-bold">
              <button onClick={() => scrollTo('about')} className="text-left py-2 border-b border-white/5">À propos</button>
              <button onClick={() => scrollTo('book')} className="text-left py-2 border-b border-white/5">Le Livre</button>
              <button onClick={() => scrollTo('quiz')} className="text-left py-2 border-b border-white/5">Quiz Tamghrabit</button>
              <button onClick={() => scrollTo('socials')} className="text-left py-2 border-b border-white/5">Réseaux Sociaux</button>
              <button 
                onClick={() => scrollTo('book')}
                className="bg-[#c1272d] p-4 rounded-xl text-center mt-4"
              >
                Acheter le Livre
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-10 mix-blend-overlay"
              style={{ backgroundImage: 'url(/pattern.png)', backgroundSize: 'cover' }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,39,45,0.15),transparent_70%)]" />
            <motion.div 
              style={{ y: y1 }}
              className="absolute inset-0 opacity-20"
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c1272d] rounded-full blur-[160px]" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c1272d] rounded-full blur-[160px]" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Poppins'] tracking-tight mb-6">
                Aksel <span className="text-[#c1272d]">au Micro</span>
              </h1>
              <h2 className="text-xl md:text-3xl text-gray-400 font-medium mb-8 tracking-wide">
                Analyse politique • satire • regard marocain sur le monde
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Un média indépendant de réflexion, d'analyse et d'humour sur la géopolitique et la souveraineté marocaine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollTo('book')}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Découvrir le livre <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('quiz')}
                  className="px-8 py-4 border border-white/20 hover:bg-white/5 font-bold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Tester le Quiz Tamghrabit <Gamepad2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Défiler</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#c1272d] to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-40 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#c1272d] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                >
                  À propos du média
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold mb-8 font-['Poppins'] leading-tight"
                >
                  Porter une voix libre sur le <span className="text-[#c1272d]">Royaume</span>.
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed mb-10"
                >
                  Aksel au Micro n'est pas qu'une chaîne de commentaires. C'est un prisme à travers lequel l'actualité, l'histoire et la géopolitique sont analysées avec une rigueur souverainiste et une pointe de satire typiquement marocaine.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Commentaire Politique", desc: "Décryptage des enjeux de pouvoir.", icon: <Flag size={20} className="text-[#c1272d]" /> },
                    { title: "Analyse Satirique", desc: "L'humour au service de la vérité.", icon: <Shield size={20} className="text-[#c1272d]" /> },
                    { title: "Perspective Marocaine", desc: "Priorité absolue à l'intérêt national.", icon: <Map size={20} className="text-[#c1272d]" /> },
                    { title: "Identité & Souveraineté", desc: "Fier de 12 siècles d'histoire.", icon: <Users size={20} className="text-[#c1272d]" /> }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#c1272d]/30 transition-all"
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c1272d]/20 to-transparent rounded-3xl" />
                <div className="w-full h-full border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center bg-zinc-900 group">
                  <div className="text-center p-8 group-hover:scale-110 transition-transform duration-700">
                    <h4 className="text-4xl font-bold font-['Poppins'] mb-2">12 SIÈCLES</h4>
                    <p className="text-gray-500 uppercase tracking-widest text-sm">D'Empire Souverain</p>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(193,39,45,0.4)_0,transparent_70%)] opacity-50" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="py-24 md:py-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="order-2 lg:order-1 flex justify-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#c1272d] to-[#7a181b] rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <img 
                    src="/book.png" 
                    alt="Maroc Souverain : L’Empire qui n’a jamais baissé les yeux" 
                    className="relative w-full max-w-md rounded-lg shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border border-white/10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x900/1a1a1a/ffffff?text=MAROC+SOUVERAIN";
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute -top-6 -right-6 bg-[#c1272d] p-6 rounded-full shadow-xl transform rotate-12 flex items-center justify-center font-bold text-sm tracking-tighter leading-none text-center">
                    NOUVEAU<br/>BESTSELLER
                  </div>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#c1272d] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                >
                  L'Ouvrage de Référence
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold mb-8 font-['Poppins'] leading-tight"
                >
                  Maroc Souverain : <br />
                  <span className="text-[#c1272d]">L’Empire qui n’a jamais baissé les yeux</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8 italic"
                >
                  "Oubliez tout ce que vous pensiez savoir sur l’histoire de l’Afrique du Nord. Le Maroc n’est pas qu'un pays, c’est une multinationale de la puissance qui tourne depuis 12 siècles."
                </motion.p>
                
                <ul className="space-y-4 mb-12">
                  {[
                    "Les racines amazighes",
                    "Les dynasties almoravide et almohade",
                    "L’épopée saadienne",
                    "Le génie alaouite et diplomatique",
                    "L’identité et souveraineté marocaine"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#c1272d]/20 flex items-center justify-center text-[#c1272d]">
                        <ChevronRight size={14} />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <a 
                  href="https://payhip.com/buy?s=1&cart_links%5B%5D=7m1PH&qty%5B7m1PH%5D=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#c1272d] hover:bg-[#a11f25] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#c1272d]/20"
                >
                  ACHETER LE LIVRE <BookOpen size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="py-24 md:py-40 bg-[#0c0c0c] relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#c1272d] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                Test d'identité
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6 font-['Poppins']"
              >
                Quiz <span className="text-[#c1272d]">Tamghrabit</span>
              </motion.h3>
              <p className="text-gray-400 text-lg">
                Es-tu un véritable gardien de la souveraineté marocaine ? <br className="hidden md:block" />
                Réponds à 50 questions pour découvrir ton niveau.
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!quizStarted ? (
                  <motion.div 
                    key="start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-12 rounded-3xl bg-zinc-900 border border-white/10 text-center flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-[#c1272d]/20 rounded-full flex items-center justify-center text-[#c1272d] mb-8">
                      <Gamepad2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-6">Prêt à relever le défi ?</h4>
                    <ul className="text-left space-y-4 mb-10 text-gray-400 max-w-sm">
                      <li className="flex gap-3"><History className="text-[#c1272d] shrink-0" /> Histoire & Dynasties</li>
                      <li className="flex gap-3"><Map className="text-[#c1272d] shrink-0" /> Géographie & Territoires</li>
                      <li className="flex gap-3"><Palette className="text-[#c1272d] shrink-0" /> Culture & Traditions</li>
                      <li className="flex gap-3"><Shield className="text-[#c1272d] shrink-0" /> Diplomatie & Souveraineté</li>
                    </ul>
                    <button 
                      onClick={() => setQuizStarted(true)}
                      className="px-12 py-5 bg-[#c1272d] hover:bg-[#a11f25] text-white font-bold rounded-full transition-all hover:scale-105"
                    >
                      COMMENCER LE QUIZ
                    </button>
                  </motion.div>
                ) : showResult ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-12 rounded-3xl bg-zinc-900 border border-white/10 text-center"
                  >
                    <Trophy className="mx-auto mb-6 text-[#c1272d]" size={64} />
                    <h4 className="text-3xl font-bold mb-2">Quiz Terminé !</h4>
                    <div className="text-6xl font-bold mb-4 font-['Poppins']">
                      <span className="text-[#c1272d]">{score}</span>
                      <span className="text-gray-600 text-3xl"> / {quizQuestions.length}</span>
                    </div>
                    <div className={cn("text-2xl font-bold mb-8 uppercase tracking-widest", getResultLevel().color)}>
                      {getResultLevel().title}
                    </div>
                    
                    <p className="text-gray-400 mb-10 max-w-md mx-auto">
                      Partage ton score avec le hashtag #AkselAuMicro et défie tes amis sur leur connaissance de l'Empire.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={restartQuiz}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105"
                      >
                        REFAIRE LE QUIZ <RefreshCcw size={20} />
                      </button>
                      <button 
                        onClick={() => {
                          const text = `J'ai obtenu le score de ${score}/${quizQuestions.length} au Quiz Tamghrabit ! Mon niveau : ${getResultLevel().title}. Teste tes connaissances sur l'Empire Marocain avec Aksel au Micro.`;
                          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/5 font-bold rounded-full transition-all hover:scale-105"
                      >
                        PARTAGER SUR WHATSAPP
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="question"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-white/10"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-bold text-gray-500 tracking-[0.3em] uppercase">
                        Question {currentQuestionIndex + 1} / {quizQuestions.length}
                      </span>
                      <div className="h-1.5 w-32 md:w-64 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#c1272d]"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold mb-10 leading-snug">
                      {quizQuestions[currentQuestionIndex].question}
                    </h4>

                    <div className="grid gap-4 mb-10">
                      {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleAnswerClick(idx)}
                          className={cn(
                            "w-full p-5 text-left rounded-2xl border transition-all flex justify-between items-center group",
                            !isAnswered && "border-white/10 hover:border-[#c1272d]/50 hover:bg-white/5",
                            isAnswered && idx === quizQuestions[currentQuestionIndex].correctAnswer && "border-green-500 bg-green-500/10 text-green-400",
                            isAnswered && selectedAnswer === idx && idx !== quizQuestions[currentQuestionIndex].correctAnswer && "border-red-500 bg-red-500/10 text-red-400",
                            isAnswered && idx !== quizQuestions[currentQuestionIndex].correctAnswer && selectedAnswer !== idx && "border-white/5 opacity-50"
                          )}
                        >
                          <span className="font-medium">{option}</span>
                          {!isAnswered && (
                            <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#c1272d]/50 transition-colors" />
                          )}
                          {isAnswered && idx === quizQuestions[currentQuestionIndex].correctAnswer && (
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                              <ChevronRight size={14} className="text-black" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {isAnswered && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mb-10 overflow-hidden"
                        >
                          <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#c1272d]">
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {quizQuestions[currentQuestionIndex].explanation}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {isAnswered && (
                      <button 
                        onClick={nextQuestion}
                        className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
                      >
                        {currentQuestionIndex === quizQuestions.length - 1 ? 'VOIR LES RÉSULTATS' : 'QUESTION SUIVANTE'} 
                        <ArrowRight size={20} />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section id="socials" className="py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#c1272d] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                Rejoindre l'Empire
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']"
              >
                Suivez <span className="text-[#c1272d]">Aksel au Micro</span>
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: "TikTok", 
                  icon: <TikTokIcon className="w-8 h-8" />, 
                  link: "https://www.tiktok.com/@akselaumicro?_r=1&_t=ZN-97Di1H8LXAk",
                  stats: "Analyse Rapide",
                  color: "hover:bg-zinc-800"
                },
                { 
                  name: "YouTube", 
                  icon: <Youtube className="w-8 h-8" />, 
                  link: "https://youtube.com/@akselaumicro?si=QOZlM0N1GqpIZZK2",
                  stats: "Long Form Content",
                  color: "hover:bg-red-950/30"
                },
                { 
                  name: "Instagram", 
                  icon: <Instagram className="w-8 h-8" />, 
                  link: "https://www.instagram.com/@akselaumicro?igsh=dm5zYWVjMXQ1NmJx",
                  stats: "Coup d'œil",
                  color: "hover:bg-purple-950/30"
                },
                { 
                  name: "Facebook", 
                  icon: <Facebook className="w-8 h-8" />, 
                  link: "https://www.facebook.com/share/1MwybG1KJ5/",
                  stats: "Communauté",
                  color: "hover:bg-blue-950/30"
                }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10 }}
                  className={cn(
                    "p-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500",
                    social.color
                  )}
                >
                  <div className="mb-6 text-gray-300 group-hover:text-white">{social.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{social.name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{social.stats}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <div className="text-2xl font-bold font-['Poppins'] tracking-tighter mb-4">
                <span className="text-[#c1272d]">Aksel</span>
                <span>au Micro</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                Un regard libre et souverain sur l'Empire Chérifien et le monde.
              </p>
            </div>

            <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
              <button onClick={() => scrollTo('hero')} className="hover:text-[#c1272d]">Accueil</button>
              <button onClick={() => scrollTo('about')} className="hover:text-[#c1272d]">À Propos</button>
              <button onClick={() => scrollTo('book')} className="hover:text-[#c1272d]">Le Livre</button>
              <button onClick={() => scrollTo('quiz')} className="hover:text-[#c1272d]">Quiz</button>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-medium tracking-widest uppercase">
            <span>© {new Date().getFullYear()} AKSEL AU MICRO. TOUS DROITS RÉSERVÉS.</span>
            <div className="flex gap-6">
              <span>Fait avec souveraineté</span>
              <span className="text-[#c1272d] animate-pulse">●</span>
              <span>Maroc</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
