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
];

class ResultsList {
    constructor(){
        this.searchBox = document.getElementById('search');
        this.searchResults = document.getElementById('search_results');
        this.addListner();
    }

    addListner(){
        this.searchBox.addEventListener('input',(e)=>{
            this.searchResults.innerHTML = '';
            let searchValue = this.searchBox.value.toLowerCase().trim();
            // Do not run function when input value is empty
            if(searchValue.length !== 0) {
                this.searchMatcher(fruitInventory,searchValue);
            }
        })
    }

    searchMatcher(arr,value) {
        let matchResults = arr.filter(fruit => {
            if(fruit.toLowerCase().includes(value)) {return fruit};
        }).slice(0,7);
        this.createElments(matchResults);
    }

    createElments(arr){
        arr.forEach(fruit => {
            let listItem = document.createElement('li');
            listItem.setAttribute('class','result');
            listItem.innerText = `${fruit}`;
            this.addTextToBar(listItem);
            this.searchResults.append(listItem);
        })
    }

    addTextToBar(el){
        el.addEventListener('click',(e)=>{
            this.searchBox.value = e.target.innerText;
            this.searchResults.innerHTML = '';
        })
    }
}

new ResultsList();