

const navbarEl = document.querySelector(".navigation") ;
const BottomContainerEl = document.querySelector(".Booking") ;

console.log(navbarEl.offsetHeight) ;
console.log( BottomContainerEl.offsetTop) ;


window.addEventListener("scroll", () => {
    if(window.scrollY> BottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {

        navbarEl.classList.add("active") ;
      
 
    }else{

        navbarEl.classList.remove("active") ;
        
    }
}) ;











