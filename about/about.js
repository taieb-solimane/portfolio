

addEventListener("DOMcontentLoaded",function(){
  document.querySelectorAll(".progress").forEach(progress =>{
    let width=progress.getAttribute("data-with");
    progress.style.width=width;
  })
})
























document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".progress").forEach(progress => {
      let width = progress.getAttribute("data-width");
      progress.style.width = width;
  });
});








