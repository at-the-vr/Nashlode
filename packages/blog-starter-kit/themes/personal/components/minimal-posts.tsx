import { useState } from 'react';
import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';
import QuoteBlock from './quote-block';
import BlogAuthors from './blog-authors';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	const postsPerPage = 5;
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate the start and end indexes for the posts to display
	const startIndex = (currentPage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const postsToDisplay = posts.slice(startIndex, endIndex);
	
	// Handle page change
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<section id='main-content' className="flex w-full flex-col items-stretch gap-10 lg:max-w-lg">
			<QuoteBlock/>
			{postsToDisplay.map((post) => (
				<MinimalPostPreview
					key={post.id}
					title={post.title}
					date={post.publishedAt}
					author={{
						name: post.author.name,
					}}
					slug={post.slug}
					commentCount={post.comments?.totalDocuments}
				/>
			))}
			{/* Pagination Controls */}
			<div className="flex justify-center space-x-2">
				{Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
					<button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						className={`${
							currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-400'
						} rounded-md px-3 py-2`}
					>
						{index + 1}
					</button>
				))}
			</div>

			{/* Blog Authors Section  */}
			<div className='grid gap-4'>Check out these Developers enabling Developers 🤩
				<BlogAuthors />
			</div>
		</section>
	);
};
