/*
	Copyright (C) 2016 Zach Zimmerle
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
	files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
	modify, merge, publish, distribute, and/or sublicense copies of the Software, and to permit persons to whom the Software is 
	furnished to do so, subject to the following conditions:
		1.	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
			Software.
		2. 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
			WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL ZACH ZIMMERLE 
			BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
			FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		3.	Except as contained in this notice, the name of the Zach Zimmerle shall not be used in advertising or otherwise to 
			promote the sale, use or other dealings in this Software without prior written authorization from Zach Zimmerle.
		4. 	This software shall not be sold or used commericially without prior written authorization from Zach Zimmerle.
	
	
	this contains:
		1 array
			.englishAlphabet //the english alphabet
	
		2 objects
			.englishLetterFrequency 	
				//frequency data for the english language
				//in percentages
			.letterFrequency 			
				//frequency data produced by the frequencyCount function
				//in percentages
				//values default to english values
	
		4 functions
			.converter(text)			
				//converts a string into an array w/o punctuation or spaces. 
				//converts single digits to their corresponding words. 
				//does not do longer numbers yet so "103.4" becomes "onezerothreefour" rather than "onehundredandthreepointfour"
				//I'll fix that later if i ever come back to this project
	
			.frequencyCount(text)		
				//does a frequency analysis of an inputted string
				//puts the data in .letterFrequency
	
			.viginere(text1,text2)		
				//accepts two strings
				//first is plaintext
				//second is the key
				//uses the viginere square cipher and the key to encrypt the plaintext, producing ciphertext
				//returns ciphertext as a string of letters w/o sentence breaks, punctuation, etc
	
			.fred 						
				//returns "FRED LIVES"
				//does nothing else 
*/


