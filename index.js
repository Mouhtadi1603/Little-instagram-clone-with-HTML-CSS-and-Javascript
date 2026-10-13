const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let likeEl1 = document.getElementById("like1")
let likeEl2 = document.getElementById("like2")
let likeEl3 = document.getElementById("like3")

let postImage1 = document.getElementById("post-image1")
let postImage2 = document.getElementById("post-image2")
let postImage3 = document.getElementById("post-image3")

let postcountEl1 = document.getElementById("post-count1")
let postcountEl2 = document.getElementById("post-count2")
let postcountEl3 = document.getElementById("post-count3")


let ourNum = ""
function makeNum(value){
    /* Checks if ourNum is empty. If not, make it an empty string before continuing  */
    if (ourNum !== ""){
        ourNum = ""
    }

    for (let i = 0; i < value.length; i++){
        /* check if items in value are integers before adding them (as strings) to ourNum */
        if (isNaN(value[i]) === false){
            ourNum += value[i]
        }
    }

    return Number(ourNum) + 1

} 

/* ----------------- SECTION 1 --------------------------- */


likeEl1.addEventListener("dblclick", function(){
    let val = postcountEl1.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl1.textContent = makeNum(val).toLocaleString("en-US") + " likes"

}) 

postImage1.addEventListener("dblclick", function(){
    let val = postcountEl1.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl1.textContent = makeNum(val).toLocaleString("en-US") + " likes"

}) 

/* ----------------- SECTION 2 --------------------------- */

likeEl2.addEventListener("dblclick", function(){
    let val = postcountEl2.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl2.textContent = makeNum(val).toLocaleString("en-US") + " likes"

})

postImage2.addEventListener("dblclick", function(){
    let val = postcountEl2.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl2.textContent = makeNum(val).toLocaleString("en-US") + " likes"

})

/* ----------------- SECTION 3 ---------------------------
   -----------------           ---------------------------
   -----------------           --------------------------- */

likeEl3.addEventListener("dblclick", function(){
    let val = postcountEl3.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl3.textContent = makeNum(val).toLocaleString("en-US") + " likes"

})

postImage3.addEventListener("dblclick", function(){
    let val = postcountEl3.textContent

    /* /* Use .toLocaleString to format the enteger the way we want it to be outputted */ 
    postcountEl3.textContent = makeNum(val).toLocaleString("en-US") + " likes"

})
