import { useAppContext } from './contexts/appContext';
import { Social } from './social';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-5 border-slate-400 text-sm text-center text-neutral-500 dark:border-amber-50 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title}
			<Social/>
		</footer>
	);
};
