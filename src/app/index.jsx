import React from 'react';
import {render} from 'react-dom';
import MyRouter from './MyRouter.jsx';
import myStyle from '../style/myStyle.css'

class App extends React.Component {
  debugger;
  render () {
    return(
      <div>
        <div className='main-container'>
          <h2>Martin Borruel | Bus Route</h2>
          <MyRouter />
        </div>
      </div>
    )


  }
}

render(<App/>, document.getElementById('app'));
