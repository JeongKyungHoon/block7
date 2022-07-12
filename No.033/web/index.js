console.log("test");
async function onSubmit(e) {
  e.preventDefault();
  const data = await axios.post("/user", { name: e.target.name.value });
  console.log(data);
}
