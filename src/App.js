import React, { Component } from 'react';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize: 14
    };

    this.onSetColor = this.onSetColor.bind(this);
  }

  onSetColor (params)  {
    //console.log(params);
    this.setState({
      color : params
    });
  }

  onChangeSize = (value) => {
    //console.log(value);
    //fontSize >=8 && <= 36    
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
      });
    
  }

  onSettingDefault = (values) => {
    //console.log(values);
    this.setState({
      color : 'red',
      fontSize: 14
    });
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color = { this.state.color } onReceiveColor = { this.onSetColor } />

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting 
              fontSize = { this.state.fontSize } 
              onChangeSize = { this.onChangeSize }
              />

            <Reset onSettingDefault = { this.onSettingDefault } />
          </div>          
        
          <Result color = { this.state.color } fontSize = { this.state.fontSize } />
        </div>
      </div>
    );
  }
}

export default App;
