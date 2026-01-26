"use client";
import React, { useState } from 'react';

// 22 Letter Griddle Breakfast Affirmations
const affirmationCards = [
  {
    id: 1,
    emoji: "☕",
    title: "First Cup",
    affirmation: "I welcome the energy that flows to me today.",
    expansion: "Like the first sip of something warm, today's possibilities are waking up inside you. You do not have to chase energy. It is already brewing, already rising, already yours."
  },
  {
    id: 2,
    emoji: "🥞",
    title: "The Golden Stack",
    affirmation: "My blessings are stacking up, one upon another.",
    expansion: "Every good thing you have ever done, every kindness, every brave moment, has added another layer to your life. You are richer than you remember. The stack keeps growing."
  },
  {
    id: 3,
    emoji: "🍯",
    title: "Sweet Flow",
    affirmation: "I allow sweetness to flow into my life at its own perfect pace.",
    expansion: "Honey cannot be rushed. Neither can your dreams. Trust that what is meant for you is making its way to you, golden and unhurried, exactly on time."
  },
  {
    id: 4,
    emoji: "✨",
    title: "Cinnamon Spark",
    affirmation: "I add warmth and magic to everything I touch.",
    expansion: "You are the spice that transforms the ordinary into something special. Your presence changes the flavor of every room you enter. Sprinkle yourself generously."
  },
  {
    id: 5,
    emoji: "🌅",
    title: "Morning Light",
    affirmation: "I rise with the sun, full of new possibilities.",
    expansion: "Yesterday dissolved into the night. Right now, the light is returning, and so is your hope. Every sunrise is the universe whispering: try again, begin again, shine again."
  },
  {
    id: 6,
    emoji: "🧈",
    title: "Melting Into Trust",
    affirmation: "I soften my resistance and let goodness soak in.",
    expansion: "What you hold rigid cannot receive. Let the warmth of this moment melt your edges. When you soften, everything flows better. Trust is not hard. Trust is butter on warm bread."
  },
  {
    id: 7,
    emoji: "☕",
    title: "The Refill",
    affirmation: "I am never truly empty. More is always available.",
    expansion: "Even when you feel drained, a refill is possible. The pot is still warm. Your energy, your ideas, your hope can all be replenished. Just hold out your cup."
  },
  {
    id: 8,
    emoji: "🥞",
    title: "Warm Center",
    affirmation: "I nourish myself from the inside out.",
    expansion: "Before you feed the world, feed yourself. Your warmth, your wisdom, your love must start at your own center and ripple outward. You cannot pour from an empty plate."
  },
  {
    id: 9,
    emoji: "🍯",
    title: "Golden Patience",
    affirmation: "I trust the timing of my sweetest dreams.",
    expansion: "The best things drizzle slowly. Your dreams are not late. They are ripening, thickening, becoming more golden with every moment of patient trust."
  },
  {
    id: 10,
    emoji: "⚡",
    title: "Café Spark",
    affirmation: "I am buzzing with creative energy and bright ideas.",
    expansion: "Something is percolating in you right now. Ideas are bubbling up, connections are forming, inspiration is ready to pour. Let the spark catch. Let yourself create."
  },
  {
    id: 11,
    emoji: "🧇",
    title: "Beautiful Structure",
    affirmation: "My routines and boundaries hold space for joy.",
    expansion: "Structure is not a cage. It is a waffle grid that holds the syrup exactly where it needs to pool. Your healthy boundaries create pockets where sweetness can gather."
  },
  {
    id: 12,
    emoji: "🌊",
    title: "Easy Flow",
    affirmation: "I release struggle and move with the current of life.",
    expansion: "Stop swimming upstream. Turn around and notice how the water wants to carry you. Ease is not laziness. Ease is wisdom. Flow with what is flowing."
  },
  {
    id: 13,
    emoji: "🥚",
    title: "Quiet Potential",
    affirmation: "Something beautiful is forming in my stillness.",
    expansion: "Not everything needs to hatch today. Some dreams need more time in the warm dark. Trust the quiet. Trust the waiting. What is growing will emerge when ready."
  },
  {
    id: 14,
    emoji: "💫",
    title: "Abundant Morning",
    affirmation: "There is more than enough for me and everyone I love.",
    expansion: "Scarcity is a bad dream. Wake up from it. The breakfast table of the universe is overflowing, and you have a seat. Reach for what you need. There is plenty."
  },
  {
    id: 15,
    emoji: "🔥",
    title: "Tended Flame",
    affirmation: "I know when to turn up the heat and when to let things simmer.",
    expansion: "You have a chef's intuition about your own life. Some things need intensity. Others need patience. You know the difference. Trust your timing."
  },
  {
    id: 16,
    emoji: "🦋",
    title: "Light Rising",
    affirmation: "My vibration is lifting, and I attract what matches my joy.",
    expansion: "As you rise, your world rises with you. The lighter you feel, the lighter your path becomes. Joy is not frivolous. Joy is a frequency that opens doors."
  },
  {
    id: 17,
    emoji: "🍞",
    title: "Daily Bread",
    affirmation: "My needs are met, today and every day.",
    expansion: "You will have what you need. Not always what you want, not always on your timeline, but what you truly need will come. It always has. It always will."
  },
  {
    id: 18,
    emoji: "🔀",
    title: "Open Paths",
    affirmation: "Every choice I make opens new doors of possibility.",
    expansion: "You are not trapped. You are standing at a crossroads with roads leading in every direction. Even the smallest decision moves you somewhere new. Choose with curiosity."
  },
  {
    id: 19,
    emoji: "🪺",
    title: "Safe Nest",
    affirmation: "I create warmth and safety wherever I go.",
    expansion: "Home is not just a place. It is a feeling you carry inside you. You can make any space feel cozy, any moment feel held. Your presence is a sanctuary."
  },
  {
    id: 20,
    emoji: "🌟",
    title: "Inner Knowing",
    affirmation: "My intuition is clear, and I trust what I feel.",
    expansion: "That quiet voice inside you is wise. It has been right before, and it is guiding you now. Listen past the noise. Your knowing is speaking. Trust it."
  },
  {
    id: 21,
    emoji: "🥞",
    title: "Generous Portion",
    affirmation: "I give freely because I trust more is coming.",
    expansion: "Generosity is not loss. It is circulation. When you give from a full heart, you create space for more to flow in. The universe loves a generous spirit."
  },
  {
    id: 22,
    emoji: "☀️",
    title: "Bright Horizon",
    affirmation: "My future is warm, golden, and full of good things.",
    expansion: "Look toward tomorrow with soft eyes. Something wonderful is cooking for you. You cannot see it yet, but you can feel it. That feeling is true. Trust the warmth ahead."
  }
];

