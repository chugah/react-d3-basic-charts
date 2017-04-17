"use strict";

import React, {Component} from 'react';
import {ScatterPlot} from 'react-d3-basic';

var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')
var parseDate = d3.time.format("%Y%m%d").parse;

var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: 'cross',
        symbolSize: 2,
        style: {
          "fillOpacity": .5
        }
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond',
        symbolSize: 2
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle',
        symbolSize: 2
      }
    ],
    x = function(d) {     
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return +d;
    };

export default class ScatterChartSample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      width: 800,
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
          symbol: 'triangle',
          symbolSize: 2
        }]: chartSeries
      })
  }
  render() {
    return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <ScatterPlot
            width= {800}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries = {this.state.series}
            x= {x}
            y= {y}
            xScale= {xScale}
          />
        </div>
    )
  }
}


