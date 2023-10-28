import styled from 'styled-components';

function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  }



export const StatCard = styled.section`
  max-width: 50%;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 32px;
  border-bottom: 1px solid #d3d5e3;
`;

export const StatList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
 display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
  background-color: ${getRandomHexColor};
`;

export const StatListItemLabel = styled.span`
 padding-top: 20px;
    font-size: 16px;
    color: #fff;
`;
export const StatListItemPercentage = styled.span`
  padding: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;
