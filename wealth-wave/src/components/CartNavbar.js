import { useContext, useState } from "react"
import { Button, Container, Navbar, Modal } from "react-bootstrap"
import { CartContext } from "../CartContext"
import CartProduct from "./CartProduct"
import { NavLink } from "react-router-dom"

function CartNavbar() {
    const cart = useContext(CartContext)
    const [show, setShow] = useState(false)
    const productCount = cart.items.reduce((sum, product)=>sum+product.quantity,0)
    function handleShow(){
        setShow(true)
    }
    function handleClose(){
        setShow(false)
    }
    async function checkout() {
        await fetch('http://localhost:3001/checkout',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            if(response.url){
                window.location.assign(response.url)
            }
        })
    }
    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/" style={{color: "white", marginLeft: "20px"}}>Wealth Wave</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <NavLink to="/">
            <Button  style={{marginRight: "60px"}}>
                Home
                </Button>
                </NavLink>

                <Button style={{marginRight: "60px"}} onClick={handleShow}>Cart {productCount} Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productCount > 0 ?
                <>
                <p>Items in your cart:</p>
                {cart.items.map((currentItem, index) => {
                    return <CartProduct key={index} id={currentItem.id} quantity={currentItem.quantity}/>
                })}
                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                <Button variant="success" onClick={checkout}>Purchase Now!</Button>
                </> 
                : <h1>There are no items in the cart!</h1>}
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CartNavbar
