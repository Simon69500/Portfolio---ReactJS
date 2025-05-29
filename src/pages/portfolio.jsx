import '../sass/pages/portfolio.scss';

import Footer from "../component/footer"
import Header from "../component/header"

export default function Portfolio() {
return(
    <div>
    <Header/>

     <div className='containerPortfolio'>

            {/* Bannière*/}
            <img
                src="/img/banner.jpg"
                className="card-img rounded-0 h-100 object-fit-cover"
                alt="une personne qui travaille sur son ordinateur"
            />

                {/* Titre Principal de la page */}
                <h1 className='cardTitle card-title fs-2 pt-3'>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className='border-bottom border-primary border-4 w-25 align-content-center mb-5 mt-2 w-50 mx-auto'></div>

            <section className='d-flex flex-column flex-md-row flex-wrap align-items-strech justify-content-between justify-content-md-center m-1 p-1'>

                        {/* Card 1 - Fresh Food */}
                <div className='card d-flex flex-column align-items-center m-3 col-md-3'>
                    <div className=' pb-3'>
                        <img
                            src="/img/portfolio/fresh-food.jpg"
                            className="card-img rounded-0  object-fit-cover"
                            alt="une personne qui travaille sur son ordinateur"
                        />
                        <h2 className='cardTitle card-title'>Fresh Food</h2>
                        <p className='px-3'>
                            Site de vente des produits frais en ligne
                        </p>
                        <button type="button " className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>Site réalisé avec PHP et MySQL</p>
                </div>


                        {/* Card 2 - Restaurant Akira */}
                <div className='card d-flex flex-column align-items-center m-3 col-md-3'>
                    <div className=' pb-3'>
                    <img
                        src="/img/portfolio/restaurant-japonais.jpg"
                        className="card-img rounded-0 object-fit-cover"
                        alt="une personne qui travaille sur son ordinateur"
                    />
                    <h2 className='cardTitle card-title fw-bolder '>Restaurant Akira</h2>
                    <p className='px-3 fw-bold'>
                       Site de vente des produits frais en ligne
                    </p>
                    <button type="button" className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>Site réalisé avec WordPress</p>
                </div>


                        {/* Card 3 - Espace bien-être */}
                <div className='card d-flex flex-column align-items-center justify-content-between m-3 col-md-3'>
                    <div className=' pb-3'>
                    <img
                        src="/img/portfolio/espace-bien-etre.jpg"
                        className="card-img rounded-0 object-fit-cover"
                        alt="une personne qui travaille sur son ordinateur"
                    />
                    <h2 className='cardTitle card-title fw-bolder '>Espace bien-être</h2>
                    <p className='px-3 fw-bold'>
                       Site de bien-être en ligne
                    </p>
                    <button type="button" className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>Site réalisé avec LARAVEL</p>
                </div>


                        {/* Card 4 - SEO */}
                <div className='card d-flex flex-column align-items-center m-3 col-md-3'>
                    <div className=' pb-3'>
                    <img
                        src="/img/portfolio/seo.jpg"
                        className="card-img rounded-0 object-fit-cover"
                        alt="une personne qui travaille sur son ordinateur"
                    />
                    <h2 className='cardTitle card-title fw-bolder '>SEO</h2>
                    <p className='px-3 fw-bold'>
                       Amélioration du référencement d'un site e-commerce
                    </p>
                    <button type="button" className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>Utilisation des outils SEO</p>
                </div>


                        {/* Card 5 - Création d'une API */}
                <div className='card d-flex flex-column align-items-center m-3 col-md-3'>
                    <div className=' pb-3'>
                    <img
                        src="/img/portfolio/coder.jpg"
                        className="card-img rounded-0 object-fit-cover"
                        alt="une personne qui travaille sur son ordinateur"
                    />
                    <h2 className='cardTitle card-title fw-bolder '>Création d'une API</h2>
                    <p className='px-3 fw-bold'>
                       Création d'une API RESTFULL publique
                    </p>
                    <button type="button"className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>PHP - SYMFONY</p>
                </div>


                        {/* Card 6 - Maquette d'un site web */}
                 <div className='card d-flex flex-column align-items-center justify-content-between m-3 col-md-3'>
                    <div className=' pb-3'>
                    <img
                        src="/img/portfolio/screens.jpg"
                        className="card-img rounded-0 object-fit-cover"
                        alt="une personne qui travaille sur son ordinateur"
                    />
                    <h2 className='cardTitle card-title fw-bolder '>Maquette d'un site web</h2>
                    <p className='px-3 fw-bold'>
                       Création du prototype d'un site
                    </p>
                    <button type="button" className="btn btn-sm btn-primary">Voir le site</button>
                    </div>
                    <p className='textBottomCard card d-flex flex-column align-items-center m-0 w-100 rounded-0 p-1 fw-light'>Réaliser avec FIGMA</p>
                </div>
            </section>
        </div>

    <Footer/>
    </div>
)
};