# 网络安全专题

## 1. 同源策略&跨域解决
* 1. 协议、域名和端口都相同，就是同源

## 2. XSS跨站脚本
* 1. 防止：对输入脚本进行过滤，cookie的httpOnly属性，添加验证码输入

## 3. CSRF跨站请求伪造，
* 1. 防止：服务器检验Refer和Orgin，记录了来源网站，eg：微信支付的测试环节
* 2. sameSite属性：static(完全禁止第三方Cookie)、lax(大部分不会，a,link,get表单可以发送)、none(设为默认，必须配合secure：https使用)
* 3. CSRF Token校验