import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
     return (
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="Pie" title="Pie Chart Data" />
          <AccumulationChartComponent id='charts'>
          <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius='100%'>
          </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
          </div>
     )
}

export default Pie
