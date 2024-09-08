import { Chrono } from "react-chrono";
import timelineData from './data';
interface CurriculumProps {}
const Curriculum: React.FC< CurriculumProps> = ({}) => {
  return (
    <div>
    <div style={{ width: '100%', height: '750px' }}>
    <Chrono items={timelineData} mode="VERTICAL" disableToolbar />
  </div>
    </div>
  );
};

export default Curriculum;