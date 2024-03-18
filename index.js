require('dotenv').config();
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=5&offset=0&rating=g&lang=en`

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en`);
    const data = await response.json();
    const imageUrl = data.data[0].images.original.url;
    console.log("Image URL:", imageUrl);
    return imageUrl;
}

getImage('pizza');