import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { Header }  from '../../components';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';



const Stacked = () => {
     return (
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="Stacked" title="Expense Rate in Month" />
          <ChartComponent id="charts" primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} tooltip={{ enable : true }}>
          <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
          <SeriesCollectionDirective>
               {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
          </ChartComponent>
          
     </div>
     )
}

export default Stacked
