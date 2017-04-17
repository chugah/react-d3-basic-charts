"use strict";

import React, {Component} from 'react';
import {Chart} from 'react-d3-core';
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
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24",
        style: {
          "fillOpacity": .5
        }
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ];

export default class PieChartSample extends Component {
  render() {
    return (
        <div>
            <PieChart
              data= {generalChartData}
              chartSeries= {chartSeries}
              value = {value}
              name = {name}
            />
        </div>
    )
  }
}
