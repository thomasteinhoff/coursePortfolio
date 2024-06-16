// The first commented code, refering the main class, is separated from the others due the buttons functionalities
function toggleMainJCode() {
    var element = document.getElementById("mainJCode");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        element.style.width = "99vw";

        var image = new Image();
        image.src = '../assets/graphics/codeMainJ.png';
        
        // Matches the image width to the display width, keeping the proportion
        image.onload = function() {
            var aspectRatio = this.width / this.height;
            var height = window.innerWidth / aspectRatio;
            element.style.height = height + "px";
        };
    } else {
        element.style.display = "none";
    }
}

// How the other classes shall not interfier the main code display, redoing the function was more simple then figuring out how to detect what and how the user is trying to read
// The button have as signature the id and image file name
function toggleCode(codeId, imageName) {
    var element = document.getElementById(codeId);
    if (element.style.display === "none" || element.style.display === "") {
        closeAllExcept(codeId);
        element.style.display = "block";
        element.style.width = "99vw";

        var image = new Image();
        image.src = `../assets/graphics/${imageName}.png`;
        
        image.onload = function() {
            var aspectRatio = this.width / this.height;
            var height = window.innerWidth / aspectRatio;
            element.style.height = height + "px";
        };
    } else {
        element.style.display = "none";
    }
}

// As the function name says, closes every other code, except the one you clicked to read, in case there is another already open
function closeAllExcept(exceptId) {
    var codes = document.getElementsByClassName("codeExplanationPL");
    for (var i = 0; i < codes.length; i++) {
        var code = codes[i];
        if (code.id !== exceptId && code.id !== "mainJCode") {
            code.style.display = "none";
        }
    }
}