import {
  WrapStatistics,
  StatisticsList,
  DescriptionStats,
} from './statistics.styled';
export const Statistics = ({ items, title }) => {
  return (
    <WrapStatistics>
      {title && <h2>Upload stats</h2>}
      <StatisticsList>
        {items.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <DescriptionStats>{label} </DescriptionStats>
              <DescriptionStats>{percentage}%</DescriptionStats>
            </li>
          );
        })}
      </StatisticsList>
    </WrapStatistics>
  );
};
