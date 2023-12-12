import Table from './Table'
import Form from './Form'
import {getData,deleteData,postData} from './api'
import {useEffect,useState} from 'react'



function App(){

  const [products,setProducts]=useState([])
  const [openForm,setopenForm] = useState(false)
  const[initialForm,setForm]=useState({
    name:'',price:'',category:''
  })

  useEffect(
    ()=>{
      getProducts()
    },[]
  )

  let getProducts = async ()=>{
    let res = await getData();
    setProducts(res.data)
    
  }

  let deleteProduct = async (id)=>{
     await deleteData(id);
    getProducts();
  }

  let addProduct = async (data)=>{
    await deleteData(data);
   getProducts();
   setopenForm(false)
 }

 let editProduct = async (data)=>{
  setForm(data)
  setopenForm(true);
 }

  let showForm=()=>{
    setopenForm(false)
    
  }

  let closeForm=()=>{
    setopenForm(false)
  }
  return(
    <>
      <div className="wrapper m-5 w-50">
        <h2 className="text-primary">Crud Operations</h2> 
        <button className="btn btn-primary" onClick={()=>{
          showForm()
        }}>Add Products</button>
        <Table products={products} delete={deleteProduct} edit={editProduct}/>
        {
          openForm && <Form close={closeForm} data={initialForm} add={addProduct} ></Form>
        }
        
      </div>
      
    </>
  )
}

export default App