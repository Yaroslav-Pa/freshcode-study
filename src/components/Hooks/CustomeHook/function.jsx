import { useEffect, useState } from "react";


const useBlogData = () =>{
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    fetch('/posts.json')
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[])

  return {posts, isLoading, isError}
}

function BlogLoader() {
  const {posts, isLoading, isError} = useBlogData();

  const postList = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <button>Learn more</button>
    </article>
  ));

  
  if(isLoading) {
    return <h1>LOADING ...</h1>
  }

  if(isError) {
    return <h1>ERROR HAPPENED</h1>
  }

  return <div>{postList}</div>;
}

export default BlogLoader;