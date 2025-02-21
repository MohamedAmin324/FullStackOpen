import Part from './Part';

export default function Content({ part1, part2, part3 }) {
	return (
		<>
			<Part {...part1} />
			<Part {...part2} />
			<Part {...part3} />
		</>
	);
}
