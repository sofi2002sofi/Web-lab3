const url = "http://localhost:8080/shoes";

export const post = async (input) => {

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(input),
  })

}