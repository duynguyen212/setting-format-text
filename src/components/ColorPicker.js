import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }

    setSpanColor(color) {
        //console.log(color);
        console.log(this.props.color);
        return {
            backgroundColor: color 
        };
    }

    onSetActiveColor (color) {
        //console.log(color);
        this.props.onReceiveColor(color);
    }


  render() {
    var elmColors = this.state.colors.map((color, index) => {
        return <span key = {index} 
                    style = { this.setSpanColor(color) }
                    className = { this.props.color === color ? 'active' : '' }
                    onClick = { () => this.onSetActiveColor(color) }
                    >
                    </span>
    });

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color picker</h3>
                </div>
                <div className="panel-body">
                    { elmColors }
                    <hr/>
                </div>
            </div>
        </div>      
    );
  }
}

export default ColorPicker;
