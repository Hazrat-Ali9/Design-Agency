import { projectData } from '../../../public/projectData';
import SectionTitle from '../SectionTitle';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className=' py-16 px-7'>
      <div>
        <SectionTitle
          text="Better Agency/SEO Solution At Your Fingertips"
          title="All Project"
        />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-7'>
        {
          projectData?.map(pr=> <ProjectCard key={pr?.name} pr={pr} /> )
        }
      </div>
    </div>
  );
};

export default Project;