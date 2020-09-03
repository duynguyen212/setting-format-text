import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Color picker</h3>
              </div>
              <div className="panel-body">
                
                <hr/>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Font size: 15px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success">Tăng</button>
                { " " }
                <button type="button" className="btn btn-danger">Giảm</button>
              </div>
            </div>
            <button className="btn btn-primary btn-block">Reset</button>
          </div>          
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50">
            <p>Color: red - Font size: 15px</p>
            <div id="content">
              Nội dung thiết lập
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
