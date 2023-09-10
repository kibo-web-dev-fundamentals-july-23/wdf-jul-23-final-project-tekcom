const content = document.querySelector(".tool .content");

// // console.log(content)
const problem = document.querySelectorAll(".problem");
// console.log(problem)

for(items of problem){
    items.style.display = "none"
}
// // console.log(problem.style.display = "none")

// content.addEventListener("click", function event(){
//     problem.style.display = "block"
// })

// ---------------------icons----------
const icon = document.querySelector(".tool .icon")
const kiboEmail = document.querySelector("#email h3")
// console.log(kiboEmail)

// kiboEmail.style.display = "none"

icon.addEventListener("mouseover", function event(){
    // kiboEmail.style.display = "block"
    // problem.style.display = "block"
    for(items of problem){
        items.style.display = "block";
    }
})

// icon.addEventListener("mouseout", function event(){
//     // kiboEmail.style.display = "none"
//     problem.style.display = "none"
// })

// -------------title hover-----------
const title = document.querySelector("h1");

title.addEventListener("mouseover", function event(){
    title.style.color = "orange"
})
title.addEventListener("mouseout", function event(){
    title.style.color = "black"
})

// -----lists hover effect-----

// const summary = document.querySelectorAll("ul");

// // for(items of lists){
// //     console.log(items)
// // }

// summary.addEventListener("mouseover", function event(){
//     for(items of summary){
//         items.style.color = "orange"
//     }
// })



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
// for(items of links){
//     console.log(items)
// }

links.addEventListener("mouseover", function event(){
    for(items of links){
        items.style.color = "orange"
    }
})
