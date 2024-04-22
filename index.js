const quote = document.getElementsByClassName('quote')[0];
const author = document.getElementsByClassName('author')[0];

const apiLink = 'https://api.quotable.io/random';

const randomQuote = async () => {
  try {
    const data = await fetch(apiLink);
    const quoteData = await data.json();
    quote.innerHTML = `“ ${quoteData.content} ”`;
    author.innerHTML = `- ${quoteData.author}`;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};
