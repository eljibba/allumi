import { create } from 'zustand';

import Cookies from 'js-cookie';
import axiosInstance from '@/shared/api/axiosInstance';

interface AuthStoreState {
  isAuthInProgress: boolean;
  user: string;
  setUser: (user: string) => void;
  logout: () => void;
  isAuth: () => boolean;
  getUser: () => Promise<string | false>; // Explicit return type
}

export const useAuthStore = create<AuthStoreState>(
  (set, get) => ({
    isAuthInProgress: true,
    user: '',

    setUser: (user: string) => set({ user }),
    logout: () => {
      Cookies.remove('Access');
      Cookies.remove('Refresh');
      set({ user: '' });
    },
    isAuth: () => {
      return !!get()?.user;
    },
    getUser: async () => {
      const res = await axiosInstance.get('/auth/check').then((res) => {
        if (res.data.id) {
          set({ user: res.data, isAuthInProgress: false });
        }
        return res.data;
      }).catch(() => {
        set({ user: '' });
        return false;
      });
      return res;
    },
  }),
);
