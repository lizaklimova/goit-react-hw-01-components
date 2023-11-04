import PropTypes from 'prop-types';
// ~ З json колонка Type приходить з маленької літери
import { capitalizeFirstLetter } from 'helpers/captalizeFirstLetter';
import {
  TransactionsTable,
  TransactionsTableHead,
  TransactionsTableRow,
  TransactionsTableHeading,
  TransactionsTableData,
} from './TransactionHistory.styled';

// ?------------------------------------------------------
export default function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <TransactionsTableHead>
        <tr>
          <TransactionsTableHeading>Type</TransactionsTableHeading>
          <TransactionsTableHeading>Amount</TransactionsTableHeading>
          <TransactionsTableHeading>Currency</TransactionsTableHeading>
        </tr>
      </TransactionsTableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionsTableRow key={id}>
              <TransactionsTableData>
                {capitalizeFirstLetter(type)}
              </TransactionsTableData>
              <TransactionsTableData>{amount}</TransactionsTableData>
              <TransactionsTableData>{currency}</TransactionsTableData>
            </TransactionsTableRow>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
}
// ?------------------------------------------------------
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
