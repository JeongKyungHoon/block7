document.getElementById("getJWT").addEventListener("click", async () => {
  console.log("getJWT");
  const { data } = await axios.get("/jwt");
  console.log(data);
  document.getElementById("jwt").value = data;
});

document.getElementById("sendJWT").addEventListener("click", async () => {
  console.log("sendJWT");
  let data;
  try {
    data = await axios.post("/jwt", {
      jwt: document.getElementById("jwt").value,
    });
  } catch (error) {
    data = error.response.data.message;
  }
  //   console.log(message);
  console.log(data);
});
