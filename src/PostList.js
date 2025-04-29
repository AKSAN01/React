import { useState } from "react"
import App from "./Post"
function PostList(){
    
    const handleDelete = (id) =>{
        console.log("Deleted...", id)
        setPosts(posts.filter(post=>post.id !==id))
    }

    const handleAddPost = () => {
        const nextId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;


        const newPost = {
            id: nextId,
            edad: Math.floor(Math.random() * 10) + 1, 
            nombre: `Usuario ${nextId}`,            
        };

        console.log("Adding new post...", newPost);

        setPosts(currentPosts => [...currentPosts, newPost]);
    };

    const [posts, setPosts] = useState([
        {"id": 1, "edad": 5, "nombre": "Juan"},
        {"id": 2, "edad": 7, "nombre": "María"},
        {"id": 3, "edad": 8, "nombre": "Ana"},
        {"id": 4, "edad": 9, "nombre": "Carlos"}
    ]);

    return(
        posts.map(
            
            (post, index)=> 
            <div>
            <App key={index} post={post} onDelete={handleDelete}/> 
            <button  onClick={handleAddPost} style={{ marginBottom: '15px', display: 'block' }}>
            Agregar
            </button>
            </div>
    )
    )
}
export default PostList