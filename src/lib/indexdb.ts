import { openDB } from "idb";

const DB_NAME = "app-store-db";
const STORE_NAME = "app-state";

// Inicializar la base de datos
const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

// Guardar un valor en IndexedDB
export const setIndexedDBItem = async <T>(
  key: string,
  value: T
): Promise<void> => {
  const db = await initDB();
  await db.put(STORE_NAME, value, key);
};

// Recuperar un valor de IndexedDB
export const getIndexedDBItem = async <T>(
  key: string
): Promise<T | undefined> => {
  const db = await initDB();
  return db.get(STORE_NAME, key);
};

// Eliminar un valor de IndexedDB
export const deleteIndexedDBItem = async (key: string): Promise<void> => {
  const db = await initDB();
  await db.delete(STORE_NAME, key);
};
