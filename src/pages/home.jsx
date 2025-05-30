import Footer from "../component/footer";
import Header from "../component/header";
import Modal from "../component/modal";

import "../sass/pages/home.scss";

export default function Home() {
  return (
    <div>
      <main className="h-100 w-100 bg-light">
        <Header />


        {/* Contenu du haut de la page */}
        <div className="card text-bg-dark rounded-0" style={{ height: "70vh" }}>
          <img
            src="/img/hero-bg.jpg"
            className="card-img rounded-0 h-100 object-fit-cover"
            alt="une personne qui travaille sur son ordinateur"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="card-title">Bonjour, je suis John Doe</h1>
            <h2 className="card-text">Développeur web full stack</h2>
            <button
              className="btn btn-danger mt-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              En savoir plus
            </button>
          </div>
        </div>


        {/* Contenu de la page Article - A propos */}
        <div
          className="cardArticle card p-4 m-4 shadow-sm d-md-flex flex-md-row justify-content-md-center  p-md-0  mx-auto"
          style={{
            boxShadow: "8px 0 12px -6px rgba(108, 117, 125, 0.3)",
            border: "1px solid #dee2e6",
          }}
        >
          <article
            className="articleSection d-flex flex-column align-items-start 
                                d-md-flex flex-md-column align-items-md-center col-md-6 mx-auto 
            "
          >
            <h3 className="card-title border-bottom border-primary border-3 w-100 pb-3 mt-3 text-start fw-bold  ">
              A propos
            </h3>
            <img
              src="/img/john-doe-about.jpg"
              className="card-img-top pt-4 img-fluid "
              alt="un homme pensif sur son bureau de travail"
            />
            <p className="text-start mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              odio eveniet, temporibus quisquam magni dolorum accusantium
              nostrum consectetur dignissimos.
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              odio eveniet, temporibus quisquam magni dolorum accusantium
              nostrum consectetur dignissimos.
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              odio eveniet, temporibus quisquam magni dolorum accusantium
              nostrum consectetur dignissimos.
            </p>
          </article>


          {/* Contenu de la page Article - Mes compétences */}
          <section
            className="articleSection d-flex flex-column align-items-start pb-4 
                                d-md-flex flex-md-column align-items-md-center col-md-6 mx-auto 
            "
          >
            <h3 className="card-title border-bottom border-primary border-3 w-100 pb-3 mt-3 text-start fw-bold">
              Mes compétences
            </h3>

            {/* HTML5 */}
            <div className="w-100 mb-3 pt-5 pt-md-3">
              <div className="d-flex justify-content-between">
                <span className="textProgress">HTML5 90%</span>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* CSS3*/}
            <div className="w-100 mb-3">
              <div className="d-flex justify-content-between">
                <span>CSS3 80%</span>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            {/* JAVASCRIPT */}
            <div className="w-100 mb-3">
              <div className="d-flex justify-content-between">
                <span>JAVASCRIPT 70%</span>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/* PHP */}
            <div className="w-100 mb-3">
              <div className="d-flex justify-content-between">
                <span>PHP 60%</span>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            {/* REACT */}
            <div className="w-100 mb-3">
              <div className="d-flex justify-content-between">
                <span>REACT 50% </span>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Default example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-default"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
      <Modal />
    </div>
  );
}
