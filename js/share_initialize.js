
const id = "1657662321-GMLZ3Qpv";

window.alert('onload');
window.onload = function(e){
	liff.init({
		liffId:id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err):
	});
};

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済
	window.alert('logged in.');
    } else {
        // 未ログイン
        let result = window.confirm("LINE Loginしますか？");
        if(result) {
            liff.login();
        }
    }
}

function sendText(text){
	if(!liff.isInClient()){
		window.alert('This button is unavailable as LIFF is currently being opened in an external browser.');
	}else{
		window.alert('send message.');
		liff.sendMessages([
			{
			type: 'text',
			text: text
			}
		]).then(function(){
			liff.closeWindow();
		}).catch(function(error){
			window.alert('Failed to send message ' + error);
		});
	}
}

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function(){
	$('form').submit(function(){
		window.alert('submit!');
		/*
		const genre = document.getElementById("genre").value;
		const freetxt = document.getElementById("textarea").value;
		let message= "not message.";
		
		if(genre==='day'){
			message = '[放課後デイサービスへのご相談・ご意見]\n(内容)\n' + freetxt;
		}else if(genre==='service'){
			message = '[他のサービスに関するご相談]\n(内容)\n' + freetxt;
		}else if(genre==='care'){
			message = '[子育てについてのご相談]\n(内容)\n' + freetxt;
		}else if(genre==='else'){
			message = '[その他]\n(内容)\n' + freetxt;
		}
		*/
		sendText("done.");
		return false;
	});
});
