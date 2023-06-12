import { StatItem, Label, Percentage } from '../StatsList/StatsList.styled';

export const StatsList = ({ id, label, percentage }) => {
  return (
    <StatItem key={id}>
      <Label>{label}</Label>
      <Percentage> {percentage}%</Percentage>
    </StatItem>
  );
};
