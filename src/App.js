import React, { useMemo, useRef, useState, useEffect } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePost";
import { useFetching } from "./hooks/useFetching";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    // добаление к предудущим постам новый пост (Добавление элемента массива)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    //выполняется при старте
    useEffect(() => {
        fetchPosts();
    }, []);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 10 }} onClick={() => setModal(true)} >
                CREATE POST
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0px' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {/* // если postError не пустой */}
            {postError &&
                <h1>Произошла ошибка: ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}> <Loader /> </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"POSTS"} />
            }

        </div>
    );
}

export default App;
