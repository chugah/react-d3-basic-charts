"use strict";

import React, {Component} from 'react';
import {LineChart} from 'react-d3-basic';

var generalChartData = require('./data/user.json');

var chartSeries = [
    {
      field: 'age',
      name: 'Age',
      color: '#ff7f0e',
      style: {
        "stroke-width": 2,
        "stroke-opacity": .2,
        "fill-opacity": .2
      }
    }
  ],
  x = function(d) {
    return d.index;
  }
export default class LineChartSample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      width: 400,
      height: 600,
      series: chartSeries,
      active: true
    };
  }
  onClick() {
    this.setState({
        width: this.state.width === 600? 400: 600,
        height: this.state.width === 600? 600: 400,
        series: this.state.width === 600? [{
          field: 'age',
          name: 'Age',
          color: '#ff7f0e',
          style: {
            "stroke-width": 5,
            "stroke-opacity": .2,
            "fill-opacity": .2
          }
        }]: chartSeries
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <LineChart
            showLegend={false}
            width= {this.state.width}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries= {this.state.series}
            x= {x}
          />
        </div>
      )
    }
}

