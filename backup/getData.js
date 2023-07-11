function getData() {
  return db.transaction(
    (tx) => {
      tx.executeSql(
        sqlStatement,
        args,
        callback,
        errorCallback
      )
    },
    errorCallback,
    successCallback
  );
}