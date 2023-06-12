import styled from '@emotion/styled';

export const FriendListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px
  align-items: center;
  margin-bottom: 10px;
`;

export const FriendListStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        transparent;
    }
  }};
`;

export const FriendListAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendListName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
