import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 20px;
  max-width: 100%;
  width: 360px;
  border-radius: 10px;
  background-color: #f1f1f1;
  border: 1px solid black;
`;

export const Status = styled.span`
  display: block;
  margin-left: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`;

export const Name = styled.p`
  color: #9e0202;
  font-size: 24px;
`;
