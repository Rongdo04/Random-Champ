document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  const headerTemplate = document.querySelector("template");
  const yoneWpp = document.querySelector("#Yone");
  const ireWpp = document.querySelector("#Ire");
  const LeeWpp = document.querySelector("#Lee");
  const content = document.querySelector(".content");
  const h2 = document.querySelector(".content h2");
  //const aTagLolPage = document.querySelector('a[href="lol-page.html"]');
  const container = document.querySelector(".container");
  yoneWpp.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.backgroundImage = `url("./asset/photo/yone.jpg")`;
    h2.textContent = `"You think I am the one to fear? Hmph."`;
  });
  ireWpp.addEventListener("click", (e) => {
    e.preventDefault();
    h2.textContent = `"Fight for the First Lands!"`;
    container.style.backgroundImage = `url("./asset/photo/irelia.jpg")`;
  });
  LeeWpp.addEventListener("click", (e) => {
    e.preventDefault();
    h2.textContent = `"We do what we must."`;
    container.style.backgroundImage = `url("./asset/photo/leesin.jpg")`;
  });
});
