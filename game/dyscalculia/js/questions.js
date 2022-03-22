// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    block: "true",
    question: "pink",
    answer: "Pink",
    options: [
      "Yellow",
      "Green",
      "Pink",
      "Red"
    ]
  },
  {
    numb: 2,
    block: "false",
    question: "Red",
    answer: "Red",
    options: [
      "Black",
      "Pink",
      "Red",
      "Brown"
    ]
  },
  {
    numb: 3,
    block: "true",
    question: "Black",
    answer: "Black",
    options: [
      "Grey",
      "Blue",
      "Black",
      "Brown"
    ]
  },
  {
    numb: 4,
    block: "false",
    question: "Light Blue",
    answer: "#61E5FE",
    options: [
      "#61E5FE",
      "#0968BE",
      "Brown",
      "Green"
    ]
  },
  {
    numb: 5,
    block: "false",
    question: "White",
    answer: "White",
    options: [
      "Yellow",
      "Pink",
      "Cream",
      "White"
    ]
  },

  //Image Question
  {
    numb: 6,
    block: "true",
    question: "https://img.icons8.com/emoji/48/000000/cat-emoji.png",
    answer: "Cat",
    options: [
      "Cat",
      "Tac",
      "Dog",
      "Lion"
    ]
  },
  {
    numb: 7,
    block: "false",
    question: "Table",
    answer: "https://img.icons8.com/color/48/000000/table.png",
    options: [
      "https://img.icons8.com/color/48/000000/chair.png",
      "https://img.icons8.com/color/48/000000/table.png",
      "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-stool-beer-xnimrodx-lineal-color-xnimrodx.png",
      "https://img.icons8.com/color/48/000000/bureau.png",
    ]
  },
  {
    numb: 8,
    block: "true",
    question: "https://img.icons8.com/external-filled-color-icons-papa-vector/78/000000/external-bat-cricket-championship-color-filled-filled-color-icons-papa-vector.png",
    answer: "Bat",
    options: [
      "Bat",
      "Tab",
      "Dat",
      "Batt"
    ]
  },
  {
    numb: 9,
    block: "false",
    question: "Gate",
    answer: "https://img.icons8.com/fluency/48/000000/front-gate-closed.png",
    options: [
      "https://img.icons8.com/color/48/000000/micropore-tape.png",
      "https://img.icons8.com/fluency/48/000000/front-gate-closed.png",
      "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-Goat-chinese-new-year-bearicons-flat-bearicons.png",
      "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-tag-marketing-seo-flatart-icons-flat-flatarticons.png"
    ]
  },
  {
    numb: 10,
    block: "true",
    question: "https://img.icons8.com/external-konkapp-flat-konkapp/64/000000/external-plate-kitchen-konkapp-flat-konkapp.png",
    answer: "Plate",
    options: [
      "Page",
      "Tape",
      "Plate",
      "Palte"
    ]
  },

  //Numbers
  {
    numb: 11,
    block: "nil",
    question: "Forty Nine",
    answer: "49",
    options: [
      "49",
      "46",
      "409",
      "94"
    ]
  },
  {
    numb: 12,
    block: "nil",
    question: "75",
    answer: "Seventy Five",
    options: [
      "Seventy Six",
      "Seventy Five",
      "Twenty Seven",
      "Seventeen"
    ]
  },
  {
    numb: 13,
    block: "nil",
    question: "Ninety Five",
    answer: "95",
    options: [
      "59",
      "95",
      "65",
      "96"
    ]
  },
  {
    numb: 14,
    block: "nil",
    question: "95",
    answer: "Ninety Five",
    options: [
      "Ninety Five",
      "Sixty Five",
      "Ninnnty Five",
      "Nine Five"
    ]
  },
  {
    numb: 15,
    block: "nil",
    question: "Seventeen",
    answer: "Seventeen",
    options: [
      "One Seven",
      "Seventy",
      "Seventy One",
      "Seventeen"
    ]
  },

  //text
  {
    numb: 16,
    block: "nil",
    question: "was",
    answer: "was",
    options: [
      "saw",
      "wsa",
      "was",
      "swa"
    ]
  },
  {
    numb: 17,
    block: "nil",
    question: "man",
    answer: "man",
    options: [
      "mann",
      "nam",
      "anm",
      "man"
    ]
  },
  {
    numb: 18,
    block: "nil",
    question: "dig",
    answer: "dig",
    options: [
      "big",
      "dig",
      "gig",
      "gid"
    ]
  },
  {
    numb: 19,
    block: "nil",
    question: "can",
    answer: "can",
    options: [
      "nac",
      "dac",
      "cam",
      "can"
    ]
  },
  {
    numb: 20,
    block: "nil",
    question: "who",
    answer: "who",
    options: [
      "how",
      "hwo",
      "woh",
      "who"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];