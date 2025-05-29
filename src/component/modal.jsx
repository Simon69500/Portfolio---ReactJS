import ContentModal from "./contentModal";
import "../sass/component/modal.scss";

export default function Modal() {
  return (
    <>
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark text-white m-4 rounded-3 border border-1 border-secondary  mx-auto">
            <div className="modal-header border-secondary">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Mon profil GitHub
              </h1>
              <button
                type="button"
                className="btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ContentModal />
            </div>
            <div className="modal-footer border-secondary">
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
