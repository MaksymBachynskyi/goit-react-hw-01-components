import dataProfile from '../user.json';
import { Profile } from './profile/Profile';
import dataStatistic from '../data.json';
import { Statistics } from './statistics/Statistics';
import { GlobalStyle } from './globalStyle';
import { Layout } from './Layout';
import friends from '../friends.json';
import { FriendList } from './friendList/friend';
import transactionData from '../transaction.json';
import { TransactionHistory } from './transaction/transaction';
export const App = () => {
  return (
    <Layout>
      <Profile item={dataProfile} />
      <Statistics items={dataStatistic} title={'Upload stats'} />
      <FriendList items={friends} />
      <TransactionHistory items={transactionData} />
      <GlobalStyle />
    </Layout>
  );
};
