// JS Palindrome checker

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g; //need to research this more
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 palindrome("faceless man");

//  this returns as False, whereas "mom" returns true


// Returning a string in alphabetical order

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("scorpion"));

// returns as "cinooprs"


// Returning a string with each word starting with a capital letter

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("it has begun, your soul is mine"));

// returns as It Has Begun, Your Soul Is Mine


// Script that accepts string is parameter, returning that string with longest word

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Where in the world is Carmen San Diego?'));

// returns "Carmen"


// Script that accepts string as paramter, returning string with number of vowels

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Kilisitina Maile")); 

//  returns "8"


// Checking if number is prime or not

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(4));

// returns "False" since 4 is not a prime number


// Take an array of numbers and return the second lowest and second highest values

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++) //need to figure out why j is used...
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([5,9,13,25,32,55]));

// returns 9, 32


// Script that lists number of occurences for each letter in a string

function count(string) {
  let string1 = string.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}
count("heisapedanticpontificatinpretentiousbastardabeligerentoldfartaworthlesssteampingpileofcowdungfiguratvelyspeaking");
"a 11"
"b 2"
"c 3"
"d 4"
"e 12"
"f 4"
"g 5"
"h 2"
"i 11"
"k 1"
"l 5"
"m 1"
"n 8"
"o 6"
"p 6"
"r 6"
"s 7"
"t 11"
"u 3"
"v 1"
"w 2"
"y 1"


// Conditional Statement to display the largest of 5 numbers

a=-23;
b=-5;
c=-45;
d= -10;
f=-4;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

// returns "-4"


// Convert string to an array of words

string_to_array = function (str) {
  return str.trim().split(" ");
};
console.log(string_to_array("Brian Earl Spilner"));

// returns with ["Brian", "Earl", "Spilner"]


// 