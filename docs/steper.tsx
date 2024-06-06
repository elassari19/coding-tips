import React from 'react'
import useAnimatedCounter from "@/hooks/useAnimatedCounter" 

const Steper = () => {
  const [step, setStep] = React.useState(0)
  const counter = useAnimatedCounter(100, 0, 2)
  return (
    <div className='grid grid-cols-12 bg-black p-20'>
      <ButtonGroup className='col-span-full md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4'>
        {
          Array(5).fill(0).map((_, i) => (
            <div key={i} className='flex items-center gap-4 text-3xl'>
              <Button variant='flat' color={step>i?"primary":"secondary"}
                className={`rounded-full border-2 w-12 h-12 transition-all delay-100 ease-linear ${step>i?"border-primary text-primary":"border-secondary text-secondary"}`}
                onClick={() => setStep(i+1)}
              >
                {i + 1}
              </Button>
              {
                i !== 4 && (
                  <ProgreeHandler step={step} index={i} />
                )
              }
            </div>
          ))
        }
      </ButtonGroup>
      <p className='text-white text-3xl col-span-full text-center'>{counter}</p>
    </div>
  )
}

export default Steper
