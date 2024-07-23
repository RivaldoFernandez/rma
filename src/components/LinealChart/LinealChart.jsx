import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler,
  } from "chart.js";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler
  );

const LinealChart = () => {
    const Dias =["A", "B", "C", "D", "D", "D"];
    const temperatura = [0, 20, 50, 20, 25,60, 100]

    const data ={labels:Dias, 
        datasets:[{label: "Temperatura por dia", data: temperatura , tension:0.4}],
    };

    const options = {
        responsive: true,
    };
    return (
        <div className="chart-container" style={{width: '100%', height:'200px'}}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LinealChart;
