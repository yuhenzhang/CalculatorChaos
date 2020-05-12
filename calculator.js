var clicks = 0; // starts timer when begin button pressed
var counter = 0; // counts number of answered solutions
var clicks2 = 0; // starts timer when begin button pressed
var counter2 = 0; // counts number of answered solutions
var clicks3 = 0;  // starts timer when begin button pressed
var counter3 = 0; // counts number of answered solutions
var clicks4 = 0; // starts timer when begin button pressed
var counter4 = 0; // counts number of answered solutions
var test1; // sets timer interval
var test2; // sets timer interval
var test3; // sets timer interval
var test4; // sets timer interval
var timeStarted = false; // boolean variable that changes to true when timer starts
var timeStarted2 = false; // boolean variable that changes to true when timer starts
var timeStarted3 = false; // boolean variable that changes to true when timer starts
var timeStarted4 = false; // boolean variable that changes to true when timer starts

// runs timer
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, display) {
    var minutes;
    var seconds;
    var timer = duration, minutes, seconds;
    test1 = setInterval( function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } // if

        if (minutes == 0 && seconds == 0) {
            setTimeout(lose1, 400);
        } // if

    }, 1000);
} // startTimer


// starts timer and hides lock screen so calculator works
// edited from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function getTime() {

    changeVisibility("invisibleClickBegin");

    if (clicks == 0) {
        var fourMinutes = 60 * 4;
        display = document.querySelector('#time');
        startTimer(fourMinutes, display);
		timeStarted = true;
    } // if
    clicks++;
} // getTime

// runs timer
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer2(duration, display) {
    var minutes;
    var seconds;
    var timer = duration, minutes, seconds;
    test2 = setInterval( function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } // if

        if (minutes == 0 && seconds == 0) {
            setTimeout(lose2, 400);
        } // if

    }, 1000);
} // startTimer2

// runs timer
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer3(duration, display) {
    var minutes;
    var seconds;
    var timer = duration, minutes, seconds;
    test3 = setInterval( function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } // if

        if (minutes == 0 && seconds == 0) {
            setTimeout(lose3, 400);
        } // if

    }, 1000);
} // startTimer3

// runs timer
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer4(duration, display) {
    var minutes;
    var seconds;
    var timer = duration, minutes, seconds;
    test4 = setInterval( function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } // if
		
        if (minutes == 0 && seconds == 0) {
            setTimeout(lose4, 400);
        } // if

    }, 1000);
} // startTimer4

// starts timer and hides lock screen so calculator works
// edited from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function getTime2() {
	
	changeVisibility("invisibleClickBegin2");

    if (clicks2 == 0) {
        var threeMinutes = 60 * 3;
        display = document.querySelector('#time2');
        startTimer2(threeMinutes, display);
		timeStarted2 = true;
    } // if
    clicks2++;
} // getTime2

// starts timer and hides lock screen so calculator works
// edited from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function getTime3() {
	
	changeVisibility("invisibleClickBegin3");

    if (clicks3 == 0) {
        var fiveMinutes = 60 * 5;
        display = document.querySelector('#time3');
        startTimer3(fiveMinutes, display);
		timeStarted3 = true;
    } // if
    clicks3++;
} // getTime3

// starts timer and hides lock screen so calculator works
// edited from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function getTime4() {

	changeVisibility("invisibleClickBegin4");

    if (clicks4 == 0) {
        var threeMinutes2 = 60 * 3;
        display = document.querySelector('#time4');
        startTimer4(threeMinutes2, display);
		timeStarted4 = true;
    } // if
    clicks4++;
} // getTime4




// displays the first level
function level1() {
    changeVisibility("firstLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin");
    changeVisibility("calculator1");
    changeVisibility("numberTwo");
    changeVisibility("numberThree");
    changeVisibility("times");
    changeVisibility("plus");
    changeVisibility("clear");
    changeVisibility("equals");
	changeVisibility("delete");
    changeVisibility("enterStuff");
    document.getElementById("enterStuff").innerHTML = "";
} // level1

