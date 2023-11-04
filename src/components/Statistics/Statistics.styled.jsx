import styled from 'styled-components';
import { getRandomHexColor } from 'helpers/randomColor';

export const StatsContainer = styled.div`
  background-color: #f0f0f0;
  width: 300px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  outline: 1px solid #000000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const StatsTitle = styled.h2`
  text-align: center;
  padding-top: 15px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsElement = styled.li`
  width: calc(100% / 4);
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
  color: #fff;
`;

export const StatsPercentage = styled.span`
  color: #fff;
`;
