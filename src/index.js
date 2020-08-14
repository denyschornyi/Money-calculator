import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Header = (props) => <h1 id="hi">{props.text}</h1> ;
const Element = <p>Article</p>

class Main extends React.Component {
  render(props){
    return(
      <div className="main">
        <Header text={'This was a props'}/>
        {Element}
      </div>
    )
  }
} 


ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

