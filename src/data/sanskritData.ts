/**
 * Verified Sanskrit Knowledge Base for Sanskrit Setu
 * All verses and aphorisms are sourced directly from classical texts with scholarly attributions.
 */

export interface WordAnalysis {
  word: string;
  transliteration: string;
  grammar: string;
  meaning: string;
}

export interface SanskritEntry {
  id: string;
  category: 'Vedas' | 'Upanishads' | 'Ayurveda' | 'Yoga' | 'Indian Philosophy' | 'Subhashitas';
  type: 'Shloka' | 'Mahavakya' | 'Sutra' | 'Term';
  title: string;
  devanagari: string;
  iast: string;
  hindi: string;
  english: string;
  source: string;
  sourceDe: string;
  philosophicalContext: string;
  breakdown: WordAnalysis[];
  tags: string[];
}

export interface CategoryInfo {
  id: 'Vedas' | 'Upanishads' | 'Ayurveda' | 'Yoga' | 'Indian Philosophy';
  devanagariName: string;
  englishName: string;
  subtitle: string;
  period: string;
  description: string;
  keyTreatises: string[];
  coreConcepts: string[];
  featuredQuote: {
    devanagari: string;
    iast: string;
    translation: string;
    source: string;
  };
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'Vedas',
    devanagariName: 'वेद',
    englishName: 'Vedas',
    subtitle: 'श्रुति साहित्य · The Foundational Revelations',
    period: 'c. 1500 BCE – 1000 BCE',
    description: 'The four Vedas (Rigveda, Samaveda, Yajurveda, and Atharvaveda) constitute the fountainhead of Indian civilization. Composed in Vedic Sanskrit, they preserve cosmic hymns, sacrificial mathematics, musical meters (Sāma), and empirical sciences handed down through millennium-tested oral recitation systems (Ghana and Jata Patha).',
    keyTreatises: ['Rigveda Samhita', 'Samaveda Samhita', 'Shukla Yajurveda', 'Atharvaveda Samhita'],
    coreConcepts: ['Rta (Cosmic Order)', 'Yajna (Sacred Reciprocity)', 'Chhandas (Poetic Meter)', 'Vak (Sacred Speech)'],
    featuredQuote: {
      devanagari: 'एकं सद् विप्रा बहुधा वदन्ति ।',
      iast: 'ekaṁ sad viprā bahudhā vadanti |',
      translation: 'Truth is one; the wise call it by many names.',
      source: 'Rigveda 1.164.46'
    }
  },
  {
    id: 'Upanishads',
    devanagariName: 'उपनिषद्',
    englishName: 'Upanishads',
    subtitle: 'वेदान्त दर्शन · The Philosophical Summits',
    period: 'c. 800 BCE – 500 BCE',
    description: 'The philosophical core of the Vedic corpus, marking the transition from ritualism to profound self-inquiry (Atma-Jnana). They explore the non-dual relationship between the individual consciousness (Atman) and the supreme cosmic ground of being (Brahman) through master-disciple dialogues.',
    keyTreatises: ['Brihadaranyaka Upanishad', 'Chandogya Upanishad', 'Katha Upanishad', 'Mundaka Upanishad', 'Mandukya Upanishad'],
    coreConcepts: ['Brahman (Ultimate Reality)', 'Atman (Inner Self)', 'Moksha (Liberation)', 'Maya (Phenomenal Appearance)'],
    featuredQuote: {
      devanagari: 'तत्त्वमसि श्वेतकेतो इति ।',
      iast: 'tat tvam asi śvetaketo iti |',
      translation: 'That Thou Art, O Shvetaketu.',
      source: 'Chandogya Upanishad 6.8.7'
    }
  },
  {
    id: 'Ayurveda',
    devanagariName: 'आयुर्वेद',
    englishName: 'Ayurveda',
    subtitle: 'आयुर्विज्ञान · The Science of Life & Longevity',
    period: 'c. 600 BCE onwards',
    description: 'Regarded as an Upaveda of Atharvaveda, Ayurveda is India’s comprehensive system of medicine and holistic wellness. It synthesizes diet (Ahara), lifestyle (Vihara), seasonal alignment (Ritucharya), pharmacology (Dravyaguna), and surgical procedures with psychosomatic equilibrium.',
    keyTreatises: ['Charaka Samhita', 'Sushruta Samhita', 'Ashtanga Hridaya (Vagbhata)', 'Bhavaprakasha'],
    coreConcepts: ['Tridosha (Vata, Pitta, Kapha)', 'Sapta Dhatu (Seven Tissues)', 'Agni (Metabolic Fire)', 'Dinacharya (Daily Regimen)'],
    featuredQuote: {
      devanagari: 'शरीरमाद्यं खलु धर्मसाधनम् ।',
      iast: 'śarīramādyaṁ khalu dharmasādhanam |',
      translation: 'The body is indeed the prime instrument for fulfilling sacred duty.',
      source: 'Kalidasa, Kumarasambhava 5.33 & Charaka Samhita'
    }
  },
  {
    id: 'Yoga',
    devanagariName: 'योग',
    englishName: 'Yoga',
    subtitle: 'योग दर्शन · The Discipline of Mind & Consciousness',
    period: 'c. 400 BCE – 200 CE',
    description: 'Codified by Sage Patanjali in the Yoga Sutras, Yoga is the experiential science of mental stilling and inner realization. Through the eight-limbed path (Ashtanga Yoga), the practitioner dissolves afflictive mental modifications (Kleshas) to abide in the pristine seer (Drashtu Svarupe Avasthanam).',
    keyTreatises: ['Patanjali Yoga Sutras', 'Bhagavad Gita (Yogashastra)', 'Hatha Yoga Pradipika', 'Gheranda Samhita'],
    coreConcepts: ['Chitta-Vritti-Nirodha (Cessation of Mental Fluctuations)', 'Ashtanga Yoga (8 Limbs)', 'Abhyasa & Vairagya', 'Samadhi'],
    featuredQuote: {
      devanagari: 'योगश्चित्तवृत्तिनिरोधः ॥',
      iast: 'yogaś cittavṛttinirodhaḥ ||',
      translation: 'Yoga is the cessation of the fluctuations of the mind.',
      source: 'Patanjali Yoga Sutras 1.2'
    }
  },
  {
    id: 'Indian Philosophy',
    devanagariName: 'षड्दर्शन',
    englishName: 'Indian Philosophy',
    subtitle: 'षड्दर्शनम् · The Six Classical Systems of Logic & Truth',
    period: 'c. 600 BCE – 1200 CE',
    description: 'The Shad Darshanas represent India’s orthodox intellectual schools of epistemology and metaphysics: Samkhya (dualist cosmology), Yoga (consciousness science), Nyaya (epistemology and formal logic), Vaisheshika (atomic natural philosophy), Mimamsa (hermeneutics), and Vedanta (non-dualism and transcendence).',
    keyTreatises: ['Nyaya Sutras (Gautama)', 'Vaisheshika Sutras (Kanada)', 'Brahma Sutras (Badarayana)', 'Samkhya Karika (Ishvarakrishna)'],
    coreConcepts: ['Pramana (Valid Means of Knowledge)', 'Padartha (Categories of Existence)', 'Karya-Karana (Causality)', 'Anumana (Logical Inference)'],
    featuredQuote: {
      devanagari: 'प्रत्यक्षावगतं ह्येतत् तर्कतोऽपि समर्थितम् ।',
      iast: 'pratyakṣāvagataṁ hyetat tarkato\'pi samarthitam |',
      translation: 'What is perceived directly through experience is further substantiated through rigorous dialectical reasoning.',
      source: 'Nyaya Bhashya 1.1.1'
    }
  }
];

