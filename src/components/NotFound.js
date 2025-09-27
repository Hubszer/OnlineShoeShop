import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        const { errorMessage } = this.props;

        return (
            <div>
                <h2>Strona nie została znaleziona (404)</h2>
                <p>{errorMessage || "Przepraszamy, ale nie mogliśmy znaleźć strony, którą szukasz."}</p>
            </div>
        );
    }
}

export default NotFound;
