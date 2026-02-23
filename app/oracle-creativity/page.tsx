"use client";
import React, { useState, useEffect } from 'react';

// The 33 Oracle Cards
const oracleCards = [
  // ✨ COSMIC CREATIVITY (7 cards)
  {
    id: 1,
    name: "Stardust",
    category: "cosmic",
    emoji: "✨",
    essence: "You are made of the same stuff as stars",
    message: "Billions of years ago, in the heart of dying stars, the atoms that would become you were forged in cosmic fire. You are not merely inspired by the universe. You ARE the universe, experiencing itself through creativity. Every idea you have is stardust rearranging itself into new forms. You are not small. You are not insignificant. You are the cosmos creating.",
    question: "What would you create if you truly believed you were made of stars?"
  },
  {
    id: 2,
    name: "The Constellation",
    category: "cosmic",
    emoji: "⭐",
    essence: "Your scattered ideas form a perfect pattern",
    message: "From where you stand, your creative ideas may seem random, disconnected, even chaotic. But step back, far, far back, and witness the constellation they form. Every project, every abandoned draft, every wild notion is a star in YOUR unique pattern. The ancients saw hunters and bears in random stars. What magnificent shape are your scattered lights creating?",
    question: "What pattern emerges when you connect all your creative dots?"
  },
  {
    id: 3,
    name: "Moonrise",
    category: "cosmic",
    emoji: "🌙",
    essence: "Create in cycles, not straight lines",
    message: "The moon does not apologize for waning. She knows the dark is necessary for the light to return. Your creativity moves in phases too: times of brilliant fullness, times of quiet darkness, times of gentle growing. Stop demanding constant output from yourself. You are not a machine. You are a moon. Trust your phases. The light always returns.",
    question: "What phase is your creativity in right now? Can you honor it?"
  },
  {
    id: 4,
    name: "Eclipse",
    category: "cosmic",
    emoji: "🌑",
    essence: "Sometimes darkness reveals what light cannot",
    message: "In the moment of eclipse, when the familiar light is blocked, we see the corona, the sun's hidden glory, invisible in ordinary daylight. Your creative blocks, your dark nights, your moments of obscurity are not punishment. They are eclipses, revealing aspects of your creative self that would remain hidden in the glare of productivity. What is the darkness showing you?",
    question: "What creative truth can you only see in the dark?"
  },
  {
    id: 5,
    name: "Aurora",
    category: "cosmic",
    emoji: "🌌",
    essence: "Your creativity dances in impossible colors",
    message: "The aurora paints the sky in colors that should not exist together, yet there they are, dancing, weaving, impossible and undeniable. Your creativity does not need to make sense. It does not need to follow rules. Let it dance in impossible colors. Let it weave patterns that have never been seen. You are not here to create what is expected. You are here to aurora.",
    question: "What impossible combination wants to dance through you?"
  },
  {
    id: 6,
    name: "The Galaxy",
    category: "cosmic",
    emoji: "🌀",
    essence: "You contain multitudes",
    message: "A single galaxy contains hundreds of billions of stars, countless planets, mysteries beyond measure. And YOU contain a galaxy. Your creative capacity is not limited to one style, one medium, one idea. You are vast. You hold contradictions, contain multitudes, spiral with possibilities. Stop trying to be one thing. You are a galaxy. Create like one.",
    question: "What unexplored region of your creative galaxy is calling you?"
  },
  {
    id: 7,
    name: "Cosmic Download",
    category: "cosmic",
    emoji: "📡",
    essence: "The universe is transmitting. Receive.",
    message: "Right now, in this very moment, creative intelligence is broadcasting on frequencies most people are too busy to hear. Ideas are not born from effort alone. They are received. You are an antenna. Clear your static. Quiet your noise. Turn your attention upward, inward, to the spaces between thoughts. The download is ready. Open the file.",
    question: "What have you been too busy to receive?"
  },

  // 💎 CRYSTAL WISDOM (7 cards)
  {
    id: 8,
    name: "Raw Crystal",
    category: "crystal",
    emoji: "💎",
    essence: "Unpolished brilliance is still brilliance",
    message: "The crystal pulled from the earth does not sparkle. It is rough, clouded, encrusted with the ordinary. But the light is IN there, waiting. Your raw creative work, the first drafts, the rough sketches, the imperfect attempts, contains the same light as the finished masterpiece. Do not despise your raw form. Brilliance does not require polish. It only requires beginning.",
    question: "What raw crystal are you afraid to show the world?"
  },
  {
    id: 9,
    name: "The Prism",
    category: "crystal",
    emoji: "🔺",
    essence: "One light becomes infinite colors through you",
    message: "White light enters the prism as one thing and emerges as a rainbow, not because the prism adds something, but because it REVEALS what was always there. You are a prism. Universal creative energy enters you and emerges as YOUR unique spectrum. You do not need to generate the light. You only need to let it pass through you, transforming as it goes.",
    question: "What colors emerge when creative light passes through you?"
  },
  {
    id: 10,
    name: "Diamond Pressure",
    category: "crystal",
    emoji: "💠",
    essence: "What's pressing on you is making you precious",
    message: "Carbon becomes diamond only under immense pressure, over vast time. The weight you feel, the compression of circumstances, the relentless pressing of life: this is not destroying you. It is making you precious. The very things that feel like too much are the forces creating something rare and beautiful. You are not being crushed. You are becoming diamond.",
    question: "What pressure is transforming you right now?"
  },
  {
    id: 11,
    name: "Amethyst Dream",
    category: "crystal",
    emoji: "🔮",
    essence: "Trust the visions that come in stillness",
    message: "Amethyst, the stone of intuition and dreams, forms in the quiet darkness of geodes, hidden, still, undisturbed. Your deepest creative visions do not come from striving. They come in stillness, in the cave of your own being, in the purple twilight between waking and sleeping. Stop chasing ideas. Get quiet. Let the amethyst visions surface.",
    question: "What vision has been waiting for you to get still enough to see it?"
  },
  {
    id: 12,
    name: "Rose Quartz Heart",
    category: "crystal",
    emoji: "💗",
    essence: "Create from love, not fear",
    message: "Rose quartz vibrates with the frequency of unconditional love. When you create from fear, fear of judgment, fear of failure, fear of not being enough, your work carries that frequency. But when you create from love, love of the process, love of beauty, love of expression itself, your work becomes rose quartz. It heals. It softens. It opens hearts.",
    question: "Is your current project rooted in love or fear?"
  },
  {
    id: 13,
    name: "Clear Quartz",
    category: "crystal",
    emoji: "🤍",
    essence: "Amplify your intention",
    message: "Clear quartz is called the master healer because it amplifies whatever energy it encounters. Your intention works the same way. A clear, focused intention amplifies your creative power exponentially. Confusion weakens. Clarity strengthens. Before you create, before you begin, ask yourself: What is my intention? Then let clear quartz consciousness magnify it.",
    question: "What intention needs your crystal-clear focus today?"
  },
  {
    id: 14,
    name: "Opal Fire",
    category: "crystal",
    emoji: "🌈",
    essence: "Your inner fire plays in rainbow light",
    message: "Opal does not have one color. It contains them all, shifting and playing as the light moves. Your creative fire is the same. It is not static, not fixed, not predictable. Let your work shimmer. Let it shift meaning as viewers move around it. You are not meant to be pinned down, defined, limited to one expression. Play in rainbow light. Be opal.",
    question: "Where have you been too fixed? What wants to shimmer?"
  },

  // 🌈 COLOR MAGIC (7 cards)
  {
    id: 15,
    name: "Spectrum",
    category: "color",
    emoji: "🌈",
    essence: "You have access to ALL the colors",
    message: "The full spectrum of creative expression is available to you. Not just the colors you have used before, not just the ones that feel safe, not just the ones others expect from you. Infrared passion. Ultraviolet mystery. Colors that have no names. You are not limited to your palette. You have access to frequencies of creativity that have never been mixed before.",
    question: "What color have you been afraid to use?"
  },
  {
    id: 16,
    name: "Golden Hour",
    category: "color",
    emoji: "🌅",
    essence: "This is your luminous moment",
    message: "Photographers chase golden hour, that brief window when the light turns everything to honey and magic. But golden hour is not only external. There are moments in your creative life when everything aligns, when the light is just right, when you are luminous. This may be your golden hour. Create now. Capture it. The light is perfect.",
    question: "What if this moment is your golden hour?"
  },
  {
    id: 17,
    name: "Deep Purple",
    category: "color",
    emoji: "💜",
    essence: "Mystery and majesty live in your work",
    message: "Purple is the color of royalty, of mystery, of the space between worlds. Your creativity holds depths that even you have not plumbed. There are purple chambers in your creative castle that you have not yet entered. Do not fear the mysterious aspects of your work. The parts you do not fully understand are often the most powerful. Trust the deep purple.",
    question: "What mystery in your work are you trying too hard to explain?"
  },
  {
    id: 18,
    name: "Rose Glow",
    category: "color",
    emoji: "🌸",
    essence: "Soft beauty is still powerful",
    message: "Not all power roars. Rose light is soft, gentle, tender, and it transforms everything it touches. Your softer work, your gentler creations, your quiet offerings are not less powerful than bold declarations. The rose glow of compassion, tenderness, and beauty changes the world without force. Soft is not weak. Soft is a different kind of strong.",
    question: "Where might softness be more powerful than force?"
  },
  {
    id: 19,
    name: "Emerald Vision",
    category: "color",
    emoji: "💚",
    essence: "Growth is happening even when unseen",
    message: "Emerald is the color of growth, of forests, of life pushing through. Beneath the winter soil, roots are working. Inside the seed, transformation is happening. Your creative growth continues even when you see no evidence. The emerald energy of becoming is always at work. You are growing. You are becoming. Trust what you cannot yet see.",
    question: "What is growing in you that hasn't surfaced yet?"
  },
  {
    id: 20,
    name: "Silver Shimmer",
    category: "color",
    emoji: "🩶",
    essence: "Reflect, don't absorb",
    message: "Silver is the color of the moon, of mirrors, of reflection without absorption. Sometimes your creative role is not to generate but to reflect, to show others their own light, to mirror back what the world needs to see. Not every creative act is production. Sometimes the most powerful thing you can do is become silver, and shine back what is true.",
    question: "What needs to be reflected rather than absorbed right now?"
  },
  {
    id: 21,
    name: "Iridescence",
    category: "color",
    emoji: "🦋",
    essence: "Shift, change, become. You are not one thing.",
    message: "Iridescence is the quality of changing color depending on the angle of view. You are not meant to look the same from every angle. Your creativity shifts, your style evolves, your message changes as you grow. Those who demand you stay the same are asking you to stop being iridescent. Refuse. Keep shifting. Keep surprising. Keep becoming.",
    question: "What part of you is ready to shift into a new color?"
  },

  // 🌸 BEAUTY'S SECRETS (6 cards)
  {
    id: 22,
    name: "The Pearl",
    category: "beauty",
    emoji: "🦪",
    essence: "Irritation becomes luminous treasure",
    message: "A pearl begins as an irritant, a grain of sand that should not be there. The oyster responds not with force but with layer upon layer of luminous nacre, transforming intrusion into treasure. Your creative irritations, the things that bother you, that rub you wrong: these are not problems. They are pearls beginning. What is irritating you into creation?",
    question: "What irritation might be the beginning of your pearl?"
  },
  {
    id: 23,
    name: "Butterfly Becoming",
    category: "beauty",
    emoji: "🦋",
    essence: "Dissolution precedes transformation",
    message: "Inside the chrysalis, the caterpillar does not simply grow wings. It dissolves. It becomes liquid, formless, unrecognizable, and from that complete dissolution, the butterfly forms. If your creative self feels like it is dissolving, this is not death. This is butterfly becoming. You cannot transform while holding your old shape. Let go. Liquify. Trust the becoming.",
    question: "What part of you needs to dissolve so something new can form?"
  },
  {
    id: 24,
    name: "The Garden",
    category: "beauty",
    emoji: "🌺",
    essence: "Tend what you wish to bloom",
    message: "A garden does not happen by accident. It requires attention, intention, the daily decision to tend what you wish to see flourish. Your creative life is a garden. What are you watering? What are you weeding? What are you allowing to go wild? The seeds are planted. The potential is there. But beauty requires tending. Tend your garden.",
    question: "What in your creative garden needs more tending?"
  },
  {
    id: 25,
    name: "Sacred Geometry",
    category: "beauty",
    emoji: "✡️",
    essence: "There is divine order in your chaos",
    message: "The spiral of the nautilus, the hexagon of the honeycomb, the fractal of the fern: nature creates with sacred geometry, with mathematical precision hidden inside apparent chaos. Your creative chaos contains the same divine order. The mess has a pattern. The confusion has a structure. You may not see it yet, but sacred geometry is at work in everything you make.",
    question: "What hidden pattern might be organizing your chaos?"
  },
  {
    id: 26,
    name: "The Veil",
    category: "beauty",
    emoji: "🌫️",
    essence: "Beauty exists between worlds",
    message: "The veil is thin between worlds: between waking and dream, between form and formless, between what is and what could be. Beauty lives in these liminal spaces, these in-between places where reality shimmers. Your most magical creative work comes from the veil spaces. Do not rush to clarity. Linger in the mist. The beauty is in the between.",
    question: "What wants to remain veiled, mysterious, unfinished?"
  },
  {
    id: 27,
    name: "Mirror of Wonder",
    category: "beauty",
    emoji: "🪞",
    essence: "See yourself as the universe sees you",
    message: "You look in ordinary mirrors and see flaws, limitations, not-enoughness. But there exists another mirror, the Mirror of Wonder, that shows you as the universe sees you: radiant, creative, miraculous, beautiful beyond measure. Your creative work is often this mirror for others. Can you turn it toward yourself? Can you see your own wonder?",
    question: "What would change if you saw yourself as the universe sees you?"
  },

  // 🔮 CREATIVE MYSTERIES (6 cards)
  {
    id: 28,
    name: "The Muse",
    category: "mystery",
    emoji: "👁️",
    essence: "She is calling. Will you answer?",
    message: "The Muse does not wait forever. She calls, and calls, and then moves on to those who will answer. But today, in this moment, she is calling YOU. That whisper of inspiration, that pull toward creation, that inexplicable urge to make something: this is her voice. She is calling. The only question that matters: Will you answer?",
    question: "How is the Muse calling you right now?"
  },
  {
    id: 29,
    name: "The Portal",
    category: "mystery",
    emoji: "🚪",
    essence: "A doorway is opening",
    message: "Portals appear in unexpected places: in a line of poetry, in a wrong turn, in a moment of despair, in a flash of joy. A portal is opening for you now, a doorway to a new level of creative expression, a new realm of possibility. You cannot see what is on the other side. You can only step through. The portal is open. Walk through.",
    question: "What portal is opening for you? Are you ready to walk through?"
  },
  {
    id: 30,
    name: "Synchronicity",
    category: "mystery",
    emoji: "🔗",
    essence: "There are no coincidences in creativity",
    message: "That book that fell open to exactly the right page. That conversation with a stranger who said exactly what you needed to hear. That song that played at exactly the right moment. These are not coincidences. They are synchronicities, the universe's way of communicating with those who are paying attention. Notice the synchronicities. They are breadcrumbs leading you home.",
    question: "What synchronicities have been appearing? What are they telling you?"
  },
  {
    id: 31,
    name: "The Spark",
    category: "mystery",
    emoji: "⚡",
    essence: "Everything begins with a single flash",
    message: "Before the fire, the spark. Before the universe, the singularity. Before every great work, a single flash of light in the darkness of not-yet. You are waiting for the perfect conditions, the full flame, the complete vision. But everything, EVERYTHING, begins with a spark. One small flash is enough. Catch it. Cup it. Feed it. That tiny spark is sufficient.",
    question: "What spark has appeared that you're waiting to become a flame?"
  },
  {
    id: 32,
    name: "The Void",
    category: "mystery",
    emoji: "🕳️",
    essence: "Emptiness is not nothing. It is potential.",
    message: "The void is not empty. It is pregnant. It is full of potential so pure it has not yet taken form. The blank page, the empty canvas, the silence before the music: these are not nothingness. They are everything in potential form. Do not fear the void. Enter it with reverence. It is where all creation begins. You are not stuck in emptiness. You are standing in infinite possibility.",
    question: "What potential is hiding in your void?"
  },
  {
    id: 33,
    name: "Creative Source",
    category: "mystery",
    emoji: "🌟",
    essence: "You ARE the magic you seek",
    message: "You have been searching for the source of creativity outside yourself: in techniques, in teachers, in tools, in inspiration. But the search ends here. The source is not out there. The source is IN there. You ARE the magic you seek. You ARE the creative source you have been looking for. Stop searching. Start recognizing. The source is you. It was always you.",
    question: "What changes when you realize YOU are the creative source?"
  }
];

