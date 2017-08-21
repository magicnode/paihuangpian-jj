<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name ="viewport" content ="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
	<title>手机注册</title>
	<style type="text/css" media="screen">
		body {
			overflow: hidden;
			margin: 0;
		}
		.container {
			background:#f7fafc;
			height: 100vh;
			overflow: hidden;
		}
		.bind {
			width: 80%;
			left: 5.8%;
			position: fixed;
			top: 0;
			padding: 1rem;
		}
		.bind .bind-title {
			text-align: center;
		}
		.bind .bind-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.bind-container-form {
			margin: 1rem 0;
		}
		.bind-container .bind-container-form label {
			margin-bottom: 1rem;
			text-align: right;
			width: 5rem;
			display: inline-block;
			padding-right: 0.1rem;
		}
		.bind-container .bind-container-form input {
			width: 10rem;
	    height: 2rem;
	    font-size: 1rem;
	    padding-left: .4rem;
		}
		.bind-container .btn button {
			width: 9rem;
			font-size: 1.2rem;
			height: 2.4rem;
			margin: .6rem;
			border-radius: 6px;
		}
		.bind-container .btn .doregister {
			border: none;
			background: red;
			color: white;
		}
	</style>
	<script type="text/javascript" src="<?php echo $this->_var['TMPL']; ?>/js/jquery.js"></script>
</head>
<body>
  <div class="container">
    <canvas id="Mycanvas" width="546" height="780" style="opacity: .5"></canvas>
    <div class="bind">
      <p class="bind-title">      
        <?php
          $this->_var['logo_image'] = app_conf("SITE_LOGO");
        ?>
        <?php 
$k = array (
  'name' => 'load_page_png',
  'v' => $this->_var['logo_image'],
);
echo $k['name']($k['v']);
?>
      </p>
      <div class="bind-container">
        <div class="bind-container-form">
	      <label for="">手机：</label><input type="number" id="userPhone" name="" placeholder="请输入手机号" value="<?php echo $this->_var['phone']; ?>">
        </div>
        <div class="bind-container-form">
	      <label for="">用户名：</label><input id="userName" type="text" name="" placeholder="请输入用户名">
        </div>
        <div class="bind-container-form">
	      <label for="">密码：</label><input id="userPwd" type="text" name="" placeholder="请输入密码">
        </div>
        <div class="bind-container-form">
	      <label for="">重复密码：</label><input id="cfmUserPwd" type="text" name="" placeholder="请再次输入密码">
        </div>
    	<div class="btn">
    	  <button type="" class="doregister" id="register">立即注册</button>
    	</div>
      </div>
    </div>
	</div>
	<script type="text/javascript">
	  // register func
		const $register = $('#register');
		var registUrl = '<?php
echo parse_url_tag("u:wanyitong#doregist|"."".""); 
?>';
		var backurl = '<?php echo $this->_var['backurl']; ?>';
		var redirectUrl = '<?php echo $this->_var['redirectUrl']; ?>';
		console.log('backurl', backurl);
		console.log('redirectUrl', redirectUrl);

		function checkMobile(val){ 
	    if(!(/^1[3|4|5|8|7|9][0-9]\d{4,8}$/.test(val))){ 
	      return false; 
	    } else {
	      return true
	    }
		}

		$register.click(function () {
		  var mobile = $('#userPhone').val();
			var userName = $('#userName').val();
			var userPwd = $('#userPwd').val();
			var cfmUserPwd = $('#cfmUserPwd').val();
			if (!checkMobile(mobile)) {
				alert("不是完整的11位手机号或者正确的手机号前七位");
				return
			}
			if (userPwd !== cfmUserPwd) {
				alert('密码不一致!')
				return
			}
			$.ajax({
				url: registUrl,
				type: 'POST',
				dataType: 'json',
				data: {
					user_name: userName,
					user_pwd: userPwd,
					cfm_user_pwd: cfmUserPwd,
					mobile: mobile,
					backurl: backurl
				}
			})
			.success(function(data) {
				console.log("success", data);
				if (data.status === 0) {
				 alert(data.info);
				 return
				}

				if (Number(data.http) !== 302) {
					alert(data.info);
					return
				}
				window.location.href = redirectUrl
			})
			.fail(function(err) {
				console.log("error", err);
				alert('网络出错啦!')
			})
		})
	</script>
	<script type="text/javascript">
		// canvas 动画效果
		// 定义画布宽高和生成点的个数
		let WIDTH = window.innerWidth
		let HEIGHT = window.innerHeight
		let POINT = 35

		let canvas = document.getElementById('Mycanvas')
		canvas.width = WIDTH
		canvas.height = HEIGHT
		let context = canvas.getContext('2d')
		context.strokeStyle = 'rgba(0,0,0,0.2)'
		context.strokeWidth = 1
		context.fillStyle = 'rgba(0,0,0,0.1)'
		let circleArr = []

		// 线条：开始xy坐标，结束xy坐标，线条透明度
		function Line (x, y, _x, _y, o) {
		  this.beginX = x
		  this.beginY = y
		  this.closeX = _x
		  this.closeY = _y
		  this.o = o
		}
		// 点：圆心xy坐标，半径，每帧移动xy的距离
		function Circle (x, y, r, moveX, moveY) {
		  this.x = x
		  this.y = y
		  this.r = r
		  this.moveX = moveX
		  this.moveY = moveY
		}
		// 生成max和min之间的随机数
		function num (max, _min) {
		  let min = arguments[1] || 0
		  return Math.floor(Math.random() * (max - min + 1) + min)
		}
		// 绘制原点
		function drawCricle (cxt, x, y, r, moveX, moveY) {
		  let circle = new Circle(x, y, r, moveX, moveY)
		  cxt.beginPath()
		  cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
		  cxt.closePath()
		  cxt.fill()
		  return circle
		}
		// 绘制线条
		function drawLine (cxt, x, y, _x, _y, o) {
		  let line = new Line(x, y, _x, _y, o)
		  cxt.beginPath()
		  cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
		  cxt.moveTo(line.beginX, line.beginY)
		  cxt.lineTo(line.closeX, line.closeY)
		  cxt.closePath()
		  cxt.stroke()
		}
		// 初始化生成原点
		function init () {
		  circleArr = []
		  for (let i = 0; i < POINT; i++) {
		    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40))
		  }
		  draw()
		}
		// 每帧绘制
		function draw () {
		  context.clearRect(0, 0, canvas.width, canvas.height)
		  for (let i = 0; i < POINT; i++) {
		    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
		  }
		  for (let i = 0; i < POINT; i++) {
		    for (let j = 0; j < POINT; j++) {
		      if (i + j < POINT) {
		        let A = Math.abs(circleArr[i + j].x - circleArr[i].x)
		        let B = Math.abs(circleArr[i + j].y - circleArr[i].y)
		        let lineLength = Math.sqrt(A * A + B * B)
		        let C = 1 / lineLength * 7 - 0.009
		        let lineOpacity = C > 0.03 ? 0.03 : C
		        if (lineOpacity > 0) {
		          drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity)
		        }
		      }
		    }
		  }
		}
		// 调用执行
		init()
		setInterval(function () {
		  for (let i = 0; i < POINT; i++) {
		    let cir = circleArr[i]
		    cir.x += cir.moveX
		    cir.y += cir.moveY
		    if (cir.x > WIDTH) cir.x = 0
		    else if (cir.x < 0) cir.x = WIDTH
		    if (cir.y > HEIGHT) cir.y = 0
		    else if (cir.y < 0) cir.y = HEIGHT
		  }
		  draw()
		}, 16)
	</script>
</body>
</html>