import { NavLink } from "react-router-dom"

function CTA() {
    return (
        <>
            <section id="enroll">
      <h1 align="center" class="text-dark"><b>Wealth Wave Courses</b></h1>
      <div class="row mt-5">
        <div class="col-md-6">

          <h1>"All the knowledge you need at one place, go and explore!"</h1>
          <p>Expand your knowledge with our beginner to advanced courses on financial markets.
          </p>
        <NavLink to="store"> <button type="button" class="btn btn-success btn-lg download-button">
            Enroll Now
          </button></NavLink>
        </div>
        <div class="col-md-6">
          <img src="Images/undraw_Designer_re_5v95.png" width="70%" alt="" srcset="" />
        </div>
      </div>
    </section>

   
    </>
    )
}

export default CTA
