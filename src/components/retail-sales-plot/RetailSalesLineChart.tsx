import { Chart } from 'react-google-charts';
import { useGetPlotData } from './useGetPlotData';
import { useEffect } from 'react';
import { Card } from 'antd';

export const RetailSalesLineChart = ({ productId }: { productId: string }) => {
  const plotData = useGetPlotData(productId);
  useEffect(() => {}, [plotData]);
  console.log({ plotData });

  return (
    <Card
      style={{
        backgroundColor: '#fffff',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Chart
        chartType="LineChart"
        data={plotData}
        width="100%"
        height="600px"
        legendToggle
      />
    </Card>
  );
};
