function Tesmonials() {
    return (
        <div>
            <section id="testimonials">
      <h1 class="pt-5 text-dark"><b>Testimonials</b></h1>
      <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
      >
   
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2>
              It was an very amazing experience for me. The mentors are really
              great. I learned new things here.
            </h2>
            <img
              class="testimonials-img"
              src="Images/3.jpg"
              alt="dog-profile"
            />
            <em>Shubham, Rajkot</em>
          </div>
          <div class="carousel-item">
            <h2 class="testimonial-text">
              It was an very amazing experience for me. The mentors are really
              great. I learned new things here.
            </h2>
            <img
              class="testimonials-img"
              src="Images/1.jpg"
              alt="lady-profile"
            />
            <em>Nitish, Delhi</em>
          </div>
          <div class="carousel-item">
            <h2 class="testimonial-text">
              It was an very amazing experience for me. The mentors are really
              great. I learned new things here.
            </h2>
            <img
              class="testimonials-img"
              src="Images/2.jpg"
              alt="lady-profile"
            />
            <em>Aanand, Ahmedabad</em>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

        </div>
    )
}

export default Tesmonials
