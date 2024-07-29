// src/components/TableComponent.jsx
import React from 'react';
import "./TableComponent.css"

const TableComponent = () => {
  const data = [
    { device: 'Raspberry', battery: '43%', lastConnection: 'Hace 30 minutos' },
    { device: 'ESP32', battery: '31%', lastConnection: 'Hace 3 horas' },
    { device: 'ESP32 (Válvula 1)', battery: '73%', lastConnection: 'Hace 3 horas' },
    { device: 'ESP32 (Válvula 2)', battery: '13%', lastConnection: 'Hace 30 minutos' },
    { device: 'ESP32 (Válvula 3)', battery: '11%', lastConnection: 'Hace 12 horas' },
    { device: 'ESP32 (Válvula 4)', battery: '83%', lastConnection: 'Hace 2 horas' },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Dispositivo</th>
            <th>Batería</th>
            <th>Última conexión</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.device}</td>
              <td>{row.battery}</td>
              <td>{row.lastConnection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
