import { useEffect } from "react"
import { List } from "antd"
import TodoDelete from "./TodoDelete.jsx"


export default function TodoList ( {loading, itemList, setItemList, setLoading} ) {

  useEffect(() => {
    fetch("https://much-todo-api-iv.web.app/items")
    .then(resp => resp.json())
    .then(setItemList)
    .catch(alert)
    .finally(() => setLoading(false))
  }, [setItemList, setLoading])
  // console.log(itemList)
  // console.log(loading)

  return (
    <section>
      <List
        bordered 
        dataSource={itemList}
        loading={loading}
        size="large"
        renderItem={(task) => (
          <List.Item className={(task.done) && "done"}>
            {task.item}
            <TodoDelete 
              taskId = {task.id}
              setItemList={setItemList}
            />
          </List.Item>
        )}
      />
    </section>
  )
}
