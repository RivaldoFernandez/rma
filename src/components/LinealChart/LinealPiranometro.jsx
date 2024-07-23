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

const LinealPiranometro = () => {
    const Dias = ["A", "B", "C", "D", "E", "F"];
    const datosPiranometro = [500, 550, 600, 580, 560, 520];

    const data = {
        labels: Dias,
        datasets: [{
            label: 'Radiación Solar por día',
            data: datosPiranometro,
            tension: 0.4,
            borderColor: 'rgba(255, 205, 86, 1)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            pointBackgroundColor: 'rgba(255, 205, 86, 1)',
            pointBorderColor: 'rgba(255, 205, 86, 1)',
            pointHoverBackgroundColor: 'rgba(255, 205, 86, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            borderWidth: 2,
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Radiación Solar por Día',
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
                    text: 'Radiación Solar',
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

export default LinealPiranometro;
