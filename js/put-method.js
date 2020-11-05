const url = "http://localhost:8080/shoes";

export const put = async (input, id) => {

  await fetch(url + "/" + id, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(input)
  })

}
