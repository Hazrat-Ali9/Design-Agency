import Banner from '@/components/Banner';
import Brand from '@/components/Brand';
import Feature from '@/components/Feature';
import Review from '@/components/Review';
import WorkList from '@/components/WorkList';

export const metadata = {
  title: "Design agency | Home",
  description: "This is home page",
};
const page = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <WorkList />
      <Review />
      <Feature />
     
    </div>
  );
};

export default page;