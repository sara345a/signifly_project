import './style.scss'



// import selfie from "./2.png";
// document.querySelector("img").src = selfie;

const fakeJson = ["2", "2", "2"];

fakeJson.forEach((el) => {
    const t = document.createElement("img");
    t.src = el + ".png";
    document.body.appendChild(t);
});