import { Button } from "react-bootstrap"
import { courseArray } from "../courseDetails"
import CartNavbar from "../components/CartNavbar"
import { useContext } from "react"
import { CartContext } from "../CartContext"
import CourseCart from "../components/CourseCart"
import Footer from "../components/Footer"


function Store() {

  function handleSubscribe(){
    alert("Subscribe Successfully")
  }
  
    return (
        <>
        <CartNavbar></CartNavbar>
            <div class="courses">
      <h1 align="center">Bestselling Courses on Finance</h1>
      <p align="center">
        Here's our best-selling courses, hand-picked for you.
      </p>
    

      <div style={{   display: "flex", gap: '2px', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {
        courseArray.map((course)=>{
            return <>
             <div className="flex">
               <div
          class="card course-card shadow p-3 mb-5 bg-white rounded"
          style={{ width: "18rem" }}
        >
                  <CourseCart courses={course}/>
                  </div>
              </div>
            </>
        })
      }
      </div>

      
      {/* <div class="row">
        <div class="col-md-4">
          <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <img
              class="card-img-top"
              src="Images/fin1.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
                <p>By Chetan Sharma</p>
              <p class="card-text"><b>
                Masterclass on Ace the Excel and save your time!</b>
              </p>
              <i class="fa-solid fa-star" style={{color: 'brown'}}></i>
              <span>4.8</span>
              <a href="#" target="_blank" rel="noopener noreferrer" class="details-link">View Details</a>
            </div>
            <Button>Buy Now</Button>

          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <img
              class="card-img-top"
              src="Images/fin2.avif"
              alt="Card image cap"
            />
            <div class="card-body">
                <p>By Mahesh Parikh</p>
              <p class="card-text"> <b>
                Masterclass on planning of your personal finance in 7 steps!
            </b> 
            </p>
              <i class="fa-solid fa-star" style={{color: "brown"}}></i>
              <span>4.8</span>
              <a href="#" target="_blank" rel="noopener noreferrer" class="details-link">View Details</a>
            </div>
            <Button>Buy Now</Button>

          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <img
              className="card-img-top"
              src="Images/fin3.avif"
              alt="Card image cap"
            />
            <div class="card-body">
                <p>By Rohan Kohli</p>
              <p class="card-text"><b>
                Ultimate Workshop on how to investing and all the statics!</b>
              </p>
              <i class="fa-solid fa-star" style={{color: 'brown'}}></i>
              <span>4.8</span>
              <a href="#" target="_blank" rel="noopener noreferrer" className="details-link">View Details</a>
            </div>
            <Button>Buy Now</Button>

            
          </div>
        </div>
      </div>
    </div> */}
    
    <div className="container">
      <h1 align="center">Choose The Plan That Is Right For You
      </h1>
      <div className="row">
        <div className="col-md-4 mb-3 mb-sm-0">
          <div className="card shadow p-3 mb-5 bg-white rounded border border-2 border-primary-subtle rounded" height="10rem">
            <div className="card-body ">
              <h5 className="card-title">Monthly</h5>
              <span>Per Month</span>
              <h2 className="mt-3" style={{color: 'green'}}><b>₹2499 / Month
              </b></h2>
              <p class="card-text">Pro + Social + 1 Webinar

              </p>
              <a href="#" onClick={handleSubscribe} className="btn" style={{backgroundColor: 'orange'}}>Subscribe</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3 mb-5 bg-white rounded border border-2  border-warning rounded">
            <div class="card-body">
              <h5 class="card-title">Yearly</h5>
              <span>Popular</span>
              <h2 class="mt-3" style={{color: 'green'}}><b>₹1999 / Month
              </b></h2>
              <p class="card-text">Pro + Social + Unlimited Webinars + Unlimited 999 Courses + 20% off on Wealth Wave Courses</p>
              <a href="#" onClick={handleSubscribe} class="btn" style={{backgroundColor: 'orange'}}>Subscribe</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow p-3 mb-5 bg-white rounded border border-2  border-success rounded">
            <div class="card-body">
              <h5 class="card-title">3 Years</h5>
              <span>Best Deal</span>
              <h2 class="mt-3" style={{color: 'green'}}><b>₹1667 / Month
              </b></h2>
              <p class="card-text">Pro + Social + Unlimited Webinars + Unlimited 999 Courses + 20% off on Wealth Wave Courses</p>
              <a href="#" onClick={handleSubscribe} class="btn" style={{backgroundColor: 'orange'}}>Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>


  
    <Footer />
    </div>
    </>
     
    )
}

export default Store
