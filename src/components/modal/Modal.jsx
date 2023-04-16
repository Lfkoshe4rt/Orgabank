const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">Modal title</h2>
          <button className="modal__close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary">Aceptar</button>
          <button className="btn btn--danger">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
