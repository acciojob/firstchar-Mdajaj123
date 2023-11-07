function firstChar(text) {
  // your code here
	let n=text.length;
	for(let i=0;i<n;i++){
		if(text.charAt(i)==""){
			return "";
		}
		
	}
	return text.charAt(0)
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
