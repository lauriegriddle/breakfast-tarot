"use client";
import React from 'react';

// ============================================
// MAJOR ARCANA DATA (22 cards)
// ============================================

const majorArcana = [
  {
    number: 0,
    name: 'The First Timer',
    emoji: '🎒☕',
    traditional: 'The Fool',
    meaning: 'New beginnings await:  just walk through the door.',
    fullMeaning: 'A cheerful newcomer walks into the café for the first time, backpack on, not knowing what to order but excited to try everything. This card signals new beginnings, spontaneity, and taking a leap of faith. Trust the menu; something delicious awaits. You don\'t need to have it all figured out. Just show up with curiosity and an open heart.'
  },
  {
    number: 1,
    name: 'The Short Order Cook',
    emoji: '🍳✨',
    traditional: 'The Magician',
    meaning: 'You have everything you need to make magic.',
    fullMeaning: 'The cook stands at the griddle with every tool within reach:  spatula, eggs, butter, fire. Mastery, resourcefulness, and manifestation energy. You have all the ingredients. Stop waiting for permission. Start cooking.'
  },
  {
    number: 2,
    name: 'The Recipe Keeper',
    emoji: '📖🤫',
    traditional: 'The High Priestess',
    meaning: 'Trust what you know but haven\'t spoken yet.',
    fullMeaning: 'An old recipe book, handwritten, passed down through generations. Some things aren\'t on the menu; they\'re known only to those who\'ve earned the knowledge. Intuition, hidden wisdom, sacred secrets. Trust your gut. The answer is already inside you.'
  },
  {
    number: 3,
    name: 'The Brunch Hostess',
    emoji: '🌸🥂',
    traditional: 'The Empress',
    meaning: 'Abundance is flowing so receive it gracefully.',
    fullMeaning: 'A lavish brunch spread, mimosas flowing, flowers on every table. Nurturing, abundance, sensory pleasure. Let yourself be fed, literally or metaphorically. You are allowed to enjoy the feast.'
  },
  {
    number: 4,
    name: 'The Café Owner',
    emoji: '🏪👔',
    traditional: 'The Emperor',
    meaning: 'Build something that lasts.',
    fullMeaning: 'The one who opens early, closes late, and knows every regular\'s name. Structure, authority, legacy. What are you building? Is the foundation solid? Lead with integrity; people are watching.'
  },
  {
    number: 5,
    name: 'The Regular',
    emoji: '☕📰',
    traditional: 'The Hierophant',
    meaning: 'Sometimes the old ways are the right ways.',
    fullMeaning: 'Same seat, same order, same time every day. Tradition, routine, conventional wisdom. There\'s comfort in ritual. Not everything needs to be disrupted. Sometimes "the usual" is exactly what you need.'
  },
  {
    number: 6,
    name: 'The Breakfast Date',
    emoji: '💕🍽️',
    traditional: 'The Lovers',
    meaning: 'Connection calls; who are you sharing the table with?',
    fullMeaning: 'Two people across from each other, sharing pancakes, lost in conversation. Partnership, choice, alignment of values. Who do you want to break bread with? Choose your people wisely.'
  },
  {
    number: 7,
    name: 'The Food Truck',
    emoji: '🚚💨',
    traditional: 'The Chariot',
    meaning: 'Keep moving forward; momentum is your friend.',
    fullMeaning: 'A food truck on the move, destination unknown but direction clear. Willpower, determination, travel. You can\'t serve everyone from a parked position. Move. Adapt. Bring your gifts to new places.'
  },
  {
    number: 8,
    name: 'The Patient Flip',
    emoji: '🥞🧘',
    traditional: 'Strength',
    meaning: 'The perfect flip can\'t be rushed.',
    fullMeaning: 'Waiting for bubbles to form before flipping the pancake. Patience, gentle control, inner strength. Force it and you\'ll tear it. Trust the timing. You\'ll know when it\'s ready.'
  },
  {
    number: 9,
    name: 'The Early Bird',
    emoji: '🌅🧥',
    traditional: 'The Hermit',
    meaning: 'Solitude brings clarity.',
    fullMeaning: 'The one who arrives before anyone else, coffee in hand, watching the sunrise alone. Introspection, solitude, inner guidance. Sometimes you need a table for one. The answers come in the quiet.'
  },
  {
    number: 10,
    name: 'The Specials Board',
    emoji: '🎡📋',
    traditional: 'Wheel of Fortune',
    meaning: 'The menu changes so roll with it.',
    fullMeaning: 'Today\'s specials are different from yesterday\'s. The wheel turns. Cycles, fate, change. What\'s available today wasn\'t available before and might not be tomorrow. Take the opportunity while it\'s on the board.'
  },
  {
    number: 11,
    name: 'The Fair Split',
    emoji: '⚖️🧾',
    traditional: 'Justice',
    meaning: 'Balance the books because what\'s fair is fair.',
    fullMeaning: 'Splitting the check evenly, everyone pays their share. Justice, accountability, truth. No one skips out on the bill. What you put in is what you get out. Be honest about what you owe and what you\'re owed.'
  },
  {
    number: 12,
    name: 'The Slow Brew',
    emoji: '⏳☕',
    traditional: 'The Hanged Man',
    meaning: 'Let things develop; don\'t rush the drip.',
    fullMeaning: 'Cold brew takes 12 hours. Pour-over can\'t be rushed. Suspension, letting go, new perspective. Some things can\'t be microwaved. Surrender to the process. The wait makes it better.'
  },
  {
    number: 13,
    name: 'Last Call',
    emoji: '🌙🚪',
    traditional: 'Death',
    meaning: 'One chapter ends so another can begin.',
    fullMeaning: 'The café is closing, chairs going up on tables. An ending, but also a clearing. Transformation, release, necessary conclusion. You can\'t stay here forever. It\'s time to leave so you can come back fresh tomorrow.'
  },
  {
    number: 14,
    name: 'The Perfect Blend',
    emoji: '☕🥛',
    traditional: 'Temperance',
    meaning: 'Find your perfect mix.',
    fullMeaning: 'Coffee and cream swirling together in perfect proportion. Balance, patience, moderation. Too much of one thing throws it off. Find the ratio that works for you and stick with it.'
  },
  {
    number: 15,
    name: 'The Bottomless Cup',
    emoji: '☕⛓️',
    traditional: 'The Devil',
    meaning: 'What habit has you trapped in the refill cycle?',
    fullMeaning: 'Free refills sound great until you realize you\'ve had seven cups and can\'t stop. Addiction, bondage, shadow patterns. What are you over-consuming? The chain is self-imposed. You can put the cup down anytime.'
  },
  {
    number: 16,
    name: 'The Smoke Alarm',
    emoji: '🚨💨',
    traditional: 'The Tower',
    meaning: 'Sometimes things burn to teach you something.',
    fullMeaning: 'Burnt pancakes, smoke filling the kitchen, alarm blaring. Chaos! But now you know the griddle was too hot. Sudden upheaval and revelation might feel destructive, but sometimes things have to burn to teach you something important. The smoke clears. You rebuild better.'
  },
  {
    number: 17,
    name: 'The Tip Jar',
    emoji: '⭐🫙',
    traditional: 'The Star',
    meaning: 'Small kindnesses ripple outward.',
    fullMeaning: 'A jar full of small generosities:  dollars, coins, good wishes. Hope, generosity, faith. Every little bit adds up. What you give comes back. Keep the faith and keep giving.'
  },
  {
    number: 18,
    name: 'The Night Shift',
    emoji: '🌙😴',
    traditional: 'The Moon',
    meaning: 'Trust your gut through the fog.',
    fullMeaning: 'Working late, everything feels a little unreal. Is that a customer or a shadow? Illusion, intuition, the unconscious. Not everything is as it seems right now. Trust your instincts over your eyes. Morning will bring clarity.'
  },
  {
    number: 19,
    name: 'The Sunny-Side Up',
    emoji: '☀️🍳',
    traditional: 'The Sun',
    meaning: 'Everything is coming together beautifully.',
    fullMeaning: 'A perfect sunny-side up egg, golden yolk intact, morning light streaming in. Joy, success, vitality. This is the good stuff. Enjoy it fully. You\'ve earned this moment in the sun.'
  },
  {
    number: 20,
    name: 'The Review',
    emoji: '⭐⭐⭐⭐⭐',
    traditional: 'Judgement',
    meaning: 'What did you learn from this experience?',
    fullMeaning: 'A five-star review that changes everything. Reflection, evaluation, awakening. How would you rate your own journey? What feedback have you been ignoring? Time to look honestly at the reviews:  your own and others\'.'
  },
  {
    number: 21,
    name: 'The Full Breakfast',
    emoji: '🌍🍽️',
    traditional: 'The World',
    meaning: 'The journey is complete so savor every bite.',
    fullMeaning: 'The full spread: eggs, pancakes, bacon, toast, fruit, coffee, juice. Everything. Completion, wholeness, fulfillment. You made it. The whole menu is yours. This is what satisfaction tastes like.'
  }
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function MajorArcanaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-amber-50 p-4">
      {/* Background decorations */}
      <div className="fixed top-4 left-4 text-4xl opacity-10">✨</div>
      <div className="fixed top-4 right-4 text-4xl opacity-10">🥞</div>
      <div className="fixed bottom-4 left-4 text-4xl opacity-10">☕</div>
      <div className="fixed bottom-4 right-4 text-4xl opacity-10">🔮</div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <a 
            href="/"
            className="text-amber-600 hover:text-amber-700 text-sm mb-4 inline-block"
          >
            ← Back to Daily Card
          </a>
          
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-bold text-purple-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            The Major Arcana
          </h1>
          <p className="text-purple-600 text-lg mb-2">22 Cards of Life's Big Moments</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Major Arcana represents significant life events, spiritual lessons, and the soul's journey. 
            In the Breakfast Tarot Deck, these cards tell the story of a day at the café:  from walking in as a 
            First Timer to enjoying The Full Breakfast of completion.
          </p>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-purple-500 text-white rounded-full font-medium">
            ✨ Major Arcana (22)
          </span>
          <a 
            href="/minor-arcana"
            className="px-4 py-2 bg-white text-amber-700 rounded-full font-medium hover:bg-amber-50 border border-amber-300"
          >
            🥞 Minor Arcana (56)
          </a>
          <a 
            href="/deck-summary"
            className="px-4 py-2 bg-white text-amber-700 rounded-full font-medium hover:bg-amber-50 border border-amber-300"
          >
            📋 Quick Reference
          </a>
        </div>

        {/* Journey Overview */}
        <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-purple-200">
          <h2 className="text-xl font-bold text-purple-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            🥞 The Fool's Journey... Reimagined
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Traditional tarot tells the story of The Fool's Journey:  a spiritual path from innocence to enlightenment. 
            In the Breakfast Tarot Deck, we tell the same story through the lens of a cozy café: You walk in not knowing 
            what to expect (<strong>The First Timer</strong>), learn to cook your own breakfast 
            (<strong>The Short Order Cook</strong>), face challenges like burnt pancakes 
            (<strong>The Smoke Alarm</strong>), and eventually sit down to enjoy 
            <strong> The Full Breakfast: </strong> The reward of a life fully lived.
          </p>
        </div>

        {/* Card List */}
        <div className="space-y-6">
          {majorArcana.map((card, index) => (
            <div 
              key={card.number}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 border-b border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{card.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {card.number}
                      </span>
                      <span className="text-purple-400 text-sm">
                        (Traditional: {card.traditional})
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Georgia, serif' }}>
                      {card.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Quick Meaning */}
                <div className="mb-4">
                  <p className="text-lg text-amber-700 italic font-medium">
                    "{card.meaning}"
                  </p>
                </div>

                {/* Full Meaning */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
                  <h4 className="text-sm font-bold text-amber-800 mb-2">Full Reading</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {card.fullMeaning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Table */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            📋 Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100">
                  <th className="px-3 py-2 text-left text-purple-800">#</th>
                  <th className="px-3 py-2 text-left text-purple-800">Card</th>
                  <th className="px-3 py-2 text-left text-purple-800">Traditional</th>
                  <th className="px-3 py-2 text-left text-purple-800">Core Meaning</th>
                </tr>
              </thead>
              <tbody>
                {majorArcana.map((card, index) => (
                  <tr key={card.number} className={index % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                    <td className="px-3 py-2 font-bold text-purple-600">{card.number}</td>
                    <td className="px-3 py-2">
                      <span className="mr-2">{card.emoji}</span>
                      {card.name}
                    </td>
                    <td className="px-3 py-2 text-gray-500">{card.traditional}</td>
                    <td className="px-3 py-2 text-gray-700">{card.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Continue to Minor Arcana */}
        <div className="mt-8 text-center">
          <a 
            href="/minor-arcana"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
          >
            Continue to Minor Arcana (56 Cards) →
          </a>
        </div>

        {/* Footer */}
        <div className="text-center py-8 text-xs text-purple-600 mt-8">
          <div>
            © {new Date().getFullYear()} Breakfast Tarot. All rights reserved.
            {' | '}
            <a href="/privacy" className="hover:text-purple-500 underline">Privacy Policy</a>
            {' | '}
            <a href="/terms" className="hover:text-purple-500 underline">Terms of Service</a>
          </div>
          <div className="mt-2 text-amber-500">
            Part of the Breakfast Tarot Family 🥞
          </div>
        </div>
      </div>
    </div>
  );
}
