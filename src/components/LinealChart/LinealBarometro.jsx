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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler
);

const LinealBarometro = ({ apiUrl }) => {
    // Variables de estado para almacenar datos de presión barométrica y días
    const [datosBarometro, setDatosBarometro] = useState([]);
    const [dias, setDias] = useState([]);

    // Obtiene los datos para el gráfico cuando el componente se monta
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://test-production-18cc.up.railway.app/api/lecturasRaspberry/ultimosSieteDiasRaspberry/1/`);
                const data = response.data;

                // Procesar los datos obtenidos en el formato requerido para el gráfico
                const datos = data.map(item => item.presion_atmosferica); // Ajustar según la estructura real de los datos
                const diasData = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"]; // Días estáticos por simplicidad

                setDatosBarometro(datos); // Actualizar el estado con los datos de presión barométrica
                setDias(diasData); // Actualizar el estado con los días
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData(); // Llamar a la función fetchData cuando el componente se monta
    }, [apiUrl]); // Dependencia para activar el efecto

    // Configuración de los datos para el gráfico
    const data = {
        labels: dias,
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

    // Configuración de opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Presión Barométrica por Semana',
                font: {
                    size: 15,
                },
            },
            legend: {
                display: false, // Oculta la leyenda
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

    // Renderizar el componente del gráfico
    return (
        <div className="chart-container" style={{ width: '100%', height: '248px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LinealBarometro;
