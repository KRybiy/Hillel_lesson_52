import { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "@react-spring/web";

Modal.setAppElement("#root");

const ModalSpring = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const animation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Animated Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            padding: 0,
            border: "none",
            background: "transparent",
          },
        }}
        contentLabel="Animated Modal"
      >
        <animated.div style={animation} className="animated-modal-content">
          <div style={{ backgroundColor: "#282c34", padding: "20px", borderRadius: "10px", color: "white" }}>
            <h2>Animated Modal</h2>
            <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
          </div>
        </animated.div>
      </Modal>
    </div>
  );
};

export default ModalSpring;
