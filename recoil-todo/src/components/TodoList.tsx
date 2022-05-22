import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface TodoListProps {}

interface IForm {
  toDo: string;
}

interface IToDo {
  // 저장될 State의 Type지정
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  // State를 저장할 Recoil atom생성
  key: "toDo",
  default: [],
});

const TodoList: FunctionComponent<TodoListProps> = ({}) => {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setTodos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
