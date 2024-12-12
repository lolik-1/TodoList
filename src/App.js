import React from "react";

import "./App.css";
import Post from "./Components/Post/Post";
import TodoPost from "./Components/TodoPost/TodoPost";

import { v4 as uuidv4 } from "uuid";

uuidv4();

function App() {
  const [todosPost, setTodosPost] = React.useState(
    JSON.parse(localStorage.getItem("TodoPost")) || [],
  );

  const AddTodoPost = (Title, Post) => {
    setTodosPost([
      ...todosPost,
      {
        id: uuidv4(),
        TitlePost: Title,
        PostText: Post,
      },
    ]);
  };

  React.useEffect(() => {
    localStorage.setItem("TodoPost", JSON.stringify(todosPost));
  }, [todosPost]);

  const EditTodoPost = (NewPsot, id) => {
    setTodosPost(
      todosPost.map((todo) => (todo.id === id ? { ...todo, NewPsot } : todo)),
    );
  };

  const DeleteToDoPost = (id) => {
    setTodosPost(todosPost.filter((todo) => todo.id !== id));
    localStorage.setItem("DeletePost", JSON.stringify(todosPost));
  };
  const AllDeleteToDoPost = () => {
    setTodosPost([]);
    localStorage.setItem("AllDeletePost", JSON.stringify(todosPost));
  };

  return (
    <div className="App">
      <div className="Wraper">
        <Post AddTodoPost={AddTodoPost} AllDeleteToDoPost={AllDeleteToDoPost} />
        <div className="Block">
          {todosPost.map((item, index) => (
            <TodoPost
              TitlePost={item}
              key={index}
              DeleteToDoPost={DeleteToDoPost}
              PostText={item}
              todosPost={todosPost}
              EditTodoPost={EditTodoPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
