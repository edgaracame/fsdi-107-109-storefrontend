import { useContext } from "react";
import StoreContext from "../context/storeContext";
import CartProduct from "./cartproduct"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import "./cart.css"

const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getTotal = () => {
        let total = 0;
        
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }

        return total.toFixed(2);
    }

    return(
        <div className="cart">
            <div className="label-cart">
                <p className="cart-header">One step away from having fun!</p>
                <p className="cart-count">Currently you have <b>{cart.length}</b> products in the cart</p>
            </div>

            <div className="cart-content">
                <div className="cart-list">
                    { cart.map((p) =>
                        <CartProduct key={p.id} data={p} />
                    )}
                </div>

                <div className="cart-ticket">
                    <p className="label-total">Total</p>
                    <p className="number-total">${getTotal()}</p>
                    <p>Pay with: </p>
                    <button className="ticket-creditcard"><FontAwesomeIcon icon={faCreditCard} />&nbsp; Credit Card</button>
                    <button className="ticket-cash"><FontAwesomeIcon icon={faMoneyBill} />&nbsp; Cash</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;