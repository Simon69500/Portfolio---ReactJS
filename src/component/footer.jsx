import '../sass/component/footer.scss';

import { Link } from "react-router-dom";


export default function Footer() {
    return(
       <div className="contenairFooter bg-dark text-white p-5
            d-flex flex-column align-items-start
             flex-md-row align-items-md-center justify-content-around
       ">

        <section className="cardContact p-md-0
                  d-flex flex-column align-items-start                                  
        ">
            <h3 className="contactTitle fs-5 fw-normal m-0 pb-2 px-md-0">Jonh Doe</h3>
            <address className="fs-6 fw-normal m-0">40 rue Laure Diebold</address>
            <address className="fs-6 fw-normal m-0">69009 Lyon, France</address>
            <p className="fs-6 fw-normal m-0">10 20 30 40 50</p>
            <p className="fs-6 fw-normal m-0">john.doe@gmail.com</p>

            <div className="cardIcon d-flex align-items-start justify-content-between pt-3">
                <a href="https://github.com/" >
                    <svg className='icon text-secondary' xmlns="http://www.w3.org/2000/svg"  width="24" height="24"  viewBox="0 0 128 128" id="github">
                        <g fill="currentColor">
                        <path fill-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clip-rule="evenodd"></path>
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                        </g>
                    </svg>
                </a>

                <svg className='icon text-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" id="twitter">
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path>
                </svg>

                <svg className='icon text-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" version="1" id="linkedin">
                    <path d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475 0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444 0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718-41.704 0-66.562 28.078-77.476 55.202-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z"></path>
                </svg>


            </div>
        </section>

        <section className="cardLink pt-4 p-md-0
                 d-flex flex-column align-items-start align-self-start
     
        ">
            <h3 className="linkTitle fs-5 fw-normal m-0 pb-2 px-md-0">Liens utiles</h3>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/" target="_blank" rel="nofollow noreferrer noopener">Accueil</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Service" target="_blank" rel="nofollow noreferrer noopener">Services</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Portfolio</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Contact" target="_blank" rel="nofollow noreferrer noopener">Me Contacter</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Mentions" target="_blank" rel="nofollow noreferrer noopener">Mentions Légales</Link>
        </section>

        <section className="cardPortfolio pt-4 p-md-0
                 d-flex flex-column align-items-start align-self-start

        ">
            <h3 className="portfolioTitle fs-5 fw-normal m-0 pb-2 px-md-0">Mes dernières réalisations</h3>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Fresh Food</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Restaurant Akira</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Espace bien-être</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">SEO</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Création d'une APi</Link>
                <Link className='footerText text-white text-decoration-none fs-6 fw-normal m-0' to="/Portfolio" target="_blank" rel="nofollow noreferrer noopener">Maquette d'un site</Link>
        </section>
       </div>
    )
};