// Category styling
const categoryStyles = {
  cosmic: {
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    light: "from-indigo-100 via-purple-100 to-pink-100",
    text: "text-indigo-800",
    accent: "text-purple-600",
    border: "border-purple-400",
    glow: "shadow-purple-300/50"
  },
  crystal: {
    gradient: "from-cyan-400 via-purple-400 to-pink-400",
    light: "from-cyan-100 via-purple-100 to-pink-100",
    text: "text-cyan-800",
    accent: "text-purple-600",
    border: "border-cyan-400",
    glow: "shadow-cyan-300/50"
  },
  color: {
    gradient: "from-rose-500 via-amber-400 via-emerald-400 to-violet-500",
    light: "from-rose-100 via-amber-100 via-emerald-100 to-violet-100",
    text: "text-rose-800",
    accent: "text-amber-600",
    border: "border-rose-400",
    glow: "shadow-rose-300/50"
  },
  beauty: {
    gradient: "from-pink-400 via-rose-400 to-fuchsia-500",
    light: "from-pink-100 via-rose-100 to-fuchsia-100",
    text: "text-pink-800",
    accent: "text-rose-600",
    border: "border-pink-400",
    glow: "shadow-pink-300/50"
  },
  mystery: {
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    light: "from-violet-100 via-purple-100 to-indigo-100",
    text: "text-violet-800",
    accent: "text-indigo-600",
    border: "border-violet-400",
    glow: "shadow-violet-300/50"
  }
};

