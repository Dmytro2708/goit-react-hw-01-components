import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            ></FriendListItem>
          ))}
        </ul>
      );
} 




