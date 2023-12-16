function firstChar(str) {
  // your code here
 //    if(text.charAt(0)==""){
	// 	return "";
	// }
	// return text.charAt(0)
	  // Remove leading and trailing spaces
  const trimmedStr = str.trim();

  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return '';
  }

  // Return the first character of the trimmed string
  return trimmedStr.charAt(0);

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
