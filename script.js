function changeImage() {
    var img = document.getElementById("DP");
    img.src="./Assets/PROFILE2.jpg";
    setTimeout(changeImage2, 500);
}


function changeImage2() { 
    var img = document.getElementById("DP");
    img.src="./Assets/PROFILE.jpg";
}
