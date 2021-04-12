import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";

const TodoList = ({ allTasks, clearAll, handleComplete, handleEdit }) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <h2>TODO LIST</h2>
      <div className="todo-wrapper">
        {allTasks.map((task, idx) => {
          return (
            <Todo
              key={idx}
              {...task}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
            ></Todo>
          );
        })}
      </div>
      <button
        className="btn"
        type="button"
        onClick={clearAll}
        style={{ marginTop: "1em" }}
      >
        Clear All
      </button>
    </>
  );
};

export default TodoList;
