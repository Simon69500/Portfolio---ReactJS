import ContentModal from "./contentModal";
import '../sass/component/modal.scss';

export default function Modal() {

    return (
        <>
          
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
            </button>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog m-4 rounded-3 border border-1 border-secondary">
            <div className="modal-content bg-dark text-white">
            <div className="modal-header border-secondary">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <ContentModal/>
            </div>
            <div className="modal-footer border-secondary">
                <button type="button" className="btn btn-secondary " data-bs-dismiss="modal" aria-label="Close">Fermer</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};