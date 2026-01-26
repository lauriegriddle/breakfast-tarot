"use client";
import React, { useState } from 'react';

// ============================================
// ALL 78 CARDS DATA
// ============================================

const allCards = [
  // Major Arcana (0-21)
  { id: 0, name: 'The First Timer', emoji: '🎒☕', type: 'major', meaning: 'New beginnings await — just walk through the door.', fullMeaning: 'You\'re standing at the threshold of something new. Like a first-time visitor to a beloved café, you don\'t know the menu yet, but that\'s part of the adventure. Trust the journey.' },
  { id: 1, name: 'The Short Order Cook', emoji: '🍳✨', type: 'major', meaning: 'You have everything you need to make magic.', fullMeaning: 'All the ingredients are in front of you. The Short Order Cook doesn\'t wait for perfect conditions — they work with what\'s there and create something wonderful. Your skills are ready.' },
  { id: 2, name: 'The Recipe Keeper', emoji: '📖🤫', type: 'major', meaning: 'Trust what you know but haven\'t spoken yet.', fullMeaning: 'Some knowledge lives in the bones, passed down through generations or learned through quiet observation. You know more than you think. Listen to that inner wisdom.' },
  { id: 3, name: 'The Brunch Hostess', emoji: '🌸🥂', type: 'major', meaning: 'Abundance is flowing — receive it gracefully.', fullMeaning: 'The Brunch Hostess creates spaces where everyone feels welcome and fed. Abundance isn\'t just about having — it\'s about receiving, sharing, and celebrating. Let good things in.' },
  { id: 4, name: 'The Café Owner', emoji: '🏪👔', type: 'major', meaning: 'Build something that lasts.', fullMeaning: 'Structure, responsibility, and vision. The Café Owner thinks long-term, makes hard decisions, and creates something that serves the community. What are you building?' },
  { id: 5, name: 'The Regular', emoji: '☕📰', type: 'major', meaning: 'Sometimes the old ways are the right ways.', fullMeaning: 'There\'s wisdom in tradition, comfort in routine, and value in showing up consistently. The Regular knows their order by heart because they\'ve learned what truly nourishes them.' },
  { id: 6, name: 'The Breakfast Date', emoji: '💕🍽️', type: 'major', meaning: 'Connection calls — who are you sharing the table with?', fullMeaning: 'Breaking bread together is intimate. This card asks about your partnerships, your choices in love and collaboration. Who deserves a seat at your table?' },
  { id: 7, name: 'The Food Truck', emoji: '🚚💨', type: 'major', meaning: 'Keep moving forward — momentum is your friend.', fullMeaning: 'The Food Truck doesn\'t wait for customers to find it — it goes where it\'s needed. You have the drive and direction. Trust your ability to navigate and keep rolling.' },
  { id: 8, name: 'The Patient Flip', emoji: '🥞🧘', type: 'major', meaning: 'The perfect flip can\'t be rushed.', fullMeaning: 'Strength isn\'t always about force — sometimes it\'s about timing, patience, and trust. Wait for the bubbles. The pancake knows when it\'s ready.' },
  { id: 9, name: 'The Early Bird', emoji: '🌅🧥', type: 'major', meaning: 'Solitude brings clarity.', fullMeaning: 'Before the café fills with noise, the Early Bird sits alone with their thoughts. Sometimes you need to step back from the crowd to hear your own voice.' },
  { id: 10, name: 'The Specials Board', emoji: '🎡📋', type: 'major', meaning: 'The menu changes — roll with it.', fullMeaning: 'Life serves different specials every day. What was available yesterday might not be today, and tomorrow brings new options. Stay flexible and trust the rotation.' },
  { id: 11, name: 'The Fair Split', emoji: '⚖️🧾', type: 'major', meaning: 'Balance the books — what\'s fair is fair.', fullMeaning: 'When the check comes, The Fair Split ensures everyone pays their share — no more, no less. This is about accountability, honesty, and making things right.' },
  { id: 12, name: 'The Slow Brew', emoji: '⏳☕', type: 'major', meaning: 'Let things develop — don\'t rush the drip.', fullMeaning: 'Pour-over coffee can\'t be hurried. Some processes need time to extract the full flavor. Surrender to the pause. What\'s brewing will be worth the wait.' },
  { id: 13, name: 'Last Call', emoji: '🌙🚪', type: 'major', meaning: 'One chapter ends so another can begin.', fullMeaning: 'The café is closing, but that doesn\'t mean the end of all cafés. Last Call is a transition, not a termination. Clear your table to make room for tomorrow\'s breakfast.' },
  { id: 14, name: 'The Perfect Blend', emoji: '☕🥛', type: 'major', meaning: 'Find your perfect mix.', fullMeaning: 'Not too much of this, not too little of that. The Perfect Blend is about moderation, integration, and finding the combination that works for YOU.' },
  { id: 15, name: 'The Bottomless Cup', emoji: '☕⛓️', type: 'major', meaning: 'What habit has you trapped in the refill cycle?', fullMeaning: 'Free refills sound great until you realize you\'re on your eighth cup and can\'t leave. What pattern keeps you stuck? The Bottomless Cup reveals our chains.' },
  { id: 16, name: 'The Smoke Alarm', emoji: '🚨💨', type: 'major', meaning: 'Sometimes things burn to teach you something.', fullMeaning: 'The toast is on fire and everyone\'s running around. Chaos! But after the smoke clears, you\'ll see what wasn\'t working. Destruction precedes renovation.' },
  { id: 17, name: 'The Tip Jar', emoji: '⭐🫙', type: 'major', meaning: 'Small kindnesses ripple outward.', fullMeaning: 'Every dollar in the Tip Jar represents someone who received good service and wanted to give back. Hope, generosity, and trust in abundance — pay it forward.' },
  { id: 18, name: 'The Night Shift', emoji: '🌙😴', type: 'major', meaning: 'Trust your gut through the fog.', fullMeaning: 'Working the night shift means navigating in low light when things feel surreal. Not everything is as it seems. Trust your instincts over your anxious thoughts.' },
  { id: 19, name: 'The Sunny-Side Up', emoji: '☀️🍳', type: 'major', meaning: 'Everything is coming together beautifully.', fullMeaning: 'The yolk didn\'t break, the edges are crispy, and the morning light is streaming in. This is the good stuff. Joy, success, and warmth are yours to savor.' },
  { id: 20, name: 'The Review', emoji: '⭐⭐⭐⭐⭐', type: 'major', meaning: 'What did you learn from this experience?', fullMeaning: 'After the meal comes the reflection. The Review asks you to assess your journey honestly. What would you rate it? What feedback do you have for yourself?' },
  { id: 21, name: 'The Full Breakfast', emoji: '🌍🍽️', type: 'major', meaning: 'The journey is complete — savor every bite.', fullMeaning: 'Everything on the plate, nothing left out. The Full Breakfast is wholeness, completion, and celebration of the entire journey. You made it. Enjoy.' },
  
  // Suit of Pancakes (Earth/Pentacles)
  { id: 22, name: 'Ace of Pancakes', emoji: '🥞✨', type: 'pancakes', meaning: 'A new opportunity for abundance is being served.', fullMeaning: 'A fresh stack arrives at your table. This is the beginning of material prosperity — a job offer, a financial opportunity, or a chance to build something real.' },
  { id: 23, name: 'Two of Pancakes', emoji: '🥞⚖️🥞', type: 'pancakes', meaning: 'Balance your priorities — you can juggle this.', fullMeaning: 'Two stacks to manage, both important. You have the skill to keep multiple things going. Stay flexible and keep your eye on both plates.' },
  { id: 24, name: 'Three of Pancakes', emoji: '🥞👨‍🍳👩‍🍳', type: 'pancakes', meaning: 'Teamwork makes the dream stack.', fullMeaning: 'The kitchen works best when everyone contributes their skills. Collaboration, mentorship, and shared effort lead to something none could create alone.' },
  { id: 25, name: 'Four of Pancakes', emoji: '🥞🤲', type: 'pancakes', meaning: 'Are you hoarding when you could be sharing?', fullMeaning: 'Holding tight to your stack out of fear. Security matters, but not at the cost of generosity or growth. What are you protecting that wants to flow?' },
  { id: 26, name: 'Five of Pancakes', emoji: '🥞❄️😔', type: 'pancakes', meaning: 'Hard times — but help is closer than you think.', fullMeaning: 'Out in the cold, feeling left out of the warm café. But look again — there\'s a light on, a door open. Scarcity feels real but may not be the whole picture.' },
  { id: 27, name: 'Six of Pancakes', emoji: '🥞🎁', type: 'pancakes', meaning: 'What goes around comes around.', fullMeaning: 'Generosity in action — giving or receiving help. The Six of Pancakes reminds us that resources flow better when shared. Be gracious on either side of the exchange.' },
  { id: 28, name: 'Seven of Pancakes', emoji: '🥞🌱⏳', type: 'pancakes', meaning: 'The batter is rising — be patient.', fullMeaning: 'You\'ve done the work, now wait for results. Like watching batter rise, you can\'t rush this part. Trust that your efforts will yield a harvest.' },
  { id: 29, name: 'Eight of Pancakes', emoji: '🥞📚', type: 'pancakes', meaning: 'Master your craft — every flip teaches you something.', fullMeaning: 'Dedicated practice, skill-building, and attention to detail. The Eight of Pancakes honors the work of getting better, one pancake at a time.' },
  { id: 30, name: 'Nine of Pancakes', emoji: '🥞🏡😌', type: 'pancakes', meaning: 'You\'ve built something comfortable — enjoy it.', fullMeaning: 'A cozy kitchen, a full pantry, peace of mind. You\'ve worked hard and created security. Take a moment to appreciate what you\'ve achieved.' },
  { id: 31, name: 'Ten of Pancakes', emoji: '🥞👨‍👩‍👧‍👦🏠', type: 'pancakes', meaning: 'Legacy and abundance shared across generations.', fullMeaning: 'The family recipe passed down, the table surrounded by loved ones. Wealth that lasts because it\'s shared. What tradition are you building?' },
  { id: 32, name: 'Page of Pancakes', emoji: '🥞📬', type: 'pancakes', meaning: 'A message about money or opportunity is coming.', fullMeaning: 'News about practical matters — a job, a financial development, an educational opportunity. Stay open to learning about material success.' },
  { id: 33, name: 'Knight of Pancakes', emoji: '🥞🐎', type: 'pancakes', meaning: 'Slow and steady wins the breakfast rush.', fullMeaning: 'Methodical, reliable, and persistent. The Knight of Pancakes doesn\'t rush — they show up every day and do the work. Trust the process.' },
  { id: 34, name: 'Queen of Pancakes', emoji: '🥞👑🌿', type: 'pancakes', meaning: 'Create an environment where abundance grows.', fullMeaning: 'The Queen of Pancakes nurtures prosperity. She creates the conditions for success — in her home, her finances, her community. Abundance is her natural habitat.' },
  { id: 35, name: 'King of Pancakes', emoji: '🥞👑💼', type: 'pancakes', meaning: 'Build your empire one pancake at a time.', fullMeaning: 'Business savvy, material success, and responsible leadership. The King of Pancakes has built something substantial and manages it wisely.' },
  
  // Suit of Coffee (Water/Cups)
  { id: 36, name: 'Ace of Coffee', emoji: '☕✨', type: 'coffee', meaning: 'A new emotional beginning is brewing.', fullMeaning: 'A fresh cup, a fresh start for the heart. New love, new feelings, new intuitive downloads. Something is awakening emotionally.' },
  { id: 37, name: 'Two of Coffee', emoji: '☕💕☕', type: 'coffee', meaning: 'Connection across the table.', fullMeaning: 'Two cups facing each other — partnership, mutual attraction, and harmony. Whether romantic or platonic, there\'s a real connection here.' },
  { id: 38, name: 'Three of Coffee', emoji: '☕🎉👯', type: 'coffee', meaning: 'Celebrate with your people!', fullMeaning: 'Friends gathered, cups raised, joy shared. The Three of Coffee is celebration, community, and emotional abundance with others.' },
  { id: 39, name: 'Four of Coffee', emoji: '☕😒', type: 'coffee', meaning: 'Are you ignoring a gift right in front of you?', fullMeaning: 'Arms crossed, looking away while a fresh cup waits. Apathy, boredom, or taking blessings for granted. What are you not seeing?' },
  { id: 40, name: 'Five of Coffee', emoji: '☕😢☕☕', type: 'coffee', meaning: 'Don\'t mourn the spilled cups — see what remains.', fullMeaning: 'Some cups have fallen, and the grief is real. But look — not all is lost. The Five of Coffee asks you to acknowledge loss while seeing what\'s still standing.' },
  { id: 41, name: 'Six of Coffee', emoji: '☕👶🏠', type: 'coffee', meaning: 'Sweet memories of simpler times.', fullMeaning: 'Nostalgia, childhood comfort, innocent pleasures. The Six of Coffee connects us to our past, our roots, and the simple joys we sometimes forget.' },
  { id: 42, name: 'Seven of Coffee', emoji: '☕🌈☁️', type: 'coffee', meaning: 'So many choices — not all of them are real.', fullMeaning: 'A display of beautiful cups, each promising something wonderful. But which are real and which are fantasy? Discernment needed.' },
  { id: 43, name: 'Eight of Coffee', emoji: '☕🚶‍♀️🌙', type: 'coffee', meaning: 'Sometimes you have to leave a full cup behind.', fullMeaning: 'Walking away from something that still has value, but no longer serves your journey. It\'s not about the coffee — it\'s about where you need to go.' },
  { id: 44, name: 'Nine of Coffee', emoji: '☕😊🙏', type: 'coffee', meaning: 'Yes, it really is as good as you hoped.', fullMeaning: 'The wish card. Satisfaction, contentment, and getting what you wanted emotionally. Allow yourself to receive this happiness fully.' },
  { id: 45, name: 'Ten of Coffee', emoji: '☕🌈👨‍👩‍👧‍👦', type: 'coffee', meaning: 'Emotional fulfillment with your whole crew.', fullMeaning: 'The whole family, the whole friend group, the whole heart — all full. This is emotional completion and harmony with loved ones.' },
  { id: 46, name: 'Page of Coffee', emoji: '☕💌', type: 'coffee', meaning: 'A message of the heart is on its way.', fullMeaning: 'News about love, creativity, or emotional matters. Stay open and sensitive. Something wants to reach your heart.' },
  { id: 47, name: 'Knight of Coffee', emoji: '☕🦢', type: 'coffee', meaning: 'Follow your heart — even into the unknown.', fullMeaning: 'The romantic, the dreamer, the one who leads with feeling. The Knight of Coffee invites you to pursue what moves you emotionally.' },
  { id: 48, name: 'Queen of Coffee', emoji: '☕👑💙', type: 'coffee', meaning: 'Deep emotional wisdom flows through you.', fullMeaning: 'Intuitive, compassionate, emotionally intelligent. The Queen of Coffee feels deeply and uses that depth to nurture others.' },
  { id: 49, name: 'King of Coffee', emoji: '☕👑🎭', type: 'coffee', meaning: 'Master of emotional balance.', fullMeaning: 'He feels everything but isn\'t ruled by feelings. The King of Coffee brings emotional maturity — wisdom from having navigated the full range of human experience.' },
  
  // Suit of Butter (Fire/Wands)
  { id: 50, name: 'Ace of Butter', emoji: '🧈✨', type: 'butter', meaning: 'A spark of inspiration has landed.', fullMeaning: 'Fresh creative energy, a new passion project, the beginning of something exciting. The Ace of Butter melts onto your griddle with pure potential.' },
  { id: 51, name: 'Two of Butter', emoji: '🧈🌍', type: 'butter', meaning: 'You\'re planning something big — keep dreaming.', fullMeaning: 'Standing at the edge of possibility, surveying what could be built. The Two of Butter is about vision and deciding where to spread your energy.' },
  { id: 52, name: 'Three of Butter', emoji: '🧈🚢', type: 'butter', meaning: 'Your efforts are shipping out — watch for returns.', fullMeaning: 'What you\'ve created is going into the world. Expansion, growth, and waiting to see how your ventures land. Progress is real.' },
  { id: 53, name: 'Four of Butter', emoji: '🧈🎊🏠', type: 'butter', meaning: 'Celebrate how far you\'ve come.', fullMeaning: 'A homecoming, a celebration of achievement, stability in your passionate pursuits. The Four of Butter says: pause and honor this milestone.' },
  { id: 54, name: 'Five of Butter', emoji: '🧈😤👊', type: 'butter', meaning: 'Healthy competition sharpens everyone.', fullMeaning: 'Conflict that leads to growth, creative tension, fighting for what you believe in. The Five of Butter isn\'t always comfortable but it builds strength.' },
  { id: 55, name: 'Six of Butter', emoji: '🧈🏆👏', type: 'butter', meaning: 'Victory! Take your well-earned bow.', fullMeaning: 'Public recognition, success, and celebration of your accomplishments. You did the thing and people see it. Accept the applause.' },
  { id: 56, name: 'Seven of Butter', emoji: '🧈🛡️', type: 'butter', meaning: 'Hold your ground — don\'t let them take your griddle.', fullMeaning: 'Defending your position, protecting what you\'ve built, standing firm against opposition. You have the high ground — use it.' },
  { id: 57, name: 'Eight of Butter', emoji: '🧈💨🎯', type: 'butter', meaning: 'Everything is moving fast — stay focused.', fullMeaning: 'Rapid progress, things happening quickly, momentum building. The Eight of Butter says hold on and direct this energy wisely.' },
  { id: 58, name: 'Nine of Butter', emoji: '🧈😰🩹', type: 'butter', meaning: 'You\'re tired but not done — one more push.', fullMeaning: 'Battle-worn but still standing. The Nine of Butter acknowledges your exhaustion while reminding you that you have reserves. Almost there.' },
  { id: 59, name: 'Ten of Butter', emoji: '🧈😫📦', type: 'butter', meaning: 'You\'re carrying too much — put something down.', fullMeaning: 'Overburdened with responsibilities, projects, and commitments. The Ten of Butter warns against burning out. Delegate or drop something.' },
  { id: 60, name: 'Page of Butter', emoji: '🧈📣', type: 'butter', meaning: 'An exciting message about a new venture is coming.', fullMeaning: 'News about creative projects, passionate pursuits, or new beginnings. The Page of Butter brings enthusiasm and fresh energy.' },
  { id: 61, name: 'Knight of Butter', emoji: '🧈🔥🐎', type: 'butter', meaning: 'Charge forward with passion!', fullMeaning: 'Bold, fearless, and full of fire. The Knight of Butter doesn\'t hesitate — they pursue their desires with full commitment. Exciting but watch for recklessness.' },
  { id: 62, name: 'Queen of Butter', emoji: '🧈👑🔥', type: 'butter', meaning: 'Your confidence inspires everyone around you.', fullMeaning: 'Magnetic, warm, and creatively powerful. The Queen of Butter owns her passions and draws others into her vision through sheer radiance.' },
  { id: 63, name: 'King of Butter', emoji: '🧈👑🦁', type: 'butter', meaning: 'Lead with vision and courage.', fullMeaning: 'The leader who inspires through bold action and clear vision. The King of Butter builds empires through charisma, creativity, and fearless direction.' },
  
  // Suit of Syrup (Air/Swords)
  { id: 64, name: 'Ace of Syrup', emoji: '🍯✨', type: 'syrup', meaning: 'A breakthrough thought — clarity at last.', fullMeaning: 'Mental breakthrough, a new idea, truth cutting through confusion. The Ace of Syrup brings intellectual clarity and the power of a clear mind.' },
  { id: 65, name: 'Two of Syrup', emoji: '🍯⚔️', type: 'syrup', meaning: 'You\'re avoiding a decision — but you can\'t forever.', fullMeaning: 'Blindfolded, arms crossed, refusing to see or choose. The Two of Syrup points to the stalemate you\'re creating. The decision won\'t make itself.' },
  { id: 66, name: 'Three of Syrup', emoji: '🍯💔😢', type: 'syrup', meaning: 'This heartbreak is teaching you something important.', fullMeaning: 'Pain, grief, and sorrow that cuts deep. The Three of Syrup doesn\'t sugarcoat: this hurts. But within the pain is a lesson your heart needs.' },
  { id: 67, name: 'Four of Syrup', emoji: '🍯😴🛏️', type: 'syrup', meaning: 'Rest your mind — it\'s been working too hard.', fullMeaning: 'Mental exhaustion requiring retreat and recovery. The Four of Syrup prescribes rest — not giving up, just restoring your clarity.' },
  { id: 68, name: 'Five of Syrup', emoji: '🍯😈🏆', type: 'syrup', meaning: 'Someone won unfairly — don\'t sink to their level.', fullMeaning: 'Defeat through dishonesty or cruelty. The Five of Syrup acknowledges the sting of unfair loss. Your integrity matters more than this battle.' },
  { id: 69, name: 'Six of Syrup', emoji: '🍯🚣‍♀️', type: 'syrup', meaning: 'You\'re moving toward calmer waters.', fullMeaning: 'Transition from rough seas to peace. The Six of Syrup shows recovery, moving away from conflict, and finding mental relief.' },
  { id: 70, name: 'Seven of Syrup', emoji: '🍯🦊', type: 'syrup', meaning: 'Be clever — not everyone needs to know your recipe.', fullMeaning: 'Strategy, stealth, and playing your cards close. The Seven of Syrup isn\'t about dishonesty — it\'s about wisdom in what you reveal and when.' },
  { id: 71, name: 'Eight of Syrup', emoji: '🍯🕸️😵', type: 'syrup', meaning: 'You\'ve thought yourself into a trap — but the exit exists.', fullMeaning: 'Mental prison of your own making. Anxiety, overthinking, and feeling stuck. The Eight of Syrup reminds you: the bonds are looser than they appear.' },
  { id: 72, name: 'Nine of Syrup', emoji: '🍯😰🌙', type: 'syrup', meaning: 'The 3 AM worries aren\'t as real as they feel.', fullMeaning: 'Anxiety, nightmares, and worst-case-scenario thinking. The Nine of Syrup acknowledges the fear while reminding you: most of it won\'t happen.' },
  { id: 73, name: 'Ten of Syrup', emoji: '🍯🔚🌅', type: 'syrup', meaning: 'The worst is over — dawn is coming.', fullMeaning: 'Rock bottom has a foundation. The Ten of Syrup marks the end of a painful mental cycle. You survived the darkest hour. Now: healing.' },
  { id: 74, name: 'Page of Syrup', emoji: '🍯💬', type: 'syrup', meaning: 'Speak your truth — even if your voice shakes.', fullMeaning: 'New ideas wanting expression, messages that need delivering, thoughts becoming words. The Page of Syrup encourages honest communication.' },
  { id: 75, name: 'Knight of Syrup', emoji: '🍯⚔️💨', type: 'syrup', meaning: 'Cut through the nonsense with sharp clarity.', fullMeaning: 'Fast-moving, sharp-minded, and direct. The Knight of Syrup charges in with logic and truth — sometimes too fast, but always honest.' },
  { id: 76, name: 'Queen of Syrup', emoji: '🍯👑🧠', type: 'syrup', meaning: 'Your clear perception sees what others miss.', fullMeaning: 'Brilliant, perceptive, and unflinchingly honest. The Queen of Syrup cuts through illusion with her intelligence. She sees the truth.' },
  { id: 77, name: 'King of Syrup', emoji: '🍯👑⚖️', type: 'syrup', meaning: 'Lead with truth and fair judgment.', fullMeaning: 'The judge, the intellectual authority, the clear-headed leader. The King of Syrup makes decisions based on truth and fairness, not emotion.' },
];