export default function AffirmationsPage() {
  const [currentCard, setCurrentCard] = useState<typeof affirmationCards[0] | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showExpansion, setShowExpansion] = useState(false);

  const pullCard = () => {
    const shuffled = [...affirmationCards].sort(() => Math.random() - 0.5);
    setCurrentCard(shuffled[0]);
    setIsRevealed(false);
    setShowExpansion(false);
  };

  const revealCard = () => {
    setIsRevealed(true);
  };

  const toggleExpansion = () => {
    setShowExpansion(!showExpansion);
  };

  const startOver = () => {
    setCurrentCard(null);
    setIsRevealed(false);
    setShowExpansion(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            🥞 Letter Griddle Cafe
          </h1>
          <h2 className="text-xl text-amber-700 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Breakfast Affirmations
          </h2>
          <p className="text-amber-600 text-sm">22 whispers of warmth and wisdom from the cafe</p>
        </div>

        {/* Card Area */}
        {!currentCard ? (
          <div className="space-y-6">
            {/* Pull Card Button */}
            <div 
              onClick={pullCard}
              className="bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-100 rounded-3xl p-8 border-2 border-amber-300 shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Receive Your Affirmation
                </h3>
                <p className="text-amber-700 mb-2">
                  A gentle message from the Letter Griddle Cafe
                </p>
                <p className="text-amber-600 text-sm">Tap to pull a card</p>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white/60 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-lg font-bold text-amber-800 mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                ☕ From the Cafe
              </h3>
              <p className="text-amber-700 text-center text-sm leading-relaxed mb-4">
                These 22 affirmations carry the cozy magic of the Letter Griddle Cafe. 
                Each card holds a whisper of encouragement, a warm reminder of your own abundance, 
                and a gentle nudge toward your highest vibration.
              </p>
              <p className="text-amber-600 text-center text-xs italic">
                Pull a card whenever you need a moment of warmth and wisdom.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center space-y-3">
              <a 
                href="/oracle"
                className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                🌅 Breakfast Oracle
              </a>
              <br />
              <a 
                href="/"
                className="inline-block bg-white hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300 transition-all"
              >
                🎴 Daily Tarot Card
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* The Card */}
            <div className="flex justify-center">
              <div
                onClick={!isRevealed ? revealCard : toggleExpansion}
                className={`w-64 rounded-3xl shadow-xl cursor-pointer transition-all duration-500 ${
                  isRevealed 
                    ? 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-4 border-amber-400' 
                    : 'bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 hover:scale-105'
                }`}
              >
                {!isRevealed ? (
                  <div className="h-80 flex flex-col items-center justify-center text-white p-6">
                    <div className="text-5xl mb-4">🥞</div>
                    <div className="text-xl font-bold text-center" style={{ fontFamily: 'Georgia, serif' }}>
                      Letter Griddle Cafe
                    </div>
                    <div className="text-sm mt-2 opacity-90">Breakfast Affirmations</div>
                    <div className="text-xs mt-4 opacity-80">Tap to reveal</div>
                  </div>
                ) : (
                  <div className="p-6 text-center min-h-[320px] flex flex-col justify-center">
                    <div className="text-5xl mb-3">{currentCard.emoji}</div>
                    <div className="text-xl font-bold text-amber-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      {currentCard.title}
                    </div>
                    <div className="text-amber-700 italic leading-relaxed text-lg">
                      "{currentCard.affirmation}"
                    </div>
                    <div className="text-xs text-amber-500 mt-4">
                      Tap for more
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Expansion */}
            {isRevealed && showExpansion && (
              <div className="bg-white/80 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
                <div className="text-center mb-4">
                  <span className="text-3xl">{currentCard.emoji}</span>
                  <h3 className="text-xl font-bold text-amber-800 mt-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {currentCard.title}
                  </h3>
                </div>
                <p className="text-amber-600 italic text-center mb-4 text-lg">
                  "{currentCard.affirmation}"
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-amber-700 leading-relaxed text-center">
                    {currentCard.expansion}
                  </p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={pullCard}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                ✨ Another Affirmation
              </button>
              <button
                onClick={startOver}
                className="bg-white hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300 transition-all"
              >
                🥞 Start Over
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 pt-4">
              <a 
                href="/oracle"
                className="text-amber-700 hover:text-amber-900 underline text-sm"
              >
                🌅 Breakfast Oracle
              </a>
              <span className="text-amber-400">•</span>
              <a 
                href="/"
                className="text-amber-700 hover:text-amber-900 underline text-sm"
              >
                🎴 Daily Tarot
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-2xl">
            <span>☕</span>
            <span>🥞</span>
            <span>🍯</span>
            <span>✨</span>
            <span>💫</span>
          </div>
          <p className="text-amber-600 text-sm italic">
            "Come for the pancakes, stay for the magic."
          </p>
          <p className="text-amber-500 text-xs">
            Part of the Letter Griddle Family 🥞
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/" className="text-amber-700 hover:text-amber-900 underline">Daily Tarot</a>
            <span className="text-amber-400">•</span>
            <a href="/oracle" className="text-amber-700 hover:text-amber-900 underline">Oracle</a>
            <span className="text-amber-400">•</span>
            <a href="/spreads" className="text-amber-700 hover:text-amber-900 underline">Spreads</a>
          </div>
        </div>

      </div>
    </div>
  );
}
