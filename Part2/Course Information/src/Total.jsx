export default function Total({ parts }) {
	return (
		<p>
			Number of exercises{' '}
			{parts.reduce((accumulator, { exercises }) => accumulator + exercises, 0)}
		</p>
	);
}
