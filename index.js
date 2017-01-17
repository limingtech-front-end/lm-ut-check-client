function isClient(regexp){
	return regexp.test(navigator.userAgent)
}

module.exports= {
	isAndroid:function(){
		return isClient(/Android/i)
	},
	isIos:function(){
		return isClient(/iPhone|iPad|iPod/i)
	},
	isBlackBerry:function(){
		return isClient(/BlackBerry/i)
	},
	isWinPhone:function(){
		return isClient(/IEMobile/i)
	},
	isWechat:function(){
		return isClient(/MicroMessenger/i)
	}
}
