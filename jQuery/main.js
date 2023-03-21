// wait till site is loaded
$(document).ready(function (){
    // write functionality here
    let $removeButton = $('#removeList')

    // bind event-listener
    $removeButton.on('click', function (){
        // inside anonymous function
        // identify list
        let $list = $("#main-list");
        alert("Attention, list will be removed")
        $list.remove()
    })

    let $enhancedButton = $('#enhance-items')
    $enhancedButton.on('click', function (){
        let $liItems = $("#main-list").find('li')
        $liItems.each(function (index, element){
            let $element = $(element)
            let result = (index+1) *3
            let newText = $element.text()+'-'+result
            $element.text(newText)
        })
    })


})