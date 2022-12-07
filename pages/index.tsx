import EmptyTodoInput from "components/empty-todo-input";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosList, removeCompleted } from "redux/todo-list";
import TodoList from "components/todo-list";
import { Flex } from "components/_global/box";
import { Button } from "components/_global/button";
import { useState } from "react";
import { Text } from "components/_global/typography";

const buttonStyle = (active: boolean) => css`
  margin: 0;
  border: none;
  font-family: "Open Sans", sans-serif;
  color: #888;
  border-radius: 4px;
  position: relative;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  &:after {
    content: "";
    background: #ffbeb0;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  ${active &&
  css`
    background-color: rgba(175, 47, 47, 0.65);
    color: #fff;
    font-weight: 500;
  `}
`;

const Home = () => {
  const todolists = useSelector(selectTodosList);
  const [toggleLabel, setToggleLabel] = useState<string>("All");
  const dispatch = useDispatch();

  return (
    <section
      css={css`
        font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 300;
      `}
    >
      <Flex
        alignItems="center"
        flexWrap="wrap-reverse"
        css={css`
          gap: 12px;
        `}
      >
        <Button
          onClick={() => toggleLabel !== "All" && setToggleLabel("All")}
          css={() => buttonStyle(toggleLabel === "All")}
        >
          All
        </Button>
        <Button
          onClick={() => toggleLabel !== "Active" && setToggleLabel("Active")}
          css={() => buttonStyle(toggleLabel === "Active")}
        >
          Active
        </Button>
        <Button
          onClick={() => toggleLabel !== "Completed" && setToggleLabel("Completed")}
          css={() => buttonStyle(toggleLabel === "Completed")}
        >
          Completed
        </Button>
        <Button
          onClick={() => {
            dispatch(removeCompleted());
          }}
          css={() => buttonStyle(toggleLabel === "Remove Completed")}
        >
          Remove Completed
        </Button>
        <Text ml="auto" my={2}>
          {todolists.filter((list) => list.id && !list.completed).length} Item left
        </Text>
      </Flex>
      <EmptyTodoInput />
      {(todolists || []).map((todoList) =>
        toggleLabel === "All" && todoList.id !== "" ? <TodoList key={todoList.id} todoList={todoList} /> : null
      )}
      {(todolists || []).map((todoList) =>
        toggleLabel === "Active" && !todoList.completed ? <TodoList key={todoList.id} todoList={todoList} /> : null
      )}
      {(todolists || []).map((todoList) =>
        toggleLabel === "Completed" && !!todoList.completed ? <TodoList key={todoList.id} todoList={todoList} /> : null
      )}
    </section>
  );
};

export default Home;
