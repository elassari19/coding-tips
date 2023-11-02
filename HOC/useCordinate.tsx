import { useLayoutEffect, useState } from "react"

const useCordinate = () => {
  const [cordinate, setCordinate] = useState([0, 0])

  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setCordinate([p.coords.latitude, p.coords.longitude])
    })
  }, [])

  return cordinate
}

export default useCordinate
