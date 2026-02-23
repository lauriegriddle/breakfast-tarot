"use client";
import React, { useState } from 'react';

// Color System
const suitColors = {
  slumber: {
    name: "Deep Purple",
    bg: "from-purple-900 via-purple-800 to-purple-700",
    light: "from-purple-100 to-purple-50",
    border: "border-purple-400",
    text: "text-purple-800",
    accent: "text-purple-600"
  },
  play: {
    name: "Beautiful Orange",
    bg: "from-orange-500 via-orange-400 to-amber-400",
    light: "from-orange-100 to-amber-50",
    border: "border-orange-400",
    text: "text-orange-800",
    accent: "text-orange-600"
  },
  joy: {
    name: "Luscious Green",
    bg: "from-green-600 via-green-500 to-emerald-400",
    light: "from-green-100 to-emerald-50",
    border: "border-green-400",
    text: "text-green-800",
    accent: "text-green-600"
  },
  loveliness: {
    name: "Magnificent Magenta",
    bg: "from-pink-600 via-fuchsia-500 to-pink-400",
    light: "from-pink-100 to-fuchsia-50",
    border: "border-pink-400",
    text: "text-pink-800",
    accent: "text-pink-600"
  },
  major: {
    name: "Gradient",
    bg: "from-purple-600 via-orange-500 via-green-500 to-pink-500",
    light: "from-purple-50 via-orange-50 via-green-50 to-pink-50",
    border: "border-amber-400",
    text: "text-amber-800",
    accent: "text-amber-600"
  }
};

