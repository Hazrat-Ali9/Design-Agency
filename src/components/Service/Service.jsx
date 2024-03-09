import React from 'react';
import SectionTitle from '../SectionTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <div className="py-16">
      <div className=" md:px-24">
        <SectionTitle
          text="We Provide BestWeb design services"
          title="Our All Services"
        />
      </div>
      <div className=" md:px-24">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;