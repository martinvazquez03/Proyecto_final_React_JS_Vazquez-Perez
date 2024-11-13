const productos = [
    {
        id:1,
        titulo: "Sofa terciopelo gris oscuro",
        categoria: "sofas",
        imagen: "https://www.shutterstock.com/image-photo/modern-sofa-on-white-background-260nw-2003672078.jpg",
        detalles: "Sofa terciopelo gris oscuro. 2 metros de ancho, 1 metro de profundidad",
        precio: 220000,
        stock: 27
    },
    {
        id:2,
        titulo: "Sofa cuero beige",
        categoria: "sofas",
        imagen: "https://www.shutterstock.com/image-photo/3-seat-beige-leather-color-260nw-2103667781.jpg",
        detalles: "Sofa de cuero beige. 3 metros de ancho, 1 metro de profundidad",
        precio: 290000,
        stock: 5
    },
    {
        id:3,
        titulo: "Mesa ratona redonda",
        categoria: "mesas",
        imagen: "https://www.shutterstock.com/image-photo/office-home-wood-furniture-background-260nw-1908704260.jpg",
        detalles: "Mesa ratona de roble, 1 metro de diametro, 50 centimetros de altura",
        precio: 34000,
        stock: 15
    },
    {
        id:4,
        titulo: "Mesa de luz",
        categoria: "mesas",
        imagen: "https://i.pinimg.com/550x/90/db/24/90db24cf22efdfc65e6dff5261e28268.jpg",
        detalles: "Mesa de luz de pino, 60x60 centimetros con dos cajones",
        precio: 28000,
        stock: 7
    },
    {
        id:5,
        titulo: "Sillon de tela blanco",
        categoria: "asientos",
        imagen: "https://st4.depositphotos.com/1000451/28588/i/450/depositphotos_285884898-stock-photo-white-color-armchair-style-modern.jpg",
        detalles: "Sillon de tela blanco con reposabrazos, 1 metro de ancho, 70 centimetros de profundidad y 1,30 metros de alto",
        precio: 120000,
        stock: 19
    },
    {
        id:6,
        titulo: "Sillon de tela gris",
        categoria: "asientos",
        imagen: "https://www.shutterstock.com/image-photo/classic-armchair-art-deco-style-260nw-2133852517.jpg",
        detalles: "Sillon de tela gris con reposabrazos, 1 metro de ancho, 70 centimetros de profundidad y 1,10 metros de alto",
        precio: 100000,
        stock: 2
    }
]

export const getProducts = new Promise((resolve) => {
    resolve(productos)
})

export const getProduct = (id) => {
    return productos.find((prod) => prod.id == id)
}

export const getCategoria = (categoria) => {
    return productos.filter((producto) => producto.categoria === categoria)
}