import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function HackerNewsPosts({ posts, comments }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
    <div>
      <h1 > Top 10 Stories</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
        
      </ul>
    </div>
    </Fragment>
  );
}

function App() {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    async function getTopStories() {
      const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error('Response Error:' + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 15)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        var kidsdata = result[0].kids;
        const map1 = kidsdata.map(test =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${test}.json`).then(
            response => response.json()
          )
        );
        const resultNew = await Promise.all(map1);
        console.log('Testing', resultNew);
        setPosts(result);
        setComments(resultNew);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

  function sayHello(id) {
    alert('sayhello');
  }

  return (
    <Fragment>
    <div className="hacker">
      <HackerNewsPosts posts={posts} comments={comments} />
    </div>
    </Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
