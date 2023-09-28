function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeImage() {
    var img = document.getElementById("DP");
    img.src="./Assets/PROFILE2.jpg";
    setTimeout(changeImage2, 500);
}


function changeImage2() { 
    var img = document.getElementById("DP");
    img.src="./Assets/PROFILE.jpg";
}

