
$(window).on("load",function(){
    //home section slideshow
    var slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if (slideIndex == slideLen-1){
            slideIndex = 0;

        }
        else {
            slideIndex++ ;
            
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft+=100;
})

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft-=100;
})