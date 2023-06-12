import { TableRow, TableCell } from './Transaction.styled';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tbody key={id}>
      <TableRow>
        <TableCell>{type}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
      </TableRow>
    </tbody>
  );
};
