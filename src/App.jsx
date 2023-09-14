import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

let API = 'https://fakestoreapi.com/products'

function App () {
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [image, setImage] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`${API}/1`)
    console.log(response);
    setTitle(response.data.title)
    setDescription(response.data.description)
    setImage(response.data.image)
  }
  fetchData()

},[])
  return (
    <>
    <main className='eachItem'>
      <img src={image} alt='' className='itemImage'/>
      <h2>{title}</h2>
      <p>{description}</p>
    </main>
        
    </>
  )
}

export default App
