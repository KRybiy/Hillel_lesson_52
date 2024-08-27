import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const timeout = 20_000;
const promptBeforeIdle = 10_000;

export default function IdleTimer() {
  const [state, setState] = useState<string>('Active')
  const [count, setCount] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const onIdle = () => {
    setState('Idle')
    setOpen(false)
  }

  const onActive = () => {
    setState('Active')
    setOpen(false)
  }

  const onPrompt = () => {
    setState('Prompted')
    setOpen(true)
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [getRemainingTime])


  const handleStillHere = () => {
    activate()
  }

  const timeTillPrompt = Math.max(remaining - promptBeforeIdle/1000, 0)
  const seconds: "seconds" | "second" = timeTillPrompt >1 ? "seconds" : "second"

  return (
    <>
      <h1>React Idle Timer</h1>
      <h2>useIdleTimer</h2>
      <br />
      <p>Current State: {state}</p>
      <p>Action Events: {count}</p>
      {timeTillPrompt > 0 && 
        (<p>{remaining} {seconds} remaining before prompt</p>)}
      <div className='modal' style={{ display: open ? 'flex' : 'none' }}>
        <h3>Are you still here?</h3>
        <p>Logging out in {remaining} {seconds}</p>
        <button onClick={handleStillHere}>Yes</button>
      </div>

    </>
  )
}
