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
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler
);

const LinealHumedad = () => {
    const Dias = ["A", "B", "C", "D", "E", "F"];
    const humedad = [20, 40, 60, 80, 70, 50, 30];

    const data = {
        labels: Dias,
        datasets: [{
            label: 'Humedad por día',
            data: humedad,
            tension: 0.4,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            borderWidth: 2,
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Humedad por Día',
                font: {
                    size: 18,
                },
            },
            legend: {
                display: true,
                position: 'bottom',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Días',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Humedad (%)',
                },
            },
        },
    };

    return (
        <div className="chart-container" style={{ width: '100%', height: '248px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LinealHumedad;
