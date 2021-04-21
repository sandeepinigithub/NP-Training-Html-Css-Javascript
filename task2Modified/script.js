var dropDown = false;

function toggle() {
  
  if (!dropDown) {
        dropDown = true;
        document.querySelectorAll(".toggle")[0].style.display = "initial";
        document.querySelectorAll(".toggle")[1].style.display = "initial";
        document.querySelectorAll(".toggle")[2].style.display = "initial";
        document.querySelectorAll(".toggle")[3].style.display = "initial";
    
  }
  else 
    closetoggle();
}

function closetoggle(){
    if(dropDown){
        dropDown = false ;
        document.querySelectorAll(".toggle")[1].style.display = "none";
        document.querySelectorAll(".toggle")[2].style.display = "none";
        document.querySelectorAll(".toggle")[3].style.display = "none";
        document.querySelectorAll(".toggle")[0].style.display = "none";

    }
    

}
 
