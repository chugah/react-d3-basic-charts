"use strict";

import React, {Component} from 'react';
import {Chart} from 'react-d3-core';
import {ChartPie} from 'react-d3-shape';
import {PieChart} from 'react-d3-basic';

var generalChartData = require('dsv?delimiter=,!./data/age_pie.csv')

var value = function(d) {
      return +d.population;
    },
    name = function(d) {
      return d.age;
    },
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5",
        "color": "red",
        "style": {
          "fillOpacity": .2
        }
      },
      {
        "field": "5-13",
        "name": "5 to 13",
        style: {
          "fillOpacity": .5
        }
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ],
    innerRadius = 50;

export default class DonutChartSample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      width: 600,
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
          "field": "<5",
          "name": "less than 5",
          "color": "red",
          "style": {
            "fillOpacity": .2
          }
      },
      {
          "field": "5-13",
          "name": "5 to 13",
          style: {
            "fillOpacity": .5
          }
      }]: chartSeries
    })
  }
  render() {
      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <PieChart
            width= {this.state.width}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries= {this.state.series}
            value = {value}
            name = {name}
            innerRadius = {innerRadius}
          />
        </div>
      )
    }
}
