import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App () {
  const [number, setNumber]= useState(1)
  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [description, setDescription] = useState([])
  
  const getStoreData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${number}`)
    setTitle(response.data.title)
    setImage(response.data.image)
    setDescription(response.data.description)
    console.log(response);
  }
  getStoreData()
  return (
    <>
    <main className='eachItem'>
      <select value={number} onChange={e => (setNumber(e.target.value))}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
       <section className='section'>
       <div className='header'>
       <h2> Product {number} is listed</h2>
        <h1>{title}</h1>
       </div>
      <div className='product_container'>
        <img src={image} alt='' className='itemImage'/>
        <p>{description}</p>
      </div>
       </section>
    </main>
        
    </>
  )
}

export default App
