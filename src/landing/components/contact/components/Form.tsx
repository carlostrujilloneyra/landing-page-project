import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { FormInputs } from '../../../interfaces/form.interface';
import { cubicBezier, motion } from 'framer-motion';
import './Form.css';

export const Form = () => {

	const [messageLength, setMessageLength] = useState<number>(0);
	
	const [text, setText] = useState<string>('');

	const maxCharacters = 199;

	const handleDisabled = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		
		setMessageLength(e.target.value.trim().length);

		messageLength < maxCharacters && setText(e.target.value);
		
	}

	const { register, handleSubmit, formState: { errors }, reset} = useForm<FormInputs>({
		defaultValues: {
			name: '',
			email: '',
			company: '',
			title: '',
			message: ''
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
		setTimeout(() => {
			reset();
		}, 2200);
	}

	return (
		<>
			<motion.form
				className='main-form-contact'
				initial={{ opacity: 0, y: 400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
			>
				<div className='container-input'>
					<input
						type="text"
						{...register('name', {
							required: true,
							minLength: 10
						})}
						className='main-form__input'
						autoComplete='off'
						placeholder='Name'
					/>
					{errors.name?.type === 'required' && <ErrorMessage message='This field is required'/>}
					{errors.name?.type === 'minLength' && (<ErrorMessage message='Please enter at least ten characters'/>)}
				</div>

				<div className='container-input'>
					<input
						className='main-form__input'
						autoComplete='off'
						type="email"
						placeholder='Email Address'
						{...register('email', {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
						})}
					/>
					{errors.email?.type === "pattern" ||
						(errors.email?.type === "required"
							&&
							(<ErrorMessage message="Email invalid"/>))
					}
				</div>

				<div className='container-input'>
					<input
						className='main-form__input'
						type="text"
						{...register('company', {
							required: true,
							minLength: 4
						})}
						autoComplete='off'
						placeholder='Company Name'
					/>
					{errors.company?.type === 'required' && (<ErrorMessage message='This field is required'/>)}
					{errors.company?.type === 'minLength' && (<ErrorMessage message='Please enter at least four characters'/>)}
				</div>

				<div className='container-input'>
					<input
						className='main-form__input'
						type="text"
						{...register('title', {
							required: true,
							minLength: 6
						})}
						autoComplete='off'
						placeholder='Title'
					/>
					{errors.title?.type === 'required' && (<ErrorMessage message='This field is required'/>)}
					{errors.title?.type === 'minLength' && (<ErrorMessage message='Please enter at least six characters'/>)}
				</div>

				<div className='container-input'>
					<textarea
						className='main-form__input'
						placeholder='Message'
						{...register('message', {
							required: true,
							minLength: 20,
							maxLength: 200
						})}
						value={text}
						onChange={handleDisabled}
					/>
					<h4 className='message-length'>{messageLength}/200</h4>
					{errors.message?.type === 'required' && (<ErrorMessage message='This field is required'/>)}
					{errors.message?.type === 'minLength' && (<ErrorMessage message='Please enter at least twenty characters'/>)}
				</div>

				<button
					className='main-form__button'
					type='submit'
					onClick={handleSubmit(onSubmit)}
				>
					submit
				</button>

			</motion.form>
		</>
	)
}
