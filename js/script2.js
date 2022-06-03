
// dark - light Mode
let iconSwitch = document.querySelector("#icon");
console.log(iconSwitch);
iconSwitch.onclick = function () {
    let classList = document.querySelector("#lightdark")
    if (classList.className === "light-theme") {
        classList.className = "dark-theme"
        iconSwitch.childNodes[0].className = "fa-solid fa-sun";
    }
    else if (classList.className === "dark-theme") {
        classList.className = "light-theme";
        iconSwitch.childNodes[0].className = "fa-solid fa-moon";
    }
}

// navbar
window.onscroll = function () {
    let navigation = document.querySelector("#nav");
    navigation.classList.toggle("stickynav", window.scrollY > 200);
    // console.log(window.scrollY);
}

// filter gallary
$(document).ready(function () {
    $(".list").click(function(){
        const value = $(this).attr("data-filter");
        if(value == "all"){
            $(".project-box").show();
        }
        else{
            $(".project-box").not('.'+value).hide();
            $(".project-box").filter('.'+value).show();
        }
    })
    $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})
