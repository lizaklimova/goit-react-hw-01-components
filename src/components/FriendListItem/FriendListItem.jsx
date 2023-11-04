// ~ функція, яка повертає певний колір в залежності від статусі
import { determineUserStatus } from 'helpers/determineUserStatus';
// ~ Заглушка на аватар
import skeleton from '../../skeletons-img/avatar-skeleton.png';

import {
  FriendCard,
  FriendCardStatus,
  FriendCardAvatar,
  FriendName,
} from './FriendListItem.styled';

// ?------------------------------------------------------
export default function FriendListItem({
  id,
  avatar = skeleton,
  name,
  isOnline,
}) {
  return (
    <FriendCard key={id}>
      <FriendCardStatus
        style={{ backgroundColor: determineUserStatus(isOnline) }}
      ></FriendCardStatus>
      <FriendCardAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}
