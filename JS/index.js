// class Producto {
//     constructor(nombre, shampoo1, shampoo2, regalo, precio){
//         this.nombre = nombre;
//         this.shampoo1 = shampoo1;
//         this.shampoo2 = shampoo2;
//         this.regalo = regalo
//         this.precio = Number(precio);
//     }
// }


// const combo1 = new Producto ("Alfa", "Nutritivo", "Idatante", "Desodorante", 1450);
// const combo2 = new Producto ("Beta", "Nutritivo", "Hidratante", "Serum Crecimiento", 1350);
// const combo3 = new Producto ("Gamma", "Nutritivo", "Hidratante", "Aceite de Calendula", 1400);
// const combo4 = new Producto ("Delta", "Nutritivo", "Hidratante", "Crema de coco", 1500);

// const combos = [combo1, combo2, combo3, combo4];

// const verProductos = () => {
//     let texto = " ";
//     for (const combo of combos) {
//         texto += `
//         Combo: ${combo.nombre}
//         Shampoo 1: ${combo.shampoo1}
//         Shampoo 2: ${combo.shampoo2}
//         Extra : ${combo.regalo}
//         Precio: $${combo.precio}

//         `
//     }
//     return texto;
// }

// const comprar = () => {
//     const comboU = prompt(`¿Que producto desea comprar?
//     ${verProductos()}`);
//     const comboEncontrado = combos.find(combo => combo.nombre.toLocaleLowerCase() === comboU.toLocaleLowerCase().trim());
//     if (comboEncontrado) {
//         alert(`Compraste ${comboEncontrado.nombre} a $${comboEncontrado.precio}`);
//     }
//     else{
//         alert(`el combo ${comboU} no se encuentra.`)
//     }
// }

// let opcion;
// do {
//     opcion = Number(prompt(`Ingrese una opcion:
//         1 - Ver productor
//         2 - Comprar
//         3 - Salir
//         `));

//         switch (opcion) {
//             case 1:
//                 const valorRecibido = verProductos();
//                 alert(valorRecibido);
//                 break;
//             case 2:
//                 comprar();
//                 break;
//             case 3:
//                 alert(`Gracias por su visita`);
//                 break;
//             default:
//                 alert(`Opcion incorrecta`);
//                 break;
//         }
// } while(opcion !==3);

/*generador de Compras*/

// const container = document.querySelector('.combo');
// const span = document.getElementById('span');
// let contador = 0 

// container.addEventListener('click', (e)  => {
//     if(e.target.classList.contains('btn-info')){
//         contador ++
//         span.textContent = contador
//     }
//     if(e.target.classList.contains('btn-danger')){
//         contador --
//         span.textContent = contador
//     }
//     e.stopPropagation
// })

// /*Nuevo Proyecto*/

// let combos = [{id:1, nombre: "Alpha", precio: 1450}, 
// {id:2, nombre: "Beta", precio : 1450},
// {id:3, nombre: "Delta", precio : 1450}]

// let mostrarCombos = document.getElementById('combosChau');
// let nomVar = document.createElement("div");

// for (let i = 0; i < combos.length; i++){

//     nomVar.innerHTML += `
//                 <img src="../Imagenes/sigma.jpeg" class="card-img-top" alt="sigma">
//                 <div class="card-body">
//                     <h5 class="card-title">${combos[i].nombre}</h5>
//                     <p class="card-text">Some.</p>
//                     <a href="#" class="btn btn-primary">Comprar</a>
//                 </div>
//                 <h4 class="my-5">Contador: <span id="span">0</span></h4>
//     `
// }

// mostrarCombos.appendChild(nomVar)

// mostrarCombos.addEventListener('click', (e)  => {
//     if(e.target.classList.contains('card')){
//         contador ++
//         span.textContent = contador
//     }
//     e.stopPropagation
// })


// JQUERY

// const combos = [];

// class Combo{
//     constructor(marca, precio){
//         this.id = combos.length;
//         this.marca = marca.toUpperCase();
//         this.precio = Number(precio);
//     }
//     detalle(){
//         return `La marca es: ${this.marca} y el valor del Shampoo es: $ ${this.precio}`;
//     }
// }

// combos.push(new Combo("Alpha", '1400'));
// combos.push(new Combo("Beta", '1500'));
// combos.push(new Combo("Gama", '1600'));

// console.log(combos);


// function combosSelect(id){
//     let innerSelect = '';
    
//     combos.forEach(combo =>  innerSelect += `<option value='${combo.id}'>${combo.marca}</opction>`)
//     console.log(id)
//     return `<select id="${id}">${innerSelect}</select>`;
    
// }
// $("body").append(combosSelect('elegirCombo'));
// $('#elegirCombo').change(function (e) { 
//     e.preventDefault();
//     const seleccion = combos.find(obj => obj.id == e.target.value);
//     $("body").append(`<h3>${seleccion.detalle()}</h3>`);
// });



// $("main").ready(function () {
//     $("#fadeIn").click(function () { 
//         $("#caja").fadeIn();
//     });
//     $("#fadeOut").click(function () { 
//         $("#caja").fadeOut();
//     });
//     $("#fadeTog").click(function () { 
//         $("#caja").fadeToggle();
        
//     });
    
// });



// INDEX Contacto

$(document).ready(() => {
    const archivo = '../datos.txt'
    var nombre = document.getElementsByClassName('nombre').value;
    var apellido = document.getElementsByClassName ('apellido').value;
    var email = document.getElementsByClassName ('email').value;
    var direccion = document.getElementsByClassName ('direccion').value;
    var ciudad = document.getElementsByClassName ('ciudad').value
    var datos= "Nombre= "+nombre+"&Apellido= "+apellido+"&email= "+email+ "&Direccion= "+direccion+ "&Ciudad= "+ciudad; 
    
    $('enviar').click( () => {
        $.ajax({
            method: "POST",
            url: archivo,
            data: datos,
            
            success: function (response) {
                $("#mailContacto").prepend(`<h1>se confirmo el envio</h1>`);
            }
        });
    });
})