let display=document.getElementById("display").value
let input=document.getElementById("input2")
input.addEventListener("onclick", ()=>{
    display.value=input.value;
})
// console.log(input[0].value);