// displays the second level
function level2() {
    changeVisibility("secondLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin2");
    changeVisibility("calculator2");
    changeVisibility("numberFive");
    changeVisibility("numberTwo2");
    changeVisibility("times2");
    changeVisibility("minus");
    changeVisibility("clear2");
    changeVisibility("equals2");
	changeVisibility("delete2");
    changeVisibility("enterStuff2");
    document.getElementById("enterStuff2").innerHTML = "";
} // level2

// displays the third level
function level3() {
    changeVisibility("thirdLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin3");
    changeVisibility("calculator3");
    changeVisibility("numberOne");
    changeVisibility("numberEight");
    changeVisibility("numberSix");
    changeVisibility("minus2");
    changeVisibility("sqrt");
    changeVisibility("clear3");
    changeVisibility("equals3");
	changeVisibility("delete3");
    changeVisibility("enterStuff3");
    document.getElementById("enterStuff3").innerHTML = "";
} // level3


// displays the fourth level
function level4() {
    changeVisibility("fourthLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin4");
    changeVisibility("calculator4");
    changeVisibility("numberOne2");
    changeVisibility("numberTwo3");
    changeVisibility("numberZero");
    changeVisibility("times3");
    changeVisibility("divide");
    changeVisibility("clear4");
    changeVisibility("equals4");
	changeVisibility("delete4");
    changeVisibility("enterStuff4");
    document.getElementById("enterStuff4").innerHTML = "";
} // level4

// adds a zero to the user input
function buttonZero() {
	document.getElementById("enterStuff4").innerHTML += "0";
} // buttonZero

// adds a 1 to the user input
function buttonOne() {
    document.getElementById("enterStuff3").innerHTML += "1";
    document.getElementById("enterStuff4").innerHTML += "1";
} // buttonOne

// adds a 2 to the user input
function buttonTwo() {
    document.getElementById("enterStuff").innerHTML += "2";
    document.getElementById("enterStuff2").innerHTML += "2";
    document.getElementById("enterStuff4").innerHTML += "2";
} // buttonTwo

// adds a 3 to the user input
function buttonThree() {
    document.getElementById("enterStuff").innerHTML += "3";
} // buttonThree

// adds a 5 to the user input
function buttonFive() {
    document.getElementById("enterStuff2").innerHTML += "5";
} // buttonFive

// adds a 6 to the user input
function buttonSix() {
    document.getElementById("enterStuff3").innerHTML += "6";
} // buttonSix

// adds a 8 to the user input
function buttonEight() {
    document.getElementById("enterStuff3").innerHTML += "8";
} // buttonEight

// add + to input
function buttonPlus() {
    document.getElementById("enterStuff").innerHTML += "+";
} // buttonPlus

// add * to input
function buttonTimes() {
    document.getElementById("enterStuff").innerHTML += "*";
    document.getElementById("enterStuff2").innerHTML += "*";
    document.getElementById("enterStuff4").innerHTML += "*";
} // buttonTimes

// add - to input
function buttonMinus() {
    document.getElementById("enterStuff2").innerHTML += "-";
    document.getElementById("enterStuff3").innerHTML += "-";
} // buttonMinus

// add / to input
function buttonDivide() {
    document.getElementById("enterStuff4").innerHTML += "/";
} // buttonDivide

// gets the input, parses it to integer, square roots it, then displays it
function buttonSqrt() {
	var squareRoot = Math.sqrt(parseInt(document.getElementById("enterStuff3").innerHTML));
	document.getElementById("enterStuff3").innerHTML = squareRoot;
} // buttonSqrt

// deletes the right-most number
function buttonDelete(num) {
    var lvl = ""; // set to the user input of calculator
	
	// chooses which level the input is on
	switch (num) {
		case 1: lvl = "enterStuff";

		break;

		case 2: lvl = "enterStuff2";

		break;

		case 3: lvl = "enterStuff3";

		break;

		case 4: lvl = "enterStuff4";
	} // switch
	
	// takes off the right-most number
	var takeOff = document.getElementById(lvl).innerHTML;
	takeOff = takeOff.substring(0, takeOff.length - 1);
	document.getElementById(lvl).innerHTML = takeOff;
	
} // buttonDelete

