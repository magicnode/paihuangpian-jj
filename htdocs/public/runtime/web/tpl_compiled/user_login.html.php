<?php
$this->_var['pagecss'][] = TMPL_REAL."/css/user_login.css";
$this->_var['pagejs'][] = TMPL_REAL."/js/user_login.js";

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="Generator" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php if ($this->_var['page_title'] != ''): ?><?php echo $this->_var['page_title']; ?> - <?php endif; ?><?php echo $this->_var['site_name']; ?> - <?php echo $this->_var['site_title']; ?></title>
<meta name="keywords" content="<?php echo $this->_var['site_keyword']; ?>" />
<meta name="description" content="<?php echo $this->_var['site_description']; ?>" />
<script type="text/javascript" src="<?php echo $this->_var['TMPL']; ?>/js/jquery.min.js"></script>
<?php
$this->_var['pagecss'][] = TMPL_REAL."/css/style.css";
$this->_var['pagecss'][] = TMPL_REAL."/css/weebox.css";
$this->_var['pagejs'][] = TMPL_REAL."/js/jquery.bgiframe.js";
$this->_var['pagejs'][] = TMPL_REAL."/js/jquery.weebox.js";
$this->_var['pagejs'][] = TMPL_REAL."/js/jquery.pngfix.js";
$this->_var['pagejs'][] = TMPL_REAL."/js/lazyload.js";
$this->_var['pagejs'][] = TMPL_REAL."/js/script.js";
$this->_var['cpagejs'][] = TMPL_REAL."/js/script.js";
if(app_conf("APP_MSG_SENDER_OPEN")==1)
{
$this->_var['pagejs'][] = TMPL_REAL."/js/msg_sender.js";
$this->_var['cpagejs'][] = TMPL_REAL."/js/msg_sender.js";
}
?>

<link rel="stylesheet" type="text/css" href="<?php 
$k = array (
  'name' => 'parse_css',
  'v' => $this->_var['pagecss'],
);
echo $k['name']($k['v']);
?>" />
<script type="text/javascript">
var APP_ROOT = '<?php echo $this->_var['APP_ROOT']; ?>';
var LOADER_IMG = '<?php echo $this->_var['TMPL']; ?>/images/lazy_loading.gif';
var ERROR_IMG = '<?php echo $this->_var['TMPL']; ?>/images/image_err.gif';
var send_span = <?php 
$k = array (
  'name' => 'app_conf',
  'v' => 'SEND_SPAN',
);
echo $k['name']($k['v']);
?>000;
<?php if (app_conf ( "APP_MSG_SENDER_OPEN" ) == 1 && $this->_var['CRON_COUNT'] > 0): ?>
var IS_RUN_CRON = 1;
<?php else: ?>
var IS_RUN_CRON = 0;
<?php endif; ?>
var DEAL_MSG_URL = '<?php
echo parse_url_tag("u:cron#deal_msg_list|"."".""); 
?>';
</script>
<?php echo $this->fetch('inc/define_js_url.html'); ?>
<script type="text/javascript" src="<?php echo $this->_var['APP_ROOT']; ?>/public/runtime/<?php echo  APP_NAME;?>/lang.js"></script>
<script type="text/javascript" src="<?php 
$k = array (
  'name' => 'parse_script',
  'v' => $this->_var['pagejs'],
  'c' => $this->_var['cpagejs'],
);
echo $k['name']($k['v'],$k['c']);
?>"></script>

</head>
<body>	

<div class="user_login_logo_row wrap">
				<a class="link" href="<?php echo $this->_var['APP_ROOT']; ?>/">
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
                </a>
</div>
<div class="blank"></div>
<!-- 登录主区域 -->
<form name="login_form" id="page_login_form" type="post" action="<?php
echo parse_url_tag("u:user#dologin|"."".""); 
?>">
<div class="user_login_page">
	<div class="user_login_main">
		<div class="user_login_box">
			<ul>
				<li>快速登录</li>
				<li class="regist_link"><a href="<?php
echo parse_url_tag("u:user#regist|"."".""); 
?>">免费注册</a></li>
			</ul>
			<div class="box_main">
					<div class="user_key_row">
					<input type="text" class="user_key ui-textbox" name="user_key" holder="请输入邮箱/手机/用户名" />				
					</div>	
					<div class="user_pwd_row">
					<input type="password" class="user_pwd ui-textbox" name="user_pwd" holder="请输入密码" />
					</div>	
					<div class="user_verify_row">
					<input type="text" class="user_verify ui-textbox" name="user_verify" holder="验证码" />
					<span id="page_login_verify"><?php 
$k = array (
  'name' => 'verifyimg',
);
echo $this->_hash . $k['name'] . '|' . base64_encode(serialize($k)) . $this->_hash;
?></span>
					</div>
					<div class="user_login_row">
						<a href="javascript:void(0);" class="login_btn" id="page_login_btn">登录</a>
						<input type="submit" style="display:none;" />
					</div>
					<div class="user_info_row">
					<input type="checkbox" value="1" name="save_user"  class="save_user_info" />
					<label>保存登录信息，两周内免登录</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="<?php
echo parse_url_tag("u:user#getpwd|"."".""); 
?>">忘记密码</a>
					</div>	
					<div class="user_info_row">
					<?php 
$k = array (
  'name' => 'load_api',
  'type' => '0',
);
echo $this->_hash . $k['name'] . '|' . base64_encode(serialize($k)) . $this->_hash;
?>
					</div>					
					
			</div>
			<div class="box_foot"></div>
		</div>
	</div>
</div>
</form>
<!-- 登录主区域 -->
<?php echo $this->fetch('inc/footer.html'); ?>