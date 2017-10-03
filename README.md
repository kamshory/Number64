# Number64

number64 is script to encode and decode decimal to 64-based number. The 64-based number represented by 0-9, A-Z, a-z, -, and _.

64-based number is used to shortening decimal number i.e to generate QR code.

To create QR-Code, the programmer needs to shorten the content so that the resulting pixel size becomes larger and easier to read by the scanner. For autoincrement ID, the programmer can convert it to 64-numbered symbol. The code for conversion from base 10 to base 64 in the JavaScript language is as follows:

```JavaScript
var number64 = {
encode:function(input)
{
	var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
	var inp = input;
	var chr = '';
	var val = 0;
	var ret = '';
	while(inp > 0)
	{
		val = (inp) % 64;
		chr = key[val];
		inp = parseInt(inp/64);
		ret = chr+ret;
	}
	if(ret.substr(0, 1) == '0')
	{
		ret = ret.substr(1);
	}
	return ret;
},
decode:function(input)
{
	var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
	var inp = input;
	var chr = '';
	var val = 0;
	var ret = 0;
	var exponent = 0;
	while(inp.length > 0)
	{
		chr = inp.substr(inp.length - 1);
		val = key.indexOf(chr);
		ret += val * Math.pow(64, exponent);
		exponent++;
		inp = inp.substr(0, inp.length - 1);
	}
	return ret;
}
}
```


Using

```JavaScript
console.log(number64.encode(123456)); // --> "U90"
console.log(number64.decode("U90")); // --> 123456
```

