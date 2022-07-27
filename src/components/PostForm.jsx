import React, { useRef, useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '', cost: '', date: '' })

    function addNewPost(e) {
        // отключение обновления страницы после нажатия на кнопку
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(), date: new Date().toLocaleString() + ""
        }
        if (newPost.cost == '') newPost.cost = 0;
        // отправка в пропсы - newPost
        create(newPost);
        setPost({ title: '', body: '', cost: '' });
    }
    return (
        <form>
            {/* Управляемый компонент*/}
            <MyInput
                value={post.title}
                /* Отслеживания ввода значения в input*/
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text" placeholder="Name of post"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Description of post"
            />
            <MyInput
                value={post.cost}
                onChange={e => setPost({ ...post, cost: e.target.value })}
                type="text"
                placeholder="Cost of Post"
            />
            <MyButton onClick={addNewPost}>ADD POST</MyButton>
        </form>
    )
}
export default PostForm;