export default function CreativityCoachOracle() {
  const [mode, setMode] = useState<'home' | 'single' | 'three' | 'browse'>('home');
  const [drawnCards, setDrawnCards] = useState<typeof oracleCards>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [selectedCard, setSelectedCard] = useState<typeof oracleCards[0] | null>(null);
  const [browseCategory, setBrowseCategory] = useState<string>('cosmic');
  const [sparkles, setSparkles] = useState<{id: number, x: number, y: number, size: number}[]>([]);

  // Generate floating sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2
      }));
      setSparkles(newSparkles);
    };
    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const shuffleAndDraw = (count: number) => {
    const shuffled = [...oracleCards].sort(() => Math.random() - 0.5);
    setDrawnCards(shuffled.slice(0, count));
    setRevealedCards(new Array(count).fill(false));
    setSelectedCard(null);
  };

  const revealCard = (index: number) => {
    const newRevealed = [...revealedCards];
    newRevealed[index] = true;
    setRevealedCards(newRevealed);
    setSelectedCard(drawnCards[index]);
  };

  const goHome = () => {
    setMode('home');
    setDrawnCards([]);
    setRevealedCards([]);
    setSelectedCard(null);
  };

  const getStyle = (category: string) => {
    return categoryStyles[category as keyof typeof categoryStyles] || categoryStyles.cosmic;
  };

  const filteredCards = oracleCards.filter(card => card.category === browseCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 via-fuchsia-900 to-violet-950 p-4 relative overflow-hidden">
      
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white animate-pulse pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: 0.6,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size}px rgba(255,255,255,0.3)`
          }}
        />
      ))}

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            🔮 Creativity Coach Oracle
          </h1>
          <p className="text-purple-200 text-sm">33 mystical messages for the creative soul</p>
        </div>

        {/* HOME MODE */}
        {mode === 'home' && (
          <div className="space-y-4">
            
            {/* Single Card Pull */}
            <div 
              onClick={() => { shuffleAndDraw(1); setMode('single'); }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl cursor-pointer hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-purple-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Receive a Message
                </h2>
                <p className="text-purple-200 text-sm">Pull a single card for mystical guidance</p>
              </div>
            </div>

            {/* Three Card Spread */}
            <div 
              onClick={() => { shuffleAndDraw(3); setMode('three'); }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl cursor-pointer hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-pink-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🔮</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Triple Vision
                </h2>
                <p className="text-purple-200 text-sm">Three cards for deeper cosmic insight</p>
                <div className="flex justify-center gap-3 mt-3 text-xs text-purple-300">
                  <span>Past Wisdom</span>
                  <span>•</span>
                  <span>Present Magic</span>
                  <span>•</span>
                  <span>Future Light</span>
                </div>
              </div>
            </div>

            {/* Explore the Oracle */}
            <div 
              onClick={() => setMode('browse')}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl cursor-pointer hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">💎</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-amber-300 to-pink-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Explore the Oracle
                </h2>
                <p className="text-purple-200 text-sm">Browse all 33 mystical cards</p>
              </div>
            </div>

            {/* Category Preview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <h3 className="text-sm font-bold text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">The Five Realms</h3>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                <div className="text-purple-200">
                  <div className="text-lg mb-1">✨</div>
                  <div>Cosmic</div>
                </div>
                <div className="text-cyan-200">
                  <div className="text-lg mb-1">💎</div>
                  <div>Crystal</div>
                </div>
                <div className="text-pink-200">
                  <div className="text-lg mb-1">🌈</div>
                  <div>Color</div>
                </div>
                <div className="text-rose-200">
                  <div className="text-lg mb-1">🌸</div>
                  <div>Beauty</div>
                </div>
                <div className="text-violet-200">
                  <div className="text-lg mb-1">🔮</div>
                  <div>Mystery</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center pt-4">
              <a 
                href="/creativity"
                className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                🎨 Creativity Coach Tarot
              </a>
            </div>
          </div>
        )}

        {/* SINGLE CARD MODE */}
        {mode === 'single' && drawnCards.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              ✨ Your Mystical Message
            </h2>

            {/* Card */}
            <div className="flex justify-center">
              <div
                onClick={() => !revealedCards[0] ? revealCard(0) : null}
                className={`w-48 h-72 rounded-2xl shadow-2xl cursor-pointer transition-all duration-700 ${
                  revealedCards[0]
                    ? `bg-gradient-to-br ${getStyle(drawnCards[0].category).light} border-2 ${getStyle(drawnCards[0].category).border}`
                    : 'bg-gradient-to-br from-indigo-500 via-purple-500 via-pink-500 to-amber-400 hover:scale-105 hover:shadow-purple-500/50'
                }`}
              >
                {!revealedCards[0] ? (
                  <div className="h-full flex flex-col items-center justify-center text-white p-4">
                    <div className="text-5xl mb-3 animate-pulse">🔮</div>
                    <div className="text-sm font-bold text-center">Creativity Coach</div>
                    <div className="text-xs mt-1 opacity-90">Oracle</div>
                    <div className="text-xs mt-4 opacity-70">Tap to reveal</div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-4xl mb-2">{drawnCards[0].emoji}</div>
                    <div className={`text-lg font-bold ${getStyle(drawnCards[0].category).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                      {drawnCards[0].name}
                    </div>
                    <div className={`text-xs mt-2 ${getStyle(drawnCards[0].category).accent} italic`}>
                      {drawnCards[0].essence}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Message */}
            {revealedCards[0] && (
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 ${getStyle(drawnCards[0].category).border} shadow-xl`}>
                <div className="text-center mb-4">
                  <span className="text-3xl">{drawnCards[0].emoji}</span>
                  <h3 className={`text-xl font-bold ${getStyle(drawnCards[0].category).text} mt-2`} style={{ fontFamily: 'Georgia, serif' }}>
                    {drawnCards[0].name}
                  </h3>
                  <p className={`text-sm italic ${getStyle(drawnCards[0].category).accent}`}>
                    "{drawnCards[0].essence}"
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {drawnCards[0].message}
                </p>
                <div className={`bg-gradient-to-r ${getStyle(drawnCards[0].category).light} rounded-xl p-4 border ${getStyle(drawnCards[0].category).border}`}>
                  <p className={`text-xs font-bold ${getStyle(drawnCards[0].category).text} mb-1`}>Reflection Question:</p>
                  <p className={`text-sm ${getStyle(drawnCards[0].category).accent} italic`}>{drawnCards[0].question}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => { shuffleAndDraw(1); }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                ✨ New Message
              </button>
              <button
                onClick={goHome}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold border border-white/30 transition-all text-sm"
              >
                🔮 Home
              </button>
            </div>
          </div>
        )}

        {/* THREE CARD MODE */}
        {mode === 'three' && drawnCards.length === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              🔮 Triple Vision
            </h2>
            <div className="flex justify-center gap-2 text-xs text-purple-300">
              <span>Past Wisdom</span>
              <span>•</span>
              <span>Present Magic</span>
              <span>•</span>
              <span>Future Light</span>
            </div>

            {/* Cards */}
            <div className="flex justify-center gap-4 flex-wrap">
              {drawnCards.map((card, index) => (
                <div key={card.id} className="text-center">
                  <div className="text-xs font-bold text-purple-300 mb-2">
                    {index === 0 && "Past Wisdom"}
                    {index === 1 && "Present Magic"}
                    {index === 2 && "Future Light"}
                  </div>
                  <div
                    onClick={() => !revealedCards[index] ? revealCard(index) : setSelectedCard(selectedCard?.id === card.id ? null : card)}
                    className={`w-28 h-44 rounded-xl shadow-xl cursor-pointer transition-all duration-500 ${
                      revealedCards[index]
                        ? `bg-gradient-to-br ${getStyle(card.category).light} border-2 ${selectedCard?.id === card.id ? 'border-amber-400 scale-110' : getStyle(card.category).border}`
                        : 'bg-gradient-to-br from-indigo-500 via-purple-500 via-pink-500 to-amber-400 hover:scale-105'
                    }`}
                  >
                    {!revealedCards[index] ? (
                      <div className="h-full flex flex-col items-center justify-center text-white p-2">
                        <div className="text-2xl mb-1 animate-pulse">🔮</div>
                        <div className="text-xs">Tap</div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-2 text-center">
                        <div className="text-2xl mb-1">{card.emoji}</div>
                        <div className={`text-xs font-bold ${getStyle(card.category).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Card Detail */}
            {selectedCard && (
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-5 border-2 ${getStyle(selectedCard.category).border} shadow-xl`}>
                <div className="text-center mb-3">
                  <span className="text-2xl">{selectedCard.emoji}</span>
                  <h3 className={`text-lg font-bold ${getStyle(selectedCard.category).text} mt-1`} style={{ fontFamily: 'Georgia, serif' }}>
                    {selectedCard.name}
                  </h3>
                  <p className={`text-xs italic ${getStyle(selectedCard.category).accent}`}>
                    "{selectedCard.essence}"
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  {selectedCard.message}
                </p>
                <div className={`bg-gradient-to-r ${getStyle(selectedCard.category).light} rounded-xl p-3 border ${getStyle(selectedCard.category).border}`}>
                  <p className={`text-xs font-bold ${getStyle(selectedCard.category).text} mb-1`}>Reflection:</p>
                  <p className={`text-sm ${getStyle(selectedCard.category).accent} italic`}>{selectedCard.question}</p>
                </div>
              </div>
            )}

            {/* Prompt */}
            {revealedCards.every(r => r) && !selectedCard && (
              <div className="text-center text-purple-300 text-sm">
                ✨ Tap any card to read its message
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => { shuffleAndDraw(3); }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                🔮 New Reading
              </button>
              <button
                onClick={goHome}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold border border-white/30 transition-all text-sm"
              >
                ✨ Home
              </button>
            </div>
          </div>
        )}

        {/* BROWSE MODE */}
        {mode === 'browse' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              💎 Explore the Oracle
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'cosmic', label: '✨ Cosmic', emoji: '✨' },
                { id: 'crystal', label: '💎 Crystal', emoji: '💎' },
                { id: 'color', label: '🌈 Color', emoji: '🌈' },
                { id: 'beauty', label: '🌸 Beauty', emoji: '🌸' },
                { id: 'mystery', label: '🔮 Mystery', emoji: '🔮' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setBrowseCategory(tab.id); setSelectedCard(null); }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    browseCategory === tab.id
                      ? `bg-gradient-to-r ${getStyle(tab.id).gradient} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-purple-200 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Header */}
            <div className={`rounded-2xl p-4 border bg-gradient-to-br ${getStyle(browseCategory).light} ${getStyle(browseCategory).border}`}>
              <h3 className={`text-lg font-bold text-center ${getStyle(browseCategory).text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>
                {browseCategory === 'cosmic' && '✨ Cosmic Creativity (7 Cards)'}
                {browseCategory === 'crystal' && '💎 Crystal Wisdom (7 Cards)'}
                {browseCategory === 'color' && '🌈 Color Magic (7 Cards)'}
                {browseCategory === 'beauty' && '🌸 Beauty\'s Secrets (6 Cards)'}
                {browseCategory === 'mystery' && '🔮 Creative Mysteries (6 Cards)'}
              </h3>
              <p className={`text-sm text-center ${getStyle(browseCategory).accent}`}>
                {browseCategory === 'cosmic' && 'You are made of stars and infinite possibility'}
                {browseCategory === 'crystal' && 'Wisdom crystallized from the depths of creation'}
                {browseCategory === 'color' && 'The full spectrum of creative expression'}
                {browseCategory === 'beauty' && 'Where aesthetics become alchemy'}
                {browseCategory === 'mystery' && 'The ineffable secrets of creative magic'}
              </p>
            </div>

            {/* Cards List */}
            <div className="space-y-2">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(selectedCard?.id === card.id ? null : card)}
                  className={`rounded-xl p-4 cursor-pointer transition-all ${
                    selectedCard?.id === card.id
                      ? `bg-gradient-to-br ${getStyle(card.category).light} border-2 ${getStyle(card.category).border} shadow-lg`
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <div>
                      <div className={`font-bold ${selectedCard?.id === card.id ? getStyle(card.category).text : 'text-white'}`} style={{ fontFamily: 'Georgia, serif' }}>
                        {card.name}
                      </div>
                      <div className={`text-xs italic ${selectedCard?.id === card.id ? getStyle(card.category).accent : 'text-purple-300'}`}>
                        {card.essence}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Card Detail */}
                  {selectedCard?.id === card.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        {card.message}
                      </p>
                      <div className={`bg-gradient-to-r ${getStyle(card.category).light} rounded-xl p-3 border ${getStyle(card.category).border}`}>
                        <p className={`text-xs font-bold ${getStyle(card.category).text} mb-1`}>Reflection Question:</p>
                        <p className={`text-sm ${getStyle(card.category).accent} italic`}>{card.question}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="text-center pt-4">
              <button
                onClick={goHome}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                🔮 Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-xl">
            <span>✨</span>
            <span>💎</span>
            <span>🌈</span>
            <span>🌸</span>
            <span>🔮</span>
          </div>
          <p className="text-purple-300 text-sm italic">
            "You ARE the magic you seek"
          </p>
          <p className="text-purple-400 text-xs">
            Part of the Creativity Coach Collection 🎨
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/creativity" className="text-purple-300 hover:text-white underline">Tarot</a>
            <span className="text-purple-500">•</span>
            <a href="/" className="text-purple-300 hover:text-white underline">Breakfast Tarot</a>
            <span className="text-purple-500">•</span>
            <a href="/affirmations" className="text-purple-300 hover:text-white underline">Affirmations</a>
          </div>
          <div className="text-xs text-purple-500 pt-2">
            © 2026 Creativity Coach. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}
