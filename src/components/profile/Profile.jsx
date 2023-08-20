import { ProfileWrap, Thumb, Name, Text, List } from './profile.styled';
export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrap>
      {' '}
      <Thumb>
        {' '}
        <img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Thumb>
      <List>
        <li>
          <Text>Followers</Text>
          <Name>{stats.followers}</Name>
        </li>
        <li>
          <Text> Views</Text>
          <Name>{stats.views}</Name>
        </li>
        <li>
          <Text> Likes</Text>
          <Name>{stats.likes}</Name>
        </li>
      </List>
    </ProfileWrap>
  );
};
