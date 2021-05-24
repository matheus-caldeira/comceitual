import React, { useEffect, useState } from 'react';
import { Line, Bar, Radar } from 'react-chartjs-2';
import {
  graphBorder,
  graphColor,
  graphOptions,
  graphDatas,
  graphBar,
  graphRadar,
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
            backgroundColor: graphColor[graph.id],
            borderColor: graphBorder[graph.id],
          },
        ],
      },
      options: graphOptions,
    }));
    setCharts(datas);
  }, []);

  return (
    <Container>
      <Radar type="radar" data={graphRadar.data} options={graphRadar.options} />
      <Bar type="" data={graphBar} />
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