// Complete 78-Card Deck
const creativityCoachDeck = [
  // ============ SUIT OF SLUMBER (14 cards) ============
  {
    id: "slumber-ace",
    name: "Ace of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "A new invitation to rest. Permission to pause before beginning. The creative journey starts not with action, but with stillness. This card whispers: 'You are allowed to stop. Ideas incubate in silence.'",
    nudge: "What would happen if you gave yourself one full day of nothing? Not productive rest. Just rest."
  },
  {
    id: "slumber-2",
    name: "Two of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Balancing rest and action. You are learning to juggle the demands of creating with the need to restore. This card honors the tension between doing and being. Both are necessary. Neither should dominate.",
    nudge: "Where in your life is rest competing with action? Can they take turns instead of fighting?"
  },
  {
    id: "slumber-3",
    name: "Three of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Resting in community. You do not have to restore alone. This card celebrates the support of creative companions who understand the need to pause together. Shared rest deepens bonds and refuels collective energy.",
    nudge: "Who in your life honors rest the way you do? When did you last pause together?"
  },
  {
    id: "slumber-4",
    name: "Four of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "A protective pause. You are guarding your energy, and wisely so. This card affirms the boundaries you have set around your time and spirit. Sometimes creativity requires saying no to everything else.",
    nudge: "What are you protecting right now? Is there something you need to guard more fiercely?"
  },
  {
    id: "slumber-5",
    name: "Five of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Exhaustion. Burnout. The well has run dry. This card acknowledges the cost of neglecting rest. You gave too much and kept too little. Recovery is possible, but it begins with honesty about how you got here.",
    nudge: "What drained you? What would it take to admit you need to stop?"
  },
  {
    id: "slumber-6",
    name: "Six of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Receiving rest. Accepting help. This card invites you to let others care for you. Give yourself the same grace you offer so freely to others. You are worthy of restoration, not because you earned it, but because you need it.",
    nudge: "When did you last let someone take care of you? What would it feel like to say yes?"
  },
  {
    id: "slumber-7",
    name: "Seven of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Trusting the incubation period. Seeds are growing beneath the soil, unseen but alive. This card asks for patience. The project, the idea, the dream is not stalled. It is becoming. You cannot rush what needs time.",
    nudge: "What are you waiting on? Can you trust that something is happening even if you cannot see it?"
  },
  {
    id: "slumber-8",
    name: "Eight of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Mastering the art of rest. You are learning that restoration is a skill, not a reward. This card celebrates the discipline of self-care. Rest is not what happens after the work. Rest is part of the work.",
    nudge: "How have you grown in your relationship with rest? What did it take to get here?"
  },
  {
    id: "slumber-9",
    name: "Nine of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Rich rest. Deep fulfillment. Luxurious solitude. This card celebrates the abundance that comes from honoring your need to pause. You are full. You are restored. The well overflows because you took the time to fill it.",
    nudge: "What does your richest, most fulfilling rest look like? When did you last experience it?"
  },
  {
    id: "slumber-10",
    name: "Ten of Slumber",
    suit: "slumber",
    type: "minor",
    meaning: "Fully restored. Sustainable rhythms. This card marks the completion of a rest cycle. You have built something lasting: a practice of pausing that will carry you through future seasons of creation. Rest is now woven into your life.",
    nudge: "What rhythms of rest have you established? How will you protect them going forward?"
  },
  {
    id: "slumber-wonderer",
    name: "Wonderer of Slumber",
    suit: "slumber",
    type: "court",
    meaning: "Curious about rest. New to pausing. The Wonderer approaches restoration with beginner's mind, asking: 'What does rest even look like for me?' This card celebrates the courage to explore self-care without knowing all the answers.",
    nudge: "If you were just learning how to rest, what would you try first?"
  },
  {
    id: "slumber-explorer",
    name: "Explorer of Slumber",
    suit: "slumber",
    type: "court",
    meaning: "Actively seeking balance. The Explorer is in motion, but the quest is stillness. This card honors the journey of building rest habits, experimenting with boundaries, and discovering what restoration truly requires.",
    nudge: "What rest practice are you currently exploring? What is it teaching you?"
  },
  {
    id: "slumber-mentor",
    name: "Mentor of Slumber",
    suit: "slumber",
    type: "court",
    meaning: "Nurturing rest in others. The Mentor models self-care with grace, showing that pausing is not weakness but wisdom. This card celebrates those who teach by example, giving permission to rest simply by resting themselves.",
    nudge: "Who looks to you for permission to pause? How does your rest give others courage?"
  },
  {
    id: "slumber-maven",
    name: "Maven of Slumber",
    suit: "slumber",
    type: "court",
    meaning: "Mastery of sustainable rhythms. The Maven understands that taking a break fuels the future and allows time for passion in the present. Rest is not an interruption of creativity. It is its source. This card honors the adept who has learned what so many forget: stillness is strength.",
    nudge: "What wisdom about rest would you share with someone just beginning their creative journey?"
  },

  // ============ SUIT OF PLAY (14 cards) ============
  {
    id: "play-ace",
    name: "Ace of Play",
    suit: "play",
    type: "minor",
    meaning: "A new creative pathway opens. Inspiration arrives, clear and bright. This card celebrates the spark of possibility, the moment when you see what you could make, build, or begin. The path is yours to choose.",
    nudge: "What new creative possibility is calling to you? What would it feel like to say yes?"
  },
  {
    id: "play-2",
    name: "Two of Play",
    suit: "play",
    type: "minor",
    meaning: "Two paths stretch before you. Both are valid. Both lead somewhere good. This card honors the moment of choosing without fear, knowing that the path not taken will wait. Abundance, not scarcity, guides your decision.",
    nudge: "What two possibilities are you weighing? What would help you choose with confidence?"
  },
  {
    id: "play-3",
    name: "Three of Play",
    suit: "play",
    type: "minor",
    meaning: "Expansion is underway. Your creative work is growing beyond its original shape, reaching into new territory. This card celebrates the thrill of watching something develop, knowing there is more to come.",
    nudge: "Where is your creativity expanding right now? What growth surprises you?"
  },
  {
    id: "play-4",
    name: "Four of Play",
    suit: "play",
    type: "minor",
    meaning: "A moment to celebrate what you have built. The foundation is solid. This card invites you to pause within the play, to savor the results of your freedom and experimentation before moving forward.",
    nudge: "What have you created that deserves celebration? Have you stopped to enjoy it?"
  },
  {
    id: "play-5",
    name: "Five of Play",
    suit: "play",
    type: "minor",
    meaning: "Creative tension. Too many ideas competing for attention. This card acknowledges the struggle of abundance when it becomes overwhelming. Not every path can be walked at once. Discernment is needed.",
    nudge: "Where is creative conflict showing up? What would help you find focus?"
  },
  {
    id: "play-6",
    name: "Six of Play",
    suit: "play",
    type: "minor",
    meaning: "Recognition and progress. Your creative efforts are being seen, appreciated, or rewarded. This card celebrates forward motion and the encouragement that comes from external validation or internal pride.",
    nudge: "What progress are you most proud of? Who has noticed your growth?"
  },
  {
    id: "play-7",
    name: "Seven of Play",
    suit: "play",
    type: "minor",
    meaning: "Holding your ground. You have built something worth protecting. This card honors the courage to stand by your creative vision even when challenged. Your path is valid. Keep going.",
    nudge: "What creative work are you defending? What gives you the strength to stand firm?"
  },
  {
    id: "play-8",
    name: "Eight of Play",
    suit: "play",
    type: "minor",
    meaning: "Swift movement. Things are happening quickly now. Ideas flow, projects advance, momentum builds. This card celebrates the exhilarating pace of creativity in motion. Trust the speed.",
    nudge: "Where is momentum carrying you? Can you enjoy the ride?"
  },
  {
    id: "play-9",
    name: "Nine of Play",
    suit: "play",
    type: "minor",
    meaning: "Resilience earned through experience. You have walked many paths and learned from each. This card honors the wisdom that comes from creative experimentation, the strength built through doing.",
    nudge: "What has your creative journey taught you? How has experience shaped your practice?"
  },
  {
    id: "play-10",
    name: "Ten of Play",
    suit: "play",
    type: "minor",
    meaning: "Full creative engagement. You are carrying the weight of your work with strength and purpose. This card acknowledges the responsibility that comes with expansion, and the satisfaction of seeing it through.",
    nudge: "What are you carrying right now? Is the weight a burden or a badge of honor?"
  },
  {
    id: "play-wonderer",
    name: "Wonderer of Play",
    suit: "play",
    type: "court",
    meaning: "Curious and eager, the Wonderer stands at the beginning of a creative path, eyes wide with possibility. This card celebrates beginner's enthusiasm, the joy of not yet knowing where play will lead.",
    nudge: "What creative pursuit are you just beginning? What excites you most about not knowing?"
  },
  {
    id: "play-explorer",
    name: "Explorer of Play",
    suit: "play",
    type: "court",
    meaning: "Actively pursuing creative growth. The Explorer moves with purpose, testing paths, experimenting boldly, learning through doing. This card honors the courage to keep moving even when the destination is unclear.",
    nudge: "What are you actively exploring? What is the exploration teaching you?"
  },
  {
    id: "play-mentor",
    name: "Mentor of Play",
    suit: "play",
    type: "court",
    meaning: "Guiding others through creative expansion. The Mentor shares the wisdom of experience, encouraging experimentation while modeling when to pull in the reins. This card celebrates those who teach play through presence.",
    nudge: "Who looks to you for creative guidance? What wisdom do you offer through your example?"
  },
  {
    id: "play-maven",
    name: "Maven of Play",
    suit: "play",
    type: "court",
    meaning: "Mastery of creative engagement. The Maven knows when to leap and when to land, when to expand and when to settle into results. Play is not chaos but a practiced rhythm of freedom, experimentation, and savoring. This card honors the adept who plays with wisdom.",
    nudge: "What has mastery of play taught you about creativity? How do you balance expansion with experience?"
  },

  // ============ SUIT OF JOY (14 cards) ============
  {
    id: "joy-ace",
    name: "Ace of Joy",
    suit: "joy",
    type: "minor",
    meaning: "A breakthrough in thinking. Clarity arrives. This card celebrates the moment when the mind shifts toward light, when a new perspective opens and suddenly everything feels possible. Joy begins with a single thought.",
    nudge: "What new thought has changed everything for you? What clarity is emerging?"
  },
  {
    id: "joy-2",
    name: "Two of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Balance of mind. You are holding two truths, two perspectives, two ways of seeing. This card honors the ability to stay present without forcing a decision. Peace lives in the pause between thoughts.",
    nudge: "What are you holding in balance? Can both things be true?"
  },
  {
    id: "joy-3",
    name: "Three of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Healing from old thoughts. This card acknowledges that joy sometimes requires release. Old patterns, old stories, old beliefs may need to soften before happiness can fully arrive. Healing is part of growth.",
    nudge: "What old thought pattern is ready to be released? What would heal if you let it?"
  },
  {
    id: "joy-4",
    name: "Four of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Rest for the mind. Stillness of thought. This card invites mental pause, a break from processing, planning, and problem-solving. Joy needs quiet to take root. Let the mind rest.",
    nudge: "When did you last give your mind true stillness? What would mental rest look like today?"
  },
  {
    id: "joy-5",
    name: "Five of Joy",
    suit: "joy",
    type: "minor",
    meaning: "A challenge to positivity. Doubt creeps in. This card acknowledges that joy is not constant and that dark thoughts sometimes visit. The growth mindset sees this as information, not failure. What is the doubt teaching you?",
    nudge: "What doubt is visiting? Can you meet it with curiosity instead of fear?"
  },
  {
    id: "joy-6",
    name: "Six of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Moving toward peace. Transition is underway. This card celebrates the journey from struggle to ease, from confusion to clarity. You are not there yet, but you are heading somewhere good. Keep going.",
    nudge: "Where are you in transition? What peace is waiting on the other side?"
  },
  {
    id: "joy-7",
    name: "Seven of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Guarding your mindset. Not every thought deserves entry. This card honors the discernment required to protect your mental space, to choose which ideas to entertain and which to release. Joy requires boundaries.",
    nudge: "What thoughts are you allowing in? What needs to be gently turned away?"
  },
  {
    id: "joy-8",
    name: "Eight of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Feeling stuck in old thinking. The mind loops and spirals. This card acknowledges the frustration of mental patterns that seem impossible to break. But awareness is the first step. You see the loop now.",
    nudge: "Where is your thinking stuck? What would help you step outside the loop?"
  },
  {
    id: "joy-9",
    name: "Nine of Joy",
    suit: "joy",
    type: "minor",
    meaning: "Worry visits. Anxiety whispers. This card acknowledges the weight of fearful thoughts while reminding you that they are not the whole truth. Joy exists alongside worry. Both can be present.",
    nudge: "What worry is weighing on you? Can you hold it gently instead of tightly?"
  },
  {
    id: "joy-10",
    name: "Ten of Joy",
    suit: "joy",
    type: "minor",
    meaning: "A thought cycle completes. This card marks the end of a mental journey, the arrival at a new understanding. You have worked through something significant. The mind is clearer now. Rest in what you have learned.",
    nudge: "What mental journey has reached its end? What understanding have you arrived at?"
  },
  {
    id: "joy-wonderer",
    name: "Wonderer of Joy",
    suit: "joy",
    type: "court",
    meaning: "Curious about new ways of thinking. The Wonderer approaches mindset with openness, asking: 'What if I saw this differently?' This card celebrates the courage to question old patterns and explore new perspectives.",
    nudge: "What belief are you curious about challenging? What new perspective wants to emerge?"
  },
  {
    id: "joy-explorer",
    name: "Explorer of Joy",
    suit: "joy",
    type: "court",
    meaning: "Actively seeking positive thought patterns. The Explorer experiments with mindset, trying on new beliefs, testing growth-oriented thinking. This card honors the journey of rewiring the mind toward joy.",
    nudge: "What mindset shift are you actively exploring? What is it teaching you?"
  },
  {
    id: "joy-mentor",
    name: "Mentor of Joy",
    suit: "joy",
    type: "court",
    meaning: "Modeling positive thinking for others. The Mentor demonstrates that joy is a practice, not a personality trait. Through presence and acceptance of good, they teach others that mindset is a choice.",
    nudge: "Who learns from your example of joy? How does your positivity give others permission?"
  },
  {
    id: "joy-maven",
    name: "Maven of Joy",
    suit: "joy",
    type: "court",
    meaning: "Mastery of mindset. The Maven has learned that happiness is presence, that acceptance of good is a discipline, and that highest thoughts require practice. Joy is not naive optimism but a cultivated way of being. This card honors the adept who chooses light again and again.",
    nudge: "What has mastery of mindset taught you? How do you return to joy when it wavers?"
  },

  // ============ SUIT OF LOVELINESS (14 cards) ============
  {
    id: "loveliness-ace",
    name: "Ace of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "A new opening of the heart. Beauty arrives unexpectedly, and you notice it. This card celebrates the moment when appreciation awakens, when gratitude feels effortless, when the world reveals its loveliness and you are present enough to see.",
    nudge: "What beauty has found you recently? What opened your heart without warning?"
  },
  {
    id: "loveliness-2",
    name: "Two of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "A connection of appreciation. Two hearts recognizing beauty together. This card honors the relationships that deepen through shared gratitude, the creative partnerships built on mutual admiration and emotional resonance.",
    nudge: "Who shares your appreciation for beauty? How does gratitude deepen your connection?"
  },
  {
    id: "loveliness-3",
    name: "Three of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Celebration of beauty in community. Joy shared multiplies. This card invites you to gather with others who see loveliness, to celebrate creativity together, to let appreciation overflow into collective delight.",
    nudge: "When did you last celebrate beauty with others? What would it feel like to share your gratitude aloud?"
  },
  {
    id: "loveliness-4",
    name: "Four of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "A pause in appreciation. Beauty surrounds you, but you have stopped noticing. This card gently asks: what loveliness have you been taking for granted? Gratitude requires attention. Look again.",
    nudge: "What beauty has become invisible through familiarity? What deserves a second look?"
  },
  {
    id: "loveliness-5",
    name: "Five of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Loss touches the heart. Grief for what was beautiful and is now gone. This card acknowledges that appreciation includes mourning, that gratitude sometimes arrives through absence. Let the loss teach you what mattered.",
    nudge: "What are you grieving? What did its beauty teach you about what you value?"
  },
  {
    id: "loveliness-6",
    name: "Six of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Remembering past beauty. Nostalgia warms the heart. This card invites you to revisit moments of loveliness, to draw strength and inspiration from what once filled you with gratitude. The past can nourish the present.",
    nudge: "What beautiful memory is asking for your attention? How can it inspire you now?"
  },
  {
    id: "loveliness-7",
    name: "Seven of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "So much beauty, so many choices. This card acknowledges the overwhelm of abundance when everything seems lovely. Discernment is needed. Not every beautiful thing requires your attention. Choose what truly moves you.",
    nudge: "Where is abundance overwhelming you? What beauty deserves your focused appreciation?"
  },
  {
    id: "loveliness-8",
    name: "Eight of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Walking away from what once seemed lovely. This card honors the courage to leave behind beauty that no longer serves, to seek deeper fulfillment, to trust that more loveliness awaits. Growth sometimes means goodbye.",
    nudge: "What are you ready to leave behind? What deeper beauty are you walking toward?"
  },
  {
    id: "loveliness-9",
    name: "Nine of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Contentment. Emotional fulfillment. This card celebrates the satisfaction of a heart well-tended, a life filled with noticed beauty, a practice of gratitude that has borne fruit. You have cultivated loveliness. Enjoy it.",
    nudge: "Where do you feel most content? What gratitude practice has brought you here?"
  },
  {
    id: "loveliness-10",
    name: "Ten of Loveliness",
    suit: "loveliness",
    type: "minor",
    meaning: "Overflowing appreciation. Beauty surrounds you and fills your heart completely. This card marks the fullness of emotional fulfillment, gratitude that extends to every corner of life. Loveliness is everywhere, and you see it all.",
    nudge: "Where is your heart overflowing? How will you honor this abundance of beauty?"
  },
  {
    id: "loveliness-wonderer",
    name: "Wonderer of Loveliness",
    suit: "loveliness",
    type: "court",
    meaning: "Curious about beauty. The Wonderer approaches appreciation with fresh eyes, discovering loveliness in unexpected places. This card celebrates the beginner's heart, open and eager to be moved.",
    nudge: "Where are you discovering new beauty? What has surprised your heart recently?"
  },
  {
    id: "loveliness-explorer",
    name: "Explorer of Loveliness",
    suit: "loveliness",
    type: "court",
    meaning: "Actively seeking beauty. The Explorer moves through the world with intention, looking for loveliness, cultivating gratitude as a daily practice. This card honors the journey of training the heart to notice.",
    nudge: "How are you actively seeking beauty? What practice helps you notice loveliness?"
  },
  {
    id: "loveliness-mentor",
    name: "Mentor of Loveliness",
    suit: "loveliness",
    type: "court",
    meaning: "Teaching others to see beauty. The Mentor models appreciation, pointing out loveliness that others might miss, cultivating gratitude in community. This card celebrates those who help others open their hearts.",
    nudge: "Who have you helped see beauty? How does your appreciation create space for others?"
  },
  {
    id: "loveliness-maven",
    name: "Maven of Loveliness",
    suit: "loveliness",
    type: "court",
    meaning: "Mastery of appreciation. The Maven has cultivated a heart that sees beauty everywhere, a practice of gratitude so deep it has become a way of being. Emotional fulfillment is not circumstance but perspective. This card honors the adept whose heart remains open, always finding loveliness, always grateful.",
    nudge: "What has mastery of appreciation taught you? How do you keep your heart open to beauty?"
  },

  // ============ MAJOR ARCANA (22 cards) ============
  {
    id: "major-0",
    name: "The Fool",
    suit: "major",
    type: "major",
    number: 0,
    meaning: "A creative nudge arrives, and you do not yet know where it leads. This card celebrates the courage to begin without a plan, to answer an invitation before understanding it fully. Every creative act starts here: with willingness and wonder. Say yes before you are ready. That is how creativity begins.",
    nudge: "What invitation is waiting for your yes? Can you begin without knowing the ending?"
  },
  {
    id: "major-1",
    name: "The Magician",
    suit: "major",
    type: "major",
    number: 1,
    meaning: "You have everything you need. The Magician reminds you that creativity does not require more supplies, more time, or more permission. It requires using what is already within you. Your skills are present. Your ideas are ready. Your magic is real. You are more equipped than you know.",
    nudge: "What do you already have that is waiting to be used? What could you create right now?"
  },
  {
    id: "major-2",
    name: "The High Priestess",
    suit: "major",
    type: "major",
    number: 2,
    meaning: "Trust the quiet voice. The High Priestess honors the creative wisdom that lives beneath logic, the knowing that whispers which project to pursue, which direction to take, which idea holds the deepest promise. She does not explain. She simply knows. Creativity speaks in intuition. Listen.",
    nudge: "What is your intuition telling you right now? What do you know without knowing how you know?"
  },
  {
    id: "major-3",
    name: "The Empress",
    suit: "major",
    type: "major",
    number: 3,
    meaning: "Nurture what you are growing. The Empress tends to creativity the way she tends a garden: with patience, attention, and care. She knows that the environment matters, that beautiful surroundings feed the spirit, that a comfortable space invites inspiration. Sometimes caring for your surroundings is caring for your art.",
    nudge: "What creative project needs your nurturing? How might beautifying your space support your work?"
  },
  {
    id: "major-4",
    name: "The Emperor",
    suit: "major",
    type: "major",
    number: 4,
    meaning: "Create the container. The Emperor knows that creativity thrives within structure, that systems support inspiration, that discipline protects the creative spirit. He builds the framework that lets wild ideas flourish. Structure is not the opposite of creativity. It is its foundation.",
    nudge: "What structure would support your creativity? Where does your creative life need more order?"
  },
  {
    id: "major-5",
    name: "The Hierophant",
    suit: "major",
    type: "major",
    number: 5,
    meaning: "Honor what came before. The Hierophant holds the traditions of your craft, the wisdom of those who created before you, the techniques worth learning and the rules worth understanding before you break them. You are part of a lineage of makers.",
    nudge: "What creative wisdom have you inherited? What are you ready to learn or share?"
  },
  {
    id: "major-6",
    name: "The Lovers",
    suit: "major",
    type: "major",
    number: 6,
    meaning: "Choose your creative path. The Lovers stand at the crossroads where you must decide: this project or that one, this direction or another, this version of your creative self or a new one. Alignment with your deepest values guides the choice. Choose what you truly love and give yourself to it fully.",
    nudge: "What creative choice is before you? Does it align with what you truly love?"
  },
  {
    id: "major-7",
    name: "The Chariot",
    suit: "major",
    type: "major",
    number: 7,
    meaning: "Gather your energy and move. The Chariot celebrates momentum, the exhilaration of a creative project in motion, the focus required to drive an idea forward through obstacles and doubt. Willpower and direction combine. Harness this energy. Ride it fully.",
    nudge: "Where do you need momentum? What would it feel like to move forward with full creative force?"
  },
  {
    id: "major-8",
    name: "Strength",
    suit: "major",
    type: "major",
    number: 8,
    meaning: "Gentle persistence. Strength is not force but patience, the quiet courage to continue when creativity feels slow, when the project is in its unglamorous middle, when results are not yet visible. Creative work requires showing up again and again. Power lives in persistence.",
    nudge: "Where is patience being asked of you? What quiet strength are you building through your practice?"
  },
  {
    id: "major-9",
    name: "The Hermit",
    suit: "major",
    type: "major",
    number: 9,
    meaning: "Withdraw to create. The Hermit seeks solitude, not from loneliness but from necessity. Creativity often requires stepping away from noise, from distraction, from the demands of others. Home becomes sanctuary. The Hermit knows that sometimes the most creative act is closing the door and letting the world wait.",
    nudge: "What solitude do you need? Where can you withdraw to find your creative light?"
  },
  {
    id: "major-10",
    name: "Wheel of Fortune",
    suit: "major",
    type: "major",
    number: 10,
    meaning: "Seasons turn. The Wheel reminds you that creativity moves in cycles: seasons of inspiration and seasons of rest, times of abundance and times of waiting, periods of wild productivity and periods of quiet germination. When the muse is loud, follow her. When she is quiet, trust she will return.",
    nudge: "What creative season are you in? Can you trust the turning of the wheel?"
  },
  {
    id: "major-11",
    name: "Justice",
    suit: "major",
    type: "major",
    number: 11,
    meaning: "Decide with clarity. Justice asks for honest assessment of your creative work: what is truly good? What needs more attention? What path is right even if it is harder? Creative integrity means making choices that align with your values, even when easier options exist.",
    nudge: "What creative decision needs honest assessment? Where is clarity calling you?"
  },
  {
    id: "major-12",
    name: "The Hanged One",
    suit: "major",
    type: "major",
    number: 12,
    meaning: "See differently. The Hanged One suspends action to shift perspective. Sometimes creativity requires stopping, not to give up but to see from a new angle. The stuck project reveals itself when you step away. Surrender the need to push. Let insight arrive.",
    nudge: "What would shift if you paused? What new perspective is waiting for you?"
  },
  {
    id: "major-13",
    name: "Death",
    suit: "major",
    type: "major",
    number: 13,
    meaning: "Let go to make room. Death is not loss but transformation. This card celebrates the courage to release: the project that has run its course, the creative identity that no longer fits, the idea you once loved but have outgrown. Ending creates space for beginning.",
    nudge: "What creative chapter is ending? What space will open when you let go?"
  },
  {
    id: "major-14",
    name: "Temperance",
    suit: "major",
    type: "major",
    number: 14,
    meaning: "Blend with care. Temperance is the art of balance: knowing when to answer the muse and when to pause, when to create wildly and when to rest, when to push forward and when to tend to the practical matters of life that support your art. Sometimes the most creative thing you can do is step away and return refreshed.",
    nudge: "Where do you need more balance? How can you honor both the muse and the practical?"
  },
  {
    id: "major-15",
    name: "The Devil",
    suit: "major",
    type: "major",
    number: 15,
    meaning: "Notice what binds you. The Devil reveals the attachments that block creativity: the fear of failure, the perfectionism that prevents finishing, the comparison that steals joy, the habits that drain energy meant for making. Freedom waits on the other side of honest inventory.",
    nudge: "What attachment is blocking your creativity? What would freedom feel like?"
  },
  {
    id: "major-16",
    name: "The Tower",
    suit: "major",
    type: "major",
    number: 16,
    meaning: "Everything shifts. The Tower arrives when creative change cannot be postponed: the sudden insight that demands a new direction, the honest feedback that requires rebuilding, the realization that changes everything you thought you knew about your work. In the disruption, truth emerges.",
    nudge: "What has been disrupted in your creative life? What is the clearing making room for?"
  },
  {
    id: "major-17",
    name: "The Star",
    suit: "major",
    type: "major",
    number: 17,
    meaning: "Light returns. After release, after struggle, after the hard work of creating through difficulty, The Star arrives with gentle hope. Inspiration flows again. Confidence returns. The creative path ahead feels possible and even beautiful. Hope is not naive. It is earned.",
    nudge: "Where is hope returning in your creative life? What inspiration is emerging?"
  },
  {
    id: "major-18",
    name: "The Moon",
    suit: "major",
    type: "major",
    number: 18,
    meaning: "Trust the unclear path. The Moon illuminates just enough to take the next step, not the whole journey. This card honors the creative moments when you do not know if the project will work, if the direction is right, if the vision will hold. Keep going anyway. Uncertainty is part of every creative process.",
    nudge: "What uncertainty are you sitting with? Can you take one step without seeing the whole path?"
  },
  {
    id: "major-19",
    name: "The Sun",
    suit: "major",
    type: "major",
    number: 19,
    meaning: "Pure creative joy. The Sun shines on the moments when everything flows: the project that delights you, the work that feels aligned, the creative life that is fully alive. Bask in it. Not every day is a Sun day, which makes this one precious. Let yourself feel the joy of creating without reservation.",
    nudge: "Where is joy shining in your creative life? Are you letting yourself feel it fully?"
  },
  {
    id: "major-20",
    name: "Judgement",
    suit: "major",
    type: "major",
    number: 20,
    meaning: "Answer the deeper call. Judgement invites you to reflect on your creative life with honesty: what have you made? What is your work becoming? What is calling you toward a new chapter, a higher purpose, a more authentic creative expression? Sometimes the call is to recommit to what you have always known you must make.",
    nudge: "What is calling you toward creative renewal? What does your work reflect about who you are becoming?"
  },
  {
    id: "major-21",
    name: "The World",
    suit: "major",
    type: "major",
    number: 21,
    meaning: "The creative life, whole. The World celebrates completion and integration: you have made something meaningful, you have grown through the making, you have become more fully yourself through your creative work. A cycle completes. You are a creative living a creative life. The journey continues, richer now for all you have learned and made.",
    nudge: "What feels complete? How has your creativity made you more fully yourself?"
  }
];

