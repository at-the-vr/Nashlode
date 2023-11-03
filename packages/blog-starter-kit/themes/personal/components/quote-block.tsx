'use client';

import { useEffect, useState } from 'react';

interface Quote {
	quote: string;
	author: string;
}

const QuoteBlock = () => {
	const [completeQuote, setCompleteQuote] = useState('');
	const [completeQuoteAuthor, setCompleteQuoteAuthor] = useState('');
	const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);
	const [quoteIndex, setQuoteIndex] = useState<number>(0);

	const fetchQuote = () => {
		fetch('https://type.fit/api/quotes')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				const randomIndex = Math.floor(Math.random() * data.length);
				const randomQuote = data[randomIndex].text;
				const randomQuoteAuthor = data[randomIndex].author.split(',');
				setCompleteQuote(randomQuote);
				setCompleteQuoteAuthor(randomQuoteAuthor[0]);

				setQuoteHistory([...quoteHistory, { quote: randomQuote, author: randomQuoteAuthor[0] }]);
				setQuoteIndex(quoteHistory.length);
			});
	};
	const showPreviousQuote = () => {
		if (quoteIndex !== 0) {
			setQuoteIndex(quoteIndex - 1);
			setCompleteQuote(quoteHistory[quoteIndex - 1].quote);
			setCompleteQuoteAuthor(quoteHistory[quoteIndex - 1].author);
		}
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div className="max-w-4xl rounded-lg bg-white p-4 text-center text-gray-800 shadow hover:bg-zinc-300 dark:bg-[#1f3d52] dark:hover:bg-[#1b3342]">
			<div className="mb-4">
				<div className="h-3 text-left text-3xl text-gray-600 dark:text-white">“</div>
				<p className="px-4 text-center text-sm text-gray-600 dark:text-white">{completeQuote}</p>
				<p className="px-4 text-right text-sm text-gray-600 dark:text-white">
					{completeQuoteAuthor}
				</p>
				<div className="h-3 text-right text-3xl text-gray-600 dark:text-white">”</div>
			</div>
			<div className="flex flex-row justify-center align-middle sm:gap-5 gap-2">
				<button
					type="button"
					onClick={showPreviousQuote}
					className="rounded-md border border-gray-200 bg-slate-600 px-3 py-2  text-white hover:bg-slate-800 hover:text-white dark:bg-gray-800 dark:hover:bg-gray-500"
					disabled={quoteIndex === 0}
					style={{ opacity: quoteIndex === 0 ? 0.5 : 1 }}
				>
					<div className="flex flex-row align-middle">
						<svg
							className="mr-2 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span className="mr-2">Previous</span>
					</div>
				</button>
				<button
					type="button"
					onClick={fetchQuote}
					className="rounded-md border border-gray-200 bg-slate-600 px-3 py-2  text-white hover:bg-slate-800 hover:text-white dark:bg-gray-800 dark:hover:bg-gray-500"
				>
					<div className="flex flex-row align-middle">
						<span className="mr-2">Next</span>
						<svg
							className="ml-2 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};

export default QuoteBlock;
