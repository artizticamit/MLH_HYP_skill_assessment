import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ShowChart({ tagCounts }) {
    const data = {
        labels: Object.keys(tagCounts),
        datasets: [
            {
                label: 'Tag Counts',
                data: Object.values(tagCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Codeforces Problem Tag Counts',
            },
        },
    };

    return (
        <div style={{
            height:'500px',
            width:'800px'
        }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default ShowChart;
