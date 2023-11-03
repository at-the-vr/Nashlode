import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="font-sometypeMono bg-light-bg dark:bg-dark-bg min-h-screen">
				<a
					className="absolute left-0 m-3 -translate-y-16 transition focus:translate-y-0 sr-only focus:not-sr-only"
					href="#main-content"
				>
					Skip Navigation
				</a>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
