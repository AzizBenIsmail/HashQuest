const translations = {
  en: {
    nav: { overview: 'Overview', library: 'Question library', categories: 'Categories', favorites: 'Favorites' },
    eyebrow: 'Your Web3 learning journey',
    welcome: 'Learn the network behind the network.',
    intro: 'Explore Hedera, Web3 and distributed systems through questions built for understanding, not memorization.',
    explore: 'Explore questions',
    random: 'Surprise me',
    stats: { questions: 'Questions', categories: 'Categories', beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', explored: 'Explored' },
    featured: 'Continue your learning',
    featuredText: 'One thoughtful question at a time. Copy it, ask Hashcare, and make the concept yours.',
    openLibrary: 'Open library',
    categoriesTitle: 'Choose a direction',
    categoriesText: 'Build your foundations, then go deeper into Hedera services and architecture.',
    questionOf: 'Question of the moment',
    copy: 'Copy question', copied: 'Question copied', ask: 'Ask Hashcare', next: 'Next question', save: 'Save', saved: 'Saved',
    libraryTitle: 'Question library', libraryText: 'Find the next concept worth understanding.', search: 'Search questions, topics, tags...', all: 'All', noResults: 'No questions match your search.',
    questions: 'questions', exploreCategory: 'Explore', favoritesTitle: 'Your saved questions', favoritesText: 'Keep the concepts you want to revisit close at hand.', noFavorites: 'Your library is waiting for its first saved question.',
    onboardingTitle: 'Welcome to HashQuest', onboardingText: 'A calm place to build real Web3 understanding.', step: 'Step', start: 'Start exploring', close: 'Close', language: 'Language',
    types: { definition: 'Definition', comparison: 'Comparison', reasoning: 'Reasoning', scenario: 'Real-world scenario', development: 'Development' },
    difficulty: { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Advanced' },
    history: 'questions explored', reset: 'Reset progress'
  },
  fr: {
    nav: { overview: 'Vue d’ensemble', library: 'Bibliothèque', categories: 'Catégories', favorites: 'Favoris' },
    eyebrow: 'Votre parcours d’apprentissage Web3',
    welcome: 'Comprendre le réseau derrière le réseau.',
    intro: 'Explorez Hedera, le Web3 et les systèmes distribués avec des questions conçues pour comprendre, pas pour réciter.',
    explore: 'Explorer les questions', random: 'Une question au hasard',
    stats: { questions: 'Questions', categories: 'Catégories', beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé', explored: 'Explorées' },
    featured: 'Continuez votre apprentissage', featuredText: 'Une question à la fois. Copiez-la, demandez à Hashcare et faites du concept votre propre compréhension.', openLibrary: 'Ouvrir la bibliothèque',
    categoriesTitle: 'Choisissez une direction', categoriesText: 'Construisez vos bases, puis plongez dans les services et l’architecture Hedera.', questionOf: 'Question du moment',
    copy: 'Copier la question', copied: 'Question copiée', ask: 'Demander à Hashcare', next: 'Question suivante', save: 'Enregistrer', saved: 'Enregistrée',
    libraryTitle: 'Bibliothèque de questions', libraryText: 'Trouvez le prochain concept à comprendre.', search: 'Rechercher une question, un sujet, un tag...', all: 'Toutes', noResults: 'Aucune question ne correspond à votre recherche.',
    questions: 'questions', exploreCategory: 'Explorer', favoritesTitle: 'Vos questions enregistrées', favoritesText: 'Gardez près de vous les concepts à revoir.', noFavorites: 'Votre bibliothèque attend sa première question enregistrée.',
    onboardingTitle: 'Bienvenue dans HashQuest', onboardingText: 'Un espace calme pour construire une vraie compréhension du Web3.', step: 'Étape', start: 'Commencer à explorer', close: 'Fermer', language: 'Langue',
    types: { definition: 'Définition', comparison: 'Comparaison', reasoning: 'Raisonnement', scenario: 'Cas réel', development: 'Développement' },
    difficulty: { Beginner: 'Débutant', Intermediate: 'Intermédiaire', Advanced: 'Avancé' }, history: 'questions explorées', reset: 'Réinitialiser la progression'
  },
  ar: {
    nav: { overview: 'نظرة عامة', library: 'مكتبة الأسئلة', categories: 'الفئات', favorites: 'المفضلة' },
    eyebrow: 'رحلتك التعليمية في Web3', welcome: 'تعلّم الشبكة التي تقف خلف الشبكة.',
    intro: 'استكشف Hedera وWeb3 والأنظمة الموزعة من خلال أسئلة تساعدك على الفهم لا على الحفظ.', explore: 'استكشف الأسئلة', random: 'سؤال عشوائي',
    stats: { questions: 'الأسئلة', categories: 'الفئات', beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم', explored: 'تم استكشافها' },
    featured: 'واصل رحلة التعلم', featuredText: 'سؤال واحد في كل مرة. انسخه، واسأل Hashcare، واجعل المفهوم جزءاً من فهمك.', openLibrary: 'افتح المكتبة',
    categoriesTitle: 'اختر مسارك', categoriesText: 'ابنِ أساسياتك ثم تعمّق في خدمات وبنية Hedera.', questionOf: 'سؤال اللحظة',
    copy: 'نسخ السؤال', copied: 'تم نسخ السؤال', ask: 'اسأل Hashcare', next: 'السؤال التالي', save: 'حفظ', saved: 'تم الحفظ',
    libraryTitle: 'مكتبة الأسئلة', libraryText: 'اعثر على المفهوم التالي الذي يستحق الفهم.', search: 'ابحث في الأسئلة والمواضيع والوسوم...', all: 'الكل', noResults: 'لا توجد أسئلة تطابق بحثك.',
    questions: 'أسئلة', exploreCategory: 'استكشف', favoritesTitle: 'أسئلتك المحفوظة', favoritesText: 'احتفظ بالمفاهيم التي تريد مراجعتها بالقرب منك.', noFavorites: 'مكتبتك بانتظار أول سؤال محفوظ.',
    onboardingTitle: 'مرحباً بك في HashQuest', onboardingText: 'مساحة هادئة لبناء فهم حقيقي لـ Web3.', step: 'الخطوة', start: 'ابدأ الاستكشاف', close: 'إغلاق', language: 'اللغة',
    types: { definition: 'تعريف', comparison: 'مقارنة', reasoning: 'تحليل', scenario: 'سيناريو واقعي', development: 'تطوير' },
    difficulty: { Beginner: 'مبتدئ', Intermediate: 'متوسط', Advanced: 'متقدم' }, history: 'أسئلة تم استكشافها', reset: 'إعادة ضبط التقدم'
  }
};

export default translations;
