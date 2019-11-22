<?php
header('content-type:text/html;charset=utf-8');
include('./conn.php');
    // 接收前端发送的数据
    $phone = $_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql = "select * from members where u_phone='$phone'";  //查询语句

    $result = $mysqli->query($sql);  //执行sql语句

    if($result->num_rows > 0){
        echo 1;
        // echo '{"msg":"用户名已存在}';
        $mysqli->close();
        die; //如果用户名存在 代码不再往下执行
    }

    $insSql = "insert into members(u_phone,u_pass) values ($phone,'$password')";//插入语句

    $res = $mysqli->query($insSql);//执行插入语句

    if($res){
        echo 2;
        // echo '{"msg":"注册成功"}，{"location":'location.href="../html/reg.html"'}';
    }

    $mysqli->close();

?>
