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
		prmCount = parseInt(document.getElementById("prmC").textContent);
		prmCount ++;
		document.getElementById("prmC").innerHTML = prmCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>PREMIUM</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}	
	if (method == 'exp')
	{
		expCount = parseInt(document.getElementById("expC").textContent);
		expCount ++;
		document.getElementById("expC").innerHTML = expCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>EXPRESS</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}	
	if (method == 'mix')
	{
		mixCount = parseInt(document.getElementById("mixC").textContent);
		mixCount ++;
		document.getElementById("mixC").innerHTML = mixCount;
		div.innerHTML = '<h1>STARTRACK</h1><h1>MIX PRM + EXP</h1><h1>DATE: ' + day + '/' + month + '/' + year + '</h1><h1>PC Case Gear</h1>';	
	}
	
}


function printPage() {
  window.print();
}