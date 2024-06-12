import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import { Header } from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { ProductDetails } from '../../components/ProjectsDetails/ProjectDetails';

function GridViewJobs() {
  return (
    <div className='gridViewJobs'>
      <Header />
      <Menu />
      <Tabs />
      <ProductDetails />
    </div>
  );
}

export default GridViewJobs;
