import React from "react";

const Todo = ({ text, curDate, handleComplete, id, handleEdit }) => {
  return (
    <>
      <div className="todo-body">
        <div className="todo-text">
          <h1>{text}</h1>
          <h2>{curDate}</h2>
        </div>
        <div className="todo-actions">
          <i
            className="bx bx-check-circle bx-md"
            onClick={() => handleComplete(id)}
          ></i>
          <i className="bx bx-edit bx-md" onClick={() => handleEdit(id)}></i>
        </div>
      </div>
    </>
  );
};

export default Todo;
