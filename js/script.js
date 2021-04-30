{
    const welcome = () => {
        console.log("Czesc wszystkim");
    }
    const showPicture = () => {
        const pictureGeisza = document.querySelector(".js-passion__picGeisza");
        const pictureBalerina = document.querySelector(".js-passion__picBalerina");
        const pictureFlamenco = document.querySelector(".js-passion__picFlamenco");
        const changeButton = document.querySelector(".js-passion__button");
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
            pictureGeisza.classList.toggle("showPicture");
        }
    }
    const init = () => {
        const changeButton = document.querySelector(".js-passion__button");
        changeButton.addEventListener("click", showPicture);
        welcome();
    }
    init();
}