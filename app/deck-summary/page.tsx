"use client";
import React, { useState } from 'react';

// ============================================
// ALL 78 CARDS DATA
// ============================================

const majorArcana = [
  { number: 0, name: 'The First Timer', emoji: '🎒☕', traditional: 'The Fool', meaning: 'New beginnings await.  Just walk through the door.' },
  { number: 1, name: 'The Short Order Cook', emoji: '🍳✨', traditional: 'The Magician', meaning: 'You have everything you need to make magic.' },
  { number: 2, name: 'The Recipe Keeper', emoji: '📖🤫', traditional: 'The High Priestess', meaning: 'Trust what you know but haven\'t spoken yet.' },
  { number: 3, name: 'The Brunch Hostess', emoji: '🌸🥂', traditional: 'The Empress', meaning: 'Abundance is flowing so receive it gracefully.' },
  { number: 4, name: 'The Café Owner', emoji: '🏪👔', traditional: 'The Emperor', meaning: 'Build something that lasts.' },
  { number: 5, name: 'The Regular', emoji: '☕📰', traditional: 'The Hierophant', meaning: 'Sometimes the old ways are the right ways.' },
  { number: 6, name: 'The Breakfast Date', emoji: '💕🍽️', traditional: 'The Lovers', meaning: 'Connection calls:  who are you sharing the table with?' },
  { number: 7, name: 'The Food Truck', emoji: '🚚💨', traditional: 'The Chariot', meaning: 'Keep moving forward.  Momentum is your friend.' },
  { number: 8, name: 'The Patient Flip', emoji: '🥞🧘', traditional: 'Strength', meaning: 'The perfect flip can\'t be rushed.' },
  { number: 9, name: 'The Early Bird', emoji: '🌅🧥', traditional: 'The Hermit', meaning: 'Solitude brings clarity.' },
  { number: 10, name: 'The Specials Board', emoji: '🎡🎴', traditional: 'Wheel of Fortune', meaning: 'The menu changes.  Roll with it.' },
  { number: 11, name: 'The Fair Split', emoji: '⚖️🧾', traditional: 'Justice', meaning: 'Balance the books; what\'s fair is fair.' },
  { number: 12, name: 'The Slow Brew', emoji: '⏳☕', traditional: 'The Hanged Man', meaning: 'Let things develop; don\'t rush the drip.' },
  { number: 13, name: 'Last Call', emoji: '🌙🚪', traditional: 'Death', meaning: 'One chapter ends so another can begin.' },
  { number: 14, name: 'The Perfect Blend', emoji: '☕🥛', traditional: 'Temperance', meaning: 'Find your perfect mix.' },
  { number: 15, name: 'The Bottomless Cup', emoji: '☕⛓️', traditional: 'The Devil', meaning: 'What habit has you trapped in the refill cycle?' },
  { number: 16, name: 'The Smoke Alarm', emoji: '🚨💨', traditional: 'The Tower', meaning: 'Sometimes things burn to teach you something.' },
  { number: 17, name: 'The Tip Jar', emoji: '⭐🫙', traditional: 'The Star', meaning: 'Small kindnesses ripple outward.' },
  { number: 18, name: 'The Night Shift', emoji: '🌙😴', traditional: 'The Moon', meaning: 'Trust your gut through the fog.' },
  { number: 19, name: 'The Sunny-Side Up', emoji: '☀️🍳', traditional: 'The Sun', meaning: 'Everything is coming together beautifully.' },
  { number: 20, name: 'The Review', emoji: '⭐⭐⭐⭐⭐', traditional: 'Judgement', meaning: 'What did you learn from this experience?' },
  { number: 21, name: 'The Full Breakfast', emoji: '🌍🍽️', traditional: 'The World', meaning: 'The journey is complete; savor every bite.' },
];

