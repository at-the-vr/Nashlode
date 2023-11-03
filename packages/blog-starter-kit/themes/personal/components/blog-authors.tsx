import Image from 'next/image';
const BlogAuthors = () => {
	// Author Block Component to show Author Image and other Details
	const AuthorBlock = ({
		name,
		blogURL,
		imageUrl,
	}: {
		name: string;
		blogURL: string;
		imageUrl: string;
	}) => {
		return (
			<div>
				<a href={blogURL} target="_blank" rel="noopener noreferrer">
					<Image
						className="h-auto max-w-full rounded-lg border opacity-70 hover:opacity-100"
						src={imageUrl}
						alt={`${name} Profile Picture/Logo`}
						width={200}
						height={200}
					/>
				</a>
			</div>
		);
	};
	// Author Block Component End
	
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
			<AuthorBlock
				name="Dani Passos"
				blogURL="https://danizeres.dev/"
				imageUrl="https://pbs.twimg.com/profile_images/1710067018949394433/q2oYG0jU_400x400.png"
			/>
			<AuthorBlock
				name="Quincy Larson"
				blogURL="https://www.freecodecamp.org/news/author/quincylarson/"
				imageUrl="https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_400x400.jpg"
			/>
			<AuthorBlock
				name="Shadcn"
				blogURL="https://shadcn.com/"
				imageUrl="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
			/>
		</div>
	);
};

export default BlogAuthors;
