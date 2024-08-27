import { useCountUp } from 'react-countup';
import { useRef } from 'react';


const CountUpExample = () => {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  return (
    <div className="countup-container">
      <h1>React CountUp Example</h1>
      <div className="countup-wrapper">
        <div>
          <div ref={countUpRef} />
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
      </div>
    </div>
  );
};

export default CountUpExample;
