import { workData} from '../../public/workData'
import SectionTitle from './SectionTitle';
import SingleWork from './SingleWork';

const WorkList = () => {
  return (
    <div className=' px-7'>
      <div>
        <SectionTitle
          text="We provide the Perfect Solution to your business growth"
          title="Work List"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workData?.map((work) => (
          <SingleWork key={work?.title} work={work} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;