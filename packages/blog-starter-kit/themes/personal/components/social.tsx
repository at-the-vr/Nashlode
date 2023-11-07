export const Social = () => {
	return (
		<div className="mt-4 flex items-center justify-center">
			<a
				href="https://twitter.com/hashnode"
				className="has-tooltip ml-4"
				aria-label="Twitter"
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="tooltip -mt-7 rounded bg-gray-100 p-1 text-red-500 shadow-lg">
					Twitter/X
				</span>
				<svg
					className="hover:text-gray-800 dark:hover:text-slate-200"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
					/>
				</svg>
			</a>
			<a
				href="https://hashnode.com"
				className="has-tooltip ml-4"
				aria-label="Hashnode"
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="tooltip -mt-7 rounded bg-gray-100 p-1 text-red-500 shadow-lg">
					Hashnode
				</span>
				<svg
					className="hover:text-blue-700 dark:hover:text-blue-700"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="m22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906a3.953 3.953 0 0 1 0 7.906z"
					/>
				</svg>
			</a>
			<a
				href="https://github.com/hashnode"
				className="has-tooltip ml-4"
				aria-label="Github"
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="tooltip -mt-7 rounded bg-gray-100 p-1 text-red-500 shadow-lg">Github</span>
				<svg
					className="hover:text-gray-800 dark:hover:text-slate-200"
					xmlns="http://www.w3.org/2000/svg"
					width="25"
					height="25"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
					/>
				</svg>
			</a>
			{/* <a
				href="mailto:atharvapise19@gmail.com"
				className="ml-4"
				aria-label="Email"
				rel={'noopener noreferrer'}
			>
				<svg
					className="hover:text-slate-200"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
					/>
				</svg>
			</a> */}
		</div>
	);
};
