function start() {
    let myInput = document.getElementById("myInput");
    let checkBtn = document.querySelector(".checkBtn");
    let box1 = document.querySelector(".box1");
    let box2 = document.querySelector(".box2");
    let box3 = document.querySelector(".box3");
    let box4 = document.querySelector(".box4");


    if (myInput.checked) {
        box1.style.width = "220px";
        box2.style.width = "220px";
        box3.style.width = "220px";
        box4.style.width = "220px";

        box1.style.opacity = 1;
        box2.style.opacity = 1;
        box3.style.opacity = 1;
        box4.style.opacity = 1;
    } else {
        box1.style.width = "1px";
        box2.style.width = "1px";
        box3.style.width = "1px";
        box4.style.width = "1px";

        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
    }
}