import { useAppContext } from './contexts/appContext';
import { Social } from './social';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t border-slate-400 pt-5 text-center text-sm text-neutral-600 dark:border-amber-50 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title}
			<Social />
		</footer>
	);
};
