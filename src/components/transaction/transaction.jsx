import { Wrap, Thead, TableText } from './transaction.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Wrap>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableText>{type}</TableText>
              <TableText>{amount}</TableText>
              <TableText>{currency}</TableText>
            </tr>
          );
        })}
      </tbody>
    </Wrap>
  );
};
