//function => function()
// function => handler (обработчик) listener, subscriber
//{key: value, .....} => object with information about event/ev/e
// function(e)


const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const onClickHandler1 = (e) => {
 e.stopPropagation()
    if (e.target.tagName === "BUTTON") {
        alert(e.target.id)
    }
}
// const onClickHandler2 = () => {
//  alert("medium")
// }
function onClickHandler3(e) {
 alert("hello everybody")
}


// onClickHandler({...}) //event

sm.onclick = onClickHandler1
sm.onclick = null

sm.addEventListener("click", onClickHandler1)
// md.addEventListener("click", onClickHandler2)
bg.addEventListener("click", onClickHandler3)


const a = document.getElementById("a")
a.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Go learning CSS")
})


