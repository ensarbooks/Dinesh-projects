



// function Table(props){
//     return(
//         <>
//            <table className="table m-3">
//             <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>PRICE</th>
//                 <th>CATEGORY</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {
//                     // props.products.map((data)=>(
//                         props.products.map((data)=>(
//                         <tr key={data.id} >
//                             <td>{data.id}</td>
//                             <td>{data.name}</td>
//                             <td>{data.price}</td>
//                             <td>{data.category}</td>
//                             <td>
//                                 <button className="btn btn-primary m-1">Edit</button>
//                                 <button className="btn btn-danger">Delete</button>
//                             </td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
            
//           </table>
          
//         </>
//     )
// }
// export default Table




function Table(props) {
    return (
      <>
        {props.products && props.products.length > 0 ? (
          <table className="table m-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>{data.category}</td>
                  <td>
                    <button className="btn btn-primary m-1" onClick={()=>{
                      props.edit(data)
                    }}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>{
                        props.delete(data.id)
                    }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
            <p>No products available</p>
        )}
      </>
    );
  }
  
  export default Table;
  