import styled from 'styled-components';

export const CardList = styled.div`
  max-width: 30%;
  margin:30px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const ImgAvatar = styled.img`
  display: flex;
  border-radius: 50%;
  border: 5px dotted black;
`;

export const NameAvatar = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 32px;
`;

export const NameTagLoc = styled.p`
  margin-bottom: 8px;
  color: #8a8b8e;
  font-size: 24px;
`;

export const ProfileStats = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  font-size: 24px;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  border: 1px solid #d3d5e3;
`;

export const ProfileStatsLabel = styled.span`
  padding-bottom: 4px;
  color: #8a8b8e;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: bold;
  border-radius: 4px;
`;
