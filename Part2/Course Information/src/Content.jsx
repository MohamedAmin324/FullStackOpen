import Part from './Part';

export default function Content({ parts }) {
	return (
		<>
			{parts.map(({ id, name, exercises }) => (
				<Part key={id} name={name} exercises={exercises} />
			))}
		</>
	);
}
