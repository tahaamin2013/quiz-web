const TENSE_OPTIONS = [
  "Present Simple",
  "Present Continuous",
  "Present Perfect",
  "Present Perfect Continuous",
  "Past Simple",
  "Past Continuous",
  "Past Perfect",
  "Past Perfect Continuous",
  "Future Simple",
  "Future Continuous",
  "Future Perfect",
  "Future Perfect Continuous"
];

export const quizData = {
  unit1: {
    name: "Unit 1: am/is/are - Present Tense of 'to be'",
    description: "Master the present tense of the verb 'to be' - am, is, and are",
    questions: [
      {
        question: "Which word completes the sentence? 'I _____ a student from Canada.'",
        options: ["am", "is", "are", "be"],
        correct: "0",
        explanation: "Use 'am' with the subject 'I'. The sentence means 'I am a student from Canada.'",
      },
      {
        question: "Choose the correct form: 'My sister _____ 25 years old.'",
        options: ["am", "is", "are", "being"],
        correct: "1",
        explanation: "Use 'is' with singular subjects like 'my sister'. She is 25 years old.",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "They are not interested in sports.",
          "They is not interested in sports.",
          "They am not interested in sports.",
          "They be not interested in sports.",
        ],
        correct: "0",
        explanation: "Use 'are' with plural subjects like 'they'. They are not interested in sports.",
      },
      {
        question: "Complete: 'My parents _____ doctors.'",
        options: ["is", "am", "are", "been"],
        correct: "2",
        explanation: "Use 'are' with plural subjects 'my parents'. Both are doctors.",
      },
      {
        question: "Which is the negative form of 'I am happy'?",
        options: ["I'm not happy", "I amn't happy", "I'm not happy (I'm not = I am not)", "I are not happy"],
        correct: "0",
        explanation: "The negative form is 'I'm not happy' or 'I am not happy'.",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "It is a beautiful day today.",
          "It are a beautiful day today.",
          "It am a beautiful day today.",
          "It being a beautiful day today.",
        ],
        correct: "0",
        explanation: "Use 'is' with singular subjects like 'it'. It is a beautiful day today.",
      },
      {
        question: "What does this sentence mean? 'My favourite colour is blue.'",
        options: [
          "I like blue because it's my favorite",
          "Blue is the only color I like",
          "I own something that is blue",
          "Blue will become my favorite color",
        ],
        correct: "0",
        explanation: "This sentence identifies that blue is the speaker's favorite color.",
      },
      {
        question: "Complete: 'You _____ my best friend.'",
        options: ["am", "is", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with the subject 'you'. You are my best friend.",
      },
      {
        question: "Which negative sentence is correct?",
        options: [
          "She's not a teacher.",
          "She isn't a teacher.",
          "She's not a teacher / She isn't a teacher (both correct)",
          "She ain't a teacher.",
        ],
        correct: "2",
        explanation: "Both 'is not' (isn't) and the contraction 'is not' (isn't) are correct.",
      },
      {
        question: "Complete: 'This bag _____ very heavy.'",
        options: ["are", "is", "am", "being"],
        correct: "1",
        explanation: "Use 'is' with the singular subject 'this bag'. This bag is very heavy.",
      },
      {
        question: "Choose the correct form: 'My brother and I _____ good tennis players.'",
        options: ["am", "is", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with plural subjects. My brother and I are good tennis players.",
      },
      {
        question: "Which sentence is correct?",
        options: ["You am late for work.", "You is late for work.", "You are late for work.", "You be late for work."],
        correct: "2",
        explanation: "Use 'are' with 'you', whether singular or plural. You are late for work.",
      },
      {
        question: "Complete: 'Emily _____ at home. Her children _____ at school.'",
        options: ["is / are", "are / is", "am / are", "is / is"],
        correct: "0",
        explanation: "'Emily' (singular) takes 'is'. 'Children' (plural) takes 'are'.",
      },
      {
        question: "What is the contraction of 'he is'?",
        options: ["he'm", "he's", "he'is", "he-s"],
        correct: "1",
        explanation: "The contraction of 'he is' is 'he's'. Example: He's in bed.",
      },
      {
        question: "Choose the correct sentence:",
        options: ["We are good friends.", "We is good friends.", "We be good friends.", "We am good friends."],
        correct: "0",
        explanation: "Use 'are' with 'we'. We are good friends.",
      },
      {
        question: "Complete: 'Your keys _____ on the table.'",
        options: ["is", "am", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with plural subjects. Your keys are on the table.",
      },
      {
        question: "Which sentence shows correct usage?",
        options: [
          "I'm cold, can you close the window?",
          "I'm cold, can you close the window? (Yes, this is correct)",
          "I am cold, can you close the window? (Yes, this is also correct)",
          "Both B and C are correct",
        ],
        correct: "3",
        explanation: "Both 'I'm' and 'I am' are correct. 'I'm' is the contraction.",
      },
      {
        question: "Complete: 'It _____ ten o'clock. You _____ late again.'",
        options: ["is / are", "are / is", "am / are", "is / is"],
        correct: "0",
        explanation: "'It' (singular) takes 'is'. 'You' takes 'are'.",
      },
      {
        question: "What does 'I'm not hungry' mean?",
        options: [
          "I will not be hungry",
          "I am not hungry (at this moment)",
          "I have never been hungry",
          "I might be hungry later",
        ],
        correct: "1",
        explanation: "'I'm not hungry' means you are not hungry right now.",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "These people are not English.",
          "These people is not English.",
          "These people am not English.",
          "These people be not English.",
        ],
        correct: "0",
        explanation: "Use 'are' with plural subjects. These people are not English.",
      },
    ],
  },
  unit2: {
    name: "Unit 2: Questions with am/is/are",
    description: "Learn how to form and answer questions using am, is, and are",
    questions: [
      {
        question: "Which is the correct question form?",
        options: ["Is he a doctor?", "Is a doctor he?", "A doctor is he?", "He is a doctor?"],
        correct: "0",
        explanation: "In questions, the verb comes before the subject: 'Is he a doctor?'",
      },
      {
        question: "How do you ask about someone's name?",
        options: ["Name is what yours?", "What is your name?", "Your name what is?", "Is what your name?"],
        correct: "1",
        explanation: "The correct question form is 'What is your name?'",
      },
      {
        question: "What is the correct question?",
        options: ["Are you married?", "You are married?", "Married you are?", "Are married you?"],
        correct: "0",
        explanation: "In questions, verb comes first: 'Are you married?'",
      },
      {
        question: "Complete the question: 'How old _____ you?'",
        options: ["am", "is", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with 'you': 'How old are you?'",
      },
      {
        question: "What is the correct question form?",
        options: [
          "Where is your mother?",
          "Where your mother is?",
          "Is where your mother?",
          "Where is at your mother?",
        ],
        correct: "0",
        explanation: "Correct question order: 'Where is your mother?'",
      },
      {
        question: "How would you ask if someone is a student?",
        options: ["Student are you?", "You are a student?", "Are you a student?", "A student you are?"],
        correct: "2",
        explanation: "The correct question is 'Are you a student?'",
      },
      {
        question: "Complete: 'Is she _____ home?'",
        options: ["at", "on", "in", "to"],
        correct: "0",
        explanation: "We use 'at' with 'home': 'Is she at home?'",
      },
      {
        question: "What is the correct negative response to 'Are you tired?'",
        options: ["Yes, I am.", "No, I'm not.", "No, I am not tired.", "Both B and C are correct"],
        correct: "3",
        explanation: "Both 'No, I'm not.' and 'No, I am not tired.' are correct.",
      },
      {
        question: "How do you ask about the weather?",
        options: ["Is cold it today?", "Cold is it today?", "Is it cold today?", "It is cold today?"],
        correct: "2",
        explanation: "The correct question is 'Is it cold today?'",
      },
      {
        question: "Complete: 'Are your parents _____ home?'",
        options: ["on", "at", "in", "to"],
        correct: "1",
        explanation: "We use 'at' with 'home': 'Are your parents at home?'",
      },
      {
        question: "What is the short answer to 'Is your friend English?'",
        options: ["Yes, she is.", "Yes, is.", "Yes, friend is.", "Is English."],
        correct: "0",
        explanation: "The correct short answer is 'Yes, she is.' (or 'Yes, he is.')",
      },
      {
        question: "Which question is correct?",
        options: [
          "What colour is your car?",
          "What is colour your car?",
          "Is what colour your car?",
          "Colour what is your car?",
        ],
        correct: "0",
        explanation: "Correct question: 'What colour is your car?'",
      },
      {
        question: "Complete: '_____ you from Canada?'",
        options: ["Is", "Are", "Am", "Be"],
        correct: "1",
        explanation: "Use 'are' with 'you': 'Are you from Canada?'",
      },
      {
        question: "How do you ask about someone's age?",
        options: ["How old are you?", "How you are old?", "Old how are you?", "Are you how old?"],
        correct: "0",
        explanation: "The correct question is 'How old are you?'",
      },
      {
        question: "What is the short answer to 'Are these your keys?'",
        options: ["Yes, they are.", "Yes, keys are.", "Yes, these are.", "Yes, are."],
        correct: "0",
        explanation: "The correct short answer is 'Yes, they are.'",
      },
      {
        question: "Complete: 'Is she _____ the office?'",
        options: ["at", "on", "in", "to"],
        correct: "2",
        explanation: "We use 'in' for 'the office': 'Is she in the office?'",
      },
      {
        question: "Which is the correct response to 'Is it hot outside?'",
        options: ["No, it isn't.", "No, it's not.", "Both A and B are correct", "No, outside it isn't."],
        correct: "2",
        explanation: "'No, it isn't.' and 'No, it's not.' are both correct.",
      },
      {
        question: "What is the correct question?",
        options: [
          "Why is it so expensive?",
          "Why so expensive is it?",
          "Is expensive why it?",
          "Why it is so expensive?",
        ],
        correct: "0",
        explanation: "Correct question: 'Why is it so expensive?'",
      },
      {
        question: "Complete: '_____ are your shoes new?'",
        options: ["Is", "Are", "Am", "Be"],
        correct: "1",
        explanation: "Use 'are' with the plural subject 'shoes': 'Are your shoes new?'",
      },
      {
        question: "How would you confirm if someone is a teacher?",
        options: ["You are a teacher?", "Is a teacher you?", "Are you a teacher?", "A teacher is you?"],
        correct: "2",
        explanation: "The correct question is 'Are you a teacher?'",
      },
    ],
  },
  unit3: {
    name: "Unit 3: Present Continuous (is/are + -ing)",
    description: "Master the present continuous tense for actions happening right now",
    questions: [
      {
        question: "Which sentence uses present continuous correctly?",
        options: ["She is eat an apple.", "She is eating an apple.", "She eating is an apple.", "She is eating apple."],
        correct: "1",
        explanation: "Present continuous is 'is/are + -ing form'. She is eating an apple (action in progress).",
      },
      {
        question: "Complete: 'They _____ playing football right now.'",
        options: ["is", "am", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with plural subject 'they': They are playing football.",
      },
      {
        question: "What does present continuous describe?",
        options: [
          "Actions that happened in the past",
          "Actions that will happen in the future",
          "Actions that are happening right now",
          "Actions that happen every day",
        ],
        correct: "2",
        explanation: "Present continuous describes actions happening at this very moment.",
      },
      {
        question: "Choose the correct present continuous form:",
        options: [
          "He is work in the garden.",
          "He is working in the garden.",
          "He working is in the garden.",
          "He is work garden.",
        ],
        correct: "1",
        explanation: "Correct form: 'He is working in the garden.'",
      },
      {
        question: "What is the negative form of 'I'm working'?",
        options: ["I'm not working", "I not working", "I'm not work", "I not am working"],
        correct: "0",
        explanation: "The negative is 'I'm not working' or 'I am not working'.",
      },
      {
        question: "Complete: 'Maria _____ a newspaper.'",
        options: ["is read", "is reading", "reading is", "are reading"],
        correct: "1",
        explanation: "Correct form: 'Maria is reading a newspaper.'",
      },
      {
        question: "How do you form the -ing form of 'run'?",
        options: ["runing", "running", "rune", "run"],
        correct: "1",
        explanation: "Double the final consonant: run → running. They are running in the park.",
      },
      {
        question: "Which sentence is in present continuous?",
        options: ["She wears a hat.", "She is wearing a hat.", "She wore a hat.", "She will wear a hat."],
        correct: "1",
        explanation: "'She is wearing a hat' is present continuous (action happening now).",
      },
      {
        question: "Complete: 'We _____ not watching TV right now.'",
        options: ["am", "is", "are", "be"],
        correct: "2",
        explanation: "Use 'are' with 'we': 'We are not watching TV right now.'",
      },
      {
        question: "What is the present continuous of 'sit'?",
        options: ["siting", "sitting", "sitted", "sit"],
        correct: "1",
        explanation: "Double the final consonant: sit → sitting. She is sitting on the chair.",
      },
      {
        question: "Choose the correct form:",
        options: [
          "You're not listening to me.",
          "You're not listen to me.",
          "You not listening to me.",
          "You're listening to me.",
        ],
        correct: "0",
        explanation: "Correct: 'You're not listening to me.' (You are not listening)",
      },
      {
        question: "What is happening in the sentence 'The bus is coming'?",
        options: [
          "The bus came in the past.",
          "The bus will come in the future.",
          "The bus is arriving right now.",
          "The bus comes every day.",
        ],
        correct: "2",
        explanation: "'The bus is coming' means the bus is arriving at this moment.",
      },
      {
        question: "Complete: 'Look! There _____ Chris. He _____ dancing.'",
        options: ["is / is", "are / are", "is / is dancing (he's dancing)", "are / are dancing"],
        correct: "2",
        explanation: "'Look! There's Chris. He's dancing!' (present continuous of what's happening now)",
      },
      {
        question: "How do you ask if someone is doing something in present continuous?",
        options: ["You working?", "Are you work?", "Are you working?", "You are work?"],
        correct: "2",
        explanation: "Correct question: 'Are you working?' (present continuous question form)",
      },
      {
        question: "What does 'I'm not working' mean?",
        options: [
          "I don't have a job",
          "I am not doing work right now",
          "I will never work",
          "I didn't work yesterday",
        ],
        correct: "1",
        explanation: "'I'm not working' means I am not working at this specific moment.",
      },
      {
        question: "Complete: 'She _____ wearing a hat.'",
        options: ["am", "is", "are", "be"],
        correct: "1",
        explanation: "Use 'is' with singular 'she': 'She is wearing a hat.'",
      },
      {
        question: "Choose the correct response to 'What are they doing?'",
        options: [
          "They play football.",
          "They are playing football.",
          "They playing football.",
          "They are play football.",
        ],
        correct: "1",
        explanation: "Correct answer: 'They are playing football.' (present continuous)",
      },
      {
        question: "What is the present continuous form of 'write'?",
        options: ["writeing", "writting", "writing", "write"],
        correct: "2",
        explanation: "Drop the 'e' and add '-ing': write → writing. She is writing a letter.",
      },
      {
        question: "Complete: 'We're having dinner now. Can I call you later?'",
        options: ["We eat dinner now.", "We are having dinner now.", "We have dinner now.", "We will have dinner now."],
        correct: "1",
        explanation: "'We're having dinner' (present continuous) describes the action happening right now.",
      },
      {
        question: "What does 'The weather is nice. It's not raining' mean?",
        options: [
          "It rained in the past and will rain in the future.",
          "It is sunny and no rain is falling at this moment.",
          "It never rains in this place.",
          "The weather will be nice tomorrow.",
        ],
        correct: "1",
        explanation: "'It's not raining' (present continuous negative) means rain is not happening now.",
      },
    ],
  },
  unit4: {
    name: "Unit 4: What are you doing? (Present Continuous Questions)",
    description: "Form and answer present continuous questions correctly",
    questions: [
      {
        question: "How do you ask what someone is doing right now?",
        options: ["What do you do?", "What are you doing?", "What you doing?", "What doing are you?"],
        correct: "1",
        explanation: "Use 'are + subject + -ing': 'What are you doing?' asks about a current action.",
      },
      {
        question: "Complete: 'Are you _____ OK?'",
        options: ["feel", "feeling", "feels", "felt"],
        correct: "1",
        explanation: "Present continuous question: 'Are you feeling OK?' (asking about present state)",
      },
      {
        question: "What is the correct question form?",
        options: ["Is it raining?", "Is raining it?", "Raining is it?", "It is raining?"],
        correct: "0",
        explanation: "Correct word order: 'is/are + subject + -ing'. 'Is it raining?'",
      },
      {
        question: "Complete: '_____ is Paul doing?'",
        options: ["Who", "What", "Where", "When"],
        correct: "1",
        explanation: "'What is Paul doing?' asks about the action he's doing right now.",
      },
      {
        question: "How do you ask about a specific location in present continuous?",
        options: ["Where are they going?", "Where they are going?", "Going where are they?", "Are they where going?"],
        correct: "0",
        explanation: "'Where are they going?' uses correct question word order.",
      },
      {
        question: "Complete: 'What _____ the children doing?'",
        options: ["is", "are", "am", "be"],
        correct: "1",
        explanation: "Use 'are' with plural 'children': 'What are the children doing?'",
      },
      {
        question: "Which short answer is correct for 'Are you going now?'",
        options: ["Yes, I am.", "Yes, I going.", "Yes, I'm doing.", "Yes, going."],
        correct: "0",
        explanation: "Short answer with present continuous: 'Yes, I am.' (I am going)",
      },
      {
        question: "How do you form a question asking about someone's location?",
        options: ["Where's she going?", "Where is she going?", "Both A and B are correct", "She where is going?"],
        correct: "2",
        explanation: "Both 'Where's she going?' and 'Where is she going?' are correct.",
      },
      {
        question: "Complete: '_____ are you waiting for?'",
        options: ["What", "Who", "Where", "Why"],
        correct: "1",
        explanation: "'Who are you waiting for?' asks about the person you're waiting for.",
      },
      {
        question: "What is the short answer to 'Is it raining?'",
        options: ["Yes, it is.", "Yes, raining.", "Yes, is raining.", "Yes, it's."],
        correct: "0",
        explanation: "Correct short answer: 'Yes, it is.' (Yes, it is raining)",
      },
      {
        question: "Complete: 'Why _____ you wearing a coat? It's not cold.'",
        options: ["is", "are", "am", "be"],
        correct: "1",
        explanation: "Use 'are' with 'you': 'Why are you wearing a coat?'",
      },
      {
        question: "How do you ask if someone is staying at a hotel?",
        options: [
          "Are you staying at a hotel?",
          "You are staying at hotel?",
          "Staying you are at a hotel?",
          "Are staying you at hotel?",
        ],
        correct: "0",
        explanation: "Correct question: 'Are you staying at a hotel?'",
      },
      {
        question: "Complete: '_____ is Ben working today?'",
        options: ["What", "Is", "Where", "Why"],
        correct: "1",
        explanation: "'Is Ben working today?' asks if he's currently working.",
      },
      {
        question: "What does 'Are your friends staying at a hotel?' mean?",
        options: [
          "Will your friends stay at a hotel?",
          "Did your friends stay at a hotel?",
          "Are your friends currently staying at a hotel?",
          "Do your friends stay at a hotel sometimes?",
        ],
        correct: "2",
        explanation: "This question asks about a current situation - are they staying there right now?",
      },
      {
        question: "How do you respond 'No' to 'Is he working?'",
        options: ["No, he not.", "No, he isn't.", "No, working he isn't.", "No, he's not working."],
        correct: "1",
        explanation: "Correct negative response: 'No, he isn't.' (No, he is not working)",
      },
      {
        question: "Complete: 'What _____ you doing tomorrow?'",
        options: ["are", "do", "will", "is"],
        correct: "0",
        explanation: "This uses present continuous for planned future: 'What are you doing tomorrow?'",
      },
      {
        question: "Complete: '_____ you feeling OK?' 'Yes, I am.'",
        options: ["Is", "Are", "Am", "Do"],
        correct: "1",
        explanation: "Use 'are' with 'you': 'Are you feeling OK?'",
      },
      {
        question: "How do you ask about continuous action with 'Look'?",
        options: [
          "Look, there's Emily! Where she going?",
          "Look, there's Emily! Where's she going?",
          "Look, Emily is there! Where going?",
          "Look Emily! Where she go?",
        ],
        correct: "1",
        explanation: "'Look, there's Emily! Where's she going?' (Where is she going?)",
      },
      {
        question: "What is the correct response to 'What are they doing?'",
        options: ["They watch TV.", "They're watching TV.", "They watching TV.", "They are watch TV."],
        correct: "1",
        explanation: "Correct response: 'They're watching TV.' (They are watching)",
      },
      {
        question: "Complete: '_____ are those people going?'",
        options: ["Who", "What", "Where", "Why"],
        correct: "2",
        explanation: "'Where are those people going?' asks about their destination.",
      },
    ],
  },
  unit5: {
    name: "Unit 5: I do/work/like etc. (Present Simple)",
    description: "Understand the present simple tense for regular and habitual actions",
    questions: [
      {
        question: "Which sentence uses present simple correctly?",
        options: ["He works very hard.", "He work very hard.", "He are working very hard.", "He do work very hard."],
        correct: "0",
        explanation: "Present simple with 'he': 'He works very hard.' (action that is generally true)",
      },
      {
        question: "Complete: 'I _____ in a shop. My brother _____ in a bank.'",
        options: ["work / work", "work / works", "works / work", "works / works"],
        correct: "1",
        explanation: "I work (plural form), my brother works (singular form with 'he')",
      },
      {
        question: "What does present simple describe?",
        options: [
          "Actions happening right now",
          "Actions that happened in the past",
          "Things that are true in general or happen regularly",
          "Actions that will happen in the future",
        ],
        correct: "2",
        explanation: "Present simple is for general truths and habits: 'I like big cities.'",
      },
      {
        question: "Complete: 'Lucy _____ in London. Her parents _____ in Scotland.'",
        options: ["lives / live", "live / lives", "living / living", "live / living"],
        correct: "0",
        explanation: "Lucy lives (singular), her parents live (plural)",
      },
      {
        question: "How do you form the -s/-es ending for 'pass'?",
        options: ["pass", "pases", "passes", "passesing"],
        correct: "2",
        explanation: "After -s, -sh, -ch: add -es. He passes the test. She finishes her work.",
      },
      {
        question: "Complete: 'It _____ a lot in winter.'",
        options: ["rain", "rains", "is raining", "raining"],
        correct: "1",
        explanation: "Present simple: 'It rains a lot in winter.' (general fact)",
      },
      {
        question: "What is the correct form of 'study'?",
        options: ["studys", "studyes", "studies", "study"],
        correct: "2",
        explanation: "Change -y to -ies: study → studies. He studies very hard.",
      },
      {
        question: "Complete: 'do/does' - 'What _____ you do?' 'I _____ a teacher.'",
        options: ["do / am", "do / am being", "does / is", "do / do"],
        correct: "0",
        explanation: "'do' (with you), 'am' (I am). What do you do? I'm a teacher.",
      },
      {
        question: "Which sentence is correct?",
        options: ["Tom work very hard.", "Tom works very hard.", "Tom are working hard.", "Tom do work hard."],
        correct: "1",
        explanation: "'Tom works very hard.' - add -s with he/she/it",
      },
      {
        question: "Complete: 'The earth _____ round the sun.'",
        options: ["go", "goes", "going", "is going"],
        correct: "1",
        explanation: "Present simple fact: 'The earth goes round the sun.'",
      },
      {
        question: "How do you form the present simple of 'watch'?",
        options: ["watch", "watchs", "watches", "watchers"],
        correct: "2",
        explanation: "After -ch: add -es. He watches TV. She watches movies.",
      },
      {
        question: "What does 'I like big cities' mean?",
        options: [
          "I am liking big cities now",
          "I will like big cities",
          "In general, I enjoy big cities",
          "I am currently visiting big cities",
        ],
        correct: "2",
        explanation: "Present simple expresses general preferences and feelings.",
      },
      {
        question: "Complete: 'Sue always _____ to work early.'",
        options: ["get", "gets", "getting", "is getting"],
        correct: "1",
        explanation: "'Sue always gets to work early.' (habitual action)",
      },
      {
        question: "What is the correct form for 'go'?",
        options: ["go", "goes", "gos", "goesing"],
        correct: "1",
        explanation: "Special form: go → goes. He goes to school every day.",
      },
      {
        question: "Complete: 'We _____ a lot of different things in our free time.'",
        options: ["do", "does", "doing", "are doing"],
        correct: "0",
        explanation: "'We do a lot of different things.' (plural subject with 'do')",
      },
      {
        question: "Which sentence shows correct present simple?",
        options: [
          "Your English is good. You speaks very well.",
          "Your English is good. You speak very well.",
          "Your English are good. You speak well.",
          "You English good. You speak well.",
        ],
        correct: "1",
        explanation: "Present simple: 'You speak very well.' (general ability)",
      },
      {
        question: "Complete: 'It _____ a lot of money to build a hospital.'",
        options: ["cost", "costs", "costing", "is costing"],
        correct: "1",
        explanation: "'It costs a lot of money.' (present simple fact)",
      },
      {
        question: "How does 'have' change with he/she/it?",
        options: ["have", "haves", "has", "having"],
        correct: "2",
        explanation: "Special form: have → has. He has a shower. She has two sisters.",
      },
      {
        question: "What does 'Mark usually plays football on Sundays' mean?",
        options: [
          "Mark is playing football now",
          "Mark played football last Sunday",
          "It's his regular habit to play football on Sundays",
          "Mark will play football next Sunday",
        ],
        correct: "2",
        explanation: "This describes a habitual action - Mark's regular Sunday activity.",
      },
      {
        question: "Complete: 'I _____ finish at 8 o'clock in the evening.'",
        options: ["finishes", "finish", "finishing", "am finishing"],
        correct: "1",
        explanation: "'I finish at 8 o'clock.' (present simple schedule)",
      },
    ],
  },
  unit6: {
    name: "Unit 6: I don't... (Present Simple Negative)",
    description: "Master negative forms in the present simple tense",
    questions: [
      {
        question: "Which is the correct negative form?",
        options: ["I not drink coffee.", "I don't drink coffee.", "I'm not drink coffee.", "I doesn't drink coffee."],
        correct: "1",
        explanation: "Present simple negative: 'don't/doesn't + verb'. I don't drink coffee.",
      },
      {
        question: "Complete: 'He _____ drink tea. He drinks coffee.'",
        options: ["don't", "doesn't", "not", "isn't"],
        correct: "1",
        explanation: "With he/she/it: 'doesn't'. He doesn't drink tea.",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "Sue drinks tea, but she doesn't drink coffee.",
          "Sue drinks tea, but she don't drink coffee.",
          "Sue drinks tea, but she's not drink coffee.",
          "Sue drinks tea, but she doesn't drinks coffee.",
        ],
        correct: "0",
        explanation: "Use 'doesn't + infinitive': 'She doesn't drink coffee.'",
      },
      {
        question: "Complete: 'You _____ work very hard.'",
        options: ["doesn't", "don't", "not", "aren't"],
        correct: "1",
        explanation: "With 'you': 'don't'. You don't work very hard.",
      },
      {
        question: "What is the negative of 'I like football'?",
        options: [
          "I don't like football.",
          "I'm not like football.",
          "I not like football.",
          "I doesn't like football.",
        ],
        correct: "0",
        explanation: "'I don't like football.' - present simple negative",
      },
      {
        question: "Complete: 'We _____ watch TV very often.'",
        options: ["doesn't", "don't", "not", "aren't"],
        correct: "1",
        explanation: "With plural 'we': 'don't'. We don't watch TV very often.",
      },
      {
        question: "How do you say 'Sam and Chris don't know many people'?",
        options: [
          "Sam and Chris doesn't know many people.",
          "Sam and Chris don't knows many people.",
          "Sam and Chris don't know many people.",
          "Sam don't know, Chris doesn't know many people.",
        ],
        correct: "2",
        explanation: "Plural subjects use 'don't': 'Sam and Chris don't know many people.'",
      },
      {
        question: "Complete: 'My car _____ use much petrol.'",
        options: ["doesn't", "don't", "not", "aren't"],
        correct: "0",
        explanation: "With singular 'car': 'doesn't'. My car doesn't use much petrol.",
      },
      {
        question: "What is the negative form of 'He likes his job'?",
        options: [
          "He don't like his job.",
          "He doesn't like his job.",
          "He not likes his job.",
          "He is not liking his job.",
        ],
        correct: "1",
        explanation: "'He doesn't like his job.' - use doesn't with he/she/it",
      },
      {
        question: "Complete: 'Sometimes he is late, but it _____ happen very often.'",
        options: ["don't", "doesn't", "not", "isn't"],
        correct: "1",
        explanation: "'It doesn't happen very often.' - singular with doesn't",
      },
      {
        question: "Which is correct? 'I don't like _____ the car.'",
        options: ["wash", "washing", "washed", "to wash"],
        correct: "1",
        explanation: "'I don't like washing the car.' - present simple with -ing form",
      },
      {
        question: "Complete: 'Sarah speaks Spanish, but she _____ speak Italian.'",
        options: ["don't", "doesn't", "not", "don't speak"],
        correct: "1",
        explanation: "'She doesn't speak Italian.' - correct negative form",
      },
      {
        question: "What is the negative of 'I like big cities'?",
        options: [
          "I don't like big cities.",
          "I'm not liking big cities.",
          "I doesn't like big cities.",
          "I not like big cities.",
        ],
        correct: "0",
        explanation: "'I don't like big cities.' - present simple negative",
      },
      {
        question: "Complete: 'The weather is usually nice. It _____ rain very often.'",
        options: ["doesn't", "don't", "not", "isn't"],
        correct: "0",
        explanation: "'It doesn't rain very often.' - singular with doesn't",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "David does not do his job very well.",
          "David doesn't his job very well.",
          "David do not his job well.",
          "David not does his job.",
        ],
        correct: "0",
        explanation: "'David does not do his job well.' or 'David doesn't do his job well.'",
      },
      {
        question: "Complete: 'I don't _____ breakfast.'",
        options: ["likes eating", "like eat", "like eating", "likes eat"],
        correct: "2",
        explanation: "'I don't like eating breakfast.' - don't + like + -ing",
      },
      {
        question: "What does 'Paula doesn't usually have breakfast' mean?",
        options: [
          "Paula is not having breakfast now.",
          "Paula will not have breakfast.",
          "It's not her habit to eat breakfast.",
          "Paula never eats breakfast.",
        ],
        correct: "2",
        explanation: "This describes her usual habit - she doesn't normally eat breakfast.",
      },
      {
        question: "Which is grammatically correct?",
        options: [
          "I don't like washing the car. I don't do it very often.",
          "I don't like wash the car. I don't do often.",
          "I not like washing car. I not do it.",
          "I does not like wash car. I don't do.",
        ],
        correct: "0",
        explanation: "Correct: 'I don't like washing the car. I don't do it very often.'",
      },
      {
        question: "Complete: 'Fred _____ like me, and I _____ like Fred.'",
        options: ["don't / don't", "doesn't / doesn't", "doesn't / don't", "don't / doesn't"],
        correct: "2",
        explanation: "'Fred doesn't like me' (singular), 'I don't like Fred' (singular me)",
      },
      {
        question: "What is the negative of 'They like animals'?",
        options: [
          "They doesn't like animals.",
          "They don't like animals.",
          "They not like animals.",
          "They don't likes animals.",
        ],
        correct: "1",
        explanation: "'They don't like animals.' - plural with don't",
      },
    ],
  },
  unit7: {
    name: "Unit 7: Do you...? (Present Simple Questions)",
    description: "Learn to form and answer present simple questions correctly",
    questions: [
      {
        question: "How do you form a present simple question?",
        options: [
          "Do/does + subject + infinitive",
          "Subject + do/does + infinitive",
          "Do/does + infinitive + subject",
          "Subject + infinitive + do/does",
        ],
        correct: "0",
        explanation: "Question word order: do/does + subject + infinitive. 'Do you play guitar?'",
      },
      {
        question: "Complete: 'Do you play the guitar?' What's the short answer?",
        options: ["No, I do.", "No, I don't.", "No, play don't.", "No, I'm not."],
        correct: "1",
        explanation: "Short answer: 'No, I don't.' (No, I do not play.)",
      },
      {
        question: "Which is the correct question?",
        options: [
          "Do your friends live near here?",
          "Your friends do live near here?",
          "Do live your friends near here?",
          "Live your friends near here?",
        ],
        correct: "0",
        explanation: "'Do your friends live near here?' - correct question form",
      },
      {
        question: "Complete: '_____ Chris work on Sundays?'",
        options: ["Do", "Does", "Is", "Are"],
        correct: "1",
        explanation: "'Does Chris work on Sundays?' - singular subject with does",
      },
      {
        question: "What is the correct question form?",
        options: ["They like music?", "Do they like music?", "Like they music?", "Does they like music?"],
        correct: "1",
        explanation: "'Do they like music?' - correct present simple question",
      },
      {
        question: "Complete: '_____ James work hard?' 'Yes, he does.'",
        options: ["Do", "Does", "Is", "Working"],
        correct: "1",
        explanation: "'Does James work hard?' - singular with does",
      },
      {
        question: "How do you ask 'What is your job?' using 'What do you do?'",
        options: ["What you do do?", "What do you do?", "Do you what do?", "What doing are you?"],
        correct: "1",
        explanation: "'What do you do?' = 'What is your job?'",
      },
      {
        question: "Complete: 'Does your sister live in London?' What's the response?",
        options: ["No, she doesn't.", "No, doesn't live.", "No, she don't.", "No, not in London."],
        correct: "0",
        explanation: "Short answer: 'No, she doesn't.' (No, she does not live there.)",
      },
      {
        question: "Which question is correct?",
        options: ["Does he like music?", "Does he like music", "Does like he music?", "He does like music?"],
        correct: "0",
        explanation: "'Does he like music?' - correct question with rising intonation",
      },
      {
        question: "Complete: 'Do they _____ music?'",
        options: ["likes", "like", "liking", "to like"],
        correct: "1",
        explanation: "'Do they like music?' - use infinitive with do/does",
      },
      {
        question: "How do you ask about frequency in a question?",
        options: [
          "Does Chris always work on Sundays?",
          "Does Chris work always on Sundays?",
          "Always does Chris work Sundays?",
          "Sundays does Chris always work?",
        ],
        correct: "0",
        explanation: "'Does Chris always work on Sundays?' - adverb after subject",
      },
      {
        question: "Complete: 'What do you _____ at weekends?'",
        options: ["usually do", "do usually", "usually doing", "do doing"],
        correct: "0",
        explanation: "'What do you usually do at weekends?' - adverb before main verb",
      },
      {
        question: "What is the short answer to 'Do you play the guitar?'",
        options: ["Yes, I do.", "Yes, I play.", "Yes, guitar do.", "Yes, I'm playing."],
        correct: "0",
        explanation: "Short answer: 'Yes, I do.' (Yes, I play the guitar.)",
      },
      {
        question: "Which question form is correct?",
        options: [
          "Where do your parents live?",
          "Where your parents do live?",
          "Where live your parents?",
          "Do where your parents live?",
        ],
        correct: "0",
        explanation: "'Where do your parents live?' - question word + do/does + subject + verb",
      },
      {
        question: "Complete: 'How often do you _____ your hair?'",
        options: ["wash", "washes", "washing", "to wash"],
        correct: "0",
        explanation: "'How often do you wash your hair?' - infinitive after do",
      },
      {
        question: "What does 'Does Chris always work on Sundays?' ask?",
        options: [
          "Is Chris working on Sunday now?",
          "Will Chris work on Sundays?",
          "It's Chris's habit to work every Sunday?",
          "Did Chris work on Sunday last week?",
        ],
        correct: "2",
        explanation: "This asks about a habitual or regular action on Sundays.",
      },
      {
        question: "Complete: 'What does this word _____?'",
        options: ["means", "mean", "meaning", "to mean"],
        correct: "1",
        explanation: "'What does this word mean?' - infinitive with does",
      },
      {
        question: "Which is the correct negative response format?",
        options: [
          "Yes, l/we/you/they don't.",
          "No, l/we/you/they don't.",
          "No, he/she/it doesn't.",
          "Both B and C are correct",
        ],
        correct: "3",
        explanation: "Both are correct response patterns for different subjects.",
      },
      {
        question: "Complete: 'How much does it _____ to fly to Rome?'",
        options: ["cost", "costs", "costing", "to cost"],
        correct: "0",
        explanation: "'How much does it cost to fly to Rome?' - infinitive after does",
      },
      {
        question: "What is the correct question to ask someone's job?",
        options: ["What you do?", "What do you do?", "You do what?", "What are you do?"],
        correct: "1",
        explanation: "'What do you do?' is the standard question for asking about someone's job.",
      },
    ],
  },
  unit8: {
    name: "Unit 8: I am doing and I do (Present Continuous vs Present Simple)",
    description: "Distinguish between present continuous and present simple actions",
    questions: [
      {
        question: "Which sentence describes what's happening RIGHT NOW?",
        options: [
          "Jack plays the guitar very well.",
          "Jack is playing the guitar.",
          "Jack plays guitar every day.",
          "Jack plays when he's happy.",
        ],
        correct: "1",
        explanation: "Present continuous 'is playing' describes an action happening at this moment.",
      },
      {
        question: "Complete: 'Please be quiet. I _____.'",
        options: ["work", "am working", "works", "working"],
        correct: "1",
        explanation: "Use present continuous 'am working' for an action in progress right now.",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "Tom has a shower at the moment.",
          "Tom is having a shower at the moment.",
          "Tom have a shower moment.",
          "Tom having shower.",
        ],
        correct: "1",
        explanation: "'Tom is having a shower' - use present continuous for now/at the moment.",
      },
      {
        question: "Complete: 'Take an umbrella. It _____.'",
        options: ["rains", "is raining", "raining", "will rain"],
        correct: "1",
        explanation: "'It is raining' describes weather happening right now.",
      },
      {
        question: "Which sentence is ABOUT A HABIT?",
        options: [
          "I'm working right now.",
          "I work from 9 to 5 every day.",
          "I'm working at this moment.",
          "I'm working in the office now.",
        ],
        correct: "1",
        explanation: "'I work from 9 to 5' describes a regular habit, not a present action.",
      },
      {
        question: "Complete: 'Why _____ under the table? What _____ you _____?'",
        options: ["are you / are doing", "you are / you doing", "are you / are you doing", "you are / doing"],
        correct: "2",
        explanation: "'Why are you under the table? What are you doing?' - present continuous",
      },
      {
        question: "Which sentence is CORRECT?",
        options: [
          "You can turn off the TV. I'm not watching it.",
          "You can turn off the TV. I not watch it.",
          "You can turn off the TV. I don't watch.",
          "You can turn off the TV. I'm not watch it.",
        ],
        correct: "0",
        explanation: "'I'm not watching it' - present continuous for something not happening now.",
      },
      {
        question: "Complete: 'I _____ every day from 9 to 5:30.'",
        options: ["am working", "work", "am work", "working"],
        correct: "1",
        explanation: "'I work' - present simple for a regular schedule.",
      },
      {
        question: "What does 'Tom has a shower every morning' mean?",
        options: [
          "Tom is having a shower now.",
          "Tom's habit is to shower in the morning.",
          "Tom will have a shower tomorrow.",
          "Tom is about to have a shower.",
        ],
        correct: "1",
        explanation: "Present simple 'has' describes a regular, habitual action.",
      },
      {
        question: "Complete: 'It _____ a lot in winter.'",
        options: ["is raining", "rains", "rain", "raining"],
        correct: "1",
        explanation: "'It rains a lot' - present simple for a general fact about seasons.",
      },
      {
        question: "Which sentence uses the CORRECT TENSE?",
        options: [
          "I don't watch TV is very often.",
          "I'm not watching TV very often.",
          "I don't watch TV very often.",
          "I'm not watch TV often.",
        ],
        correct: "2",
        explanation: "'I don't watch TV very often' - present simple for frequency.",
      },
      {
        question: "Complete: 'What _____ you usually _____ at weekends?'",
        options: ["are / doing", "do / do", "are / do", "do / doing"],
        correct: "1",
        explanation: "'What do you usually do at weekends?' - present simple for habits.",
      },
      {
        question: "Which verbs DO NOT use present continuous?",
        options: [
          "like, want, know, understand, prefer",
          "play, work, watch, eat, drink",
          "run, walk, sit, stand, jump",
          "read, write, draw, paint, sing",
        ],
        correct: "0",
        explanation: "Mental state verbs (like, want, know, understand) use only present simple.",
      },
      {
        question: "Complete: 'I'm tired. I _____ to go home.'",
        options: ["am wanting", "want", "wants", "am want"],
        correct: "1",
        explanation: "'I want to go home' - 'want' (mental state) uses only present simple.",
      },
      {
        question: "Which sentence is CORRECT?",
        options: [
          "Do you know that girl? I'm not remembering her name.",
          "Do you know that girl? I don't remember her name.",
          "You know that girl? I'm not remembering.",
          "Knowing you that girl? I don't remember.",
        ],
        correct: "1",
        explanation: "'I don't remember' - mental state verbs use present simple only.",
      },
      {
        question: "Complete: 'I _____ understand. What _____ you _____?'",
        options: ["don't / are meaning", "don't / mean", "am not / meaning", "not / mean"],
        correct: "1",
        explanation: "'I don't understand. What do you mean?' - both use present simple.",
      },
      {
        question: "What's the difference between 'I'm tired' and 'I'm being tired'?",
        options: [
          "They mean the same thing.",
          "'I'm tired' is a state, 'I'm being tired' is an action.",
          "Only 'I'm tired' is correct (state verb).",
          "'I'm being' means intentionally tired.",
        ],
        correct: "2",
        explanation: "'I'm tired' is correct. 'I'm being tired' is not standard.",
      },
      {
        question: "How do you express Jack's SKILLS?",
        options: [
          "Jack is playing the guitar.",
          "Jack plays the guitar very well.",
          "Jack is playing guitar right now.",
          "Jack's playing the guitar.",
        ],
        correct: "1",
        explanation: "'Jack plays the guitar very well' - present simple for abilities.",
      },
      {
        question: "Complete: 'Is he playing the guitar?' 'No, he _____. But he plays guitar very _____.'",
        options: ["isn't / good", "isn't / well", "not is / good", "don't / very well"],
        correct: "1",
        explanation: "'No, he isn't. But he plays guitar very well.'",
      },
      {
        question: "Which describes the CURRENT SITUATION?",
        options: ["I work in a bank.", "I'm working in a bank right now.", "I work from 9 to 5.", "I'm a banker."],
        correct: "1",
        explanation: "'I'm working in a bank right now' - present continuous for now.",
      },
    ],
  },
  unit9: {
    name: "Unit 9: I have and I've got (Possessions and States)",
    description: "Understand have/has and have got/has got for possessions",
    questions: [
      {
        question: "Which is CORRECT?",
        options: [
          "I have blue eyes.",
          "I've got blue eyes.",
          "Both A and B are correct",
          "I have got blue eyes is wrong.",
        ],
        correct: "2",
        explanation: "'I have blue eyes' OR 'I've got blue eyes' - both are correct.",
      },
      {
        question: "Complete: 'Tom _____ two sisters.'",
        options: ["have got", "has got", "have", "Both B and C are correct"],
        correct: "3",
        explanation: "'Tom has got two sisters' OR 'Tom has two sisters' - both correct.",
      },
      {
        question: "What's the correct form for 'Our car'?",
        options: [
          "Our car have four doors.",
          "Our car has four doors.",
          "Our car have got four doors.",
          "Our car has got four doors (has four doors also correct)",
        ],
        correct: "3",
        explanation: "Both 'has four doors' and 'has got four doors' are correct.",
      },
      {
        question: "Complete: 'I don't _____ a car.'",
        options: ["have", "have got", "Both A and B are correct", "hasn't"],
        correct: "2",
        explanation: "'I don't have a car' OR 'I haven't got a car' - both correct.",
      },
      {
        question: "Which negative is CORRECT?",
        options: [
          "They don't have any children.",
          "They haven't got any children.",
          "Both A and B are correct",
          "They don't got children.",
        ],
        correct: "2",
        explanation: "Both forms are correct for expressing negatives.",
      },
      {
        question: "Complete: 'It's a nice house, but it _____ a garden.'",
        options: ["doesn't have", "hasn't got", "Both A and B are correct", "have not"],
        correct: "2",
        explanation: "'Doesn't have a garden' OR 'hasn't got a garden' - both correct.",
      },
      {
        question: "Complete: 'Amy _____ a job at the moment.'",
        options: ["doesn't have", "hasn't got", "Both A and B are correct", "don't has"],
        correct: "2",
        explanation: "Both 'doesn't have' and 'hasn't got' are correct forms.",
      },
      {
        question: "How do you ask a question with 'have'?",
        options: ["Do you have a camera?", "Have you got a camera?", "Both A and B are correct", "You have a camera?"],
        correct: "2",
        explanation: "Both question forms are correct.",
      },
      {
        question: "Complete: 'Does Helen _____ a car?' 'Yes, she _____.'",
        options: ["have / does", "have got / has", "Both A and B possible", "has / got"],
        correct: "2",
        explanation: "Both are acceptable: 'Does Helen have a car? Yes, she does.'",
      },
      {
        question: "What's the short answer to 'Have you got a camera?'",
        options: ["No, I haven't.", "No, I don't.", "Both A and B correct", "No, haven't got."],
        correct: "2",
        explanation: "'No, I haven't' OR 'No, I don't' are both correct short answers.",
      },
      {
        question: "Complete: 'What kind of car _____ she have?'",
        options: ["does", "has", "have", "got"],
        correct: "0",
        explanation: "'What kind of car does she have?' - question form with does.",
      },
      {
        question: "Complete: 'How many children _____ they _____?'",
        options: ["do / have", "have / got", "Both A and B correct", "does / have"],
        correct: "2",
        explanation: "Both 'do they have' and 'have they got' work for questions.",
      },
      {
        question: "What does 'Sarah has a headache' mean?",
        options: [
          "Sarah is experiencing pain in her head right now.",
          "Sarah is a person who always gets headaches.",
          "Sarah will have a headache tomorrow.",
          "Sarah had a headache yesterday.",
        ],
        correct: "0",
        explanation: "'Has a headache' describes her current physical state.",
      },
      {
        question: "Complete: 'They _____ a horse, three dogs and six _____.'",
        options: ["have / cats", "have got / cat", "has / cats", "has got / cat"],
        correct: "0",
        explanation: "'They have a horse, three dogs and six cats.'",
      },
      {
        question: "What's the difference between 'I have' and 'I've got'?",
        options: [
          "They mean completely different things.",
          "They mean the same thing - both are correct.",
          "'I have' is American, 'I've got' is British.",
          "'I have' is old-fashioned.",
        ],
        correct: "1",
        explanation: "Both express possession or states. Different forms, same meaning.",
      },
      {
        question: "Complete: 'He _____ got a cat, but he doesn't have a _____.'",
        options: ["has / dog", "have / dogs", "has / dogs", "have / dog"],
        correct: "2",
        explanation: "'He has got a cat, but he doesn't have any dogs.'",
      },
      {
        question: "How do you ask if someone has got something?",
        options: ["Has you got a pen?", "Have you got a pen?", "Do you have got a pen?", "You have a pen?"],
        correct: "1",
        explanation: "'Have you got a pen?' - correct question form with have got.",
      },
      {
        question: "Complete: 'I _____ a blue car. It _____ four doors and it's very _____.'",
        options: ["have / have / new", "have got / has / new", "have / has got / new", "has / has / new"],
        correct: "0",
        explanation: "'I have a blue car. It has four doors and it's very new.'",
      },
      {
        question: "What is the contraction of 'I have got'?",
        options: ["I have", "I've got", "I got", "I have't"],
        correct: "1",
        explanation: "The contraction is 'I've got' (I have got).",
      },
      {
        question: "Complete: 'Do you _____ a camera?' 'No, I _____.'",
        options: ["have / haven't", "have / don't", "have got / haven't got", "Both A and C correct"],
        correct: "3",
        explanation: "Both answer patterns work: 'No, I haven't' or 'No, I don't.'",
      },
    ],
  },
  unit10: {
    name: "Unit 10: was/were (Past Tense of 'to be')",
    description: "Master the past tense of 'to be' - was and were",
    questions: [
      {
        question: "Which is the correct past tense of 'am/is'?",
        options: ["were", "was", "be", "being"],
        correct: "1",
        explanation: "'I was' or 'he was' - use 'was' with singular subjects in past.",
      },
      {
        question: "Complete: 'I _____ tired last night.'",
        options: ["am", "is", "was", "were"],
        correct: "2",
        explanation: "'I was tired last night' - past tense of 'I am'.",
      },
      {
        question: "What's the past tense of 'you are'?",
        options: ["you was", "you were", "you am", "you be"],
        correct: "1",
        explanation: "'You were' - use 'were' with 'you' in past tense.",
      },
      {
        question: "Complete: 'At midnight last night, he _____ not at work. He _____ in bed.'",
        options: ["was / were", "were / was", "is / was", "are / were"],
        correct: "1",
        explanation: "'He was not at work. He was in bed.' - singular 'he' uses 'was'.",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "Last year Rachel were 22.",
          "Last year Rachel was 22.",
          "Last year Rachel be 22.",
          "Last year Rachel am 22.",
        ],
        correct: "1",
        explanation: "'Rachel was 22' - singular subject with 'was'.",
      },
      {
        question: "Complete: 'When I _____ a child, I _____ scared of dogs.'",
        options: ["was / was", "were / were", "am / is", "be / were"],
        correct: "0",
        explanation: "'When I was a child, I was scared of dogs.'",
      },
      {
        question: "Complete: 'We _____ hungry after the journey, but we _____ not tired.'",
        options: ["were / were", "was / was", "are / are", "be / be"],
        correct: "0",
        explanation: "'We were hungry... but we were not tired.' - plural uses 'were'.",
      },
      {
        question: "What's the correct negative form?",
        options: [
          "The hotel wasn't expensive.",
          "The hotel were not expensive.",
          "The hotel not was expensive.",
          "The hotel wasn't was expensive.",
        ],
        correct: "0",
        explanation: "'The hotel wasn't expensive' - correct negative past form.",
      },
      {
        question: "Complete: 'Was the weather nice when you _____ on holiday?'",
        options: ["are", "were", "was", "be"],
        correct: "1",
        explanation: "'When you were on holiday' - plural/you uses 'were'.",
      },
      {
        question: "What does 'Your shoes are nice. Were they expensive?' mean?",
        options: [
          "Your shoes will be expensive.",
          "Your shoes are not expensive.",
          "In the past, did your shoes cost a lot of money?",
          "Your shoes are currently expensive.",
        ],
        correct: "2",
        explanation: "'Were they expensive?' asks about the past cost of the shoes.",
      },
      {
        question: "Complete: 'Why _____ you late this morning?'",
        options: ["am", "is", "was", "were"],
        correct: "3",
        explanation: "'Why were you late this morning?' - past tense with 'you'.",
      },
      {
        question: "Which short answer is correct for 'Were you late?'",
        options: ["Yes, I was.", "Yes, I were.", "Yes, I'm.", "Yes, I am."],
        correct: "0",
        explanation: "Short answer: 'Yes, I was.' (I was late)",
      },
      {
        question: "Complete: 'Was Tom at work yesterday?' 'Yes, he _____.'",
        options: ["were", "am", "was", "is"],
        correct: "2",
        explanation: "Short answer: 'Yes, he was.'",
      },
      {
        question: "What's the correct negative response to 'Were Sue and Steve at the party?'",
        options: ["No, they wasn't.", "No, they weren't.", "No, they wasn't.", "No, they wasn't."],
        correct: "1",
        explanation: "'No, they weren't.' (No, they were not at the party)",
      },
      {
        question: "Complete: 'I _____ doing my homework. That's why I _____ not available.'",
        options: ["was / was", "were / were", "am / am", "be / be"],
        correct: "0",
        explanation: "'I was doing my homework. That's why I was not available.'",
      },
      {
        question: "What's the past tense of 'they are'?",
        options: ["they was", "they were", "they be", "they am"],
        correct: "1",
        explanation: "'They were' - plural uses 'were' in past tense.",
      },
      {
        question: "Which sentence uses past tense correctly?",
        options: [
          "Yesterday I am happy.",
          "Yesterday I was happy.",
          "Yesterday I be happy.",
          "Yesterday I were happy.",
        ],
        correct: "1",
        explanation: "'Yesterday I was happy' - past with singular 'I'.",
      },
      {
        question: "Complete: 'The weather _____ nice last week, but it _____ rainy yesterday.'",
        options: ["was / was", "were / were", "is / is", "be / be"],
        correct: "0",
        explanation: "'The weather was nice... it was rainy' - singular 'weather' uses 'was'.",
      },
      {
        question: "What does 'I wasn't at home yesterday' mean?",
        options: [
          "I am not at home now.",
          "I will not be at home tomorrow.",
          "In the past, I was not at home.",
          "I'm never at home.",
        ],
        correct: "2",
        explanation: "'I wasn't' is past tense - means I was not there in the past.",
      },
      {
        question: "How do you form a question with past 'to be'?",
        options: ["You were there?", "Were you there?", "Was you there?", "You was there?"],
        correct: "1",
        explanation: "'Were you there?' - question form with 'you' in past.",
      },
    ],
  },
   unit1111: {
  name: "Tenses",
  description: "Master the tense",
  questions: [
    {
      question: "Which helping verb and verb form are used in Present Simple tense?",
      options: [
        "am / is / are + V1 ing",
        "do / does + V1",
        "has / have + V3",
        "did + V2"
      ],
      correct: "1",
      explanation: "Present Simple uses 'do / does' as helping verb and V1 of verb."
    },

    {
      question: "Which helping verb and verb form are used in Present Continuous tense?",
      options: [
        "do / does + V1",
        "has / have + V3",
        "am / is / are + V1 ing",
        "was / were + V1 ing"
      ],
      correct: "2",
      explanation: "Present Continuous uses 'am / is / are' with V1 + ing."
    },

    {
      question: "Which helping verb and verb form are used in Present Perfect tense?",
      options: [
        "has / have + V3",
        "had + V3",
        "will have + V3",
        "am / is / are + ing"
      ],
      correct: "0",
      explanation: "Present Perfect uses 'has / have' with past participle (V3)."
    },

    {
      question: "Which helping verb and verb form are used in Present Perfect Continuous tense?",
      options: [
        "has been / have been + V1 ing",
        "had been + V1 ing",
        "will be + V1 ing",
        "do / does + V1"
      ],
      correct: "0",
      explanation: "Present Perfect Continuous uses 'has been / have been' with V1 + ing."
    },

    {
      question: "Which helping verb and verb form are used in Past Simple tense?",
      options: [
        "was / were + ing",
        "did + V1",
        "had + V3",
        "will + V1"
      ],
      correct: "1",
      explanation: "Past Simple uses 'did' as helping verb and V2 in statements."
    },

    {
      question: "Which helping verb and verb form are used in Past Continuous tense?",
      options: [
        "was / were + V1 ing",
        "am / is / are + ing",
        "had been + ing",
        "did + V2"
      ],
      correct: "0",
      explanation: "Past Continuous uses 'was / were' with V1 + ing."
    },

    {
      question: "Which helping verb and verb form are used in Past Perfect tense?",
      options: [
        "has / have + V3",
        "had + V3",
        "will have + V3",
        "did + V2"
      ],
      correct: "1",
      explanation: "Past Perfect uses 'had' with V3."
    },

    {
      question: "Which helping verb and verb form are used in Past Perfect Continuous tense?",
      options: [
        "has been + ing",
        "had been + V1 ing",
        "was / were + ing",
        "will be + ing"
      ],
      correct: "1",
      explanation: "Past Perfect Continuous uses 'had been' with V1 + ing."
    },

    {
      question: "Which helping verb and verb form are used in Future Simple tense?",
      options: [
        "will / shall + V1",
        "will be + ing",
        "will have + V3",
        "do / does + V1"
      ],
      correct: "0",
      explanation: "Future Simple uses 'will / shall' with V1 (V1)."
    },

    {
      question: "Which helping verb and verb form are used in Future Continuous tense?",
      options: [
        "will be + V1 ing",
        "will have + V3",
        "will + V1",
        "had been + ing"
      ],
      correct: "0",
      explanation: "Future Continuous uses 'will be' with V1 + ing."
    },

    {
      question: "Which helping verb and verb form are used in Future Perfect tense?",
      options: [
        "will have + V3",
        "has / have + V3",
        "had + V3",
        "will be + ing"
      ],
      correct: "0",
      explanation: "Future Perfect uses 'will have' with V3."
    },

    {
      question: "Which helping verb and verb form are used in Future Perfect Continuous tense?",
      options: [
        "will have been + V1 ing",
        "will be + ing",
        "had been + ing",
        "has been + ing"
      ],
      correct: "0",
      explanation: "Future Perfect Continuous uses 'will have been' with V1 + ing."
    },
     {
      question: "Helping verb: do / does, Verb form: V1",
      options: [
        "Present Simple",
        "Present Continuous",
        "Past Simple",
        "Future Simple"
      ],
      correct: "0",
      explanation: "Present Simple uses 'do / does' with V1 of verb."
    },

    {
      question: "Helping verb: am / is / are, Verb form: V1 + ing",
      options: [
        "Past Continuous",
        "Present Perfect",
        "Present Continuous",
        "Future Continuous"
      ],
      correct: "2",
      explanation: "Present Continuous uses 'am / is / are' with V1 + ing."
    },

    {
      question: "Helping verb: has / have, Verb form: V3",
      options: [
        "Past Perfect",
        "Present Perfect",
        "Future Perfect",
        "Past Simple"
      ],
      correct: "1",
      explanation: "Present Perfect uses 'has / have' with V3."
    },

    {
      question: "Helping verb: has been / have been, Verb form: V1 + ing",
      options: [
        "Past Perfect Continuous",
        "Future Perfect Continuous",
        "Present Perfect Continuous",
        "Present Continuous"
      ],
      correct: "2",
      explanation: "Present Perfect Continuous uses 'has been / have been' with V1 + ing."
    },

    {
      question: "Helping verb: did, Verb form: V2",
      options: [
        "Past Simple",
        "Present Simple",
        "Past Perfect",
        "Future Simple"
      ],
      correct: "0",
      explanation: "Past Simple uses 'did' (in questions/negatives) and V2."
    },

    {
      question: "Helping verb: was / were, Verb form: V1 + ing",
      options: [
        "Present Continuous",
        "Past Continuous",
        "Future Continuous",
        "Past Perfect Continuous"
      ],
      correct: "1",
      explanation: "Past Continuous uses 'was / were' with V1 + ing."
    },

    {
      question: "Helping verb: had, Verb form: V3",
      options: [
        "Past Perfect",
        "Present Perfect",
        "Future Perfect",
        "Past Simple"
      ],
      correct: "0",
      explanation: "Past Perfect uses 'had' with V3."
    },

    {
      question: "Helping verb: had been, Verb form: V1 + ing",
      options: [
        "Past Perfect Continuous",
        "Present Perfect Continuous",
        "Future Perfect Continuous",
        "Past Continuous"
      ],
      correct: "0",
      explanation: "Past Perfect Continuous uses 'had been' with V1 + ing."
    },

    {
      question: "Helping verb: will / shall, Verb form: V1",
      options: [
        "Future Simple",
        "Present Simple",
        "Future Continuous",
        "Future Perfect"
      ],
      correct: "0",
      explanation: "Future Simple uses 'will / shall' with V1."
    },

    {
      question: "Helping verb: will be, Verb form: V1 + ing",
      options: [
        "Future Continuous",
        "Present Continuous",
        "Past Continuous",
        "Future Perfect Continuous"
      ],
      correct: "0",
      explanation: "Future Continuous uses 'will be' with V1 + ing."
    },

    {
      question: "Helping verb: will have, Verb form: V3",
      options: [
        "Future Perfect",
        "Present Perfect",
        "Past Perfect",
        "Future Simple"
      ],
      correct: "0",
      explanation: "Future Perfect uses 'will have' with V3."
    },

    {
      question: "Helping verb: will have been, Verb form: V1 + ing",
      options: [
        "Future Perfect Continuous",
        "Present Perfect Continuous",
        "Past Perfect Continuous",
        "Future Continuous"
      ],
      correct: "0",
      explanation: "Future Perfect Continuous uses 'will have been' with V1 + ing."
    }  
  ]
},

   unit133: {
  name: "Identify the Scentence",
  description: "Choose the correct tense from the sentence",
  questions: [
    {
  question: "Present Simple",
  options: [
    "He plays cricket daily.",
    "He is playing cricket.",
    "He played cricket.",
    "He will play cricket."
  ],
  correct: "He plays cricket daily."
},
{
  question: "Present Continuous",
  options: [
    "She cooks food.",
    "She cooked food.",
    "She is cooking food.",
    "She will cook food."
  ],
  correct: "She is cooking food."
},
{
  question: "Past Simple",
  options: [
    "They play football.",
    "They are playing football.",
    "They played football.",
    "They will play football."
  ],
  correct: "They played football."
},
{
  question: "Future Simple",
  options: [
    "I go to school.",
    "I went to school.",
    "I am going to school.",
    "I will go to school."
  ],
  correct: "I will go to school."
},
{
  question: "Present Perfect",
  options: [
    "She finishes work.",
    "She finished work.",
    "She has finished work.",
    "She is finishing work."
  ],
  correct: "She has finished work."
},
{
  question: "Past Continuous",
  options: [
    "I sleep.",
    "I slept.",
    "I was sleeping.",
    "I will sleep."
  ],
  correct: "I was sleeping."
},
{
  question: "Future Continuous",
  options: [
    "He studies now.",
    "He studied yesterday.",
    "He will be studying tomorrow.",
    "He has studied already."
  ],
  correct: "He will be studying tomorrow."
},
{
  question: "Past Perfect",
  options: [
    "She leaves early.",
    "She left early.",
    "She had left early.",
    "She is leaving early."
  ],
  correct: "She had left early."
},
{
  question: "Present Perfect Continuous",
  options: [
    "I study here.",
    "I studied here.",
    "I have been studying here.",
    "I will study here."
  ],
  correct: "I have been studying here."
},
{
  question: "Future Perfect",
  options: [
    "They finish work.",
    "They finished work.",
    "They will have finished work.",
    "They are finishing work."
  ],
  correct: "They will have finished work."
},

{
  question: "Past Perfect Continuous",
  options: [
    "He works here.",
    "He was working here.",
    "He had been working here.",
    "He will work here."
  ],
  correct: "He had been working here."
},
{
  question: "Future Perfect Continuous",
  options: [
    "She works here.",
    "She worked here.",
    "She will have been working here.",
    "She is working here."
  ],
  correct: "She will have been working here."
},
{
  question: "Present Simple",
  options: [
    "Birds are flying.",
    "Birds fly in the sky.",
    "Birds flew yesterday.",
    "Birds will fly."
  ],
  correct: "Birds fly in the sky."
},
{
  question: "Present Continuous",
  options: [
    "We learn English.",
    "We learned English.",
    "We are learning English.",
    "We will learn English."
  ],
  correct: "We are learning English."
},
{
  question: "Past Simple",
  options: [
    "He buys a car.",
    "He bought a car.",
    "He is buying a car.",
    "He has bought a car."
  ],
  correct: "He bought a car."
},
{
  question: "Future Simple",
  options: [
    "I eat food.",
    "I ate food.",
    "I am eating food.",
    "I will eat food."
  ],
  correct: "I will eat food."
},
{
  question: "Present Perfect",
  options: [
    "She loses keys.",
    "She lost keys.",
    "She has lost keys.",
    "She is losing keys."
  ],
  correct: "She has lost keys."
},
{
  question: "Past Continuous",
  options: [
    "They play outside.",
    "They were playing outside.",
    "They played outside.",
    "They will play outside."
  ],
  correct: "They were playing outside."
},
{
  question: "Future Continuous",
  options: [
    "I travel tomorrow.",
    "I traveled tomorrow.",
    "I will be traveling tomorrow.",
    "I have traveled tomorrow."
  ],
  correct: "I will be traveling tomorrow."
},
{
  question: "Past Perfect",
  options: [
    "We eat dinner.",
    "We ate dinner.",
    "We had eaten dinner.",
    "We are eating dinner."
  ],
  correct: "We had eaten dinner."
},

{
  question: "Present Perfect Continuous",
  options: [
    "She is waiting.",
    "She waited.",
    "She has been waiting.",
    "She will wait."
  ],
  correct: "She has been waiting."
},
{
  question: "Future Perfect",
  options: [
    "I complete work.",
    "I completed work.",
    "I will have completed work.",
    "I am completing work."
  ],
  correct: "I will have completed work."
},
{
  question: "Past Perfect Continuous",
  options: [
    "They work here.",
    "They were working here.",
    "They had been working here.",
    "They will work here."
  ],
  correct: "They had been working here."
},
{
  question: "Future Perfect Continuous",
  options: [
    "He studies here.",
    "He studied here.",
    "He will have been studying here.",
    "He is studying here."
  ],
  correct: "He will have been studying here."
},
{
  question: "Present Simple",
  options: [
    "She is going to school.",
    "She goes to school.",
    "She went to school.",
    "She will go to school."
  ],
  correct: "She goes to school."
},
{
  question: "Present Continuous",
  options: [
    "I read a book.",
    "I am reading a book.",
    "I read a book yesterday.",
    "I will read a book."
  ],
  correct: "I am reading a book."
},
{
  question: "Past Simple",
  options: [
    "He eats rice.",
    "He is eating rice.",
    "He ate rice.",
    "He has eaten rice."
  ],
  correct: "He ate rice."
},
{
  question: "Future Simple",
  options: [
    "They play football.",
    "They played football.",
    "They are playing football.",
    "They will play football."
  ],
  correct: "They will play football."
},
{
  question: "Present Perfect",
  options: [
    "She writes a letter.",
    "She wrote a letter.",
    "She has written a letter.",
    "She is writing a letter."
  ],
  correct: "She has written a letter."
},
{
  question: "Past Continuous",
  options: [
    "I cook food.",
    "I cooked food.",
    "I was cooking food.",
    "I will cook food."
  ],
  correct: "I was cooking food."
},
{
  question: "Future Continuous",
  options: [
    "He works tomorrow.",
    "He worked tomorrow.",
    "He will be working tomorrow.",
    "He has worked tomorrow."
  ],
  correct: "He will be working tomorrow."
},
{
  question: "Past Perfect",
  options: [
    "She finishes work.",
    "She finished work.",
    "She had finished work.",
    "She is finishing work."
  ],
  correct: "She had finished work."
},
{
  question: "Present Perfect Continuous",
  options: [
    "I play here.",
    "I played here.",
    "I have been playing here.",
    "I will play here."
  ],
  correct: "I have been playing here."
},
{
  question: "Future Perfect",
  options: [
    "They complete the task.",
    "They completed the task.",
    "They will have completed the task.",
    "They are completing the task."
  ],
  correct: "They will have completed the task."
},
{
  question: "Past Perfect Continuous",
  options: [
    "He studies all day.",
    "He was studying all day.",
    "He had been studying all day.",
    "He will study all day."
  ],
  correct: "He had been studying all day."
},
{
  question: "Future Perfect Continuous",
  options: [
    "She works here.",
    "She worked here.",
    "She will have been working here.",
    "She is working here."
  ],
  correct: "She will have been working here."
},

{
  question: "Present Simple",
  options: [
    "Cats are drinking milk.",
    "Cats drink milk.",
    "Cats drank milk.",
    "Cats will drink milk."
  ],
  correct: "Cats drink milk."
},
{
  question: "Present Continuous",
  options: [
    "We watch TV.",
    "We watched TV.",
    "We are watching TV.",
    "We will watch TV."
  ],
  correct: "We are watching TV."
},
{
  question: "Past Simple",
  options: [
    "She cleans the room.",
    "She cleaned the room.",
    "She is cleaning the room.",
    "She has cleaned the room."
  ],
  correct: "She cleaned the room."
},
{
  question: "Future Simple",
  options: [
    "I finish homework.",
    "I finished homework.",
    "I am finishing homework.",
    "I will finish homework."
  ],
  correct: "I will finish homework."
},
{
  question: "Present Perfect",
  options: [
    "He breaks the glass.",
    "He broke the glass.",
    "He has broken the glass.",
    "He is breaking the glass."
  ],
  correct: "He has broken the glass."
},
{
  question: "Past Continuous",
  options: [
    "They sleep early.",
    "They slept early.",
    "They were sleeping early.",
    "They will sleep early."
  ],
  correct: "They were sleeping early."
},
{
  question: "Future Continuous",
  options: [
    "I study at night.",
    "I studied at night.",
    "I will be studying at night.",
    "I have studied at night."
  ],
  correct: "I will be studying at night."
},
{
  question: "Past Perfect",
  options: [
    "We start work.",
    "We started work.",
    "We had started work.",
    "We are starting work."
  ],
  correct: "We had started work."
},
{
  question: "Present Perfect Continuous",
  options: [
    "She sings here.",
    "She sang here.",
    "She has been singing here.",
    "She will sing here."
  ],
  correct: "She has been singing here."
},
{
  question: "Future Perfect",
  options: [
    "He writes the report.",
    "He wrote the report.",
    "He will have written the report.",
    "He is writing the report."
  ],
  correct: "He will have written the report."
},
{
  question: "Past Perfect Continuous",
  options: [
    "They travel together.",
    "They were traveling together.",
    "They had been traveling together.",
    "They will travel together."
  ],
  correct: "They had been traveling together."
},
{
  question: "Future Perfect Continuous",
  options: [
    "I learn English.",
    "I learned English.",
    "I will have been learning English.",
    "I am learning English."
  ],
  correct: "I will have been learning English."
},
// ===== NEXT 30 QUESTIONS =====

{
  question: "Present Simple",
  options: [
    "He is running now.",
    "He runs every morning.",
    "He ran yesterday.",
    "He will run tomorrow."
  ],
  correct: "He runs every morning."
},
{
  question: "Present Continuous",
  options: [
    "She sings well.",
    "She sang well.",
    "She is singing now.",
    "She will sing soon."
  ],
  correct: "She is singing now."
},
{
  question: "Past Simple",
  options: [
    "They are eating food.",
    "They eat food.",
    "They ate food.",
    "They will eat food."
  ],
  correct: "They ate food."
},
{
  question: "Future Simple",
  options: [
    "I watch TV.",
    "I watched TV.",
    "I am watching TV.",
    "I will watch TV."
  ],
  correct: "I will watch TV."
},
{
  question: "Present Perfect",
  options: [
    "She cleans the room.",
    "She cleaned the room.",
    "She has cleaned the room.",
    "She is cleaning the room."
  ],
  correct: "She has cleaned the room."
},
{
  question: "Past Continuous",
  options: [
    "I write a letter.",
    "I wrote a letter.",
    "I was writing a letter.",
    "I will write a letter."
  ],
  correct: "I was writing a letter."
},
{
  question: "Future Continuous",
  options: [
    "He works late.",
    "He worked late.",
    "He will be working late.",
    "He has worked late."
  ],
  correct: "He will be working late."
},
{
  question: "Past Perfect",
  options: [
    "She starts school.",
    "She started school.",
    "She had started school.",
    "She is starting school."
  ],
  correct: "She had started school."
},
{
  question: "Present Perfect Continuous",
  options: [
    "I play football.",
    "I played football.",
    "I have been playing football.",
    "I will play football."
  ],
  correct: "I have been playing football."
},
{
  question: "Future Perfect",
  options: [
    "They finish the job.",
    "They finished the job.",
    "They will have finished the job.",
    "They are finishing the job."
  ],
  correct: "They will have finished the job."
},

{
  question: "Past Perfect Continuous",
  options: [
    "He studies here.",
    "He was studying here.",
    "He had been studying here.",
    "He will study here."
  ],
  correct: "He had been studying here."
},
{
  question: "Future Perfect Continuous",
  options: [
    "She teaches math.",
    "She taught math.",
    "She will have been teaching math.",
    "She is teaching math."
  ],
  correct: "She will have been teaching math."
},
{
  question: "Present Simple",
  options: [
    "Dogs are barking.",
    "Dogs bark loudly.",
    "Dogs barked loudly.",
    "Dogs will bark loudly."
  ],
  correct: "Dogs bark loudly."
},
{
  question: "Present Continuous",
  options: [
    "We make a plan.",
    "We made a plan.",
    "We are making a plan.",
    "We will make a plan."
  ],
  correct: "We are making a plan."
},
{
  question: "Past Simple",
  options: [
    "She opens the door.",
    "She opened the door.",
    "She is opening the door.",
    "She has opened the door."
  ],
  correct: "She opened the door."
},
{
  question: "Future Simple",
  options: [
    "I help you.",
    "I helped you.",
    "I am helping you.",
    "I will help you."
  ],
  correct: "I will help you."
},
{
  question: "Present Perfect",
  options: [
    "He breaks the cup.",
    "He broke the cup.",
    "He has broken the cup.",
    "He is breaking the cup."
  ],
  correct: "He has broken the cup."
},
{
  question: "Past Continuous",
  options: [
    "They talk loudly.",
    "They talked loudly.",
    "They were talking loudly.",
    "They will talk loudly."
  ],
  correct: "They were talking loudly."
},
{
  question: "Future Continuous",
  options: [
    "I read tonight.",
    "I read last night.",
    "I will be reading tonight.",
    "I have read tonight."
  ],
  correct: "I will be reading tonight."
},
{
  question: "Past Perfect",
  options: [
    "We reach home.",
    "We reached home.",
    "We had reached home.",
    "We are reaching home."
  ],
  correct: "We had reached home."
},

{
  question: "Present Perfect Continuous",
  options: [
    "She dances here.",
    "She danced here.",
    "She has been dancing here.",
    "She will dance here."
  ],
  correct: "She has been dancing here."
},
{
  question: "Future Perfect",
  options: [
    "He completes the course.",
    "He completed the course.",
    "He will have completed the course.",
    "He is completing the course."
  ],
  correct: "He will have completed the course."
},
{
  question: "Past Perfect Continuous",
  options: [
    "They wait outside.",
    "They were waiting outside.",
    "They had been waiting outside.",
    "They will wait outside."
  ],
  correct: "They had been waiting outside."
},
{
  question: "Future Perfect Continuous",
  options: [
    "I live here.",
    "I lived here.",
    "I will have been living here.",
    "I am living here."
  ],
  correct: "I will have been living here."
},
{
  question: "Present Simple",
  options: [
    "She is smiling.",
    "She smiles a lot.",
    "She smiled yesterday.",
    "She will smile later."
  ],
  correct: "She smiles a lot."
},
{
  question: "Present Continuous",
  options: [
    "He fixes the bike.",
    "He fixed the bike.",
    "He is fixing the bike.",
    "He will fix the bike."
  ],
  correct: "He is fixing the bike."
},
{
  question: "Past Simple",
  options: [
    "I answer the call.",
    "I answered the call.",
    "I am answering the call.",
    "I have answered the call."
  ],
  correct: "I answered the call."
},
{
  question: "Future Simple",
  options: [
    "They join us.",
    "They joined us.",
    "They are joining us.",
    "They will join us."
  ],
  correct: "They will join us."
},
{
  question: "Present Perfect",
  options: [
    "We see the place.",
    "We saw the place.",
    "We have seen the place.",
    "We are seeing the place."
  ],
  correct: "We have seen the place."
},
// ===== NEXT 30 QUESTIONS =====

{
  question: "Present Simple",
  options: [
    "She is walking now.",
    "She walks every evening.",
    "She walked yesterday.",
    "She will walk tomorrow."
  ],
  correct: "She walks every evening."
},
{
  question: "Present Continuous",
  options: [
    "He plays chess.",
    "He played chess.",
    "He is playing chess.",
    "He will play chess."
  ],
  correct: "He is playing chess."
},
{
  question: "Past Simple",
  options: [
    "They are cleaning the room.",
    "They clean the room.",
    "They cleaned the room.",
    "They will clean the room."
  ],
  correct: "They cleaned the room."
},
{
  question: "Future Simple",
  options: [
    "I finish my work.",
    "I finished my work.",
    "I am finishing my work.",
    "I will finish my work."
  ],
  correct: "I will finish my work."
},
{
  question: "Present Perfect",
  options: [
    "She opens the shop.",
    "She opened the shop.",
    "She has opened the shop.",
    "She is opening the shop."
  ],
  correct: "She has opened the shop."
},
{
  question: "Past Continuous",
  options: [
    "I drive the car.",
    "I drove the car.",
    "I was driving the car.",
    "I will drive the car."
  ],
  correct: "I was driving the car."
},
{
  question: "Future Continuous",
  options: [
    "He works at night.",
    "He worked at night.",
    "He will be working at night.",
    "He has worked at night."
  ],
  correct: "He will be working at night."
},
{
  question: "Past Perfect",
  options: [
    "She cooks dinner.",
    "She cooked dinner.",
    "She had cooked dinner.",
    "She is cooking dinner."
  ],
  correct: "She had cooked dinner."
},
{
  question: "Present Perfect Continuous",
  options: [
    "I read books.",
    "I read books yesterday.",
    "I have been reading books.",
    "I will read books."
  ],
  correct: "I have been reading books."
},
{
  question: "Future Perfect",
  options: [
    "They complete the exam.",
    "They completed the exam.",
    "They will have completed the exam.",
    "They are completing the exam."
  ],
  correct: "They will have completed the exam."
},

{
  question: "Past Perfect Continuous",
  options: [
    "He trains daily.",
    "He was training daily.",
    "He had been training daily.",
    "He will train daily."
  ],
  correct: "He had been training daily."
},
{
  question: "Future Perfect Continuous",
  options: [
    "She lives here.",
    "She lived here.",
    "She will have been living here.",
    "She is living here."
  ],
  correct: "She will have been living here."
},
{
  question: "Present Simple",
  options: [
    "The sun is rising.",
    "The sun rises in the east.",
    "The sun rose yesterday.",
    "The sun will rise later."
  ],
  correct: "The sun rises in the east."
},
{
  question: "Present Continuous",
  options: [
    "We plan the trip.",
    "We planned the trip.",
    "We are planning the trip.",
    "We will plan the trip."
  ],
  correct: "We are planning the trip."
},
{
  question: "Past Simple",
  options: [
    "She answers the phone.",
    "She answered the phone.",
    "She is answering the phone.",
    "She has answered the phone."
  ],
  correct: "She answered the phone."
},
{
  question: "Future Simple",
  options: [
    "I join the class.",
    "I joined the class.",
    "I am joining the class.",
    "I will join the class."
  ],
  correct: "I will join the class."
},
{
  question: "Present Perfect",
  options: [
    "He fixes the bike.",
    "He fixed the bike.",
    "He has fixed the bike.",
    "He is fixing the bike."
  ],
  correct: "He has fixed the bike."
},
{
  question: "Past Continuous",
  options: [
    "They watch the match.",
    "They watched the match.",
    "They were watching the match.",
    "They will watch the match."
  ],
  correct: "They were watching the match."
},
{
  question: "Future Continuous",
  options: [
    "I sleep early.",
    "I slept early.",
    "I will be sleeping early.",
    "I have slept early."
  ],
  correct: "I will be sleeping early."
},
{
  question: "Past Perfect",
  options: [
    "We start the meeting.",
    "We started the meeting.",
    "We had started the meeting.",
    "We are starting the meeting."
  ],
  correct: "We had started the meeting."
},

{
  question: "Present Perfect Continuous",
  options: [
    "She paints pictures.",
    "She painted pictures.",
    "She has been painting pictures.",
    "She will paint pictures."
  ],
  correct: "She has been painting pictures."
},
{
  question: "Future Perfect",
  options: [
    "He submits the form.",
    "He submitted the form.",
    "He will have submitted the form.",
    "He is submitting the form."
  ],
  correct: "He will have submitted the form."
},
{
  question: "Past Perfect Continuous",
  options: [
    "They wait in line.",
    "They were waiting in line.",
    "They had been waiting in line.",
    "They will wait in line."
  ],
  correct: "They had been waiting in line."
},



  ]
},
   unit11112: {
  name: "Identify the Tense",
  description: "Choose the correct tense from the sentence",
  questions: [
    { question: "Do you play football every day?", options: TENSE_OPTIONS, correct: "0" },
    { question: "Is she watching TV right now?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Have they finished their homework?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Did you call him yesterday?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Will you help me tomorrow?", options: TENSE_OPTIONS, correct: "8" },
    { question: "Was she cooking when I arrived?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Has he been studying for two hours?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Had they left before the rain started?", options: TENSE_OPTIONS, correct: "6" },
    { question: "Will she be traveling next week?", options: TENSE_OPTIONS, correct: "9" },
    { question: "Does he work in an office?", options: TENSE_OPTIONS, correct: "0" },

    { question: "Are you learning English these days?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Have you ever visited Karachi?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Did she pass the exam?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Were they playing outside?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Had he finished the work?", options: TENSE_OPTIONS, correct: "6" },
    { question: "Will they have completed the project by Monday?", options: TENSE_OPTIONS, correct: "10" },
    { question: "Has it stopped raining?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Will he have been living here for five years?", options: TENSE_OPTIONS, correct: "11" },
    { question: "Do we need more time?", options: TENSE_OPTIONS, correct: "0" },
    { question: "Is it raining now?", options: TENSE_OPTIONS, correct: "1" },

    { question: "Have you been waiting long?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Did they buy a new car?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Was he driving fast?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Had she already eaten?", options: TENSE_OPTIONS, correct: "6" },
    { question: "Will we meet again?", options: TENSE_OPTIONS, correct: "8" },
    { question: "Are they working at the moment?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Has she called you?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Did it rain yesterday?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Were you sleeping at that time?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Will I be waiting for you?", options: TENSE_OPTIONS, correct: "9" },

    { question: "Have they been working here for years?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Does she like coffee?", options: TENSE_OPTIONS, correct: "0" },
    { question: "Will she have finished her work?", options: TENSE_OPTIONS, correct: "10" },
    { question: "Had he been working all day?", options: TENSE_OPTIONS, correct: "7" },
    { question: "Is he playing cricket now?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Did you see that movie?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Have you completed the task?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Were they watching TV?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Will it rain tomorrow?", options: TENSE_OPTIONS, correct: "8" },
    { question: "Do they live near the school?", options: TENSE_OPTIONS, correct: "0" },

    { question: "Has she been feeling better?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Had we met before?", options: TENSE_OPTIONS, correct: "6" },
    { question: "Will you be studying tonight?", options: TENSE_OPTIONS, correct: "9" },
    { question: "Did he break the glass?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Is she teaching English now?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Have they seen this place?", options: TENSE_OPTIONS, correct: "2" },
    { question: "Were you working late?", options: TENSE_OPTIONS, correct: "5" },
    { question: "Will they have arrived by noon?", options: TENSE_OPTIONS, correct: "10" },
    { question: "Does it rain a lot here?", options: TENSE_OPTIONS, correct: "0" },
    { question: "Had she been crying?", options: TENSE_OPTIONS, correct: "7" },

    { question: "Will you call me later?", options: TENSE_OPTIONS, correct: "8" },
    { question: "Have you been learning coding?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Did we miss the bus?", options: TENSE_OPTIONS, correct: "4" },
    { question: "Is he sleeping right now?", options: TENSE_OPTIONS, correct: "1" },
    { question: "Had the train left already?", options: TENSE_OPTIONS, correct: "6" },
    { question: "Will she be waiting for us?", options: TENSE_OPTIONS, correct: "9" },
    { question: "Do you understand this lesson?", options: TENSE_OPTIONS, correct: "0" },
    { question: "Have they been arguing?", options: TENSE_OPTIONS, correct: "3" },
    { question: "Will he have completed the course?", options: TENSE_OPTIONS, correct: "10" },
    { question: "Will she have been working here for ten years?", options: TENSE_OPTIONS, correct: "11" },
    { question: "Does she go to school by bus?", options: TENSE_OPTIONS, correct: "0" },
  { question: "Are they having lunch right now?", options: TENSE_OPTIONS, correct: "1" },
  { question: "Have you checked your email?", options: TENSE_OPTIONS, correct: "2" },
  { question: "Has he been working since morning?", options: TENSE_OPTIONS, correct: "3" },
  { question: "Did she lose her keys?", options: TENSE_OPTIONS, correct: "4" },
  { question: "Was it snowing last night?", options: TENSE_OPTIONS, correct: "5" },
  { question: "Had they completed the test?", options: TENSE_OPTIONS, correct: "6" },
  { question: "Had she been waiting long?", options: TENSE_OPTIONS, correct: "7" },
  { question: "Will you join us later?", options: TENSE_OPTIONS, correct: "8" },
  { question: "Will he be driving tonight?", options: TENSE_OPTIONS, correct: "9" },

  { question: "Will they have reached home by now?", options: TENSE_OPTIONS, correct: "10" },
  { question: "Will she have been studying for hours?", options: TENSE_OPTIONS, correct: "11" },
  { question: "Do we have enough time?", options: TENSE_OPTIONS, correct: "0" },
  { question: "Is the baby sleeping now?", options: TENSE_OPTIONS, correct: "1" },
  { question: "Have they already paid the bill?", options: TENSE_OPTIONS, correct: "2" },
  { question: "Have you been feeling tired?", options: TENSE_OPTIONS, correct: "3" },
  { question: "Did he forget your name?", options: TENSE_OPTIONS, correct: "4" },
  { question: "Were you listening to music?", options: TENSE_OPTIONS, correct: "5" },
  { question: "Had I seen you before?", options: TENSE_OPTIONS, correct: "6" },
  { question: "Had it been raining all night?", options: TENSE_OPTIONS, correct: "7" },

  { question: "Will she call you tomorrow?", options: TENSE_OPTIONS, correct: "8" },
  { question: "Will they be staying here?", options: TENSE_OPTIONS, correct: "9" },
  { question: "Will he have learned English by then?", options: TENSE_OPTIONS, correct: "10" },
  { question: "Will you have been working all day?", options: TENSE_OPTIONS, correct: "11" },
  { question: "Do they understand the rules?", options: TENSE_OPTIONS, correct: "0" },
  { question: "Is she cleaning the room?", options: TENSE_OPTIONS, correct: "1" },
  { question: "Have we solved the problem?", options: TENSE_OPTIONS, correct: "2" },
  { question: "Has it been getting colder?", options: TENSE_OPTIONS, correct: "3" },
  { question: "Did the teacher explain the lesson?", options: TENSE_OPTIONS, correct: "4" },
  { question: "Was he shouting at you?", options: TENSE_OPTIONS, correct: "5" },

  { question: "Had she locked the door?", options: TENSE_OPTIONS, correct: "6" },
  { question: "Had they been arguing before you came?", options: TENSE_OPTIONS, correct: "7" },
  { question: "Will it be sunny tomorrow?", options: TENSE_OPTIONS, correct: "8" },
  { question: "Will you be using the computer?", options: TENSE_OPTIONS, correct: "9" },
  { question: "Will they have cleaned the house?", options: TENSE_OPTIONS, correct: "10" },
  { question: "Will she have been teaching here for years?", options: TENSE_OPTIONS, correct: "11" }

  
  ]
  
}
}
