
const id = "1657662321-GMLZ3Qpv";


window.onload = function(e){
	liff.init({
		liffId:id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err):
	});
}

function initializeApp() {
    // ���O�C���`�F�b�N
    if (liff.isLoggedIn()) {
        //���O�C����

    } else {
        // �����O�C��
        let result = window.confirm("LINE Login���܂����H");
        if(result) {
            liff.login();
        }
    }
}

function sendText(text){
	liff.sendMessages([{
		type: 'text',
		text: text
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
		const genre = document.getElementById("genre").value;
		const freetxt = document.getElementById("textarea").value;
		let message= "not message.";
		if(genre==="day"){
			message = '[���ی�f�C�T�[�r�X�ւ̂����k�E���ӌ�]\n(���e)\n' + freetxt;
		}else if(genre==="service"){
			message = '[���̃T�[�r�X�Ɋւ��邲���k]\n(���e)\n' + freetxt;
		}else if(genre==="care"){
			message = '[�q��Ăɂ��Ă̂����k]\n(���e)\n' + freetxt;
		}else if(genre==="else"){
			message = '[���̑�]\n(���e)\n' + freetxt;
		}
		sendText(message);
		return false;
	});
});
