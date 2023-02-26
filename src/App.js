import './App.css';
// Line chart component
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import RacingBarChart from './components/RacingBarChart';
import BarRace from './components/BarRace';
import LineChart from './components/LineChart';
import NightingaleChart from './components/NightingaleChart';

function App() {

  return (
    <div className='App'>
     <PieChart/>
     <BarChart/>
     <DoughnutChart/>
     <NightingaleChart/>
     <LineChart/>
     <RacingBarChart/>
     <BarRace/>
    </div>
  );
}
export default App;
