import ReactECharts from 'echarts-for-react';

export function Analytics() {
  const visitsOption = {
    title: {
      text: 'Visits by Page'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Visits',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Homepage' },
          { value: 735, name: 'Blog' },
          { value: 580, name: 'Products' },
          { value: 484, name: 'About' },
          { value: 300, name: 'Contact' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const usersOption = {
    title: {
      text: 'Active Users'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Views</h3>
          <p className="text-3xl font-bold text-primary mt-2">45,232</p>
          <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Avg. Time on Site</h3>
          <p className="text-3xl font-bold text-secondary mt-2">3m 45s</p>
          <p className="text-sm text-red-600 mt-1">↓ 3% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Bounce Rate</h3>
          <p className="text-3xl font-bold text-warning mt-2">42.3%</p>
          <p className="text-sm text-green-600 mt-1">↑ 8% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <ReactECharts option={visitsOption} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <ReactECharts option={usersOption} />
        </div>
      </div>
    </div>
  );
}