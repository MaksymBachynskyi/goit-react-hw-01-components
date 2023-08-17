import dataProfile from '../user.json';
import { Profile } from './Profile';
import dataStatistic from '../data.json';
import { Statistics } from './Statistics';
export const App = () => {
  return (
    <div>
      <Profile item={dataProfile} />
      <Statistics items={dataStatistic} title={'hi'} />
    </div>
  );
};
