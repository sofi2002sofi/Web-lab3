let shoes=[
    {
        "sizeEURstandart": 40,
        "priceInUAH": 650,
        "brand": "Adidas",
        "color": "black",
        "hightfShaftlnSM": 30
    },
    {
        "sizeEURstandart": 39,
        "priceInUAH": 550,
        "brand": "Nike",
        "color": "blue",
        "hightfShaftlnSM": 30 
    },
    {
        "sizeEURstandart": 36,
        "priceInUAH": 1000,
        "brand": "Ecco",
        "color": "red",
        "hightfShaftlnSM": 29 
    },
    {
        "sizeEURstandart": 38,
        "priceInUAH": 670,
        "brand": "Puma",
        "color": "green",
        "hightfShaftlnSM": 24 
    },
    {
        "sizeEURstandart": 38,
        "priceInUAH": 670,
        "brand": "Puma",
        "color": "black",
        "hightfShaftlnSM": 24 
    },
    {
        "sizeEURstandart": 41,
        "priceInUAH": 2089,
        "brand": "New Balance",
        "color": "brown",
        "hightfShaftlnSM": 35 
    },
]

const myShoes = document.getElementById("myShoes");
const searchButton = document.getElementById("search");

function addElementToPage({ sizeEURstandart, priceInUAH, brand, color, hightfShaftlnSM }){
    myShoes.insertAdjacentHTML(
        "afterbegin",
        `<div class="shoes-pair">
        <div class="shoes-pair__image"></div>
        <h1 class="shoes-pair__title">These shoes</h1>
        <p class="shoes-pair__paragraph">There are boots with price $${priceInUAH}, 
        made by ${brand}, the color of these is ${color}, 
        the size of the pair is ${sizeEURstandart} 
        and the hight of shaft - ${hightfShaftlnSM}sm.</p>
        <div class="edit-remove__buttons">
            <button onclick="location.href ='file:///F:/projects/web/lab3/edit_shoes.html'" class="edit">Edit</button>
            <button class="remove">Remove</button>
        </div>
    </div>`
      );
}

function displayShoes(shoes){
    myShoes.innerHTML = "";
    for (const item of shoes) {
        addElementToPage(item);   
    }
}

displayShoes(shoes);

searchButton.addEventListener("click", (event) =>{
    event.preventDefault();

    let foundItem = document.getElementById("typedShoes").value;
    let foundList=[];
    shoes.forEach(item => {
        if(foundItem==item.color){
            foundList.push(item)
        }
    });
    displayShoes(foundList);
})

function cleanShoes(){
    document.getElementById("typedShoes").value="";
    displayShoes(shoes);
}

function sortShoes(){
    shoes.sort(function(obj1, obj2) {
        if(obj1.priceInUAH > obj2.priceInUAH){
            return 1;
        }
        return -1;
    });
    displayShoes(shoes);
}

function countShoesPrice(){
    let shoesPrice=0;
    shoes.forEach(item =>{
        shoesPrice+=item.priceInUAH;
    });
    document.getElementById("resultPrice").innerHTML=shoesPrice + '$';
}
