import { login } from "./login.js";
import { estaAutenticado } from "./main.js";

const btnIrAgregarProducto = document.querySelector("[data-agregar-producto]");

const ocultarBotonAddProduct = () => {
    console.log(sessionStorage.getItem("autenticado"));
    
    if (!login(estaAutenticado)) {
        btnIrAgregarProducto.style.display = "none";
    }
}

ocultarBotonAddProduct();