const products = [
    {id: "1", img: "../assets/remera1.jpg", name: "x", precio: 3000, category: "remeras", descripcion:"Talles disponibles: L, 100% algodon", stock: 24 },
    {id: "2", img: "/assets/remera2.jpg", name: "x", precio: 3100, category: "remeras", descripcion:"Talles disponibles: L, XL", stock: 23},
    {id: "3", img: "/assets/remera3.jpg", name: "x", precio: 3100, category: "remeras", descripcion:"Talle: L", stock: 25},
    {id: "4", img: "/assets/remera4.jpg", name: "x", precio: 3000, category: "remeras", descripcion:"Talle: L", stock: 30},
    {id: "5", img: "/assets/remera5.jpg", name: "x", precio: 3100, category: "remeras", descripcion:"Talle: L", stock: 20},
    {id: "6", img: "/assets/jogger1.jpg", name: "x", precio: 4000, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "7", img: "/assets/jogger2.jpg", name: "x", precio: 4200, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "8", img: "/assets/jogger3.jpg", name: "x", precio: 4000, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "9", img: "/assets/jogger4.jpg", name: "x", precio: 4000, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "10", img: "/assets/jogger5.jpg", name: "x", precio: 4100, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "11", img: "/assets/jogger6.jpg", name: "x", precio: 4000, category: "joggers", descripcion:"Talle: 42", stock: 20},
    {id: "12", img: "/assets/short1.jpg", name: "x", precio: 2000, category: "shorts", descripcion:"Talle: 40", stock: 20},
    {id: "13", img: "/assets/short2.jpg", name: "x", precio: 2000, category: "shorts", descripcion:"Talle: 40", stock: 20},
    {id: "14", img: "/assets/short3.jpg", name: "x", precio: 2100, category: "shorts", descripcion:"Talle: 40", stock: 20},
    {id: "15", img: "/assets/short4.jpg", name: "x", precio: 2000, category: "shorts", descripcion:"Talle: 40", stock: 20},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        })
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}