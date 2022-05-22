import React, { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";

interface TodoListProps {}

const TodoList: FunctionComponent<TodoListProps> = ({}) => {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo></CreateToDo>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
