function joinClub(){
	alet("Kulubümüze katıldığın için teşekkürler!");
}
function formKontrol(){
		let name=document.getElementById("name").value;
		let emain=document.getElementById("email").value;
		
		if (name==="" || email ===""){
			alert("Lütfen ad ve e-posta alanlarını doldurun!");
			return false;
		}
		
		alert("Mesajınız gönderildi");
		return true;
}