// ============================================
// SPREADS DATA
// ============================================

const spreads = [
  {
    id: 'cream-sugar',
    name: 'Cream & Sugar',
    emoji: '☕',
    cardCount: 2,
    description: 'A quick two-card pull for simple either/or questions. Like choosing how you take your coffee — both options have merit, but which feels right?',
    positions: ['Option A', 'Option B'],
    bestFor: 'Yes/no questions, choosing between two paths, quick daily guidance',
    color: 'from-amber-100 to-yellow-100',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-800',
  },
  {
    id: 'short-stack',
    name: 'Short Stack',
    emoji: '🥞',
    cardCount: 3,
    description: 'The classic three-card spread, breakfast style. Three pancakes stacked with meaning — where you\'ve been, where you are, and where you\'re heading.',
    positions: ['Past', 'Present', 'Future'],
    bestFor: 'Understanding a situation\'s timeline, seeing how things develop, general guidance',
    color: 'from-amber-200 to-orange-100',
    borderColor: 'border-amber-400',
    textColor: 'text-amber-900',
  },
  {
    id: 'waffle',
    name: 'The Waffle',
    emoji: '🧇',
    cardCount: 4,
    description: 'Four squares, four perspectives. When you\'re stuck in the grid of indecision, The Waffle helps you see all sides of a crossroads moment.',
    positions: ['Choice 1', 'Choice 2', 'Hidden Pro', 'Hidden Con'],
    bestFor: 'Major decisions, crossroads moments, weighing options thoroughly',
    color: 'from-yellow-100 to-amber-100',
    borderColor: 'border-yellow-400',
    textColor: 'text-yellow-800',
  },
  {
    id: 'full-breakfast',
    name: 'The Full Breakfast',
    emoji: '🍳',
    cardCount: 5,
    description: 'The complete meal — eggs, toast, bacon, pancakes, and coffee. This comprehensive spread leaves nothing on the table. For when you need the whole picture.',
    positions: ['The Situation', 'The Challenge', 'The Advice', 'The Outcome', 'The Hidden Factor'],
    bestFor: 'Complex situations, deep dives, when you need complete clarity',
    color: 'from-orange-100 to-red-50',
    borderColor: 'border-orange-400',
    textColor: 'text-orange-800',
  },
];

