import React, { Component } from 'react';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize: 15
    };

    this.onSetColor = this.onSetColor.bind(this);
  }

  onSetColor (params)  {
    //console.log(params);
    this.setState({
      color : params
    });
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color = { this.state.color } onReceiveColor = { this.onSetColor } />

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Font size: 15px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success"> + </button>
                { " " }
                <button type="button" className="btn btn-danger">-</button>
              </div>
            </div>
            <button className="btn btn-primary btn-block">Reset</button>
          </div>          
          
          <Result color = { this.state.color } />
        </div>
      </div>
    );
  }
}

export default App;
