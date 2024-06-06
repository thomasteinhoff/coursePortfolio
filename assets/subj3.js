function toggleMainCode() {
    var element = document.getElementById("mainJCode");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        element.style.width = "99vw";

        var image = new Image();
        image.src = '../assets/graphics/mainMain.png';
        
        image.onload = function() {
            var aspectRatio = this.width / this.height;
            var height = window.innerWidth / aspectRatio;
            element.style.height = height + "px";
        };
    } else {
        element.style.display = "none";
    }
}
