const url = new URL(document.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');

window.onload = function(e){
	liff.init({
		liffId: id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err);
		console.log('LIFF Initialization failed ', err);
	});
};

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済

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

$(function(){	
	$('form').submit(function(){
		
		const genre = document.getElementById("genre").value;
		const freetxt= document.getElementById("textarea").value;
		let message="None. This is not message.";
		
		if(genre==='day'){
			message = '[放課後デイサービスへのご相談・ご意見]\n' + freetxt;
		}else if(genre==='service'){
			message = '[他のサービスに関するご相談]\n' + freetxt;
		}else if(genre==='care'){
			message = '[子育てについてのご相談]\n' + freetxt;
		}else if(genre==='else'){
			message = '[その他]\n' + freetxt;
		}
		
		sendText(message);
		return false;
	});
});
