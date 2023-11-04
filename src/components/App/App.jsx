import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import userData from 'data/user.json';
import statistics from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Container } from './App.styled';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { username, tag, location, avatar, stats } = userData;

// ?------------------------------------------------------
export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <hr />
      <Statistics title="Upload stats" stats={statistics} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
