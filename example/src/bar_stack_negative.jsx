"use strict";

import React, {Component} from 'react';
import {BarStackChart} from 'react-d3-basic';

var generalChartData = require('dsv?delimiter=,!./data/fake_num.csv');

var chartSeries = [
    {
      field: 'num1',
      name: 'num1',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num2',
      name: 'num2',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num3',
      name: 'num3',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num4',
      name: 'num4',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num5',
      name: 'num5',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num6',
      name: 'num6',
      style: {
        "fillOpacity": .8
      }
    },
    {
      field: 'num7',
      name: 'num7',
      style: {
        "fillOpacity": .8
      }
    }
  ],
  x = function(d) {
    return d.State;
  },
  xScale = 'ordinal',
  y = function(d) {
    return +d;
  },
  yTickFormat = d3.format(".2s");

export default class BarStackNegativeSample extends Component {
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
            field: 'num5',
            name: 'num5',
            style: {
              "fill-opacity": .8
            }
          },
          {
            field: 'num6',
            name: 'num6',
            style: {
              "fill-opacity": .8
            }
          },
          {
            field: 'num7',
            name: 'num7',
            style: {
              "fill-opacity": .8
            }
          }
        ]: chartSeries
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <BarStackChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          y= {y}
          yTickFormat= {yTickFormat}
        />
      </div>
    )
  }
}
