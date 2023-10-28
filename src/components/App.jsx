import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json';

// import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';


// const PageTitle = styled.h1`
// margin-top: 0px;
// margin-bottom: 20px;
// text-align: center;
// background-color: ${(props) => {
// switch (props.$variant) {
//   case "primary":
//     return "orange";
// case "secondary":
//   return "red";
//   default:
//     return "blue"
// };
// } };
// `;


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </div>
  );
};


