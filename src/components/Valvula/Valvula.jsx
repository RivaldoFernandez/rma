import React, { useState, useEffect } from "react";

const mockData = {
    1: {
        temperatura: "22°C",
        humedad: "45%",
        conductividad: "1.2 dS/m",
        barometro: "1013 hPa",
        ph: "6.8",
        piranometro: "1200 W/m²",
        anemometro: "5 km/h",
    },
    2: {
        temperatura: "24°C",
        humedad: "50%",
        conductividad: "1.5 dS/m",
        barometro: "1010 hPa",
        ph: "7.0",
        piranometro: "1100 W/m²",
        anemometro: "6 km/h",
    },
    3: {
        temperatura: "21°C",
        humedad: "48%",
        conductividad: "1.3 dS/m",
        barometro: "1012 hPa",
        ph: "6.5",
        piranometro: "1150 W/m²",
        anemometro: "4 km/h",
    },
    4: {
        temperatura: "23°C",
        humedad: "47%",
        conductividad: "1.4 dS/m",
        barometro: "1011 hPa",
        ph: "6.9",
        piranometro: "1250 W/m²",
        anemometro: "7 km/h",
    }
};

const Valvula = ({ id }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            try {
                // Simula una solicitud a la API con un pequeño retraso
                setTimeout(() => {
                    if (mockData[id]) {
                        setData(mockData[id]);
                        setLoading(false);
                    } else {
                        throw new Error("Válvula no encontrada");
                    }
                }, 1000);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container-valvule-main">
            <div>
                <h2>Válvula {id}</h2>
                <p>Temperatura: {data.temperatura}</p>
                <p>Humedad: {data.humedad}</p>
                <p>Conductividad Eléctrica: {data.conductividad}</p>
                <p>Barómetro: {data.barometro}</p>
                <p>PH: {data.ph}</p>
                <p>Piranómetro: {data.piranometro}</p>
                <p>Anemómetro: {data.anemometro}</p>
            </div>
        </div>
    );
};

export default Valvula;
