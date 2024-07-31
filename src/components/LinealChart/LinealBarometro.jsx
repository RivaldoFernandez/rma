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

const LinealBarometro = () => {
    const Dias = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
    const datosBarometro = [1010, 1005, 1008, 100, 1012, 1015, 7000];

    const data = {
        labels: Dias,
        datasets: [{
            label: 'Presión Barométrica por día',
            data: datosBarometro,
            tension: 0.4,
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            pointBackgroundColor: 'rgba(255, 159, 64, 1)',
            pointBorderColor: 'rgba(255, 159, 64, 1)',
            pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            borderWidth: 2,
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Presión Barométrica por Día',
                font: {
                    size: 15,
                },
            },
            legend: {
                display: false,
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
                    text: 'Presión Barométrica',
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

export default LinealBarometro;
