// https://bobbyhadz.com/blog/react-scroll-to-bottom

import React, { useRef } from "react"

interface Props {
  dependencies: {
    text: string;
    username: string;
  }[]
}

const useScrollToBottom = ({ dependencies }: Props) => {
  const bottomRef = useRef(null);

  React.useEffect(() => {
    // @ts-ignore
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [dependencies])

  return { bottomRef }
}

export default useScrollToBottom
