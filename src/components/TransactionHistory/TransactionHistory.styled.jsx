import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border: 1px solid #000;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  width: 100%;
  text-align: center;
`;
export const TransactionsTableHead = styled.thead`
  background-color: #32aced;
  height: 50px;
  letter-spacing: 0.1em;
`;

export const TransactionsTableRow = styled.tr`
  height: 50px;
  background-color: #bedee9;

  &:nth-child(2n + 1) {
    background-color: #f8f7f7;
  }
`;
export const TransactionsTableHeading = styled.th`
  padding: 8px;
  border: 1px solid #000;
`;

export const TransactionsTableData = styled.td`
  padding: 8px;
  border: 1px solid #000;
`;
