import {
  StatCard,
  Title,
  StatList,
  StatListItem,
  StatListItemLabel,
  StatListItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id}>
            <StatListItemLabel>{stat.label}</StatListItemLabel>
            <StatListItemPercentage>{stat.percentage}%</StatListItemPercentage>
          </StatListItem>
        ))}
      </StatList>
    </StatCard>
  );
};
