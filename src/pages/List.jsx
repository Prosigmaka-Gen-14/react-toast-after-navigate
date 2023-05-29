import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function List () {
	const location = useLocation()

	useEffect(() => {
		console.log(location)
		if (location.state?.showAlertEdited) {
			toast('Data berhasil di edit')
			window.history.replaceState({}, document.title)
		}
	}, [])

	return <>
		<h1>List</h1>
		<hr />

		<Link to="/form">
			Tambah Data
		</Link>

		<br /><br />

		<table width="100%" border="1">
			<tr>
				<th>#</th>
				<th>Judul</th>
				<th>Deskripsi</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Pariatur in eiusmod</td>
				<td>Esse ullamco ipsum esse et sit enim eu</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Contoh Title</td>
				<td>Contoh deskripsi deskripsi deskripsi deskripsi</td>
			</tr>
		</table>
	</>
}