export const SANSKRIT_ENTRIES: SanskritEntry[] = [
  {
    id: 'satyameva-jayate',
    category: 'Upanishads',
    type: 'Mahavakya',
    title: 'Satyameva Jayate (सत्यमेव जयते)',
    devanagari: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ।',
    iast: 'satyameva jayate nānṛtaṁ satyena panthā vitato devayānaḥ |',
    hindi: 'सत्य की ही विजय होती है, असत्य की नहीं। सत्य से ही वह दिव्य मार्ग प्रशस्त होता है जिस पर चलकर ऋषिगण परम पद प्राप्त करते हैं।',
    english: 'Truth alone triumphs, not falsehood. Through truth divine path is unfolded by which the sages attain the supreme abode.',
    source: 'Mundaka Upanishad 3.1.6 (मुण्डकोपनिषत्)',
    sourceDe: 'मुण्डकोपनिषत् ३.१.६',
    philosophicalContext: 'Adopted as the national motto of the Republic of India upon independence in 1950. In Vedic ontology, Satya (Truth) is not merely moral veracity, but alignment with Rta (the cosmic structural order).',
    breakdown: [
      { word: 'सत्यम्', transliteration: 'satyam', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Truth, absolute reality' },
      { word: 'एव', transliteration: 'eva', grammar: 'Indeclinable (Avyaya)', meaning: 'Alone, verily, only' },
      { word: 'जयते', transliteration: 'jayate', grammar: 'Verb (Pres. 3rd Sg. Atmanepada)', meaning: 'Triumphs, is victorious' },
      { word: 'न', transliteration: 'na', grammar: 'Negative Particle', meaning: 'Not' },
      { word: 'अनृतम्', transliteration: 'anṛtam', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Falsehood, untruth' },
      { word: 'विततः', transliteration: 'vitataḥ', grammar: 'Past Passive Participle', meaning: 'Stretched out, paved' }
    ],
    tags: ['truth', 'upanishads', 'motto', 'ethics', 'devayana']
  },
  {
    id: 'vasudhaiva-kutumbakam',
    category: 'Subhashitas',
    type: 'Shloka',
    title: 'Vasudhaiva Kutumbakam (वसुधैव कुटुम्बकम्)',
    devanagari: 'अयं निजः परो वेति गणना लघुचेतसाम् ।\nउदारचरितानां तु वसुधैव कुटुम्बकम् ॥',
    iast: 'ayaṁ nijaḥ paro veti gaṇanā laghucetasām |\nudāracaritānāṁ tu vasudhaiva kuṭumbakam ||',
    hindi: 'यह मेरा है और वह पराया है, ऐसी संकीर्ण गणना छोटे मन वाले करते हैं। उदार हृदय वाले महापुरुषों के लिए तो यह संपूर्ण पृथ्वी ही एक परिवार है।',
    english: 'This is mine and that belongs to another—such discrimination is made only by narrow minds. For the noble-hearted, the whole earth is one single family.',
    source: 'Maha Upanishad 6.71-72 & Hitopadesha 1.3.71 (महोपनिषत्)',
    sourceDe: 'महोपनिषत् ६.७१-७२',
    philosophicalContext: 'This verse embodies the highest civilizational ideal of universal brotherhood and global empathy in Indian Knowledge Systems. It was selected as the unifying theme of India\'s G20 Presidency: One Earth, One Family, One Future.',
    breakdown: [
      { word: 'अयम्', transliteration: 'ayam', grammar: 'Pronoun (Masc. Nom. Sg.)', meaning: 'This one' },
      { word: 'निजः', transliteration: 'nijaḥ', grammar: 'Adjective', meaning: 'One\'s own, my kin' },
      { word: 'परः', transliteration: 'paraḥ', grammar: 'Adjective', meaning: 'A stranger, other' },
      { word: 'लघुचेतसाम्', transliteration: 'laghu-cetasām', grammar: 'Compound (Gen. Pl.)', meaning: 'Of the narrow-minded' },
      { word: 'उदारचरितानाम्', transliteration: 'udāra-caritānām', grammar: 'Compound (Gen. Pl.)', meaning: 'Of noble character' },
      { word: 'वसुधा', transliteration: 'vasudhā', grammar: 'Noun (Fem. Nom. Sg.)', meaning: 'The Earth' },
      { word: 'कुटुम्बकम्', transliteration: 'kuṭumbakam', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Family, household' }
    ],
    tags: ['harmony', 'subhashita', 'g20', 'universalism', 'peace']
  },
  {
    id: 'karmanyevadhikaraste',
    category: 'Indian Philosophy',
    type: 'Shloka',
    title: 'Nishkama Karma (कर्मण्येवाधिकारस्ते)',
    devanagari: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    iast: 'karmaṇyevādhikāraste mā phaleṣu kadācana |\nmā karmaphalaheturbhūrmā te saṅgo\'stvakarmaṇi ||',
    hindi: 'तुम्हारा अधिकार केवल कर्म करने में ही है, उसके फलों में कभी नहीं। इसलिए कर्म के फल के प्रति आसक्त मत बनो और न ही अकर्मण्यता (कर्म न करने) में तुम्हारी रुचि हो।',
    english: 'You have a right only to work, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.',
    source: 'Bhagavad Gita 2.47 (श्रीमद्भगवद्गीता २.४७)',
    sourceDe: 'श्रीमद्भगवद्गीता २.४७',
    philosophicalContext: 'The core formulation of Karma Yoga. It asserts that psychological equanimity and optimal performance are achieved when mental energy is focused wholly on duty rather than dissipative anxiety about outcomes.',
    breakdown: [
      { word: 'कर्मणि', transliteration: 'karmaṇi', grammar: 'Noun (Locative Sg.)', meaning: 'In action, in duty' },
      { word: 'अधिकारः', transliteration: 'adhikāraḥ', grammar: 'Noun (Nom. Sg.)', meaning: 'Right, jurisdiction' },
      { word: 'ते', transliteration: 'te', grammar: 'Pronoun (Genitive)', meaning: 'Your, of you' },
      { word: 'फलेषु', transliteration: 'phaleṣu', grammar: 'Noun (Locative Pl.)', meaning: 'In the fruits/results' },
      { word: 'कदाचन', transliteration: 'kadācana', grammar: 'Indeclinable', meaning: 'At any time, ever' },
      { word: 'अकर्मणि', transliteration: 'akarmaṇi', grammar: 'Noun (Locative Sg.)', meaning: 'In inaction, lethargy' }
    ],
    tags: ['gita', 'karma', 'philosophy', 'duty', 'mindset']
  },
  {
    id: 'sarve-bhavantu-sukhinah',
    category: 'Vedas',
    type: 'Shloka',
    title: 'Sarve Bhavantu Sukhinah (सर्वे भवन्तु सुखिनः)',
    devanagari: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥',
    iast: 'sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ |\nsarve bhadrāṇi paśyantu mā kaścidduḥkhabhāgbhavet ||',
    hindi: 'सभी प्राणी सुखी हों, सभी रोगमुक्त और स्वस्थ हों, सभी मंगलमय घटनाओं और कल्याण को देखें, और कोई भी दुःख का भागी न बने।',
    english: 'May all sentient beings be happy, may all be free from illness and distress. May all behold auspiciousness everywhere, may no one suffer any sorrow.',
    source: 'Brihadaranyaka Upanishad Shanti Patha & Garuda Purana (शान्ति पाठ)',
    sourceDe: 'बृहदारण्यकोपनिषत् शान्तिपाठ',
    philosophicalContext: 'The timeless universal benediction chanted at the conclusion of Vedic discourses. It expresses an unconditional, non-sectarian prayer for the physical and spiritual wellness of all living entities.',
    breakdown: [
      { word: 'सर्वे', transliteration: 'sarve', grammar: 'Pronoun (Masc. Nom. Pl.)', meaning: 'All, everyone' },
      { word: 'भवन्तु', transliteration: 'bhavantu', grammar: 'Verb (Imperative 3rd Pl.)', meaning: 'May they be/become' },
      { word: 'सुखिनः', transliteration: 'sukhinaḥ', grammar: 'Adjective (Nom. Pl.)', meaning: 'Happy, joyful' },
      { word: 'निरामयाः', transliteration: 'nirāmayāḥ', grammar: 'Compound Adjective', meaning: 'Free from sickness, wholesome' },
      { word: 'भद्राणि', transliteration: 'bhadrāṇi', grammar: 'Noun (Acc. Pl.)', meaning: 'Auspicious things, good' },
      { word: 'दुःखभाक्', transliteration: 'duḥkha-bhāk', grammar: 'Compound Noun', meaning: 'Partaker of grief' }
    ],
    tags: ['prayer', 'shanti', 'wellness', 'universal', 'peace']
  },
  {
    id: 'asato-ma-sadgamaya',
    category: 'Upanishads',
    type: 'Shloka',
    title: 'Pavamana Mantra (असतो मा सद्गमय)',
    devanagari: 'ॐ असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
    iast: 'oṁ asato mā sadgamaya |\ntamaso mā jyotirgamaya |\nmṛtyormā amṛtaṁ gamaya ||\noṁ śāntiḥ śāntiḥ śāntiḥ ||',
    hindi: 'हे परमात्मा, मुझे असत्य (मिथ्या प्रपंच) से सत्य (शाश्वत तत्व) की ओर ले चलें। मुझे अज्ञान रूपी अंधकार से ज्ञान रूपी प्रकाश की ओर ले चलें। मुझे मृत्यु (नश्वरता) से अमरता (मोक्ष) की ओर ले चलें।',
    english: 'Om, lead me from the unreal to the real. Lead me from the darkness of ignorance to the light of knowledge. Lead me from death to immortality. Om Peace, Peace, Peace.',
    source: 'Brihadaranyaka Upanishad 1.3.28 (बृहदारण्यकोपनिषत् १.३.२८)',
    sourceDe: 'बृहदारण्यकोपनिषत् १.३.२८',
    philosophicalContext: 'The Pavamana Mantra is one of the profoundest invocations in the Upanishads. Asat refers to transient, illusory phenomena; Sat is the changeless underlying ground of existence.',
    breakdown: [
      { word: 'असतह्', transliteration: 'asataḥ', grammar: 'Noun (Ablative Sg.)', meaning: 'From untruth, from the unreal' },
      { word: 'मा', transliteration: 'mā', grammar: 'Pronoun (Accusative)', meaning: 'Me' },
      { word: 'सत्', transliteration: 'sat', grammar: 'Noun (Accusative Sg.)', meaning: 'To truth, to real existence' },
      { word: 'गमय', transliteration: 'gamaya', grammar: 'Causative Verb (Imp. 2nd Sg.)', meaning: 'Cause to go, lead' },
      { word: 'तमसह्', transliteration: 'tamasaḥ', grammar: 'Noun (Ablative Sg.)', meaning: 'From darkness/ignorance' },
      { word: 'ज्योतिः', transliteration: 'jyotiḥ', grammar: 'Noun (Accusative Sg.)', meaning: 'To light/illumination' },
      { word: 'अमृतम्', transliteration: 'amṛtam', grammar: 'Noun (Accusative Sg.)', meaning: 'To immortality' }
    ],
    tags: ['mantra', 'upanishad', 'light', 'truth', 'immortality']
  },
  {
    id: 'yogas-citta-vritti-nirodhah',
    category: 'Yoga',
    type: 'Sutra',
    title: 'Defintion of Yoga (योगश्चित्तवृत्तिनिरोधः)',
    devanagari: 'योगश्चित्तवृत्तिनिरोधः ॥',
    iast: 'yogaś cittavṛttinirodhaḥ ||',
    hindi: 'चित्त (मन, बुद्धि और अहंकार) की वृत्तियों (विचार तरंगों) का निरोध (पूर्ण विराम अथवा शांत होना) ही योग है।',
    english: 'Yoga is the intentional restraint and cessation of the fluctuations of consciousness.',
    source: 'Patanjali Yoga Sutras 1.2 (पातञ्जलयोगसूत्रम् १.२)',
    sourceDe: 'पातञ्जलयोगसूत्रम् १.२',
    philosophicalContext: 'The foundational definition of Yoga in Indian philosophy. When mental noise calms, the witness consciousness (Purusha) rests in its intrinsic radiant nature rather than identifying with turbulent mental patterns.',
    breakdown: [
      { word: 'योगः', transliteration: 'yogaḥ', grammar: 'Noun (Nom. Sg.)', meaning: 'Yoga, supreme union' },
      { word: 'चित्त', transliteration: 'citta', grammar: 'Compound Element', meaning: 'Mind-field, consciousness' },
      { word: 'वृत्ति', transliteration: 'vṛtti', grammar: 'Compound Element', meaning: 'Modifications, thought-waves' },
      { word: 'निरोधः', transliteration: 'nirodhaḥ', grammar: 'Noun (Nom. Sg.)', meaning: 'Restraint, cessation, stilling' }
    ],
    tags: ['yoga', 'patanjali', 'meditation', 'mind', 'sutra']
  },
  {
    id: 'yogah-karmasu-kaushalam',
    category: 'Yoga',
    type: 'Shloka',
    title: 'Yoga is Skill in Action (योगः कर्मसु कौशलम्)',
    devanagari: 'बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते ।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥',
    iast: 'buddhiyukto jahātīha ubhe sukṛtaduṣkṛte |\ntasmādyogāya yujyasva yogaḥ karmasu kauśalam ||',
    hindi: 'समत्व बुद्धि से युक्त मनुष्य इस लोक में पुण्य और पाप दोनों को त्याग देता है। इसलिए तुम योग में स्थित हो जाओ; कर्मों में कुशलता (निपुणता) ही योग है।',
    english: 'Endowed with wisdom and equanimity, one casts off both good and evil deeds in this world. Therefore dedicate yourself to Yoga; Yoga is dexterous skill and excellence in action.',
    source: 'Bhagavad Gita 2.50 (श्रीमद्भगवद्गीता २.५०)',
    sourceDe: 'श्रीमद्भगवद्गीता २.५०',
    philosophicalContext: 'A key civilizational definition: Yoga is not merely seated contemplation, but the highest standard of artistic, cognitive, and ethical mastery brought to one\'s vocational duty.',
    breakdown: [
      { word: 'योगः', transliteration: 'yogaḥ', grammar: 'Noun (Nom. Sg.)', meaning: 'Yoga, equanimity' },
      { word: 'कर्मसु', transliteration: 'karmasu', grammar: 'Noun (Locative Pl.)', meaning: 'In actions, in duties' },
      { word: 'कौशलम्', transliteration: 'kauśalam', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Skill, dexterity, artistry' }
    ],
    tags: ['excellence', 'action', 'gita', 'work ethic', 'yoga']
  },
  {
    id: 'shariramadhyam-dharma-sadhanam',
    category: 'Ayurveda',
    type: 'Shloka',
    title: 'The Body as Instrument of Dharma (शरीरमाद्यं खलु धर्मसाधनम्)',
    devanagari: 'शरीरमाद्यं खलु धर्मसाधनम् ।',
    iast: 'śarīramādyaṁ khalu dharmasādhanam |',
    hindi: 'निश्चय ही यह मानव शरीर सभी धर्मों, कर्तव्यों और साधनाओं को सिद्ध करने का प्रथम और मूल साधन है।',
    english: 'The physical body is indeed the foremost and primordial instrument for fulfilling one\'s sacred duties (Dharma).',
    source: 'Kalidasa, Kumarasambhava 5.33 & Charaka Samhita (कुमारसम्भवम् ५.३३)',
    sourceDe: 'कुमारसम्भवम् ५.३३',
    philosophicalContext: 'Revered across classical Indian medical science and literary tradition. It establishes physical vigor, nutrition, and mental health not as ends in themselves, but as the indispensable prerequisite for ethical living.',
    breakdown: [
      { word: 'शरीरम्', transliteration: 'śarīram', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Body, physical vessel' },
      { word: 'आद्यम्', transliteration: 'ādyam', grammar: 'Adjective (Neut. Nom. Sg.)', meaning: 'Foremost, primary, prime' },
      { word: 'खलु', transliteration: 'khalu', grammar: 'Indeclinable', meaning: 'Verily, indeed' },
      { word: 'धर्मसाधनम्', transliteration: 'dharma-sādhanam', grammar: 'Compound (Neut. Nom. Sg.)', meaning: 'Means of fulfilling Dharma' }
    ],
    tags: ['ayurveda', 'health', 'body', 'dharma', 'vitality']
  },
  {
    id: 'hitahitam-sukham-duhkham',
    category: 'Ayurveda',
    type: 'Term',
    title: 'Definition of Ayurveda (हिताहितं सुखं दुःखमायुस्तस्य)',
    devanagari: 'हिताहितं सुखं दुःखमायुस्तस्य हिताहितम् ।\nमानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते ॥',
    iast: 'hitāhitaṁ sukhaṁ duḥkhamāyustasya hitāhitam |\nmānaṁ ca tacca yatroktamāyurvedaḥ sa ucyate ||',
    hindi: 'जिस शास्त्र में हितकारी (स्वास्थ्यप्रद) और अहितकारी (हानिकारक), सुखमय और दुखमय जीवन, तथा आयु के प्रमाण और स्वरूप का विस्तार से विवेचन किया गया है, उसे ही आयुर्वेद कहा जाता है।',
    english: 'That wisdom discipline wherein is expounded what is wholesome and unwholesome, happy and unhappy life, along with the measure and qualitative nature of lifespan—that is called Ayurveda.',
    source: 'Charaka Samhita Sutrasthana 1.41 (चरकसंहिता सूत्रस्थान १.४१)',
    sourceDe: 'चरकसंहिता १.४१',
    philosophicalContext: 'The seminal canonical definition of Ayurveda given by Sage Charaka. It distinguishes between merely living long and living a wholesome (Hita) and joyful (Sukha) life oriented toward cosmic harmony.',
    breakdown: [
      { word: 'हित', transliteration: 'hita', grammar: 'Compound', meaning: 'Wholesome, beneficial' },
      { word: 'अहितम्', transliteration: 'ahitam', grammar: 'Compound', meaning: 'Unwholesome, harmful' },
      { word: 'सुखम्', transliteration: 'sukham', grammar: 'Compound', meaning: 'Happy, tranquil' },
      { word: 'आयुः', transliteration: 'āyuḥ', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Life, lifespan' },
      { word: 'आयुर्वेदः', transliteration: 'āyurvedaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'The science of longevity' }
    ],
    tags: ['ayurveda', 'charaka', 'longevity', 'wholesome', 'medicine']
  },
  {
    id: 'aham-brahmasmi',
    category: 'Upanishads',
    type: 'Mahavakya',
    title: 'Aham Brahmasmi (अहं ब्रह्मास्मि)',
    devanagari: 'अहं ब्रह्मास्मि ॥',
    iast: 'ahaṁ brahmāsmi ||',
    hindi: 'मैं ही वह परब्रह्म हूँ (मेरी अन्तरात्मा और यह सम्पूर्ण ब्रह्माण्ड एक ही अद्वैत चैतन्य तत्व हैं)।',
    english: 'I am Brahman (the non-dual Supreme Consciousness).',
    source: 'Brihadaranyaka Upanishad 1.4.10 (यजुर्वेद - बृहदारण्यकोपनिषत्)',
    sourceDe: 'बृहदारण्यकोपनिषत् १.४.१०',
    philosophicalContext: 'One of the Great Vedic Dicta (Chathur Mahavakyas), belonging to the Shukla Yajurveda. It signifies the experiential realization that the individual consciousness is non-different from the infinite substrate of reality.',
    breakdown: [
      { word: 'अहम्', transliteration: 'aham', grammar: 'Pronoun (1st Person Nom.)', meaning: 'I' },
      { word: 'ब्रह्म', transliteration: 'brahma', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Brahman, Absolute Reality' },
      { word: 'अस्मि', transliteration: 'asmi', grammar: 'Verb (Pres. 1st Sg. Parasmaipada)', meaning: 'Am, exist as' }
    ],
    tags: ['mahavakya', 'advaita', 'upanishad', 'consciousness', 'vedanta']
  },
  {
    id: 'ahimsa-paramo-dharmah',
    category: 'Indian Philosophy',
    type: 'Shloka',
    title: 'Ahimsa Paramo Dharmah (अहिंसा परमो धर्मः)',
    devanagari: 'अहिंसा परमो धर्मस्तथाहिंसा परं दमः ।\nअहिंसा परमं दानमहिंसा परमं तपः ॥',
    iast: 'ahiṁsā paramo dharmastathāhiṁsā paraṁ damaḥ |\nahiṁsā paramaṁ dānamahiṁsā paramaṁ tapaḥ ||',
    hindi: 'अहिंसा ही परम धर्म है, अहिंसा ही श्रेष्ठ संयम है, अहिंसा ही परम दान है और अहिंसा ही सर्वोच्च तपस्या है।',
    english: 'Non-injury (Ahimsa) is the supreme virtue and duty; non-injury is the highest self-restraint; non-injury is the greatest charity and the most sublime austerity.',
    source: 'Mahabharata, Anushasana Parva 115.25 (महाभारत अनु Ready)',
    sourceDe: 'महाभारत अनुशासनपर्व ११५.२५',
    philosophicalContext: 'A foundational axiom uniting Nyaya, Vedanta, Yoga, Jainism, and Buddhism. Ahimsa means the absence of malice and harmful intent across thought (Manas), speech (Vak), and action (Kaya).',
    breakdown: [
      { word: 'अहिंसा', transliteration: 'ahiṁsā', grammar: 'Noun (Fem. Nom. Sg.)', meaning: 'Non-violence, absence of harm' },
      { word: 'परमः', transliteration: 'paramaḥ', grammar: 'Adjective (Masc. Nom. Sg.)', meaning: 'Highest, supreme' },
      { word: 'धर्मः', transliteration: 'dharmaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'Duty, ethical virtue' },
      { word: 'दमः', transliteration: 'damaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'Self-control, restraint' },
      { word: 'तपः', transliteration: 'tapaḥ', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Austerity, spiritual heat' }
    ],
    tags: ['ahimsa', 'peace', 'virtue', 'mahabharata', 'ethics']
  },
  {
    id: 'yato-dharmastato-jayah',
    category: 'Indian Philosophy',
    type: 'Term',
    title: 'Yato Dharmastato Jayah (यतो धर्मस्ततो जयः)',
    devanagari: 'यतो धर्मस्ततो जयः ॥',
    iast: 'yato dharmastato jayaḥ ||',
    hindi: 'जहाँ धर्म (सत्य, न्याय और कर्तव्यपरायणता) है, वहीं विजय सुनिश्चित है।',
    english: 'Where there is righteousness and cosmic order (Dharma), there lies inevitable victory.',
    source: 'Mahabharata & Motto of the Supreme Court of India (यतो धर्मस्ततो जयः)',
    sourceDe: 'महाभारत एवं भारत का सर्वोच्च न्यायालय ध्येयवाक्य',
    philosophicalContext: 'The official motto of the Supreme Court of India. It signifies that lasting triumph does not belong to raw force or deceit, but inevitably aligns with righteous justice and moral truth.',
    breakdown: [
      { word: 'यतः', transliteration: 'yataḥ', grammar: 'Correlative Adverb', meaning: 'Whence, wherever' },
      { word: 'धर्मः', transliteration: 'dharmaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'Righteousness, truth, law' },
      { word: 'ततः', transliteration: 'tataḥ', grammar: 'Correlative Adverb', meaning: 'Thence, there' },
      { word: 'जयः', transliteration: 'jayaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'Victory, triumph' }
    ],
    tags: ['justice', 'dharma', 'motto', 'victory', 'law']
  },
  {
    id: 'prano-vai-balam',
    category: 'Vedas',
    type: 'Sutra',
    title: 'Prana is Vital Vigor (प्राणो वै बलम्)',
    devanagari: 'प्राणो वै बलम् । बलेन लोकस्तिष्ठति ॥',
    iast: 'prāṇo vai balam | balena lokastiṣṭhati ||',
    hindi: 'प्राण (जीवन शक्ति) ही वास्तविक बल है। इस प्राण-बल के आधार पर ही यह संपूर्ण लोक स्थिर है।',
    english: 'Prana (the vital cosmic breath) is indeed inner strength. By virtue of this vital energy does the universe endure.',
    source: 'Atharvaveda & Prashna Upanishad (अथर्ववेद एवं प्रश्नोपनिषत्)',
    sourceDe: 'अथर्ववेद ११.४',
    philosophicalContext: 'Vedic bio-energetics recognizes Prana not merely as atmospheric oxygen, but as the underlying metabolic and psychological life-force uniting matter with consciousness.',
    breakdown: [
      { word: 'प्राणः', transliteration: 'prāṇaḥ', grammar: 'Noun (Masc. Nom. Sg.)', meaning: 'Vital life-breath' },
      { word: 'वै', transliteration: 'vai', grammar: 'Indeclinable Particle', meaning: 'Verily, indeed' },
      { word: 'बलम्', transliteration: 'balam', grammar: 'Noun (Neut. Nom. Sg.)', meaning: 'Strength, power' },
      { word: 'बलेन', transliteration: 'balena', grammar: 'Noun (Instrumental Sg.)', meaning: 'By means of strength' },
      { word: 'तिष्ठति', transliteration: 'tiṣṭhati', grammar: 'Verb (Pres. 3rd Sg.)', meaning: 'Stands, endures' }
    ],
    tags: ['vedas', 'prana', 'energy', 'breath', 'atharvaveda']
  },
  {
    id: 'vidya-dadati-vinayam',
    category: 'Subhashitas',
    type: 'Shloka',
    title: 'Vidya Dadati Vinayam (विद्या ददाति विनयं)',
    devanagari: 'विद्या ददाति विनयं विनयाद्याति पात्रताम् ।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥',
    iast: 'vidyā dadāti vinayaṁ vinayādyāti pātratām |\npātratvāddhanamāpnoti dhanāddharmaṁ tataḥ sukham ||',
    hindi: 'सच्ची विद्या (ज्ञान) विनम्रता प्रदान करती है, विनम्रता से योग्यता (पात्रता) आती है, योग्यता से धन प्राप्त होता है, धर्मपूर्वक उपार्जित धन से धर्म का आचरण होता है और धर्म से ही वास्तविक सुख की प्राप्ति होती है।',
    english: 'True knowledge bestows humility; from humility comes worthiness and character; from character one gains honest prosperity; through prosperity one fulfills righteous duty, and thence follows true contentment.',
    source: 'Hitopadesha, Prastavika 5 (हितोपदेशः प्रस्ताविका ५)',
    sourceDe: 'हितोपदेशः प्रस्ताविका ५',
    philosophicalContext: 'The canonical pedagogy of Indian Knowledge Systems. It places Vinaya (humility and reverence for inquiry) as the foundational metric distinguishing genuine wisdom from prideful information.',
    breakdown: [
      { word: 'विद्या', transliteration: 'vidyā', grammar: 'Noun (Fem. Nom. Sg.)', meaning: 'Knowledge, wisdom' },
      { word: 'ददाति', transliteration: 'dadāti', grammar: 'Verb (Pres. 3rd Sg.)', meaning: 'Bestows, gives' },
      { word: 'विनयम्', transliteration: 'vinayam', grammar: 'Noun (Accusative Sg.)', meaning: 'Humility, discipline' },
      { word: 'पात्रताम्', transliteration: 'pātratām', grammar: 'Noun (Accusative Sg.)', meaning: 'Worthiness, capability' },
      { word: 'सुखम्', transliteration: 'sukham', grammar: 'Noun (Accusative Sg.)', meaning: 'Happiness, peace' }
    ],
    tags: ['education', 'humility', 'learning', 'wisdom', 'subhashita']
  }
];

export const IAST_GUIDE = [
  { char: 'ā / ī / ū', sound: 'Long vowels', devanagari: 'आ, ई, ऊ', example: 'dharma, śarīra' },
  { char: 'ṛ', sound: 'Vocalic r', devanagari: 'ऋ', example: 'ṛta, kṛpā' },
  { char: 'ṁ / ṃ', sound: 'Anusvara (nasal resonance)', devanagari: 'अं', example: 'satyam, oṁ' },
  { char: 'ḥ', sound: 'Visarga (soft unvoiced aspiration)', devanagari: 'अः', example: 'namaḥ, jayaḥ' },
  { char: 'ś', sound: 'Palatal sibilant ("sh")', devanagari: 'श', example: 'śānti, śiva' },
  { char: 'ṣ', sound: 'Retroflex sibilant', devanagari: 'ष', example: 'puruṣa, kṛṣṇa' },
  { char: 'ñ / ṇ', sound: 'Palatal / Retroflex nasals', devanagari: 'ञ, ण', example: 'jñāna, prāṇa' }
];
