import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHeader,
  TableHeaderCell,
} from './TransactionHistory.styled';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHeader>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHeader>
      {transactions.map(({ id, type, amount, currency }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
