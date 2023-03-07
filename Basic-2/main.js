
function changeHeadline(){
    let newValue = document.getElementById("headline-text").value
    console.log("New value will be: " + newValue)
    document.getElementById("headline").innerText = newValue
}

function changeHeadlineInputValue(newHeadline){
    document.getElementById("headline").innerText = newHeadline
}

function testCode(){
    let eingabe = prompt("Gib etwas ein: ")
    document.write(eingabe)
}

function addItemEvent(){
   let liElementsList = document.getElementsByTagName("li")
    for (let i = 0; i < liElementsList.length; i++) {
        let newValue = liElementsList[i].innerText
        //liElementsList[i].addEventListener("click", function (){changeHeadlineInputValue(newValue)})
        liElementsList[i].addEventListener("mouseover", function (){changeHeadlineInputValue(newValue)})
    }
}

addItemEvent()