import { ItemFriend, IsonlineIndc } from './FriendListItem.styled';
export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <ItemFriend>
      <IsonlineIndc is_online={String(isOnline)}></IsonlineIndc>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ItemFriend>
  );
};
