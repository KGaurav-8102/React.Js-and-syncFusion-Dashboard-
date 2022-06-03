import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Inject, Legend, Category, Tooltip, DataLabel} from '@syncfusion/ej2-react-charts';
import { Header }  from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/contextProvider';

const Bar = () => {
     const { currentMode } = useStateContext();
     return (
          <div>
               <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
               <Header category="Bar" title="Inflation Rate in Percentage" />
               <ChartComponent id="bar-chart" height="420px"
               primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis}
               chartArea={{border: { width: 0}}} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
                    <Inject services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]} />
                    <SeriesCollectionDirective>
                         {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
               </ChartComponent>
          </div>
          </div>
     )
}

export default Bar
