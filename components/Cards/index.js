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
console.log('res3', axios.get('https://lambda-times-backend.herokuapp.com/articles'));

function cards(headline, authorPhoto, authorName) {
    
    // Element
    const card = document.createElement('div');
    const head = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');
    
    // Nesting
    card.appendChild(head);
    card.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(name);
    
    // Class 
    card.classList.add('card');
    head.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');
    
    // Content
    head.textContent = headline;
    img.src = authorPhoto;
    name.textContent = authorName;
    
    return card;
}

const articles = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(element => {
        const dataContent = element.data.articles.bootstrap;
        const jav = element.data.articles.javascript;
        const jq = element.data.articles.jquery;
        const node = element.data.articles.node;
        const tech = element.data.articles.technology;

        dataContent.forEach(a => {
            let bootstrapCard = cards(a.headline, a.authorPhoto, a.authorName)
            articles.appendChild(bootstrapCard);
        });
        jav.forEach(a => {
            let javCard = cards(a.headline, a.authorPhoto, a.authorName)
            articles.appendChild(javCard);
        });
        jq.forEach(a => {
            let jqCard = cards(a.headline, a.authorPhoto, a.authorName)
            articles.appendChild(jqCard);
        });
        node.forEach(a => {
            let nodeCard = cards(a.headline, a.authorPhoto, a.authorName)
            articles.appendChild(nodeCard);
        });
        tech.forEach(a => {
            let techCard = cards(a.headline, a.authorPhoto, a.authorName)
            articles.appendChild(techCard);
        });
    })
    .catch(err => {
        console.log('Could not retrieve data: ', err)
});