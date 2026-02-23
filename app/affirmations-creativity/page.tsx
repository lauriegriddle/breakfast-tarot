"use client";
import React, { useState, useEffect } from 'react';

// The 33 Mystic Affirmations
const mysticCards = [
  // 🕯️ THE FLAME KEEPERS (7 cards) - Sufi/Devotional
  {
    id: 1,
    name: "Rumi",
    category: "flame",
    years: "1207-1273",
    tradition: "Sufi Poet",
    emoji: "🕯️",
    quote: "Let the beauty of what you love be what you do.",
    expansion: "Your creativity is not separate from your devotion. What moves your heart IS your purpose. You do not need to choose between passion and practicality, between what pays and what fulfills. The beauty that makes you catch your breath, the work that makes you lose track of time, the creation that feels like prayer: this is your path. Follow the beauty. It knows the way. It has always known.",
    reflection: "What do you love so much that doing it feels like worship?"
  },
  {
    id: 2,
    name: "Hafiz",
    category: "flame",
    years: "1315-1390",
    tradition: "Sufi Poet",
    emoji: "🌹",
    quote: "I wish I could show you, when you are lonely or in darkness, the astonishing light of your own being.",
    expansion: "You cannot see your own radiance. This is the cruelest trick of being human. You walk through life believing yourself dim when you are, in fact, blazing. Your creativity is part of this light. Every idea you have ever had, every vision you have ever glimpsed, every beautiful thing you have ever made or longed to make: this is your light, visible to everyone but you. Trust us. You are astonishing.",
    reflection: "What if you could see yourself the way those who love you see you?"
  },
  {
    id: 3,
    name: "Kabir",
    category: "flame",
    years: "1440-1518",
    tradition: "Mystic Poet",
    emoji: "🪔",
    quote: "Are you looking for me? I am in the next seat. My shoulder is against yours.",
    expansion: "The creative source you seek is not far away. It is not hiding in a distant ashram, a future achievement, a better version of yourself. It is here. It is now. It is as close as your own breath, your own heartbeat, the shoulder pressed against yours in this very moment. Stop searching the horizon. The divine creative presence is sitting right beside you, waiting to be noticed.",
    reflection: "What if everything you are seeking is already within arm's reach?"
  },
  {
    id: 4,
    name: "Rabia al-Adawiyya",
    category: "flame",
    years: "714-801",
    tradition: "Sufi Saint",
    emoji: "🔥",
    quote: "I have loved Thee with two loves: a selfish love and a love that is worthy of Thee.",
    expansion: "There are two ways to create. One seeks recognition, validation, proof of worth. The other creates simply because creation is beautiful, because the act itself is enough, because making is its own reward. Both loves live in you. Do not shame the selfish one. But cultivate the worthy one. Create because creating is holy, not because you need the world to applaud.",
    reflection: "Can you create something today purely for the joy of creating it?"
  },
  {
    id: 5,
    name: "Ibn Arabi",
    category: "flame",
    years: "1165-1240",
    tradition: "Sufi Philosopher",
    emoji: "✨",
    quote: "The universe is a mirror in which the Divine beholds itself.",
    expansion: "You are part of this mirror. Your creativity is how the universe sees itself through YOUR unique angle, YOUR particular facet of the infinite gem. No one else can reflect what you reflect. No one else can create what you create. The cosmos is incomplete without your contribution to its self-knowing. This is not ego. This is sacred responsibility.",
    reflection: "What aspect of the universe can only be reflected through you?"
  },
  {
    id: 6,
    name: "Rumi",
    category: "flame",
    years: "1207-1273",
    tradition: "Sufi Poet",
    emoji: "🌊",
    quote: "You are not a drop in the ocean. You are the entire ocean in a drop.",
    expansion: "Your creative capacity is not small. It is not limited. You are not a tiny creature trying to make tiny things in a vast universe. You contain the vastness. Every galaxy, every star, every possibility that has ever existed or will ever exist is somehow folded inside you. Create from this knowing. Create as if you are the ocean. Because you are.",
    reflection: "How would your creativity change if you truly believed you contained everything?"
  },
  {
    id: 7,
    name: "Hafiz",
    category: "flame",
    years: "1315-1390",
    tradition: "Sufi Poet",
    emoji: "💫",
    quote: "Even after all this time, the sun never says to the earth, 'You owe me.' Look what happens with a love like that. It lights the whole sky.",
    expansion: "Create without keeping score. Give your gifts without tallying what returns. The sun does not invoice the earth for light, and yet look: the whole sky blazes with the result of that generosity. Your creative offerings, given freely, without demand for recognition or repayment, have the same power. Light the sky. Ask for nothing. Watch what happens.",
    reflection: "What would you create if you expected nothing in return?"
  },

  // 🌿 THE EARTH SEERS (7 cards) - Nature Mystics
  {
    id: 8,
    name: "Mary Oliver",
    category: "earth",
    years: "1935-2019",
    tradition: "Nature Poet",
    emoji: "🌿",
    quote: "Attention is the beginning of devotion.",
    expansion: "To notice is to love. To see deeply is to create. The poet understood that creativity begins not with doing but with seeing. Before you can make something beautiful, you must first notice the beauty already present. The light on a leaf. The way a stranger holds their coffee. The exact blue of this morning's sky. Pay attention. Attention is where the magic lives. Attention is prayer.",
    reflection: "What would you notice today if you paid attention like a poet?"
  },
  {
    id: 9,
    name: "Wendell Berry",
    category: "earth",
    years: "1934-present",
    tradition: "Farmer Poet",
    emoji: "🌾",
    quote: "The world cannot be discovered by a journey of miles, however long, but only by a spiritual journey, a journey of one inch, very arduous and humbling and joyful.",
    expansion: "You do not need to travel far to find creative inspiration. You do not need exotic experiences, expensive retreats, or dramatic changes of scenery. The journey that matters is the one inch from your head to your heart, from your surface to your depths, from distraction to presence. That tiny distance contains everything. Travel it today.",
    reflection: "What inner journey of one inch are you avoiding?"
  },
  {
    id: 10,
    name: "John Muir",
    category: "earth",
    years: "1838-1914",
    tradition: "Naturalist Mystic",
    emoji: "🏔️",
    quote: "In every walk with nature, one receives far more than he seeks.",
    expansion: "Your creativity does not need to be forced, extracted, or manufactured. It needs to be received. Like walking in nature and finding your pockets filled with gifts you did not consciously gather, your creative life overflows when you stop grasping and start receiving. Go outside. Look up. Let the world pour its abundance into your open hands.",
    reflection: "When did you last create by receiving rather than producing?"
  },
  {
    id: 11,
    name: "Henry David Thoreau",
    category: "earth",
    years: "1817-1862",
    tradition: "Transcendentalist",
    emoji: "🌲",
    quote: "I went to the woods because I wished to live deliberately, to front only the essential facts of life.",
    expansion: "Creative clarity requires stripping away the non-essential. Too many projects, too many opinions, too much noise. What would happen if you went to your own woods, your own essential space, and confronted only what truly matters? Deliberate living leads to deliberate creating. Simplify. Reduce. Find the essential facts of YOUR creative life.",
    reflection: "What needs to be stripped away so you can create deliberately?"
  },
  {
    id: 12,
    name: "Annie Dillard",
    category: "earth",
    years: "1945-present",
    tradition: "Nature Writer",
    emoji: "🦋",
    quote: "How we spend our days is, of course, how we spend our lives.",
    expansion: "Your creative life is not built in grand gestures. It is built in ordinary Tuesdays. The small choices: ten minutes of writing, five minutes of sketching, one photograph taken with care. These accumulate. These become your body of work. These become your life. Do not wait for the perfect conditions. Spend today the way you want to have spent your life.",
    reflection: "How did you spend today? Is it how you want to spend your creative life?"
  },
  {
    id: 13,
    name: "Mary Oliver",
    category: "earth",
    years: "1935-2019",
    tradition: "Nature Poet",
    emoji: "🌸",
    quote: "Tell me, what is it you plan to do with your one wild and precious life?",
    expansion: "This is the only question that matters. You have been given this life, this wild gift, this precious unrepeatable experience of being YOU. What will you make of it? What will you create? What will you offer? The poem asks not to shame you but to wake you. You are alive. This is astonishing. What will you do with this astonishment?",
    reflection: "What is the truest answer you can give to this question right now?"
  },
  {
    id: 14,
    name: "John O'Donohue",
    category: "earth",
    years: "1956-2008",
    tradition: "Celtic Mystic",
    emoji: "🌙",
    quote: "Beauty is not in the eye of the beholder. Beauty is an invitation to the soul.",
    expansion: "When beauty stops you, when it makes you catch your breath, something is happening beyond aesthetics. Your soul is being invited somewhere. Your creativity recognizes a kinship. Pay attention to what you find beautiful. It is pointing you toward your own creative path, toward the particular beauty only you can bring into the world.",
    reflection: "What beauty has been inviting your soul lately?"
  },

  // ✨ THE VISION WEAVERS (7 cards) - Visionary/Artistic
  {
    id: 15,
    name: "William Blake",
    category: "vision",
    years: "1757-1827",
    tradition: "Visionary Artist",
    emoji: "👁️",
    quote: "The imagination is not a state: it is the human existence itself.",
    expansion: "You do not HAVE imagination. You ARE imagination. Blake understood that creativity is not a tool we use but the very fabric of what we are. Every moment you perceive, you are creating. Every thought you think is an act of imagination. You cannot be uncreative. You can only be unaware of how creative you already are. Wake up to what you are.",
    reflection: "What would change if you saw imagination as your essence, not your hobby?"
  },
  {
    id: 16,
    name: "Hildegard von Bingen",
    category: "vision",
    years: "1098-1179",
    tradition: "Mystic Polymath",
    emoji: "🌟",
    quote: "Be not lax in celebrating. Be not lazy in the festive service of God. Be ablaze with enthusiasm.",
    expansion: "Create with fire. Create with joy. Create with the kind of enthusiasm that looks like celebration. Hildegard wrote music, painted visions, healed the sick, advised popes, and never stopped burning with creative passion well into old age. Your creativity is a form of worship. Let it blaze. Let it celebrate. Let it refuse to be tame.",
    reflection: "Where has your creative fire become tame? How can you rekindle it?"
  },
  {
    id: 17,
    name: "Rabindranath Tagore",
    category: "vision",
    years: "1861-1941",
    tradition: "Poet Sage",
    emoji: "🪷",
    quote: "I have spent my days stringing and unstringing my instrument while the song I came to sing remains unsung.",
    expansion: "This is the danger: endless preparation, endless refinement, endless getting ready while the actual creation waits. At some point you must stop tuning and start playing. The song in you will not wait forever. It is not interested in perfect conditions. It wants to be sung NOW, imperfectly, humanly, bravely. Stop stringing. Start singing.",
    reflection: "What song have you been preparing to sing instead of actually singing?"
  },
  {
    id: 18,
    name: "Kahlil Gibran",
    category: "vision",
    years: "1883-1931",
    tradition: "Poet Artist",
    emoji: "🌳",
    quote: "Work is love made visible.",
    expansion: "Every creation is a love letter. Every project is an act of devotion. When you pour yourself into your work, you are making your love visible, tangible, shareable. This is why creative work matters. It is not just productivity. It is not just expression. It is love in form. What you make shows the world what you love.",
    reflection: "What love is your current creative work making visible?"
  },
  {
    id: 19,
    name: "W.B. Yeats",
    category: "vision",
    years: "1865-1939",
    tradition: "Visionary Poet",
    emoji: "🦢",
    quote: "The world is full of magic things, patiently waiting for our senses to grow sharper.",
    expansion: "The creative visions you seek are already here, all around you, waiting. They are not hiding. YOU are not ready. Your senses need sharpening. Your perception needs polishing. The magic is patient. It will wait for you to develop eyes that can see it. Practice seeing. Practice listening. The magic things are ready when you are.",
    reflection: "What magic might be waiting just beyond your current perception?"
  },
  {
    id: 20,
    name: "William Blake",
    category: "vision",
    years: "1757-1827",
    tradition: "Visionary Artist",
    emoji: "🌅",
    quote: "To see a world in a grain of sand and a heaven in a wildflower, hold infinity in the palm of your hand and eternity in an hour.",
    expansion: "The infinite is not far away. It is here, in the smallest things, in the briefest moments. A single creative act, fully embodied, contains everything. You do not need grand projects to touch eternity. One poem. One photograph. One moment of pure creative presence. This is enough. This is everything. Hold infinity in your palm.",
    reflection: "What small creative act might contain infinity for you today?"
  },
  {
    id: 21,
    name: "Rabindranath Tagore",
    category: "vision",
    years: "1861-1941",
    tradition: "Poet Sage",
    emoji: "🎨",
    quote: "The butterfly counts not months but moments, and has time enough.",
    expansion: "You believe you do not have enough time to create. The butterfly would disagree. A lifetime of moments is a lifetime of creative opportunities. Stop counting months, years, decades. Start counting moments. This moment. This breath. This chance to make something. You have time enough. You have always had time enough.",
    reflection: "What could you create in this single moment?"
  },

  // 🕊️ THE PEACE BEARERS (6 cards) - Contemplative
  {
    id: 22,
    name: "Thich Nhat Hanh",
    category: "peace",
    years: "1926-2022",
    tradition: "Zen Master",
    emoji: "🪷",
    quote: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    expansion: "Creative joy is not somewhere else. It is not in the finished project, the published work, the applause. It is HERE, in the making, in the present moment of creation. If you are not finding joy in your creative work, you are not paying attention. Look again. Look closer. The happiness is in the doing, not the done.",
    reflection: "Where is the joy hiding in your creative process right now?"
  },
  {
    id: 23,
    name: "Lao Tzu",
    category: "peace",
    years: "6th century BCE",
    tradition: "Taoist Sage",
    emoji: "☯️",
    quote: "Nature does not hurry, yet everything is accomplished.",
    expansion: "Your creative rushing accomplishes nothing. Your frantic effort creates tension, not art. Look at how the universe creates: slowly, patiently, without anxiety. Trees do not strain to grow. Rivers do not struggle to flow. Seasons do not hurry to change. And yet everything gets done. Trust this wisdom. Slow down. Everything will still be accomplished.",
    reflection: "What would your creativity look like if it moved at nature's pace?"
  },
  {
    id: 24,
    name: "Rainer Maria Rilke",
    category: "peace",
    years: "1875-1926",
    tradition: "Poetic Mystic",
    emoji: "📜",
    quote: "Go into yourself. Find out the reason that commands you to write; see whether it has spread its roots into the very depths of your heart.",
    expansion: "The only question that matters is this: must you create? Not should you, not could you, not would it be nice. MUST you? Is the creative urge rooted so deeply in your heart that you would wither without it? If yes, then everything else is just details. If yes, then nothing can stop you. Go into yourself. Find out.",
    reflection: "Does your creative urge feel like a choice or a necessity?"
  },
  {
    id: 25,
    name: "Pema Chödrön",
    category: "peace",
    years: "1936-present",
    tradition: "Buddhist Teacher",
    emoji: "🏔️",
    quote: "You are the sky. Everything else is just the weather.",
    expansion: "Your creative blocks are weather. Your doubts are weather. Your fears, your failures, your frustrations: all weather. They pass through you, but they are not you. You are the vast sky through which all creative weather moves. Clouds come and go. Storms rise and fall. The sky remains. Remember what you are. You are the sky.",
    reflection: "What creative weather has been passing through your sky lately?"
  },
  {
    id: 26,
    name: "Thomas Merton",
    category: "peace",
    years: "1915-1968",
    tradition: "Contemplative Monk",
    emoji: "🕯️",
    quote: "Art enables us to find ourselves and lose ourselves at the same time.",
    expansion: "This is the paradox of creative work: in making something, you discover who you are. And in that same making, you dissolve into something larger than yourself. Both happen simultaneously. You find yourself. You lose yourself. The boundaries blur. The small self fades. Something greater creates through you. This is why art heals. This is why art transforms.",
    reflection: "When did you last lose yourself in creating? What did you find?"
  },
  {
    id: 27,
    name: "Rainer Maria Rilke",
    category: "peace",
    years: "1875-1926",
    tradition: "Poetic Mystic",
    emoji: "🌹",
    quote: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.",
    expansion: "You want creative answers. You want certainty about your path, your project, your purpose. But the questions are not obstacles to your creativity. They ARE your creativity. The unsolved places in your heart are where new work gestates. Love the questions. Live into them. Do not demand premature answers. Let the questions create you.",
    reflection: "What creative question are you trying to answer too quickly?"
  },

  // 🔥 THE SACRED REBELS (6 cards) - Mystical Transformers
  {
    id: 28,
    name: "Meister Eckhart",
    category: "rebel",
    years: "1260-1328",
    tradition: "Christian Mystic",
    emoji: "⚡",
    quote: "If the only prayer you ever say in your entire life is 'thank you,' it would be enough.",
    expansion: "Gratitude is a creative force. When you approach your work with thankfulness, for the chance to create, for the ideas that visit, for the hands that can make, you align with abundance. Complaint creates contraction. Gratitude creates expansion. Before you begin your next creative act, say thank you. This single prayer is enough to transform everything.",
    reflection: "What are you most grateful for in your creative life right now?"
  },
  {
    id: 29,
    name: "Teresa of Ávila",
    category: "rebel",
    years: "1515-1582",
    tradition: "Carmelite Mystic",
    emoji: "🏰",
    quote: "Christ has no body now on earth but yours, no hands but yours, no feet but yours.",
    expansion: "The creative force of the universe has no hands but yours. Whatever you believe is sacred, whatever you sense is divine, whatever you know is good and beautiful, it can only enter the world through you. Through your hands. Through your work. Through your particular, irreplaceable creative contribution. You are how the sacred becomes real.",
    reflection: "What is trying to enter the world through your hands?"
  },
  {
    id: 30,
    name: "Julian of Norwich",
    category: "rebel",
    years: "1343-1416",
    tradition: "Anchoress Mystic",
    emoji: "🌰",
    quote: "All shall be well, and all shall be well, and all manner of thing shall be well.",
    expansion: "Your creative worries are real but they are not final. The project that feels stuck will unstick. The vision that seems lost will return. The confidence that has fled will come home. All shall be well. This is not naive optimism. This is the deep knowing of someone who saw the worst and still trusted the arc of things. Trust the arc.",
    reflection: "What would you create if you truly believed all shall be well?"
  },
  {
    id: 31,
    name: "Simone Weil",
    category: "rebel",
    years: "1909-1943",
    tradition: "Philosopher Mystic",
    emoji: "🌠",
    quote: "Attention, taken to its highest degree, is the same thing as prayer.",
    expansion: "Your deepest creative work requires not effort but attention. Pure, undivided, devoted attention. When you attend fully to your creation, you enter a state indistinguishable from prayer. The sacred and the creative merge. The act of making becomes an act of worship. Give your work this quality of attention. See what transforms.",
    reflection: "What would it mean to give your creative work prayerful attention?"
  },
  {
    id: 32,
    name: "Clarissa Pinkola Estés",
    category: "rebel",
    years: "1945-present",
    tradition: "Storyteller Healer",
    emoji: "🐺",
    quote: "If you have never been called a defiant, incorrigible, impossible woman, have faith. There is yet time.",
    expansion: "Creative rebellion is not optional. To create authentically, you must at some point refuse the expectations, defy the norms, become impossible to categorize. The wild creative force within you does not want to be tamed. It wants to run, to howl, to make things that disturb and awaken. Let yourself be defiant. Let yourself be impossible. Create wildly.",
    reflection: "What defiant, impossible creation wants to emerge through you?"
  },
  {
    id: 33,
    name: "Maya Angelou",
    category: "rebel",
    years: "1928-2014",
    tradition: "Poet Sage",
    emoji: "🦅",
    quote: "There is no greater agony than bearing an untold story inside you.",
    expansion: "This is the final card because this is the final truth: you MUST create. The story inside you, the art inside you, the vision inside you is not optional. Bearing it untold is agony. Bringing it forth is liberation. You did not choose this creative urge. It chose you. Honor it. Release it. Tell your story. Make your art. The agony ends when you begin.",
    reflection: "What untold story can you no longer bear to keep inside?"
  }
];

