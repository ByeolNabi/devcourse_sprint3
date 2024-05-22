import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard;
};

const initialState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwnder: "John",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwnder: "John",
            },
          ],
        },
      ],
    },
    {},
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
