import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastPromise = () => {
  const handleClick = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000);
    });

    toast.promise(
      myPromise,
      {
        pending: "Fetching data...",
        success: "Data fetched successfully 👌",
        error: "Error fetching data 🤯",
      },
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data (Promises)</button>
      <ToastContainer />
    </div>
  );
};

export default ToastPromise;