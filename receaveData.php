<?php
    $arr = array("airMax","airMax","airMax","airMax","af1","af1","af1","af1"); 
    $data = $_GET["searchData"];
    for($i=0;$i<count($arr);$i++){
        if($data == $arr[$i]){
            echo $arr[$i].'<hr>';
        }
        
    }
?>