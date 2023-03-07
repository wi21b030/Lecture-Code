function changeHeadline(){
    let newValue = document.getElementById("headline-text").value
    console.log("New value will be: " + newValue)
    document.getElementById("headline").innerText = newValue
}