// ============================================
// BREAKFAST QUESTIONS
// ============================================

const breakfastQuestions = [
  { emoji: '☀️', text: 'What should I focus on today?' },
  { emoji: '🚧', text: 'What\'s blocking me right now?' },
  { emoji: '🎒', text: 'What do I need to let go of?' },
  { emoji: '👀', text: 'What opportunity am I missing?' },
  { emoji: '💪', text: 'How can I show up better for myself?' },
  { emoji: '💕', text: 'What does my heart need to hear?' },
  { emoji: '🌱', text: 'Where is growth trying to happen?' },
  { emoji: '⚖️', text: 'What needs more balance in my life?' },
  { emoji: '🔮', text: 'What energy is coming my way?' },
  { emoji: '🗝️', text: 'What\'s the key to my current situation?' },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function SpreadsPage() {
  const [step, setStep] = useState<'choose-spread' | 'choose-question' | 'pulling' | 'reading'>('choose-spread');
  const [selectedSpread, setSelectedSpread] = useState<typeof spreads[0] | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [pulledCards, setPulledCards] = useState<typeof allCards>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  // Shuffle and pull cards
  const pullCards = (count: number) => {
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    const pulled = shuffled.slice(0, count);
    setPulledCards(pulled);
    setRevealedCards(new Array(count).fill(false));
    setStep('pulling');
  };

  // Reveal a card
  const revealCard = (index: number) => {
    const newRevealed = [...revealedCards];
    newRevealed[index] = true;
    setRevealedCards(newRevealed);
  };

  // Reveal all cards
  const revealAllCards = () => {
    setRevealedCards(new Array(pulledCards.length).fill(true));
  };

  // Reset everything
  const startOver = () => {
    setStep('choose-spread');
    setSelectedSpread(null);
    setSelectedQuestion('');
    setCustomQuestion('');
    setPulledCards([]);
    setRevealedCards([]);
    setSelectedCardIndex(null);
  };

  // Check if all cards are revealed
  const allRevealed = revealedCards.every(r => r);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      {/* Background decorations */}
      <div className="fixed top-4 left-4 text-4xl opacity-10">🥞</div>
      <div className="fixed top-4 right-4 text-4xl opacity-10">☕</div>
      <div className="fixed bottom-4 left-4 text-4xl opacity-10">🧇</div>
      <div className="fixed bottom-4 right-4 text-4xl opacity-10">🍳</div>

      <div className="max-w-4xl mx-auto">
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
            Breakfast Spreads
          </h1>
          <p className="text-amber-600 text-lg mb-2">Multi-Card Readings from the Griddle Deck</p>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose your spread, ask your question, and pull your cards. 
            The breakfast table has answers for you.
          </p>
        </div>

        {/* Step 1: Choose a Spread */}
        {step === 'choose-spread' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-800 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              🍽️ Choose Your Spread
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {spreads.map((spread) => (
                <button
                  key={spread.id}
                  onClick={() => {
                    setSelectedSpread(spread);
                    setStep('choose-question');
                  }}
                  className={`bg-gradient-to-br ${spread.color} rounded-2xl p-6 border-2 ${spread.borderColor} text-left hover:scale-[1.02] transition-all shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{spread.emoji}</span>
                    <div>
                      <h3 className={`text-xl font-bold ${spread.textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
                        {spread.name}
                      </h3>
                      <p className="text-sm text-gray-600">{spread.cardCount} cards</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{spread.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {spread.positions.map((pos, i) => (
                      <span key={i} className="bg-white/50 px-2 py-1 rounded-full text-xs text-gray-600">
                        {pos}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 italic">Best for: {spread.bestFor}</p>
                </button>
              ))}
            </div>

            {/* Quick Links */}
            <div className="text-center pt-6 border-t border-amber-200">
              <p className="text-sm text-gray-500 mb-3">Just want a single card?</p>
              <a 
                href="/"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all"
              >
                🎴 Daily Card Pull
              </a>
            </div>
          </div>
        )}

        {/* Step 2: Choose a Question */}
        {step === 'choose-question' && selectedSpread && (
          <div className="space-y-6">
            {/* Selected spread summary */}
            <div className={`bg-gradient-to-br ${selectedSpread.color} rounded-2xl p-4 border-2 ${selectedSpread.borderColor} text-center`}>
              <span className="text-3xl">{selectedSpread.emoji}</span>
              <h2 className={`text-xl font-bold ${selectedSpread.textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
                {selectedSpread.name}
              </h2>
              <p className="text-sm text-gray-600">{selectedSpread.cardCount} cards: {selectedSpread.positions.join(' → ')}</p>
            </div>

            <h2 className="text-2xl font-bold text-amber-800 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              ❓ What's Your Question?
            </h2>

            {/* Preset questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakfastQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedQuestion(q.text);
                    pullCards(selectedSpread.cardCount);
                  }}
                  className={`bg-white hover:bg-amber-50 rounded-xl p-4 border-2 border-amber-200 text-left transition-all flex items-center gap-3 ${
                    selectedQuestion === q.text ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  <span className="text-2xl">{q.emoji}</span>
                  <span className="text-gray-700">{q.text}</span>
                </button>
              ))}
            </div>

            {/* Custom question */}
            <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
              <label className="block text-sm font-bold text-amber-800 mb-2">
                ✍️ Or ask your own question:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  onClick={() => {
                    if (customQuestion.trim()) {
                      setSelectedQuestion(customQuestion);
                      pullCards(selectedSpread.cardCount);
                    }
                  }}
                  disabled={!customQuestion.trim()}
                  className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-bold transition-all"
                >
                  Ask
                </button>
              </div>
            </div>

            {/* Back button */}
            <div className="text-center">
              <button
                onClick={() => setStep('choose-spread')}
                className="text-amber-600 hover:text-amber-700 underline"
              >
                ← Choose a different spread
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pull and Reveal Cards */}
        {step === 'pulling' && selectedSpread && (
          <div className="space-y-6">
            {/* Question display */}
            <div className="bg-white/70 rounded-xl p-4 border border-amber-200 text-center">
              <p className="text-sm text-gray-500">Your question:</p>
              <p className="text-lg font-medium text-amber-800 italic">"{selectedQuestion}"</p>
            </div>

            {/* Spread name */}
            <div className="text-center">
              <span className="text-4xl">{selectedSpread.emoji}</span>
              <h2 className={`text-2xl font-bold ${selectedSpread.textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
                {selectedSpread.name}
              </h2>
            </div>

            {/* Cards */}
            <div className={`grid gap-4 ${
              selectedSpread.cardCount === 2 ? 'grid-cols-2' :
              selectedSpread.cardCount === 3 ? 'grid-cols-3' :
              selectedSpread.cardCount === 4 ? 'grid-cols-2 md:grid-cols-4' :
              'grid-cols-2 md:grid-cols-5'
            }`}>
              {pulledCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Position label */}
                  <p className="text-xs font-bold text-amber-700 mb-2 text-center">
                    {selectedSpread.positions[index]}
                  </p>
                  
                  {/* Card */}
                  <button
                    onClick={() => {
                      if (!revealedCards[index]) {
                        revealCard(index);
                      } else {
                        setSelectedCardIndex(selectedCardIndex === index ? null : index);
                      }
                    }}
                    className={`w-full aspect-[2/3] rounded-xl transition-all duration-500 ${
                      revealedCards[index]
                        ? 'bg-gradient-to-br from-amber-100 to-yellow-50 border-2 border-amber-400 shadow-lg'
                        : 'bg-gradient-to-br from-amber-500 to-orange-500 border-2 border-amber-600 hover:scale-105 cursor-pointer'
                    }`}
                  >
                    {revealedCards[index] ? (
                      <div className="p-2 h-full flex flex-col items-center justify-center text-center">
                        <span className="text-2xl md:text-3xl mb-1">{card.emoji}</span>
                        <p className="text-xs md:text-sm font-bold text-amber-800 leading-tight">{card.name}</p>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-white">
                        <span className="text-3xl mb-2">🥞</span>
                        <p className="text-xs">Tap to reveal</p>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Reveal all button */}
            {!allRevealed && (
              <div className="text-center">
                <button
                  onClick={revealAllCards}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all"
                >
                  ✨ Reveal All Cards
                </button>
              </div>
            )}

            {/* Selected card detail */}
            {selectedCardIndex !== null && revealedCards[selectedCardIndex] && (
              <div className="bg-white rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{pulledCards[selectedCardIndex].emoji}</span>
                  <div>
                    <p className="text-xs text-amber-600 font-bold">{selectedSpread.positions[selectedCardIndex]}</p>
                    <h3 className="text-xl font-bold text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
                      {pulledCards[selectedCardIndex].name}
                    </h3>
                  </div>
                </div>
                <p className="text-amber-700 italic mb-3">{pulledCards[selectedCardIndex].meaning}</p>
                <p className="text-gray-700">{pulledCards[selectedCardIndex].fullMeaning}</p>
              </div>
            )}

            {/* Reading complete */}
            {allRevealed && (
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 text-center">
                <p className="text-2xl mb-2">🍳✨</p>
                <h3 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Your Reading is Served!
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tap any card to read its full meaning in the {selectedSpread.positions[selectedCardIndex ?? 0] || 'selected'} position.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={startOver}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all"
                  >
                    🔄 New Reading
                  </button>
                  <a
                    href="/"
                    className="bg-white hover:bg-amber-50 text-amber-700 px-6 py-2 rounded-full font-bold border border-amber-300 transition-all"
                  >
                    🏠 Back to Daily Card
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-8 text-xs text-amber-600 mt-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <a href="/major-arcana" className="hover:text-amber-500 underline">Major Arcana</a>
            <span>•</span>
            <a href="/minor-arcana" className="hover:text-amber-500 underline">Minor Arcana</a>
            <span>•</span>
            <a href="/deck-summary" className="hover:text-amber-500 underline">Quick Reference</a>
          </div>
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
