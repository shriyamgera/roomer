import { useEffect, useState } from "react"

const useDebounce =(searchValue, delay)=>{
    const [debouncedValue, setdebouncedValue] = useState(searchValue)

    useEffect(() => {
      let timer = setTimeout(() => {
        setdebouncedValue(searchValue)
      }, delay)
    
      return () => {
        clearTimeout(timer)
      }
    }, [searchValue, delay])

    return debouncedValue
    
}

export default useDebounce