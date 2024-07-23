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

const LinealConductividadE = () => {
    const Dias = ["A", "B", "C", "D", "E", "F"];
    const datosConductividad = [10, 15, 20, 18, 22, 25];

    const data = {
        labels: Dias,
        datasets: [{
            label: 'Conductividad Electrónica por día',
            data: datosConductividad,
            tension: 0.4,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            pointBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointBorderColor: 'rgba(153, 102, 255, 1)',
            pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            borderWidth: 2,
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Conductividad Electrónica por Día',
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
                    text: 'Conductividad Electrónica',
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

export default LinealConductividadE;
