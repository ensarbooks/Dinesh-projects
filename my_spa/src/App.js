import './App.css'
import {useState, useEffect } from 'react'
import ProductCard from "./product-card";
function App(){
  let [products,updateproducts]=useState([])

  useEffect(
  //  async ()=>{
  //     let res = await fetch('https://fakestoreapi.com/products')
  //     console.log(res)
  //   }

  ()=>{
    getProducts()
  },[]
  )

  async function getProducts(){
    let res= await fetch('https://fakestoreapi.com/products');
    console.log(res)

    let productlist = await res.json();
    updateproducts(productlist)
    console.log(productlist)
  }
  if(products.length===0){
    return(
      <>
      <h1>Fetching data....</h1>
      </>
    )
  }
  return(
    <div className="product-list">
      {
        products.map((p)=><ProductCard {...p} key={p.id}></ProductCard>)
      }
    </div>
    
  )
}

export default App