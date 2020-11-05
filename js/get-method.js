import { displayShoes } from "./script.js";

const url = "http://localhost:8080/shoes";

const main_part = document.getElementById("main-page");

export const getShoes = async () => {

  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
  
};

export async function displayAllTheShoes() {
  let allTheShoes = await getShoes();
  displayShoes(allTheShoes);
}

if (main_part != null) {
main_part.addEventListener("load", displayAllTheShoes());
}