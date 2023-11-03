'use client';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<button
			onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
			className="w-16 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
		>
			{theme == 'dark' && (
				<svg
					aria-label="Switch to Light Theme"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 256 256"
				>
					<path
						fill="currentColor"
						d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16Zm88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8Zm96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16Z"
					/>
				</svg>
			)}
			{theme !== 'dark' && (
				<svg
					aria-label="Switch to Dark Theme"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 21q-3.775 0-6.388-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.525-.35 1.075-.037t.475.987q-.35 3.45-2.937 5.725T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z"
					/>
				</svg>
			)}
		</button>
	);
};

export default ThemeToggler;
