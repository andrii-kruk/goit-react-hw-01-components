import {
  FriendListItem,
  FriendListStatus,
  FriendListAvatar,
  FriendListName,
} from './FriendCard.styled';

export const FriendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItem key={id}>
      <FriendListStatus isOnline={isOnline}>{isOnline}</FriendListStatus>
      <FriendListAvatar src={avatar} alt="User avatar" width="48" />
      <FriendListName>{name}</FriendListName>
    </FriendListItem>
  );
};
