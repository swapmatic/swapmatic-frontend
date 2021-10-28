// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import { useEffect, useState } from 'react'
import * as Styled from './styles'
import Flip from './Flip'

// Services

// Types

const Count: React.FC = () => {
  const deadlineDate = new Date('2021-11-15T19:00:00Z').getTime()
  const [days, setDays] = useState<number>()
  const [hours, setHours] = useState<number>()
  const [minutes, setMinutes] = useState<number>()
  const [seconds, setSeconds] = useState<number>()

  const getDiference = () => {
    const currentDate = new Date().getTime()
    if (deadlineDate > currentDate) {
      const diference = deadlineDate - currentDate

      setDays(Math.floor(diference / (1000 * 60 * 60 * 24)))
      setHours(
        Math.floor((diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutes(Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diference % (1000 * 60)) / 1000))
    } else {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }
  }

  useEffect(() => {
    setInterval(() => {
      getDiference()
    }, 1000)
  }, [])

  return (
    <Styled.Container>
      <Typography
        as="heading2"
        align="center"
      >{`${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds`}</Typography>
      <Flip timer={seconds} />
    </Styled.Container>
  )
}

export default Count
