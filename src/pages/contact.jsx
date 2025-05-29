import '../sass/pages/contact.scss';

import Footer from "../component/footer"
import Header from "../component/header"

export default function Contact() {
return(
    <div>
    <Header/>
                    {/* Titre Principal de la page */}
    <main className='bg-light border-0 d-flex flex-column  justify-content-between m-0 pb-5 p-1'>
                <h1 className='cardTitle card-title fs-2 pt-3'>Contact</h1>
                <p className='fs-6'>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                <div className='border-bottom border-primary border-4 w-25 mx-auto mb-5 mt-2'></div>

            <section className='card border-0 w-75 p-0 m-0 p-md-2 flex-md-row justify-content-md-center mx-auto'>

                <section className="d-flex flex-column align-items-start col-md-6 px-md-2">
                    <h2 className="card-title border-bottom border-primary border-3 w-100 pb-3 mt-3 text-start fw-bold">Formulaire de contact</h2>

                    <form className=' d-flex flex-column align-items-start w-100 p-3 mt-4'>
                        <div className="mb-3 w-100">
                            <input type="text" class="form-control" id="name" placeholder="Votre nom"/>
                        </div>
                        <div className="mb-3 w-100">
                            <input type="email" class="form-control" id="email" placeholder="Votre adresse email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3 w-100">
                            <input type="tel" class="form-control" id="tel" placeholder="Votre numéro de téléphone"/>
                        </div>
                        <div className="mb-3 w-100">
                            <input type="text" class="form-control" id="sujet" placeholder="Sujet"/>
                        </div>
                        <div className="mb-3 p-0 w-100 form-check">
                            <textarea className="form-control" placeholder="Votre message" id="floatingTextarea" style={{height: '400px'}}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mx-auto">Envoyer</button>
                        </form>
                </section>


                <section className="col-md-6 px-md-2">
                    <h2 className="card-title border-bottom border-primary border-3 w-100 pb-3 mt-3 text-start fw-bold">Mes cordonnées</h2>
                    <div className="d-flex flex-column align-items-start" >
                        <h3 className="contactTitle fs-5 fw-bold m-0 mt-5 pb-2 px-md-0">Jonh Doe</h3>

                        <div className='d-flex flex-row align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                            </svg>
                            <address className="fs-6 fw-normal m-0 px-1">40 rue Laure Diebold</address>
                        </div>

                        <div className='d-flex flex-row align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <address className="fs-6 fw-normal m-0 px-1">69009 Lyon, France</address>
                        </div >

                        <div className='d-flex flex-row align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <p className="fs-6 fw-normal m-0 px-1">10 20 30 40 50</p>
                        </div>

                        <div className='d-flex flex-row align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg> 
                            <p className="fs-6 fw-normal m-0 px-1">john.doe@gmail.com</p>
                        </div>
                    </div>
                    <div className="ratio ratio-1x1 my-3 mx-2">
                    <iframe
                        title="Carte Google Maps du 40 Rue Laure Diebold, Lyon"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626969474785!2d4.794107990939151!3d45.77866563784522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1748464146396!5m2!1sfr!2sfr"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </section>
            </section>
            </main>

    <Footer/>
    </div>
)
};