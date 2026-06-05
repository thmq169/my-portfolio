'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import Wrapper from '../../components/wrapper';

const INITIAL_FORM = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const INPUT_CLASS =
	'!bg-neutral-100 border border-tertiary-900 text-neutral-200 rounded-lg px-5 py-3 outline-none';

const Contact = () => {
	const [form, setForm] = useState(INITIAL_FORM);
	const [loading, setLoading] = useState(false);

	const isValidEmail = useMemo(() => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(form.email.trim());
	}, [form.email]);

	const inputsValid = useMemo(() => {
		return Boolean(form.subject.trim() && form.message.trim() && isValidEmail);
	}, [form.subject, form.message, isValidEmail]);

	const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!inputsValid || loading) return;

		setLoading(true);

		try {
			emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);

			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
				{
					from_name: form.name.trim(),
					from_email: form.email.trim(),
					subject: form.subject.trim(),
					message: form.message.trim(),
					to_email: 'tohoangminhquan.dp@gmail.com',
				}
			);

			if (result.text === 'OK') {
				setForm(INITIAL_FORM);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<section>
				<h2 className="font-bold text-xl md:text-2.6xl mb-3 uppercase">Contact Me</h2>

				<form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
					<label htmlFor="name" className="flex flex-col gap-1">
						<span className="font-medium text-lg md:text-xl capitalize">name</span>
						<input
							id="name"
							name="name"
							type="text"
							value={form.name}
							autoComplete="off"
							onChange={handleInput}
							className={INPUT_CLASS}
						/>
					</label>

					<label htmlFor="email" className="flex flex-col gap-1">
						<span className="font-medium text-lg md:text-xl capitalize">email address</span>
						<input
							id="email"
							name="email"
							type="email"
							value={form.email}
							autoComplete="off"
							onChange={handleInput}
							className={INPUT_CLASS}
						/>
					</label>

					<label htmlFor="subject" className="flex flex-col gap-1">
						<span className="font-medium text-lg md:text-xl capitalize">subject</span>
						<input
							id="subject"
							name="subject"
							type="text"
							value={form.subject}
							autoComplete="off"
							onChange={handleInput}
							className={INPUT_CLASS}
						/>
					</label>

					<label htmlFor="message" className="flex flex-col gap-1">
						<span className="font-medium text-lg md:text-xl capitalize">message</span>
						<textarea
							id="message"
							name="message"
							value={form.message}
							autoComplete="off"
							onChange={handleInput}
							className={`${INPUT_CLASS} min-h-44`}
						/>
					</label>

					<div className="flex justify-end w-full">
						<button
							type="submit"
							disabled={!inputsValid || loading}
							className={`${
								inputsValid && !loading ? 'bg-secondary-700' : 'bg-tertiary-300'
							} font-bold font-merri-waether-sans text-xl text-neutral-100 capitalize px-16 py-2 border-2 border-tertiary-300 outline-none rounded-lg max-w-max mt-1 cursor-pointer disabled:cursor-not-allowed`}
						>
							{loading ? <div className="loader" /> : 'submit'}
						</button>
					</div>
				</form>
			</section>
		</Wrapper>
	);
};

export default Contact;
