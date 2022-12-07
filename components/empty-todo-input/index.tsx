import React, { createRef, memo } from "react";
import { Todo } from "types/types";
import { Input } from "components/_global/input";
import { Text } from "components/_global/typography";
import { css } from "@emotion/react";
import { addTodo as addTodoAction } from "redux/todo-list";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const EmptyTodoComponent = () => {
  const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) return;
    if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      // make new TODO object
      const todo: Todo = {
        bodyText: textInput.current.value,
        completed: false,
        id: uuidv4(),
      };

      // add new TODO to entire TodoList
      dispatch(addTodoAction(todo));

      // reset text input UI value
      textInput.current.value = "";
    }
  }

  return (
    <>
      <Text fontSize={[5, 6]} color="rgba(175,47,47,0.15)" fontWeight={100} my={4}>
        Todo List
      </Text>
      <Input
        type="text"
        placeholder="Add a todo list here..."
        ref={textInput}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
        autoFocus
        m={0}
        width="100%"
        p={3}
        fontSize="24px"
        fontWeight="inherit"
        lineHeight={1.4}
        color="inherit"
        background="#fff"
        css={css`
          font-family: inherit;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          border: none;
          box-shadow: inset -1px -2px 2px rgb(0 0 0 / 7%);
        `}
      />
    </>
  );
};

export default memo(EmptyTodoComponent);
