import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("money_tracker.db")

export function checkTable() {
  db.transaction(tx => {
    tx.executeSql("CREATE TABLE IF NOT EXISTS history(id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, type TEXT NOT NULL, amount INTEGER NOT NULL, date TEXT NOT NULL);");
  });
}

export function saveHistory(data) {
  checkTable();
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO history (id, title, type, amount, date) VALUES (?, ?, ?, ?, ?)",
      [data.id, data.title, data.type, parseInt(data.amount), data.date],
      (trs, succ) => {console.log("Success: ", succ)},
      (trs, err) => {console.log("Error: ", err)}
    )
  });
}

export function getHistories(setter) {
  checkTable();
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM history",
      [],
      (_, { rows: { _array } }) => setter(_array.reverse()),
      (trs, error) => console.log(error)
    )
  });
}

export function clearData() {
  db.transaction(tx => {
    tx.executeSql(
      "DELETE FROM history",
      [],
    )
  });
}