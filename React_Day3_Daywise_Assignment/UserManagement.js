import React, { useEffect, useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users'));
  }, []);

  useEffect(() => {
    if (expandedUserId !== null) {
      setLoadingDetails(true);
      setError('');
      fetch(`https://jsonplaceholder.typicode.com/users/${expandedUserId}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch user');
          return res.json();
        })
        .then(data => {
          setUserDetails(data);
          setLoadingDetails(false);
        })
        .catch(err => {
          setError('Could not load user details.');
          setUserDetails(null);
          setLoadingDetails(false);
        });
    } else {
      setUserDetails(null);
    }
  }, [expandedUserId]);

  const toggleUser = (id) => {
    setExpandedUserId(prevId => (prevId === id ? null : id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Management Dashboard</h2>
      <p>(Click a particular user to get the details)</p>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <React.Fragment key={user.id}>
              <tr
                style={{ cursor: 'pointer' }}
                onClick={() => toggleUser(user.id)}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>

              {expandedUserId === user.id && (
                <tr>
                  <td colSpan="3">
                    {loadingDetails ? (
                      <p>Loading user details...</p>
                    ) : error ? (
                      <p style={{ color: 'red' }}>{error}</p>
                    ) : userDetails ? (
                      <div style={{ textAlign: 'left' }}>
                        <p><strong>Username:</strong> {userDetails.username}</p>
                        <p><strong>Website:</strong> {userDetails.website}</p>
                        <p><strong>Address:</strong> {userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city}, {userDetails.address.zipcode}</p>
                        <p><strong>Company:</strong> {userDetails.company.name}</p>
                      </div>
                    ) : null}
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

export default UserManagement;
