import { Text, FlatList, StyleSheet } from "react-native";

function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

const styles = StyleSheet.create({});
