import { css } from "@emotion/react";
import { Flex } from "components/_global/box";
import { Button } from "components/_global/button";
import { Input } from "components/_global/input";
import { Todo } from "types/types";
import { useDispatch } from "react-redux";
import { removeTodo, todoToggled, updateTodo as updateTodoAction } from "redux/todo-list";
import { memo } from "react";

const TodoList = ({ todoList }: { todoList: Todo }) => {
  const dispatch = useDispatch();

  function updateTodo(e: React.ChangeEvent<HTMLInputElement>): void {
    if (todoList.completed || e.target.value === null) return;

    const todo: Todo = {
      bodyText: e.target.value,
      completed: false,
      id: todoList.id,
    };
    // update edited TodoList
    dispatch(updateTodoAction(todo));
  }

  return (
    <Flex
      boxShadow="inset 0px -2px 0px rgb(0 0 0 / 2%)"
      py={3}
      minWidth="230px"
      maxWidth="550px"
      m="0 auto"
      position="relative"
      alignItems="center"
      css={css`
        gap: 16px;
      `}
    >
      <input
        type="checkbox"
        checked={todoList.completed}
        onChange={() => dispatch(todoToggled(todoList.id))}
        css={css`
          accent-color: #888;
          width: 35px;
          height: 25px;
          margin: 0;
        `}
      />
      <Input
        fontSize={3}
        fontWeight="100"
        color="#888"
        defaultValue={todoList.bodyText}
        disabled={todoList.completed}
        onChange={updateTodo}
        css={css`
          border: none;
          ${todoList.completed &&
          css`
            text-decoration: line-through;
            text-decoration-color: rgba(175, 47, 47, 0.65);
          `}
        `}
      />
      <Button
        position="absolute"
        top="40%"
        right="5%"
        m={0}
        p={0}
        fontSize={3}
        fontWeight={100}
        onClick={() => dispatch(removeTodo(todoList.id))}
        css={css`
          color: rgba(175, 47, 47, 0.65);
          border: none;
          background: none;
          cursor: pointer;
        `}
      >
        X
      </Button>
    </Flex>
  );
};

export default memo(TodoList);
