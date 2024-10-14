import { Transaction } from "@/ui/pages/TransactionDashboard/hooks/useTransactions";

type SummaryProps = {
  transactions: Transaction[];
}

export const Summary = ({ transactions }: SummaryProps) => {
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  return (
    <div>
      <h2>Summary</h2>
      <p>Total Transactions: {transactions.length}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