const minorArcana = {
  pancakes: {
    name: 'Pancakes',
    emoji: '🥞',
    element: 'Earth',
    traditional: 'Pentacles',
    color: 'bg-amber-100 text-amber-800',
    headerColor: 'bg-amber-500 text-white',
    cards: [
      { number: 'A', name: 'Ace', emoji: '🥞✨', meaning: 'A new opportunity for abundance is being served.' },
      { number: '2', name: 'Two', emoji: '🥞⚖️🥞', meaning: 'Balance your priorities so you can juggle this.' },
      { number: '3', name: 'Three', emoji: '🥞👨‍🍳👩‍🍳', meaning: 'Teamwork makes the dream stack.' },
      { number: '4', name: 'Four', emoji: '🥞🤲', meaning: 'Are you hoarding when you could be sharing?' },
      { number: '5', name: 'Five', emoji: '🥞❄️😔', meaning: 'Hard times but help is closer than you think.' },
      { number: '6', name: 'Six', emoji: '🥞🎁', meaning: 'What goes around comes around.' },
      { number: '7', name: 'Seven', emoji: '🥞🌱⏳', meaning: 'The batter is rising just be patient.' },
      { number: '8', name: 'Eight', emoji: '🥞📚', meaning: 'Master your craft:  every flip teaches you something.' },
      { number: '9', name: 'Nine', emoji: '🥞🏡😌', meaning: 'You\'ve built something comfortable so enjoy it.' },
      { number: '10', name: 'Ten', emoji: '🥞👨‍👩‍👧‍👦🏠', meaning: 'Legacy and abundance shared across generations.' },
      { number: 'P', name: 'Page', emoji: '🥞📬', meaning: 'A message about money or opportunity is coming.' },
      { number: 'Kn', name: 'Knight', emoji: '🥞🐎', meaning: 'Slow and steady wins the breakfast rush.' },
      { number: 'Q', name: 'Queen', emoji: '🥞👑🌿', meaning: 'Create an environment where abundance grows.' },
      { number: 'K', name: 'King', emoji: '🥞👑💼', meaning: 'Build your empire one pancake at a time.' },
    ]
  },
  coffee: {
    name: 'Coffee',
    emoji: '☕',
    element: 'Water',
    traditional: 'Cups',
    color: 'bg-sky-100 text-sky-800',
    headerColor: 'bg-sky-500 text-white',
    cards: [
      { number: 'A', name: 'Ace', emoji: '☕✨', meaning: 'A new emotional beginning is brewing.' },
      { number: '2', name: 'Two', emoji: '☕💕☕', meaning: 'Connection across the table.' },
      { number: '3', name: 'Three', emoji: '☕🎉👯', meaning: 'Celebrate with your people!' },
      { number: '4', name: 'Four', emoji: '☕😒', meaning: 'Are you ignoring a gift right in front of you?' },
      { number: '5', name: 'Five', emoji: '☕😢☕☕', meaning: 'Don\'t mourn the spilled cups just see what remains.' },
      { number: '6', name: 'Six', emoji: '☕👶🏠', meaning: 'Sweet memories of simpler times.' },
      { number: '7', name: 'Seven', emoji: '☕🌈☁️', meaning: 'So many choices but not all of them are real.' },
      { number: '8', name: 'Eight', emoji: '☕🚶‍♀️🌙', meaning: 'Sometimes you have to leave a full cup behind.' },
      { number: '9', name: 'Nine', emoji: '☕😊🙏', meaning: 'Yes, it really is as good as you hoped.' },
      { number: '10', name: 'Ten', emoji: '☕🌈👨‍👩‍👧‍👦', meaning: 'Emotional fulfillment with your whole crew.' },
      { number: 'P', name: 'Page', emoji: '☕💌', meaning: 'A message of the heart is on its way.' },
      { number: 'Kn', name: 'Knight', emoji: '☕🦢', meaning: 'Follow your heart, even into the unknown.' },
      { number: 'Q', name: 'Queen', emoji: '☕👑💙', meaning: 'Deep emotional wisdom flows through you.' },
      { number: 'K', name: 'King', emoji: '☕👑🎭', meaning: 'Master of emotional balance.' },
    ]
  },
  butter: {
    name: 'Butter',
    emoji: '🧈',
    element: 'Fire',
    traditional: 'Wands',
    color: 'bg-orange-100 text-orange-800',
    headerColor: 'bg-orange-500 text-white',
    cards: [
      { number: 'A', name: 'Ace', emoji: '🧈✨', meaning: 'A spark of inspiration has landed.' },
      { number: '2', name: 'Two', emoji: '🧈🌍', meaning: 'You\'re planning something big so keep dreaming.' },
      { number: '3', name: 'Three', emoji: '🧈🚢', meaning: 'Your efforts are shipping out so watch for returns.' },
      { number: '4', name: 'Four', emoji: '🧈🎊🏠', meaning: 'Celebrate how far you\'ve come.' },
      { number: '5', name: 'Five', emoji: '🧈😤👊', meaning: 'Healthy competition sharpens everyone.' },
      { number: '6', name: 'Six', emoji: '🧈🏆👏', meaning: 'Victory! Take your well-earned bow.' },
      { number: '7', name: 'Seven', emoji: '🧈🛡️', meaning: 'Hold your ground:  don\'t let them take your griddle.' },
      { number: '8', name: 'Eight', emoji: '🧈💨🎯', meaning: 'Everything is moving fast so stay focused.' },
      { number: '9', name: 'Nine', emoji: '🧈😰🩹', meaning: 'You\'re tired but not done just one more push.' },
      { number: '10', name: 'Ten', emoji: '🧈😫📦', meaning: 'You\'re carrying too much just put something down.' },
      { number: 'P', name: 'Page', emoji: '🧈📣', meaning: 'An exciting message about a new venture is coming.' },
      { number: 'Kn', name: 'Knight', emoji: '🧈🔥🐎', meaning: 'Charge forward with passion!' },
      { number: 'Q', name: 'Queen', emoji: '🧈👑🔥', meaning: 'Your confidence inspires everyone around you.' },
      { number: 'K', name: 'King', emoji: '🧈👑🦁', meaning: 'Lead with vision and courage.' },
    ]
  },
  syrup: {
    name: 'Syrup',
    emoji: '🍯',
    element: 'Air',
    traditional: 'Swords',
    color: 'bg-yellow-100 text-yellow-800',
    headerColor: 'bg-yellow-500 text-white',
    cards: [
      { number: 'A', name: 'Ace', emoji: '🍯✨', meaning: 'A breakthrough thought brings clarity at last.' },
      { number: '2', name: 'Two', emoji: '🍯⚔️', meaning: 'You\'re avoiding a decision but you can\'t forever.' },
      { number: '3', name: 'Three', emoji: '🍯💔😢', meaning: 'This heartbreak is teaching you something important.' },
      { number: '4', name: 'Four', emoji: '🍯😴🛏️', meaning: 'Rest your mind.  It\'s been working too hard.' },
      { number: '5', name: 'Five', emoji: '🍯😈🏆', meaning: 'Someone won unfairly just don\'t sink to their level.' },
      { number: '6', name: 'Six', emoji: '🍯🚣‍♀️', meaning: 'You\'re moving toward calmer waters.' },
      { number: '7', name: 'Seven', emoji: '🍯🦊', meaning: 'Be clever:  not everyone needs to know your recipe.' },
      { number: '8', name: 'Eight', emoji: '🍯🕸️😵', meaning: 'You\'ve thought yourself into a trap but the exit exists.' },
      { number: '9', name: 'Nine', emoji: '🍯😰🌙', meaning: 'The 3 AM worries aren\'t as real as they feel.' },
      { number: '10', name: 'Ten', emoji: '🍯🔚🌅', meaning: 'The worst is over but dawn is coming.' },
      { number: 'P', name: 'Page', emoji: '🍯💬', meaning: 'Speak your truth even if your voice shakes.' },
      { number: 'Kn', name: 'Knight', emoji: '🍯⚔️💨', meaning: 'Cut through the nonsense with sharp clarity.' },
      { number: 'Q', name: 'Queen', emoji: '🍯👑🧠', meaning: 'Your clear perception sees what others miss.' },
      { number: 'K', name: 'King', emoji: '🍯👑⚖️', meaning: 'Lead with truth and fair judgment.' },
    ]
  }
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function DeckSummaryPage() {
  const [activeSection, setActiveSection] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      {/* Background decorations */}
      <div className="fixed top-4 left-4 text-4xl opacity-10">🎴</div>
      <div className="fixed top-4 right-4 text-4xl opacity-10">🥞</div>
      <div className="fixed bottom-4 left-4 text-4xl opacity-10">✨</div>
      <div className="fixed bottom-4 right-4 text-4xl opacity-10">🎴</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <a 
            href="/"
            className="text-amber-600 hover:text-amber-700 text-sm mb-4 inline-block"
          >
            ← Back to Daily Card
          </a>
          
          <div className="text-6xl mb-4">🎴</div>
          <h1 className="text-4xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            The Griddle Deck
          </h1>
          <p className="text-amber-600 text-lg mb-2">Complete 78-Card Quick Reference</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All the cards at a glance. Use this page to quickly look up any card's meaning 
            or study the patterns across the deck.
          </p>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a 
            href="/major-arcana"
            className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-50 border border-purple-300"
          >
            ✨ Major Arcana (22)
          </a>
          <a 
            href="/minor-arcana"
            className="px-4 py-2 bg-white text-amber-700 rounded-full font-medium hover:bg-amber-50 border border-amber-300"
          >
            🥞 Minor Arcana (56)
          </a>
          <span className="px-4 py-2 bg-amber-500 text-white rounded-full font-medium">
            🎴 Quick Reference
          </span>
        </div>

        {/* Deck Stats */}
        <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            🎴 Deck Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
              <div className="text-2xl font-bold text-purple-700">22</div>
              <div className="text-xs text-gray-600">Major Arcana</div>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-2xl font-bold text-amber-700">14</div>
              <div className="text-xs text-gray-600">🥞 Pancakes</div>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200">
              <div className="text-2xl font-bold text-sky-700">14</div>
              <div className="text-xs text-gray-600">☕ Coffee</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
              <div className="text-2xl font-bold text-orange-700">14</div>
              <div className="text-xs text-gray-600">🧈 Butter</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-700">14</div>
              <div className="text-xs text-gray-600">🍯 Syrup</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl border border-amber-300">
              <div className="text-2xl font-bold text-amber-800">78</div>
              <div className="text-xs text-gray-600">Total Cards</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'all'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All 78 Cards
          </button>
          <button
            onClick={() => setActiveSection('major')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'major'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            ✨ Major (22)
          </button>
          <button
            onClick={() => setActiveSection('pancakes')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'pancakes'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            🥞 Pancakes
          </button>
          <button
            onClick={() => setActiveSection('coffee')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'coffee'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            ☕ Coffee
          </button>
          <button
            onClick={() => setActiveSection('butter')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'butter'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            🧈 Butter
          </button>
          <button
            onClick={() => setActiveSection('syrup')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === 'syrup'
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            🍯 Syrup
          </button>
        </div>

        {/* Major Arcana Table */}
        {(activeSection === 'all' || activeSection === 'major') && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span>✨</span> Major Arcana
              <span className="text-sm font-normal text-purple-500">(Life's Big Moments)</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="px-3 py-2 text-left text-purple-800 w-12">#</th>
                    <th className="px-3 py-2 text-left text-purple-800 w-16">Icon</th>
                    <th className="px-3 py-2 text-left text-purple-800">Griddle Card</th>
                    <th className="px-3 py-2 text-left text-purple-800 hidden md:table-cell">Traditional</th>
                    <th className="px-3 py-2 text-left text-purple-800">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {majorArcana.map((card, index) => (
                    <tr key={card.number} className={index % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                      <td className="px-3 py-2 font-bold text-purple-600">{card.number}</td>
                      <td className="px-3 py-2 text-xl">{card.emoji}</td>
                      <td className="px-3 py-2 font-medium text-gray-800">{card.name}</td>
                      <td className="px-3 py-2 text-gray-500 hidden md:table-cell">{card.traditional}</td>
                      <td className="px-3 py-2 text-gray-600 italic">{card.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Minor Arcana Tables */}
        {Object.entries(minorArcana).map(([key, suit]) => (
          (activeSection === 'all' || activeSection === key) && (
            <div key={key} className={`bg-white rounded-2xl shadow-lg p-6 mb-8 border ${suit.color.split(' ')[0].replace('bg-', 'border-')}`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${suit.color.split(' ')[1]}`} style={{ fontFamily: 'Georgia, serif' }}>
                <span>{suit.emoji}</span> Suit of {suit.name}
                <span className="text-sm font-normal opacity-70">({suit.element} · {suit.traditional})</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={suit.color}>
                      <th className={`px-3 py-2 text-left w-12`}>#</th>
                      <th className={`px-3 py-2 text-left w-16`}>Icon</th>
                      <th className={`px-3 py-2 text-left`}>Card</th>
                      <th className={`px-3 py-2 text-left`}>Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suit.cards.map((card, index) => (
                      <tr key={card.number} className={index % 2 === 0 ? 'bg-white' : suit.color.replace('text-', 'bg-').split(' ')[0]}>
                        <td className={`px-3 py-2 font-bold ${suit.color.split(' ')[1]}`}>{card.number}</td>
                        <td className="px-3 py-2 text-xl">{card.emoji}</td>
                        <td className="px-3 py-2 font-medium text-gray-800">{card.name} of {suit.name}</td>
                        <td className="px-3 py-2 text-gray-600 italic">{card.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ))}

        {/* Element Correspondences */}
        <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            🌟 Element Correspondences
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-4 py-3 text-left text-amber-800">Griddle Suit</th>
                  <th className="px-4 py-3 text-left text-amber-800">Traditional</th>
                  <th className="px-4 py-3 text-left text-amber-800">Element</th>
                  <th className="px-4 py-3 text-left text-amber-800">Domain</th>
                  <th className="px-4 py-3 text-left text-amber-800">Questions It Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 font-bold">🥞 Pancakes</td>
                  <td className="px-4 py-3">Pentacles / Coins</td>
                  <td className="px-4 py-3">Earth 🌍</td>
                  <td className="px-4 py-3">Material World</td>
                  <td className="px-4 py-3 text-gray-600">Money, work, health, home, physical security</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-bold">☕ Coffee</td>
                  <td className="px-4 py-3">Cups</td>
                  <td className="px-4 py-3">Water 💧</td>
                  <td className="px-4 py-3">Emotions</td>
                  <td className="px-4 py-3 text-gray-600">Love, relationships, feelings, intuition</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 font-bold">🧈 Butter</td>
                  <td className="px-4 py-3">Wands</td>
                  <td className="px-4 py-3">Fire 🔥</td>
                  <td className="px-4 py-3">Passion & Action</td>
                  <td className="px-4 py-3 text-gray-600">Creativity, ambition, energy, inspiration</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-bold">🍯 Syrup</td>
                  <td className="px-4 py-3">Swords</td>
                  <td className="px-4 py-3">Air 💨</td>
                  <td className="px-4 py-3">Intellect & Truth</td>
                  <td className="px-4 py-3 text-gray-600">Thoughts, decisions, communication, clarity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Court Card Guide */}
        <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            👑 Court Cards Guide
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
              <div className="text-3xl mb-2">📬</div>
              <div className="font-bold text-green-800">Page</div>
              <div className="text-sm text-gray-600 mt-1">Messages, beginnings, student energy</div>
              <div className="text-xs text-green-600 mt-2 italic">"News is coming"</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
              <div className="text-3xl mb-2">🐎</div>
              <div className="font-bold text-blue-800">Knight</div>
              <div className="text-sm text-gray-600 mt-1">Action, movement, pursuit</div>
              <div className="text-xs text-blue-600 mt-2 italic">"Things are moving"</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200 text-center">
              <div className="text-3xl mb-2">👑</div>
              <div className="font-bold text-pink-800">Queen</div>
              <div className="text-sm text-gray-600 mt-1">Mastery, nurturing, inward power</div>
              <div className="text-xs text-pink-600 mt-2 italic">"Embody this energy"</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 text-center">
              <div className="text-3xl mb-2">🦁</div>
              <div className="font-bold text-amber-800">King</div>
              <div className="text-sm text-gray-600 mt-1">Authority, leadership, outward power</div>
              <div className="text-xs text-amber-600 mt-2 italic">"Lead with this energy"</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="/major-arcana"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all"
            >
              ✨ Read Full Major Arcana
            </a>
            <a 
              href="/minor-arcana"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all"
            >
              🥞 Read Full Minor Arcana
            </a>
          </div>
          <a 
            href="/"
            className="inline-block text-amber-600 hover:text-amber-700 underline"
          >
            ← Back to Daily Card Pull
          </a>
        </div>

        {/* Footer */}
        <div className="text-center py-8 text-xs text-amber-600 mt-8">
          <div>
            © {new Date().getFullYear()} Breakfast Tarot. All rights reserved.
            {' | '}
            <a href="/privacy" className="hover:text-amber-500 underline">Privacy Policy</a>
            {' | '}
            <a href="/terms" className="hover:text-amber-500 underline">Terms of Service</a>
          </div>
          <div className="mt-2 text-amber-500">
            Part of the Letter Griddle Family 🥞
          </div>
        </div>
      </div>
    </div>
  );
}
