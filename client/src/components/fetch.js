import { useState, useEffect } from "react"
const useFetch = url => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource")
        }

        return res.json()
      })
      .then(data => {
        setData(data)
        setPending(false)
        setError(null)
      })
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("error")
        } else {
          setPending(false)
          setError(err.message)
        }
      })
    return () => abortCont.abort()
  }, [url])
  return { data, pending, error }
}
export default useFetch
