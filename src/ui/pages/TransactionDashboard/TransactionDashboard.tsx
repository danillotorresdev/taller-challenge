import {TransactionList} from "@/ui/components/TransactionList/TransactionList";
import { useTransactions } from "./hooks/useTransactions";
import { styled } from "@linaria/react";

import { useState } from "react";
import {Summary} from "@/ui/components/Summary/Summary";

// Styled components using Linaria
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Loading = styled.div`
  font-size: 18px;
  color: #666;
`;

const Error = styled.div`
  color: red;
  font-size: 18px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }

  input {
    margin-right: 20px;
  }
`;


export const TransactionDashboard = () => {
   const {error, filteredTransactions, loading, filterByDate} = useTransactions()

   const [startDate, setStartDate] = useState<string>('');
   const [endDate, setEndDate] = useState<string>('');
   
    if (loading) {
      return <Loading>Loading transactions...</Loading>;
    }
  
    if (error) {
      return <Error>{error}</Error>;
    }
  
    return (
      <Container>
        <h1>Payment Transaction Dashboard</h1>
      

      <FilterContainer>
        <div>
          <span>Start Date: </span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <span>End Date: </span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      <button onClick={() => filterByDate(startDate, endDate)}>Filter</button>
      </FilterContainer>

        <TransactionList transactions={filteredTransactions} />

        <Summary transactions={filteredTransactions} />
      </Container>
    );
  };