import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import CardUser from './components/CardUser'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=30')
      .then((response) => response.json())
      .then((data) => setLista(data.users))
  }, [])

  return (
    <div className="App">
      <h1 className="title">Usuários</h1>

      <p className="contador">{lista.length} usuários</p>

      <div className="grade">
        {lista.map((user) => (
          <CardUser
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default App
