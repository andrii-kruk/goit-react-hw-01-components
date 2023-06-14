import PropTypes from 'prop-types';

import { StatsList } from './StatsList/StatsList';
import { StatisticsSection, Title, StatList } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatsList key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
