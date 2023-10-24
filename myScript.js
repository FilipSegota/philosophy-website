/*
    Author: Filip Segota
    Class: CSC261, Fall 2023
    Assignment: JavaScript Assignment
    File: myScript.js
*/

//Validate if name field is filled out and call saveCookies function if it is
function validateForm() {
    const nameField = document.forms["contactForm"]["name"].value;
    if (nameField == "") {
        alert("Name must be filled out!");
        return false;
    }
    else {
        saveData();
        saveCookies();
    }
}

//Creating and saving cookies
function saveCookies() {
    let today = new Date();
    let expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);

    let name = document.forms["contactForm"]["name"].value;
    document.cookie = "Name=" + name + " Expires=" + expiry.toLocaleString() + " Path=/;";
    alert(document.cookie);
}

//Save form values in JSON form
function saveData() {
    let formObject = {};
    let formData = new FormData(document.getElementById("contactForm"));

    formData.forEach(function (value, key) {
        formObject[key] = value;
    });
    let formJson = JSON.stringify(formObject)

    alert(formJson);
}

//Change text based on selected value
function changeFunction() {
    let select = document.getElementById("inquiry").value;
    document.getElementById("inquiryTitle").innerHTML = select + ":";
}

//Searching for a match
function searchFunction() {
    var input = document.getElementById("searchBox");
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("card");

    for (i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByClassName("card-title")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        }
        else {
            cards[i].style.display = "none";
        }
    }
}

//Show time
setInterval(function () {
    let footerTime = document.getElementsByClassName("footer-time")[0];
    const currentDate = new Date();
    footerTime.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 1000);