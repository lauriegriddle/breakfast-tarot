"use client";
import React, { useState } from 'react';

// 22 Breakfast Oracle Cards with Abundance & Wisdom
const oracleCards = [
  {
    id: 1,
    name: "First Light",
    emoji: "🌅",
    quickMessage: "A new day brings new possibilities",
    fullMessage: "The sun rises without hesitation, and so can you. Whatever happened yesterday has dissolved into the night. Right now, in this fresh moment, every path is open. The universe is handing you a blank page and a golden pen. What will you write? Trust that the light returning each morning is a promise: you always get another chance to begin again."
  },
  {
    id: 2,
    name: "The First Sip",
    emoji: "☕",
    quickMessage: "Pause before you rush. Savor this moment.",
    fullMessage: "There is wisdom in the pause between waking and doing. That first sip of something warm is a tiny ritual of presence. Today, before you dive into the noise and demands, take one conscious breath. Let the warmth spread through you. The world will wait thirty seconds while you arrive fully into your own life. This small pause is not laziness; it is power."
  },
  {
    id: 3,
    name: "Over Easy",
    emoji: "🍳",
    quickMessage: "Go gently today. No need to flip out.",
    fullMessage: "Not everything requires force or urgency. Some situations call for a delicate touch, a patient hand, a willingness to let things set before you try to move them. If you flip too soon, things fall apart. If you wait with trust, everything holds together beautifully. Today, practice the art of gentle timing. Easy does it."
  },
  {
    id: 4,
    name: "The Golden Stack",
    emoji: "🥞",
    quickMessage: "Abundance is layered. One thing builds on another.",
    fullMessage: "Your blessings are stacking up, even when you cannot see the full pile. Every kind word you have spoken, every challenge you have overcome, every small choice toward goodness has added another layer to your life. You are richer than you realize. Today, acknowledge the golden stack you have been building all along. More is coming, and it will have a soft place to land."
  },
  {
    id: 5,
    name: "Melting Point",
    emoji: "🧈",
    quickMessage: "Let your resistance soften",
    fullMessage: "What are you holding rigid that wants to flow? Butter knows the secret: when warmth is applied, hardness becomes golden liquid that makes everything better. Your resistance is not protecting you; it is keeping sweetness from soaking in. Let the warmth of this moment soften your edges. Melt into trust. Melt into allowing. Melt into the goodness waiting for you."
  },
  {
    id: 6,
    name: "Slow Drizzle",
    emoji: "🍯",
    quickMessage: "Sweetness takes time. Do not rush the good stuff.",
    fullMessage: "Honey cannot be hurried. It flows at its own golden pace, and the waiting only makes the sweetness more precious. Whatever you are hoping for, whatever you are building toward, let it come at its natural speed. Rushing creates spills and sticky messes. Patience creates that perfect, glistening moment when everything lands exactly where it should. Trust the drizzle."
  },
  {
    id: 7,
    name: "The Warm Bowl",
    emoji: "🥣",
    quickMessage: "Comfort is available. Receive it.",
    fullMessage: "Somewhere, someone is holding out a bowl of warmth for you. It might be a kind word, an unexpected offer, a moment of peace in a chaotic day. Your only job is to receive it. You do not have to earn comfort. You do not have to finish your to-do list first. The warm bowl is here now, and you are allowed to accept nourishment simply because you exist and you matter."
  },
  {
    id: 8,
    name: "Fresh Squeeze",
    emoji: "🍊",
    quickMessage: "Extract the good from this situation",
    fullMessage: "Even when life hands you something that feels ordinary or difficult, there is juice inside. Squeeze it. Look for the hidden sweetness, the unexpected vitamin, the bright burst of flavor you almost missed. Every situation contains some form of nourishment if you are willing to apply a little pressure and catch what flows out. What good can you extract from today?"
  },
  {
    id: 9,
    name: "The Flaky Layers",
    emoji: "🥐",
    quickMessage: "There is more beneath the surface",
    fullMessage: "A croissant looks simple from the outside, but inside are dozens of delicate layers, each one created by patience and folding and time. The situation you are examining is the same way. Do not judge by the surface. There is complexity, history, and hidden beauty in every person and circumstance. Peel back gently. Appreciate the layers. The richness is in the depth."
  },
  {
    id: 10,
    name: "Small and Mighty",
    emoji: "🫐",
    quickMessage: "Little things add up to big nourishment",
    fullMessage: "Never underestimate the power of small. A single blueberry seems insignificant, but a handful becomes a burst of antioxidants, a pop of joy, a tiny medicine. Your small actions work the same way. The brief smile, the two-minute phone call, the single page read, the one vegetable eaten. Small and mighty is how lasting change happens. Celebrate your tiny victories today."
  },
  {
    id: 11,
    name: "Daily Bread",
    emoji: "🍞",
    quickMessage: "Trust that your basic needs will be met",
    fullMessage: "Across all cultures and centuries, bread represents the promise of enough. You will have what you need. Not always what you want, not always on your timeline, but what you truly need will come. This card is a reminder to release the grip of scarcity. Your daily bread is baking right now, and it will arrive warm. In the meantime, notice how much you already have."
  },
  {
    id: 12,
    name: "The Potential",
    emoji: "🥚",
    quickMessage: "Something is waiting to hatch",
    fullMessage: "Within the quiet shell of your current circumstances, something new is forming. You may not see movement yet. You may wonder if anything is really happening. But potential does its best work in darkness and stillness. Keep the egg warm with your attention and hope. Do not crack it open early out of impatience. When the time is right, new life will emerge."
  },
  {
    id: 13,
    name: "The Refill",
    emoji: "☕",
    quickMessage: "You can start again. Your cup is not empty.",
    fullMessage: "Even when you feel drained to the dregs, a refill is always possible. This is not the end of your energy, your ideas, or your chances. The pot is still warm, and there is more where that came from. Rest if you need to, but do not believe the lie that you have nothing left. Ask for a refill. Accept the refill. The next cup might be the best one yet."
  },
  {
    id: 14,
    name: "The Grid",
    emoji: "🧇",
    quickMessage: "Structure supports creativity",
    fullMessage: "A waffle without its grid would just be a flat, boring pancake (no offense to pancakes). The grid creates pockets that hold sweetness, texture that delights, structure that makes creativity possible. Do not resist healthy boundaries and routines. They are not cages; they are containers that let the good stuff pool in all the right places. Build your grid, then fill it with joy."
  },
  {
    id: 15,
    name: "Seasonal Sweetness",
    emoji: "🍓",
    quickMessage: "This moment will not last forever. Enjoy it now.",
    fullMessage: "Strawberry season is short, and that is exactly what makes it precious. Whatever is blooming in your life right now, whether joy or challenge, is a season. It will pass. The sweetness of today cannot be stored for later; it must be tasted now. Bite into this moment. Let the juice run down your chin. Be fully here while here is this beautiful."
  },
  {
    id: 16,
    name: "Simple Nourishment",
    emoji: "🥛",
    quickMessage: "Sometimes the basics are enough",
    fullMessage: "You do not always need the fancy solution, the complicated plan, the expensive answer. Sometimes what restores you is as simple as a glass of cold milk: basic, pure, and exactly right. Today, return to fundamentals. Drink water. Take a walk. Call someone you love. The simple things are simple because they work. Trust the basics."
  },
  {
    id: 17,
    name: "The Burner",
    emoji: "🔥",
    quickMessage: "What needs more heat? What needs less?",
    fullMessage: "A good cook knows how to manage the flame. Some things need high heat and fast action. Others need a low simmer and long patience. Today, examine your life with a chef's eye. Where are you burning things by applying too much intensity? Where are you leaving things cold that need your fire? Adjust the burners. You have more control than you think."
  },
  {
    id: 18,
    name: "A Pinch of Salt",
    emoji: "🧂",
    quickMessage: "A little skepticism is healthy",
    fullMessage: "Salt makes everything better, but only in small amounts. The same is true for doubt. A pinch of healthy skepticism protects you from gullibility and bad deals. But too much salt ruins the dish, and too much cynicism ruins your ability to taste life's sweetness. Today, apply your doubt sparingly and strategically. Mostly, stay open to flavor."
  },
  {
    id: 19,
    name: "The Empty Plate",
    emoji: "🍽️",
    quickMessage: "Make room for what is coming",
    fullMessage: "An empty plate is not a sign of lack; it is an invitation. Before the feast can arrive, space must exist to receive it. If your plate is piled with stale leftovers from old situations, there is no room for fresh nourishment. Clear away what no longer serves you. Wash the plate with forgiveness. Set it down with expectation. The next course is being prepared."
  },
  {
    id: 20,
    name: "The Chef Within",
    emoji: "👨‍🍳",
    quickMessage: "You have the skills. Trust yourself.",
    fullMessage: "Stop waiting for someone else to prepare your life for you. You have hands that can chop, stir, and create. You have instincts about what flavors work together. You have survived enough burnt dishes to know better now. The chef within you is ready to take charge of the kitchen. Tie on your apron. Grab your spoon. You are more capable than you know."
  },
  {
    id: 21,
    name: "The Nest",
    emoji: "🪺",
    quickMessage: "Home, safety, and those you nurture",
    fullMessage: "Where is your nest? Who gathers there with you? This card speaks to home in all its forms: the physical place you rest, the people who feel like safety, the inner sanctuary of your own heart. Today, tend to your nest. Fluff the pillows. Check on your people. Make sure your inner home is warm and welcoming. From a good nest, you can fly anywhere."
  },
  {
    id: 22,
    name: "Brunch Hour",
    emoji: "🌄",
    quickMessage: "The best of both worlds. You do not have to choose.",
    fullMessage: "Who said you have to pick breakfast or lunch? Brunch is the delicious rebellion against false choices. In your life right now, where are you forcing yourself into an either/or when both/and is possible? You can rest and be productive. You can be gentle and strong. You can honor the past and embrace the future. Brunch hour is here. Have it all."
  }
];

