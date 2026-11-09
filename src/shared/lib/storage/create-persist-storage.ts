import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage } from 'zustand/middleware';

/** JSON storage on top of AsyncStorage for the zustand `persist` middleware. */
export const createPersistStorage = <TState>() => createJSONStorage<TState>(() => AsyncStorage);