// calculates answer and displays on calculator
function buttonEquals() {

    var exp = document.getElementById("enterStuff").innerHTML;
    
	// if there's user input, then evaluates and displays the calculation answer
	if (exp.length != 0) {

		document.getElementById("enterStuff").innerHTML = eval(exp);

		var numbersChecked = [false, false, false, false, false, false, false, false];

		// used to strike through answered solutions
		switch (eval(exp)) {
			case 6:
				document.getElementById("6").style.textDecoration = "line-through";
				numbersChecked[0] = true;
				break;
			case 7:
				document.getElementById("7").style.textDecoration = "line-through";
				numbersChecked[1] = true;
				break;
			case 8:
				document.getElementById("8").style.textDecoration = "line-through";
				numbersChecked[2] = true;
				break;
			case 10:
				document.getElementById("10").style.textDecoration = "line-through";
				numbersChecked[3] = true;
				break;
			case 12:
				document.getElementById("12").style.textDecoration = "line-through";
				numbersChecked[4] = true;
				break;
			case 15:
				document.getElementById("15").style.textDecoration = "line-through";
				numbersChecked[5] = true;
				break;
			case 20:
				document.getElementById("20").style.textDecoration = "line-through";
				numbersChecked[6] = true;
				break;
			case 50:
				document.getElementById("50").style.textDecoration = "line-through";
				numbersChecked[7] = true;
				break;
		} // switch
		
		// counts the number of answered solutions
		for (var i = 0; i <= numbersChecked.length; i++) {
			if (numbersChecked[i] == true) {
				counter++;
			} // if
		} // for
		
		// delays and goes to success screen if 8 solutions are answered
		if (counter == 8) {
			setTimeout(success1, 400);
		} // if

	} // if

} // buttonEquals


// calculates answer and displays on calculator
function buttonEquals2() {
   
    var exp = document.getElementById("enterStuff2").innerHTML;
    
	// if there's user input, then evaluates and displays the calculation answer	
    if (exp.length != 0) {
		document.getElementById("enterStuff2").innerHTML = eval(exp);

		var numbersChecked2 = [false, false, false, false, false, false, false, false];

		// used to strike through answered solutions
		switch (eval(exp)) {
			case -10:
				document.getElementById("-10").style.textDecoration = "line-through";
				numbersChecked2[0] = true;
				break;
			case 1:
				document.getElementById("1").style.textDecoration = "line-through";
				numbersChecked2[1] = true;
				break;
			case 3:
				document.getElementById("3").style.textDecoration = "line-through";
				numbersChecked2[2] = true;
				break;
			case 10:
				document.getElementById("102").style.textDecoration = "line-through";
				numbersChecked2[3] = true;
				break;
			case 24:
				document.getElementById("24").style.textDecoration = "line-through";
				numbersChecked2[4] = true;
				break;
			case 32:
				document.getElementById("321").style.textDecoration = "line-through";
				numbersChecked2[5] = true;
				break;
			case 100:
				document.getElementById("100").style.textDecoration = "line-through";
				numbersChecked2[6] = true;
				break;
			case 625:
				document.getElementById("625").style.textDecoration = "line-through";
				numbersChecked2[7] = true;
				break;
		} // switch

		// counts the number of answered solutions
		for (var i = 0; i <= numbersChecked2.length; i++) {
			if (numbersChecked2[i] == true) {
				counter2++;
			} // if
		} // for

		// delays and goes to success screen if 8 solutions are answered
		if (counter2 == 8) {
			setTimeout(success2, 400);
		} // if

	} // if

} // buttonEquals2

