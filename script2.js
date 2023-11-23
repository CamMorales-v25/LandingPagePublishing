window.onload = function() {
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("sigIn");
    let nameInput = document.getElementById("nameInput");
    let title = document.getElementById("title");
  
    signIn.onclick = function() {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Cuenta Usuario ";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
    }
  
    signUp.onclick = function() {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Cuenta ONG";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");
    }
  }
  