function scroll(){
  
   var  scrollValue = window.scrollY;
   
   const btn = document.querySelector(".btn");
   if(scrollValue < 200){
       btn.classList.remove("appear")
   }else{
       btn.classList.add("appear")
   }
   btn.addEventListener("click",  function(){
       
});
    
}
window.addEventListener("scroll", scroll)
