//************Strings is a sequence of characters used to represent text******************


//*********create string**********
let str = "JavaScript Langauage";       
console.log("str = " , str);      //str =  JavaScript Langauage
let str2 = 'Valid';
console.log("str2 = " , str2)     //str2 =  Valid


//*********inbuild functions***********

//**length of string**
console.log("length of str = " , str.length);       //length of str =  20
console.log("length of str = " , str2.length);      //length of str =  5

//**Positions**
console.log(str[6]);    // r


//******    Template literal    *******

/*Template literal :- special type of string . It is a way to embedded expression in strings.
written inside backticks(` `).*/
let specialString = `This is a template literal.`;
console.log(specialString);            //This is a template literal.
console.log("type = " , typeof(specialString));   //type =  string

//Normal object
let obj = {
    item : "pen",
    price : 10,
};
console.log("The cost of" , obj.item , " is" , obj.price , "rupees.");      //The cost of pen  is 10 rupees.

/*String interpolation :- To create strings by doing substitution of placeholders
Syntax
    `string text ${expression} string text
*/
let output = `The cost of ${obj.item} is ${obj.price} rupees.`  //string interpolation
console.log(output);    //The cost of pen is 10 rupees.

let Sum = `The sum of two and three is ${2+3}`;
console.log(Sum);       //The sum of two and three is 5


//*****escape characters : \n (next or new line) , \t (tab space) ******
let str3 = "Javascript \n Language";
console.log("str3 = " , str3);      /*str3 =  Javascript 
                                        Language*/
console.log("Length of str3 is : " , str3.length);  //Length of str3 is :  21


//***********   String methods  *************
//String methods or functions :Block of code to manipulate a string

//Strings are immutable
console.log(str);   //JavaScript Langauage

//******* toUpperCase() : All characters to uppercase *******
console.log(str.toUpperCase());     //JAVASCRIPT LANGAUAGE

//******* toLowerCase() : All characters to lowercase ***********
console.log(str.toLowerCase());     //javascript langauage

// ******** trim() : Removes starting and ending whitespaces only ********
console.log(str.trim())     //JavaScript Langauage

// ******** slice(start, end) : returns a part of a string . syntax[str.slice(start,end)]).ending index is non inclusive ********
console.log(str.slice(3,6)); //aSc
console.log(str.slice(4));  //from 4th index to last index //Script Langauage

// ******** str.concat(str1) : Join 2 strings ********
console.log(str.concat(str2));   //JavaScript LangauageValid
console.log(str + str2 + str3);  /*JavaScript LangauageValidJavascript 
                                    Language*/

// ******** str.replace(oldVal , newVal) : replace character or substring from the string.  *************
console.log(str.replace("J" , "L")); // replace first found J with L only   //LavaScript Langauage
console.log(str.replaceAll("a" , "p"));  //replace all the a from the string with p   //JpvpScript Lpngpupge
console.log(str.replace("Java" , "Kawa"));  //KawaScript Langauage


// *********  str.charAt(index) : Returns a character from the string   *********
console.log(str.charAt(4));   //S

//  ******** String is immutable *********
let str4 = "ILoveJS";
str[0] = "U";
console.log(str4);  //Not changed. For such changes use replace()   //ILoveJS






