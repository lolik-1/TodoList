import React from "react";
import style from "./Post.module.scss";

function Post({ AddTodoPost, AllDeleteToDoPost }) {
  const [TitlePost, setTitlePost] = React.useState("");
  const [PostText, setPostText] = React.useState("");

  const Submit = (e) => {
    e.preventDefault();

    AddTodoPost(TitlePost, PostText);
    setTitlePost("");
    setPostText("");
  };

  return (
    <div className={style.Post}>
      <h1 className={style.Title}>TodoList</h1>
      <form onSubmit={Submit} className={style.Search}>
        <div className={style.InputScss}>
          <input
            className={style.Input}
            value={TitlePost}
            onChange={(e) => setTitlePost(e.target.value)}
            type="text"
            placeholder="Заголовок..."
          />
          <input
            className={style.Input}
            value={PostText}
            onChange={(e) => setPostText(e.target.value)}
            type="text"
            placeholder="Пост..."
          />
        </div>
        <button className={style.Button}>Добавить</button>
      </form>
      <button onClick={() => AllDeleteToDoPost()} className={style.ButtonAll}>
        Удалить все
      </button>
    </div>
  );
}
export default Post;
