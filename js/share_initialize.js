$(window).load(function(){
	const liffId = "1657662321-nR14gmQy";
	initializeLiff(liffId);
});

function initializeLiff(liffId){
	liff.init({
		liffId:liffId
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		console.log('LIFF Initialization failed ', err);
	});
}

function sendText(text){
	liff.sendMessages([{
		'type': 'text',
		'text': text
	}]).then(function(){
		liff.closeWindow();
	}).catch(funciont(error){
		window.alert('Failed to send message ' + error);
	});
}

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function(){
	$('form').submit(function(){
		alert("submit!");
		let message= ' ';
		sendText(message);
		return false;
	});
});
