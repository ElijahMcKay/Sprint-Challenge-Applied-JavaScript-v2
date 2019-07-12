// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container'); 

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
    console.log('We\'re in business!', data); 
    const dataTopics = data.data.articles; //selecting the object from the received data
    // console.log(dataTopics); 
    const topicArray = Object.values(dataTopics)
    // console.log(topicArray);  TESTING
    topicArray.forEach(topic => {
        topic.forEach(article => {
            const cardCreate = newCard(article); 
            cardsContainer.appendChild(cardCreate); 
        })
    })
})
.catch(error => {
    console.log('Something is wrong', error); 
})


function newCard(obj){
    //creating elements
    const card = document.createElement('div');
    const headline = document.createElement('div'); 
    const author = document.createElement('div')
    const imgContainer = document.createElement('div');
    const pfp = document.createElement('img'); 
    const name = document.createElement('span'); 
    
    //setting classnames 
    card.classList.add('card'); 
    headline.classList.add('headline'); 
    author.classList.add('author'); 
    imgContainer.classList.add('img-container'); 

    //setting textContent 
    headline.textContent = `${obj.headline}`; 
    pfp.src = `${obj.authorPhoto}`; 
    name.textContent = `By ${obj.authorName}`; 

    //appending and setting up HTML structure
    card.appendChild(headline); 
    card.appendChild(author); 
    author.appendChild(imgContainer); 
    imgContainer.appendChild(pfp); 
    author.appendChild(name); 

    return card; 

}
