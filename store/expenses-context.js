import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 1200,
    date: new Date("2023-07-06"),
    id: "e2",
    description: "Skincare products",
    amount: 3000,
    date: new Date("2022-12-20"),
    id: "e3",
    description: "3 suits",
    amount: 10000,
    date: new Date("2023-05-06"),
    id: "e4",
    description: "Handsfree",
    amount: 700,
    date: new Date("2023-06-31"),
    id: "e5",
    description: "Haircare range",
    amount: 2000,
    date: new Date("2023-05-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    case "UPDATE":
      const updatableExpenseItem = state.findIndex((expense) => {
        expense.id === action.payload.id;
      });
      const updatableExpense = state(updatableExpenseItem);
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseItem] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
