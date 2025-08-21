import React, { useEffect, useState } from 'react';

const PostsWithComments = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedPostId) {
      setLoadingComments(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
          setLoadingComments(false);
        })
        .catch((err) => {
          console.error(err);
          setLoadingComments(false);
        });
    }
  }, [selectedPostId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Posts</h2>
      <p>(Click on a particular blog to get comments)</p>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <tr
                onClick={() => setSelectedPostId(post.id)}
                style={{ cursor: 'pointer', backgroundColor: selectedPostId === post.id ? '#f0f8ff' : 'white' }}
              >
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>

              {/* Show comments below the clicked post */}
              {selectedPostId === post.id && (
                <tr>
                  <td colSpan="2">
                    <h4>Comments:</h4>
                    {loadingComments ? (
                      <p>Loading comments...</p>
                    ) : (
                      <ul>
                        {comments.map((comment) => (
                          <li key={comment.id} style={{ marginBottom: '10px' }}>
                            <strong>{comment.name}</strong> ({comment.email})
                            <br />
                            {comment.body}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsWithComments;
