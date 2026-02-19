import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => ({
			theme: 'light',
			setTheme: (theme: Theme) => set({ theme }),
			toggleTheme: () => {
				const current = get().theme;
				set({ theme: current === 'light' ? 'dark' : 'light' });
			},
		}),
		{
			name: 'app-theme', // ключ в localStorage
		}
	)
);

export const useTheme = () => useThemeStore(state => state.theme);
export const useToggleTheme = () => useThemeStore(state => state.toggleTheme);
