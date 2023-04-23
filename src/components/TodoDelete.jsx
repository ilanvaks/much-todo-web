import { Button } from "antd"


export default function TodoDelete(taskId, setItemList) {

  const handleDelete = () => {
    fetch(`https://much-todo-api-iv.web.app/items/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(setItemList)
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

