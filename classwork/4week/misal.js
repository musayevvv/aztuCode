// function number(n, limit){

//     let arr = [];
//     for(let i=n;i<=limit ; i++ ){
//         arr.push(i);
//     }
//     console.log(arr);
// }

// number(10,20);


let inp = document.getElementById("inp")
let div = document.querySelector(".div")
let addBtn = document.querySelector(".add-btn")

addBtn.addEventListener("click", function () {

    if (inp.value === "") {
        return;
    }

    let data = JSON.parse(localStorage.getItem("database")) || [];
    data.push(inp.value)
    localStorage.setItem("database", JSON.stringify(data));
    inp.value = "";
    datalariGoster()
})

function datalariGoster() {
    div.innerHTML = ``;
    let db = JSON.parse(localStorage.getItem("database")) || [];

    db.forEach((item, index) => {

        let box = document.createElement("div")
        box.classList.add("a")
        box.innerHTML = `<p>${item}</p> <button onclick="deleteBtn(${index})" >sil</button> `
        div.appendChild(box)
    });

}

function deleteBtn(index) {
    let arr = JSON.parse(localStorage.getItem("database")) || []
    arr.splice(index, 1)
    localStorage.setItem("database", JSON.stringify(arr))
    datalariGoster()
}

window.onload = () => {
    datalariGoster()
}