// calculates answer and displays on calculator
function buttonEquals3() {

    var exp = document.getElementById("enterStuff3").innerHTML;

	// if there's user input, then evaluates and displays the calculation answer
	if (exp.length != 0) {
		document.getElementById("enterStuff3").innerHTML = eval(exp);
	
		var numbersChecked3 = [false, false, false, false, false, false, false, false];

		// used to strike through answered solutions
		switch (eval(exp)) {
			case -5:
				document.getElementById("-5").style.textDecoration = "line-through";
				numbersChecked3[0] = true;
				break;
			case 3:
				document.getElementById("32").style.textDecoration = "line-through";
				numbersChecked3[1] = true;
				break;
			case 5:
				document.getElementById("5").style.textDecoration = "line-through";
				numbersChecked3[2] = true;
				break;
			case 13:
				document.getElementById("13").style.textDecoration = "line-through";
				numbersChecked3[3] = true;
				break;
			case 20:
				document.getElementById("202").style.textDecoration = "line-through";
				numbersChecked3[4] = true;
				break;
			case 33:
				document.getElementById("33").style.textDecoration = "line-through";
				numbersChecked3[5] = true;
				break;
			case 82:
				document.getElementById("82").style.textDecoration = "line-through";
				numbersChecked3[6] = true;
				break;
			case 100:
				document.getElementById("1002").style.textDecoration = "line-through";
				numbersChecked3[7] = true;
				break;
		} // switch

		// counts the number of answered solutions
		for (var i = 0; i <= numbersChecked3.length; i++) {
			if (numbersChecked3[i] == true) {
				counter3++;
			} // if
		} // for

		// delays and goes to success screen if 8 solutions are answered
		if (counter3 == 8) {
			setTimeout(success3, 400);
		} // if

	} // if

} // buttonEquals3


// calculates answer and displays on calculator
function buttonEquals4() {
 
	var exp = document.getElementById("enterStuff4").innerHTML;
	
	// if there's user input, then evaluates and displays the calculation answer
	if (exp.length != 0) {
		document.getElementById("enterStuff4").innerHTML = eval(exp);

		var numbersChecked4 = [false, false, false, false, false, false, false, false];

		// used to strike through answered solutions
		switch (eval(exp)) {
			case 3:
				document.getElementById("34").style.textDecoration = "line-through";
				numbersChecked4[0] = true;
				break;
			case 4:
				document.getElementById("4").style.textDecoration = "line-through";
				numbersChecked4[1] = true;
				break;
			case 5:
				document.getElementById("52").style.textDecoration = "line-through";
				numbersChecked4[2] = true;
				break;
			case 6:
				document.getElementById("62").style.textDecoration = "line-through";
				numbersChecked4[3] = true;
				break;
			case 7:
				document.getElementById("72").style.textDecoration = "line-through";
				numbersChecked4[4] = true;
				break;
			case 8:
				document.getElementById("83").style.textDecoration = "line-through";
				numbersChecked4[5] = true;
				break;
			case 9:
				document.getElementById("9").style.textDecoration = "line-through";
				numbersChecked4[6] = true;
				break;
			case 10:
				document.getElementById("103").style.textDecoration = "line-through";
				numbersChecked4[7] = true;
				break;
		} // switch

		// counts the number of answered solutions
		for (var i = 0; i <= numbersChecked4.length; i++) {
			if (numbersChecked4[i] == true) {
				counter4++;
			} // if
		} // for

		// delays and goes to success screen if 8 solutions are answered
		if (counter4 == 8) {
			setTimeout(success4, 400);
		} // if

	} // if
        

} // buttonEquals4



// clears user input
function buttonClear() {
    document.getElementById("enterStuff").innerHTML = "";
    document.getElementById("enterStuff2").innerHTML = "";
    document.getElementById("enterStuff3").innerHTML = "";
    document.getElementById("enterStuff4").innerHTML = "";
} // buttonClear

// displays instructions
function displayInstructions() {
    changeVisibility("eightSolutions", 1);
    changeVisibility("miniInstructions", 1);
    changeVisibility("instructions", 0);
} // displayInstructions

// hides instructions
function closeInstructions() {
    changeVisibility("eightSolutions", 0);
    changeVisibility("miniInstructions", 0);
    changeVisibility("instructions", 1);
} // closeInstructions

// displays instructions
function displayInstructions2() {
    changeVisibility("eightSolutions2", 1);
    changeVisibility("miniInstructions2", 1);
    changeVisibility("instructions2", 0);
} // displayInstructions2

