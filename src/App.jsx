import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

let API = 'https://fakestoreapi.com/products'

function App () {
  const [number, setNumber]= useState(1)
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
      <select value={number}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <section>
      <img src={image} alt='' className='itemImage'/>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
    </main>
        
    </>
  )
}

export default App
