let quotations = [
  {
    quote : "All our dreams can come true, if we have the courage to pursue them.",
    author : "– Walt Disney"
  },

  {
    quote : "The secret of getting ahead is getting started.",
    author : "– Mark Twain"
  },

  {
    quote : "Only the paranoid survive.Only the paranoid survive.",
    author : "– Andy Grove"
  },

  {
    quote : "The best time to plant a tree was 20 years ago. The second best time is now.",
    author : "– Chinese Proverb"
  },

  {
    quote : "It’s hard to beat a person who never gives up.",
    author : "– Babe Ruth"
  },

  {
    quote : "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
    author : "– Leah Busque"
  },

  {
    quote : "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author : "– Michele Ruiz"
  },

  {
    quote : "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    author : "– Joss Whedon"
  },

  {
    quote : "Everything you can imagine is real.",
    author : "― Pablo Picasso"
  },

  {
    quote : "It’s no use going back to yesterday, because I was a different person then.",
    author : "― Lewis Carroll"
  }
]

let btn = document.getElementById('nextQuote');

window.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotations.length);
  console.log(quote);

  document.getElementById('quote').textContent = quotations[random].quote;
  document.getElementById('author').textContent = quotations[random].author;
})



