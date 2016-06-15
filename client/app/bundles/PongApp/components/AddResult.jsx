import React from 'react';

export default class AddResult extends React.Component {
  componentDidMount() {
      console.log('AddResult did mount')
  }

  render() {
    console.log('rendered add result')
    return (
      <div className="container">
        <h2>React Router First Page</h2>
        <p>
          This page brought to you by React Router
        </p>
      </div>

    )
  }
}
