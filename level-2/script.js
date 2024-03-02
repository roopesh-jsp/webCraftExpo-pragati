const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  if (!navbar.classList.contains("navOpen")) {
    navbar.style.position = "absolute";
  }
  navbar.classList.toggle("navOpen");
});
if (!navbar.classList.contains("navOpen")) {
  navbar.style.position = "absolute";
}

const arr = [
  {
    h1: "you like to go?",
    h5: "explore the world",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui eveniet repellat quis amet suscipit et vitae debitis asperiores labore rerum nemo fugiat aspernatur natus nesciunt, alias illo assumenda optio.",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    h1: "let's the world together",
    h5: "explore the world",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui eveniet repellat quis amet suscipit et vitae debitis asperiores labore rerum nemo fugiat aspernatur natus nesciunt, alias illo assumenda optio.",
    img: "https://plus.unsplash.com/premium_photo-1677288649982-b52376fb34fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    h1: "Find your perfect ro travel",
    h5: "explore the world",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui eveniet repellat quis amet suscipit et vitae debitis asperiores labore rerum nemo fugiat aspernatur natus nesciunt, alias illo assumenda optio.",
    img: "https://images.unsplash.com/photo-1663059364915-89b57b8a35ff?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let body = document.querySelector("body");

const content = document.querySelector(".content");
const left = document.querySelector(".fa-left-long");
const right = document.querySelector(".fa-right-long");
let html = ` `;
let point = 0;
left.addEventListener("click", () => {
  if (point == 0) {
    point = 2;
  } else {
    point = point - 1;
  }
  html = ` <h5>${arr[point].h5}</h5>
  <h1>${arr[point].h1}</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    mollitia, ipsa repellendus ad, eligendi incidunt error in odit sit
    obcaecati, minus consectetur maxime. Nihil excepturi facere cupiditate
    quia, delectus iste?
  </p>
  <button>discover Now</button>`;
  content.innerHTML = html;
});
right.addEventListener("click", () => {
  if (point == 2) {
    point = 0;
  } else {
    point = point + 1;
  }

  html = ` <h5>${arr[point].h5}</h5>
  <h1>${arr[point].h1}</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    mollitia, ipsa repellendus ad, eligendi incidunt error in odit sit
    obcaecati, minus consectetur maxime. Nihil excepturi facere cupiditate
    quia, delectus iste?
  </p>
  <button>discover Now</button>`;
  content.innerHTML = html;

  let img = `url(${arr[point].img})`;
  console.log(img);
  body.style.backgroundImage = img;
});
