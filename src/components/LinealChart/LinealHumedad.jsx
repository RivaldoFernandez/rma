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

const LinealHumedad = () => {
    // Datos de ejemplo para los días y la humedad
    const Dias = ["A", "B", "C", "D", "E", "F"];
    const humedad = [20, 40, 60, 80, 70, 50, 30]; // Datos de humedad por día

    const data = {
        labels: Dias, // Etiquetas de los días
        datasets: [{
            label: 'Humedad por día',
            data: humedad, // Datos de humedad
            tension: 0.4, // Tensión de la curva de línea (opcional, ajusta según necesites)
            borderColor: 'rgba(54, 162, 235, 1)', // Color de borde de la línea
            backgroundColor: 'rgba(46, 204, 113, 0.2)', // NUEVO: Color de fondo del área bajo la línea (verde)
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color de los puntos
            pointBorderColor: 'rgba(54, 162, 235, 1)', // Color del borde de los puntos
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)', // Color de fondo al pasar el mouse sobre los puntos
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // Color del borde al pasar el mouse sobre los puntos
            borderWidth: 2, // Ancho del borde de la línea
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Humedad por Día', // Título del gráfico
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
                    text: 'Humedad (%)', // Título del eje Y
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
