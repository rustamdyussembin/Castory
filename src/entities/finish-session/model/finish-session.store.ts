import { create } from 'zustand';
import { IFinishSessionConfirmationModalState } from '../finish-session.types';

export const useFinishSessionConfirmationModalStore = create<IFinishSessionConfirmationModalState>()((set) => ({
  isModalOpen: false,

  openModal: () => {
    set({ isModalOpen: true });
  },

  closeModal: () => {
    set({ isModalOpen: false });
  },
}));
