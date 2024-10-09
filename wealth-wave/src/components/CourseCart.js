import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CartContext } from "../CartContext";

function CourseCart({ courses }) {
  const course = courses;
  const cart = useContext(CartContext);
  const courseQuantity = cart.getProductQuantity(course.id);
  console.log(cart.items)
  return (
    <>
    {/* <div class="row">
       <div class="col-md-4"> */}
        {/* <div
          class="card shadow p-3 mb-5 bg-white rounded"
          style={{ width: "18rem" }}
        > */}
          <img
            class="card-img-top"
            src="Images/fin1.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p>{course.title}</p>
            <p>By {course.instructor}</p>
            <p class="card-text">
              <b>{course.description}</b>
            </p>
            <i class="fa-solid fa-star" style={{ color: "brown" }}></i>
            <span>4.8</span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="details-link"
            >
              View Details
            </a>
          </div>
          { courseQuantity > 0 ? 
            <>
                <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart: {courseQuantity}</Form.Label>
                    <Col sm="6">
                        <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(course.id)}>+</Button>
                        <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(course.id)}>-</Button>

                    </Col>
                </Form>
                <Button className="mt-2" variant="danger" onClick={() => cart.deleteFromCart(course.id)}>Remove From Cart</Button>
            </>  : 
          <Button onClick={() => cart.addOneToCart(course.id)}>Add To Cart</Button>
        }
        {/* </div> */}
     {/* </div>
   </div> */}
  </>
  );
}

export default CourseCart;
