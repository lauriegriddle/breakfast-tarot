"use client";
import React, { useState } from 'react';

// ============================================
// MINOR ARCANA DATA (56 cards across 4 suits)
// ============================================

const suits = {
  pancakes: {
    name: 'Suit of Pancakes',
    emoji: '🥞',
    element: 'Earth',
    theme: 'Material World',
    color: 'from-amber-100 to-yellow-100 border-amber-300',
    headerColor: 'from-amber-500 to-yellow-500',
    textColor: 'text-amber-800',
    description: 'The Suit of Pancakes corresponds to the traditional Pentacles/Coins. It represents the material world: money, work, health, home, and physical comfort. When Pancakes appear, pay attention to practical matters and earthly abundance.',
    cards: [
      {
        number: 1,
        name: 'Ace of Pancakes',
        emoji: '🥞✨',
        meaning: 'A new opportunity for abundance is being served.',
        fullMeaning: 'A single, perfect golden pancake appears on your plate, the first of many. New financial opportunity, material beginnings, a seed of prosperity. Say yes to this. It\'s the start of something nourishing.'
      },
      {
        number: 2,
        name: 'Two of Pancakes',
        emoji: '🥞⚖️🥞',
        meaning: 'Balance your priorities so you can juggle this.',
        fullMeaning: 'Two pancakes, two plates, two priorities. Balancing act, adaptability, time management. You can handle both, but not if you let one burn while flipping the other. Stay nimble.'
      },
      {
        number: 3,
        name: 'Three of Pancakes',
        emoji: '🥞👨‍🍳👩‍🍳',
        meaning: 'Teamwork makes the dream stack.',
        fullMeaning: 'Three cooks working the griddle together, each with their role. Collaboration, skill-building, teamwork. You don\'t have to make the whole stack alone. Bring in people who complement your skills.'
      },
      {
        number: 4,
        name: 'Four of Pancakes',
        emoji: '🥞🤲',
        meaning: 'Are you hoarding when you could be sharing?',
        fullMeaning: 'Someone clutching their plate protectively, not sharing, guarding their stack with suspicious eyes. Holding on too tight, scarcity mindset, fear of loss. Pancakes get cold when you don\'t eat them. Abundance spoils when you don\'t share it.'
      },
      {
        number: 5,
        name: 'Five of Pancakes',
        emoji: '🥞❄️😔',
        meaning: 'Hard times but help is closer than you think.',
        fullMeaning: 'Cold pancakes, empty syrup bottle, a hungry morning. Financial stress, feeling left out in the cold, material hardship. But look, the café lights are on. Help is available if you\'re willing to ask.'
      },
      {
        number: 6,
        name: 'Six of Pancakes',
        emoji: '🥞🎁',
        meaning: 'What goes around comes around.',
        fullMeaning: 'Sharing pancakes with those who have none, receiving unexpected generosity. Giving and receiving, charity, fairness. The stack circulates. What you give comes back. Help someone and let yourself be helped.'
      },
      {
        number: 7,
        name: 'Seven of Pancakes',
        emoji: '🥞🌱⏳',
        meaning: 'The batter is rising just be patient.',
        fullMeaning: 'Watching the batter slowly rise, waiting to see if your recipe worked. Long-term investment, patience, assessment. You\'ve done the work. Now you wait. It\'s too early to judge so let it develop.'
      },
      {
        number: 8,
        name: 'Eight of Pancakes',
        emoji: '🥞📚',
        meaning: 'Master your craft because every flip teaches you something.',
        fullMeaning: 'Practicing the flip over and over, determined to get it perfect. Skill development, dedication, craftsmanship. You\'re in apprentice mode. Keep practicing. Mastery comes from repetition with intention.'
      },
      {
        number: 9,
        name: 'Nine of Pancakes',
        emoji: '🥞🏡😌',
        meaning: 'You\'ve built something comfortable so enjoy it.',
        fullMeaning: 'A cozy kitchen, a perfect stack, everything you need within reach. Self-sufficiency, luxury, accomplishment. You did it. The abundance you\'re enjoying? You built that. Savor your success.'
      },
      {
        number: 10,
        name: 'Ten of Pancakes',
        emoji: '🥞👨‍👩‍👧‍👦🏠',
        meaning: 'Legacy and abundance shared across generations.',
        fullMeaning: 'A multi-generational family breakfast, grandparents to grandchildren, recipes passed down. Family wealth, legacy, long-term security. This isn\'t just about you; it\'s about what you\'re building for those who come after.'
      },
      {
        number: 11,
        name: 'Page of Pancakes',
        emoji: '🥞📬',
        meaning: 'A message about money or opportunity is coming.',
        fullMeaning: 'A young person learning the breakfast trade, eager and curious. New opportunity, student energy, a message about material matters. Stay open to learning. Good news about practical matters may be arriving.'
      },
      {
        number: 12,
        name: 'Knight of Pancakes',
        emoji: '🥞🐎',
        meaning: 'Slow and steady wins the breakfast rush.',
        fullMeaning: 'A reliable worker who shows up every day, methodical and trustworthy. Steady progress, reliability, routine. Not flashy, but effective. Keep doing the work. Consistency beats intensity.'
      },
      {
        number: 13,
        name: 'Queen of Pancakes',
        emoji: '🥞👑🌿',
        meaning: 'Create an environment where abundance grows.',
        fullMeaning: 'The one who makes the café feel like home, nurturing customers and staff alike. Practical nurturing, abundance creator, down-to-earth wisdom. Make people feel fed in every sense of the word.'
      },
      {
        number: 14,
        name: 'King of Pancakes',
        emoji: '🥞👑💼',
        meaning: 'Build your empire one pancake at a time.',
        fullMeaning: 'The successful café owner, multiple locations, wealth built through patience. Material success, business mastery, provider energy. You have what it takes to build something substantial. Lead with generosity.'
      }
    ]
  },
  coffee: {
    name: 'Suit of Coffee',
    emoji: '☕',
    element: 'Water',
    theme: 'Emotions',
    color: 'from-sky-100 to-blue-100 border-sky-300',
    headerColor: 'from-sky-500 to-blue-500',
    textColor: 'text-sky-800',
    description: 'The Suit of Coffee corresponds to the traditional Cups. It represents the emotional realm: love, relationships, intuition, creativity, and the heart. When Coffee appears, pay attention to your feelings and connections.',
    cards: [
      {
        number: 1,
        name: 'Ace of Coffee',
        emoji: '☕✨',
        meaning: 'A new emotional beginning is brewing.',
        fullMeaning: 'A fresh cup, steam rising, full of possibility. New relationship, emotional awakening, intuitive opening. Your heart is ready for something new. Take that first sip.'
      },
      {
        number: 2,
        name: 'Two of Coffee',
        emoji: '☕💕☕',
        meaning: 'Connection across the table.',
        fullMeaning: 'Two cups, two people, one conversation. Partnership, mutual attraction, meaningful exchange. This connection has potential. Lean in. Share what\'s really on your heart.'
      },
      {
        number: 3,
        name: 'Three of Coffee',
        emoji: '☕🎉👯',
        meaning: 'Celebrate with your people!',
        fullMeaning: 'Friends gathered for brunch, laughter, clinking cups. Friendship, celebration, community. Your people are your wealth. Gather them. Celebrate together. Joy multiplies when shared.'
      },
      {
        number: 4,
        name: 'Four of Coffee',
        emoji: '☕😒',
        meaning: 'Are you ignoring a gift right in front of you?',
        fullMeaning: 'Someone staring at their phone while three full cups sit untouched. Apathy, missed opportunity, emotional withdrawal. What are you taking for granted? Look up. The good stuff is right there.'
      },
      {
        number: 5,
        name: 'Five of Coffee',
        emoji: '☕☕😢☕☕☕',
        meaning: 'Don\'t mourn the spilled cups:  see what remains.',
        fullMeaning: 'Three cups spilled, but two still full. Grief, regret, focusing on loss. Yes, you lost something. But not everything. Turn around. There\'s still coffee in some of those cups.'
      },
      {
        number: 6,
        name: 'Six of Coffee',
        emoji: '☕👶🏠',
        meaning: 'Sweet memories of simpler times.',
        fullMeaning: 'The coffee your grandmother used to make, nostalgia in every sip. Memory, childhood, innocence. Sometimes we need to revisit where we came from. What felt like home? Go back there even just in your mind.'
      },
      {
        number: 7,
        name: 'Seven of Coffee',
        emoji: '☕🌈☁️',
        meaning: 'So many choices but not all of them are real.',
        fullMeaning: 'A menu with too many options, some of them illusions. Fantasy, wishful thinking, too many choices. Not every option on this menu is actually available. Get grounded. What\'s real? What\'s just steam?'
      },
      {
        number: 8,
        name: 'Eight of Coffee',
        emoji: '☕🚶‍♀️🌙',
        meaning: 'Sometimes you have to leave a full cup behind.',
        fullMeaning: 'Walking away from a table of unfinished drinks, seeking something more. Moving on, seeking deeper meaning, leaving comfort. The coffee here is fine, but your soul needs something else. It\'s okay to go.'
      },
      {
        number: 9,
        name: 'Nine of Coffee',
        emoji: '☕😊🙏',
        meaning: 'Yes, it really is as good as you hoped.',
        fullMeaning: 'A satisfied customer, leaning back, cup in hand, smile on face. The "wish granted" moment. Contentment, wishes fulfilled, emotional satisfaction. Let yourself enjoy it without waiting for the other shoe to drop.'
      },
      {
        number: 10,
        name: 'Ten of Coffee',
        emoji: '☕🌈👨‍👩‍👧‍👦',
        meaning: 'Emotional fulfillment with your whole crew.',
        fullMeaning: 'The full table: family, friends, love flowing freely. Emotional completion, happy family, community. This is the dream. Everyone you love, fed and happy. You did it.'
      },
      {
        number: 11,
        name: 'Page of Coffee',
        emoji: '☕💌',
        meaning: 'A message of the heart is on its way.',
        fullMeaning: 'A dreamy young person composing a love note over their latte. Romantic message, creative inspiration, emotional news. Stay open. Something, or someone, wants to reach your heart.'
      },
      {
        number: 12,
        name: 'Knight of Coffee',
        emoji: '☕🦢',
        meaning: 'Follow your heart even into the unknown.',
        fullMeaning: 'The romantic who follows feelings wherever they lead. Heart-led action, romantic gesture, emotional pursuit. Logic has its place, but right now, lead with your heart. Go where it takes you.'
      },
      {
        number: 13,
        name: 'Queen of Coffee',
        emoji: '☕👑💙',
        meaning: 'Deep emotional wisdom flows through you.',
        fullMeaning: 'The intuitive barista who knows what you need before you order. Emotional intelligence, intuition, nurturing depth. Trust your feelings. They know things your mind hasn\'t figured out yet.'
      },
      {
        number: 14,
        name: 'King of Coffee',
        emoji: '☕👑🎭',
        meaning: 'Master of emotional balance.',
        fullMeaning: 'The calm presence who holds space for everyone\'s feelings. Emotional maturity, diplomacy, compassionate leadership. You can feel deeply and still stay grounded. Be the calm in the storm.'
      }
    ]
  },
  butter: {
    name: 'Suit of Butter',
    emoji: '🧈',
    element: 'Fire',
    theme: 'Passion & Action',
    color: 'from-orange-100 to-amber-100 border-orange-300',
    headerColor: 'from-orange-500 to-amber-500',
    textColor: 'text-orange-800',
    description: 'The Suit of Butter corresponds to the traditional Wands. It represents passion, creativity, energy, ambition, and action. When Butter appears, pay attention to what excites you and where your fire wants to go.',
    cards: [
      {
        number: 1,
        name: 'Ace of Butter',
        emoji: '🧈✨',
        meaning: 'A spark of inspiration has landed.',
        fullMeaning: 'A pat of butter melting on hot pancakes is the sizzle of new energy. Creative spark, new passion, inspired beginning. The fire is lit. Feed it. See where this energy wants to go.'
      },
      {
        number: 2,
        name: 'Two of Butter',
        emoji: '🧈🌍',
        meaning: 'You\'re planning something big so keep dreaming.',
        fullMeaning: 'Looking at a map, imagining all the places breakfast could take you. Planning, future vision, personal power. The world is full of griddles waiting for your butter. Where do you want to go?'
      },
      {
        number: 3,
        name: 'Three of Butter',
        emoji: '🧈🚢',
        meaning: 'Your efforts are shipping out so watch for returns.',
        fullMeaning: 'Sending your creations out into the world, waiting for feedback. Expansion, foresight, overseas energy. You\'ve launched something. Now trust the journey. Good news will come back from afar.'
      },
      {
        number: 4,
        name: 'Four of Butter',
        emoji: '🧈🎊🏠',
        meaning: 'Celebrate how far you\'ve come.',
        fullMeaning: 'A housewarming brunch, stability achieved, time to enjoy. Celebration, stability, harvest. You built this! Have the party. Acknowledge the milestone. Then dream up the next one.'
      },
      {
        number: 5,
        name: 'Five of Butter',
        emoji: '🧈😤👊',
        meaning: 'Healthy competition sharpens everyone.',
        fullMeaning: 'A cook-off, spatulas clashing, everyone bringing their best. Competition, conflict, disagreement. Not all friction is bad. Sometimes the heat makes everyone cook better. Engage, don\'t avoid.'
      },
      {
        number: 6,
        name: 'Six of Butter',
        emoji: '🧈🏆👏',
        meaning: 'Victory! Take your well-earned bow.',
        fullMeaning: 'Winner of the breakfast contest, crowd cheering, recognition earned. Public recognition, success, acclaim. You won this one. Don\'t downplay it. Let yourself be celebrated.'
      },
      {
        number: 7,
        name: 'Seven of Butter',
        emoji: '🧈🛡️',
        meaning: 'Hold your ground:  don\'t let them take your griddle.',
        fullMeaning: 'Defending your station during the breakfast rush, holding firm. Perseverance, defensive position, standing your ground. They\'re coming for your spot. Don\'t give it up. You earned this griddle.'
      },
      {
        number: 8,
        name: 'Eight of Butter',
        emoji: '🧈💨🎯',
        meaning: 'Everything is moving fast so stay focused.',
        fullMeaning: 'Orders flying, pans sizzling, rapid movement toward the goal. Rapid progress, quick action, momentum. Things are happening FAST. Don\'t slow down now. Ride the wave.'
      },
      {
        number: 9,
        name: 'Nine of Butter',
        emoji: '🧈😰🩹',
        meaning: 'You\'re tired but not done:  just one more push.',
        fullMeaning: 'A weary cook, bandaged from burns, still standing at the griddle. Resilience, persistence, last stand. You\'ve been through it. The burns are real. But you\'re still here. One more round.'
      },
      {
        number: 10,
        name: 'Ten of Butter',
        emoji: '🧈😫📦',
        meaning: 'You\'re carrying too much so put something down.',
        fullMeaning: 'A cook buried under too many orders, overwhelmed, burnt out. Burden, overwhelm, too much fire. You took on more than one person should carry. It\'s not failure to delegate. Put some of these pans down.'
      },
      {
        number: 11,
        name: 'Page of Butter',
        emoji: '🧈📣',
        meaning: 'An exciting message about a new venture is coming.',
        fullMeaning: 'An enthusiastic young cook, full of ideas, ready to change the menu. Exciting news, creative message, youthful energy. Someone, maybe you, has a bold idea. Listen to it. This enthusiasm is contagious.'
      },
      {
        number: 12,
        name: 'Knight of Butter',
        emoji: '🧈🔥🐎',
        meaning: 'Charge forward with passion!',
        fullMeaning: 'The cook who moves fast, takes risks, never met a challenge they didn\'t accept. Action, adventure, impulsive energy. Think later, move now. Sometimes the bold move is the right move. Go!'
      },
      {
        number: 13,
        name: 'Queen of Butter',
        emoji: '🧈👑🔥',
        meaning: 'Your confidence inspires everyone around you.',
        fullMeaning: 'The passionate leader who makes everyone believe they can cook. Charisma, confidence, fierce independence. You walk in and the energy shifts. Own that power. Inspire the room.'
      },
      {
        number: 14,
        name: 'King of Butter',
        emoji: '🧈👑🦁',
        meaning: 'Lead with vision and courage.',
        fullMeaning: 'The visionary chef who built an empire on bold flavors. Leadership, vision, entrepreneurial fire. You see what others don\'t. Lead them there. Your vision is the roadmap.'
      }
    ]
  },
  syrup: {
    name: 'Suit of Syrup',
    emoji: '🍯',
    element: 'Air',
    theme: 'Intellect & Truth',
    color: 'from-yellow-100 to-amber-100 border-yellow-400',
    headerColor: 'from-yellow-500 to-amber-500',
    textColor: 'text-yellow-800',
    description: 'The Suit of Syrup corresponds to the traditional Swords. It represents the mental realm: thoughts, truth, communication, decisions, and clarity. When Syrup appears, pay attention to your mind and how you communicate.',
    cards: [
      {
        number: 1,
        name: 'Ace of Syrup',
        emoji: '🍯✨',
        meaning: 'A breakthrough thought brings clarity at last.',
        fullMeaning: 'Pure maple syrup, truth in its sweetest form. Mental clarity, breakthrough, new idea. The fog lifts. You see it clearly now. Trust this insight.  It\'s pure.'
      },
      {
        number: 2,
        name: 'Two of Syrup',
        emoji: '🍯⚔️',
        meaning: 'You\'re avoiding a decision but you can\'t forever.',
        fullMeaning: 'Two syrup bottles, blindfolded, unable to choose. Stalemate, avoidance, difficult decision. You can\'t stay blindfolded forever. The choice won\'t make itself. Pick one.'
      },
      {
        number: 3,
        name: 'Three of Syrup',
        emoji: '🍯💔😢',
        meaning: 'This heartbreak is teaching you something important.',
        fullMeaning: 'Syrup spilled like tears, sweetness wasted. Heartbreak, sorrow, painful truth. Yes, it hurts. Let it. The pain is clearing something that needed to go.'
      },
      {
        number: 4,
        name: 'Four of Syrup',
        emoji: '🍯😴🛏️',
        meaning: 'Rest your mind; it\'s been working too hard.',
        fullMeaning: 'A quiet booth, eyes closed, taking a mental break. Rest, recovery, temporary retreat. Your brain needs a break. Step away from the problem. The answer will come when you stop chasing it.'
      },
      {
        number: 5,
        name: 'Five of Syrup',
        emoji: '🍯😈🏆',
        meaning: 'Someone won unfairly so don\'t sink to their level.',
        fullMeaning: 'A cook who cheated to win, hollow victory. Unfairness, defeat, ego. You lost this round, but not because you weren\'t good enough. Keep your integrity. Their win is empty.'
      },
      {
        number: 6,
        name: 'Six of Syrup',
        emoji: '🍯🚣‍♀️',
        meaning: 'You\'re moving toward calmer waters.',
        fullMeaning: 'Rowing away from troubled waters, calmer breakfast ahead. Transition, moving on, mental relief. The hard part is behind you. Keep rowing. Smoother days are ahead.'
      },
      {
        number: 7,
        name: 'Seven of Syrup',
        emoji: '🍯🦊',
        meaning: 'Be clever:  not everyone needs to know your recipe.',
        fullMeaning: 'A sly cook with a secret ingredient, playing it smart. Strategy, cunning, resourcefulness. You don\'t have to show all your cards. Sometimes the smart move is the subtle one.'
      },
      {
        number: 8,
        name: 'Eight of Syrup',
        emoji: '🍯🕸️😵',
        meaning: 'You\'ve thought yourself into a trap but the exit exists.',
        fullMeaning: 'Stuck in mental loops, overthinking, paralyzed by analysis. Mental prison, restriction, victim mentality. Your thoughts built this cage. Your thoughts can unbuild it. The door isn\'t locked:  you just think it is.'
      },
      {
        number: 9,
        name: 'Nine of Syrup',
        emoji: '🍯😰🌙',
        meaning: 'The 3 AM worries aren\'t as real as they feel.',
        fullMeaning: 'Lying awake, mind racing with worst-case scenarios. Anxiety, nightmares, mental anguish. Your brain is catastrophizing. These fears are inflated by the darkness. Wait for morning before you make any decisions.'
      },
      {
        number: 10,
        name: 'Ten of Syrup',
        emoji: '🍯🔚🌅',
        meaning: 'The worst is over and dawn is coming.',
        fullMeaning: 'Empty syrup bottle but the sun is rising. A terrible night, but morning comes. Rock bottom, ending, inevitable dawn. You survived the darkest part. It\'s over. Now the only direction is up.'
      },
      {
        number: 11,
        name: 'Page of Syrup',
        emoji: '🍯💬',
        meaning: 'Speak your truth — even if your voice shakes.',
        fullMeaning: 'A young person with something to say, nervous but determined. New ideas, communication, speaking up. You have something worth saying. The world needs to hear it. Open your mouth.'
      },
      {
        number: 12,
        name: 'Knight of Syrup',
        emoji: '🍯⚔️💨',
        meaning: 'Cut through the nonsense with sharp clarity.',
        fullMeaning: 'A quick-witted cook who cuts through confusion with precision. Sharp mind, fast talk, intellectual charge. No time for fuzzy thinking. Say what you mean. Cut to the point.'
      },
      {
        number: 13,
        name: 'Queen of Syrup',
        emoji: '🍯👑🧠',
        meaning: 'Your clear perception sees what others miss.',
        fullMeaning: 'The one who sees through every lie, sharp as a knife. Perception, clear boundaries, independent thinking. You can\'t be fooled. Trust your ability to see clearly. Set boundaries accordingly.'
      },
      {
        number: 14,
        name: 'King of Syrup',
        emoji: '🍯👑⚖️',
        meaning: 'Lead with truth and fair judgment.',
        fullMeaning: 'The fair judge, the clear thinker, the one who speaks truth. Intellectual authority, truth-speaker, ethical leadership. Your words have weight. Use them wisely. Speak truth even when it\'s uncomfortable.'
      }
    ]
  }
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function MinorArcanaPage() {
  const [activeSuit, setActiveSuit] = useState<string>('pancakes');
  const currentSuit = suits[activeSuit as keyof typeof suits];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      {/* Background decorations */}
      <div className="fixed top-4 left-4 text-4xl opacity-10">🥞</div>
      <div className="fixed top-4 right-4 text-4xl opacity-10">☕</div>
      <div className="fixed bottom-4 left-4 text-4xl opacity-10">🧈</div>
      <div className="fixed bottom-4 right-4 text-4xl opacity-10">🍯</div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <a 
            href="/"
            className="text-amber-600 hover:text-amber-700 text-sm mb-4 inline-block"
          >
            ← Back to Daily Card
          </a>
          
          <div className="text-6xl mb-4">🥞☕🧈🍯</div>
          <h1 className="text-4xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            The Minor Arcana
          </h1>
          <p className="text-amber-600 text-lg mb-2">56 Cards of Daily Life</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Minor Arcana represents the everyday moments, choices, and challenges of life. 
            In the Breakfast Tarot Deck, four suits tell the story of what happens at the breakfast table:
            what you have (Pancakes), how you feel (Coffee), what drives you (Butter), and how you think (Syrup).
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
          <span className="px-4 py-2 bg-amber-500 text-white rounded-full font-medium">
            🥞 Minor Arcana (56)
          </span>
          <a 
            href="/deck-summary"
            className="px-4 py-2 bg-white text-amber-700 rounded-full font-medium hover:bg-amber-50 border border-amber-300"
          >
            🎴 Quick Reference
          </a>
        </div>

        {/* Suit Overview */}
        <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            The Four Suits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-3xl mb-1">🥞</div>
              <div className="font-bold text-amber-800">Pancakes</div>
              <div className="text-xs text-gray-600">Earth · Material</div>
            </div>
            <div className="text-center p-3 bg-sky-50 rounded-xl border border-sky-200">
              <div className="text-3xl mb-1">☕</div>
              <div className="font-bold text-sky-800">Coffee</div>
              <div className="text-xs text-gray-600">Water · Emotions</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-xl border border-orange-200">
              <div className="text-3xl mb-1">🧈</div>
              <div className="font-bold text-orange-800">Butter</div>
              <div className="text-xs text-gray-600">Fire · Passion</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-1">🍯</div>
              <div className="font-bold text-yellow-800">Syrup</div>
              <div className="text-xs text-gray-600">Air · Intellect</div>
            </div>
          </div>
        </div>

        {/* Suit Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.entries(suits).map(([key, suit]) => (
            <button
              key={key}
              onClick={() => setActiveSuit(key)}
              className={`px-5 py-3 rounded-full font-medium transition-all ${
                activeSuit === key
                  ? `bg-gradient-to-r ${suit.headerColor} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{suit.emoji}</span>
              {suit.name.replace('Suit of ', '')}
              <span className="ml-1 text-xs opacity-70">(14)</span>
            </button>
          ))}
        </div>

        {/* Current Suit Description */}
        <div className={`bg-gradient-to-br ${currentSuit.color} rounded-2xl p-6 mb-8 border-2`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{currentSuit.emoji}</div>
            <div>
              <h2 className={`text-2xl font-bold ${currentSuit.textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
                {currentSuit.name}
              </h2>
              <p className="text-gray-600">
                Element: <strong>{currentSuit.element}</strong> · Theme: <strong>{currentSuit.theme}</strong>
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {currentSuit.description}
          </p>
        </div>

        {/* Card List */}
        <div className="space-y-6">
          {currentSuit.cards.map((card) => (
            <div 
              key={card.number}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow ${currentSuit.color.split(' ')[2]}`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${currentSuit.color} p-4 border-b`}>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{card.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`bg-gradient-to-r ${currentSuit.headerColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                        {card.number <= 10 ? card.number : ['Page', 'Knight', 'Queen', 'King'][card.number - 11]}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold ${currentSuit.textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
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
                <div className={`bg-gradient-to-br ${currentSuit.color} rounded-xl p-4`}>
                  <h4 className={`text-sm font-bold ${currentSuit.textColor} mb-2`}>Full Reading</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {card.fullMeaning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suit Summary Table */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-amber-200">
          <h2 className={`text-2xl font-bold ${currentSuit.textColor} mb-4 text-center`} style={{ fontFamily: 'Georgia, serif' }}>
            📋 {currentSuit.name} Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`bg-gradient-to-r ${currentSuit.color}`}>
                  <th className={`px-3 py-2 text-left ${currentSuit.textColor}`}>#</th>
                  <th className={`px-3 py-2 text-left ${currentSuit.textColor}`}>Card</th>
                  <th className={`px-3 py-2 text-left ${currentSuit.textColor}`}>Core Meaning</th>
                </tr>
              </thead>
              <tbody>
                {currentSuit.cards.map((card, index) => (
                  <tr key={card.number} className={index % 2 === 0 ? 'bg-white' : `bg-gradient-to-r ${currentSuit.color} bg-opacity-30`}>
                    <td className={`px-3 py-2 font-bold ${currentSuit.textColor}`}>
                      {card.number <= 10 ? card.number : ['P', 'Kn', 'Q', 'K'][card.number - 11]}
                    </td>
                    <td className="px-3 py-2">
                      <span className="mr-2">{card.emoji}</span>
                      {card.name.replace(`of ${currentSuit.name.replace('Suit of ', '')}`, '').trim()}
                    </td>
                    <td className="px-3 py-2 text-gray-700">{card.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation to other suits */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {Object.entries(suits).map(([key, suit]) => (
            key !== activeSuit && (
              <button
                key={key}
                onClick={() => {
                  setActiveSuit(key);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 bg-white rounded-full font-medium hover:bg-gray-50 border border-gray-200 transition-all`}
              >
                View {suit.emoji} {suit.name.replace('Suit of ', '')}
              </button>
            )
          ))}
        </div>

        {/* Continue to other pages */}
        <div className="mt-8 text-center space-y-3">
          <a 
            href="/major-arcana"
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all mr-3"
          >
            ← Major Arcana (22)
          </a>
          <a 
            href="/deck-summary"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
          >
            View Full Deck Summary →
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
            Part of the Breakfast Tarot Family 🥞
          </div>
        </div>
      </div>
    </div>
  );
}
