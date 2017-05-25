import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
  return <h1>Hello, {props.namee}</h1>;
}

function Hello() {
  return (
    <div>
      <Welcome namee="John"/>
      <Welcome namee="Jacqie"/>
      <Welcome namee="Suet"/>
    </div>
    )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
