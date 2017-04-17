"use strict";

import React, {Component} from 'react';
import {Chart} from 'react-d3-core';
import {LineChart} from 'react-d3-basic';

var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')

var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        area: true
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff'
      }
    ],
    interpolate = 'monotone',
    x = function(d) {
      var parseDate = d3.time.format("%Y%m%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return +d;
    };

export default class LineMultiNegativeSample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      width: 1200,
      height: 400,
      series: chartSeries,
      active: true
    };
  }
  onClick() {
    this.setState({
      width: this.state.width === 600? 400: 600,
      height: this.state.width === 600? 600: 400,
      series: this.state.width === 600? [{
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        area: true
      }]: chartSeries
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
          <LineChart
              width= {1200}
              height= {this.state.height}
              data= {generalChartData}
              chartSeries= {this.state.series}
              x= {x}
              xScale= {xScale}
          />
      </div>
    )
  }
}

 

