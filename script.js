

// -------------title hover-----------
const title = document.querySelector("h1");

title.addEventListener("mouseover", function event(){
    title.style.color = "orange"
})
title.addEventListener("mouseout", function event(){
    title.style.color = "black"
})


// -----footer hover on our names
const names = document.querySelector("footer>p+p");
// console.log(names)

names.addEventListener("mouseover", function event(){
    names.style.color = "orange"
})
names.addEventListener("mouseleave", function event(){
    names.style.color = "black"
})


// ------anchor hover effect
const links = document.querySelectorAll("a");

links.addEventListener("mouseover", function event(){
    for(items of links){
        items.style.color = "orange"
    }
})


// const content = document.querySelector(".tool .content");

// const problem = document.querySelectorAll(".problem");


// // ---------------------icons----------
// const icon = document.querySelector(".tool .icon")
// const kiboEmail = document.querySelector("#email h3")


// icon.addEventListener("mouseover", function event(){
//     for(items of problem){
//         items.style.display = "block";
//     }
// })
