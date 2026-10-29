let (esModoOscuro = !esModoOscuro)
let = (esModoClaro =) 
 
 if (esModoOscuro) {
  
    style.backgroundColor = "#121212";
    style.color = "#ffffff";
    estadoTexto.innerText = "Modo Oscuro 🌙";
    btnModo.innerText = "Cambiar a Modo Claro";
    btnModo.style.backgroundColor = "#ffffff";
    btnModo.style.color = "#121212";
} 
else (esModoClaro) {
               
   {style.backgroundColor = "#ffffff";
   style.color = "#222222";
    estadoTexto.innerText = "Modo Claro ☀️";
    btnModo.innerText = "Cambiar a Modo Oscuro";
     btnModo.style.backgroundColor = "#222222";
   btnModo.style.color = "#ffffff";
   }
}
    

