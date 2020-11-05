import { displayAllTheShoes } from "./get-method.js";

const url = "http://localhost:8080/shoes";

export async function deleteShoes(id) {

  await fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then( displayAllTheShoes )
    .catch( (error) => console.log(error) );
    
}