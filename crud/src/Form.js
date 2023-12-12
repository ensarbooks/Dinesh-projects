import {useState} from 'react'


function Form(props){
    const[product,setProduct]=useState(props.data)

    let changeFormData=(e)=>{
       const{name,value} = e.target;
       setProduct({...product,[name]:value})
       
    }
    return(
        <>
          <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={product.name} onChange={changeFormData} name="name" placeholder="product name"/>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" className="form-control mt-2" value={product.price} onChange={changeFormData} name="price" placeholder="product price"/>
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control mt-2" name="category" value={product.category} onChange={changeFormData}>
                        <option value="-1"></option>
                        <option value={'mobiles'}>mobiles</option>
                        <option value={'laptops'}>laptops</option>
                        <option value={'TV'}>TV'S</option>
                    </select>
                </div>
                <button className="btn btn-primary float-end mt-2 m-1" onClick={(e)=>{
                    e.preventDefault()
                }}>Send</button>
                <button className="btn btn-danger float-end mt-2 m-1" onClick={(e)=>{
                    e.preventDefault();
                    props.close()
                }}>Cancel</button>
            </form>

          </div>
        </>
    )
}
export default Form
