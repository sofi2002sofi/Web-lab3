import { put } from "./put-method.js";

const url = "http://localhost:8080/shoes"

const submitButton = document.getElementById("submit_button");

const sizeEURstandartInput = document.getElementById("sizeEURstandart_input");
const priceInUAHInput = document.getElementById("priceInUAH_input");
const brandInput = document.getElementById("brand_input");
const colorInput = document.getElementById("color_input");
const hightfShaftlnSMInput = document.getElementById("hightfShaftlnSM_input");

var warn = document.getElementById("warning-message");
var span = document.getElementById("close");

span.onclick = function() {
  warn.style.display = "none";
}

submitButton.addEventListener("click", async (event) => {
  const { sizeEURstandart, priceInUAH, color, brand, hightfShaftlnSM } = getInputValues();
  let id = getId();

  const re_color = /^[a-z]{3,}$/g;
  if (re_color.test(color) && sizeEURstandart<=45 && sizeEURstandart>=35 && brand!==null 
      && priceInUAH<=3000 && priceInUAH>=20 && hightfShaftlnSM<=40 && hightfShaftlnSM>=5 ){
      
    let updatedItem = getInputValues();
    await put(updatedItem, id);

  } else {

      event.preventDefault();
      var message = document.getElementById("warning-message");
      message.style.display = "block";
  
    }
});

async function displayCurrentItemData() {
  let element = await getCurrentItem();
  sizeEURstandartInput.value = element.sizeEURstandart;
  priceInUAHInput.value = element.priceInUAH;
  brandInput.value = element.brand;
  colorInput.value = element.color;
  hightfShaftlnSMInput.value = element.hightfShaftlnSM;
}

async function getCurrentItem() {
  try {
    let response = await fetch(url + "/" + getId());
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function getId() {
  let query_id = window.location.search;
  let params = new URLSearchParams(query_id);
  let id = params.get("id");
  return id;
}

function getInputValues(){
  return {
      sizeEURstandart: sizeEURstandartInput.value,
      priceInUAH: priceInUAHInput.value,
      brand: brandInput.value,
      color: colorInput.value,
      hightfShaftlnSM: hightfShaftlnSMInput.value,
    };
}


displayCurrentItemData();