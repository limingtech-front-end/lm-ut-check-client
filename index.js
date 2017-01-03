function isClient(regexp){
	return regexp.test(navigator.userAgent)
}

export default {
	isAndroid(){
		return isClient(/Android/i)
	},
	isIos(){
		return isClient(/iPhone|iPad|iPod/i)
	},
	isBlackBerry(){
		return isClient(/BlackBerry/i)
	},
	isWinPhone(){
		return isClient(/IEMobile/i)
	},
	isWechat(){
		return isClient(/MicroMessenger/i)
	}
}
