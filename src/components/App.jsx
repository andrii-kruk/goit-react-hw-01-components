// Components
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// Data
import profileData from '../data/profile.json';
import statisticsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title={'Upload stats'} data={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </>
  );
};
