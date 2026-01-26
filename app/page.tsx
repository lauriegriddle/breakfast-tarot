"use client";
import React, { useState, useEffect } from 'react';

// ============================================
// THE GRIDDLE DECK - 78 CARDS
// ============================================

const griddleDeck = [
  // ==========================================
  // MAJOR ARCANA (22 cards)
  // ==========================================
  {
    id: 'major-0',
    name: 'The First Timer',
    emoji: '🎒☕',
    suit: 'major',
    number: 0,
    meaning: 'New beginnings await! Just walk through the door.',
    fullMeaning: 'A cheerful newcomer walks into the café for the first time, backpack on, not knowing what to order but excited to try everything. This card signals new beginnings, spontaneity, and taking a leap of faith. Trust the menu!  Something delicious awaits. You don\'t need to have it all figured out. Just show up with curiosity and an open heart.'
  },
  {
    id: 'major-1',
    name: 'The Short Order Cook',
    emoji: '🍳✨',
    suit: 'major',
    number: 1,
    meaning: 'You have everything you need to make magic.',
    fullMeaning: 'The cook stands at the griddle with every tool within reach:  spatula, eggs, butter, fire. Mastery, resourcefulness, and manifestation energy. You have all the ingredients. Stop waiting for permission. Start cooking.'
  },
  {
    id: 'major-2',
    name: 'The Recipe Keeper',
    emoji: '📖🤫',
    suit: 'major',
    number: 2,
    meaning: 'Trust what you know but haven\'t spoken yet.',
    fullMeaning: 'An old recipe book, handwritten, passed down through generations. Some things aren\'t on the menu:  they\'re known only to those who\'ve earned the knowledge. Intuition, hidden wisdom, sacred secrets. Trust your gut. The answer is already inside you.'
  },
  {
    id: 'major-3',
    name: 'The Brunch Hostess',
    emoji: '🌸🥂',
    suit: 'major',
    number: 3,
    meaning: 'Abundance is flowing so receive it gracefully.',
    fullMeaning: 'A lavish brunch spread, mimosas flowing, flowers on every table. Nurturing, abundance, sensory pleasure. Let yourself be fed, literally or metaphorically. You are allowed to enjoy the feast.'
  },
  {
    id: 'major-4',
    name: 'The Café Owner',
    emoji: '🏪👔',
    suit: 'major',
    number: 4,
    meaning: 'Build something that lasts.',
    fullMeaning: 'The one who opens early, closes late, and knows every regular\'s name. Structure, authority, legacy. What are you building? Is the foundation solid? Lead with integrity.  People are watching.'
  },
  {
    id: 'major-5',
    name: 'The Regular',
    emoji: '☕📰',
    suit: 'major',
    number: 5,
    meaning: 'Sometimes the old ways are the right ways.',
    fullMeaning: 'Same seat, same order, same time every day. Tradition, routine, conventional wisdom. There\'s comfort in ritual. Not everything needs to be disrupted. Sometimes "the usual" is exactly what you need.'
  },
  {
    id: 'major-6',
    name: 'The Breakfast Date',
    emoji: '💕🍽️',
    suit: 'major',
    number: 6,
    meaning: 'Connection calls.  Who are you sharing the table with?',
    fullMeaning: 'Two people across from each other, sharing pancakes, lost in conversation. Partnership, choice, alignment of values. Who do you want to break bread with? Choose your people wisely.'
  },
  {
    id: 'major-7',
    name: 'The Food Truck',
    emoji: '🚚💨',
    suit: 'major',
    number: 7,
    meaning: 'Keep moving forward.  Momentum is your friend.',
    fullMeaning: 'A food truck on the move, destination unknown but direction clear. Willpower, determination, travel. You can\'t serve everyone from a parked position. Move. Adapt. Bring your gifts to new places.'
  },
  {
    id: 'major-8',
    name: 'The Patient Flip',
    emoji: '🥞🧘',
    suit: 'major',
    number: 8,
    meaning: 'The perfect flip can\'t be rushed.',
    fullMeaning: 'Waiting for bubbles to form before flipping the pancake. Patience, gentle control, inner strength. Force it and you\'ll tear it. Trust the timing. You\'ll know when it\'s ready.'
  },
  {
    id: 'major-9',
    name: 'The Early Bird',
    emoji: '🌅🧥',
    suit: 'major',
    number: 9,
    meaning: 'Solitude brings clarity.',
    fullMeaning: 'The one who arrives before anyone else, coffee in hand, watching the sunrise alone. Introspection, solitude, inner guidance. Sometimes you need a table for one. The answers come in the quiet.'
  },
  {
    id: 'major-10',
    name: 'The Specials Board',
    emoji: '🎡📋',
    suit: 'major',
    number: 10,
    meaning: 'The menu changes.  Roll with it.',
    fullMeaning: 'Today\'s specials are different from yesterday\'s. The wheel turns. Cycles, fate, change. What\'s available today wasn\'t available before and might not be tomorrow. Take the opportunity while it\'s on the board.'
  },
  {
    id: 'major-11',
    name: 'The Fair Split',
    emoji: '⚖️🧾',
    suit: 'major',
    number: 11,
    meaning: 'Balance the books because what\'s fair is fair.',
    fullMeaning: 'Splitting the check evenly, everyone pays their share. Justice, accountability, truth. No one skips out on the bill. What you put in is what you get out. Be honest about what you owe and what you\'re owed.'
  },
  {
    id: 'major-12',
    name: 'The Slow Brew',
    emoji: '⏳☕',
    suit: 'major',
    number: 12,
    meaning: 'Let things develop.  Don\'t rush the drip.',
    fullMeaning: 'Cold brew takes 12 hours. Pour-over can\'t be rushed. Suspension, letting go, new perspective. Some things can\'t be microwaved. Surrender to the process. The wait makes it better.'
  },
  {
    id: 'major-13',
    name: 'Last Call',
    emoji: '🌙🚪',
    suit: 'major',
    number: 13,
    meaning: 'One chapter ends so another can begin.',
    fullMeaning: 'The café is closing, chairs going up on tables. An ending, but also a clearing. Transformation, release, necessary conclusion. You can\'t stay here forever. It\'s time to leave so you can come back fresh tomorrow.'
  },
  {
    id: 'major-14',
    name: 'The Perfect Blend',
    emoji: '☕🥛',
    suit: 'major',
    number: 14,
    meaning: 'Find your perfect mix.',
    fullMeaning: 'Coffee and cream swirling together in perfect proportion. Balance, patience, moderation. Too much of one thing throws it off. Find the ratio that works for you and stick with it.'
  },
  {
    id: 'major-15',
    name: 'The Bottomless Cup',
    emoji: '☕⛓️',
    suit: 'major',
    number: 15,
    meaning: 'What habit has you trapped in the refill cycle?',
    fullMeaning: 'Free refills sound great until you realize you\'ve had seven cups and can\'t stop. Addiction, bondage, shadow patterns. What are you over-consuming? The chain is self-imposed. You can put the cup down anytime.'
  },
  {
    id: 'major-16',
    name: 'The Smoke Alarm',
    emoji: '🚨💨',
    suit: 'major',
    number: 16,
    meaning: 'Sometimes things burn to teach you something.',
    fullMeaning: 'Burnt pancakes, smoke filling the kitchen, alarm blaring. Chaos! But now you know the griddle was too hot. Sudden upheaval and revelation might feel destructive, but sometimes things have to burn to teach you something important. The smoke clears. You rebuild better.'
  },
  {
    id: 'major-17',
    name: 'The Tip Jar',
    emoji: '⭐🫙',
    suit: 'major',
    number: 17,
    meaning: 'Small kindnesses ripple outward.',
    fullMeaning: 'A jar full of small generosities:  dollars, coins, good wishes. Hope, generosity, faith. Every little bit adds up. What you give comes back. Keep the faith and keep giving.'
  },
  {
    id: 'major-18',
    name: 'The Night Shift',
    emoji: '🌙😴',
    suit: 'major',
    number: 18,
    meaning: 'Trust your gut through the fog.',
    fullMeaning: 'Working late, everything feels a little unreal. Is that a customer or a shadow? Illusion, intuition, the unconscious. Not everything is as it seems right now. Trust your instincts over your eyes. Morning will bring clarity.'
  },
  {
    id: 'major-19',
    name: 'The Sunny-Side Up',
    emoji: '☀️🍳',
    suit: 'major',
    number: 19,
    meaning: 'Everything is coming together beautifully.',
    fullMeaning: 'A perfect sunny-side up egg, golden yolk intact, morning light streaming in. Joy, success, vitality. This is the good stuff. Enjoy it fully. You\'ve earned this moment in the sun.'
  },
  {
    id: 'major-20',
    name: 'The Review',
    emoji: '⭐⭐⭐⭐⭐',
    suit: 'major',
    number: 20,
    meaning: 'What did you learn from this experience?',
    fullMeaning: 'A five-star review that changes everything. Reflection, evaluation, awakening. How would you rate your own journey? What feedback have you been ignoring? Time to look honestly at the reviews, your own and others\'.'
  },
  {
    id: 'major-21',
    name: 'The Full Breakfast',
    emoji: '🌍🍽️',
    suit: 'major',
    number: 21,
    meaning: 'The journey is complete.  Be sure to savor every bite.',
    fullMeaning: 'The full spread: eggs, pancakes, bacon, toast, fruit, coffee, juice. Everything. Completion, wholeness, fulfillment. You made it. The whole menu is yours. This is what satisfaction tastes like.'
  },

  // ==========================================
  // SUIT OF PANCAKES - Earth/Material (14 cards)
  // ==========================================
  {
    id: 'pancakes-1',
    name: 'Ace of Pancakes',
    emoji: '🥞✨',
    suit: 'pancakes',
    number: 1,
    meaning: 'A new opportunity for abundance is being served.',
    fullMeaning: 'A single, perfect golden pancake appears on your plate, the first of many. New financial opportunity, material beginnings, a seed of prosperity. Say yes to this. It\'s the start of something nourishing.'
  },
  {
    id: 'pancakes-2',
    name: 'Two of Pancakes',
    emoji: '🥞⚖️🥞',
    suit: 'pancakes',
    number: 2,
    meaning: 'Balance your priorities.  You can juggle this.',
    fullMeaning: 'Two pancakes, two plates, two priorities. Balancing act, adaptability, time management. You can handle both, but not if you let one burn while flipping the other. Stay nimble.'
  },
  {
    id: 'pancakes-3',
    name: 'Three of Pancakes',
    emoji: '🥞👨‍🍳👩‍🍳',
    suit: 'pancakes',
    number: 3,
    meaning: 'Teamwork makes the dream stack.',
    fullMeaning: 'Three cooks working the griddle together, each with their role. Collaboration, skill-building, teamwork. You don\'t have to make the whole stack alone. Bring in people who complement your skills.'
  },
  {
    id: 'pancakes-4',
    name: 'Four of Pancakes',
    emoji: '🥞🤲',
    suit: 'pancakes',
    number: 4,
    meaning: 'Are you hoarding when you could be sharing?',
    fullMeaning: 'Someone clutching their plate protectively, not sharing, guarding their stack with suspicious eyes. Holding on too tight, scarcity mindset, fear of loss. Pancakes get cold when you don\'t eat them. Abundance spoils when you don\'t share it.'
  },
  {
    id: 'pancakes-5',
    name: 'Five of Pancakes',
    emoji: '🥞❄️😔',
    suit: 'pancakes',
    number: 5,
    meaning: 'Hard times, but help is closer than you think.',
    fullMeaning: 'Cold pancakes, empty syrup bottle, a hungry morning. Financial stress, feeling left out in the cold, material hardship. But look, the café lights are on. Help is available if you\'re willing to ask.'
  },
  {
    id: 'pancakes-6',
    name: 'Six of Pancakes',
    emoji: '🥞🎁',
    suit: 'pancakes',
    number: 6,
    meaning: 'What goes around comes around.',
    fullMeaning: 'Sharing pancakes with those who have none, receiving unexpected generosity. Giving and receiving, charity, fairness. The stack circulates. What you give comes back. Help someone and let yourself be helped.'
  },
  {
    id: 'pancakes-7',
    name: 'Seven of Pancakes',
    emoji: '🥞🌱⏳',
    suit: 'pancakes',
    number: 7,
    meaning: 'The batter is rising so be patient.',
    fullMeaning: 'Watching the batter slowly rise, waiting to see if your recipe worked. Long-term investment, patience, assessment. You\'ve done the work. Now you wait. It\'s too early to judge so let it develop.'
  },
  {
    id: 'pancakes-8',
    name: 'Eight of Pancakes',
    emoji: '🥞📚',
    suit: 'pancakes',
    number: 8,
    meaning: 'Master your craft because every flip teaches you something.',
    fullMeaning: 'Practicing the flip over and over, determined to get it perfect. Skill development, dedication, craftsmanship. You\'re in apprentice mode. Keep practicing. Mastery comes from repetition with intention.'
  },
  {
    id: 'pancakes-9',
    name: 'Nine of Pancakes',
    emoji: '🥞🏡😌',
    suit: 'pancakes',
    number: 9,
    meaning: 'You\'ve built something comfortable so be sure to enjoy it.',
    fullMeaning: 'A cozy kitchen, a perfect stack, everything you need within reach. Self-sufficiency, luxury, accomplishment. You did it. The abundance you\'re enjoying? You built that. Savor your success.'
  },
  {
    id: 'pancakes-10',
    name: 'Ten of Pancakes',
    emoji: '🥞👨‍👩‍👧‍👦🏠',
    suit: 'pancakes',
    number: 10,
    meaning: 'Legacy and abundance shared across generations.',
    fullMeaning: 'A multi-generational family breakfast, grandparents to grandchildren, recipes passed down. Family wealth, legacy, long-term security. This isn\'t just about you.  It\'s about what you\'re building for those who come after.'
  },
  {
    id: 'pancakes-page',
    name: 'Page of Pancakes',
    emoji: '🥞📬',
    suit: 'pancakes',
    number: 11,
    meaning: 'A message about money or opportunity is coming.',
    fullMeaning: 'A young person learning the breakfast trade, eager and curious. New opportunity, student energy, a message about material matters. Stay open to learning. Good news about practical matters may be arriving.'
  },
  {
    id: 'pancakes-knight',
    name: 'Knight of Pancakes',
    emoji: '🥞🐎',
    suit: 'pancakes',
    number: 12,
    meaning: 'Slow and steady wins the breakfast rush.',
    fullMeaning: 'A reliable worker who shows up every day, methodical and trustworthy. Steady progress, reliability, routine. Not flashy, but effective. Keep doing the work. Consistency beats intensity.'
  },
  {
    id: 'pancakes-queen',
    name: 'Queen of Pancakes',
    emoji: '🥞👑🌿',
    suit: 'pancakes',
    number: 13,
    meaning: 'Create an environment where abundance grows.',
    fullMeaning: 'The one who makes the café feel like home, nurturing customers and staff alike. Practical nurturing, abundance creator, down-to-earth wisdom. Make people feel fed in every sense of the word.'
  },
  {
    id: 'pancakes-king',
    name: 'King of Pancakes',
    emoji: '🥞👑💼',
    suit: 'pancakes',
    number: 14,
    meaning: 'Build your empire one pancake at a time.',
    fullMeaning: 'The successful café owner, multiple locations, wealth built through patience. Material success, business mastery, provider energy. You have what it takes to build something substantial. Lead with generosity.'
  },

  // ==========================================
  // SUIT OF COFFEE - Water/Emotions (14 cards)
  // ==========================================
  {
    id: 'coffee-1',
    name: 'Ace of Coffee',
    emoji: '☕✨',
    suit: 'coffee',
    number: 1,
    meaning: 'A new emotional beginning is brewing.',
    fullMeaning: 'A fresh cup, steam rising, full of possibility. New relationship, emotional awakening, intuitive opening. Your heart is ready for something new. Take that first sip.'
  },
  {
    id: 'coffee-2',
    name: 'Two of Coffee',
    emoji: '☕💕☕',
    suit: 'coffee',
    number: 2,
    meaning: 'Connection across the table.',
    fullMeaning: 'Two cups, two people, one conversation. Partnership, mutual attraction, meaningful exchange. This connection has potential. Lean in. Share what\'s really on your heart.'
  },
  {
    id: 'coffee-3',
    name: 'Three of Coffee',
    emoji: '☕🎉👯',
    suit: 'coffee',
    number: 3,
    meaning: 'Celebrate with your people!',
    fullMeaning: 'Friends gathered for brunch, laughter, clinking cups. Friendship, celebration, community. Your people are your wealth. Gather them. Celebrate together. Joy multiplies when shared.'
  },
  {
    id: 'coffee-4',
    name: 'Four of Coffee',
    emoji: '☕😒',
    suit: 'coffee',
    number: 4,
    meaning: 'Are you ignoring a gift right in front of you?',
    fullMeaning: 'Someone staring at their phone while three full cups sit untouched. Apathy, missed opportunity, emotional withdrawal. What are you taking for granted? Look up. The good stuff is right there.'
  },
  {
    id: 'coffee-5',
    name: 'Five of Coffee',
    emoji: '☕😢☕☕',
    suit: 'coffee',
    number: 5,
    meaning: 'Don\'t mourn the spilled cups but see what remains.',
    fullMeaning: 'Three cups spilled, but two still full. Grief, regret, focusing on loss. Yes, you lost something. But not everything. Turn around. There\'s still coffee in some of those cups.'
  },
  {
    id: 'coffee-6',
    name: 'Six of Coffee',
    emoji: '☕👶🏠',
    suit: 'coffee',
    number: 6,
    meaning: 'Sweet memories of simpler times.',
    fullMeaning: 'The coffee your grandmother used to make, nostalgia in every sip. Memory, childhood, innocence. Sometimes we need to revisit where we came from. What felt like home? Go back there even just in your mind.'
  },
  {
    id: 'coffee-7',
    name: 'Seven of Coffee',
    emoji: '☕🌈☁️',
    suit: 'coffee',
    number: 7,
    meaning: 'So many choices but not all of them are real.',
    fullMeaning: 'A menu with too many options, some of them illusions. Fantasy, wishful thinking, too many choices. Not every option on this menu is actually available. Get grounded. What\'s real? What\'s just steam?'
  },
  {
    id: 'coffee-8',
    name: 'Eight of Coffee',
    emoji: '☕🚶‍♀️🌙',
    suit: 'coffee',
    number: 8,
    meaning: 'Sometimes you have to leave a full cup behind.',
    fullMeaning: 'Walking away from a table of unfinished drinks, seeking something more. Moving on, seeking deeper meaning, leaving comfort. The coffee here is fine, but your soul needs something else. It\'s okay to go.'
  },
  {
    id: 'coffee-9',
    name: 'Nine of Coffee',
    emoji: '☕😊🙏',
    suit: 'coffee',
    number: 9,
    meaning: 'Yes, it really is as good as you hoped.',
    fullMeaning: 'A satisfied customer, leaning back, cup in hand, smile on face. The "wish granted" moment. Contentment, wishes fulfilled, emotional satisfaction. Let yourself enjoy it without waiting for the other shoe to drop.'
  },
  {
    id: 'coffee-10',
    name: 'Ten of Coffee',
    emoji: '☕🌈👨‍👩‍👧‍👦',
    suit: 'coffee',
    number: 10,
    meaning: 'Emotional fulfillment with your whole crew.',
    fullMeaning: 'The full table: family, friends, love flowing freely. Emotional completion, happy family, community. This is the dream. Everyone you love, fed and happy. You did it.'
  },
  {
    id: 'coffee-page',
    name: 'Page of Coffee',
    emoji: '☕💌',
    suit: 'coffee',
    number: 11,
    meaning: 'A message of the heart is on its way.',
    fullMeaning: 'A dreamy young person composing a love note over their latte. Romantic message, creative inspiration, emotional news. Stay open. Something or someone wants to reach your heart.'
  },
  {
    id: 'coffee-knight',
    name: 'Knight of Coffee',
    emoji: '☕🦢',
    suit: 'coffee',
    number: 12,
    meaning: 'Follow your heart even into the unknown.',
    fullMeaning: 'The romantic who follows feelings wherever they lead. Heart-led action, romantic gesture, emotional pursuit. Logic has its place, but right now, lead with your heart. Go where it takes you.'
  },
  {
    id: 'coffee-queen',
    name: 'Queen of Coffee',
    emoji: '☕👑💙',
    suit: 'coffee',
    number: 13,
    meaning: 'Deep emotional wisdom flows through you.',
    fullMeaning: 'The intuitive barista who knows what you need before you order. Emotional intelligence, intuition, nurturing depth. Trust your feelings. They know things your mind hasn\'t figured out yet.'
  },
  {
    id: 'coffee-king',
    name: 'King of Coffee',
    emoji: '☕👑🎭',
    suit: 'coffee',
    number: 14,
    meaning: 'Master of emotional balance.',
    fullMeaning: 'The calm presence who holds space for everyone\'s feelings. Emotional maturity, diplomacy, compassionate leadership. You can feel deeply and still stay grounded. Be the calm in the storm.'
  },

  // ==========================================
  // SUIT OF BUTTER - Fire/Passion (14 cards)
  // ==========================================
  {
    id: 'butter-1',
    name: 'Ace of Butter',
    emoji: '🧈✨',
    suit: 'butter',
    number: 1,
    meaning: 'A spark of inspiration has landed.',
    fullMeaning: 'A pat of butter melting on hot pancakes is the sizzle of new energy. Creative spark, new passion, inspired beginning. The fire is lit. Feed it. See where this energy wants to go.'
  },
  {
    id: 'butter-2',
    name: 'Two of Butter',
    emoji: '🧈🌍',
    suit: 'butter',
    number: 2,
    meaning: 'You\'re planning something big.  Keep dreaming.',
    fullMeaning: 'Looking at a map, imagining all the places breakfast could take you. Planning, future vision, personal power. The world is full of griddles waiting for your butter. Where do you want to go?'
  },
  {
    id: 'butter-3',
    name: 'Three of Butter',
    emoji: '🧈🚢',
    suit: 'butter',
    number: 3,
    meaning: 'Your efforts are shipping out.  Watch for returns.',
    fullMeaning: 'Sending your creations out into the world, waiting for feedback. Expansion, foresight, overseas energy. You\'ve launched something. Now trust the journey. Good news will come back from afar.'
  },
  {
    id: 'butter-4',
    name: 'Four of Butter',
    emoji: '🧈🎊🏠',
    suit: 'butter',
    number: 4,
    meaning: 'Celebrate how far you\'ve come.',
    fullMeaning: 'A housewarming brunch, stability achieved, time to enjoy. Celebration, stability, harvest. You built this! Have the party. Acknowledge the milestone. Then dream up the next one.'
  },
  {
    id: 'butter-5',
    name: 'Five of Butter',
    emoji: '🧈😤👊',
    suit: 'butter',
    number: 5,
    meaning: 'Healthy competition sharpens everyone.',
    fullMeaning: 'A cook-off, spatulas clashing, everyone bringing their best. Competition, conflict, disagreement. Not all friction is bad. Sometimes the heat makes everyone cook better. Engage, don\'t avoid.'
  },
  {
    id: 'butter-6',
    name: 'Six of Butter',
    emoji: '🧈🏆👏',
    suit: 'butter',
    number: 6,
    meaning: 'Victory! Take your well-earned bow.',
    fullMeaning: 'Winner of the breakfast contest, crowd cheering, recognition earned. Public recognition, success, acclaim. You won this one. Don\'t downplay it. Let yourself be celebrated.'
  },
  {
    id: 'butter-7',
    name: 'Seven of Butter',
    emoji: '🧈🛡️',
    suit: 'butter',
    number: 7,
    meaning: 'Hold your ground:  don\'t let them take your griddle.',
    fullMeaning: 'Defending your station during the breakfast rush, holding firm. Perseverance, defensive position, standing your ground. They\'re coming for your spot. Don\'t give it up. You earned this griddle.'
  },
  {
    id: 'butter-8',
    name: 'Eight of Butter',
    emoji: '🧈💨🎯',
    suit: 'butter',
    number: 8,
    meaning: 'Everything is moving fast.  Stay focused.',
    fullMeaning: 'Orders flying, pans sizzling, rapid movement toward the goal. Rapid progress, quick action, momentum. Things are happening FAST. Don\'t slow down now. Ride the wave.'
  },
  {
    id: 'butter-9',
    name: 'Nine of Butter',
    emoji: '🧈😰🩹',
    suit: 'butter',
    number: 9,
    meaning: 'You\'re tired but not done.  Just one more push.',
    fullMeaning: 'A weary cook, bandaged from burns, still standing at the griddle. Resilience, persistence, last stand. You\'ve been through it. The burns are real. But you\'re still here. One more round.'
  },
  {
    id: 'butter-10',
    name: 'Ten of Butter',
    emoji: '🧈😫📦',
    suit: 'butter',
    number: 10,
    meaning: 'You\'re carrying too much.  Time to put something down.',
    fullMeaning: 'A cook buried under too many orders, overwhelmed, burnt out. Burden, overwhelm, too much fire. You took on more than one person should carry. It\'s not failure to delegate. Put some of these pans down.'
  },
  {
    id: 'butter-page',
    name: 'Page of Butter',
    emoji: '🧈📣',
    suit: 'butter',
    number: 11,
    meaning: 'An exciting message about a new venture is coming.',
    fullMeaning: 'An enthusiastic young cook, full of ideas, ready to change the menu. Exciting news, creative message, youthful energy. Someone, maybe you, has a bold idea. Listen to it. This enthusiasm is contagious.'
  },
  {
    id: 'butter-knight',
    name: 'Knight of Butter',
    emoji: '🧈🔥🐎',
    suit: 'butter',
    number: 12,
    meaning: 'Charge forward with passion!',
    fullMeaning: 'The cook who moves fast, takes risks, never met a challenge they didn\'t accept. Action, adventure, impulsive energy. Think later, move now. Sometimes the bold move is the right move. Go!'
  },
  {
    id: 'butter-queen',
    name: 'Queen of Butter',
    emoji: '🧈👑🔥',
    suit: 'butter',
    number: 13,
    meaning: 'Your confidence inspires everyone around you.',
    fullMeaning: 'The passionate leader who makes everyone believe they can cook. Charisma, confidence, fierce independence. You walk in and the energy shifts. Own that power. Inspire the room.'
  },
  {
    id: 'butter-king',
    name: 'King of Butter',
    emoji: '🧈👑🦁',
    suit: 'butter',
    number: 14,
    meaning: 'Lead with vision and courage.',
    fullMeaning: 'The visionary chef who built an empire on bold flavors. Leadership, vision, entrepreneurial fire. You see what others don\'t. Lead them there. Your vision is the roadmap.'
  },

  // ==========================================
  // SUIT OF SYRUP - Air/Intellect (14 cards)
  // ==========================================
  {
    id: 'syrup-1',
    name: 'Ace of Syrup',
    emoji: '🍯✨',
    suit: 'syrup',
    number: 1,
    meaning: 'A breakthrough thought brings clarity at last.',
    fullMeaning: 'Pure maple syrup, truth in its sweetest form. Mental clarity, breakthrough, new idea. The fog lifts. You see it clearly now. Trust this insight.  It\'s pure.'
  },
  {
    id: 'syrup-2',
    name: 'Two of Syrup',
    emoji: '🍯⚔️',
    suit: 'syrup',
    number: 2,
    meaning: 'You\'re avoiding a decision, but you can\'t forever.',
    fullMeaning: 'Two syrup bottles, blindfolded, unable to choose. Stalemate, avoidance, difficult decision. You can\'t stay blindfolded forever. The choice won\'t make itself. Pick one.'
  },
  {
    id: 'syrup-3',
    name: 'Three of Syrup',
    emoji: '🍯💔😢',
    suit: 'syrup',
    number: 3,
    meaning: 'This heartbreak is teaching you something important.',
    fullMeaning: 'Syrup spilled like tears, sweetness wasted. Heartbreak, sorrow, painful truth. Yes, it hurts. Let it. The pain is clearing something that needed to go.'
  },
  {
    id: 'syrup-4',
    name: 'Four of Syrup',
    emoji: '🍯😴🛏️',
    suit: 'syrup',
    number: 4,
    meaning: 'Rest your mind because it\'s been working too hard.',
    fullMeaning: 'A quiet booth, eyes closed, taking a mental break. Rest, recovery, temporary retreat. Your brain needs a break. Step away from the problem. The answer will come when you stop chasing it.'
  },
  {
    id: 'syrup-5',
    name: 'Five of Syrup',
    emoji: '🍯😈🏆',
    suit: 'syrup',
    number: 5,
    meaning: 'Someone won unfairly so don\'t sink to their level.',
    fullMeaning: 'A cook who cheated to win, hollow victory. Unfairness, defeat, ego. You lost this round, but not because you weren\'t good enough. Keep your integrity. Their win is empty.'
  },
  {
    id: 'syrup-6',
    name: 'Six of Syrup',
    emoji: '🍯🚣‍♀️',
    suit: 'syrup',
    number: 6,
    meaning: 'You\'re moving toward calmer waters.',
    fullMeaning: 'Rowing away from troubled waters, calmer breakfast ahead. Transition, moving on, mental relief. The hard part is behind you. Keep rowing. Smoother days are ahead.'
  },
  {
    id: 'syrup-7',
    name: 'Seven of Syrup',
    emoji: '🍯🦊',
    suit: 'syrup',
    number: 7,
    meaning: 'Be clever because not everyone needs to know your recipe.',
    fullMeaning: 'A sly cook with a secret ingredient, playing it smart. Strategy, cunning, resourcefulness. You don\'t have to show all your cards. Sometimes the smart move is the subtle one.'
  },
  {
    id: 'syrup-8',
    name: 'Eight of Syrup',
    emoji: '🍯🕸️😵',
    suit: 'syrup',
    number: 8,
    meaning: 'You\'ve thought yourself into a trap but the exit exists.',
    fullMeaning: 'Stuck in mental loops, overthinking, paralyzed by analysis. Mental prison, restriction, victim mentality. Your thoughts built this cage. Your thoughts can unbuild it. The door isn\'t locked.  You just think it is.'
  },
  {
    id: 'syrup-9',
    name: 'Nine of Syrup',
    emoji: '🍯😰🌙',
    suit: 'syrup',
    number: 9,
    meaning: 'The 3 AM worries aren\'t as real as they feel.',
    fullMeaning: 'Lying awake, mind racing with worst-case scenarios. Anxiety, nightmares, mental anguish. Your brain is catastrophizing. These fears are inflated by the darkness. Wait for morning before you make any decisions.'
  },
  {
    id: 'syrup-10',
    name: 'Ten of Syrup',
    emoji: '🍯🔚🌅',
    suit: 'syrup',
    number: 10,
    meaning: 'The worst is over and dawn is coming.',
    fullMeaning: 'Empty syrup bottle but the sun is rising. A terrible night, but morning comes. Rock bottom, ending, inevitable dawn. You survived the darkest part. It\'s over. Now the only direction is up.'
  },
  {
    id: 'syrup-page',
    name: 'Page of Syrup',
    emoji: '🍯💬',
    suit: 'syrup',
    number: 11,
    meaning: 'Speak your truth even if your voice shakes.',
    fullMeaning: 'A young person with something to say, nervous but determined. New ideas, communication, speaking up. You have something worth saying. The world needs to hear it. Open your mouth.'
  },
  {
    id: 'syrup-knight',
    name: 'Knight of Syrup',
    emoji: '🍯⚔️💨',
    suit: 'syrup',
    number: 12,
    meaning: 'Cut through the nonsense with sharp clarity.',
    fullMeaning: 'A quick-witted cook who cuts through confusion with precision. Sharp mind, fast talk, intellectual charge. No time for fuzzy thinking. Say what you mean. Cut to the point.'
  },
  {
    id: 'syrup-queen',
    name: 'Queen of Syrup',
    emoji: '🍯👑🧠',
    suit: 'syrup',
    number: 13,
    meaning: 'Your clear perception sees what others miss.',
    fullMeaning: 'The one who sees through every lie, sharp as a knife. Perception, clear boundaries, independent thinking. You can\'t be fooled. Trust your ability to see clearly. Set boundaries accordingly.'
  },
  {
    id: 'syrup-king',
    name: 'King of Syrup',
    emoji: '🍯👑⚖️',
    suit: 'syrup',
    number: 14,
    meaning: 'Lead with truth and fair judgment.',
    fullMeaning: 'The fair judge, the clear thinker, the one who speaks truth. Intellectual authority, truth-speaker, ethical leadership. Your words have weight. Use them wisely. Speak truth even when it\'s uncomfortable.'
  }
];

