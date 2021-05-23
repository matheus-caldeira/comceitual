import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  graphBorder,
  graphColor,
  graphOptions,
  graphDatas,
} from '../../utils/datas';

import { Container } from './styles';

const Performance: React.FC = () => {
  const [charts, setCharts] = useState<any[]>([]);

  useEffect(() => {
    const datas = graphDatas.map(graph => ({
      id: graph.id,
      data: {
        labels: graph.data,
        datasets: [
          {
            label: graph.name,
            data: graph.data,
            fill: false,
            backgroundColor: graphColor,
            borderColor: graphBorder,
          },
        ],
      },
      options: graphOptions,
    }));
    setCharts(datas);
  }, []);

  return (
    <Container>
      {charts.map(chart => (
        <Line
          key={`chart-${chart.id}`}
          type="line"
          data={chart.data}
          options={chart.options}
        />
      ))}
    </Container>
  );
};

export default Performance;
