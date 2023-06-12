import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const About = styled.div`
  margin-bottom: 20px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Info = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Stats = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 300px;
  border-top: 1px solid lightgray;
  margin-top: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
