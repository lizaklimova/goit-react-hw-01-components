import PropTypes from 'prop-types';
// ~ Заглушка на аватар
import skeleton from '../../skeletons-img/avatar-skeleton.png';

import {
  UserCard,
  AvatarWrapper,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsElement,
  UserStatsType,
  UserStatsMeasures,
} from './Profile.styled';

// ?------------------------------------------------------
export default function Profile({
  username,
  tag,
  location,
  avatar = skeleton,
  stats,
}) {
  return (
    <UserCard>
      <AvatarWrapper>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </AvatarWrapper>

      <UserStatsList>
        <UserStatsElement>
          <UserStatsType>Followers</UserStatsType>
          <UserStatsMeasures>{stats.followers}</UserStatsMeasures>
        </UserStatsElement>
        <UserStatsElement>
          <UserStatsType>Views</UserStatsType>
          <UserStatsMeasures>{stats.views}</UserStatsMeasures>
        </UserStatsElement>
        <UserStatsElement>
          <UserStatsType>Likes</UserStatsType>
          <UserStatsMeasures>{stats.likes}</UserStatsMeasures>
        </UserStatsElement>
      </UserStatsList>
    </UserCard>
  );
}
// ?------------------------------------------------------
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
