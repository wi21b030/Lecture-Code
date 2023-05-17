//Starting point for JQuery init
$(document).ready(function () {
    populateDepartmentOptions();
    $('#searchResult').hide();
    $('#addCookieResult').hide();
    $('#showCookies').hide();
    $('#hideCookies').hide();
    $('#btn_Search').click(function (e) {
        loaddata($('#searchfield').val());
    });
    $('#btn_SearchById').click(function () {
        var personId = $('#personIdInput').val();
        if (personId !== '') {
            $('#personIdInput').val('');
            queryPersonById(personId);
        } else {
            alert('Please enter an ID!');
        }
    });
    $('#btn_ShowAll').click(function (e) {
        showAllPersons();
    });
    $('#btn_SearchByDepartment').click(function () {
        var department = $('#departmentField').val();
        searchByDepartment(department);
    });
    $('#btn_SetCookie').click(function () {
        var key = $('#keyInput').val();
        var value = $('#valueInput').val();
        if (!isValidString(key)) {
            alert('Please enter a valid string for the key.');
            return;
        }
        addCookie(key, value);
    });
    $('#showCookies').click(function () {
        $('#addCookieResult').show();
    });
    $('#hideCookies').click(function () {
        $('#addCookieResult').hide();
    });
});

function loaddata(searchterm) {

    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: { method: 'queryPersonByName', param: searchterm },
        dataType: 'json',
        success: function (response) {
            $('#noOfentries').text(response.length);
            $('#searchResult').show(1000).delay(1000).hide(1000);
        },
        error: function () {
            alert('No person found with given last name!');
        }
    });
}

function queryPersonById(personId) {
    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: { method: 'queryPersonById', param: personId },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            var resultHtml = '';
            if (response.length > 0) {
                var person = response[0][0];
                resultHtml += '<p>ID: ' + person.id + '</p>';
                resultHtml += '<p>First Name: ' + person.firstname + '</p>';
                resultHtml += '<p>Last Name: ' + person.lastname + '</p>';
                resultHtml += '<p>Email: ' + person.email + '</p>';
                resultHtml += '<p>Phone: ' + person.phone + '</p>';
                resultHtml += '<p>Department: ' + person.department + '</p>';
            } else {
                resultHtml = '<p>No person found with the given ID.</p>';
            }
            $('#personSearchResult').html(resultHtml).hide();
            $('#personSearchResult').show(1000).delay(1000).hide(1000);
        },
        error: function () {
            alert('Error retrieving person by ID.');
        }
    });
}

function showAllPersons() {
    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: { method: 'queryPersons' },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            var resultElement = '';

            for (let i in response) {
                var person = response[i][0];
                resultElement += '<p>First Name: ' + person.firstname + ', Last Name: ' + person.lastname + ', Email: ' + person.email + '</p>';
            }

            $('#allPersonsResult').html(resultElement).hide();
            $('#allPersonsResult').show(1000).delay(1000).hide(1000);
        },
        error: function () {
            alert('Error retrieving all persons.');
        },
    });
}

function populateDepartmentOptions() {
    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: { method: 'getUniqueDepartments' },
        dataType: 'json',
        success: function (response) {
            var selectField = $('#departmentField');
            selectField.empty();
            selectField.append('<option selected disabled>Select a department</option>');

            for (var i = 0; i < response.length; i++) {
                var department = response[i];
                console.log(department);
                selectField.append('<option value="' + department + '">' + department + '</option>');
            }
        },
        error: function () {
            alert('Error retrieving departments.');
        }
    });
}

function searchByDepartment(department) {
    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: { method: 'queryAllPersonsByDepartment', param: department },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            var resultHtml = '';
            if (response.length > 0) {
                resultHtml += '<p>Results found:</p>';
                for (let i in response) {
                    var person = response[i];
                    resultHtml += '<p>Name: ' + person.firstname + ', Department: ' + person.department + '</p>';
                }
            } else {
                resultHtml = '<p>No results found for the given department.</p>';
            }
            $('#departmentSearchResult').html(resultHtml).hide();
            $('#departmentSearchResult').show(1000).delay(1000).hide(1000);
        },
        error: function () {
            alert('No persons found in the given department!');
        }
    });
}

function addCookie(key, value) {
    $.ajax({
        type: 'GET',
        url: '../serviceHandler.php',
        cache: false,
        data: {
            method: 'setCookie',
            param: JSON.stringify({
                key: key,
                value: value
            })
        },
        dataType: 'json',
        success: function (response) {
            $('#keyInput').val('');
            $('#valueInput').val('');
            $('#showCookies').show();
            $('#hideCookies').show();
            var resultElement = $('<div>');
            var keys = Object.keys(response);
            keys.forEach(function (key) {
                var value = response[key];
                var cookieEl = "<p>Cookie -> " + key + ": " + value + "</p>";
                resultElement.append(cookieEl);
            });
            $('#addCookieResult').html(resultElement).show().delay(1000).hide(1000);
        },
        error: function (error) {
            alert('Cookie could not be added!');
        }
    });
}

function isValidString(str) {
    return /^[A-Za-z]+$/.test(str);
}
