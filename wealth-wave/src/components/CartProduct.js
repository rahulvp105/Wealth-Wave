import { useContext } from "react"
import { CartContext } from "../CartContext"
import { getCourseData } from "../courseDetails"
// import { Button } from "bootstrap/dist/js/bootstrap.bundle.min"
import { Button } from "react-bootstrap";


function CartProduct(props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const courseData = getCourseData(id)

    return (
        <>
            <h3>{courseData.title}</h3>
            <p>{quantity} total</p>
            <p>{(quantity * courseData.price).toFixed(2)}₹</p>
            <Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct
