import PropTypes from 'prop-types';
import {
  StatsContainer,
  StatsTitle,
  StatsList,
  StatsElement,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';
// ?------------------------------------------------------
export default function Statistics({ title, stats }) {
  return (
    <StatsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(stat => {
          return (
            <StatsElement key={stat.id}>
              <StatsLabel>{stat.label}</StatsLabel>
              <StatsPercentage>{stat.percentage}</StatsPercentage>
            </StatsElement>
          );
        })}
      </StatsList>
    </StatsContainer>
  );
}
// ?------------------------------------------------------
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
