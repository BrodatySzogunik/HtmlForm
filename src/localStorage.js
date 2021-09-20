// Local Stortage
export const local =() =>{
    var infobar = document.querySelector(".cookies-infobar")
    var modalfader = document.querySelector(".modal-fader")
    var btnAccepted = document.querySelector("#cookies-infobar-close")

    if(wasAccepted()){
        hideInfobar()
        return;
    }

    btnAccepted.addEventListener("click",(e)=>{
        e.preventDefault()
        hideInfobar()
        saveAcceptInLocalStorage(60)
    })

    function hideInfobar() {
        infobar.className = infobar.classList.value + " cookies-infobar_accepted";
        modalfader.className = modalfader.classList.value + " cookies-infobar_accepted";     
    }

    function wasAccepted (){
        return checkAcceptation()
    }
    function saveAcceptInLocalStorage(secondsToExpire) {
        let now = new Date();
        let time = now.getTime() + (secondsToExpire*1000);
        
        const item  = {
            accepted: "1",
            expires:time
        }
        localStorage.setItem("TermsAndCondition",JSON.stringify(item))

    } 
    function checkAcceptation() { 
        const item = localStorage.getItem("TermsAndCondition")
        if(!item){
            return false
        }
        const newItem = JSON.parse(item)
        const actualTime = new Date()
      
        if(newItem.accepted=="1" && actualTime.getTime() < newItem.expires){
            return true
        }else{
            localStorage.removeItem("TermsAndCondition")
            return false
        }
    }
}