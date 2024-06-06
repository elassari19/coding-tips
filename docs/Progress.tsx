import React form "react";
import { Progress } from "@nextui-org/progress";
import useAnimatedCounter form "@/hooks/ProgreeHandler"

const ProgreeHandler = ({step, index}: {step: number, index: number}) => {
  const progressUp = useAnimatedCounter(100, 0, 5)
  const progressDo = useAnimatedCounter(0, 100, 5)

  return (
    <div>
      <Progress value={step > index+1 ? progressUp : progressDo} className='h-[0.3rem] w-12 bg-secondary rounded-full mr-4' />
    </div>
  )
}

export default ProgreeHandler
