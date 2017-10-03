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
