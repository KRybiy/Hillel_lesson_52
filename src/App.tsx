import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { Toasts } from "./components/Toasts";
import Modals from "./components/Modals";
import TooltipExample from "./components/TooltipExample";
import CountUpExample from "./components/CountUpExample";
import IdleTimer from "./components/IdleTimer";
import SketchExample from "./components/SketchExample";
import DateRangePicker from "./components/DateRangePicker";
import CreditCardForm from "./components/CreditCardForm";

function App() {
  
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", size: "3em" }}>
        <div>
          <h1>React Icons with Individual Customization</h1>
          <FaReact style={{ color: "red" }} />
          <MdBuild />
        </div>
      </IconContext.Provider>
      <Toasts />
      <Modals />
      <SketchExample />
      <TooltipExample />
      <CountUpExample />
      <IdleTimer />
      <DateRangePicker />
      <CreditCardForm />
    </div>
  );
}

export default App;
