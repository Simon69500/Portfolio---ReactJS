import Footer from "../component/footer"
import Header from "../component/header"

export default function Home() {
return(
    <div>
    <Header/>
    <main>
        <div className="card1">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button>En savoir plus</button>
        </div>
        <article>
            <section>
                <h3>A propos</h3>
                <p>
                    orem ipsum dolor sit, amet consectetur adipisicing elit. Illo odio eveniet, 
                    temporibus quisquam magni dolorum accusantium nostrum consectetur dignissimos sint odit possimus sunt deleniti, 
                    saepe veritatis suscipit. Delectus, quia sequi?
                </p>
            </section>

            <section>
                <h3>Mes compétences</h3>
                <div>
                    <p>HTML5</p>
                </div>
                  <div>
                    <p>CSS3</p>
                </div>
                  <div>
                    <p>JAVASCRIPT</p>
                </div>
                  <div>
                    <p>PHP</p>
                </div>
                  <div>
                    <p>REACT</p>
                </div>
            </section>
        </article>
    </main>
    <Footer/>
    </div>
)
};