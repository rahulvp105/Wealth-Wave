import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Services() {
  return (
    <div>
      <section id="services">
        <h1 align="center" class="mt-5">
          Our Services
        </h1>
        <div class="row">
          <div class="col-lg-3">
            <div class="card  border-2 border-warning rounded service-card">
              <div class="card-body">
                <h5 class="card-title">Insurance Plans</h5>
                <p class="card-text">
                  Get bike, car and health insurance plans, all in one place.
                </p>
                <img
                  src="Images/774_generated.jpg"
                  class="ins-img"
                  align="center"
                  height="60%"
                  width="60%"
                  alt=""
                  srcset=""
                />
                <a href="#" class="btn btn-success">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="card border-2 border-warning rounded"
              style={{width: "18rem"}}
            >
              <div class="card-body">
                <h5 class="card-title">Mutual Funds</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src="Images/vecteezy_businessman-raise-the-budget-the-concept-of-increasing_7278452.jpg"
                  align="center"
                  height="100%"
                  width="100%"
                  alt=""
                  srcset=""
                />
                <a href="#" class="btn btn-success">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="card border-2 border-warning rounded"
              style={{width: "18rem"}}
            >
              <div class="card-body">
                <h5 class="card-title">Taxation</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src="Images/tax-removebg-preview.png"
                  align="center"
                  height="90%"
                  width="90%"
                  alt=""
                  srcset=""
                />

                <a href="#" class="btn btn-success">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="card border-2 border-warning rounded"
              style={{width: "18rem"}}
            >
              <div class="card-body">
                <h5 class="card-title">Personal Finance</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src="Images/personal-fin-removebg-preview.png"
                  align="center"
                  height="90%"
                  width="90%"
                  alt=""
                  srcset=""
                />
                <a href="#" class="btn btn-success">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
