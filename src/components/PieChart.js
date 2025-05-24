import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: ['Banks', 'Insurance', 'Stocks', 'Mutual Funds', 'Property', 'Others'],
          datasets: [{
            data: [28, 18, 12, 32, 7, 3],
            backgroundColor: ['#9ADBC5', '#F7B187', '#EF8354', '#62D2A2', '#7C67F0', '#B27BD1'],
            borderColor: '#1e1e2f',
            borderWidth: 2,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas id="pieChart" ref={chartRef}></canvas>
    </div>
  );
}

export default PieChart;