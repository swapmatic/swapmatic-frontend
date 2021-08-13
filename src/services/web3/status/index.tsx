import { useState, createContext, useContext, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

export type IStatus =
  | 'connected'
  | 'connecting'
  | 'wrongnetwork'
  | 'notconnected'

interface StatusContextValue {
  status: IStatus
  setStatus: (data: IStatus) => void
  attemptConnect: boolean
  setAttemptConnect: (data: boolean) => void
}

interface Props {
  children: React.ReactNode
}

const statusInitial: StatusContextValue = {
  status: 'notconnected',
  setStatus: data => {},
  attemptConnect: false,
  setAttemptConnect: data => {}
}

const StatusContext = createContext<StatusContextValue>(statusInitial)

export default function StatusProvider({ children }: Props) {
  const [status, setStatus] = useState<IStatus>('notconnected')
  const [attemptConnect, setAttemptConnect] = useState<boolean>(false)
  const { active, account, chainId } = useWeb3React()

  useEffect(() => {
    if (chainId === 137 && active && account) {
      setStatus('connected')
    } else if (!active && attemptConnect) {
      setStatus('connecting')
    } else if (chainId !== 137 && active) {
      setStatus('wrongnetwork')
    } else if (!active) {
      setStatus('notconnected')
    }
  }, [active, account, attemptConnect, chainId])

  return (
    <StatusContext.Provider
      value={{ status, setStatus, attemptConnect, setAttemptConnect }}
    >
      {children}
    </StatusContext.Provider>
  )
}

export function useStatus() {
  const context = useContext(StatusContext)
  const { status, setStatus, attemptConnect, setAttemptConnect } = context
  return { status, setStatus, attemptConnect, setAttemptConnect }
}
