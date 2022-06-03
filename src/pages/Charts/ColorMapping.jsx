import React from 'react';
import { Header } from '../../components';
import { rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';

const ColorMapping = () => {
     return (
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
               <Header category="Bar" title="Inflation Rate in Percentage" />
          </div>
     )
}

export default ColorMapping
