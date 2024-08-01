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

const LinealAnemometro = ({ apiUrl }) => {
    // Variables de estado para almacenar datos de velocidad del viento y días
    const [datosAnemometro, setDatosAnemometro] = useState([]);
    const [dias, setDias] = useState([]);

    // Obtiene los datos para el gráfico cuando el componente se monta
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://test-production-18cc.up.railway.app/api/lecturasRaspberry/ultimosSieteDiasRaspberry/1/`);
                const data = response.data;

                // Procesar los datos obtenidos en el formato requerido para el gráfico
                const datos = data.map(item => item.velocidad_viento); // Ajustar según la estructura real de los datos
                const diasData = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"]; // Días estáticos por simplicidad

                setDatosAnemometro(datos); // Actualizar el estado con los datos de velocidad del viento
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
            label: 'Velocidad del Viento por día',
            data: datosAnemometro,
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

    // Configuración de opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de Velocidad del Viento por Semana',
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
                    text: 'Velocidad del Viento',
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

export default LinealAnemometro;
