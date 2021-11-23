var arr = document.getElementsByClassName('menus_item');
for (var i = 0; i < arr.length; i++) {
	arr[i].classList.add('wowpanels');
}
var arr = document.getElementsByClassName('card-tag-cloud');
for (var i = 0; i < arr.length; i++) {
	arr[i].classList.add('wowpanels');
}
var arr = document.getElementsByClassName('title');
for (var i = 0; i < arr.length; i++) {
	arr[i].classList.add('wowpanels');
}
var arr = document.getElementsByClassName('article-title');
for (var i = 0; i < arr.length; i++) {
	arr[i].classList.add('wowpanels');
}
// ԭ��������
var ANGLE = 45; //���Ƹ����Ƕȣ���ֵԽ�󣬸�������Խ��

var panel = document.getElementsByClassName('wowpanels');
for (var i = 0; i < panel.length; i++) {
	floatable(panel[i]);
}
function floatable(content) {
	content.addEventListener('mouseout', e => {
		content.style.transform = `perspective(300px)
								   rotateX(0deg)
								   rotateY(0deg)
								   rotateZ(0deg)`;
	});
	content.addEventListener('mousemove', e => {
		var w = content.clientWidth;
		var h = content.clientHeight;
		var y = (e.offsetX - w * 0.5) / w * ANGLE;
		var x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

		content.style.transform = `perspective(300px)
								   rotateX(${x}deg)
								   rotateY(${y}deg)`;
	});
}