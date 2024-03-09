import { teamData } from "../../../public/TeamData";
import SectionTitle from "../SectionTitle";
import TeamCard from "./TeamCard";


const Team = () => {
  return (
    <div>
      <div>
        <SectionTitle
          text="Check our awesome team members"
          title="Our Team Member"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {teamData?.map((t) => (
          <TeamCard key={t.name} t={t} />
        ))}
      </div>
    </div>
  );
};

export default Team;