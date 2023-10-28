import { FriendListItem } from './FriendListItem'
import { FriendListUl } from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendListUl>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            ></FriendListItem>
          ))}
        </FriendListUl>
      );
} 




