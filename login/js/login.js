document.getElementById("show_password").addEventListener("click", function(){
    var el_pass = document.getElementById("password");
    if(this.getAttribute("data") == "hidden")
    {
        console.log("hidden");
        el_pass.type = "text";
        this.setAttribute("data","show");
        this.removeAttribute("class");
        this.setAttribute("class", "fas fa-eye-slash icon-show-password");
        console.log(el_pass);
        return;
    }

    if( this.getAttribute("data") == "show")
    {
        console.log("show");
        el_pass.type = "password";
        this.setAttribute("data","hidden");
        this.removeAttribute("class");
        this.setAttribute("class", "fa-solid fa-eye icon-show-password")
        console.log(el_pass);
        return;
    }
    
})