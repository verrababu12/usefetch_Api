import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p className="loading-class">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="bg-container">
      <h1 className="heading">Posts</h1>
      <ul className="items">
        {data.slice(0, 6).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
