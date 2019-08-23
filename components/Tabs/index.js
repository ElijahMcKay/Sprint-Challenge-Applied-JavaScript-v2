// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics'); 

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log('it works', data);
    const topArray = data.data.topics; 
    topArray.forEach(item => {
        let newTab = newTopic(item); 
        topics.appendChild(newTab); 
    }); 
    // console.log(data.data.topics);  testing
})
.catch(error => {
    console.log('Something isn\'t right here...', error); 
})


function newTopic(item) {
    //creating elements
    const tab = document.createElement('div'); 

    // setting classname 
    tab.classList.add('tab'); 

    //text content 
    tab.textContent = item; 
    
    return tab; 
}