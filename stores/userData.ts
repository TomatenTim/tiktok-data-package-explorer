import create from "zustand";
import IUserData from "../interfaces/IUserData";

interface IUserDataStore {
  userData: IUserData;
  setUserData: (userdata: IUserData) => void;
}

export const useUserData = create<IUserDataStore>(set => ({
  userData: {},
  setUserData: (userData: IUserData) => set(state => ({
    userData: userData
  })),
  deleteUserData: () => set(state => ({
    userData: {}
  }))
}));