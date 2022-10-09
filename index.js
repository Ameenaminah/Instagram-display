const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "mypix.jpg",
    post: "images/bugatti.jpg",
    comment: "just took a few mushrooms lol",
    likes: "21,492",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "mypix.jpg",
    post: "images/crypto-punk.png",
    comment: "i'm feelin a bit stressed tbh",
    likes: "12,502",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "mypix.jpg",
    post: "images/purple-sneakers.jpeg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: "15,137",
  },
];
const mainEl = document.querySelector("#main");
let html = "";

for (let page of posts) {
  html += `
  <div class="container">
    <section>
            <div class="user-container">
              <div class="user-img" >
                <img
                  class="my-pix"
                  src="${page.avatar}"
                  alt="Pretty lady on hijab"
                />
              </div>
              <div class="user-info">
                <p class="name-el"><strong>${page.name}</strong></p>
                <p class="location-el">${page.location}</p>
              </div>
            </div>
              <img
                id= "post-img"
                class="post-img"
                src="${page.post}"
                alt="A bugatti car"
              />
          </section>
          <section>
            <div class="icon-container">
              <img src="images/icon-heart.jpeg" alt="" />
              <img src="images/icon-comment.jpeg" alt="" />
              <img src="images/icon-dm.png" alt="" />
            </div>
            <div class="post-image">
              <div class="like-container">
                <p class="likes" id="likes"> <span>${page.likes} likes</span></p>
                <p class="username"> <span>${page.username}</span>${page.comment}</p>
            </div>
          </section>
  </div>        
`;
}
mainEl.innerHTML += html;

// const iconHeart = document.getElementById("icon-heart");
// const postImg = document.getElementById("post-img");
// const likes = document.getElementById("likes");
// postImg.addEventListener("dblclick", () => {
//   let likesIncrease = posts.likes;
//   likesIncrease++;
//   likes.innerHTML += likesIncrease;
// });
