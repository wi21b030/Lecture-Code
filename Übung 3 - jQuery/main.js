$(document).ready(function (){

    let $ol = $('ol').first()

    // add elements function from example code

    let $addButton = $('#add')

    $addButton.on('click', function (){
        let e = $('#item').val()
        $('ol').append('<li class="list-item">' + e + '</li>').hide().fadeIn(500)
        // remove item from input field after added
        $('#item').val('')
    })

    // add other buttons after "add"-button

    $addButton.after(
        "<input id='index' type='text' placeholder='Type Index of Item'>" +
        "<button id='removeListItem'>remove</button>" +
        "<button id='reverse'>reverse</button>" +
        "<button id='hide'>hide</button>" +
        "<button id='show'>show</button>"
    )

    // remove list element

    let $removeButton = $('#removeListItem')

    $removeButton.on('click', function (){
        let toRemove = $('#index').val()
        let $listItems = $ol.find('li')
        $listItems.each(function (index, element){
            let $element = $(element)
            if((index+1) == toRemove){
                $(this).fadeOut(500, function() {
                    $(this).remove()
                })
            }
        })
        // remove index from input field after removed
        $('#index').val('')
    })

    // change order of list elements

    let $reverseButton = $('#reverse')

    $reverseButton.on('click', function () {
        $ol.children().each(function (index, element) {
            $ol.prepend(element)
        })
    })

    // buttons to hide and show the whole list

    let $showButton = $('#show')

    $showButton.on('click', function () {
        $ol.toggle(true)
    })

    let $hideButton = $('#hide')

    $hideButton.on('click', function () {
        $ol.toggle(false)
    })


})