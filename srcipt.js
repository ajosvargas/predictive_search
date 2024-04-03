const searchBox = document.getElementById('search');
const searchResults = document.getElementById('search_results');
const fruitInventory = [
    'Apple', 'Apricot', 'Avocado 🥑', 
    'Banana', 'Bilberry', 'Blackberry', 
    'Blackcurrant', 'Blueberry', 'Boysenberry', 
    'Currant', 'Cherry', 'Coconut', 'Cranberry', 
    'Cucumber', 'Custard apple', 'Damson', 'Date', 
    'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 
    'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 
    'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 
    'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 
    'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 
    'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 
    'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 
    'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
    'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 
    'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 
    'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 
    'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
    'Salak', 'Satsuma', 'Soursop', 'Star fruit', 
    'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
]

searchBox.addEventListener('input',(e)=>{
    searchResults.innerHTML = '';
    let searchValue = searchBox.value.toLowerCase();
    // Do not run function when input value is empty
    if(searchValue.length !== 0) {
        searchMatcher(fruitInventory,searchValue);
    }
})

function searchMatcher(arr,value) {
    let matchResults = arr.filter(fruit => {
        if(fruit.toLowerCase().includes(value)) {return fruit};
    });
    let topResults = matchResults.slice(0,7);
    createElments(topResults);
}

function createElments(arr){
    arr.forEach(fruit => {
        let listItem = document.createElement('li');
        listItem.setAttribute('class','result');
        listItem.innerText = `${fruit}`;
        addTextToBar(listItem);
        searchResults.append(listItem);
    })
}

function addTextToBar(el){
    el.addEventListener('click',(e)=>{
        searchBox.value = e.target.innerText;
        searchResults.innerHTML = '';
    })
}