import './ErrorMessage.css';

interface Props{
	message: string
}

export const ErrorMessage = ({message}: Props) => {
	return (
		<>
			<span className='error-message'>{ message }</span>
		</>
	)
}
