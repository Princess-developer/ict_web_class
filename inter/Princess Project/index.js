function click_on() {
alert ("Login Successful! Redirecting to home...");
    window.location.href = "index.html"; 
    }
    
    function click_me() {
alert ("Signup Successful! Redirecting to login...");
    window.location.href = "login.html"; 
    }

    function toggleMenu() {
        var links = document.getElementById("handy");
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block"
        }
    }
    
   