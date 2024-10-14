import { useState, useEffect } from 'react';

export type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock API Call
  useEffect(() => {
    const fetchTransactions = () => {
      setLoading(true);
      setTimeout(() => {
        try {
          const mockData: Transaction[] = [
            { id: 1, date: '2024-10-01', description: 'Purchase A', amount: 100 },
            { id: 2, date: '2024-10-02', description: 'Purchase B', amount: 200 },
            { id: 3, date: '2024-10-03', description: 'Purchase C', amount: 150 },
          ];
          setTransactions(mockData);
          setFilteredTransactions(mockData);
          setLoading(false);
        } catch (e) {
          setError('Failed to fetch transactions');
          setLoading(false);
        }
      }, 1000);
    };

    fetchTransactions();
  }, []);

  const filterByDate = (startDate: string, endDate: string) => {
    const filtered = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
    setFilteredTransactions(filtered);
  };

  return { transactions, filteredTransactions, loading, error, filterByDate };
};

