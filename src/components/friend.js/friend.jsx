import { Wrapper, IsonlineIndc, ItemFriend } from './friend.styled';
export const FriendList = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ avatar, id, isOnline, name }) => (
        <ItemFriend key={id}>
          <IsonlineIndc is_online={String(isOnline)}></IsonlineIndc>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </ItemFriend>
      ))}
    </Wrapper>
  );
};