// hides instructions
function closeInstructions2() {
    changeVisibility("eightSolutions2", 0);
    changeVisibility("miniInstructions2", 0);
    changeVisibility("instructions2", 1);
} // closeInstructions2

// displays instructions
function displayInstructions3() {
    changeVisibility("eightSolutions3", 1);
    changeVisibility("miniInstructions3", 1);
    changeVisibility("instructions3", 0);
} // displayInstructions3

// hides instructions
function closeInstructions3() {
    changeVisibility("eightSolutions3", 0);
    changeVisibility("miniInstructions3", 0);
    changeVisibility("instructions3", 1);
} // closeInstructions3

// displays instructions
function displayInstructions4() {
    changeVisibility("eightSolutions4", 1);
    changeVisibility("miniInstructions4", 1);
    changeVisibility("instructions4", 0);
} // displayInstructions4

// hides instructions
function closeInstructions4() {
    changeVisibility("eightSolutions4", 0);
    changeVisibility("miniInstructions4", 0);
    changeVisibility("instructions4", 1);
} // closeInstructions4


// changes visibility of divID
function changeVisibility(divID, num) {
    var element = document.getElementById(divID);

    // if element exists, it's considered true
    // toggle classes between hidden and unhidden
    if (element) {
        if (num == 0) {
            element.className = "unhidden";
        } else if (num == 1) {
            element.className = "hidden";
        } else {
            element.className = (element.className == "hidden") ? "unhidden" : "hidden";
        } // else

    } // if

} // changeVisibility 

// resets timer, opens success screen, clears user input, and un-strikethroughs every answer
function success1() {
    changeVisibility("firstLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin", 1);
    changeVisibility("calculator1", 1);
    changeVisibility("numberTwo", 1);
    changeVisibility("numberThree", 1);
    changeVisibility("times", 1);
    changeVisibility("plus", 1);
    changeVisibility("clear", 1);
    changeVisibility("equals", 1);
    changeVisibility("enterStuff", 1);
	changeVisibility("delete", 1);
    changeVisibility("winScreen", 0);
    clearInterval(test1);
    document.getElementById("enterStuff").innerHTML = "";
    clicks = 0;
    display = document.querySelector('#time');
    display.textContent = "04:00";
    document.getElementById("6").style.textDecoration = "none";

    document.getElementById("7").style.textDecoration = "none";

    document.getElementById("8").style.textDecoration = "none";

    document.getElementById("10").style.textDecoration = "none";

    document.getElementById("12").style.textDecoration = "none";

    document.getElementById("15").style.textDecoration = "none";

    document.getElementById("20").style.textDecoration = "none";

    document.getElementById("50").style.textDecoration = "none";
} // success1

// resets timer, opens lose screen, clears user input, and un-strikethroughs every answer
function lose1() {
    changeVisibility("firstLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin", 1);
	changeVisibility("invisibleClickBegin", 1);
    changeVisibility("calculator1", 1);
    changeVisibility("numberTwo", 1);
    changeVisibility("numberThree", 1);
    changeVisibility("times", 1);
    changeVisibility("plus", 1);
    changeVisibility("clear", 1);
    changeVisibility("equals", 1);
    changeVisibility("enterStuff", 1);
	changeVisibility("delete", 1);
    changeVisibility("loseScreen", 0);
    clearInterval(test1);
    document.getElementById("enterStuff").innerHTML = "";
    clicks = 0;
    display = document.querySelector('#time');
    display.textContent = "04:00";
    document.getElementById("6").style.textDecoration = "none";

    document.getElementById("7").style.textDecoration = "none";

    document.getElementById("8").style.textDecoration = "none";

    document.getElementById("10").style.textDecoration = "none";

    document.getElementById("12").style.textDecoration = "none";

    document.getElementById("15").style.textDecoration = "none";

    document.getElementById("20").style.textDecoration = "none";

    document.getElementById("50").style.textDecoration = "none";
} // lose1

