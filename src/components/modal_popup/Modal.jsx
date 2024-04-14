import PropTypes from "prop-types";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className=" center fixed left-0 top-0 h-screen w-screen animate-[fade-in_0.5s_ease] bg-black/50 duration-1000 ">
      <main id={id} className="modal relative rounded-xl bg-slate-300 p-5">
        <button
          className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 px-2 text-xl text-white"
          onClick={() => onClose(false)}
        >
          X
        </button>
        <header className="">{header ? header : "Default Header"}</header>
        <main>{body ? body : "Default Body"}</main>
        <footer>{footer ? footer : "Default Footer"}</footer>{" "}
      </main>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
