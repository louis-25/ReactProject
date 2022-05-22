import { atom } from "recoil";

export interface IToDo {
  // 저장될 State의 Type지정
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
