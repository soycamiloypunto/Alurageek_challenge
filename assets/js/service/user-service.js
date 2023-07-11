const listaUsuario = () => fetch("https://64adb3dfb470006a5ec64dad.mockapi.io/usuario").then((respuesta) => respuesta.json());

export const userServices = {
    listaUsuario,
};