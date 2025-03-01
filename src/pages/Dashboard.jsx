import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

export function Dashboard() {
  const pageViewsOption = {
    title: {
      text: 'Page Views'
    },
    xAxis: {
      type: 'category',
      data: Array.from({length: 7}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return format(date, 'MMM dd');
      }).reverse()
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
          <p className="text-3xl font-bold text-primary mt-2">156</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
          <p className="text-3xl font-bold text-secondary mt-2">2,451</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Media Files</h3>
          <p className="text-3xl font-bold text-warning mt-2">642</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <ReactECharts option={pageViewsOption} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Post Title {i}</h4>
                  <p className="text-sm text-gray-500">Published 2 days ago</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  Published
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Server Status</span>
              <span className="text-success">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Backup</span>
              <span>2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Storage Usage</span>
              <span>45%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}