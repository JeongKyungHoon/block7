const listDiv = document.getElementById("todo-list");

async function getTodoList() {
  listDiv.innerHTML = "";
  const data = (await axios.get("/api")).data;
  data.forEach((item) => {
    const temp = document.createElement("li");
    temp.classList.add("todo-list-item");
    temp.innerHTML = item;
    listDiv.append(temp);
  });
}

getTodoList();

document.forms["todo-form"].addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const data = (
      await axios.post("/api", { todo: e.target["todo-info"].value })
    ).data;
    console.log(data);
    e.target["todo-info"].value = "";
    getTodoList();
  } catch (error) {
    console.log(error);
  }
});