// ============================================
// ACHIEVEMENTS
// ============================================

const achievements = [
  { id: 'first_sip', name: 'First Sip', icon: '☕', description: 'Pull your first card', requirement: (stats: Stats) => stats.totalPulls >= 1 },
  { id: 'weekly_regular', name: 'Weekly Regular', icon: '🥞', description: '7-day streak', requirement: (stats: Stats) => stats.currentStreak >= 7 },
  { id: 'cafe_local', name: 'Café Local', icon: '🏠', description: '30-day streak', requirement: (stats: Stats) => stats.currentStreak >= 30 },
  { id: 'getting_cozy', name: 'Getting Cozy', icon: '🧈', description: '10 total pulls', requirement: (stats: Stats) => stats.totalPulls >= 10 },
  { id: 'breakfast_club', name: 'Breakfast Club', icon: '🍳', description: '50 total pulls', requirement: (stats: Stats) => stats.totalPulls >= 50 },
];

// ============================================
// TYPES
// ============================================

interface Stats {
  totalPulls: number;
  currentStreak: number;
  maxStreak: number;
  lastPullDate: string | null;
  unlockedAchievements: string[];
}

interface Card {
  id: string;
  name: string;
  emoji: string;
  suit: string;
  number: number;
  meaning: string;
  fullMeaning: string;
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function BreakfastTarot() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [todaysCard, setTodaysCard] = useState<Card | null>(null);
  const [showFullMeaning, setShowFullMeaning] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [newAchievement, setNewAchievement] = useState<typeof achievements[0] | null>(null);
  
