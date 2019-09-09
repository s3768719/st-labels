//function addLabel(method) {
//	var div = document.createElement('div');
//	document.body.appendChild(div);
//	div.classList.add("box");
//	div.innerHTML = '';
//	var d = new Date();
//	var month = d.getMonth() + 1;
//	var day = d.getDate();
//	var year = d.getYear() - 100;
//	if (method == 'prm')
//	{
//		prmCount = parseInt(document.getElementById("prmC").textContent);
//		prmCount ++;
//		document.getElementById("prmC").innerHTML = prmCount;
//		div.innerHTML = '<h1>STARTRACK</h1><h1>PREMIUM</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
//	}	
//	if (method == 'exp')
//	{
//		expCount = parseInt(document.getElementById("expC").textContent);
//		expCount ++;
//		document.getElementById("expC").innerHTML = expCount;
//		div.innerHTML = '<h1>STARTRACK</h1><h1>EXPRESS</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
//	}	
//	if (method == 'mix')
//	{
//		mixCount = parseInt(document.getElementById("mixC").textContent);
//		mixCount ++;
//		document.getElementById("mixC").innerHTML = mixCount;
//		div.innerHTML = '<h1>STARTRACK</h1><h1>MIX PRM + EXP</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
//	}
//	
//}

function addLabel(method) {
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.classList.add("box");
	div.innerHTML = '';
	var d = new Date();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var year = d.getYear() - 100;
	if (method == 'prm')
	{
//		prmCount = parseInt(document.getElementById("prmC").textContent);
//		prmCount ++;
//		document.getElementById("prmC").innerHTML = prmCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>PREMIUM</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}	
	if (method == 'exp')
	{
//		expCount = parseInt(document.getElementById("expC").textContent);
//		expCount ++;
//		document.getElementById("expC").innerHTML = expCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>EXPRESS</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}	
	if (method == 'mix')
	{
//		mixCount = parseInt(document.getElementById("mixC").textContent);
//		mixCount ++;
//		document.getElementById("mixC").innerHTML = mixCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>MIX PRM + EXP</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}
	
}

function up(label) {
	if (label == 'prm') {
		prmCount = parseInt(document.getElementById("prmC").textContent);
		prmCount ++;
		document.getElementById("prmC").innerHTML = prmCount;
	}
	if (label == 'exp') {
		expCount = parseInt(document.getElementById("expC").textContent);
		expCount ++;
		document.getElementById("expC").innerHTML = expCount;
	}
	if (label == 'mix') {
		mixCount = parseInt(document.getElementById("mixC").textContent);
		mixCount ++;
		document.getElementById("mixC").innerHTML = mixCount;
	}
}

function down(label) {
	if (label == 'prm') {
		prmCount = parseInt(document.getElementById("prmC").textContent);
		if (prmCount > 0) {
			prmCount --;
			document.getElementById("prmC").innerHTML = prmCount;
		}
	}
	if (label == 'exp') {
		expCount = parseInt(document.getElementById("expC").textContent);
		if (expCount > 0) {
			expCount --;
			document.getElementById("expC").innerHTML = expCount;
		}
	}
	if (label == 'mix') {
		mixCount = parseInt(document.getElementById("mixC").textContent);
		if (mixCount > 0) {
			mixCount --;
			document.getElementById("mixC").innerHTML = mixCount;
		}
	}
}

function resetCount() {
	document.getElementById("prmC").innerHTML = 0;
	document.getElementById("expC").innerHTML = 0;
	document.getElementById("mixC").innerHTML = 0;
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function printPage() {
	
	removeElementsByClass('box');
	removeElementsByClass('tall-box');
	
	prmCount = parseInt(document.getElementById("prmC").textContent);
	expCount = parseInt(document.getElementById("expC").textContent);
	mixCount = parseInt(document.getElementById("mixC").textContent);
	
	for (var i = 0; i < prmCount; i++) {
		addLabel('prm');
	}
	for (var i = 0; i < expCount; i++) {
		addLabel('exp');
	}
	for (var i = 0; i < mixCount; i++) {
		addLabel('mix');
	}
	
	window.print();
}

function printMulti() {
	removeElementsByClass('tall-box');
	removeElementsByClass('box');
	var shipMethod = document.getElementById("ship").value;
	var labelCount = document.getElementById("f1").value;
	var orderNum = document.getElementById("f2").value;
	var custName = document.getElementById("f3").value;
	var addr1 = document.getElementById("f4").value;
	var addr2 = document.getElementById("f5").value;
	var phone = document.getElementById("f6").value;
	
	var pccg = "<span class='pccg'>From PC Case Gear<br>800 Wellington Road<br>Rowville VIC 3178<br>Phone 03 9560 2122</span>";
	var iText = pccg + "<span class='multi-text'>" + "<div class='right'>" + shipMethod +"</div><br>" + orderNum + "<br>" + custName + "<br>" + addr1 + "<br>" + addr2 + "<br>" + phone + "<br>";

	//document.getElementById("testBox").innerHTML = text;
	for (var i = 1; i < labelCount; i++) {
	
		var div = document.createElement('div');
		var leftDiv = document.createElement('div');
		document.body.appendChild(div);
		//document.div.appendChild(leftDiv);
		div.classList.add("tall-box");
		//leftDiv.classList("leftBox");
		div.innerHTML = iText + "<div class='right bottom'>" + (i+1) + "|" + labelCount + "</div></span>";		
	}
	
	window.print();
}
