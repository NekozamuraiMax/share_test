const shareForm = document.getElementById('shareform');

shareForm.onchange = () => {
	if(document.getElementById('genre').selectedIndex !== 0 && document.getElementById('textarea').value !== ""){
		submit.disabled = false;
	}else submit.disabled = true;
}



const maxChar = 400;

textarea.onkeyup = () => {
	let count = textarea.value.length;
	let limit = maxChar - count;
	$('#num').text(limit);
}