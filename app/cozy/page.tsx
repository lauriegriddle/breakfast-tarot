"use client";
import React, { useState, useEffect } from 'react';

// ============================================
// THE COZY MYSTIC DECK - 33 CARDS
// Gentle Messages & Magical Prompts for Everyday Wonder
// ============================================

const cozyMysticDeck = [
  // ☕ TEA CARDS (7)
  {
    id: 'tea-1',
    name: 'The Teacup',
    emoji: '☕',
    category: 'tea',
    message: 'Warmth before wisdom.',
    prompt: 'What comforts you when life feels confusing?',
    pairingType: 'tea',
    pairingName: 'Chamomile',
    pairingNote: 'for gentle calm'
  },
  {
    id: 'tea-2',
    name: 'The Teapot',
    emoji: '🫖',
    category: 'tea',
    message: 'Preparation is part of the ritual.',
    prompt: 'What are you quietly preparing for?',
    pairingType: 'tea',
    pairingName: 'Earl Grey',
    pairingNote: 'for mindful ceremony'
  },
  {
    id: 'tea-3',
    name: 'The Hearth',
    emoji: '🏠',
    category: 'tea',
    message: 'Belonging begins inside.',
    prompt: 'What makes you feel at home within yourself?',
    pairingType: 'tea',
    pairingName: 'Cinnamon Spice',
    pairingNote: 'for inner warmth'
  },
  {
    id: 'tea-4',
    name: 'The Cupboard',
    emoji: '🚪',
    category: 'tea',
    message: 'You have more than you think.',
    prompt: 'What resource are you underestimating?',
    pairingType: 'tea',
    pairingName: 'Peppermint',
    pairingNote: 'for refreshing clarity'
  },
  {
    id: 'tea-5',
    name: 'The Bell',
    emoji: '🔔',
    category: 'tea',
    message: 'Awareness rings softly.',
    prompt: 'What are you being gently reminded of?',
    pairingType: 'tea',
    pairingName: 'Jasmine Green',
    pairingNote: 'for gentle awakening'
  },
  {
    id: 'tea-6',
    name: 'The Clock',
    emoji: '🕰️',
    category: 'tea',
    message: 'Time listens when you speak kindly.',
    prompt: 'How can you treat time with care?',
    pairingType: 'tea',
    pairingName: 'Lemon Balm',
    pairingNote: 'for peaceful presence'
  },
  {
    id: 'tea-7',
    name: 'The Mystic',
    emoji: '🔮',
    category: 'tea',
    message: 'Wonder is a form of knowing.',
    prompt: 'What mystery are you content to not solve?',
    pairingType: 'tea',
    pairingName: 'Mugwort',
    pairingNote: 'for dreams and intuition'
  },

  // 🔮 CRYSTAL CARDS (7)
  {
    id: 'crystal-1',
    name: 'The Moon',
    emoji: '🌙',
    category: 'crystal',
    message: 'Cycles bring clarity.',
    prompt: 'What phase of life are you in?',
    pairingType: 'crystal',
    pairingName: 'Moonstone',
    pairingNote: 'for intuition and flow'
  },
  {
    id: 'crystal-2',
    name: 'The Mirror',
    emoji: '🪞',
    category: 'crystal',
    message: 'Reflection is a form of magic.',
    prompt: 'What are you beginning to understand about yourself?',
    pairingType: 'crystal',
    pairingName: 'Clear Quartz',
    pairingNote: 'for clarity and truth'
  },
  {
    id: 'crystal-3',
    name: 'The Key',
    emoji: '🗝️',
    category: 'crystal',
    message: 'You already carry what unlocks this.',
    prompt: 'What strength are you forgetting you have?',
    pairingType: 'crystal',
    pairingName: 'Citrine',
    pairingNote: 'for confidence and power'
  },
  {
    id: 'crystal-4',
    name: 'The Stone',
    emoji: '🪨',
    category: 'crystal',
    message: 'Stillness holds wisdom.',
    prompt: 'Where can you pause today?',
    pairingType: 'crystal',
    pairingName: 'Smoky Quartz',
    pairingNote: 'for grounding calm'
  },
  {
    id: 'crystal-5',
    name: 'The River',
    emoji: '🌊',
    category: 'crystal',
    message: 'Flow is a form of trust.',
    prompt: 'Where could you stop resisting?',
    pairingType: 'crystal',
    pairingName: 'Aquamarine',
    pairingNote: 'for letting go'
  },
  {
    id: 'crystal-6',
    name: 'The Bridge',
    emoji: '🌉',
    category: 'crystal',
    message: 'Connection heals distance.',
    prompt: 'Who are you ready to reconnect with?',
    pairingType: 'crystal',
    pairingName: 'Rose Quartz',
    pairingNote: 'for heart opening'
  },
  {
    id: 'crystal-7',
    name: 'The Philosopher',
    emoji: '📜',
    category: 'crystal',
    message: 'Questions are companions, not problems.',
    prompt: 'What question has been following you lately?',
    pairingType: 'crystal',
    pairingName: 'Lapis Lazuli',
    pairingNote: 'for deep thinking'
  },

  // ⭐ CONSTELLATION CARDS (6)
  {
    id: 'star-1',
    name: 'The Star',
    emoji: '⭐',
    category: 'constellation',
    message: 'Hope is always visible, even when clouds pass.',
    prompt: 'What are you quietly hopeful about?',
    pairingType: 'constellation',
    pairingName: 'Polaris (North Star)',
    pairingNote: 'for steady hope'
  },
  {
    id: 'star-2',
    name: 'The Constellation',
    emoji: '✨',
    category: 'constellation',
    message: 'Meaning appears when pieces connect.',
    prompt: 'What dots are forming a picture?',
    pairingType: 'constellation',
    pairingName: 'Pleiades (Seven Sisters)',
    pairingNote: 'for belonging'
  },
  {
    id: 'star-3',
    name: 'The Compass',
    emoji: '🧭',
    category: 'constellation',
    message: 'Direction matters more than speed.',
    prompt: 'What feels true north for you right now?',
    pairingType: 'constellation',
    pairingName: 'Ursa Major (Big Dipper)',
    pairingNote: 'for guidance'
  },
  {
    id: 'star-4',
    name: 'The Map',
    emoji: '🗺️',
    category: 'constellation',
    message: 'Not all routes are drawn yet.',
    prompt: 'What future feels undefined but inviting?',
    pairingType: 'constellation',
    pairingName: 'Orion',
    pairingNote: 'for adventure ahead'
  },
  {
    id: 'star-5',
    name: 'The Window',
    emoji: '🪟',
    category: 'constellation',
    message: 'Perspective changes everything.',
    prompt: 'How else could you view a current situation?',
    pairingType: 'constellation',
    pairingName: 'Cassiopeia',
    pairingNote: 'for shifting views'
  },
  {
    id: 'star-6',
    name: 'The Firefly',
    emoji: '🪲',
    category: 'constellation',
    message: 'Joy doesn\'t need to be loud.',
    prompt: 'What small joy did you notice?',
    pairingType: 'constellation',
    pairingName: 'Lyra (The Harp)',
    pairingNote: 'for quiet delight'
  },

  // 🌿 PLANT CARDS (6)
  {
    id: 'plant-1',
    name: 'The Garden',
    emoji: '🌷',
    category: 'plant',
    message: 'Care creates miracles.',
    prompt: 'What are you nurturing right now?',
    pairingType: 'plant',
    pairingName: 'Rosemary',
    pairingNote: 'for remembrance and devotion'
  },
  {
    id: 'plant-2',
    name: 'The Path',
    emoji: '🛤️',
    category: 'plant',
    message: 'Wandering counts as traveling.',
    prompt: 'Where are you learning as you go?',
    pairingType: 'plant',
    pairingName: 'Fern',
    pairingNote: 'for secret paths and discovery'
  },
  {
    id: 'plant-3',
    name: 'The Nest',
    emoji: '🪺',
    category: 'plant',
    message: 'Growth needs shelter.',
    prompt: 'What supports your becoming?',
    pairingType: 'plant',
    pairingName: 'Willow',
    pairingNote: 'for flexible strength'
  },
  {
    id: 'plant-4',
    name: 'The Feather',
    emoji: '🪶',
    category: 'plant',
    message: 'Lightness is not weakness.',
    prompt: 'Where can you release heaviness?',
    pairingType: 'plant',
    pairingName: 'Birch',
    pairingNote: 'for new beginnings'
  },
  {
    id: 'plant-5',
    name: 'The Wind',
    emoji: '💨',
    category: 'plant',
    message: 'Change can be kind.',
    prompt: 'What shift might be helping you?',
    pairingType: 'plant',
    pairingName: 'Dandelion',
    pairingNote: 'for trusting the breeze'
  },
  {
    id: 'plant-6',
    name: 'The Ladder',
    emoji: '🪜',
    category: 'plant',
    message: 'Progress can be gentle.',
    prompt: 'What does a gentle climb look like?',
    pairingType: 'plant',
    pairingName: 'Ivy',
    pairingNote: 'for steady upward growth'
  },

  // 🧶 COZY ITEM CARDS (7)
  {
    id: 'cozy-1',
    name: 'The Blanket',
    emoji: '🛋️',
    category: 'cozy',
    message: 'Rest is a sacred act.',
    prompt: 'Where can you give yourself more softness?',
    pairingType: 'cozy',
    pairingName: 'Grandmother\'s Quilt',
    pairingNote: 'for legacy comfort'
  },
  {
    id: 'cozy-2',
    name: 'The Lantern',
    emoji: '🏮',
    category: 'cozy',
    message: 'You don\'t need the whole map, just the next step.',
    prompt: 'What small step feels gently lit right now?',
    pairingType: 'cozy',
    pairingName: 'Worn Flashlight',
    pairingNote: 'for trusted guidance'
  },
  {
    id: 'cozy-3',
    name: 'The Doorway',
    emoji: '🚪',
    category: 'cozy',
    message: 'New paths open when you pause.',
    prompt: 'What might be waiting on the other side of a choice?',
    pairingType: 'cozy',
    pairingName: 'Fuzzy Slippers',
    pairingNote: 'for brave comfort'
  },
  {
    id: 'cozy-4',
    name: 'The Cloud',
    emoji: '☁️',
    category: 'cozy',
    message: 'Feelings move like weather.',
    prompt: 'What emotional weather are you in today?',
    pairingType: 'cozy',
    pairingName: 'Softest Hoodie',
    pairingNote: 'for emotional shelter'
  },
  {
    id: 'cozy-5',
    name: 'The Candle',
    emoji: '🕯️',
    category: 'cozy',
    message: 'A small light still changes the room.',
    prompt: 'What tiny action could brighten your day?',
    pairingType: 'cozy',
    pairingName: 'Cozy Wool Socks',
    pairingNote: 'for warm grounding'
  },
  {
    id: 'cozy-6',
    name: 'The Book',
    emoji: '📖',
    category: 'cozy',
    message: 'Stories shape reality.',
    prompt: 'What story are you telling yourself lately?',
    pairingType: 'cozy',
    pairingName: 'Reading Nook Pillow',
    pairingNote: 'for story sanctuary'
  },
  {
    id: 'cozy-7',
    name: 'The Sage',
    emoji: '🦉',
    category: 'cozy',
    message: 'Wisdom wears comfortable shoes.',
    prompt: 'What have you learned that you now live?',
    pairingType: 'cozy',
    pairingName: 'Well-Worn Cardigan',
    pairingNote: 'for lived-in wisdom'
  }
];

