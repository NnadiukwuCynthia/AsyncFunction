import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

let API = 'https://fakestoreapi.com/products'

function App () {
  const [title, setTitle] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`${API}/1`)
    console.log(response);
    setTitle(response.data.title)
  }
  fetchData()

},[])
  return (
    <>
      <p>{title}</p>
        
    </>
  )
}

export default App
