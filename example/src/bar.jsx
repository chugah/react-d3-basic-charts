"use strict";

import React, {Component} from 'react';
import {BarChart} from 'react-d3-basic';

var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv');

var chartSeries = [
    {
      field: 'frequency',
      name: 'Frequency',
      style: {
        'fillOpacity': .5
      }
    }
  ],
  x = function(d) {
    return d.letter;
  },
  xScale = 'ordinal',
  y = function(d) {
    return +d;
  },
  yTicks = [10, "%"],
  onMouseOver = function(d, i) {
    console.log(d, i);
  },
  onMouseOut = function(d, i) {
    console.log(d, i);
  }

export default class BarSample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      width: 600,
      height: 500,
      series: chartSeries,
      active: true
    };
  }
  onClick() {
    this.setState({
      width: this.state.width === 600? 500: 600,
      height: this.state.width === 600? 600: 500,
      series: this.state.width === 600? [
          {
            field: 'frequency',
            name: 'Frequency',
            style: {
              'fill': 'red',
              'fillOpacity': .8
            }
          }
        ]: chartSeries
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <BarChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          y= {y}
          yTicks= {yTicks}
          showXGrid= {true}
          showYGrid= {true}
          showLegend={false}
          onMouseOver= {onMouseOver}
          onMouseOut= {onMouseOut}
        />
      </div>
    )
  }
}