  // Explore deck states
  const [showExploreDeck, setShowExploreDeck] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState<string>('major');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  
  const [stats, setStats] = useState<Stats>({
    totalPulls: 0,
    currentStreak: 0,
    maxStreak: 0,
    lastPullDate: null,
    unlockedAchievements: []
  });

  // Get today's card (same for everyone each day)
  const getTodaysCard = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const cardIndex = dayOfYear % griddleDeck.length;
    return griddleDeck[cardIndex];
  };

  // Load stats from localStorage on mount
  useEffect(() => {
    setHasMounted(true);
    setTodaysCard(getTodaysCard());
    
    try {
      const saved = localStorage.getItem('breakfastTarotStats');
      if (saved) {
        setStats(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Could not load stats', e);
    }
  }, []);

  // Check for new achievements
  const checkAchievements = (newStats: Stats) => {
    for (const achievement of achievements) {
      if (!newStats.unlockedAchievements.includes(achievement.id) && achievement.requirement(newStats)) {
        setNewAchievement(achievement);
        setTimeout(() => setNewAchievement(null), 4000);
        return [...newStats.unlockedAchievements, achievement.id];
      }
    }
    return newStats.unlockedAchievements;
  };

  // Handle card flip
  const handleFlip = () => {
    if (isFlipped) return;
    
    setIsFlipped(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    const newStats: Stats = {
      totalPulls: stats.totalPulls + 1,
      currentStreak: stats.lastPullDate === yesterday ? stats.currentStreak + 1 : 
                     stats.lastPullDate === today ? stats.currentStreak : 1,
      maxStreak: 0,
      lastPullDate: today,
      unlockedAchievements: stats.unlockedAchievements
    };
    newStats.maxStreak = Math.max(stats.maxStreak, newStats.currentStreak);
    newStats.unlockedAchievements = checkAchievements(newStats);
    
    setStats(newStats);
    try {
      localStorage.setItem('breakfastTarotStats', JSON.stringify(newStats));
    } catch (e) {
      console.error('Could not save stats', e);
    }
  };

  // Handle share
  const handleShare = () => {
    if (!todaysCard) return;
    
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const shareText = `☕ Breakfast Tarot - ${today}\n\n${todaysCard.emoji}\n${todaysCard.name}\n\n"${todaysCard.meaning}"\n\nPull your daily card at breakfasttarot.com 🥞`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  // Get suit color for card
  const getSuitColor = (suit: string) => {
    switch (suit) {
      case 'major': return 'from-purple-100 to-indigo-100 border-purple-300';
      case 'pancakes': return 'from-amber-100 to-yellow-100 border-amber-300';
      case 'coffee': return 'from-sky-100 to-blue-100 border-sky-300';
      case 'butter': return 'from-orange-100 to-amber-100 border-orange-300';
      case 'syrup': return 'from-yellow-100 to-amber-100 border-yellow-400';
      default: return 'from-gray-100 to-gray-200 border-gray-300';
    }
  };

  // Get suit name for display
  const getSuitName = (suit: string) => {
    switch (suit) {
      case 'major': return 'Major Arcana';
      case 'pancakes': return 'Suit of Pancakes';
      case 'coffee': return 'Suit of Coffee';
      case 'butter': return 'Suit of Butter';
      case 'syrup': return 'Suit of Syrup';
      default: return suit;
    }
  };

  // Get cards by suit
  const getCardsBySuit = (suit: string) => {
    return griddleDeck.filter(card => card.suit === suit);
  };

  // Suit info for explore
  const suits = [
    { id: 'major', name: 'Major Arcana', emoji: '✨', description: 'Life\'s big moments', count: 22 },
    { id: 'pancakes', name: 'Pancakes', emoji: '🥞', description: 'Earth · Material', count: 14 },
    { id: 'coffee', name: 'Coffee', emoji: '☕', description: 'Water · Emotions', count: 14 },
    { id: 'butter', name: 'Butter', emoji: '🧈', description: 'Fire · Passion', count: 14 },
    { id: 'syrup', name: 'Syrup', emoji: '🍯', description: 'Air · Intellect', count: 14 },
  ];

  if (!hasMounted || !todaysCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-4xl animate-pulse">☕</div>
      </div>
    );
  }

  // ==========================================
  // EXPLORE DECK VIEW
  // ==========================================
  if (showExploreDeck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                setShowExploreDeck(false);
                setSelectedCard(null);
              }}
              className="text-amber-700 hover:text-amber-800 flex items-center gap-1"
            >
              ← Back to Daily Card
            </button>
            <h1 className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
              Explore the Deck
            </h1>
            <div className="w-20"></div>
          </div>

          {/* Selected Card Detail View */}
          {selectedCard ? (
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <button
                onClick={() => setSelectedCard(null)}
                className="text-amber-600 hover:text-amber-700 mb-4 flex items-center gap-1"
              >
                ← Back to {getSuitName(selectedCard.suit)}
              </button>
              
              <div className="text-center">
                <div className="text-6xl mb-4">{selectedCard.emoji}</div>
                <div className="text-xs text-gray-500 mb-1">{getSuitName(selectedCard.suit)}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {selectedCard.name}
                </h2>
                <p className="text-amber-700 italic mb-6 text-lg">"{selectedCard.meaning}"</p>
                
                <div className={`bg-gradient-to-br ${getSuitColor(selectedCard.suit)} rounded-xl p-6 text-left`}>
                  <h3 className="font-bold text-gray-800 mb-2">Full Meaning</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedCard.fullMeaning}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Suit Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {suits.map(suit => (
                  <button
                    key={suit.id}
                    onClick={() => setSelectedSuit(suit.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedSuit === suit.id
                        ? 'bg-amber-500 text-white shadow-lg'
                        : 'bg-white text-amber-700 hover:bg-amber-100'
                    }`}
                  >
                    <span className="mr-1">{suit.emoji}</span>
                    {suit.name}
                    <span className="ml-1 text-xs opacity-70">({suit.count})</span>
                  </button>
                ))}
              </div>

              {/* Suit Description */}
              <div className="text-center mb-6">
                <p className="text-amber-600">
                  {suits.find(s => s.id === selectedSuit)?.description}
                </p>
              </div>

              {/* Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {getCardsBySuit(selectedSuit).map(card => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className={`bg-gradient-to-br ${getSuitColor(card.suit)} rounded-xl p-4 text-center hover:scale-105 transition-transform shadow-md border-2`}
                  >
                    <div className="text-3xl mb-2">{card.emoji}</div>
                    <div className="text-sm font-bold text-gray-800 leading-tight">{card.name}</div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN DAILY CARD VIEW
  // ==========================================
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed top-4 left-4 text-4xl opacity-20">☕</div>
      <div className="fixed top-4 right-4 text-4xl opacity-20">🥞</div>
      <div className="fixed bottom-4 left-4 text-4xl opacity-20">🧈</div>
      <div className="fixed bottom-4 right-4 text-4xl opacity-20">🍯</div>

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 30 }).map((_, i) => {
            const emojis = ['☕', '🥞', '🧈', '🍯', '🍳', '✨'];
            return (
              <div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${(i * 11) % 100}%`,
                  top: '-40px',
                  animation: `fall 3s ease-in ${(i % 10) * 0.1}s forwards`
                }}
              >
                {emojis[i % emojis.length]}
              </div>
            );
          })}
        </div>
      )}

      {/* Achievement popup */}
      {newAchievement && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
            <span className="text-2xl">{newAchievement.icon}</span>
            <div>
              <div className="font-bold text-sm">Achievement Unlocked!</div>
              <div className="text-xs">{newAchievement.name}</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.6); }
        }
      `}</style>

      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2" style={{ animation: 'float 3s ease-in-out infinite' }}>🥞</div>
          <h1 className="text-3xl font-bold text-amber-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            Breakfast Tarot
          </h1>
          <p className="text-amber-600 text-sm">Your daily card from the Griddle Deck</p>
        </div>

        {/* Card */}
        <div 
          className="relative mx-auto mb-6 cursor-pointer"
          style={{ 
            width: '280px', 
            height: '400px',
            perspective: '1000px'
          }}
          onClick={handleFlip}
        >
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Card Back */}
            <div
              className="absolute w-full h-full rounded-2xl border-4 border-amber-400 flex flex-col items-center justify-center p-6"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                animation: !isFlipped ? 'glow 2s ease-in-out infinite' : 'none'
              }}
            >
              <div className="text-6xl mb-4">🥞</div>
              <div className="text-white text-xl font-bold text-center" style={{ fontFamily: 'Georgia, serif' }}>
                The Griddle Deck
              </div>
              <div className="text-amber-100 text-sm mt-2">Tap to reveal</div>
              <div className="absolute bottom-4 flex gap-2 text-2xl">
                <span>☕</span>
                <span>🧈</span>
                <span>🍯</span>
              </div>
            </div>

            {/* Card Front */}
            <div
              className={`absolute w-full h-full rounded-2xl border-4 bg-gradient-to-br ${getSuitColor(todaysCard.suit)} flex flex-col items-center justify-center p-6`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="text-xs text-gray-500 mb-2">{getSuitName(todaysCard.suit)}</div>
              <div className="text-6xl mb-4">{todaysCard.emoji}</div>
              <div className="text-xl font-bold text-gray-800 text-center mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {todaysCard.name}
              </div>
              <div className="text-gray-600 text-center text-sm italic leading-relaxed px-2">
                "{todaysCard.meaning}"
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons (only show after flip) */}
        {isFlipped && (
          <div className="space-y-3 mb-6">
            {/* Full meaning toggle */}
            <button
              onClick={() => setShowFullMeaning(!showFullMeaning)}
              className="w-full text-amber-700 text-sm underline hover:text-amber-800"
            >
              {showFullMeaning ? 'Hide full meaning' : 'Read the full meaning'}
            </button>

            {showFullMeaning && (
              <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {todaysCard.fullMeaning}
                </p>
              </div>
            )}

            {/* Share button */}
            <button
              onClick={() => setShowShareModal(true)}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>🥞</span> Share Today's Card
            </button>
          </div>
        )}
<button
              onClick={() => setShowExploreDeck(true)}
              className="w-full bg-white hover:bg-amber-50 text-amber-700 py-3 rounded-full font-bold border border-amber-200 mb-4"
            >
              <span>🎴</span> Explore the Full Deck (78 Cards)
            </button>
            
        {/* Explore the Deck - Navigation Links */}
            <div className="bg-white/60 rounded-xl p-4 mb-6 border border-amber-200">
              <h3 className="text-amber-800 font-bold text-center mb-3">Explore the Griddle Deck</h3>
              <div className="flex flex-col gap-2">
                <a 
                  href="/major-arcana"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2 px-4 rounded-full font-bold text-center text-sm transition-all"
                >
                  ✨ Major Arcana (22 Cards)
                </a>
                <a 
                  href="/minor-arcana"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-2 px-4 rounded-full font-bold text-center text-sm transition-all"
                >
                  🥞 Minor Arcana (56 Cards)
                </a>
                <a 
                  href="/deck-summary"
                  className="w-full bg-white hover:bg-amber-50 text-amber-700 py-2 px-4 rounded-full font-bold text-center text-sm border border-amber-300 transition-all"
                >
                  🎴 Quick Reference (All 78)
                </a>
                <a 
                  href="/spreads"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 px-4 rounded-full font-bold text-center text-sm transition-all"
                >
                  🍽️ Breakfast Spreads (Multi-Card)
                </a>
                <a 
              href="/oracle"
              className="block w-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-amber-900 py-3 px-4 rounded-xl font-semibold transition-all shadow-md text-center"
            >
              🌅 Breakfast Oracle (22 Cards)
            </a>
            <a 
              href="/affirmations"
              className="block w-full bg-gradient-to-r from-amber-200 to-yellow-200 hover:from-amber-300 hover:to-yellow-300 text-amber-800 py-3 px-4 rounded-xl font-semibold transition-all shadow-md text-center border border-amber-300"
            >
              ✨ Breakfast Affirmations (22 Cards)
            </a>
              </div>
            </div>

        {/* Stats */}
        <div className="bg-white/60 rounded-xl p-4 mb-6 border border-amber-200">
          <h3 className="text-amber-800 font-bold text-center mb-3">Your Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-700">{stats.totalPulls}</div>
              <div className="text-xs text-gray-600">Total Pulls</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-700">{stats.currentStreak}</div>
              <div className="text-xs text-gray-600">Current Streak 🔥</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-700">{stats.maxStreak}</div>
              <div className="text-xs text-gray-600">Best Streak</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/60 rounded-xl p-4 mb-6 border border-amber-200">
          <h3 className="text-amber-800 font-bold text-center mb-3">Achievements</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {achievements.map(achievement => {
              const isUnlocked = stats.unlockedAchievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    isUnlocked 
                      ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                      : 'bg-gray-100 text-gray-400 border border-gray-200'
                  }`}
                  title={achievement.description}
                >
                  <span>{achievement.icon}</span>
                  <span className="text-xs">{achievement.name}</span>
                  {isUnlocked && <span className="text-green-500">✓</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* About the deck */}
        <div className="bg-amber-100/50 rounded-xl p-4 border border-amber-200 text-center">
          <h3 className="text-amber-800 font-bold mb-2">The Griddle Deck</h3>
          <p className="text-sm text-amber-700 mb-3">
            78 cards reimagined for the breakfast table
          </p>
          <div className="flex justify-center gap-4 text-xs text-amber-600">
            <span>🥞 Pancakes = Earth</span>
            <span>☕ Coffee = Water</span>
          </div>
          <div className="flex justify-center gap-4 text-xs text-amber-600 mt-1">
            <span>🧈 Butter = Fire</span>
            <span>🍯 Syrup = Air</span>
          </div>
        </div>

      
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-amber-800 mb-4 text-center">
              Share Your Card ☕
            </h2>
            
            <div className="bg-amber-50 rounded-xl p-4 mb-4 text-sm font-mono">
              <div className="whitespace-pre-wrap text-gray-700">
{`☕ Breakfast Tarot - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}

${todaysCard.emoji}
${todaysCard.name}

"${todaysCard.meaning}"

Pull your daily card at breakfasttarot.com 🥞`}
              </div>
            </div>

            <button
              onClick={handleShare}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-full font-bold shadow-lg transition-all"
            >
              {shareCopied ? '✓ Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
        </div>
      )}
      {/* Footer */}
        <div className="text-center py-6 text-xs text-amber-700 mt-8">
          <div>
            © {new Date().getFullYear()} Breakfast Tarot. All rights reserved.
            {' | '}
            <a href="/privacy" className="hover:text-amber-600 underline">Privacy Policy</a>
            {' | '}
            <a href="/terms" className="hover:text-amber-600 underline">Terms of Service</a>
          </div>
          <div className="mt-2 text-amber-500">
            Part of the Breakfast Tarot Family 🥞
          </div>
        </div>
    </div>
  );
}
