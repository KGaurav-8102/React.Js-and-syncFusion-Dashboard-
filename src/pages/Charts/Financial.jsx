import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, DateTime } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { financialChartData } from '../../data/dummy';


const Financial = () => {
     return (
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="Financial" title="Financial Data in Meter" />
          <ChartComponent primaryXAxis={{valueType: "DateTime", labelFormat:"yMMM"}} primaryYAxis={{title: "Price"}}>
               <Inject services={[HiloSeries, DateTime]}  />
               <SeriesCollectionDirective>
                    <SeriesDirective type="Hilo" name="Apple Inc" dataSource={financialChartData} xName="date" high='high' low='low'></SeriesDirective>
               </SeriesCollectionDirective>
          </ChartComponent>
          </div>
     )
}

export default Financial
