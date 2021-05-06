let tartas = [ 
    ["Jamaica", 420, "Jamon, Queso, Huevo","Esta tarta es deliciosa", 'https://i.pinimg.com/170x/49/e6/19/49e6195bb7b74257c644a3995450a38d.jpg'],
    ["Japon", 350, "Anana, Queso, Huevo","Esta tarta es mas deliciosa", 'https://i.pinimg.com/170x/49/e6/19/49e6195bb7b74257c644a3995450a38d.jpg'],
];

// let tarta1 = new Tarta(tartas[0][0],tartas[0][1],tartas[0][2],tartas[0][3],tartas[0][4]);
let tarta1 = new Tarta(tartas[0]);
// let tarta2 = new Tarta(tartas[1][0],tartas[1][1],tartas[1][2],tartas[1][3],tartas[1][4]);
let tarta2 = new Tarta(tartas[1]);

// tarta1.getTarta();
tarta1.setIngredientes("Queso, huevo, Salame");
// console.log(tarta1.getImage());
// tarta2.getTarta();


let carrito = new Cart();

carrito.addNewProduct(tarta1);
console.log("Tarta 1" , carrito.getTotalProducts());
carrito.addNewProduct(tarta2);
console.log("Tarta 2" , carrito.getTotalProducts());



