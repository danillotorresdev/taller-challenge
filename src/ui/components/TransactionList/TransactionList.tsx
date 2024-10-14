import { Transaction } from '@/ui/pages/TransactionDashboard/hooks/useTransactions';
import { styled } from '@linaria/react';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

type TransactionListProps = {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }:TransactionListProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Date</Th>
          <Th>Description</Th>
          <Th>Amount (USD)</Th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <Td>{transaction.id}</Td>
            <Td>{transaction.date}</Td>
            <Td>{transaction.description}</Td>
            <Td>{transaction.amount}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
