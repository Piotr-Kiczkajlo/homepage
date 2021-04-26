console.log("Czesc wszystkim");

let changeButton = document.querySelector(".js-passion__button");
let pictureGeisza = document.querySelector(".js-passion__picGeisza");
let pictureBalerina = document.querySelector(".js-passion__picBalerina");
let pictureFlamenco = document.querySelector(".js-passion__picFlamenco");

changeButton.addEventListener("click", () => {
    if (changeButton.innerText === "Pokaż obraz") {
        changeButton.innerText = "Zmień obraz";
        pictureGeisza.classList.toggle("showPicture");
    } else if (pictureGeisza.classList.contains("showPicture")) {
        pictureGeisza.classList.toggle("showPicture");
        pictureBalerina.classList.toggle("showPicture");
    } else if (pictureBalerina.classList.contains("showPicture")) {
        pictureBalerina.classList.toggle("showPicture");
        pictureFlamenco.classList.toggle("showPicture");
    } else {
        pictureFlamenco.classList.toggle("showPicture");
        pictureGeisza.classList.toggle("showPicture")
    }
});