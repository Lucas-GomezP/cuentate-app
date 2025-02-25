// import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import useDB from "../database/useDB";
import { useEffect, useState } from "react";
// import * as SQLite from "expo-sqlite";

export default function ExampleDB() {
  // const [example, setExample] = useState({});
  // useEffect(() => {
  //   const a = async () => {
  //     const db = await SQLite.openDatabaseAsync("databaseName");
  //     await db.execAsync(`
  //       PRAGMA journal_mode = WAL;
  //       CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
  //       INSERT INTO test (value, intValue) VALUES ('test1', 123);
  //       INSERT INTO test (value, intValue) VALUES ('test2', 456);
  //       INSERT INTO test (value, intValue) VALUES ('test3', 789);
  //       `);
  //     const result = await db.runAsync(
  //       "INSERT INTO test (value, intValue) VALUES (?, ?)",
  //       "aaa",
  //       100,
  //     );
  //     console.log(result.lastInsertRowId, result.changes);
  //     await db.runAsync(
  //       "UPDATE test SET intValue = ? WHERE value = ?",
  //       999,
  //       "aaa",
  //     ); // Binding unnamed parameters from variadic arguments
  //     await db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", [
  //       999,
  //       "aaa",
  //     ]); // Binding unnamed parameters from array
  //     await db.runAsync("DELETE FROM test WHERE value = $value", {
  //       $value: "aaa",
  //     }); // Binding named parameters from object

  //     // `getFirstAsync()` is useful when you want to get a single row from the database.
  //     const firstRow = await db.getFirstAsync("SELECT * FROM test");
  //     console.log(firstRow.id, firstRow.value, firstRow.intValue);

  //     // `getAllAsync()` is useful when you want to get all results as an array of objects.
  //     const allRows = await db.getAllAsync("SELECT * FROM test");
  //     for (const row of allRows) {
  //       console.log(row.id, row.value, row.intValue);
  //     }
  //     setExample({
  //       result,
  //       firstRow,
  //       allRows,
  //     });
  //   };
  //   a();
  // }, []);

  const {
    dropAllTables,
    createTables,
    seedInitialData,
    getAllTransactions,
    getAllTransactionsWithCategory,
  } = useDB();
  const [transactions, setTransactions] = useState([]);

  return (
    <View>
      <Text className="text-2xl text-center">
        Ejemplos y funciones de la base de datos (solo para pruebas)
      </Text>
      <View className="flex flex-col items-center mt-4 gap-2">
        <Pressable
          onPress={async () => await dropAllTables()}
          className="bg-red-700 p-2 rounded-md"
        >
          <Text className="font-bold text-white">DROP ALL TABLES</Text>
        </Pressable>
        <Pressable
          onPress={async () => await createTables()}
          className="bg-red-700 p-2 rounded-md"
        >
          <Text className="font-bold text-white">CREATE TABLES</Text>
        </Pressable>
        <Pressable
          onPress={async () => await seedInitialData()}
          className="bg-red-700 p-2 rounded-md"
        >
          <Text className="font-bold text-white">SEED INITAL DATA</Text>
        </Pressable>
        <Pressable
          onPress={async () => {
            const transactions = await getAllTransactions();
            setTransactions(transactions);
          }}
          className="bg-red-700 p-2 rounded-md"
        >
          <Text className="font-bold text-white">GET ALL TRANSACTIONS</Text>
        </Pressable>
        <Pressable
          onPress={async () => {
            const transactions = await getAllTransactionsWithCategory();
            setTransactions(transactions);
          }}
          className="bg-red-700 p-2 rounded-md"
        >
          <Text className="font-bold text-white">GET ALL TRANSACTIONS</Text>
        </Pressable>
      </View>
      <View className="mt-4">
        <Text className="text-center">
          {JSON.stringify(transactions, null, 2)}
        </Text>
      </View>
    </View>
  );
}
