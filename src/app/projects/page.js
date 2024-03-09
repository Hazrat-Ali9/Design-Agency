import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project/Project';
import React from 'react';


export const metadata = {
  title: "Design agency | projects",
  description: "This is projects page",
};
const page = () => {
  return (
    <div>
      <PageTitle img="/teambg.png" title="All Project" page="All Project" />
      <Project />
    </div>
  );
};

export default page;