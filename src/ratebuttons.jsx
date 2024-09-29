
const rate=["1","2","3","4","5"]
// eslint-disable-next-line react/prop-types
const RateButton=({setNewt, newt})=>{
   
//    const Addvalue=()=>{
//     console.log()

//    }
// const mil = newt
   
    return<>
    <div style={{marginBottom:"20px"}}>
    {rate.map((tem)=>(
        <button  key={tem.id} className={`rbtn ${
            newt==tem && "newrbtn"
        }`} 
        onClick={()=>{setNewt(tem)}}>{tem}</button>
    ))}
    
    </div>
    </>
}
export default RateButton