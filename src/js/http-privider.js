const jokUrl = 'https://api.chucknorris.io/jokes/random';
const urlUser = 'https://reqres.in/api/users?page=2';

const cloudPreset = 't2eo5em6';
const cloudUrl = ' https://api.cloudinary.com/v1_1/dpzixrda2/upload';


const obtenerChiste = async () => {

	try {
		const respuesta = await fetch(jokUrl);

		if (!respuesta.ok) throw 'No se pudo realizar la peticion';

		const { icon_url, id, value } = await respuesta.json();

		return { icon_url, id, value };

	} catch (err) {
		throw err
	}
}

const obtenerUser = async () => {
	const resp = await fetch(urlUser);
	const { data: usuarios } = await resp.json();


	return usuarios;
}

export const subirImagen = async (archivoSubir) => {

	const formData = new FormData();
	formData.append('upload_preset', cloudPreset);
	formData.append('file', archivoSubir);
	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData
		});
		if (resp.ok) {
			const cloudResp = await resp.json();
			console.log(cloudResp);
			return cloudResp.secure_url;
		} else {
			throw await resp.json();
		}
	} catch (err) {
		throw err;
	}
}
export {
	obtenerChiste,
	obtenerUser
}