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

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler
);

const LinealTemperatura = () => {
    // Datos de ejemplo para los días y la temperatura
    const Dias = ["A", "B", "C", "D", "E", "F"];
    const temperatura = [0, 20, 50, 20, 25, 60, 100]; // Datos de temperatura por día

    const data = {
        labels: Dias, // Etiquetas de los días
        datasets: [{
            label: 'Temperatura por día',
            data: temperatura, // Datos de temperatura
            tension: 0.4, // Tensión de la curva de línea (opcional, ajusta según necesites)
            borderColor: 'rgba(75, 192, 192, 1)', // Color de borde de la línea
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo del área bajo la línea
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color de los puntos
            pointBorderColor: 'rgba(75, 192, 192, 1)', // Color del borde de los puntos
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)', // Color de fondo al pasar el mouse sobre los puntos
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // Color del borde al pasar el mouse sobre los puntos
            borderWidth: 2, // Ancho del borde de la línea
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Temperatura por Día', // Título del gráfico
                font: {
                    size: 18, // Tamaño de la fuente del título
                },
            },
            legend: {
                display: true,
                position: 'bottom', // Posición de la leyenda
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Días', // Título del eje X
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Temperatura (°C)', // Título del eje Y
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

export default LinealTemperatura;
