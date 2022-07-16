import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { hourSelector, minuteState } from './atoms'
import './App.css'

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  const hours = useRecoilValue(hourSelector)
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }
  return (
    <div className="App">
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  )
}

export default App
