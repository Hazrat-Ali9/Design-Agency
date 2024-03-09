import { testimonialData } from '../../../public/TestimonialData';
import SectionTitle from '../SectionTitle';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <div className=" py-16 px-7">
      <div>
        <SectionTitle
          text="Better Agency/SEO Solution At Your Fingertips"
          title="Testimonial List"
        />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          testimonialData?.map(test=> <TestimonialCard key={test?.des} test={test} />)
}
      </div>
    </div>
  );
};

export default Testimonial;