import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const chartData = {
    labels: ['Mar', 'Apr', 'Mey', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Transaction data',
        data: [1000000, 2000000, 3000000, 4000000, 5000000, 6000000],
        borderWidth: 0,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  return (
    <div>
      <h1 className="dashboard__tdashboard">Transaction Summary</h1>
      <div className="dashboard__chart mt-5">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
