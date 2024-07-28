import { useState } from "react";
// 初期値
const newTasks = ["店予約する", "卵買う", "郵便出す"];

const Example = () => {
  const [input, setInput] = useState("");
  // タスクのstate
  const [newTask, setnewTask] = useState(newTasks);
  const addTask = () => {
    const todo = [...newTask, input];
    setnewTask(todo);
    setInput("");
  };
  return (
    <>
      <h2>Reminder</h2>
      {newTask.map((task) => {
        return (
          <div>
            <button>完了</button>
            {task}
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addTask}>追加</button>
    </>
  );
};

export default Example;
