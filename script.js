function darkMode(){
     const pagina = document.body;

     pagina.classList.toggle("dark-mode");

     const botao = document.querySelector("button");

     const isDarkMode = document.body.classList.contains("dark-mode");

     if(isDarkMode == true){
        botao.textContent = "Modo Claro"
     }else{
        botao.textContent = "Modo Escuro"
}}