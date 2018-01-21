<?
	
	echo "이름: ".$_POST[username]."<br>";
	echo "핸드폰번호: ".$_POST[phonenumber]."<br>";
	echo "아이디: ".$_POST[userid]."<br>";
	echo "패스워드: ".$_POST[pwd]."<br>";
	echo "성별: ".$_POST[sex]."<br>";
	echo "취미: ";
	

	for($i=0; $i<count($_POST['hobby']); $i++){
		$position = $_POST['hobby'];
		echo $position[$i]." ";
	}

?>