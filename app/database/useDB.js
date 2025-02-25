import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";

export default function useDB() {
  const conectDB = async () => {
    const database = await SQLite.openDatabaseAsync("cuentate-db");
    return database;
  };
  const dropAllTables = async () => {
    const database = await conectDB();
    database.execAsync(`
      DROP TABLE IF EXISTS categories;
      DROP TABLE IF EXISTS transactions;
    `);
    console.log("All tables dropped");
  };

  const createTables = async () => {
    const database = await conectDB();
    database.execAsync(`
      PRAGMA journal_mode = WAL;

      -- Tabla Categories
      CREATE TABLE categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      );

      -- Crea la tabla Transactions
      CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        amount REAL NOT NULL,
        category_id INTEGER NOT NULL,
        description TEXT,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      );
    `);
    console.log("Tables created");
  };

  const seedInitialData = async () => {
    const database = await conectDB();
    database.runAsync(
      `
      INSERT INTO transactions (date, amount, category_id, description) VALUES
        (?, ?, ?, ?);
      `,
      ["2024-10-27 12:00:00", -25.5, 1, "Almuerzo en restaurante"],
    );
    database.runAsync(
      `
      INSERT INTO categories (name, description) VALUES
        (?, ?);
      `,
      ["Alimentación", "Comidas y bebidas"],
    );
    console.log("Data seeded");
  };

  const getAllTransactions = async () => {
    const database = await conectDB();
    const transactions = await database.getAllAsync(
      "SELECT * FROM transactions",
    );
    console.log("get all transactions", transactions);
    return transactions;
  };

  const getAllTransactionsWithCategory = async () => {
    const database = await conectDB();
    const transactions = await database.getAllAsync(
      `
        SELECT transactions.*, categories.name AS category_name
        FROM transactions
        LEFT JOIN categories ON transactions.category_id = categories.id;
      `,
    );
    console.log("get all getAllTransactionsWithCategory", transactions);
    return transactions;
  };

  return {
    conectDB,
    dropAllTables,
    createTables,
    seedInitialData,
    getAllTransactions,
    getAllTransactionsWithCategory,
  };
}
