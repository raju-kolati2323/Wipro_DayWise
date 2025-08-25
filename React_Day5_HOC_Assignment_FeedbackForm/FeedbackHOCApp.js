import React, { useState, useEffect } from 'react';

// HOC 1: Authentication
const withAuthentication = (WrappedComponent) => {
    return (props) => {
        if (!props.isLoggedIn) {
            return <h2>Please log in to access the Feedback Form</h2>;
        }
        return <WrappedComponent {...props} />;
    };
};

// HOC 2: Validation
const withValidation = (WrappedComponent) => {
    return (props) => {
        const handleValidatedSubmit = (data) => {
            if (!data.milestoneCompleted || data.milestoneCompleted === '') {
                alert('Please select Yes or No before submitting.');
                return;
            }
            if (!data.comments || data.comments.trim() === '') {
                alert('"Please fill out this field.');
                return;
            }
            props.onSubmit(data);
        };
        return <WrappedComponent {...props} onSubmit={handleValidatedSubmit} />;
    };
};
//HOC 3: Logger
const withLogging = (WrappedComponent) => {
    return (props) => {
        useEffect(() => {
            console.log(`[${props.username}] Opened Feedback Form`);
        }, []);

        const handleLoggedSubmit = (data) => {
            console.log(
                `[${props.username}] Submitted: MilestoneCompleted=${data.milestoneCompleted}, Comments="${data.comments}" at ${new Date().toLocaleTimeString()}`
            );
            props.onSubmit(data);
        };

        return <WrappedComponent {...props} onSubmit={handleLoggedSubmit} />;
    };
};

const withErrorBoundary = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError() {
            return { hasError: true };
        }

        componentDidCatch(error, info) {
            console.error('Error caught by Error Boundary:', error, info);
        }

        render() {
            if (this.state.hasError) {
                return <h2>Something went wrong while loading the form.</h2>;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
};

const FeedbackForm = ({ onSubmit }) => {
    const [milestoneCompleted, setMilestoneCompleted] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ milestoneCompleted, comments });
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid gray', padding: '15px', margin: '10px' }}        >
            <h2>Feedback Form</h2>
            <label>
                Milestone 2 Completed:{' '}
                <select
                    value={milestoneCompleted}
                    onChange={(e) => setMilestoneCompleted(e.target.value)}                >
                    <option value="">--Select--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                Comments:
                <br />
                <textarea rows="4" cols="40" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Enter comments" />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

const EnhancedFeedbackForm = withAuthentication(
    withValidation(withLogging(withErrorBoundary(FeedbackForm)))
);

const FeedbackHOCApp = () => {
    const users = [
        {
            id: 1,
            username: 'Ravi',
            isLoggedIn: true,
        },
        // You can uncomment these to test logged-out or multiple users
        // {
        //   id: 2,
        //   username: 'Guest',
        //   isLoggedIn: false,
        // },
        // {
        //   id: 3,
        //   username: 'Asha',
        //   isLoggedIn: true,
        // },
    ];

    const handleFormSubmit = (data) => {
        console.log('Feedback saved:', data);
        alert(`Thanks! Your feedback has been submitted:\n\nMilestone: ${data.milestoneCompleted}\nComments: ${data.comments}`);
    };

    return (
        <div>
            <h1>Employee Feedback Portal (HOC Example)</h1>
            {users.map((user) => (
                <EnhancedFeedbackForm
                    key={user.id}
                    username={user.username}
                    isLoggedIn={user.isLoggedIn}
                    onSubmit={handleFormSubmit}
                />
            ))}
        </div>
    );
};

export default FeedbackHOCApp;
