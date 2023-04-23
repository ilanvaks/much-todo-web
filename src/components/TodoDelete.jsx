import { useState } from "react"
import { Button } from "antd"



export default function TodoDelete(taskId, setItemList, setLoading) {
  const [deleteCount, setDeleteCount] = useState(0)
  
  const handleDelete = () => {
    fetch(`https://much-todo-api-iv.web.app/items/${taskId.taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(setItemList)
      .catch(console.error)
      .finally(() => setLoading(false))
     
      setDeleteCount(count => count +1)
  }

  

  return (
    <>
     <Button onClick={handleDelete}>
        <p>Delete</p>
      </Button>
     
    </>
  )
}

