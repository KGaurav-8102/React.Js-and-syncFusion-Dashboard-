import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { PyramidData } from '../../data/dummy';

const Pyramid = () => {
     return (
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="Pyramid" title="Eating Products" />
          <AccumulationChartComponent id='charts'>
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' pyramidMode='Surface'>
          </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>;
          </div>
     )
}

export default Pyramid
