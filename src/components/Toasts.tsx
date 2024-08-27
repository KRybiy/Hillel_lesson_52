import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./CustomToast";
import ToastPromise from "./ToastPromise";

export const Toasts = () => {
  const notify = () => {
    toast("Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifySuccess = () => {
    toast.success("Success", {
      position: "top-right",
    });
  };

  const notifyError = () => {
    toast.error("Error", {
      position: "bottom-center",
      autoClose: false,
    });
  };

  const notifyWarning = () => {
    toast.warn("Warning!", {
      position: "bottom-right",
    });
  };

  const notifyInfo = () => {
    toast.info("Info", {
      position: "top-left",
    });
  };

  return (
    <div className="toasts-container">
      <button onClick={notify}>Show Toast</button>
      <button onClick={notifySuccess}>Success</button>
      <button onClick={notifyError}>Error</button>
      <button onClick={notifyWarning}>Warning</button>
      <button onClick={notifyInfo}>Info</button>
      <CustomToast />
      <ToastPromise />
      <ToastContainer />
    </div>
  );
};
