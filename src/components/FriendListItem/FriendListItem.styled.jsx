import styled from 'styled-components';

export const FriendCard = styled.li`
  background-color: #eae7e7;
  width: 300px;
  min-height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition: all 350ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

export const FriendCardStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendCardAvatar = styled.img`
  width: 70px;
  height: auto;
  border-radius: 10px;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 25px;
`;
