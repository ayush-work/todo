import TodoList from "./components/todoList/TodoList";
import TodoInput from "./components/todoInput/TodoInput";
import { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [text, setText] = useState("");
  const date = new Date();
  const curDate = moment(date).format("MMM Do YY, h:mm a");
  const id = uuidv4();
  const newTodo = {
    text,
    curDate,
    id,
    complete: false,
    edit: editItem,
  };
  const updatedTasks = [newTodo, ...allTasks];

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTasks(updatedTasks);
    setEditItem(false);
    setText("");
  };

  const clearAll = () => {
    setAllTasks([]);
  };
  const handleComplete = (id) => {
    const filteredItems = allTasks.filter((task) => task.id !== id);
    setAllTasks(filteredItems);
  };
  const handleEdit = (id) => {
    const filteredItems = allTasks.filter((task) => task.id !== id);
    const selectedItem = allTasks.find((task) => task.id === id);
    setText(selectedItem.text);
    setEditItem(true);
    setAllTasks(filteredItems);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoInput
        editItem={editItem}
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></TodoInput>
      <TodoList
        allTasks={allTasks}
        clearAll={clearAll}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
      ></TodoList>
      <footer>
        This project is a dummy example project which uses simple react hooks
        like useState and useEffect. This project shows the cons of not using
        context API or any another state managers as it contains lot of prop
        drilling(passing down data as props to another components).{" "}
        <strong>UI is not responsive -_-</strong>
      </footer>
    </div>
  );
}

export default App;
