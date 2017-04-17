"use strict";

import React, {Component} from 'react';
import {AreaStackChart} from '../../src';

var generalChartData = require('dsv?delimiter=\t!./data/browser.tsv');
var formatPercent = d3.format(".0%");

var chartSeries = [
    {
      field: 'IE',
      name: 'IE browser',
      style: {
        "fillOpacity": .5
      }
    },
    {
      field: 'Chrome',
      name: 'Chrome browser'
    },
    {
      field: 'Firefox'
    },
    {
      field: 'Safari',
      name: 'Safari browser'
    },
    {
      field: 'Opera',
      name: 'Opera browser'
    }
  ],
  x = function(d) {
    var parseDate = d3.time.format("%y-%b-%d").parse;
    return parseDate(d.date);
  },
  xScale = 'time',
  y = function(d) {
    return d / 100;
  };

export default class AreaStackSample extends Component {
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
            field: 'IE',
            name: 'IE browser',
            style: {
              "fill-opacity": .5
            }
          },
          {
            field: 'Chrome',
            name: 'Chrome browser'
          },
          {
            field: 'Firefox'
          }
        ]: chartSeries
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <AreaStackChart
          width= {this.state.width}
          height= {this.state.height}
          data = {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale = {xScale}
          y= {y}
          yTickFormat= {formatPercent}
        />
      </div>
    )
  }
}