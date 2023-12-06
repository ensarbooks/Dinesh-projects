function User(p){
    
    return(
       <div style={{border:'2px solid grey',width:300, margin:20}}>
        <h1>Id:{p.id}</h1>
        <h2>Age:{p.age}</h2>
        <h2>Place:{p.place}</h2>
       </div>
    )
}

export default User