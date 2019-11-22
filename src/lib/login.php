<?php
    header('content-type:text/html;charset=utf-8');
    include('./conn.php');
    // 接收用户数据
    $phone = $_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql = "select * from members where u_phone='$phone' and u_pass='$password'";
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo 1;
        // echo "<script>alert('登陆成功');location.href='../html/home.html';</script>";
    }else{
        echo 2;
        // echo "<script>alert('用户名或密码不正确');location.href='../html/login.html';</script>";
    }

    $mysqli->close();

?>