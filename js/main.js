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
main()

$(document).ready(function(){
    //You might want to do if check to see if localstorage set for theImage here
    let img = new Image();
    img.src = localStorage.theImage;

    $('.wallpaper').html(img);

    $("body").on("change",".options__button",function(){
        //Equivalent of getElementById
        let fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
        let file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

        let reader = new FileReader();
        reader.onload = function(e) {
             // Create a new image.
            let img = new Image();

            img.src = reader.result;
             localStorage.theImage = reader.result; //stores the image to localStorage
            $(".wallpaper").html(img);
        }

        reader.readAsDataURL(file);//attempts to read the file in question.
    });
});