// Pairing type styles and icons
const getPairingStyle = (type: string) => {
  switch (type) {
    case 'tea':
      return { icon: '☕', label: 'Tea Pairing', color: 'text-amber-300', bg: 'bg-amber-900/30', border: 'border-amber-500/30' };
    case 'crystal':
      return { icon: '🔮', label: 'Crystal Pairing', color: 'text-purple-300', bg: 'bg-purple-900/30', border: 'border-purple-500/30' };
    case 'constellation':
      return { icon: '⭐', label: 'Constellation Pairing', color: 'text-yellow-300', bg: 'bg-yellow-900/30', border: 'border-yellow-500/30' };
    case 'plant':
      return { icon: '🌿', label: 'Plant Pairing', color: 'text-green-300', bg: 'bg-green-900/30', border: 'border-green-500/30' };
    case 'cozy':
      return { icon: '🧶', label: 'Cozy Pairing', color: 'text-rose-300', bg: 'bg-rose-900/30', border: 'border-rose-500/30' };
    default:
      return { icon: '✨', label: 'Pairing', color: 'text-gray-300', bg: 'bg-gray-900/30', border: 'border-gray-500/30' };
  }
};

// Category styles for browsing
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'tea':
      return { icon: '☕', label: 'Tea Cards', color: 'from-amber-600 to-orange-700', light: 'bg-amber-900/20', text: 'text-amber-300', border: 'border-amber-500/40' };
    case 'crystal':
      return { icon: '🔮', label: 'Crystal Cards', color: 'from-purple-600 to-violet-700', light: 'bg-purple-900/20', text: 'text-purple-300', border: 'border-purple-500/40' };
    case 'constellation':
      return { icon: '⭐', label: 'Constellation Cards', color: 'from-yellow-500 to-amber-600', light: 'bg-yellow-900/20', text: 'text-yellow-300', border: 'border-yellow-500/40' };
    case 'plant':
      return { icon: '🌿', label: 'Plant Cards', color: 'from-green-600 to-emerald-700', light: 'bg-green-900/20', text: 'text-green-300', border: 'border-green-500/40' };
    case 'cozy':
      return { icon: '🧶', label: 'Cozy Item Cards', color: 'from-rose-600 to-pink-700', light: 'bg-rose-900/20', text: 'text-rose-300', border: 'border-rose-500/40' };
    default:
      return { icon: '✨', label: 'Cards', color: 'from-gray-600 to-gray-700', light: 'bg-gray-900/20', text: 'text-gray-300', border: 'border-gray-500/40' };
  }
};

