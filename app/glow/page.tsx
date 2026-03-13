"use client";
import React, { useState, useEffect } from 'react';

// ============================================
// GLOW: HIGH FREQUENCY MESSAGE CARDS - 76 CARDS
// Experience the High Frequency of Small Actions
// ============================================

const glowDeck = [
  // 🌿 EARTH & NATURE (1-12)
  { id: 1, name: "Nature Observation", emoji: "🌳", category: "earth", action: "Spend ten minutes watching the way wind moves through the leaves of a single tree.", duration: "10 minutes", glowNote: "What did the tree teach you about stillness and movement existing together?" },
  { id: 2, name: "Barefoot Connection", emoji: "🦶", category: "earth", action: "Walk barefoot on grass or soil for five minutes to 'earth' your physical energy.", duration: "5 minutes", glowNote: "Where in your body did you feel the earth's energy rise?" },
  { id: 3, name: "Cloud Gazing", emoji: "☁️", category: "earth", action: "Lie down or sit back and watch the shapes of clouds for five minutes without labeling them.", duration: "5 minutes", glowNote: "What appeared when you stopped trying to name what you saw?" },
  { id: 4, name: "Sun Salutation", emoji: "☀️", category: "earth", action: "Stand in the sun for three minutes, feeling the warmth on your face and hands.", duration: "3 minutes", glowNote: "How does warmth from the sky feel different from warmth from within?" },
  { id: 5, name: "Garden Puttering", emoji: "🌱", category: "earth", action: "Spend ten minutes pulling weeds or tending to a plant, focusing on the soil.", duration: "10 minutes", glowNote: "What grows in you when you tend to something outside yourself?" },
  { id: 6, name: "Tree Hugging", emoji: "🌲", category: "earth", action: "Place your palms against a tree trunk for two minutes, feeling its texture and solid presence.", duration: "2 minutes", glowNote: "What wisdom does something rooted and ancient offer you today?" },
  { id: 7, name: "Leaf Tracing", emoji: "🍃", category: "earth", action: "Pick up a leaf and trace its veins and edges with your index finger.", duration: "3 minutes", glowNote: "What intricate map exists within your own story?" },
  { id: 8, name: "Horizon Gaze", emoji: "🌅", category: "earth", action: "Find the farthest point on the horizon and let your eyes rest there for two minutes.", duration: "2 minutes", glowNote: "What opens in you when you look beyond the immediate?" },
  { id: 9, name: "Shadow Watching", emoji: "🌓", category: "earth", action: "Observe the way shadows change or stretch on the floor or wall for three minutes.", duration: "3 minutes", glowNote: "What do shadows teach you about light?" },
  { id: 10, name: "Stone Balancing", emoji: "🪨", category: "earth", action: "Find three small stones and try to stack them, focusing on the point of contact.", duration: "5 minutes", glowNote: "What does it feel like when balance is found, even briefly?" },
  { id: 11, name: "Sky Framing", emoji: "🖼️", category: "earth", action: "Use your hands to make a 'camera frame' and capture one beautiful patch of sky.", duration: "2 minutes", glowNote: "What beauty exists when you narrow your focus?" },
  { id: 12, name: "Go for a Walk", emoji: "🚶", category: "earth", action: "Go for a 10-minute walk outside, letting your feet lead you.", duration: "10 minutes", glowNote: "Where did your feet want to take you, and why there?" },

  // 💨 BREATH & BODY (13-24)
  { id: 13, name: "Breath Counting", emoji: "🌬️", category: "breath", action: "Inhale for four, hold for four, exhale for eight. Repeat five times.", duration: "3 minutes", glowNote: "What shifted when the exhale became longer than the inhale?" },
  { id: 14, name: "Box Breathing", emoji: "⬜", category: "breath", action: "Inhale 4, hold 4, exhale 4, hold 4. Repeat four times.", duration: "3 minutes", glowNote: "What does it feel like to breathe in a shape?" },
  { id: 15, name: "Feather Breathing", emoji: "🪶", category: "breath", action: "Imagine a feather at your lips; exhale so softly it doesn't move.", duration: "2 minutes", glowNote: "What gentleness did you discover in your breath?" },
  { id: 16, name: "Exhale Sighing", emoji: "😮‍💨", category: "breath", action: "Breathe in deeply and let out a loud 'ahhh' sigh to release tension.", duration: "1 minute", glowNote: "What did you release with that sound?" },
  { id: 17, name: "Shoulder Release", emoji: "🙆", category: "breath", action: "Inhale deeply, shrug shoulders to ears, then drop them on exhale.", duration: "2 minutes", glowNote: "What were your shoulders holding that they no longer need?" },
  { id: 18, name: "Slow Motion Movement", emoji: "🐢", category: "breath", action: "Walk across a room as slowly as possible, noticing every weight shift.", duration: "3 minutes", glowNote: "What do you notice when speed is removed from movement?" },
  { id: 19, name: "Slow Stretching", emoji: "🧘", category: "breath", action: "Reach your arms toward the sky as slowly as possible.", duration: "3 minutes", glowNote: "What opens in your body when you give it time?" },
  { id: 20, name: "Body Scan", emoji: "🫀", category: "breath", action: "From toes to head, briefly tighten and release each muscle group.", duration: "5 minutes", glowNote: "Which part of your body was holding the most tension?" },
  { id: 21, name: "Joint Circles", emoji: "🔄", category: "breath", action: "Rotate wrists and ankles in small circles, five times each direction.", duration: "2 minutes", glowNote: "What small movements create the biggest sense of release?" },
  { id: 22, name: "The 'Check-In'", emoji: "📍", category: "breath", action: "Ask 'Where am I holding tension?' and consciously soften that spot.", duration: "1 minute", glowNote: "What did your body want you to know?" },
  { id: 23, name: "Stretch for Five", emoji: "🤸", category: "breath", action: "Stretch for five minutes in any way your body asks. Let it lead.", duration: "5 minutes", glowNote: "What stretch did your body most crave?" },
  { id: 24, name: "Dance It Out", emoji: "💃", category: "breath", action: "Put on music and dance for one whole song, moving however feels right.", duration: "3-4 minutes", glowNote: "What emotion moved through you as you moved?" },

  // 👁️ MINDFUL SEEING (25-34)
  { id: 25, name: "Color Curation", emoji: "🎨", category: "seeing", action: "Find every 'blue' (or any color) object in your field of vision.", duration: "3 minutes", glowNote: "What did you notice that you had never seen before?" },
  { id: 26, name: "Object Appreciation", emoji: "🥄", category: "seeing", action: "Pick up a common object and look at it as if you've never seen it.", duration: "3 minutes", glowNote: "What beauty exists in the ordinary?" },
  { id: 27, name: "Soft Gaze", emoji: "👀", category: "seeing", action: "Soften your eyes so the periphery of the room bleeds in.", duration: "2 minutes", glowNote: "What appears when you stop focusing so hard?" },
  { id: 28, name: "Candle Trataka", emoji: "🕯️", category: "seeing", action: "Light a candle and gaze at the center of the flame for two minutes.", duration: "2 minutes", glowNote: "What thoughts dissolved in the flame?" },
  { id: 29, name: "Mirror Smile", emoji: "🪞", category: "seeing", action: "Look at yourself in the mirror and offer a genuine, soft smile.", duration: "1 minute", glowNote: "What did you see in your own eyes?" },
  { id: 30, name: "Photo Memories", emoji: "📸", category: "seeing", action: "Look through old photos that make you smile.", duration: "5 minutes", glowNote: "Which memory brought the most warmth?" },
  { id: 31, name: "Inner Sanctuary", emoji: "🏡", category: "seeing", action: "Close your eyes and mentally sit in your ideal sanctuary.", duration: "3 minutes", glowNote: "What does your inner sanctuary look like?" },
  { id: 32, name: "Mental De-Clutter", emoji: "🎈", category: "seeing", action: "Place each disruptive thought into a balloon and watch it float away.", duration: "3 minutes", glowNote: "What thought was hardest to release?" },
  { id: 33, name: "Artistic Doodling", emoji: "✏️", category: "seeing", action: "Draw continuous loops or patterns for five minutes without a goal.", duration: "5 minutes", glowNote: "What emerged when you let the pen lead?" },
  { id: 34, name: "Draw Something Silly", emoji: "🎨", category: "seeing", action: "Draw or doodle something, no matter how silly.", duration: "5 minutes", glowNote: "What did silliness unlock in you?" },

  // 👂 MINDFUL LISTENING (35-42)
  { id: 35, name: "Sound Mapping", emoji: "👂", category: "listening", action: "Identify the farthest sound you can hear, then the closest.", duration: "3 minutes", glowNote: "What sounds exist that you normally filter out?" },
  { id: 36, name: "Wind Chime Listening", emoji: "🎐", category: "listening", action: "Focus entirely on a wind chime or birdsong for three minutes.", duration: "3 minutes", glowNote: "What does randomness teach you about beauty?" },
  { id: 37, name: "Rhythmic Humming", emoji: "🎵", category: "listening", action: "Hum a low, steady note for one minute to calm the system.", duration: "1 minute", glowNote: "Where in your body did you feel the vibration most?" },
  { id: 38, name: "Intentional Silence", emoji: "🤫", category: "listening", action: "Sit in absolute silence for five minutes, being a witness.", duration: "5 minutes", glowNote: "What did silence reveal?" },
  { id: 39, name: "Listen to Your Song", emoji: "🎧", category: "listening", action: "Listen to your favorite song all the way through, with no distractions.", duration: "3-5 minutes", glowNote: "What does this song remember for you?" },
  { id: 40, name: "Affirmation Echo", emoji: "💬", category: "listening", action: "Repeat 'I am grounded and creative' to the rhythm of your heartbeat.", duration: "2 minutes", glowNote: "What affirmation does your heart want to hear?" },
  { id: 41, name: "Pulse Sensing", emoji: "💓", category: "listening", action: "Try to feel your pulse in your fingertips without touching them.", duration: "3 minutes", glowNote: "What does it feel like to sense your own aliveness?" },
  { id: 42, name: "The 'Check-Out'", emoji: "🛑", category: "listening", action: "Do absolutely nothing for exactly sixty seconds.", duration: "1 minute", glowNote: "What happened when you gave yourself permission to stop?" },

  // ✋ TOUCH & TEXTURE (43-52)
  { id: 43, name: "Texture Hunt", emoji: "🖐️", category: "touch", action: "Find five different textures and touch each one mindfully.", duration: "5 minutes", glowNote: "Which texture surprised you the most?" },
  { id: 44, name: "Hand Massage", emoji: "🙌", category: "touch", action: "Massage your own hands, acknowledging the work they do.", duration: "3 minutes", glowNote: "What have your hands created that you are proud of?" },
  { id: 45, name: "Palm Warming", emoji: "✋", category: "touch", action: "Rub hands until warm, then cup them over your closed eyes.", duration: "1 minute", glowNote: "What does self-generated warmth feel like?" },
  { id: 46, name: "Ear Massage", emoji: "👂", category: "touch", action: "Gently massage the lobes and edges of your ears.", duration: "2 minutes", glowNote: "What small self-care acts do you often forget?" },
  { id: 47, name: "Weight Awareness", emoji: "⚖️", category: "touch", action: "Notice where your body meets the chair or floor.", duration: "2 minutes", glowNote: "What does it feel like to be held by something solid?" },
  { id: 48, name: "Clean One Drawer", emoji: "🗄️", category: "touch", action: "Clean out one drawer. Let organizing be meditative.", duration: "10 minutes", glowNote: "What did you find that you had forgotten?" },
  { id: 49, name: "Rearrange Something", emoji: "🖼️", category: "touch", action: "Rearrange something small: a shelf, a vase, a photo.", duration: "5 minutes", glowNote: "How does small change create fresh energy?" },
  { id: 50, name: "Tidy Your Workspace", emoji: "🧹", category: "touch", action: "Tidy your desk, creating clear space for clear thinking.", duration: "10 minutes", glowNote: "What does a clear space create in your mind?" },
  { id: 51, name: "Single-Tasking", emoji: "🍽️", category: "touch", action: "Wash a single dish with 100% attention on the water.", duration: "3 minutes", glowNote: "What transforms when full attention is given?" },
  { id: 52, name: "Write a Kind Note", emoji: "💌", category: "touch", action: "Write a kind note for someone, or for yourself to find later.", duration: "5 minutes", glowNote: "What words did someone need to hear?" },

  // 💧 WATER & WARMTH (53-64)
  { id: 53, name: "Morning Water Ritual", emoji: "💧", category: "water", action: "Sip water slowly, feeling the temperature and hydration.", duration: "3 minutes", glowNote: "What does it feel like to truly receive something simple?" },
  { id: 54, name: "Water Immersion", emoji: "🌊", category: "water", action: "Splash cold water on your face or soak feet in warm water.", duration: "2 minutes", glowNote: "What reset when the water touched your skin?" },
  { id: 55, name: "Warm Hands", emoji: "🚿", category: "water", action: "Run hands under warm water, letting warmth soften your day.", duration: "1 minute", glowNote: "What did you release down the drain?" },
  { id: 56, name: "Tea Meditation", emoji: "🍵", category: "water", action: "Feel the mug's weight and watch the steam before sipping.", duration: "5 minutes", glowNote: "What ritual brings you the most peace?" },
  { id: 57, name: "Make a Warm Drink", emoji: "☕", category: "water", action: "Make tea or cocoa, savoring each step of preparation.", duration: "5 minutes", glowNote: "What comfort lives in warmth?" },
  { id: 58, name: "Fragrance Pause", emoji: "🌸", category: "water", action: "Smell a lemon, flower, or essential oil, breathing deeply.", duration: "1 minute", glowNote: "What memory or feeling did the scent awaken?" },
  { id: 59, name: "Light a Candle", emoji: "🕯️", category: "water", action: "Light a candle and watch the flame dance for two minutes.", duration: "2 minutes", glowNote: "What thoughts dissolve in candlelight?" },
  { id: 60, name: "Savoring a Square", emoji: "🍫", category: "water", action: "Eat one chocolate square as slowly as possible.", duration: "3 minutes", glowNote: "What changes when you slow down pleasure?" },
  { id: 61, name: "Air Temperature Sensing", emoji: "🌡️", category: "water", action: "Notice the temperature difference between inhale and exhale.", duration: "2 minutes", glowNote: "What subtle sensations do you normally miss?" },
  { id: 62, name: "Try a New Recipe", emoji: "🍳", category: "water", action: "Try a new recipe, letting curiosity guide you.", duration: "30+ minutes", glowNote: "What did experimenting teach you?" },
  { id: 63, name: "The Screen Close", emoji: "📴", category: "water", action: "Before sleep, visualize closing your to-do list for the day.", duration: "2 minutes", glowNote: "What deserves to stay, and what can close for the night?" },
  { id: 64, name: "Pick Something to Donate", emoji: "🎁", category: "water", action: "Find one thing to donate, releasing it with gratitude.", duration: "5 minutes", glowNote: "What are you ready to pass on?" },

  // ✨ STILLNESS & BEING (65-76)
  { id: 65, name: "Gratitude Micro-Journal", emoji: "📝", category: "stillness", action: "Write three tiny things that went right today.", duration: "3 minutes", glowNote: "What small thing almost went unnoticed?" },
  { id: 66, name: "Write a Happy Memory", emoji: "✨", category: "stillness", action: "Write a happy memory from this past week.", duration: "5 minutes", glowNote: "What made this memory glow?" },
  { id: 67, name: "Write One Goal", emoji: "🎯", category: "stillness", action: "Write one goal for this week, small enough to feel possible.", duration: "3 minutes", glowNote: "What would accomplishing this goal give you?" },
  { id: 68, name: "Digital Sabbatical", emoji: "📵", category: "stillness", action: "Turn off all screens for one hour.", duration: "60 minutes", glowNote: "What did you hear, see, or feel without the screen?" },
  { id: 69, name: "Put the Phone Down", emoji: "🌙", category: "stillness", action: "Put your phone down for 15 minutes and just be.", duration: "15 minutes", glowNote: "What arose in the absence of distraction?" },
  { id: 70, name: "Organize Your Phone", emoji: "📱", category: "stillness", action: "Delete 5 apps you don't use, clearing digital clutter.", duration: "10 minutes", glowNote: "What digital weight are you ready to release?" },
  { id: 71, name: "Text Someone", emoji: "💬", category: "stillness", action: "Text someone you haven't talked to in a while.", duration: "2 minutes", glowNote: "Who came to mind first, and why?" },
  { id: 72, name: "Compliment Someone", emoji: "😊", category: "stillness", action: "Compliment a stranger or coworker with genuine warmth.", duration: "1 minute", glowNote: "How did giving kindness feel?" },
  { id: 73, name: "Compliment Yourself", emoji: "💛", category: "stillness", action: "Give yourself a genuine compliment, out loud if possible.", duration: "1 minute", glowNote: "What compliment did you need to hear from yourself?" },
  { id: 74, name: "Read a Chapter", emoji: "📖", category: "stillness", action: "Read a chapter in a book you've been meaning to finish.", duration: "15-20 minutes", glowNote: "What sentence or idea stayed with you?" },
  { id: 75, name: "Deep Breaths Outside", emoji: "🌿", category: "stillness", action: "Step outside and take three deep breaths of fresh air.", duration: "2 minutes", glowNote: "What shifted when you stepped outside?" },
  { id: 76, name: "Drink Water Slowly", emoji: "💧", category: "stillness", action: "Drink a full glass of water slowly, feeling each sip.", duration: "3 minutes", glowNote: "What does it feel like to give your body what it needs?" },
];