// Category styling with warm golden ethereal glow
const categoryStyles = {
  flame: {
    gradient: "from-amber-500 via-orange-400 to-yellow-500",
    light: "from-amber-50 via-orange-50 to-yellow-50",
    text: "text-amber-900",
    accent: "text-orange-700",
    border: "border-amber-400",
    glow: "shadow-amber-400/40",
    bgGlow: "from-amber-900/30 via-orange-900/20 to-transparent"
  },
  earth: {
    gradient: "from-emerald-600 via-green-500 to-amber-500",
    light: "from-emerald-50 via-green-50 to-amber-50",
    text: "text-emerald-900",
    accent: "text-green-700",
    border: "border-emerald-400",
    glow: "shadow-emerald-400/40",
    bgGlow: "from-emerald-900/30 via-green-900/20 to-transparent"
  },
  vision: {
    gradient: "from-violet-500 via-purple-400 to-amber-400",
    light: "from-violet-50 via-purple-50 to-amber-50",
    text: "text-violet-900",
    accent: "text-purple-700",
    border: "border-violet-400",
    glow: "shadow-violet-400/40",
    bgGlow: "from-violet-900/30 via-purple-900/20 to-transparent"
  },
  peace: {
    gradient: "from-sky-400 via-blue-300 to-amber-300",
    light: "from-sky-50 via-blue-50 to-amber-50",
    text: "text-sky-900",
    accent: "text-blue-700",
    border: "border-sky-400",
    glow: "shadow-sky-400/40",
    bgGlow: "from-sky-900/30 via-blue-900/20 to-transparent"
  },
  rebel: {
    gradient: "from-rose-500 via-pink-400 to-amber-400",
    light: "from-rose-50 via-pink-50 to-amber-50",
    text: "text-rose-900",
    accent: "text-pink-700",
    border: "border-rose-400",
    glow: "shadow-rose-400/40",
    bgGlow: "from-rose-900/30 via-pink-900/20 to-transparent"
  }
};

