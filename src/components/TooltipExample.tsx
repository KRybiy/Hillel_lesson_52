import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TooltipExample: React.FC = () => {
  const PLACES: Array<'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'> = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

  return (
    <div className="tooltip-container">
      <h1>React Tooltip Example</h1>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello world!"
        data-tooltip-place="top"
        className="tooltip-item"
      >
        ◕‿‿◕
      </a>

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello to you too!"
        className="tooltip-item"
      >
        ◕‿‿◕
      </a>
      <Tooltip id="my-tooltip" />

      <a id="clickable" className="tooltip-item">◕‿‿◕</a>
      <Tooltip anchorSelect="#clickable" clickable>
        <button>You can click me!</button>
      </Tooltip>

      <a
        data-tooltip-id="tooltip-anchor-hide"
        data-tooltip-content="It will take me 1000ms to close"
        data-tooltip-delay-hide={1000}
        className="tooltip-item"
      >
        ◕‿‿◕
      </a>
      <Tooltip id="tooltip-anchor-hide" />
  
      <a id="my-tooltip-anchor" className="tooltip-item">◕‿‿◕</a>
      {PLACES.map(place => (
        <Tooltip
          key={place}
          anchorSelect="#my-tooltip-anchor"
          content={`Hello world from the ${place}!`}
          place={place}
        />
      ))}
    </div>
  );
};

export default TooltipExample;

