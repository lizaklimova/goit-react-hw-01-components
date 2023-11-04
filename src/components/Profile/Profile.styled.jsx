import styled from 'styled-components';

export const UserCard = styled.div`
  background-color: #f5f4f4;
  width: 300px;
  min-height: 330px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  padding-top: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.07);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const UserAvatar = styled.img`
  width: calc(100% / 3);
  border-radius: 50%;
  border: 1px solid #000;
  margin-bottom: 25px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #000;
  font-size: 25px;
`;

export const UserTag = styled.p`
  color: #707070;
`;

export const UserLocation = styled.p`
  color: #707070;
  font-size: 21px;
`;

export const UserStatsList = styled.ul`
  display: flex;
  background-color: #ecb5b5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  li:first-child {
    border-bottom-left-radius: 10px;
  }
  li:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const UserStatsElement = styled.li`
  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  border: 1px solid #504d4d;

  padding: 5px;
`;

export const UserStatsType = styled.span`
  color: #707070;
`;

export const UserStatsMeasures = styled.span`
  font-weight: 700;
`;
