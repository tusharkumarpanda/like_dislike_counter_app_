
let like_btn = document.getElementById("like-btn");
let dislike_btn = document.getElementById("dislike-btn");
let total_btn = document.getElementById("total");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");

likes = 0;
dislikes = 0;
total = 0;

like_btn.innerText = likes;
dislike_btn.innerText = dislikes;
total_btn.innerText = total;


btn_1.addEventListener("click", function(){
    likes++;
    like_btn.innerText = likes;
    total++;
    total_btn.innerText = total;
})

btn_2.addEventListener("click", function(){
    dislikes++;
    dislike_btn.innerText = dislikes;
    total++;
    total_btn.innerText = total;
})



