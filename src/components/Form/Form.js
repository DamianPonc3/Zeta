import { db } from "../../services/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from '../context/CartContext';
import "./Form.css"

const OrderEnd = () => {
    const { cart, cleanCart, getTotal } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [creatingOrder, setCreatingOrder] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const vaciar = cleanCart
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
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setCreatingOrder(false);
                setFormData({ name: "", email: "", phone: "" });
            });
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
                            <button onClick={vaciar}>Terminar</button>
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


export default OrderEnd;
