import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
