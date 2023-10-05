
let like_btn = document.getElementById("like-btn");
let dislike_btn = document.getElementById("dislike-btn");
let total_btn = document.getElementById("total");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");

let likes = localStorage.getItem('qty') ? localStorage.getItem('qty') : 0;
let dislikes = localStorage.getItem('qty') ? localStorage.getItem('qty') : 0;
let total = localStorage.getItem('total') ? localStorage.getItem('total') : 0;



// like_btn.innerText = likes;
// dislike_btn.innerText = dislikes;
// total_btn.innerText = total;



let qty = localStorage.getItem('qty') ? localStorage.getItem('qty') : 0;
like_btn.innerText = qty;

let qty1 = localStorage.getItem('qty1') ? localStorage.getItem('qty1') : 0;
dislike_btn.innerText = qty1;

let total_result = localStorage.getItem('total') ? localStorage.getItem('total') : 0;
total_btn.innerText = total_result;


btn_1.addEventListener("click", function(){
    likes++
    localStorage.setItem('qty', likes);
    like_btn.innerText = localStorage.getItem('qty');
    total++;
    localStorage.setItem('total', total);
    total_btn.innerText = localStorage.getItem('total');
})


btn_2.addEventListener("click", function(){
    dislikes++;
    localStorage.setItem('qty1', dislikes);
    dislike_btn.innerText = localStorage.getItem('qty1');
    total++;
    localStorage.setItem('total', total);
    total_btn.innerText = localStorage.getItem('total');
})
