function main() {
    let date = new Date();
    // Clock
    let hour = date.getHours();
    if (hour < 10) hour = `0${hour}`;

    let minute = date.getMinutes();
    if (minute < 10) minute = `0${minute}`;

    let second = date.getSeconds();
    if (second < 10) second = `0${second}`;

    document.getElementById("clock").innerHTML = `${hour}:${minute}:${second}`;

    // Calendar
    let day = date.getDate();

    let month = date.getMonth();
    if (month == 0) month = "Stycznia";
    if (month == 1) month = "Luty";
    if (month == 2) month = "Marzec";
    if (month == 3) month = "Kwietnia";
    if (month == 4) month = "Maja";
    if (month == 5) month = "Czerwca";
    if (month == 6) month = "Lipca";
    if (month == 7) month = "Sierpnia";
    if (month == 8) month = "Września";
    if (month == 9) month = "Października";
    if (month == 10) month = "Listopada";
    if (month == 11) month = "Grudnia";

    let year = date.getFullYear();

    document.getElementById("date").innerHTML = `${day} ${month} ${year}`
    setTimeout("main()", 1000);
}