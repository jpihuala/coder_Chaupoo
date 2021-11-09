class Producto {
    constructor(nombre, shampoo1, shampoo2, regalo, precio){
        this.nombre = nombre;
        this.shampoo1 = shampoo1;
        this.shampoo2 = shampoo2;
        this.regalo = regalo
        this.precio = Number(precio);
    }
}


const combo1 = new Producto ("Alfa", "Nutritivo", "Idatante", "Desodorante", 1450);
const combo2 = new Producto ("Beta", "Nutritivo", "Hidratante", "Serum Crecimiento", 1350);
const combo3 = new Producto ("Gamma", "Nutritivo", "Hidratante", "Aceite de Calendula", 1400);
const combo4 = new Producto ("Delta", "Nutritivo", "Hidratante", "Crema de coco", 1500);

const combos = [combo1, combo2, combo3, combo4];

const verProductos = () => {
    let texto = " ";
    for (const combo of combos) {
        texto += `
        Combo: ${combo.nombre}
        Shampoo 1: ${combo.shampoo1}
        Shampoo 2: ${combo.shampoo2}
        Extra : ${combo.regalo}
        Precio: $${combo.precio}

        `
    }
    return texto;
}

const comprar = () => {
    const comboU = prompt(`¿Que producto desea comprar?
    ${verProductos()}`);
    const comboEncontrado = combos.find(combo => combo.nombre.toLocaleLowerCase() === comboU.toLocaleLowerCase().trim());
    if (comboEncontrado) {
        alert(`Compraste ${comboEncontrado.nombre} a $${comboEncontrado.precio}`);
    }
    else{
        alert(`el combo ${comboU} no se encuentra.`)
    }
}

let opcion;
do {
    opcion = Number(prompt(`Ingrese una opcion:
        1 - Ver productor
        2 - Comprar
        3 - Salir
        `));

        switch (opcion) {
            case 1:
                const valorRecibido = verProductos();
                alert(valorRecibido);
                break;
            case 2:
                comprar();
                break;
            case 3:
                alert(`Gracias por su visita`);
                break;
            default:
                alert(`Opcion incorrecta`);
                break;
        }
} while(opcion !==3);