import { createSearchParams, useNavigate } from "react-router-dom"

export default function Form () {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		navigate('/', {
			state: { showAlertEdited: true }
		})
	}

	return <>
		<h1>Form</h1>
		<hr />

		<form onSubmit={handleSubmit}>
			<label>
				Judul <br />
				<input type="text" /> <br />
			</label>

			<br />

			<label>
				Deskripsi <br />
				<input type="text" /> <br />
			</label>

			<br />

			<button>Submit</button>
		</form>
	</>
}