// resets timer, opens success screen, clears user input, and un-strikethroughs every answer
function success2() {
    changeVisibility("secondLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin2", 1);
    changeVisibility("calculator2", 1);
    changeVisibility("numberFive", 1);
    changeVisibility("numberTwo2", 1);
    changeVisibility("times2", 1);
    changeVisibility("minus", 1);
    changeVisibility("clear2", 1);
    changeVisibility("equals2", 1);
	changeVisibility("delete2", 1);
    changeVisibility("enterStuff2", 1);
    changeVisibility("winScreen", 0);
    clearInterval(test2);
    document.getElementById("enterStuff2").innerHTML = "";
    clicks2 = 0;
    display = document.querySelector('#time2');
    display.textContent = "03:00";
    document.getElementById("-10").style.textDecoration = "none";

    document.getElementById("1").style.textDecoration = "none";

    document.getElementById("3").style.textDecoration = "none";

    document.getElementById("102").style.textDecoration = "none";

    document.getElementById("24").style.textDecoration = "none";

    document.getElementById("321").style.textDecoration = "none";

    document.getElementById("100").style.textDecoration = "none";

    document.getElementById("625").style.textDecoration = "none";

} // success2

// resets timer, opens lose screen, clears user input, and un-strikethroughs every answer
function lose2() {
    changeVisibility("secondLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin2", 1);
    changeVisibility("calculator2", 1);
    changeVisibility("numberFive", 1);
    changeVisibility("numberTwo2", 1);
    changeVisibility("times2", 1);
    changeVisibility("minus", 1);
    changeVisibility("clear2", 1);
    changeVisibility("equals2", 1);
	changeVisibility("delete2", 1);
    changeVisibility("enterStuff2", 1);
    changeVisibility("loseScreen", 0);
    clearInterval(test2);
    document.getElementById("enterStuff2").innerHTML = "";
    clicks2 = 0;
    display = document.querySelector('#time2');
    display.textContent = "03:00";
    document.getElementById("-10").style.textDecoration = "none";

    document.getElementById("1").style.textDecoration = "none";

    document.getElementById("3").style.textDecoration = "none";

    document.getElementById("102").style.textDecoration = "none";

    document.getElementById("24").style.textDecoration = "none";

    document.getElementById("321").style.textDecoration = "none";

    document.getElementById("100").style.textDecoration = "none";

    document.getElementById("625").style.textDecoration = "none";

} // lose2

// resets timer, opens success screen, clears user input, and un-strikethroughs every answer
function success3() {
    changeVisibility("thirdLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin3", 1);
    changeVisibility("calculator3", 1);
    changeVisibility("numberOne", 1);
    changeVisibility("numberEight", 1);
    changeVisibility("numberSix", 1);
    changeVisibility("minus2", 1);
    changeVisibility("sqrt", 1);
    changeVisibility("clear3", 1);
    changeVisibility("equals3", 1);
	changeVisibility("delete3", 1);
    changeVisibility("enterStuff3", 1);
    changeVisibility("winScreen", 0);
    clearInterval(test3);
    document.getElementById("enterStuff3").innerHTML = "";
    clicks3 = 0;
    display = document.querySelector('#time3');
    display.textContent = "05:00";

    document.getElementById("-5").style.textDecoration = "none";

    document.getElementById("32").style.textDecoration = "none";

    document.getElementById("5").style.textDecoration = "none";

    document.getElementById("13").style.textDecoration = "none";

    document.getElementById("202").style.textDecoration = "none";

    document.getElementById("33").style.textDecoration = "none";

    document.getElementById("82").style.textDecoration = "none";

    document.getElementById("1002").style.textDecoration = "none";

} // success3