export default function CreativityCoachAffirmations() {
  const [mode, setMode] = useState<'home' | 'single' | 'three' | 'browse'>('home');
  const [drawnCards, setDrawnCards] = useState<typeof mysticCards>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [selectedCard, setSelectedCard] = useState<typeof mysticCards[0] | null>(null);
  const [browseCategory, setBrowseCategory] = useState<string>('flame');
  const [goldenMotes, setGoldenMotes] = useState<{id: number, x: number, y: number, size: number, delay: number}[]>([]);

  // Generate floating golden motes like candlelight catching dust
  useEffect(() => {
    const generateMotes = () => {
      const newMotes = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5
      }));
      setGoldenMotes(newMotes);
    };
    generateMotes();
    const interval = setInterval(generateMotes, 8000);
    return () => clearInterval(interval);
  }, []);

  const shuffleAndDraw = (count: number) => {
    const shuffled = [...mysticCards].sort(() => Math.random() - 0.5);
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
    return categoryStyles[category as keyof typeof categoryStyles] || categoryStyles.flame;
  };

  const filteredCards = mysticCards.filter(card => card.category === browseCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-950 via-yellow-950 to-amber-900 p-4 relative overflow-hidden">
      
      {/* Warm ethereal background glow - like candlelight on ancient walls */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-orange-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-600/15 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      {/* Floating golden motes - like dust in candlelight */}
      {goldenMotes.map((mote) => (
        <div
          key={mote.id}
          className="absolute rounded-full animate-pulse pointer-events-none"
          style={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            backgroundColor: `rgba(251, 191, 36, ${0.4 + Math.random() * 0.3})`,
            boxShadow: `0 0 ${mote.size * 3}px ${mote.size}px rgba(251, 191, 36, 0.3)`,
            animationDelay: `${mote.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Subtle candle flicker effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-gradient-to-b from-amber-400/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🕯️</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Creativity Coach Affirmations
          </h1>
          <p className="text-amber-300/80 text-sm">33 whispers of wisdom from the great mystics</p>
          <p className="text-amber-400/60 text-xs mt-1 italic">For the creative soul who seeks the light</p>
        </div>

        {/* HOME MODE */}
        {mode === 'home' && (
          <div className="space-y-4">
            
            {/* Receive Wisdom */}
            <div 
              onClick={() => { shuffleAndDraw(1); setMode('single'); }}
              className="bg-gradient-to-br from-amber-900/40 to-orange-900/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30 shadow-2xl shadow-amber-900/30 cursor-pointer hover:bg-amber-900/50 transition-all hover:scale-[1.02] hover:shadow-amber-500/20"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Receive Ancient Wisdom
                </h2>
                <p className="text-amber-300/70 text-sm">A mystic speaks to your creative soul</p>
              </div>
            </div>

            {/* Three Mystics */}
            <div 
              onClick={() => { shuffleAndDraw(3); setMode('three'); }}
              className="bg-gradient-to-br from-orange-900/40 to-amber-900/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 shadow-2xl shadow-orange-900/30 cursor-pointer hover:bg-orange-900/50 transition-all hover:scale-[1.02] hover:shadow-orange-500/20"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🕯️</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Council of Three
                </h2>
                <p className="text-amber-300/70 text-sm">Three mystics gather to illuminate your path</p>
                <div className="flex justify-center gap-3 mt-3 text-xs text-amber-400/60">
                  <span>Voice of the Past</span>
                  <span>•</span>
                  <span>Voice of Now</span>
                  <span>•</span>
                  <span>Voice of Becoming</span>
                </div>
              </div>
            </div>

            {/* Explore the Mystics */}
            <div 
              onClick={() => setMode('browse')}
              className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 shadow-2xl shadow-yellow-900/30 cursor-pointer hover:bg-yellow-900/50 transition-all hover:scale-[1.02] hover:shadow-yellow-500/20"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">📜</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-200 via-amber-100 to-orange-200 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  The Sacred Library
                </h2>
                <p className="text-amber-300/70 text-sm">Browse all 33 mystics by tradition</p>
              </div>
            </div>

            {/* Wisdom Traditions */}
            <div className="bg-amber-950/30 backdrop-blur-sm rounded-2xl p-4 border border-amber-700/20">
              <h3 className="text-sm font-bold text-center bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent mb-3">The Five Wisdom Traditions</h3>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                <div className="text-amber-300/80">
                  <div className="text-lg mb-1">🕯️</div>
                  <div>Flame</div>
                  <div className="text-amber-500/50 text-[10px]">Keepers</div>
                </div>
                <div className="text-emerald-300/80">
                  <div className="text-lg mb-1">🌿</div>
                  <div>Earth</div>
                  <div className="text-emerald-500/50 text-[10px]">Seers</div>
                </div>
                <div className="text-violet-300/80">
                  <div className="text-lg mb-1">✨</div>
                  <div>Vision</div>
                  <div className="text-violet-500/50 text-[10px]">Weavers</div>
                </div>
                <div className="text-sky-300/80">
                  <div className="text-lg mb-1">🕊️</div>
                  <div>Peace</div>
                  <div className="text-sky-500/50 text-[10px]">Bearers</div>
                </div>
                <div className="text-rose-300/80">
                  <div className="text-lg mb-1">🔥</div>
                  <div>Sacred</div>
                  <div className="text-rose-500/50 text-[10px]">Rebels</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center pt-4 space-y-3">
              <a 
                href="/oracle-creativity"
                className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:from-purple-700 hover:via-pink-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                🔮 Creativity Coach Oracle
              </a>
              <br />
              <a 
                href="/creativity"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-all text-sm shadow-lg"
              >
                🎨 Creativity Coach Tarot
              </a>
            </div>
          </div>
        )}

        {/* SINGLE CARD MODE */}
        {mode === 'single' && drawnCards.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              ✨ A Mystic Speaks
            </h2>

            {/* Card */}
            <div className="flex justify-center">
              <div
                onClick={() => !revealedCards[0] ? revealCard(0) : null}
                className={`w-56 h-80 rounded-2xl shadow-2xl cursor-pointer transition-all duration-700 ${
                  revealedCards[0]
                    ? `bg-gradient-to-br ${getStyle(drawnCards[0].category).light} border-2 ${getStyle(drawnCards[0].category).border}`
                    : 'bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-600 hover:scale-105 hover:shadow-amber-500/40'
                }`}
                style={{
                  boxShadow: revealedCards[0] ? undefined : '0 0 40px rgba(251, 191, 36, 0.3)'
                }}
              >
                {!revealedCards[0] ? (
                  <div className="h-full flex flex-col items-center justify-center text-amber-100 p-4">
                    <div className="text-5xl mb-3">🕯️</div>
                    <div className="text-sm font-bold text-center" style={{ fontFamily: 'Georgia, serif' }}>Ancient Wisdom</div>
                    <div className="text-xs mt-1 opacity-80">Awaits You</div>
                    <div className="text-xs mt-4 opacity-60">Tap to receive</div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-5 text-center">
                    <div className="text-3xl mb-2">{drawnCards[0].emoji}</div>
                    <div className={`text-xl font-bold ${getStyle(drawnCards[0].category).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                      {drawnCards[0].name}
                    </div>
                    <div className={`text-xs mt-1 ${getStyle(drawnCards[0].category).accent}`}>
                      {drawnCards[0].tradition}
                    </div>
                    <div className={`text-xs mt-1 opacity-60 ${getStyle(drawnCards[0].category).text}`}>
                      {drawnCards[0].years}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Message */}
            {revealedCards[0] && (
              <div className={`bg-gradient-to-br ${getStyle(drawnCards[0].category).light} backdrop-blur-sm rounded-2xl p-6 border-2 ${getStyle(drawnCards[0].category).border} shadow-xl`}>
                <div className="text-center mb-4">
                  <span className="text-2xl">{drawnCards[0].emoji}</span>
                  <h3 className={`text-xl font-bold ${getStyle(drawnCards[0].category).text} mt-1`} style={{ fontFamily: 'Georgia, serif' }}>
                    {drawnCards[0].name}
                  </h3>
                  <p className={`text-xs ${getStyle(drawnCards[0].category).accent}`}>
                    {drawnCards[0].tradition} • {drawnCards[0].years}
                  </p>
                </div>
                
                {/* The Quote */}
                <div className={`bg-white/50 rounded-xl p-4 mb-4 border ${getStyle(drawnCards[0].category).border}`}>
                  <p className={`text-lg italic text-center ${getStyle(drawnCards[0].category).text} leading-relaxed`} style={{ fontFamily: 'Georgia, serif' }}>
                    "{drawnCards[0].quote}"
                  </p>
                </div>

                {/* Expansion */}
                <p className={`${getStyle(drawnCards[0].category).text} leading-relaxed text-sm mb-4 opacity-90`}>
                  {drawnCards[0].expansion}
                </p>

                {/* Reflection */}
                <div className={`bg-gradient-to-r ${getStyle(drawnCards[0].category).light} rounded-xl p-4 border ${getStyle(drawnCards[0].category).border}`}>
                  <p className={`text-xs font-bold ${getStyle(drawnCards[0].category).text} mb-1`}>For Reflection:</p>
                  <p className={`text-sm ${getStyle(drawnCards[0].category).accent} italic`}>{drawnCards[0].reflection}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => { shuffleAndDraw(1); }}
                className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 hover:from-amber-700 hover:via-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg shadow-amber-900/30"
              >
                ✨ New Wisdom
              </button>
              <button
                onClick={goHome}
                className="bg-amber-900/40 backdrop-blur-sm hover:bg-amber-900/60 text-amber-200 px-6 py-3 rounded-full font-semibold border border-amber-500/30 transition-all text-sm"
              >
                🕯️ Home
              </button>
            </div>
          </div>
        )}

        {/* THREE CARD MODE */}
        {mode === 'three' && drawnCards.length === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-orange-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              🕯️ Council of Three
            </h2>
            <div className="flex justify-center gap-2 text-xs text-amber-400/60">
              <span>Voice of the Past</span>
              <span>•</span>
              <span>Voice of Now</span>
              <span>•</span>
              <span>Voice of Becoming</span>
            </div>

            {/* Cards */}
            <div className="flex justify-center gap-4 flex-wrap">
              {drawnCards.map((card, index) => (
                <div key={card.id} className="text-center">
                  <div className="text-xs font-bold text-amber-300/70 mb-2">
                    {index === 0 && "Past"}
                    {index === 1 && "Now"}
                    {index === 2 && "Becoming"}
                  </div>
                  <div
                    onClick={() => !revealedCards[index] ? revealCard(index) : setSelectedCard(selectedCard?.id === card.id ? null : card)}
                    className={`w-28 h-44 rounded-xl shadow-xl cursor-pointer transition-all duration-500 ${
                      revealedCards[index]
                        ? `bg-gradient-to-br ${getStyle(card.category).light} border-2 ${selectedCard?.id === card.id ? 'border-amber-400 scale-110' : getStyle(card.category).border}`
                        : 'bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-600 hover:scale-105'
                    }`}
                    style={{
                      boxShadow: !revealedCards[index] ? '0 0 25px rgba(251, 191, 36, 0.25)' : undefined
                    }}
                  >
                    {!revealedCards[index] ? (
                      <div className="h-full flex flex-col items-center justify-center text-amber-100 p-2">
                        <div className="text-2xl mb-1">🕯️</div>
                        <div className="text-xs">Tap</div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-2 text-center">
                        <div className="text-xl mb-1">{card.emoji}</div>
                        <div className={`text-xs font-bold ${getStyle(card.category).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </div>
                        <div className={`text-[10px] mt-1 ${getStyle(card.category).accent}`}>
                          {card.tradition}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Card Detail */}
            {selectedCard && (
              <div className={`bg-gradient-to-br ${getStyle(selectedCard.category).light} backdrop-blur-sm rounded-2xl p-5 border-2 ${getStyle(selectedCard.category).border} shadow-xl`}>
                <div className="text-center mb-3">
                  <span className="text-xl">{selectedCard.emoji}</span>
                  <h3 className={`text-lg font-bold ${getStyle(selectedCard.category).text} mt-1`} style={{ fontFamily: 'Georgia, serif' }}>
                    {selectedCard.name}
                  </h3>
                  <p className={`text-xs ${getStyle(selectedCard.category).accent}`}>
                    {selectedCard.tradition}
                  </p>
                </div>
                
                {/* Quote */}
                <div className={`bg-white/50 rounded-xl p-3 mb-3 border ${getStyle(selectedCard.category).border}`}>
                  <p className={`text-sm italic text-center ${getStyle(selectedCard.category).text}`} style={{ fontFamily: 'Georgia, serif' }}>
                    "{selectedCard.quote}"
                  </p>
                </div>

                <p className={`${getStyle(selectedCard.category).text} leading-relaxed text-sm mb-3 opacity-90`}>
                  {selectedCard.expansion}
                </p>

                <div className={`bg-gradient-to-r ${getStyle(selectedCard.category).light} rounded-xl p-3 border ${getStyle(selectedCard.category).border}`}>
                  <p className={`text-xs font-bold ${getStyle(selectedCard.category).text} mb-1`}>Reflection:</p>
                  <p className={`text-sm ${getStyle(selectedCard.category).accent} italic`}>{selectedCard.reflection}</p>
                </div>
              </div>
            )}

            {/* Prompt */}
            {revealedCards.every(r => r) && !selectedCard && (
              <div className="text-center text-amber-300/70 text-sm">
                ✨ Tap any mystic to receive their wisdom
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => { shuffleAndDraw(3); setSelectedCard(null); }}
                className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 hover:from-amber-700 hover:via-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg shadow-amber-900/30"
              >
                🕯️ New Council
              </button>
              <button
                onClick={goHome}
                className="bg-amber-900/40 backdrop-blur-sm hover:bg-amber-900/60 text-amber-200 px-6 py-3 rounded-full font-semibold border border-amber-500/30 transition-all text-sm"
              >
                ✨ Home
              </button>
            </div>
          </div>
        )}

        {/* BROWSE MODE */}
        {mode === 'browse' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              📜 The Sacred Library
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'flame', label: '🕯️ Flame Keepers', count: 7 },
                { id: 'earth', label: '🌿 Earth Seers', count: 7 },
                { id: 'vision', label: '✨ Vision Weavers', count: 7 },
                { id: 'peace', label: '🕊️ Peace Bearers', count: 6 },
                { id: 'rebel', label: '🔥 Sacred Rebels', count: 6 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setBrowseCategory(tab.id); setSelectedCard(null); }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    browseCategory === tab.id
                      ? `bg-gradient-to-r ${getStyle(tab.id).gradient} text-white shadow-lg scale-105`
                      : 'bg-amber-900/30 text-amber-300/80 border border-amber-600/30 hover:bg-amber-900/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Header */}
            <div className={`rounded-2xl p-4 border bg-gradient-to-br ${getStyle(browseCategory).light} ${getStyle(browseCategory).border}`}>
              <h3 className={`text-lg font-bold text-center ${getStyle(browseCategory).text} mb-1`} style={{ fontFamily: 'Georgia, serif' }}>
                {browseCategory === 'flame' && '🕯️ The Flame Keepers (7 Mystics)'}
                {browseCategory === 'earth' && '🌿 The Earth Seers (7 Mystics)'}
                {browseCategory === 'vision' && '✨ The Vision Weavers (7 Mystics)'}
                {browseCategory === 'peace' && '🕊️ The Peace Bearers (6 Mystics)'}
                {browseCategory === 'rebel' && '🔥 The Sacred Rebels (6 Mystics)'}
              </h3>
              <p className={`text-sm text-center ${getStyle(browseCategory).accent}`}>
                {browseCategory === 'flame' && 'Sufi poets and devotional mystics who saw love as the creative fire'}
                {browseCategory === 'earth' && 'Nature writers and poets who found the divine in the wild world'}
                {browseCategory === 'vision' && 'Visionary artists who painted worlds others could not see'}
                {browseCategory === 'peace' && 'Contemplatives who found creative wisdom in stillness'}
                {browseCategory === 'rebel' && 'Transformers who defied convention to speak sacred truth'}
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
                      : 'bg-amber-900/30 backdrop-blur-sm border border-amber-600/20 hover:bg-amber-900/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <div className="flex-1">
                      <div className={`font-bold ${selectedCard?.id === card.id ? getStyle(card.category).text : 'text-amber-200'}`} style={{ fontFamily: 'Georgia, serif' }}>
                        {card.name}
                      </div>
                      <div className={`text-xs ${selectedCard?.id === card.id ? getStyle(card.category).accent : 'text-amber-400/60'}`}>
                        {card.tradition} • {card.years}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Card Detail */}
                  {selectedCard?.id === card.id && (
                    <div className="mt-4 pt-4 border-t border-amber-300/30">
                      {/* Quote */}
                      <div className={`bg-white/50 rounded-xl p-3 mb-3 border ${getStyle(card.category).border}`}>
                        <p className={`text-sm italic text-center ${getStyle(card.category).text}`} style={{ fontFamily: 'Georgia, serif' }}>
                          "{card.quote}"
                        </p>
                      </div>

                      <p className={`${getStyle(card.category).text} leading-relaxed text-sm mb-3 opacity-90`}>
                        {card.expansion}
                      </p>

                      <div className={`bg-gradient-to-r ${getStyle(card.category).light} rounded-xl p-3 border ${getStyle(card.category).border}`}>
                        <p className={`text-xs font-bold ${getStyle(card.category).text} mb-1`}>For Reflection:</p>
                        <p className={`text-sm ${getStyle(card.category).accent} italic`}>{card.reflection}</p>
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
                className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 hover:from-amber-700 hover:via-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm shadow-lg shadow-amber-900/30"
              >
                🕯️ Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-xl">
            <span>🕯️</span>
            <span>🌿</span>
            <span>✨</span>
            <span>🕊️</span>
            <span>🔥</span>
          </div>
          <p className="text-amber-300/70 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
            "We are creative wisdom itself."
          </p>
          <p className="text-amber-400/50 text-xs">
            Part of the Creativity Coach Collection 🎨
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/creativity" className="text-amber-300/70 hover:text-amber-200 underline">Tarot</a>
            <span className="text-amber-600/30">•</span>
            <a href="/oracle-creativity" className="text-amber-300/70 hover:text-amber-200 underline">Oracle</a>
            <span className="text-amber-600/30">•</span>
            <a href="/" className="text-amber-300/70 hover:text-amber-200 underline">Breakfast Tarot</a>
          </div>
          <div className="text-xs text-amber-600/40 pt-2">
            © 2026 Creativity Coach. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}
