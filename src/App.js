import React from 'react'
import Options from './Components/Options'


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      country: 'Spain', 
      val: '1300'
    }
  }  

  onEventChange = (event) => {
    console.log("click")
  }

  render() {
    return (  
    <div className='ui one column doubling stackable grid container segments'>
      <div className='ui column segment'>
      <Options onSubmit={this.onEventChange} />
      </div>
    </div>)
  }
}

export default App;
