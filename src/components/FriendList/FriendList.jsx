import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.styled';

// ?------------------------------------------------------
export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            key={id}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListUl>
  );
}
// ?------------------------------------------------------
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
