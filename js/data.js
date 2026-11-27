// Edit business details here. They are used in the header, footer and buttons.
const BUSINESS = {
  name: "DigiInvite",
  whatsapp: "918098788239",
  email: "digiinvite90@gmail.com",
  instagram: "digiinvite_90",
  phones: [
    { person: "Yasar", number: "+918098788239", label: "+91 80987 88239" },
    { person: "Owais", number: "+919952537523", label: "+91 99525 37523" }
  ]
};

// Prices in rupees. One price = one wedding invitation website. Change them here.
const PLANS = [
  { name: "Classic", price: "₹999", note: "A simple invitation for one function",
    features: ["1 of our 5 designs", "Tap-to-open screen", "Names, date and countdown", "1 event with map button", "WhatsApp RSVP button", "1 round of changes"] },
  { name: "Premium", price: "₹1,999", note: "For weddings with several functions", popular: true,
    features: ["1 of our 5 designs", "Everything in Classic", "Up to 4 events with maps", "Bride and groom family section", "Falling flowers animation", "2 rounds of changes"] },
  { name: "Custom", price: "From ₹3,999", note: "A design made for your family",
    features: ["New colours and artwork", "Everything in Premium", "Your own section order and wording", "3 rounds of changes", "Final price agreed before we start"] }
];

// The five demos. All names, families and venues are made-up sample text.
const DEMOS = [
  { id: "rose", name: "Rose Muhurtham", style: "Hindu", desc: "Plum and gold with drifting blossoms.", petals: ["🌸","🍃","🌺"],
    a: "Priya", b: "Arun", blessing: "With the blessings of the Almighty", line: "request the pleasure of your company at the wedding of their children",
    date: "2027-02-14T10:30",
    events: [["Mehendi","13 Feb 2027, 5:00 PM","Sample Rose Hall","Chennai"],["Muhurtham","14 Feb 2027, 10:30 AM","Sample Kalyana Mandapam","Chennai"],["Reception","14 Feb 2027, 7:00 PM","Sample Grand Hall","Chennai"]],
    families: [["Bride's family","Mr. and Mrs. Raman","Chennai"],["Groom's family","Mr. and Mrs. Suresh","Coimbatore"]] },
  { id: "nikah", name: "Emerald Nikah", style: "Muslim", desc: "Emerald and gold with Bismillah and soft starlight.", petals: ["✦","✧","⋆"],
    blessing: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", arabic: true, a: "Ayaan", b: "Zoya", line: "request your presence and duas at the Nikah of their children",
    date: "2027-01-22T11:00",
    events: [["Nikah","22 Jan 2027, 11:00 AM","Sample Mahal","Vellore"],["Walima","23 Jan 2027, 12:30 PM","Sample Banquet Hall","Vellore"]],
    families: [["Bride's family","Mr. and Mrs. Rahman","Vellore"],["Groom's family","Mr. and Mrs. Kareem","Chennai"]] },
  { id: "blossom", name: "White Blossom", style: "Christian", desc: "Light blush and ivory, calm and romantic.", petals: ["🌸","🤍","🌷"],
    blessing: "Joined together in love and faith", a: "Daniel", b: "Sara", line: "invite you to witness their holy matrimony and celebrate with them",
    date: "2027-03-06T16:00",
    events: [["Holy Matrimony","6 Mar 2027, 4:00 PM","Sample Chapel","Bengaluru"],["Reception","6 Mar 2027, 7:00 PM","Sample Garden Lawn","Bengaluru"]],
    families: [["Bride's family","Mr. and Mrs. Joseph","Bengaluru"],["Groom's family","Mr. and Mrs. Thomas","Kochi"]] },
  { id: "midnight", name: "Midnight Gold", style: "Modern", desc: "A navy night sky for a stylish evening celebration.", petals: ["✨","·","✦"],
    blessing: "Two hearts, one evening to remember", a: "Rohan", b: "Isha", line: "would love you to join them as they begin their life together",
    date: "2027-04-17T19:00",
    events: [["Sangeet","16 Apr 2027, 7:00 PM","Sample Sky Lounge","Hyderabad"],["Reception","17 Apr 2027, 7:00 PM","Sample Grand Ballroom","Hyderabad"]],
    families: [["Bride's family","Mr. and Mrs. Mehta","Hyderabad"],["Groom's family","Mr. and Mrs. Kapoor","Pune"]] },
  { id: "marigold", name: "Marigold Temple", style: "Hindu", desc: "Bright turmeric and kumkum with falling marigolds.", petals: ["🌼","🍃","🏵️"],
    blessing: "With the blessings of our elders", a: "Karthik", b: "Divya", line: "warmly invite you and your family to the wedding of their children",
    date: "2027-05-09T07:30",
    events: [["Nichayathartham","8 May 2027, 6:00 PM","Sample Mini Hall","Madurai"],["Muhurtham","9 May 2027, 7:30 AM","Sample Kalyana Mandapam","Madurai"]],
    families: [["Bride's family","Mr. and Mrs. Murugan","Madurai"],["Groom's family","Mr. and Mrs. Selvam","Trichy"]] }
];
