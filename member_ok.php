<?
	
	echo "�̸�: ".$_POST[username]."<br>";
	echo "�ڵ�����ȣ: ".$_POST[phonenumber]."<br>";
	echo "���̵�: ".$_POST[userid]."<br>";
	echo "�н�����: ".$_POST[pwd]."<br>";
	echo "����: ".$_POST[sex]."<br>";
	echo "���: ";
	

	for($i=0; $i<count($_POST['hobby']); $i++){
		$position = $_POST['hobby'];
		echo $position[$i]." ";
	}

?>