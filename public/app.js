//                                              hamburger Section
const hamburger = document.querySelector('.menu .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.menu .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.menu .nav-bar .nav-list ul li a');
const menu = document.querySelector('.menu.container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        menu.style.backgroundColor = '#29323c';
    } else {
        menu.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//                                              End hamburger Section

//                                              Touch Slider Section
const sliderItems = document.querySelector(".slider-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

sliderItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-content").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}

//                                              EndTouch Slider Section