export default function CozyMysticDeck() {
  const [mode, setMode] = useState<'home' | 'single' | 'triple' | 'browse'>('home');
  const [drawnCards, setDrawnCards] = useState<typeof cozyMysticDeck>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<typeof cozyMysticDeck[0] | null>(null);
  const [browseCategory, setBrowseCategory] = useState<string>('all');
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; delay: number; duration: number; size: number }>>([]);

  // Generate sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
        size: 1 + Math.random() * 3
      }));
      setSparkles(newSparkles);
    };
    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);
    return () => clearInterval(interval);
  }, []);

  const drawSingleCard = () => {
    const randomCard = cozyMysticDeck[Math.floor(Math.random() * cozyMysticDeck.length)];
    setDrawnCards([randomCard]);
    setIsRevealed(false);
    setMode('single');
  };

  const drawTripleCards = () => {
    const shuffled = [...cozyMysticDeck].sort(() => Math.random() - 0.5);
    setDrawnCards(shuffled.slice(0, 3));
    setIsRevealed(false);
    setMode('triple');
  };

  const revealCards = () => {
    setIsRevealed(true);
  };

  const goHome = () => {
    setMode('home');
    setDrawnCards([]);
    setIsRevealed(false);
    setSelectedCard(null);
  };

  const filteredCards = browseCategory === 'all' 
    ? cozyMysticDeck 
    : cozyMysticDeck.filter(card => card.category === browseCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 p-4 relative overflow-hidden">
      
      {/* Night sky base layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Crescent moon */}
      <div className="absolute top-8 right-12 w-16 h-16 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-[0_0_40px_rgba(253,224,71,0.4)]"></div>
        <div className="absolute -right-2 -top-1 w-14 h-14 bg-slate-950 rounded-full"></div>
      </div>
      
      {/* Large glowing orbs */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Crystal shapes */}
      <div className="absolute top-20 left-20 w-3 h-8 bg-gradient-to-b from-purple-300/40 to-transparent rotate-12 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute top-40 right-32 w-4 h-10 bg-gradient-to-b from-cyan-300/30 to-transparent -rotate-6 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-32 left-16 w-3 h-7 bg-gradient-to-b from-pink-300/30 to-transparent rotate-3 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-48 right-20 w-4 h-9 bg-gradient-to-b from-amber-300/30 to-transparent -rotate-12 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
      
      {/* Swirls */}
      <svg className="absolute top-32 left-1/4 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 100 100">
        <path d="M50,10 Q80,30 70,50 Q60,70 30,60 Q10,50 20,30 Q30,10 50,10" fill="none" stroke="url(#swirl1)" strokeWidth="1"/>
        <defs>
          <linearGradient id="swirl1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd"/>
            <stop offset="100%" stopColor="#818cf8"/>
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute bottom-24 right-1/4 w-40 h-40 opacity-15 pointer-events-none" viewBox="0 0 100 100">
        <path d="M30,80 Q10,50 30,30 Q50,10 70,30 Q90,50 70,70 Q50,90 30,80" fill="none" stroke="url(#swirl2)" strokeWidth="1"/>
        <defs>
          <linearGradient id="swirl2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d"/>
            <stop offset="100%" stopColor="#f472b6"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Twinkling stars */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full pointer-events-none animate-pulse"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.id % 3 === 0 ? '#fcd34d' : sparkle.id % 3 === 1 ? '#ffffff' : '#c4b5fd',
            boxShadow: `0 0 ${sparkle.size * 3}px ${sparkle.id % 3 === 0 ? 'rgba(252,211,77,0.6)' : sparkle.id % 3 === 1 ? 'rgba(255,255,255,0.5)' : 'rgba(196,181,253,0.5)'}`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        />
      ))}
      
      {/* Shooting star occasional */}
      <div className="absolute top-16 left-1/2 w-1 h-1 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '4s', boxShadow: '0 0 10px #fff, -20px 5px 10px rgba(255,255,255,0.3), -40px 10px 5px rgba(255,255,255,0.1)' }}></div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* HOME MODE */}
        {mode === 'home' && (
          <div className="text-center py-8">
            {/* Header */}
            <div className="mb-8">
              <div className="text-5xl mb-4">🌙</div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                The Cozy Mystic
              </h1>
              <div className="inline-block bg-gradient-to-r from-indigo-900/50 via-purple-800/50 to-indigo-900/50 rounded-full px-6 py-2 border border-amber-400/30 shadow-lg shadow-purple-500/20">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 text-sm italic">
                ✨ Gentle Messages & Magical Prompts for Everyday Wonder ✨
              </p>
            </div>
              <div className="flex justify-center gap-2 mt-4 text-lg">
                <span>☕</span>
                <span>🔮</span>
                <span>⭐</span>
                <span>🌿</span>
                <span>🧶</span>
              </div>
            </div>

            {/* Main Actions */}
            <div className="space-y-4 mb-8">
              <button
                onClick={drawSingleCard}
                className="w-full max-w-xs mx-auto block bg-gradient-to-r from-indigo-600 via-purple-500 to-fuchsia-600 hover:from-indigo-500 hover:via-purple-400 hover:to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-fuchsia-500/40 border-2 border-amber-300/50 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-slate-900"
              >
                <span className="text-xl mr-2">✨</span>
                Receive a Gentle Message
              </button>
              
              <button
                onClick={drawTripleCards}
                className="w-full max-w-xs mx-auto block bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 hover:from-indigo-800 hover:via-purple-700 hover:to-indigo-800 text-amber-200 px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-purple-500/30 border-2 border-amber-400/40"
              >
                <span className="text-xl mr-2">🌙</span>
                Three Card Comfort
                <span className="block text-xs text-slate-300 mt-1">Past Comfort • Present Warmth • Future Wonder</span>
              </button>
              
              <button
                onClick={() => setMode('browse')}
                className="w-full max-w-xs mx-auto block bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 hover:from-slate-700 hover:via-indigo-700 hover:to-slate-700 text-yellow-200 px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-indigo-500/20 border border-yellow-400/30"
              >
                <span className="text-xl mr-2">📖</span>
                Browse the Cozy Collection
              </button>
            </div>

            {/* Cozy Quote */}
            <div className="bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 max-w-md mx-auto shadow-lg shadow-purple-500/20">
              <div className="text-2xl mb-3">🕯️</div>
              <p className="text-amber-100 text-sm italic leading-relaxed">
                "Some days you need wisdom. Other days you need a cup of tea, a soft blanket, and permission to just be."
              </p>
              <div className="flex justify-center gap-2 mt-4 text-sm">
                <span>☕</span>
                <span className="text-amber-300">•</span>
                <span>🛋️</span>
                <span className="text-amber-300">•</span>
                <span>✨</span>
              </div>
              <p className="text-amber-300 text-xs mt-3">33 cards of cozy wisdom</p>
            </div>
          </div>
        )}

        {/* SINGLE CARD MODE */}
        {mode === 'single' && drawnCards.length > 0 && (
          <div className="py-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-amber-200 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                ✨ Your Gentle Message ✨
              </h2>
              <p className="text-indigo-300 text-sm">Breathe. Receive. Let it land.</p>
            </div>

            <div className="flex justify-center mb-6">
              {!isRevealed ? (
                <button
                  onClick={revealCards}
                  className="w-48 h-72 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-2xl border-2 border-amber-400/30 shadow-2xl flex items-center justify-center cursor-pointer hover:border-amber-400/60 transition-all hover:shadow-amber-500/20 hover:shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌙</div>
                    <p className="text-amber-200 text-sm">Tap to reveal</p>
                  </div>
                </button>
              ) : (
                <div className="w-72 bg-gradient-to-br from-slate-800/90 via-indigo-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-amber-400/30 shadow-2xl p-6 text-center">
                  <div className="text-5xl mb-3">{drawnCards[0].emoji}</div>
                  <h3 className="text-xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {drawnCards[0].name}
                  </h3>
                  
                  {/* Message */}
                  <div className="bg-slate-900/50 rounded-xl p-4 mb-4 border border-indigo-500/20">
                    <p className="text-white text-sm italic leading-relaxed">
                      "{drawnCards[0].message}"
                    </p>
                  </div>
                  
                  {/* Prompt */}
                  <div className="bg-indigo-900/30 rounded-xl p-3 mb-4 border border-indigo-400/20">
                    <p className="text-xs font-semibold text-indigo-300 mb-1">Reflection</p>
                    <p className="text-indigo-100 text-sm">{drawnCards[0].prompt}</p>
                  </div>
                  
                  {/* Cozy Pairing */}
                  <div className={`${getPairingStyle(drawnCards[0].pairingType).bg} rounded-xl p-3 border ${getPairingStyle(drawnCards[0].pairingType).border}`}>
                    <p className={`text-xs font-semibold ${getPairingStyle(drawnCards[0].pairingType).color} mb-1`}>
                      {getPairingStyle(drawnCards[0].pairingType).icon} {getPairingStyle(drawnCards[0].pairingType).label}
                    </p>
                    <p className="text-white text-sm font-medium">{drawnCards[0].pairingName}</p>
                    <p className={`${getPairingStyle(drawnCards[0].pairingType).color} text-xs italic`}>{drawnCards[0].pairingNote}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3">
              <button
               
                onClick={drawSingleCard}
                className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 hover:from-purple-500 hover:via-fuchsia-400 hover:to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-fuchsia-500/30 border border-fuchsia-300/30"
              >
                ✨ Draw Another
              </button>
              <button
                onClick={goHome}
                className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 hover:from-indigo-800 hover:via-slate-700 hover:to-indigo-800 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-indigo-500/20 border border-amber-400/30"
              >
                🌙 Home
              </button>
            </div>
          </div>
        )}

        {/* TRIPLE CARD MODE */}
        {mode === 'triple' && drawnCards.length === 3 && (
          <div className="py-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-amber-200 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                🌙 Three Card Comfort 🌙
              </h2>
              <p className="text-indigo-300 text-sm">Past Comfort • Present Warmth • Future Wonder</p>
            </div>

            {!isRevealed ? (
              <div className="flex justify-center gap-3 mb-6">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={revealCards}
                    className="w-28 h-40 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-xl border-2 border-amber-400/30 shadow-xl flex items-center justify-center cursor-pointer hover:border-amber-400/60 transition-all"
                  >
                    <div className="text-2xl">🌙</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {drawnCards.map((card, index) => (
                  <div key={card.id} className="bg-gradient-to-br from-slate-800/90 via-indigo-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-amber-400/20 shadow-xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{card.emoji}</div>
                      <div className="flex-1">
                        <p className="text-indigo-400 text-xs font-semibold mb-1">
                          {index === 0 ? '🕯️ Past Comfort' : index === 1 ? '✨ Present Warmth' : '🌟 Future Wonder'}
                        </p>
                        <h3 className="text-lg font-bold text-amber-200" style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </h3>
                        <p className="text-white text-sm italic my-2">"{card.message}"</p>
                        <p className="text-indigo-200 text-sm mb-2">{card.prompt}</p>
                        <div className={`inline-flex items-center gap-2 ${getPairingStyle(card.pairingType).bg} rounded-full px-3 py-1 border ${getPairingStyle(card.pairingType).border}`}>
                          <span className="text-sm">{getPairingStyle(card.pairingType).icon}</span>
                          <span className={`text-xs ${getPairingStyle(card.pairingType).color}`}>{card.pairingName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isRevealed && (
              <div className="text-center">
                <button
                  onClick={revealCards}
                  className="bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500 hover:from-amber-400 hover:via-orange-300 hover:to-rose-400 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-amber-500/40 border-2 border-yellow-200/50 ring-2 ring-rose-300/30 ring-offset-2 ring-offset-slate-900"
                >
                  ✨ Reveal Your Comfort ✨
                </button>
              </div>
            )}

            {isRevealed && (
              <div className="flex justify-center gap-3">
                <button
                  onClick={drawTripleCards}
                  className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 hover:from-purple-500 hover:via-fuchsia-400 hover:to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-fuchsia-500/30 border border-fuchsia-300/30"
                >
                  ✨ Draw Again
                </button>
                <button
                  onClick={goHome}
                  className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 hover:from-indigo-800 hover:via-slate-700 hover:to-indigo-800 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-indigo-500/20 border border-amber-400/30"
                >
                  🌙 Home
                </button>
              </div>
            )}
          </div>
        )}

        {/* BROWSE MODE */}
        {mode === 'browse' && (
          <div className="py-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                📖 The Cozy Collection
              </h2>
              <p className="text-indigo-300 text-sm">33 cards of gentle wisdom</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['all', 'tea', 'crystal', 'constellation', 'plant', 'cozy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBrowseCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    browseCategory === cat
                      ? 'bg-amber-500 text-slate-900'
                      : 'bg-slate-800/50 text-indigo-200 hover:bg-slate-700/50 border border-indigo-500/20'
                  }`}
                >
                  {cat === 'all' ? '✨ All' : `${getCategoryStyle(cat).icon} ${getCategoryStyle(cat).label}`}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="space-y-3 mb-6">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-gradient-to-br from-slate-800/80 via-indigo-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl border ${getCategoryStyle(card.category).border} p-4 cursor-pointer hover:border-amber-400/40 transition-all`}
                  onClick={() => setSelectedCard(selectedCard?.id === card.id ? null : card)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{card.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-amber-200" style={{ fontFamily: 'Georgia, serif' }}>
                        {card.name}
                      </h3>
                      <p className="text-indigo-200 text-sm italic">"{card.message}"</p>
                    </div>
                    <div className={`text-lg ${getCategoryStyle(card.category).text}`}>
                      {getCategoryStyle(card.category).icon}
                    </div>
                  </div>

                  {/* Expanded Card Detail */}
                  {selectedCard?.id === card.id && (
                    <div className="mt-4 pt-4 border-t border-indigo-500/20">
                      <div className="bg-indigo-900/30 rounded-xl p-3 mb-3 border border-indigo-400/20">
                        <p className="text-xs font-semibold text-indigo-300 mb-1">Reflection</p>
                        <p className="text-indigo-100 text-sm">{card.prompt}</p>
                      </div>
                      <div className={`${getPairingStyle(card.pairingType).bg} rounded-xl p-3 border ${getPairingStyle(card.pairingType).border}`}>
                        <p className={`text-xs font-semibold ${getPairingStyle(card.pairingType).color} mb-1`}>
                          {getPairingStyle(card.pairingType).icon} {getPairingStyle(card.pairingType).label}
                        </p>
                        <p className="text-white text-sm font-medium">{card.pairingName}</p>
                        <p className={`${getPairingStyle(card.pairingType).color} text-xs italic`}>{card.pairingNote}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={goHome}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                🌙 Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-xl">
            <span>☕</span>
            <span>🔮</span>
            <span>⭐</span>
            <span>🌿</span>
            <span>🧶</span>
          </div>
          <p className="text-indigo-300 text-sm italic">
            "Wrap yourself in wonder."
          </p>
          <p className="text-indigo-400 text-xs">
            Part of the Breakfast Tarot Family 🥞
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/" className="text-indigo-300 hover:text-white underline">Daily Tarot</a>
            <span className="text-indigo-500">•</span>
            <a href="/oracle" className="text-indigo-300 hover:text-white underline">Oracle</a>
            <span className="text-indigo-500">•</span>
            <a href="/affirmations" className="text-indigo-300 hover:text-white underline">Affirmations</a>
          </div>
          <div className="text-xs text-indigo-500 pt-2">
            © 2026 The Cozy Mystic. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
