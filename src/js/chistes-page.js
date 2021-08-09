import { obtenerChiste } from "./http-privider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {
	const html = `	
	<h1 class="mt-5" >Chistes</h1>
	<hr>

	<button class="btn btn-primary">Otro Chiste</button>

	<ol class="mt-2 list-group">
	</ol>`;

	const divChistes = document.createElement('div');
	divChistes.innerHTML = html;

	body.appendChild(divChistes);

}

const eventos = () => {
	olList = document.querySelector('ol');
	btnOtro = document.querySelector('button')

	btnOtro.addEventListener('click', async () => {
		btnOtro.disabled = true;

		dibujarChiste(await obtenerChiste());

		btnOtro.disabled = false;

	});
}

// {id , value }
let iterador = 0;
const dibujarChiste = (chiste) => {
	iterador ++;
	const olItem = document.createElement('li');
	olItem.innerHTML = `${iterador}  <b>${chiste.id}</b>: ${chiste.value} `
	olItem.classList.add('list-group-item');

	olList.appendChild(olItem);
}


export const init = () => {
	crearChistesHtml();
	eventos();
}