var zzcryptography = function(){
	this.englishAlphabet = [
		'a', 
		'b', 
		'c', 
		'd', 
		'e', 
		'f', 
		'g', 
		'h', 
		'i', 
		'j', 
		'k', 
		'l', 
		'm', 
		'n', 
		'o', 
		'p', 
		'q', 
		'r', 
		's', 
		't', 
		'u', 
		'v', 
		'w', 
		'x', 
		'y', 
		'z'
		];
	this.englishLetterFrequency = {
		a:8.167, 
		b:1.492, 
		c:2.782, 
		d:4.253, 
		e:12.702, 
		f:2.228, 
		g:2.015, 
		h:6.094, 
		i:6.966, 
		j:0.153, 
		k:0.772, 
		l:4.025, 
		m:2.406, 
		n:6.749, 
		o:7.507, 
		p:1.929, 
		q:0.095, 
		r:5.987, 
		s:6.327, 
		t:9.056, 
		u:2.758, 
		v:0.978, 
		w:2.360, 
		x:0.15, 
		y:1.974, 
		z:0.074
		};
	this.letterFrequency = {
		a:8.167, 
		b:1.492, 
		c:2.782, 
		d:4.253, 
		e:12.702, 
		f:2.228, 
		g:2.015, 
		h:6.094, 
		i:6.966, 
		j:0.153, 
		k:0.772, 
		l:4.025, 
		m:2.406, 
		n:6.749, 
		o:7.507, 
		p:1.929, 
		q:0.095, 
		r:5.987, 
		s:6.327, 
		t:9.056, 
		u:2.758, 
		v:0.978, 
		w:2.360, 
		x:0.15, 
		y:1.974, 
		z:0.074
		};
	this.converter = function( text ){
		var originalText = text;
	
		originalText = originalText.replace(/\s+/g, '');
		originalText = originalText.toLowerCase();
		originalText = originalText.replace(/[.,/;'\-=`~_+":{}()<>?]/g, "");
	
		originalText = originalText.replace('1', 'one');
		originalText = originalText.replace('2', 'two');
		originalText = originalText.replace('3', 'three');
		originalText = originalText.replace('4', 'four');
		originalText = originalText.replace('5', 'five');
		originalText = originalText.replace('6', 'six');
		originalText = originalText.replace('7', 'seven');
		originalText = originalText.replace('8', 'eight');
		originalText = originalText.replace('9', 'nine');
		originalText = originalText.replace('0', 'zero');
	
	  	var convertedText = originalText.split("");
	  	return convertedText;
		};
	this.frequencyCount = function( text ){
		var originalText = text;
		var textArray = zzcryptography().converter(text);
		var letterCount = {
			a:0,
			b:0,
			c:0,
			d:0,
			e:0,
			f:0,
			g:0,
			h:0,
			i:0,
			j:0,
			k:0,
			l:0,
			m:0,
			n:0,
			o:0,
			p:0,
			q:0,
			r:0,
			s:0,
			t:0,
			u:0,
			v:0,
			w:0,
			x:0,
			y:0,
			z:0
			};
		var totalLetterCount;
	
		for (var i = textArray.length; i >= 0; i--){
			switch(textArray[i]){
				case 'a':
					letterCount.a += 1;
					break;
				case 'b':
					letterCount.b += 1;
					break;
				case 'c':
					letterCount.c += 1;
					break;
				case 'd':
					letterCount.d += 1;
					break;
				case 'e':
					letterCount.e += 1;
					break;
				case 'f':
					letterCount.f += 1;
					break;
				case 'g':
					letterCount.g += 1;
					break;
				case 'h':
					letterCount.h += 1;
					break;
				case 'i':
					letterCount.i += 1;
					break;
				case 'j':
					letterCount.j += 1;
					break;
				case 'k':
					letterCount.k += 1;
					break;
				case 'l':
					letterCount.l += 1;
					break;
				case 'm':
					letterCount.m += 1;
					break;
				case 'n':
					letterCount.n += 1;
					break;
				case 'o':
					letterCount.o += 1;
					break;
				case 'p':
					letterCount.p += 1;
					break;
				case 'q':
					letterCount.q += 1;
					break;
				case 'r':
					letterCount.r += 1;
					break;
				case 's':
					letterCount.s += 1;
					break;
				case 't':
					letterCount.t += 1;
					break;
				case 'u':
					letterCount.u += 1;
					break;
				case 'v':
					letterCount.v += 1;
					break;
				case 'w':
					letterCount.w += 1;
					break;
				case 'x':
					letterCount.x += 1;
					break;
				case 'y':
					letterCount.y += 1;
					break;
				case 'z':
					letterCount.z += 1;
					break;};
			};
		for (var i = 0; i < 26; i++) {
			totalLetterCount += letterCount[englishAlphabet[i]];
			};

		var letterCountConvert = function(a){
			return ((a * 100)/totalLetterCount);
			};
	
		// zzcryptography().letterFrequency[member] = letterCountConvert(letterCount[member]);
		
		/*
			zzcryptography().letterFrequency.a = letterCountConvert(letterCount.a);
			zzcryptography().letterFrequency.b = letterCountConvert(letterCount.b);
			zzcryptography().letterFrequency.c = letterCountConvert(letterCount.c);
			zzcryptography().letterFrequency.d = letterCountConvert(letterCount.d);
			zzcryptography().letterFrequency.e = letterCountConvert(letterCount.e);
			zzcryptography().letterFrequency.f = letterCountConvert(letterCount.f);
			zzcryptography().letterFrequency.g = letterCountConvert(letterCount.g);
			zzcryptography().letterFrequency.h = letterCountConvert(letterCount.h);
			zzcryptography().letterFrequency.i = letterCountConvert(letterCount.i);
			zzcryptography().letterFrequency.j = letterCountConvert(letterCount.j);
			zzcryptography().letterFrequency.k = letterCountConvert(letterCount.k);
			zzcryptography().letterFrequency.l = letterCountConvert(letterCount.l);
			zzcryptography().letterFrequency.m = letterCountConvert(letterCount.m);
			zzcryptography().letterFrequency.n = letterCountConvert(letterCount.n);
			zzcryptography().letterFrequency.o = letterCountConvert(letterCount.o);
			zzcryptography().letterFrequency.p = letterCountConvert(letterCount.p);
			zzcryptography().letterFrequency.q = letterCountConvert(letterCount.q);
			zzcryptography().letterFrequency.r = letterCountConvert(letterCount.r);
			zzcryptography().letterFrequency.s = letterCountConvert(letterCount.s);
			zzcryptography().letterFrequency.t = letterCountConvert(letterCount.t);
			zzcryptography().letterFrequency.u = letterCountConvert(letterCount.u);
			zzcryptography().letterFrequency.v = letterCountConvert(letterCount.v);
			zzcryptography().letterFrequency.w = letterCountConvert(letterCount.w);
			zzcryptography().letterFrequency.x = letterCountConvert(letterCount.x);
			zzcryptography().letterFrequency.y = letterCountConvert(letterCount.y);
			zzcryptography().letterFrequency.z = letterCountConvert(letterCount.z);*/
		
		for (var i = 0; i < 26; i++) {
			zzcryptography().letterFrequency[englishAlphabet[i]] = letterCountConvert(letterCount[englishAlphabet[i]]);
			}
		};
	this.viginere = function(a,b){
		var originalText = a;
		var plaintext = zzcryptography().converter(a);
		var originalKey = b;
		var keytext = zzcryptography().converter(b);
		var alphabet = zzcryptography().englishAlphabet;
		var ciphertextArray = [];
	
		for (var i = 0; i < plaintext.length; i++) {
			var keyIndex = i % keytext.length; //where are we in the key
			var plaintextLetterIndex = alphabet.indexof(plaintext[i]); //what letter are we converting from (more specifically: what index in the alphabet array represents it)
			var keyLetterIndex = alphabet.indexof(keytext[keyIndex]); //what letter is the key right now (more specifically: what index in the alphabet array represents it)
			var targetIndex = (plaintextLetterIndex + keyLetterIndex) % alphabet.length;
			var ciphertextLetter = alphabet[targetIndex];
			ciphertextArray.push(ciphertextLetter);
			};
	
		var ciphertext = ciphertextArray.join('');
	
		return ciphertext;
		};
	this.fred = function(){
		var fredStatus;
		if (1 == 1) {
			fredStatus = 'FRED LIVES';
			};
		return fredStatus;
		};
	}