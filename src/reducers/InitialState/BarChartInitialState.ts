import BarChartsStateInterface from "_interface/State/Chart/BarChartsStateInterface";

const BarChartInitialState: BarChartsStateInterface = {
  title: {
    text: "High Chart"
  },
  vertical: false,
  x: {
    data: [
      "Series A",
      "Series B",
      "Series C",
      "Series D",
      "Series E",
      "Series F",
      "Series G",
      "Series H",
      "Series I",
      "Series J",
      "Series K",
      "Series L"
    ],
    title: "Series labels"
  },
  y: {
    data: [
      {
        name: "Tokyo",
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4
        ]
      },
      {
        name: "New York",
        data: [
          83.6,
          78.8,
          98.5,
          93.4,
          106.0,
          84.5,
          105.0,
          104.3,
          91.2,
          83.5,
          106.6,
          92.3
        ]
      },
      {
        name: "London",
        data: [
          48.9,
          38.8,
          39.3,
          41.4,
          47.0,
          48.3,
          59.0,
          59.6,
          52.4,
          65.2,
          59.3,
          51.2
        ]
      },
      {
        name: "Berlin",
        data: [
          42.4,
          33.2,
          34.5,
          39.7,
          52.6,
          75.5,
          57.4,
          60.4,
          47.6,
          39.1,
          46.8,
          51.1
        ]
      }
    ],

    title: "Earnings $$$",
    limit: 300
  }
};

export default BarChartInitialState;