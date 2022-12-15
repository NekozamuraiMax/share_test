const id = "1657662321-GMLZ3Qpv";
window.alert('debug start.');

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

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function(){	
	$('form').submit(function(){
		/*
		const genre = document.getElementById("genre").value;
		const date  = document.getElementById("datepicker").value;
		const time  = document.getElementById("scheduled-time").value;
		const freetxt= document.getElementById("textarea").value;
		let message="None. This is not message.";
		
		if(genre==='reserve'){
			message = '[申請内容]予定の追加\n'+'[指定日]'+date+'\n'+'[時間]'+time+'\n'+'[伝達事項]\n'+freetxt+ '\n\n上記の内容で申請しました。';
		}else if(genre==='cancel'){
			message = '[申請内容]キャンセル\n'+'[指定日]'+date+'\n'+'[伝達事項]\n'+freetxt+ '\n\n上記の内容で申請しました。';
		}else if(genre==='change'){
			message = '[申請内容]利用時間の変更\n'+'[指定日]'+date+'\n'+'[時間]'+time+'\n'+'[伝達事項]\n'+freetxt+ '\n\n上記の内容で申請しました。';
		}*/
		sendText('test success.');
		return false;
	});
});
window.alert('debug end.');
