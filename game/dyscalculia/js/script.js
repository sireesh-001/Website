//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        if (que_count >= 5 && que_count <= 9) {
            showImgQuestion(que_count);
        } else {
            showQuetions(que_count); //calling showQestions function
        }
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    // let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

    let que_tag;
    let option_tag;
    if (questions[index].block === "true") {
        que_tag = '<div style="background:' + questions[index].question + '; height:40px; width:100%;"></div>'
        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    } else if (questions[index].block === "false") {
        que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        option_tag = '<div class="option" style="background:' + questions[index].options[0] + '; height:40px; width:100%; font-size:0px">' + questions[index].options[0] + '</div>'
            + '<div class="option" style="background:' + questions[index].options[1] + '; height:40px; width:100%; font-size:0px">' + questions[index].options[1] + '</div>'
            + '<div class="option" style="background:' + questions[index].options[2] + '; height:40px; width:100%; font-size:0px">' + questions[index].options[2] + '</div>'
            + '<div class="option" style="background:' + questions[index].options[3] + '; height:40px; width:100%; font-size:0px">' + questions[index].options[3] + '</div>'
    } else {
        que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    }


    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function showImgQuestion(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    // let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

    let que_tag;
    let option_tag;
    if (questions[index].block === "true") {
        que_tag = '<img src="' + questions[index].question + '" >'
        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
            + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    } else {
        que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        option_tag = "<div class='option'><img src=" + questions[index].options[0] + "><span style='font-size:0px'>" + questions[index].options[0] + "</span></div>"
            + "<div class='option'><img src=" + questions[index].options[1] + "><span style='font-size:0px'>" + questions[index].options[1] + "</span></div>"
            + "<div class='option'><img src=" + questions[index].options[2] + "><span style='font-size:0px'>" + questions[index].options[2] + "</span></div>"
            + "<div class='option'><img src=" + questions[index].options[3] + "><span style='font-size:0px'>" + questions[index].options[3] + "</span></div>"
    }




    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    answer.classList.add("correct");

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        //answer.classList.add("correct"); //adding green color to correct selected option
        //answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        //console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        //answer.classList.add("incorrect"); //adding red color to correct selected option
        //answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        //console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                //option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                //option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    let percent = userScore / 5 * 100;
    if (percent > 75) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got ' + percent + '%.' + '</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore > 1) { // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got ' + percent + '%.' + ' You may require some guidance</span>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only ' + percent + '%.' + ' Kindly seek for professionals</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    //option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    //option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


//Result

var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, drawCircle2, drawCircle3, i, range, xpos;
NUM_CONFETTI = 40;
COLORS = [
    [235, 90, 70],
    [97, 189, 79],
    [242, 214, 0],
    [0, 121, 191],
    [195, 119, 224]
];
PI_2 = 2 * Math.PI;
canvas = document.getElementById("confeti");
context = canvas.getContext("2d");
window.w = 0;
window.h = 0;
window.resizeWindow = function () {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight
};
window.addEventListener("resize", resizeWindow, !1);
window.onload = function () {
    return setTimeout(resizeWindow, 0)
};
range = function (a, b) {
    return (b - a) * Math.random() + a
};
drawCircle = function (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
    context.lineWidth = 2;
    context.strokeStyle = d;
    return context.stroke()
};
drawCircle2 = function (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 6, b + 9);
    context.lineTo(a + 12, b);
    context.lineTo(a + 6, b - 9);
    context.closePath();
    context.fillStyle = d;
    return context.fill()
};
drawCircle3 = function (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 5, b + 5);
    context.lineTo(a + 10, b);
    context.lineTo(a + 5, b - 5);
    context.closePath();
    context.fillStyle = d;
    return context.fill()
};
xpos = 0.9;
document.onmousemove = function (a) {
    return xpos = a.pageX / w
};
window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        return window.setTimeout(a, 5)
    }
}();
Confetti = function () {
    function a() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace()
    }
    a.prototype.replace = function () {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return this.vy = 0.7 * this.r + range(-1, 1)
    };
    a.prototype.draw = function () {
        var a;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity +=
            this.dop;
        1 < this.opacity && (this.opacity = 1, this.dop *= -1);
        (0 > this.opacity || this.y > this.ymax) && this.replace();
        if (!(0 < (a = this.x) && a < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
        drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
        drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
        return drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
    };
    return a
}();
confetti = function () {
    var a, b, c;
    c = [];
    i = a = 1;
    for (b = NUM_CONFETTI; 1 <= b ? a <= b : a >= b; i = 1 <= b ? ++a : --a) c.push(new Confetti);
    return c
}();
window.step = function () {
    var a, b, c, d;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    d = [];
    b = 0;
    for (c = confetti.length; b < c; b++) a = confetti[b], d.push(a.draw());
    return d
};
step();;
