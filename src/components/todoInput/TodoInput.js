import React from "react";
import { useState, useEffect } from "react";

const TodoInput = ({ text, handleChange, handleSubmit, editItem }) => {
  return (
    <div className="todo-form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          required
          value={text}
          type="text"
          placeholder="Add a task"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit" className={`btn ${editItem ? "update" : ""}`}>
          {`${editItem ? "Update task" : "Add Task"}`}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
