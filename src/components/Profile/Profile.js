import {
  CardList,
  Avatar,
  ImgAvatar,
  NameAvatar,
  NameTagLoc,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <CardList>
      <Avatar>
        <ImgAvatar src={avatar} alt="User avatar" width="120" height="120" />
        <NameAvatar>{username}</NameAvatar>
        <NameTagLoc>@{tag}</NameTagLoc>
        <NameTagLoc>{location}</NameTagLoc>
      </Avatar>
      <ProfileStats>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followrs</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </CardList>
  );
};
