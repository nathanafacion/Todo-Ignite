import React, { useState, useEffect } from "react";
import { StyledTodo, GlobalStyle } from "./Todo.styles";
import Header from "../../components/header/Header";
import NewTask from "../../components/newTask/NewTask";
import Tasks from "../../components/tasks/Tasks";
import { objectTask } from "../../interfaces/objectTask";

const Todo = () => {
  const [allTasks, setAllTasks] = useState<objectTask[]>([]);

  const handleOnclickChecked = (id: string) => {
    const newAllTasks: objectTask[] | undefined = allTasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setAllTasks(newAllTasks);
  };

  const handleOnclickDelete = (id: string) => {
    const findTasks: objectTask[] | undefined = allTasks.filter(
      (task) => task.id !== id
    );

    if (findTasks) {
      setAllTasks(findTasks);
    }
  };

  const handleNewTask = (newTask: objectTask) => {
    setAllTasks((old) => [...old, newTask]);
  };

  return (
    <>
      <GlobalStyle />
      <StyledTodo>
        <Header />
        <NewTask handleNewTask={handleNewTask} />
        <Tasks
          allTasks={allTasks}
          handleOnclickDelete={handleOnclickDelete}
          handleOnclickChecked={handleOnclickChecked}
        />
      </StyledTodo>
    </>
  );
};

export default Todo;
