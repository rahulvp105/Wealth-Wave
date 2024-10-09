function Footer() {
    return (
        <div>
             <div class="">
      <footer class="py-5" id="footer">
        <div class="row">
          <div class="col-md-3">
            <img src="Images/logo (2).png" class="logo" alt="" srcset="" />
          </div>
          <div class="col-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color: "#6c757d"}}>Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>About</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>Media</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>Ideators</a></li>
            </ul>
          </div>
    
          <div class="col-md-3">
            <h5>Contact</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>Timings: 10 am to 8 pm</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>+ 12334455666</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>+ 12334455666</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>ww@gmail.com</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style={{color: "#6c757d"}}>Ahmedabad, Gujarat</a></li>
            </ul>
          </div>
    
          <div class="col-md-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
    
       
        </div>
    
        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2024 Wealth Wave. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-facebook" style={{color: "lightskyblue"}}></i></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-linkedin" style={{color: "lightskyblue"}}></i></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-twitter" style={{color: "lightskyblue"}}></i></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-instagram" style={{color: "orange"}}></i></a></li>

          </ul>
        </div>
      </footer>
    </div>
        </div>
    )
}

export default Footer
