import { useLayoutEffect, useState } from "react"

const useCoordinate = () => {
  const [coordinate, setCoordinate] = useState([0, 0])

  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setCoordinate([p.coords.latitude, p.coords.longitude])
    })
  }, [])

  return coordinate
}

export default useCoordinate
