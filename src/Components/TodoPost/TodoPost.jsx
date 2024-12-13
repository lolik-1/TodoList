import React from "react";
import style from "./TodoPost.module.scss";

function TodoPost({
  TitlePost,
  DeleteToDoPost,
  PostText,
  EditTodoPost,
  todosPost,
}) {
  const [ifClickButton, setIfClickButton] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState(PostText.PostText);

  const ButtonClickEdit = () => {
    setIfClickButton(!ifClickButton);

    EditTodoPost(defaultValue, PostText.id);

    console.log(defaultValue);
    console.log(todosPost);
  };

  return (
    <div className={style.TodoPost}>
      <div className={style.post_title}>
        <h1 className={style.Title}>{TitlePost.TitlePost}</h1>
        {ifClickButton ? (
          <input
            placeholder="Измени свой пост..."
            onChange={(e) => setDefaultValue(e.target.value)}
            className={style.Input}
          />
        ) : (
          <p className={style.SubTitle}>{defaultValue}</p>
        )}
      </div>
      <div className={style.Block_Button}>
        <button onClick={ButtonClickEdit} className={style.Button}>
          Изменить
        </button>
        <button
          onClick={() => DeleteToDoPost(TitlePost.id)}
          className={style.Button}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default TodoPost;
