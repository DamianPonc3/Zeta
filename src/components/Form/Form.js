import { db } from "../../services/firebase";
import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from '../context/CartContext';
import { useNotification } from '../../Notification/notification'
import "./Form.css"

const Form = () => {
    const { cart, getTotal, cleanCart, getQuantity } = useContext(CartContext);
    const [loading, setLoading] = useState(false)
    const { setNotification } = useNotification()
    const [orderId] = useState("");
    const [creatingOrder, setCreatingOrder] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const sendOrder = e => {
        e.preventDefault();
        setCreatingOrder(true);
        delete formData.emailConfirm;
        const newOrder = {
            name: formData,
            date: Timestamp.fromDate(new Date()),
            items: cart,
            total: getTotal()
        };
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, newOrder)
            .then(({ id }) => {
                batch.commit()
                cleanCart()
                setNotification('success',`El id de la orden es: ${id}`)
            }).catch(error => {
                console.log(error)
                setNotification('error',`Algunos productos no tienen stock`)
            })
            .finally(() => {
                setCreatingOrder(false);
                setFormData({ name: "", email: "", phone: "" });
                setLoading(false)
                setTimeout(() => {
                    window.location.href = '/';
                }, 1500);
            });

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const batch = writeBatch(db)
        
        const collectionRef = collection(db, 'products') 

        getDocs(query(collectionRef, where(documentId(),"in", ids)))

            .then(response =>{
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            })

    
    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    };
    return (
        <div>
            <div>
                {creatingOrder ? (
                    <div>
                    </div>
                ) : orderId ? (
                    <div>
                        {orderId && <h1>Orden Realizada, ID:{orderId}</h1>}
                        <Link to={`/`}>
                            <button>Terminar</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <form
                            onSubmit={sendOrder}
                            onChange={handleChange}
                        >
                            <div >
                                <label>Nombre y Apellido</label>
                                <input
                                    type="name"
                                    name="name"
                                    defaultValue={formData.name}
                                    required
                                />
                            </div>
                            <div >
                                <label >Numero de celular</label>
                                <input
                                    type="number"
                                    name="phone"
                                    defaultValue={formData.phone}
                                    required
                                />
                            </div>
                            <div >
                                <label >E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={formData.email}
                                    required
                                />
                            </div>
                            <button 
                                disabled={
                                    !formData.name ||
                                    !formData.phone ||
                                    !formData.email ||
                                    cart.length === 0
                                }
                            >
                                Confirmar pedido
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div >
    )

}


export default Form;
