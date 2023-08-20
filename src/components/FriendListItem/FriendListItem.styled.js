import styled from 'styled-components';
export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e7e9fc;
  width: 200px;
`;
export const IsonlineIndc = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => {
    if (p.is_online === 'true') {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
