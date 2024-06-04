 'use client'

 import {useState} from "react"

function Card({text='Nothing to say'}){
  return(
    <div className="border rounded-md boarder-gray-600 p-4">
      Card Component {text}
    </div>
  );
}

export default function Home() {

  const [label,setLabel] = useState('Show')

  const name= 'Ram' 
  const handleClick = (e) => {
    e.preventDefault()
    //alert('Hi')  
    setLabel(label=='Show'?'Hide':'Show')
}
  return ( 
  
   <div className="p-20 space-y-4">
     <div>Hello, {name} </div>
     <Card text="Hi Ram..." />
     <Card text={"Its my JS Code"}/>
     <Card /> 
     <button onClick={handleClick}>{label}</button> 
   </div>
   
  );
}
