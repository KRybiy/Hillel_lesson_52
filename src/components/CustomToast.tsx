import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CustomToast = () => {
  const notifyCustom = () => {
    toast(<CustomToastContent />, {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="custom-toast-container">
      <button onClick={notifyCustom}>Show Custom Toast</button>
    </div>
  );
};

const CustomToastContent = () => (
  <div className="custom-toast-content">
    <h4>Custom Notification</h4>
    <p>This is a custom-styled toast notification.</p>
  </div>
);

export default CustomToast;
