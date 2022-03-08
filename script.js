let texts = document.getElementById("text")
let amount = document.getElementById("amount")

let inflow = document.getElementById("inflow")
let outflows = document.getElementById("outflow")
let balance = document.getElementById("balance")
let transacts = document.getElementById("transact")

transacts.addEventListener("click", function(){
outflows.innerHTML = texts.value
console.log(texts)
})


