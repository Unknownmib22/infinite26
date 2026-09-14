const events = [
  // =========================
  // KAZE
  // =========================
  {
    id: "indian-dance",
    dynasty: "Kaze",
    japanese: "風",
    category: "Dance",
    name: "Indian Dance",
    fee: 150,
    pricing: "per_head",
    type: "flexible",
    description: "Celebrate the richness, rhythm and expression of Indian dance.",
    rules: [
      "Group entries: maximum 2 entries per college.",
      "Solo/Duo: multiple entries are permitted.",
      "Time limit: 3–4 minutes.",
      "Any language or genre of music is permitted.",
      "Audio must be submitted in MP3 format.",
      "Appropriate traditional attire is mandatory."
    ]
  },

  {
    id: "western-solo",
    dynasty: "Kaze",
    japanese: "風",
    category: "Dance",
    name: "Western Solo",
    fee: 200,
    pricing: "per_head",
    type: "individual",
    description: "Own the stage with rhythm, movement and individual expression.",
    rules: [
      "Multiple entries are permitted per college.",
      "Time limit: 3–4 minutes.",
      "Western freestyle and freestyle dance forms are permitted.",
      "Any language or genre of music is permitted.",
      "Props are permitted subject to stage safety."
    ]
  },

  {
    id: "western-duo",
    dynasty: "Kaze",
    japanese: "風",
    category: "Dance",
    name: "Western Duo",
    fee: 300,
    pricing: "per_team",
    type: "team",
    minMembers: 2,
    maxMembers: 2,
    description: "Two performers. One rhythm. One shared stage.",
    rules: [
      "Exactly 2 participants per team.",
      "Any gender combination is permitted.",
      "Time limit: maximum 4 minutes.",
      "Any Western or freestyle dance form is permitted.",
      "Props are permitted subject to stage safety."
    ]
  },

  {
    id: "replica-dance",
    dynasty: "Kaze",
    japanese: "風",
    category: "Dance",
    name: "Replica Dance",
    fee: 150,
    pricing: "per_head",
    type: "team",
    minMembers: 2,
    maxMembers: 20,
    description: "Recreate a dance sequence and bring it to life in your own way.",
    rules: [
      "Team size: 2–20 participants.",
      "Time limit: maximum 5 minutes.",
      "Multiple songs may be combined.",
      "Performance must closely replicate the chosen reference.",
      "Vulgarity, offensive gestures and inappropriate content are prohibited."
    ]
  },

  {
    id: "group-dance",
    dynasty: "Kaze",
    japanese: "風",
    category: "Dance",
    name: "Group Dance",
    fee: 150,
    pricing: "per_head",
    type: "team",
    minMembers: 5,
    maxMembers: 20,
    description: "Move together. Create together. Own the stage together.",
    rules: [
      "Only 1 team from each college is allowed.",
      "Team size: 5–20 participants.",
      "All members must be from the same college.",
      "Time limit: 5–6 minutes.",
      "Freestyle or Western styles are allowed."
    ]
  },

  {
    id: "mens-physique",
    dynasty: "Kaze",
    japanese: "風",
    category: "Fashion",
    name: "Men's Physique",
    fee: 200,
    pricing: "per_head",
    type: "individual",
    description: "Discipline, preparation and presentation take centre stage.",
    rules: [
      "Any number of participants from each college are permitted.",
      "Board shorts only.",
      "Briefs are strictly not allowed.",
      "Participants must use Dream Tan Oil.",
      "Participants must display the mandatory quarter poses."
    ]
  },

  // =========================
  // OTO
  // =========================
  {
    id: "solo-singing",
    dynasty: "Oto",
    japanese: "音",
    category: "Music",
    name: "Solo Singing",
    fee: 200,
    pricing: "per_head",
    type: "individual",
    description: "One voice. One moment. Your stage.",
    rules: [
      "Multiple entries per college are permitted.",
      "Time limit: maximum 4 minutes.",
      "Songs of any language and genre are welcome.",
      "Medleys are allowed.",
      "Participants may use karaoke tracks or perform without instrumental support."
    ]
  },

  {
    id: "duo-singing",
    dynasty: "Oto",
    japanese: "音",
    category: "Music",
    name: "Duo Singing",
    fee: 300,
    pricing: "per_team",
    type: "team",
    minMembers: 2,
    maxMembers: 2,
    description: "Two voices. One harmony. A shared musical story.",
    rules: [
      "Exactly 2 participants per team.",
      "Any gender combination is permitted.",
      "Time limit: 4–5 minutes.",
      "Karaoke tracks are permitted.",
      "Audio must be submitted in MP3 format."
    ]
  },

  {
    id: "instrumental-solo",
    dynasty: "Oto",
    japanese: "音",
    category: "Music",
    name: "Instrumental Solo",
    fee: 150,
    pricing: "per_head",
    type: "individual",
    description: "Let the instrument speak when words fall silent.",
    rules: [
      "Multiple entries per college are permitted.",
      "Time limit: 3–4 minutes.",
      "Performance must be entirely live.",
      "Participants must bring their own instruments.",
      "Backing tracks are not permitted."
    ]
  },

  // =========================
  // KOKORO
  // =========================
  {
    id: "talent-odyssey",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Talent Odyssey",
    fee: 150,
    pricing: "per_head",
    type: "individual",
    description: "Bring any talent. Give your imagination a stage.",
    rules: [
      "Open theme.",
      "Each participant is given a maximum of 2 minutes.",
      "The performance must be individual.",
      "Props are allowed if required.",
      "Inappropriate or offensive content is prohibited."
    ]
  },

  {
    id: "connection",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Connection",
    fee: 150,
    pricing: "per_team",
    type: "team",
    minMembers: 2,
    maxMembers: 2,
    description: "Two minds. One connection. A challenge of understanding.",
    rules: [
      "2 participants per team.",
      "Any number of teams from each college may participate.",
      "Prelims will be conducted based on the number of entries.",
      "Finalists will be determined based on points obtained in previous rounds."
    ]
  },

  {
    id: "pencil-sketch",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Pencil Sketch",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Turn a blank page into a world of your own.",
    rules: [
      "Open theme.",
      "No limit on participants from each college.",
      "Only one original entry per participant.",
      "Pencil work in black and white only.",
      "The entry must be entirely original."
    ]
  },

  {
    id: "story-writing",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Story Writing",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "A blank page. A single thought. An entire world.",
    rules: [
      "Open theme.",
      "Each participant may submit one original story.",
      "Entries should demonstrate original thought and imagination.",
      "Clear, engaging and grammatically sound language is encouraged.",
      "Word limit: 800–1000 words."
    ]
  },

  {
    id: "song-writing",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Song Writing",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Turn emotion into words and words into melody.",
    rules: [
      "Open theme.",
      "Each participant may submit one original composition.",
      "Entries should reflect originality and imagination.",
      "The submission must contain original lyrics.",
      "Word limit: 300–500 words."
    ]
  },

  {
    id: "tamil-poetry",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "தமிழ் கவிதை",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Let Tamil become the language of imagination.",
    rules: [
      "Each participant may submit one original Tamil poem.",
      "Entries should reflect imagination and originality.",
      "Clear and grammatically sound Tamil is encouraged.",
      "The submission must be entirely the participant's own work.",
      "Entries must follow the prescribed word limit."
    ]
  },

  {
    id: "english-poetry",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "English Poetry",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Express what words alone cannot contain.",
    rules: [
      "Each participant may submit one original poem.",
      "Entries should demonstrate imagination and originality.",
      "Clear, expressive and grammatically sound English is encouraged.",
      "The submission must be entirely the participant's own work.",
      "Entries will be evaluated on creativity and language."
    ]
  },

  {
    id: "haikoo",
    dynasty: "Kokoro",
    japanese: "心",
    category: "Literary",
    name: "Haikoo",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Small moments. Infinite meanings.",
    rules: [
      "Open theme.",
      "The format must follow the traditional Haiku form of 3 lines.",
      "Structure should follow the 5–7–5 syllable pattern.",
      "The Haiku must be entirely original.",
      "Copied or plagiarised work results in immediate disqualification."
    ]
  },

  // =========================
  // YUME
  // =========================
  {
    id: "photography",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Photography",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Capture a moment. Create a perspective.",
    rules: [
      "Open theme; one entry per participant.",
      "Any number of participants from each college may register.",
      "Submit the entry in JPG/JPEG format.",
      "Minor editing and colour grading are permitted.",
      "AI-generated images and artificial manipulation are prohibited."
    ]
  },

  {
    id: "videography",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Videography",
    fee: 75,
    pricing: "per_head",
    type: "flexible",
    description: "Capture stories through motion, sound and perspective.",
    rules: [
      "Time limit: maximum 1 minute.",
      "The video must be original.",
      "Previously published or submitted videos are not permitted.",
      "AI-generated content must be disclosed if applicable.",
      "Submission must be in MP4 format."
    ]
  },

  {
    id: "memes",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Memes",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Ideas, humour and creativity — distilled into one frame.",
    rules: [
      "Open theme.",
      "One participant per entry.",
      "There is no restriction on the number of entries from a college.",
      "Both photo memes and video memes are accepted.",
      "Video memes must not exceed 1 minute."
    ]
  },

  {
    id: "reels",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Reels",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Create. Capture. Connect.",
    rules: [
      "Open theme.",
      "Reels must be original and created by the participant.",
      "Participants may use props and permitted materials.",
      "Time limit: 1 minute.",
      "Copied content or unfair practices result in disqualification."
    ]
  },

  {
    id: "short-film",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Short Film Contest",
    fee: 100,
    pricing: "per_entry",
    type: "entry",
    description: "Frames become stories. Stories become memories.",
    rules: [
      "Multiple entries per college are allowed.",
      "Duration: 2–3 minutes.",
      "Short films must be screened during the event.",
      "The title is compulsory.",
      "Submissions must be in MP4 format."
    ]
  },

  {
    id: "dub-dazzle",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Dub & Dazzle",
    fee: 75,
    pricing: "per_head",
    type: "individual",
    description: "Reimagine a scene. Give it your own voice.",
    rules: [
      "Multiple entries per college are permitted.",
      "Duration: maximum 1 minute.",
      "Participants must recreate a scene from a recognised film or video.",
      "The submission must be in MP4 format.",
      "Vulgarity, offensive content and nudity are strictly prohibited."
    ]
  },

  {
    id: "movie-frame-recreation",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Movie Frame Recreation",
    fee: 75,
    pricing: "per_entry",
    type: "entry",
    description: "Recreate the frame. Reinterpret the moment.",
    rules: [
      "Multiple entries per college are permitted.",
      "A frame from any movie or web series may be recreated.",
      "The recreated photograph must be submitted with the original reference.",
      "Costumes and suitable minor edits are permitted.",
      "Selected entries may be featured on the official event page."
    ]
  },

  {
    id: "movie-scene-recreation",
    dynasty: "Yume",
    japanese: "夢",
    category: "Media",
    name: "Movie Scene Recreation",
    fee: 80,
    pricing: "per_entry",
    type: "entry",
    description: "Recreate a scene. Relive the story.",
    rules: [
      "Multiple entries per college are permitted.",
      "Recreate a memorable scene from any movie or web series.",
      "The scene may be recreated in any language.",
      "Costumes, props and suitable accessories may be used.",
      "The recreated scene must be submitted with the original reference."
    ]
  }
];

export default events;