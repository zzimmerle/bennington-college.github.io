

var frequencycount = function(a){
	//important reference stuff
	var englishAlphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
	var englishLetterCount = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228, 2.015, 6.094, 6.966, 0.153, 0.772, 4.025, 2.406, 6.749, 7.507, 1.929, 0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.360, 0.15, 1.974, 0.074];
	
	//take user text
	var userText = a;
	
	//turn user text into something useful
	userText = userText.replace(/\s+/g, '');
	userText = userText.toLowerCase();
	userText = userText.replace(/[.,/;'\-=`~_+":{}()<>?]/g, "");
	userText = userText.replace(/1234567890/g, "");
	var userTextArray = userText.split("");
	
	//set up arrays to recieve data
	var letterCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var letterCountPercent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	
	//actually count
	for (var i = 0; i - 1 < userTextArray.length; i++) {
			for(var j = 0; j - 1 < userTextArray.length; j++){
		      	if(userTextArray[j] == englishAlphabet[i]){
		      		letterCount[i]++;
		      	}
		}	
	}
	
	//convert to %
	for (var k = 0; k < letterCount.length; k++) {
		letterCountPercent[k] = 100*(userText.length/letterCount[k]);
	}
	
	this.usertext = letterCountPercent[];
	this.english = englishLetterCount[];
}