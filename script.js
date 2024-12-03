document.addEventListener("DOMContentLoaded", ()=>{
    const themeToggler = document.getElementById("themeToggler");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){
        body.classList.add("light_mode");
        themeToggler.innerHTML = `<i class="bx bx-moon"></i>`;
    }

    themeToggler.addEventListener("click", ()=>{
        if(body.classList.contains("light_mode")){
            body.classList.remove("light_mode");
            themeToggler.innerHTML = `<i class="bx bx-sun"></i>`;
            localStorage.setItem("theme", "dark");
        }else{
            body.classList.add("light_mode");
            themeToggler.innerHTML = `<i class="bx bx-moon"></i>`;
            localStorage.setItem("theme", "light");
        }
});
    });