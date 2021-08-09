const jokUrl  = 'https://api.chucknorris.io/jokes/random';
const urlUser = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async () =>{

	try {
		const respuesta = await fetch(jokUrl);
	
		if (!respuesta.ok) throw 'No se pudo realizar la peticion';
	
		const {icon_url, id , value} =  await respuesta.json();
	
		return  {icon_url, id , value} ;
		
	} catch (err ) {
		throw err
	}
}

const obtenerUser = async ()=>{
	const resp = await fetch(urlUser);
	const {data: usuarios}  = await resp.json();


	return usuarios;
}


export {
	obtenerChiste,
	obtenerUser
}