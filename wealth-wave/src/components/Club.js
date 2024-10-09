
import {NavLink} from "react-router-dom"
function Club() {
    return (
        <div>
             <section id="club">
      <img
        class="com-img"
        src="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/652ba004cd21e84660cb7c31_Group%201160444832.svg"
        alt=""
      />
      <div class="mt-5">
        <h1 align="center">Join The Top 1% Community!</h1>
        <img
          class="underline"
          src="https://assets.website-files.com/624194472db3153002097068/624835960d042904335bf96e_Vector%20115.svg"
          alt=""
        />
        <p align="center" class="com-desc">
          Join a thriving community of like-minded individuals. Learn, grow and
          connect <br />on a daily basis.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h1 align="center" class="mt-5"><b>Wealth Wave Club</b></h1>
          <p class="mt-4 p-2" align="center">India's fastest growing Finance Community. Join over 20,000+ retail investors and more than 
            80 experts that will help you investing in the market. 

          </p>
          <div align="center">
            <NavLink to="club">
            <a href="courses.html"> <button type="button" style={{margin: "5px"}} class="btn btn-success">Join Club</button></a>
            </NavLink>
          <button type="button" class="btn btn-outline-success">Request Callback</button>
        </div>
        </div>
        <div class="col-lg-6">
          <img
            src="Images/pexels-kampus-production-8204386.jpg"
            class="cl-img"
            alt=""
          />
        </div>
      </div>
    </section>

        </div>
    )
}

export default Club
