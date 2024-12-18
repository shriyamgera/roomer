import { useEffect, useRef, useState } from "react"

const useThrottle =(triggerValue, delay) =>{
    const [throttleValue, setthrottleValue] = useState(triggerValue)
    const lastExecuted = useRef(Date.now())

    useEffect(() => {
      const timeout = setTimeout(() => {
        const now = Date.now()
        const timeElapsed = now-lastExecuted.current

        if(timeElapsed>=delay){
            setthrottleValue(triggerValue)
            lastExecuted.current = now
        }
        
      }, delay -(Date.now()-lastExecuted.current))
    
      return () => {
        clearTimeout(timeout)
      }
    }, [triggerValue, delay])

    return throttleValue
    
}

export default useThrottle