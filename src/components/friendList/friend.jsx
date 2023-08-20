import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Wrapper } from './friend.styled';
export const FriendList = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => {
        return <FriendListItem key={item.id} item={item} />;
      })}
    </Wrapper>
  );
};
