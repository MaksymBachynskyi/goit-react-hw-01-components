import styled from 'styled-components';
export const ProfileWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: white;
`;
export const Thumb = styled.div`
  border: 1px solid #e7e9fc;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Name = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;

  letter-spacing: 0.02em;
  color: var(--color-navy-blue);
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #8e8f99;
`;
export const List = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: space-around;
  padding: 12px;
`;
