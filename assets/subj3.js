function toggleMainJCode() {
    var element = document.getElementById("mainJCode");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        element.style.width = "99vw";

        var image = new Image();
        image.src = '../assets/graphics/codeMainJ.png';
        
        image.onload = function() {
            var aspectRatio = this.width / this.height;
            var height = window.innerWidth / aspectRatio;
            element.style.height = height + "px";
        };
    } else {
        element.style.display = "none";
    }
}

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


function closeAllExcept(exceptId) {
    var codes = document.getElementsByClassName("codeExplanationPL");
    for (var i = 0; i < codes.length; i++) {
        var code = codes[i];
        if (code.id !== exceptId && code.id !== "mainJCode") {
            code.style.display = "none";
        }
    }
}