// Category styles
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'earth':
      return { icon: '🌿', label: 'Earth & Nature', color: 'from-green-600 to-emerald-700', light: 'bg-green-900/20', text: 'text-green-300', border: 'border-green-500/40', glow: 'shadow-green-500/30' };
    case 'breath':
      return { icon: '💨', label: 'Breath & Body', color: 'from-cyan-600 to-blue-700', light: 'bg-cyan-900/20', text: 'text-cyan-300', border: 'border-cyan-500/40', glow: 'shadow-cyan-500/30' };
    case 'seeing':
      return { icon: '👁️', label: 'Mindful Seeing', color: 'from-violet-600 to-purple-700', light: 'bg-violet-900/20', text: 'text-violet-300', border: 'border-violet-500/40', glow: 'shadow-violet-500/30' };
    case 'listening':
      return { icon: '👂', label: 'Mindful Listening', color: 'from-pink-600 to-rose-700', light: 'bg-pink-900/20', text: 'text-pink-300', border: 'border-pink-500/40', glow: 'shadow-pink-500/30' };
    case 'touch':
      return { icon: '✋', label: 'Touch & Texture', color: 'from-orange-600 to-red-700', light: 'bg-orange-900/20', text: 'text-orange-300', border: 'border-orange-500/40', glow: 'shadow-orange-500/30' };
    case 'water':
      return { icon: '💧', label: 'Water & Warmth', color: 'from-blue-600 to-indigo-700', light: 'bg-blue-900/20', text: 'text-blue-300', border: 'border-blue-500/40', glow: 'shadow-blue-500/30' };
    case 'stillness':
      return { icon: '✨', label: 'Stillness & Being', color: 'from-amber-500 to-yellow-600', light: 'bg-amber-900/20', text: 'text-amber-300', border: 'border-amber-500/40', glow: 'shadow-amber-500/30' };
    default:
      return { icon: '✨', label: 'Glow', color: 'from-amber-600 to-orange-700', light: 'bg-amber-900/20', text: 'text-amber-300', border: 'border-amber-500/40', glow: 'shadow-amber-500/30' };
  }
};

