// create your App component here
import {React,useEffect,useState }from "react"; 

function App(){
    const[image,setImage]=useState([])
    const[loading,setLoadng]=useState(true)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then(data=>{
            setImage(data.message)
            setLoadng(false)
        })
    },[]);
    if(loading){
        return<p>Loading...</p>
    }
    return(
        <img src={image} alt='A Random Dog'></img>
    )
        
    

}export default App