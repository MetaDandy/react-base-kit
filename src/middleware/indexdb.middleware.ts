import { getIndexedDBItem, setIndexedDBItem } from "../lib/indexdb";
import { StateCreator } from "zustand";

export const indexedDBMiddleware =
  <T extends object>(
    config: StateCreator<T>,
    key: string,
    excludedKeys: string[] = []
  ): StateCreator<T> =>
  (set, get, api) => {
    // Cargar estado inicial desde IndexedDB
    getIndexedDBItem<Partial<T>>(key).then((persistedState) => {
      console.log("Estado recuperado de IndexedDB:", persistedState);
      if (persistedState) {
        set(persistedState as T);
      }
    });

    // Configurar el estado con persistencia
    return config(
      (args) => {
        set(args);

        // Crear una copia del estado actual
        const stateToPersist = { ...get() } as Partial<T>;

        // Excluir las claves especificadas
        excludedKeys.forEach((excludedKey) => {
          delete stateToPersist[excludedKey as keyof T];
        });

        // Filtrar funciones u otros valores no serializables
        Object.keys(stateToPersist).forEach((key) => {
          if (typeof stateToPersist[key as keyof T] === "function") {
            delete stateToPersist[key as keyof T];
          }
        });

        // Guardar el estado serializable en IndexedDB
        setIndexedDBItem(key, stateToPersist);
      },
      get,
      api
    );
  };
