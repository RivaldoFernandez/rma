import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
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

// Registrar componentes del gráfico
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler
);

const LinealHumedad = ({ userId, raspberryId }) => {
    // Variables de estado para almacenar datos de humedad y días
    const [humedad, setHumedad] = useState([]);
    const [dias, setDias] = useState([]);

    // Obtiene los datos para el gráfico cuando el componente se monta o cuando cambian userId o raspberryId.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener datos de humedad para los últimos siete días basados en el ID del raspberry
                const lecturaResponse = await axios.get(`https://test-production-18cc.up.railway.app/api/lecturasRaspberry/ultimosSieteDiasRaspberry/1/`);
                const lecturaData = lecturaResponse.data;

                // Procesar los datos obtenidos en el formato requerido para el gráfico
                const humedadData = lecturaData.map(item => item.humedad_ambiente); // Ajustar según la estructura real de los datos
                const diasData = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"]; // Días estáticos por simplicidad
                console.log(humedadData, diasData)

                setHumedad(humedadData); // Actualizar el estado con los datos de humedad obtenidos
                setDias(diasData); // Actualizar el estado con los días
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData(); // Llamar a la función fetchData cuando el componente se monta o cambian las dependencias
    }, [userId, raspberryId]); // Dependencias para activar el efecto

    // Configuración de los datos para el gráfico
    const data = {
        labels: dias,
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

    // Configuración de opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Humedad por Día',
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
                    text: 'Humedad (%)',
                },
            },
        },
    };

    // Renderizar el componente del gráfico
    return (
        <div className="chart-container" style={{ width: '100%', height: '248px' }}>
            <Line data={data} options={options} />

        </div>
    );
};

export default LinealHumedad;