// resets timer, opens lose screen, clears user input, and un-strikethroughs every answer
function lose3() {
    changeVisibility("thirdLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin3", 1);
    changeVisibility("calculator3", 1);
    changeVisibility("numberOne", 1);
    changeVisibility("numberEight", 1);
    changeVisibility("numberSix", 1);
    changeVisibility("minus2", 1);
    changeVisibility("sqrt", 1);
    changeVisibility("clear3", 1);
    changeVisibility("equals3", 1);
	changeVisibility("delete3", 1);
    changeVisibility("enterStuff3", 1);
    changeVisibility("loseScreen", 0);
    clearInterval(test3);
    document.getElementById("enterStuff3").innerHTML = "";
    clicks3 = 0;
    display = document.querySelector('#time3');
    display.textContent = "05:00";
    document.getElementById("-5").style.textDecoration = "none";

    document.getElementById("32").style.textDecoration = "none";

    document.getElementById("5").style.textDecoration = "none";

    document.getElementById("13").style.textDecoration = "none";

    document.getElementById("202").style.textDecoration = "none";

    document.getElementById("33").style.textDecoration = "none";

    document.getElementById("82").style.textDecoration = "none";

    document.getElementById("1002").style.textDecoration = "none";
} // lose3

// resets timer, opens success screen, clears user input, and un-strikethroughs every answer
function success4() {
    changeVisibility("fourthLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin4", 1);
    changeVisibility("calculator4", 1);
    changeVisibility("numberOne2", 1);
    changeVisibility("numberTwo3", 1);
    changeVisibility("numberZero", 1);
    changeVisibility("times3", 1);
    changeVisibility("divide", 1);
    changeVisibility("clear4", 1);
    changeVisibility("equals4", 1);
	changeVisibility("delete4", 1);
    changeVisibility("enterStuff4", 1);
    changeVisibility("winScreen", 0);
    clearInterval(test4);
    document.getElementById("enterStuff4").innerHTML = "";
    clicks4 = 0;
    display = document.querySelector('#time4');
    display.textContent = "03:00";

    document.getElementById("34").style.textDecoration = "none";

    document.getElementById("4").style.textDecoration = "none";

    document.getElementById("52").style.textDecoration = "none";

    document.getElementById("62").style.textDecoration = "none";

    document.getElementById("72").style.textDecoration = "none";

    document.getElementById("83").style.textDecoration = "none";

    document.getElementById("9").style.textDecoration = "none";

    document.getElementById("103").style.textDecoration = "none";

} // success4

// resets timer, opens lose screen, clears user input, and un-strikethroughs every answer
function lose4() {
    changeVisibility("fourthLevel", 1);
    changeVisibility("menu", 1);
	changeVisibility("invisibleClickBegin4", 1);
    changeVisibility("calculator4", 1);
    changeVisibility("numberOne2", 1);
    changeVisibility("numberTwo3", 1);
    changeVisibility("numberZero", 1);
    changeVisibility("times3", 1);
    changeVisibility("divide", 1);
    changeVisibility("clear4", 1);
    changeVisibility("equals4", 1);
	changeVisibility("delete4", 1);
    changeVisibility("enterStuff4", 1);
    changeVisibility("loseScreen", 0);
    clearInterval(test4);
    document.getElementById("enterStuff4").innerHTML = "";
    clicks4 = 0;
    display = document.querySelector('#time4');
    display.textContent = "03:00";
    document.getElementById("34").style.textDecoration = "none";

    document.getElementById("4").style.textDecoration = "none";

    document.getElementById("52").style.textDecoration = "none";

    document.getElementById("62").style.textDecoration = "none";

    document.getElementById("72").style.textDecoration = "none";

    document.getElementById("83").style.textDecoration = "none";

    document.getElementById("9").style.textDecoration = "none";

    document.getElementById("103").style.textDecoration = "none";
} // lose4

// when on win menu, goes back to menu
function backToWinMenu() {
    changeVisibility("menu");
    changeVisibility("winScreen");
} // backToWinMenu

// when on lose menu, goes back to menu
function backToLoseMenu() {
    changeVisibility("menu");
    changeVisibility("loseScreen");
} // backToLoseMenu

