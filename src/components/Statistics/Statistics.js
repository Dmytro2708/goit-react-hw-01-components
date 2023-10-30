import {
  StatCard,
  Title,
  StatList,
  StatListItem,
  StatListItemLabel,
  StatListItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatCard>
      <Title>Upload stats</Title>
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
