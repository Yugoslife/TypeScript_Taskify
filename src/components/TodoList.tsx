import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <SingeTodo todo={todo} key={todo.id}
    //     todos={todos}
    //     setTodos={setTodos}/>
    //   ))}
    // </div>
    <div className="container">
      <div className="todos">
        <span className="todos__heading">
            Active tasks
            </span>
            {
                todos.map((todo) =>(
                    <SingleTodo
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                    />
                ))
            }
      </div>
      <div className="todos remove">
      <span className="todos__heading">
            Completed tasks
            </span>
            {
                todos.map((todo) =>(
                    <SingleTodo
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                    />
                ))
            }
      </div>
    </div>
  );
};

export default TodoList;
