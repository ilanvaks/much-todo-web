import { useState } from "react"
import { Button } from "antd"



export default function TodoDelete({taskId, setItemList, itemList}) {
  
  const handleDelete = () => {
    const LOL = {
      taskId,
      done: true,
      userId: "me"
    }

    fetch(`https://much-todo-api-iv.web.app/items/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(LOL)
    })
      .then(resp => resp.json())
      .then((value) => {
        console.log(itemList)
        setItemList(value)
        console.log(itemList)
        
      })
      .catch(console.error)
     
     
  }

  

  return (
    <>
     <Button onClick={handleDelete}>
        <p>Delete</p>
      </Button>
       
     
    </>
  )
}