// resets time, goes back to menu, clears user input, and un-strikethroughs every answer
function restartLevel() {
    changeVisibility("firstLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin", 1);
    changeVisibility("calculator1");
    changeVisibility("numberTwo");
    changeVisibility("numberThree");
    changeVisibility("times");
    changeVisibility("plus");
    changeVisibility("clear");
    changeVisibility("equals");
    changeVisibility("enterStuff");
	changeVisibility("delete");
    document.getElementById("enterStuff").innerHTML = "";
    clicks = 0;
    clearInterval(test1);
    display = document.querySelector('#time');
    display.textContent = "04:00";
    document.getElementById("6").style.textDecoration = "none";

    document.getElementById("7").style.textDecoration = "none";

    document.getElementById("8").style.textDecoration = "none";

    document.getElementById("10").style.textDecoration = "none";

    document.getElementById("12").style.textDecoration = "none";

    document.getElementById("15").style.textDecoration = "none";

    document.getElementById("20").style.textDecoration = "none";

    document.getElementById("50").style.textDecoration = "none";
} // restartLevel

// resets time, goes back to menu, clears user input, and un-strikethroughs every answer
function restartLevel2() {
    changeVisibility("secondLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin2", 1);
    changeVisibility("calculator2");
    changeVisibility("numberFive");
    changeVisibility("numberTwo2");
    changeVisibility("times2");
    changeVisibility("minus");
    changeVisibility("clear2");
    changeVisibility("equals2");
	changeVisibility("delete2");
    changeVisibility("enterStuff2");
    document.getElementById("enterStuff2").innerHTML = "";
    clicks2 = 0;
    clearInterval(test2);
    display = document.querySelector('#time2');
    display.textContent = "03:00";
    document.getElementById("-10").style.textDecoration = "none";

    document.getElementById("1").style.textDecoration = "none";

    document.getElementById("3").style.textDecoration = "none";

    document.getElementById("102").style.textDecoration = "none";

    document.getElementById("24").style.textDecoration = "none";

    document.getElementById("321").style.textDecoration = "none";

    document.getElementById("1002").style.textDecoration = "none";

    document.getElementById("625").style.textDecoration = "none";

} // restartLevel2

// resets time, goes back to menu, clears user input, and un-strikethroughs every answer
function restartLevel3() {
    changeVisibility("thirdLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin3", 1);
    changeVisibility("calculator3");
    changeVisibility("numberOne");
    changeVisibility("numberEight");
    changeVisibility("numberSix");
    changeVisibility("minus2");
    changeVisibility("sqrt");
    changeVisibility("clear3");
    changeVisibility("equals3");
	changeVisibility("delete3");
    changeVisibility("enterStuff3");
    document.getElementById("enterStuff3").innerHTML = "";
    clicks3 = 0;
    clearInterval(test3);
    display = document.querySelector('#time3');
    display.textContent = "05:00";
    document.getElementById("-5").style.textDecoration = "none";

    document.getElementById("3").style.textDecoration = "none";

    document.getElementById("5").style.textDecoration = "none";

    document.getElementById("13").style.textDecoration = "none";

    document.getElementById("202").style.textDecoration = "none";

    document.getElementById("33").style.textDecoration = "none";

    document.getElementById("82").style.textDecoration = "none";

    document.getElementById("103").style.textDecoration = "none";
} // restartLevel3

// resets time, goes back to menu, clears user input, and un-strikethroughs every answer
function restartLevel4() {
    changeVisibility("fourthLevel");
    changeVisibility("menu");
	changeVisibility("invisibleClickBegin4", 1);
    changeVisibility("calculator4");
    changeVisibility("numberOne2");
    changeVisibility("numberTwo3");
    changeVisibility("numberZero");
    changeVisibility("times3");
    changeVisibility("divide");
    changeVisibility("clear4");
    changeVisibility("equals4");
	changeVisibility("delete4");
    changeVisibility("enterStuff4");
    document.getElementById("enterStuff4").innerHTML = "";
    clicks4 = 0;
    clearInterval(test4);
    display = document.querySelector('#time4');
    display.textContent = "03:00";
    document.getElementById("32").style.textDecoration = "none";

    document.getElementById("4").style.textDecoration = "none";

    document.getElementById("52").style.textDecoration = "none";

    document.getElementById("62").style.textDecoration = "none";

    document.getElementById("72").style.textDecoration = "none";

    document.getElementById("83").style.textDecoration = "none";

    document.getElementById("9").style.textDecoration = "none";

    document.getElementById("103").style.textDecoration = "none";
} // restartLevel4