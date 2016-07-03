// 选择器
var $ = function(selector) {
	if (!selector) { return []; }
	var arrEle = [];
	if (document.querySelectorAll) {
		arrEle = document.querySelectorAll(selector);
	} else {
		var oAll = document.getElementsByTagName("div"), lAll = oAll.length;
		if (lAll) {
			var i = 0;
			for (i; i<lAll; i+=1) {
				if (/^\./.test(selector)) {
					if (oAll[i].className === selector.replace(".", "")) {
						arrEle.push(oAll[i]);
					}
				} else if(/^#/.test(selector)) {
					if (oAll[i].id === selector.replace("#", "")) {
						arrEle.push(oAll[i]);
					}
				}
			}
		}
	}
	return arrEle;
};

var eleDustbin = $('.dustbin')[0],
		eleDrags = $('.draglist'),
		lDrags = eleDrags.length,
		eleRemind = $('.dragremind')[0],
		eleDrag = null;

for(var i = 0; i<lDrags; i++) {
	eleDrags[i].onselectstart = function () {
		return false;
	};
	eleDrags[i].ondragstart = function (ev) {
		/* 拖拽开始 */
		// 拖拽效果
		ev.dataTransfer.effectAllowed = 'move';
		ev.dataTransfer.setData('text', ev.target.innerHTML);
		ev.dataTransfer.setDragImage(ev.target, 0, 0);
		eleDrag = ev.target;
		return true;
	};
	eleDrags[i].ondragend = function (ev) {
		/* 拖拽结束 */
		ev.dataTransfer.clearData('text');
		eleDrag = null;
		return false;
	};
}

eleDustbin.ondragover = function(ev) {
    /*拖拽元素在目标元素头上移动的时候*/
    ev.preventDefault();
    return true;
};

eleDustbin.ondragenter = function(ev) {
    /*拖拽元素进入目标元素头上的时候*/
    this.style.color = "#ffffff";
    return true;
};
eleDustbin.ondrop = function(ev) {
    /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
    if (eleDrag) {
        eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
        eleDrag.parentNode.removeChild(eleDrag);
    }
    this.style.color = "#000000";
    return false;
};
