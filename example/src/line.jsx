"use strict";

import React, {Component} from 'react';
import {LineChart} from '../../src';

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

  module.exports = React.createClass({
    getInitialState: function() {
      return {
        width: 600,
        height: 400,
        series: chartSeries
      }
    },
    onClick: function() {
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
    },
    render: function() {

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
})

