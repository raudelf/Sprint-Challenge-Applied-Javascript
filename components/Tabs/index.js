// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
console.log('res', axios.get('https://lambda-times-backend.herokuapp.com/topics'));

const topix = document.querySelector('.topics');

function tabs(topic) {
    
    // Element
    const div = document.createElement('div');

    // Class
    div.classList.add('tab')

    // Content
    div.textContent = topic;

    return div;
};

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const topicArr = response.data.topics;
    topicArr.forEach(element => {
        const newTab = tabs(element);
        topix.appendChild(newTab);
    });
});