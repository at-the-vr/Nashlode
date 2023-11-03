import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<Link href={postURL}>
			<section className="flex flex-col items-start gap-1 rounded-lg border-zinc-700 p-4 hover:border-2 hover:bg-slate-400 dark:border-zinc-50 dark:hover:bg-[#1f3d52]">
				<h2 className="text-lg leading-tight tracking-tight text-black dark:text-white">{title}</h2>
				<p className="flex flex-row items-center gap-2">
					<span className="text-sm text-neutral-600 dark:text-neutral-400">
						<DateFormatter dateString={date} />
					</span>
					{commentCount > 2 && (
						<>
							<span>&middot;</span>
							<span className="text-sm text-neutral-600 dark:text-neutral-400">
								{commentCount} comments
							</span>
						</>
					)}
				</p>
			</section>
		</Link>
	);
};
