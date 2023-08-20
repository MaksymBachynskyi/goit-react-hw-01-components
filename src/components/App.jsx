import dataProfile from '../user.json';
import { Profile } from './profile.js/Profile';
import dataStatistic from '../data.json';
import { Statistics } from './statistics.js/Statistics';
import { GlobalStyle } from './globalStyle';
import { Layout } from './Layout';
import friends from '../friends.json';
import { FriendList } from './friend.js/friend';
import transactionData from '../transaction.json';
import { TransactionHistory } from './transaction.js/transaction';
export const App = () => {
  return (
    <Layout>
      <Profile item={dataProfile} />
      <Statistics items={dataStatistic} title={'hi'} />
      <FriendList items={friends} />
      <TransactionHistory items={transactionData} />
      <GlobalStyle />
    </Layout>
  );
};
