import Profile from './components/Profile/Profile';
import StatisticList from './components/Statistics/StatisticList'
import FriendsListItems from './components/FriendList/FriendsListItems';
import TransactionHistoryList from './components/TransactionHistory/TransactionHistoryList'
import Section from './components/Section';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'
import friends from './components/FriendList/friends.json'
import transactions from './components/TransactionHistory/transactions.json'



export default function App() {
  return <div>
    
        <Profile
      src={user.avatar}
      alt={user.username}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
   
      <Section title='Upload stats'>
      <StatisticList items={data} />
     </Section>
   
    <Section >
      <FriendsListItems items={friends} />
      </Section>
    

    <Section >
      <TransactionHistoryList items={transactions} />
      </Section>
  </div>
}