// Wisdom of Morning Spread positions
const wisdomSpreadPositions = [
  { position: "What to Release", description: "What no longer serves your highest good" },
  { position: "What to Embrace", description: "What is ready to nourish you today" },
  { position: "Your Morning Wisdom", description: "The guidance your soul wants you to hear" }
];

export default function OraclePage() {
  const [mode, setMode] = useState<'choose' | 'single' | 'spread'>('choose');
  const [singleCard, setSingleCard] = useState<typeof oracleCards[0] | null>(null);
  const [spreadCards, setSpreadCards] = useState<typeof oracleCards>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [revealedSpreadCards, setRevealedSpreadCards] = useState<boolean[]>([false, false, false]);
  const [selectedSpreadCard, setSelectedSpreadCard] = useState<number | null>(null);

  const pullSingleCard = () => {
    const shuffled = [...oracleCards].sort(() => Math.random() - 0.5);
    setSingleCard(shuffled[0]);
    setIsRevealed(false);
    setMode('single');
  };

  const pullSpreadCards = () => {
    const shuffled = [...oracleCards].sort(() => Math.random() - 0.5);
    setSpreadCards(shuffled.slice(0, 3));
    setRevealedSpreadCards([false, false, false]);
    setSelectedSpreadCard(null);
    setMode('spread');
  };

  const revealSpreadCard = (index: number) => {
    const newRevealed = [...revealedSpreadCards];
    newRevealed[index] = true;
    setRevealedSpreadCards(newRevealed);
  };

  const revealAllSpreadCards = () => {
    setRevealedSpreadCards([true, true, true]);
  };

  const startOver = () => {
    setMode('choose');
    setSingleCard(null);
    setSpreadCards([]);
    setIsRevealed(false);
    setRevealedSpreadCards([false, false, false]);
    setSelectedSpreadCard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            🌅 Breakfast Oracle
          </h1>
          <p className="text-amber-600">22 cards of morning wisdom and abundance</p>
        </div>

        {/* Mode Selection */}
        {mode === 'choose' && (
          <div className="space-y-6">
            {/* Morning Message (Single Card) */}
            <div 
              onClick={pullSingleCard}
              className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">☀️</div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Morning Message
                </h2>
                <p className="text-amber-700">Pull a single card for today's guidance</p>
                <p className="text-amber-600 text-sm mt-2">Tap to begin</p>
              </div>
            </div>

            {/* Wisdom of Morning Spread */}
            <div 
              onClick={pullSpreadCards}
              className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 border-2 border-orange-300 shadow-lg cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🌄</div>
                <h2 className="text-2xl font-bold text-orange-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Wisdom of Morning
                </h2>
                <p className="text-orange-700">A 3-card spread for deeper insight</p>
                <div className="flex justify-center gap-4 mt-3 text-sm text-orange-600">
                  <span>Release</span>
                  <span>•</span>
                  <span>Embrace</span>
                  <span>•</span>
                  <span>Wisdom</span>
                </div>
                <p className="text-orange-600 text-sm mt-2">Tap to begin</p>
              </div>
            </div>

            {/* Oracle Deck Info */}
            <div className="bg-white/60 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-lg font-bold text-amber-800 mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                🥞 About the Breakfast Oracle
              </h3>
              <p className="text-amber-700 text-center text-sm leading-relaxed">
                22 cards infused with the wisdom of morning rituals and the abundance of a nourishing breakfast. 
                Each card carries a message to help you start your day with intention, gratitude, and trust.
              </p>
            </div>

            {/* Back to Tarot */}
            <div className="text-center">
              <a 
                href="/"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                🎴 Back to Griddle Deck Tarot
              </a>
            </div>
          </div>
        )}

        {/* Single Card Pull */}
        {mode === 'single' && singleCard && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-800 text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              ☀️ Your Morning Message
            </h2>

            {/* Card */}
            <div className="flex justify-center">
              <div
                onClick={() => setIsRevealed(true)}
                className={`w-48 h-72 rounded-2xl shadow-xl cursor-pointer transition-all duration-500 ${
                  isRevealed 
                    ? 'bg-gradient-to-br from-yellow-100 to-amber-100 border-4 border-amber-400' 
                    : 'bg-gradient-to-br from-amber-400 to-orange-500 hover:scale-105'
                }`}
              >
                {!isRevealed ? (
                  <div className="h-full flex flex-col items-center justify-center text-white">
                    <div className="text-5xl mb-3">🌅</div>
                    <div className="text-lg font-bold">Breakfast Oracle</div>
                    <div className="text-sm mt-2 opacity-80">Tap to reveal</div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-5xl mb-2">{singleCard.emoji}</div>
                    <div className="text-lg font-bold text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
                      {singleCard.name}
                    </div>
                    <div className="text-sm text-amber-600 mt-2 italic">
                      {singleCard.quickMessage}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Full Message */}
            {isRevealed && (
              <div className="bg-white/80 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
                <h3 className="text-xl font-bold text-amber-800 mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  {singleCard.emoji} {singleCard.name}
                </h3>
                <p className="text-amber-700 leading-relaxed text-center">
                  {singleCard.fullMessage}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={startOver}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                🌅 New Reading
              </button>
              <a 
                href="/"
                className="bg-white hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300 transition-all"
              >
                🎴 Daily Tarot
              </a>
            </div>
          </div>
        )}

        {/* Wisdom of Morning Spread */}
        {mode === 'spread' && spreadCards.length === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              🌄 Wisdom of Morning
            </h2>
            <p className="text-center text-orange-600 text-sm mb-4">Tap each card to reveal its message</p>

            {/* Spread Cards */}
            <div className="grid grid-cols-3 gap-3">
              {spreadCards.map((card, index) => (
                <div key={card.id} className="text-center">
                  {/* Position Label */}
                  <div className="text-xs font-bold text-orange-700 mb-2 h-10 flex items-center justify-center">
                    {wisdomSpreadPositions[index].position}
                  </div>
                  
                  {/* Card */}
                  <div
                    onClick={() => {
                      if (!revealedSpreadCards[index]) {
                        revealSpreadCard(index);
                      } else {
                        setSelectedSpreadCard(selectedSpreadCard === index ? null : index);
                      }
                    }}
                    className={`w-full aspect-[2/3] rounded-xl shadow-lg cursor-pointer transition-all duration-500 ${
                      revealedSpreadCards[index]
                        ? `bg-gradient-to-br from-yellow-100 to-amber-100 border-3 ${selectedSpreadCard === index ? 'border-orange-500 scale-105' : 'border-amber-400'}`
                        : 'bg-gradient-to-br from-orange-400 to-amber-500 hover:scale-105'
                    }`}
                  >
                    {!revealedSpreadCards[index] ? (
                      <div className="h-full flex flex-col items-center justify-center text-white p-2">
                        <div className="text-3xl mb-1">🌅</div>
                        <div className="text-xs">Tap to reveal</div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-2">
                        <div className="text-3xl mb-1">{card.emoji}</div>
                        <div className="text-xs font-bold text-amber-800 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reveal All Button */}
            {!revealedSpreadCards.every(r => r) && (
              <div className="text-center">
                <button
                  onClick={revealAllSpreadCards}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all text-sm"
                >
                  Reveal All Cards
                </button>
              </div>
            )}

            {/* Selected Card Detail */}
            {selectedSpreadCard !== null && revealedSpreadCards[selectedSpreadCard] && (
              <div className="bg-white/80 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
                <div className="text-xs font-bold text-orange-600 mb-1 text-center uppercase tracking-wide">
                  {wisdomSpreadPositions[selectedSpreadCard].position}
                </div>
                <div className="text-xs text-orange-500 mb-3 text-center">
                  {wisdomSpreadPositions[selectedSpreadCard].description}
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  {spreadCards[selectedSpreadCard].emoji} {spreadCards[selectedSpreadCard].name}
                </h3>
                <p className="text-sm text-amber-600 italic text-center mb-3">
                  {spreadCards[selectedSpreadCard].quickMessage}
                </p>
                <p className="text-amber-700 leading-relaxed text-sm">
                  {spreadCards[selectedSpreadCard].fullMessage}
                </p>
              </div>
            )}

            {/* Prompt to tap cards */}
            {revealedSpreadCards.every(r => r) && selectedSpreadCard === null && (
              <div className="text-center text-orange-600 text-sm">
                ✨ Tap any card to read its full message
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={startOver}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                🌄 New Reading
              </button>
              <a 
                href="/"
                className="bg-white hover:bg-orange-50 text-orange-700 px-6 py-3 rounded-full font-semibold border-2 border-orange-300 transition-all"
              >
                🎴 Daily Tarot
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-2xl">
            <span>☀️</span>
            <span>🥞</span>
            <span>☕</span>
            <span>🍯</span>
            <span>🌅</span>
          </div>
          <p className="text-amber-600 text-sm">
            Part of the Breakfast Tarot family
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/" className="text-amber-700 hover:text-amber-900 underline">Daily Tarot</a>
            <span className="text-amber-400">•</span>
            <a href="/spreads" className="text-amber-700 hover:text-amber-900 underline">Tarot Spreads</a>
            <span className="text-amber-400">•</span>
            <a href="/deck-summary" className="text-amber-700 hover:text-amber-900 underline">Card Reference</a>
          </div>
        </div>

      </div>
    </div>
  );
}