export default function GlowDeck() {
  const [mode, setMode] = useState<'home' | 'single' | 'triple' | 'browse'>('home');
  const [drawnCards, setDrawnCards] = useState<typeof glowDeck>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<typeof glowDeck[0] | null>(null);
  const [browseCategory, setBrowseCategory] = useState<string>('all');
  const [glowParticles, setGlowParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; duration: number; size: number }>>([]);

  // Generate warm glow particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4
      }));
      setGlowParticles(newParticles);
    };
    generateParticles();
    const interval = setInterval(generateParticles, 10000);
    return () => clearInterval(interval);
  }, []);

  const drawSingleCard = () => {
    const randomCard = glowDeck[Math.floor(Math.random() * glowDeck.length)];
    setDrawnCards([randomCard]);
    setIsRevealed(false);
    setMode('single');
  };

  const drawTripleCards = () => {
    const shuffled = [...glowDeck].sort(() => Math.random() - 0.5);
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
    ? glowDeck 
    : glowDeck.filter(card => card.category === browseCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-amber-950 p-4 relative overflow-hidden">
      
      {/* Warm glow background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-700/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-600/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Large glowing orbs */}
      <div className="absolute top-1/4 left-10 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating glow particles */}
      {glowParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.id % 3 === 0 ? '#fcd34d' : particle.id % 3 === 1 ? '#fb923c' : '#fbbf24',
            boxShadow: `0 0 ${particle.size * 4}px ${particle.id % 3 === 0 ? 'rgba(252,211,77,0.7)' : particle.id % 3 === 1 ? 'rgba(251,146,60,0.6)' : 'rgba(251,191,36,0.6)'}`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* HOME MODE */}
        {mode === 'home' && (
          <div className="text-center py-8">
            {/* Header */}
            <div className="mb-8">
              <div className="text-5xl mb-4">✨</div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                GLOW
              </h1>
              <p className="text-amber-200 text-lg font-semibold mb-1">High Frequency Message Cards</p>
              <p className="text-amber-300/80 text-sm italic">Experience the High Frequency of Small Actions</p>
              <div className="flex justify-center gap-2 mt-4 text-lg">
                <span>🌿</span>
                <span>💨</span>
                <span>👁️</span>
                <span>👂</span>
                <span>✋</span>
                <span>💧</span>
                <span>✨</span>
              </div>
            </div>

            {/* Main Actions */}
            <div className="space-y-4 mb-8">
              <button
                onClick={drawSingleCard}
                className="w-full max-w-xs mx-auto block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 hover:from-amber-500 hover:via-orange-400 hover:to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-amber-900/50 border border-amber-400/30"
              >
                <span className="text-xl mr-2">✨</span>
                Ignite Your Glow
              </button>
              
              <button
                onClick={drawTripleCards}
                className="w-full max-w-xs mx-auto block bg-gradient-to-r from-orange-800 via-amber-700 to-orange-800 hover:from-orange-700 hover:via-amber-600 hover:to-orange-700 text-amber-100 px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-orange-900/50 border border-amber-500/30"
              >
                <span className="text-xl mr-2">🌟</span>
                Three Glow Spread
                <span className="block text-xs text-amber-200 mt-1">Ignite • Enhance • Intensify</span>
              </button>
              
              <button
                onClick={() => setMode('browse')}
                className="w-full max-w-xs mx-auto block bg-amber-900/40 hover:bg-amber-800/50 text-amber-200 px-8 py-4 rounded-2xl font-semibold transition-all border border-amber-500/20"
              >
                <span className="text-xl mr-2">📖</span>
                Browse All 76 Activities
              </button>
            </div>

            {/* Intro Quote */}
            <div className="bg-amber-900/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 max-w-md mx-auto">
              <p className="text-amber-200 text-sm italic leading-relaxed">
                "Moments of glow ignite and enhance our inner light. These cards carry frequencies of higher thought and deepening wisdom."
              </p>
              <p className="text-amber-400 text-xs mt-3">76 cards of grounded, gentle action</p>
            </div>

            {/* Link to game */}
            <div className="mt-6">
              <a 
                href="https://lettergriddle.com/glow" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-200 text-sm underline transition-colors"
              >
                Play the calming GLOW game at lettergriddle.com/glow
              </a>
            </div>
          </div>
        )}

        {/* SINGLE CARD MODE */}
        {mode === 'single' && drawnCards.length > 0 && (
          <div className="py-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-amber-200 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                ✨ Your Glow Activity ✨
              </h2>
              <p className="text-amber-300/80 text-sm">A small action with powerful frequency</p>
            </div>

            <div className="flex justify-center mb-6">
              {!isRevealed ? (
                <button
                  onClick={revealCards}
                  className="w-48 h-72 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 rounded-2xl border-2 border-amber-400/40 shadow-2xl flex items-center justify-center cursor-pointer hover:border-amber-400/70 transition-all hover:shadow-amber-500/30 hover:shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <p className="text-amber-200 text-sm">Tap to reveal</p>
                  </div>
                </button>
              ) : (
                <div className="w-80 bg-gradient-to-br from-amber-900/90 via-orange-900/90 to-amber-900/90 backdrop-blur-sm rounded-2xl border border-amber-400/40 shadow-2xl p-6 text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryStyle(drawnCards[0].category).light} ${getCategoryStyle(drawnCards[0].category).text} border ${getCategoryStyle(drawnCards[0].category).border}`}>
                    {getCategoryStyle(drawnCards[0].category).icon} {getCategoryStyle(drawnCards[0].category).label}
                  </div>
                  <div className="text-5xl mb-3">{drawnCards[0].emoji}</div>
                  <h3 className="text-xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {drawnCards[0].name}
                  </h3>
                  
                  {/* Action */}
                  <div className="bg-amber-950/50 rounded-xl p-4 mb-4 border border-amber-500/20">
                    <p className="text-white text-sm leading-relaxed">
                      {drawnCards[0].action}
                    </p>
                    <p className="text-amber-400 text-xs mt-2 font-semibold">
                      ⏱️ {drawnCards[0].duration}
                    </p>
                  </div>
                  
                  {/* Glow Note */}
                  <div className="bg-gradient-to-br from-amber-800/30 to-orange-800/30 rounded-xl p-3 border border-amber-400/30">
                    <p className="text-xs font-semibold text-amber-300 mb-1">✨ Glow Note</p>
                    <p className="text-amber-100 text-sm italic">{drawnCards[0].glowNote}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3">
              <button
                onClick={drawSingleCard}
                className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
              >
                Draw Another
              </button>
              <button
                onClick={goHome}
                className="bg-amber-900 hover:bg-amber-800 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold transition-all"
              >
                ✨ Home
              </button>
            </div>
          </div>
        )}

        {/* TRIPLE CARD MODE */}
        {mode === 'triple' && drawnCards.length === 3 && (
          <div className="py-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-amber-200 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                🌟 Three Glow Spread 🌟
              </h2>
              <p className="text-amber-300/80 text-sm">Ignite • Enhance • Intensify</p>
            </div>

            {!isRevealed ? (
              <div className="flex justify-center gap-3 mb-6">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={revealCards}
                    className="w-28 h-40 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 rounded-xl border-2 border-amber-400/40 shadow-xl flex items-center justify-center cursor-pointer hover:border-amber-400/70 transition-all"
                  >
                    <div className="text-2xl">✨</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {drawnCards.map((card, index) => (
                  <div key={card.id} className={`bg-gradient-to-br from-amber-900/90 via-orange-900/90 to-amber-900/90 backdrop-blur-sm rounded-2xl border ${getCategoryStyle(card.category).border} shadow-xl p-4`}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{card.emoji}</div>
                      <div className="flex-1">
                        <p className={`${getCategoryStyle(card.category).text} text-xs font-semibold mb-1`}>
                          {index === 0 ? '🔥 Ignite' : index === 1 ? '✨ Enhance' : '🌟 Intensify'}
                        </p>
                        <h3 className="text-lg font-bold text-amber-200" style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </h3>
                        <p className="text-white text-sm my-2">{card.action}</p>
                        <p className="text-amber-300 text-xs mb-2">⏱️ {card.duration}</p>
                        <div className={`inline-flex items-center gap-2 ${getCategoryStyle(card.category).light} rounded-full px-3 py-1 border ${getCategoryStyle(card.category).border}`}>
                          <span className="text-sm">{getCategoryStyle(card.category).icon}</span>
                          <span className={`text-xs ${getCategoryStyle(card.category).text}`}>{getCategoryStyle(card.category).label}</span>
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
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
                >
                  ✨ Reveal Your Glow ✨
                </button>
              </div>
            )}

            {isRevealed && (
              <div className="flex justify-center gap-3">
                <button
                  onClick={drawTripleCards}
                  className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
                >
                  Draw Again
                </button>
                <button
                  onClick={goHome}
                  className="bg-amber-900 hover:bg-amber-800 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold transition-all"
                >
                  ✨ Home
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
                📖 All 76 Glow Activities
              </h2>
              <p className="text-amber-300/80 text-sm">Browse by category</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['all', 'earth', 'breath', 'seeing', 'listening', 'touch', 'water', 'stillness'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBrowseCategory(cat)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                    browseCategory === cat
                      ? 'bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 border border-amber-400/40'
                      : 'bg-amber-900/40 text-amber-200 hover:bg-amber-800/50 border border-amber-500/20'
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
                  className={`bg-gradient-to-br from-amber-900/80 via-orange-900/80 to-amber-900/80 backdrop-blur-sm rounded-xl border ${getCategoryStyle(card.category).border} p-4 cursor-pointer hover:border-amber-400/50 transition-all`}
                  onClick={() => setSelectedCard(selectedCard?.id === card.id ? null : card)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{card.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-amber-200" style={{ fontFamily: 'Georgia, serif' }}>
                        #{card.id} {card.name}
                      </h3>
                      <p className="text-amber-300/80 text-xs">⏱️ {card.duration}</p>
                    </div>
                    <div className={`text-lg ${getCategoryStyle(card.category).text}`}>
                      {getCategoryStyle(card.category).icon}
                    </div>
                  </div>

                  {/* Expanded Card Detail */}
                  {selectedCard?.id === card.id && (
                    <div className="mt-4 pt-4 border-t border-amber-500/20">
                      <div className="bg-amber-950/50 rounded-xl p-3 mb-3 border border-amber-500/20">
                        <p className="text-white text-sm leading-relaxed">{card.action}</p>
                      </div>
                      <div className="bg-gradient-to-br from-amber-800/30 to-orange-800/30 rounded-xl p-3 border border-amber-400/30">
                        <p className="text-xs font-semibold text-amber-300 mb-1">✨ Glow Note</p>
                        <p className="text-amber-100 text-sm italic">{card.glowNote}</p>
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
                className="bg-amber-900 hover:bg-amber-800 text-amber-200 px-6 py-3 rounded-full font-semibold transition-all"
              >
                ✨ Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-xl">
            <span>🌿</span>
            <span>💨</span>
            <span>👁️</span>
            <span>👂</span>
            <span>✋</span>
            <span>💧</span>
            <span>✨</span>
          </div>
          <p className="text-amber-300 text-sm italic">
            "Enjoy igniting, enhancing, and intensifying your Glow."
          </p>
          <p className="text-amber-400 text-xs">
            Part of the Breakfast Tarot Family 🥞
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/" className="text-amber-300 hover:text-white underline">Daily Tarot</a>
            <span className="text-amber-500">•</span>
            <a href="/oracle" className="text-amber-300 hover:text-white underline">Oracle</a>
            <span className="text-amber-500">•</span>
            <a href="/affirmations" className="text-amber-300 hover:text-white underline">Affirmations</a>
            <span className="text-amber-500">•</span>
            <a href="/cozy" className="text-amber-300 hover:text-white underline">Cozy Mystic</a>
          </div>
          <div className="text-xs text-amber-500 pt-2">
            © 2026 GLOW. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}