// Spread Definitions
const spreads = [
  {
    id: "single",
    name: "Daily Pull",
    cards: 1,
    description: "What does my creativity need today?",
    positions: ["Today's Guidance"]
  },
  {
    id: "conversation",
    name: "Creative Conversation",
    cards: 2,
    description: "What is calling and what is supporting?",
    positions: ["What is calling me?", "What is supporting me?"]
  },
  {
    id: "timeline",
    name: "Past / Present / Future",
    cards: 3,
    description: "Track your creative journey across time",
    positions: ["Where have I been?", "Where am I now?", "Where am I going?"]
  },
  {
    id: "journey",
    name: "Creative Journey",
    cards: 5,
    description: "A full creative check-in",
    positions: ["What needs rest?", "What needs action?", "What mindset serves me?", "What beauty am I noticing?", "What is the invitation?"]
  }
];

export default function CreativityCoachTarot() {
  const [mode, setMode] = useState<'home' | 'daily' | 'browse' | 'spread' | 'reading'>('home');
  const [selectedSpread, setSelectedSpread] = useState<typeof spreads[0] | null>(null);
  const [drawnCards, setDrawnCards] = useState<typeof creativityCoachDeck>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  const [selectedCard, setSelectedCard] = useState<typeof creativityCoachDeck[0] | null>(null);
  const [browseSuit, setBrowseSuit] = useState<string>('major');

  const shuffleAndDraw = (count: number) => {
    const shuffled = [...creativityCoachDeck].sort(() => Math.random() - 0.5);
    setDrawnCards(shuffled.slice(0, count));
    setRevealedCards(new Array(count).fill(false));
  };

  const startDailyPull = () => {
    shuffleAndDraw(1);
    setMode('daily');
  };

  const startSpread = (spread: typeof spreads[0]) => {
    setSelectedSpread(spread);
    shuffleAndDraw(spread.cards);
    setMode('reading');
  };

  const revealCard = (index: number) => {
    const newRevealed = [...revealedCards];
    newRevealed[index] = true;
    setRevealedCards(newRevealed);
  };

  const revealAll = () => {
    setRevealedCards(new Array(drawnCards.length).fill(true));
  };

  const goHome = () => {
    setMode('home');
    setDrawnCards([]);
    setRevealedCards([]);
    setSelectedCard(null);
    setSelectedSpread(null);
  };

  const getSuitStyle = (suit: string) => {
    return suitColors[suit as keyof typeof suitColors] || suitColors.major;
  };

  const filteredCards = browseSuit === 'all' 
    ? creativityCoachDeck 
    : creativityCoachDeck.filter(card => card.suit === browseSuit);

  return (
      <div className="min-h-screen bg-gradient-to-br from-violet-300 via-purple-200 via-fuchsia-200 via-pink-200 via-amber-200 to-yellow-200 p-4 relative overflow-hidden">
      
      {/* Deep ethereal base layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-transparent to-pink-300/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-300/30 via-fuchsia-300/10 to-violet-400/30 pointer-events-none"></div>
      
      {/* Shimmer overlays - intensified */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/40 via-fuchsia-300/20 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-400/40 via-rose-300/20 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300/30 via-yellow-200/20 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-300/25 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Ethereal mist layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent via-transparent to-white/30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
      
      {/* Large floating orbs */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-400/40 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-400/35 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-amber-300/35 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-10 right-10 w-56 h-56 bg-fuchsia-400/40 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-yellow-300/25 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-violet-400/35 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute -top-20 left-1/3 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
      
      {/* Crystal orbs */}
      <div className="absolute top-[15%] left-[20%] w-24 h-24 bg-white/40 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute top-[45%] right-[25%] w-20 h-20 bg-white/35 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: '1.7s' }}></div>
      <div className="absolute bottom-[25%] left-[35%] w-28 h-28 bg-white/30 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: '0.9s' }}></div>
      
      {/* Sparkles */}
      <div className="absolute top-[8%] left-[12%] w-3 h-3 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.5s' }}></div>
      <div className="absolute top-[20%] right-[18%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '0.3s' }}></div>
      <div className="absolute top-[55%] left-[8%] w-2.5 h-2.5 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }}></div>
      <div className="absolute top-[35%] right-[12%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.8s', animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-[35%] left-[22%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2.2s', animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[18%] right-[28%] w-3 h-3 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
      <div className="absolute top-[12%] left-[45%] w-1.5 h-1.5 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.5s', animationDelay: '1.8s' }}></div>
      <div className="absolute top-[65%] right-[38%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-[45%] left-[38%] w-2.5 h-2.5 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '1.5s' }}></div>
      <div className="absolute top-[3%] right-[8%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.8s', animationDelay: '0.7s' }}></div>
      <div className="absolute top-[75%] left-[5%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2.2s', animationDelay: '1.3s' }}></div>
      <div className="absolute bottom-[8%] left-[48%] w-1.5 h-1.5 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.5s', animationDelay: '2s' }}></div>
      <div className="absolute top-[42%] left-[3%] w-3 h-3 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '0.4s' }}></div>
      <div className="absolute bottom-[60%] right-[5%] w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '2.5s', animationDelay: '1.6s' }}></div>
      <div className="absolute top-[88%] right-[15%] w-2.5 h-2.5 bg-white rounded-full animate-ping pointer-events-none" style={{ animationDuration: '1.8s', animationDelay: '0.9s' }}></div>
      
      {/* Rainbow prismatic flares */}
      <div className="absolute top-[10%] right-[30%] w-1 h-8 bg-gradient-to-b from-violet-400/60 via-pink-400/60 to-transparent rotate-45 blur-sm animate-pulse pointer-events-none" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-[20%] left-[15%] w-1 h-10 bg-gradient-to-b from-amber-400/60 via-orange-400/60 to-transparent -rotate-12 blur-sm animate-pulse pointer-events-none" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
      <div className="absolute top-[50%] left-[8%] w-1 h-6 bg-gradient-to-b from-fuchsia-400/50 via-purple-400/50 to-transparent rotate-30 blur-sm animate-pulse pointer-events-none" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-[30%] right-[5%] w-1 h-12 bg-gradient-to-b from-pink-400/50 via-rose-400/50 to-transparent -rotate-45 blur-sm animate-pulse pointer-events-none" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-[40%] right-[20%] w-1 h-8 bg-gradient-to-b from-yellow-400/50 via-amber-400/50 to-transparent rotate-12 blur-sm animate-pulse pointer-events-none" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>
      
      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-orange-600 via-green-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            🎨 Creativity Coach Tarot
          </h1>
          <p className="text-amber-700 text-sm">78 cards to support your creative journey</p>
        </div>

        {/* HOME MODE */}
        {mode === 'home' && (
          <div className="space-y-4">
            
            {/* Daily Pull */}
            <div 
              onClick={startDailyPull}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02] hover:bg-white/50"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-700 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Daily Creative Guidance
                </h2>
                <p className="text-purple-600 text-sm">Pull a single card for today</p>
              </div>
            </div>

            {/* Spreads */}
            <div 
              onClick={() => setMode('spread')}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02] hover:bg-white/50"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">🎴</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Creative Spreads
                </h2>
                <p className="text-orange-600 text-sm">Multi-card readings for deeper insight</p>
              </div>
            </div>

            {/* Browse Deck */}
            <div 
              onClick={() => setMode('browse')}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-[1.02] hover:bg-white/50"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Explore the Deck
                </h2>
                <p className="text-purple-600 text-sm">Browse all 78 cards by suit</p>
              </div>
            </div>

            {/* Color Legend */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
              <h3 className="text-sm font-bold bg-gradient-to-r from-purple-700 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-3 text-center">The Four Suits</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 shadow-sm"></div>
                  <span className="text-purple-800"><strong>Slumber</strong> - Rest</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-sm"></div>
                  <span className="text-orange-800"><strong>Play</strong> - Action</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-400 shadow-sm"></div>
                  <span className="text-green-800"><strong>Joy</strong> - Mindset</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-400 shadow-sm"></div>
                  <span className="text-pink-800"><strong>Loveliness</strong> - Beauty</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
              <h3 className="text-sm font-bold bg-gradient-to-r from-purple-700 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-2 text-center">About This Deck</h3>
              <p className="text-purple-700 text-xs text-center leading-relaxed">
                The Creativity Coach Tarot is designed to support creatives in their unique endeavors. 
                Each card includes a Creativity Coach Nudge to deepen your reflection. 
                The colors evoke feeling without competing with your own creative vision.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center pt-2">
              <a 
                href="/"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                🎴 Back to Breakfast Tarot
              </a>
            </div>
          </div>
        )}

        {/* DAILY PULL MODE */}
        {mode === 'daily' && drawnCards.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
              ✨ Your Daily Creative Guidance
            </h2>

            {/* Card */}
            <div className="flex justify-center">
              <div
                onClick={() => !revealedCards[0] ? revealCard(0) : setSelectedCard(drawnCards[0])}
                className={`w-48 h-72 rounded-2xl shadow-xl cursor-pointer transition-all duration-500 ${
                  revealedCards[0]
                    ? `bg-gradient-to-br ${getSuitStyle(drawnCards[0].suit).light} border-4 ${getSuitStyle(drawnCards[0].suit).border}`
                    : 'bg-gradient-to-br from-purple-600 via-orange-500 via-green-500 to-pink-500 hover:scale-105'
                }`}
              >
                {!revealedCards[0] ? (
                  <div className="h-full flex flex-col items-center justify-center text-white p-4">
                    <div className="text-4xl mb-3">🎨</div>
                    <div className="text-sm font-bold text-center">Creativity Coach</div>
                    <div className="text-xs mt-2 opacity-80">Tap to reveal</div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className={`text-lg font-bold ${getSuitStyle(drawnCards[0].suit).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                      {drawnCards[0].name}
                    </div>
                    <div className={`text-xs mt-2 ${getSuitStyle(drawnCards[0].suit).accent}`}>
                      {drawnCards[0].suit === 'major' ? 'Major Arcana' : `Suit of ${drawnCards[0].suit.charAt(0).toUpperCase() + drawnCards[0].suit.slice(1)}`}
                    </div>
                    <div className="text-xs mt-3 text-gray-500">Tap to read</div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Detail */}
            {revealedCards[0] && selectedCard && (
              <div className={`bg-white/90 rounded-2xl p-6 border-2 ${getSuitStyle(selectedCard.suit).border} shadow-lg`}>
                <h3 className={`text-xl font-bold ${getSuitStyle(selectedCard.suit).text} mb-3 text-center`} style={{ fontFamily: 'Georgia, serif' }}>
                  {selectedCard.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {selectedCard.meaning}
                </p>
                <div className={`bg-gradient-to-r ${getSuitStyle(selectedCard.suit).light} rounded-xl p-4 border ${getSuitStyle(selectedCard.suit).border}`}>
                  <p className={`text-xs font-bold ${getSuitStyle(selectedCard.suit).text} mb-1`}>Creativity Coach Nudge:</p>
                  <p className={`text-sm ${getSuitStyle(selectedCard.suit).accent} italic`}>{selectedCard.nudge}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={startDailyPull}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                ✨ New Card
              </button>
              <button
                onClick={goHome}
                className="bg-white hover:bg-gray-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300 transition-all text-sm"
              >
                🎨 Home
              </button>
            </div>
          </div>
        )}

        {/* SPREAD SELECTION MODE */}
        {mode === 'spread' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center text-amber-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              🎴 Choose a Spread
            </h2>

            {spreads.map((spread) => (
              <div
                key={spread.id}
                onClick={() => startSpread(spread)}
                className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200 shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-[1.01]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-amber-800">{spread.name}</h3>
                    <p className="text-amber-600 text-sm">{spread.description}</p>
                  </div>
                  <div className="text-2xl font-bold text-amber-400">{spread.cards}</div>
                </div>
              </div>
            ))}

            <div className="text-center pt-4">
              <button
                onClick={goHome}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                🎨 Back to Home
              </button>
            </div>
          </div>
        )}

        {/* READING MODE */}
        {mode === 'reading' && selectedSpread && drawnCards.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
              🎴 {selectedSpread.name}
            </h2>
            <p className="text-center text-amber-600 text-sm">{selectedSpread.description}</p>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {drawnCards.map((card, index) => (
                <div key={card.id} className="text-center">
                  {/* Position Label */}
                  <div className="text-sm font-bold text-amber-700 mb-3 h-12 flex items-center justify-center px-2 max-w-[200px]">
                    {selectedSpread.positions[index]}
                  </div>

                  {/* Card - Same size as Daily Pull */}
                  <div
                    onClick={() => {
                      if (!revealedCards[index]) {
                        revealCard(index);
                      } else {
                        setSelectedCard(selectedCard?.id === card.id ? null : card);
                      }
                    }}
                    className={`w-40 h-60 mx-auto rounded-2xl shadow-xl cursor-pointer transition-all duration-500 ${
                      revealedCards[index]
                        ? `bg-gradient-to-br ${getSuitStyle(card.suit).light} border-4 ${selectedCard?.id === card.id ? 'border-amber-500 scale-105' : getSuitStyle(card.suit).border}`
                        : 'bg-gradient-to-br from-purple-600 via-orange-500 via-green-500 to-pink-500 hover:scale-105'
                    }`}
                  >
                    {!revealedCards[index] ? (
                      <div className="h-full flex flex-col items-center justify-center text-white p-4">
                        <div className="text-4xl mb-2">🎨</div>
                        <div className="text-sm font-bold">Creativity Coach</div>
                        <div className="text-xs mt-2 opacity-80">Tap to reveal</div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                        <div className={`text-base font-bold ${getSuitStyle(card.suit).text} leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
                          {card.name}
                        </div>
                        <div className={`text-xs mt-2 ${getSuitStyle(card.suit).accent}`}>
                          {card.suit === 'major' ? 'Major Arcana' : `${card.suit.charAt(0).toUpperCase() + card.suit.slice(1)}`}
                        </div>
                        <div className="text-xs mt-3 text-gray-500">Tap to read</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reveal All */}
            {!revealedCards.every(r => r) && (
              <div className="text-center">
                <button
                  onClick={revealAll}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all text-sm"
                >
                  Reveal All Cards
                </button>
              </div>
            )}

            {/* Selected Card Detail */}
            {selectedCard && revealedCards[drawnCards.findIndex(c => c.id === selectedCard.id)] && (
              <div className={`bg-white/90 rounded-2xl p-5 border-2 ${getSuitStyle(selectedCard.suit).border} shadow-lg`}>
                <div className="text-xs font-bold text-amber-600 mb-1 text-center uppercase tracking-wide">
                  {selectedSpread.positions[drawnCards.findIndex(c => c.id === selectedCard.id)]}
                </div>
                <h3 className={`text-lg font-bold ${getSuitStyle(selectedCard.suit).text} mb-3 text-center`} style={{ fontFamily: 'Georgia, serif' }}>
                  {selectedCard.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {selectedCard.meaning}
                </p>
                <div className={`bg-gradient-to-r ${getSuitStyle(selectedCard.suit).light} rounded-xl p-3 border ${getSuitStyle(selectedCard.suit).border}`}>
                  <p className={`text-xs font-bold ${getSuitStyle(selectedCard.suit).text} mb-1`}>Creativity Coach Nudge:</p>
                  <p className={`text-sm ${getSuitStyle(selectedCard.suit).accent} italic`}>{selectedCard.nudge}</p>
                </div>
              </div>
            )}

            {/* Prompt */}
            {revealedCards.every(r => r) && !selectedCard && (
              <div className="text-center text-amber-600 text-sm">
                ✨ Tap any card to read its message
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => startSpread(selectedSpread)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                🎴 New Reading
              </button>
              <button
                onClick={goHome}
                className="bg-white hover:bg-gray-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300 transition-all text-sm"
              >
                🎨 Home
              </button>
            </div>
          </div>
        )}

        {/* BROWSE MODE - Organized like Breakfast Tarot */}
        {mode === 'browse' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-purple-700 via-orange-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              ✨ Explore the Deck
            </h2>

            {/* Section Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'major', label: '✨ Major Arcana', color: 'from-purple-500 via-orange-500 to-pink-500' },
                { id: 'slumber', label: '💜 Slumber', color: 'from-purple-700 to-purple-500' },
                { id: 'play', label: '🧡 Play', color: 'from-orange-500 to-amber-400' },
                { id: 'joy', label: '💚 Joy', color: 'from-green-600 to-emerald-400' },
                { id: 'loveliness', label: '🩷 Loveliness', color: 'from-pink-600 to-fuchsia-400' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setBrowseSuit(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    browseSuit === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                      : 'bg-white/80 text-gray-600 border border-gray-200 hover:shadow-md'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Section Header */}
            <div className={`rounded-2xl p-4 border-2 ${
              browseSuit === 'major' ? 'bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50 border-purple-300' :
              browseSuit === 'slumber' ? 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300' :
              browseSuit === 'play' ? 'bg-gradient-to-br from-orange-100 to-amber-50 border-orange-300' :
              browseSuit === 'joy' ? 'bg-gradient-to-br from-green-100 to-emerald-50 border-green-300' :
              'bg-gradient-to-br from-pink-100 to-fuchsia-50 border-pink-300'
            }`}>
              <h3 className={`text-lg font-bold text-center mb-2 ${
                browseSuit === 'major' ? 'text-purple-800' :
                browseSuit === 'slumber' ? 'text-purple-800' :
                browseSuit === 'play' ? 'text-orange-800' :
                browseSuit === 'joy' ? 'text-green-800' :
                'text-pink-800'
              }`} style={{ fontFamily: 'Georgia, serif' }}>
                {browseSuit === 'major' && '✨ Major Arcana (22 Cards)'}
                {browseSuit === 'slumber' && '💜 Suit of Slumber (14 Cards)'}
                {browseSuit === 'play' && '🧡 Suit of Play (14 Cards)'}
                {browseSuit === 'joy' && '💚 Suit of Joy (14 Cards)'}
                {browseSuit === 'loveliness' && '🩷 Suit of Loveliness (14 Cards)'}
              </h3>
              <p className={`text-sm text-center ${
                browseSuit === 'major' ? 'text-purple-600' :
                browseSuit === 'slumber' ? 'text-purple-600' :
                browseSuit === 'play' ? 'text-orange-600' :
                browseSuit === 'joy' ? 'text-green-600' :
                'text-pink-600'
              }`}>
                {browseSuit === 'major' && 'The soul\'s creative journey from innocent yes to integrated wholeness'}
                {browseSuit === 'slumber' && 'Rest, reflection, restoration — the body and spirit'}
                {browseSuit === 'play' && 'Action, creativity, experimentation — the hands and will'}
                {browseSuit === 'joy' && 'Mindset, presence, positivity — the mind and thoughts'}
                {browseSuit === 'loveliness' && 'Beauty, appreciation, gratitude — the heart and emotions'}
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
                      ? `bg-gradient-to-br ${getSuitStyle(card.suit).light} border-2 ${getSuitStyle(card.suit).border} shadow-lg`
                      : 'bg-white/80 border border-gray-200 hover:shadow-md hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className={`font-bold ${getSuitStyle(card.suit).text}`} style={{ fontFamily: 'Georgia, serif' }}>
                      {card.name}
                    </div>
                    <div className={`text-xs ${getSuitStyle(card.suit).accent}`}>
                      {card.type === 'court' && '👑 Court'}
                      {card.type === 'major' && `${(card as any).number !== undefined ? (card as any).number : ''}`}
                    </div>
                  </div>
                  
                  {/* Expanded Card Detail */}
                  {selectedCard?.id === card.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        {card.meaning}
                      </p>
                      <div className={`bg-gradient-to-r ${getSuitStyle(card.suit).light} rounded-xl p-3 border ${getSuitStyle(card.suit).border}`}>
                        <p className={`text-xs font-bold ${getSuitStyle(card.suit).text} mb-1`}>Creativity Coach Nudge:</p>
                        <p className={`text-sm ${getSuitStyle(card.suit).accent} italic`}>{card.nudge}</p>
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
                className="bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 hover:from-purple-600 hover:via-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                🎨 Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Creativity Coach Collection */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-lg">
            <div className="text-2xl mb-2">🔮✨🕯️</div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              More Creativity Coach
            </h3>
            <p className="text-sm text-purple-600 mb-4">
              Continue your creative journey
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="/oracle-creativity"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md"
              >
                🔮 Oracle (33)
              </a>
              <a 
                href="/affirmations-creativity"
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md"
              >
                🕯️ Affirmations (33)
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-2 text-xl">
            <span>💜</span>
            <span>🧡</span>
            <span>💚</span>
            <span>🩷</span>
            <span>🎨</span>
          </div>
          <p className="text-amber-600 text-sm italic">
            "This deck supports your creativity."
          </p>
          <p className="text-amber-500 text-xs">
            Part of the Breakfast Tarot Family 🥞
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/" className="text-amber-700 hover:text-amber-900 underline">Daily Tarot</a>
            <span className="text-amber-400">•</span>
            <a href="/oracle" className="text-amber-700 hover:text-amber-900 underline">Breakfast Oracle</a>
            <span className="text-amber-400">•</span>
            <a href="/affirmations" className="text-amber-700 hover:text-amber-900 underline">Breakfast Affirmations</a>
          </div>
          <div className="text-xs text-gray-500 pt-2">
            © 2026 Breakfast Tarot. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
