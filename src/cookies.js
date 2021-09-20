// Cookies
export const cookies = () => {
        var infobar = document.querySelector(".cookies-infobar")
        var modalfader = document.querySelector(".modal-fader")
        var btnAccepted = document.querySelector("#cookies-infobar-close")
        

        if(wasAccepted()){
            hideInfobar();
            return;
        }

        btnAccepted.addEventListener("click",(e)=>{
            e.preventDefault();
            hideInfobar();
            saveAcceptInCookies(60)
        })

        function hideInfobar(){
            infobar.className = infobar.classList.value + " cookies-infobar_accepted";
            modalfader.className = modalfader.classList.value + " cookies-infobar_accepted";
        }
        function wasAccepted () {
                return checkCookie() === "1";
                }


        
         function checkCookie () {
             var name = "cookieInfoHidden=";
             var cookies = document.cookie.split(';');
             for(var i = 0; i < cookies.length; i++) {
                 var cookie = cookies[i];
                 while (cookie.charAt(0)==' ') {
                   cookie = cookie.substring(1);
                 }
                 if (cookie.indexOf(name) === 0) {
                   return cookie.substring(name.length, cookie.length);
                 }
             }
             return "";
           };
           function saveAcceptInCookies (secondsOfValidity) {
            var now = new Date();
            var time = now.getTime() + (secondsOfValidity * 1000);
            var newTime = new Date(now.setTime(time));
            
            newTime = newTime.toUTCString();
            
            document.cookie = "cookieInfoHidden=1; expires=" + newTime + "; path=/";
          }
        
    }
