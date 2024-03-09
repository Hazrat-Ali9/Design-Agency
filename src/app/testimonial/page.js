import PageTitle from '@/components/PageTitle';
import Testimonial from '@/components/Testimonial/Testimonial';

export const metadata = {
  title: "Design agency | testimonial",
  description: "This is testimonial page",
};

const page = () => {
  return (
    <div>
      <PageTitle
        img="/teambg.png"
        title="Testimonial List"
        page="Testimonial List"
      />
      <Testimonial />
    </div>
  );
};

export default page;