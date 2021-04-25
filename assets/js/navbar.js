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
});