let url = "../api?method=read"

function addPersonEntry(person){
    let $tr = $('tr')
    $tr.append('<td>' + person.firstname + '</td>')
    $tr.append('<td>' + person.lastname + '</td>')
    $('#persons-table').find('tbody').append($tr)
}

let config = {
    type: "GET",
    url: url,
    success: function(response){
        console.log(response)
        for (let i in response){
            let person = response[i]
            addPersonEntry(person)
        }
    },
    error: function(error){
        console.log(error)
    }
}

$.ajax(config)