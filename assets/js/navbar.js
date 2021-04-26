var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove('slide-up');
  } else {
    document.querySelector(".navbar").classList.add('slide-up');
  }
  prevScrollpos = currentScrollPos;
}
$(document).ready(function(){
  $('.nav-drop-icon').click(function(e){
    e.preventDefault();
    dropdown = e.target;
    if(dropdown.id == 'expand-projects'){
      $('#projects-menu').toggle();
    }
    else if(dropdown.id == 'expand-socials'){
      $('#socials-menu').toggle();
    }
    if(dropdown.classList.contains('fa-plus-square')){
      dropdown.classList.remove('fa-plus-square');
      dropdown.classList.add('fa-minus-square');
    }
    else{
      dropdown.classList.add('fa-plus-square');
      dropdown.classList.remove('fa-minus-square');
    }
  });
  const slidersL = document.querySelectorAll("[class*='slide-l']");
  const slidersR = document.querySelectorAll("[class*='slide-r']");
  const slidersU = document.querySelectorAll("[class*='slide-u']");
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if(entry.target.classList.contains("slide-r")){
          entry.target.classList.add('slide');
        }
        else{
          entry.target.classList.add('slide');
        }
      }
    })
  }
  const options = {}

  const myObserver = new IntersectionObserver(callback, options);
  slidersL.forEach(slider => myObserver.observe(slider));
  slidersR.forEach(slider => myObserver.observe(slider));
  slidersU.forEach(slider => myObserver.observe(slider));
});