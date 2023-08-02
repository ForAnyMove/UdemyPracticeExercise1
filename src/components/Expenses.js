import ExpenseItem from './ExpenseItem';
import './Expenses.css'

export const Expenses = ({items}) => {
  return (
    <div className='expenses'>
      {items.map((item, index) => 
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={index}
      />)}
    </div>
  );
}