import { deleteShoes } from "./delete-method.js";
import { getShoes } from "./get-method.js";

const myShoes = document.getElementById("myShoes");

const searchButton = document.getElementById("search");
const clearButton = document.getElementById("clear");
const sortButton = document.getElementById("sort");
const countButton = document.getElementById("count");
const searchParameter = document.getElementById("typedShoes");
const resultPrice = document.getElementById("resultPrice");

let primarySetOfShoes = [];
let foundList=[];

export const addElementToPage = ({ id, sizeEURstandart, priceInUAH, brand, color, hightfShaftlnSM }) => {
    myShoes.insertAdjacentHTML(
        "afterbegin",
        `<div class="shoes-pair" >
        <div class="shoes-pair__image"></div>
        <h1 class="shoes-pair__title">These shoes</h1>
        <p class="shoes-pair__paragraph">There are boots with price $${priceInUAH}, 
        made by ${brand}, the color of these is ${color}, 
        the size of the pair is ${sizeEURstandart} 
        and the hight of shaft - ${hightfShaftlnSM}sm.</p>
        <div class="edit-remove__buttons">
            <button class="edit" id="edit_button__${id}">Edit</button>
            <button class="remove" id="delete_button__${id}">Remove</button>
        </div>
        </div>`);
    const edit_button = document.getElementById("edit_button__" + id);
    const remove_button = document.getElementById("delete_button__" + id);
    edit_button.addEventListener("click", () => {
        window.location.href = "./edit_shoes.html?id=" + id;
    });
    remove_button.addEventListener("click", () => {
        deleteShoes(id);
    });
};

export const displayShoes = (shoes) => {
    myShoes.innerHTML = "";
    for (const item of shoes) {
        addElementToPage(item);   
    }
};

searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let allTheShoes = await getShoes();
    primarySetOfShoes = Array.from(allTheShoes);
    let foundItem = searchParameter.value;
    primarySetOfShoes.forEach(item => {
        if(item.color.includes(foundItem)){
            foundList.push(item)
        }
    });
    displayShoes(foundList);
})

clearButton.addEventListener("click", () => {
    document.getElementById("typedShoes").value="";
    displayShoes(primarySetOfShoes);
})

sortButton.addEventListener("click", async () => {
    let allTheShoes = await getShoes();
    primarySetOfShoes = Array.from(allTheShoes);
    if (searchParameter.value == ""){
        primarySetOfShoes.sort(function(obj1, obj2) {
            if(obj1.priceInUAH > obj2.priceInUAH){
                return 1;
            }
            return -1;
        });
        displayShoes(primarySetOfShoes);
        console.log(primarySetOfShoes);
    } else {
        foundList.sort(function(obj1, obj2) {
            if(obj1.priceInUAH > obj2.priceInUAH){
                return 1;
            }
            return -1;
        });
        displayShoes(foundList);
    }
});

countButton.addEventListener("click", () => {
    countTotalShoesPrice();
});

const countTotalShoesPrice = async () => {
    let allTheShoes = await getShoes();
    primarySetOfShoes = Array.from(allTheShoes);
    resultPrice.innerHTML = "";
    let shoesPrice = 0;
    if (searchParameter.value != "") {
      foundList.forEach((item) => {
        shoesPrice += item.priceInUAH;
      });
    } else {
        primarySetOfShoes.forEach((item) => {
            shoesPrice += item.priceInUAH;
      });
    }
    resultPrice.innerHTML = shoesPrice + '$';
  };
  