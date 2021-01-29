function init(){
  const slides = document.querySelectorAll(".slide")
  const pages = document.querySelector(".page")
  const backgrounds = [`radial-gradient(#604B2B, #0b1023,)`,`radial-gradient(#2B5F60, #0b1023)`,`radial-gradient(#983131, #0b1023`];

  slides.forEach((slide,index)=>{
    slide.addEventListener('click', function(){
      changeDots(this);
    });
  });

  function changeDots(dot){
    slides.forEach(slide=>{
      slide.classList.remove("active");
    })
    dot.classList.add("active");
  }
}

init();