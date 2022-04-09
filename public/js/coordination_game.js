/** to do list */

// test version

// couldn't make nice border as feedback after choice :(
// check if enough data displayed in the plugin
// (done) exclude risk and ambiguity task
// (done) change payment - only choices or belief task paid
// (done) change index consent form
// (done) make sure survey code is generated
// test 
// preprocess code
// check preprocessed csv file
// (done) change instructions
// (done) add feedback for each control question


// // generate payoffs
// var rVec = [0.55, 0.6, 0.7, 0.8, 0.9, 0.95];
// var min_payoff = 5;
// generateDesign = function(min_payoff,rVec){
//     // determine multiplier based on risk levels
//     var xVec = [];
//     for(var i = 0; i < rVec.length; i++){
//         var m = rVec[i]/(1-rVec[i]);
//         xVec.push(m);
//     }
//     var cVec = min_payoff;
//     var dVec = Array(5).fill().map((element, index) => index + cVec);
//     var bVec = Array(5).fill().map((element, index) => index + cVec);
//     var aVec = [];
//     var A = [];
//     var B = [];
//     var C = [];
//     var D = [];
//     var E = [];
//     var R = [];
//     for(var x = 0; x < xVec.length; x++){
//         for(var d = 0; d < dVec.length; d++){
//             for(var b = 0; b < bVec.length; b++){
//                 if(bVec[b]>=dVec[d] & dVec[d]>cVec & xVec[x]>1){
//                     aVec = (dVec[d]-cVec)/xVec[x] + bVec[b];
//                     r = (dVec[d]-cVec)/(dVec[d]-cVec+aVec-bVec[b]);
//                     eu = r*aVec + (1-r)*cVec;
//                     A.push(aVec);
//                     B.push(bVec[b]);
//                     C.push(cVec);
//                     D.push(dVec[d]);
//                     R.push(r);
//                     E.push(eu);
//                     aVec = [];
//                 }
//             }
//         }
//     }
//     var design = [A,A,C,B,B,C,D,D];
//     return  [design,R,E];
// }
// var design = generateDesign(min_payoff,rVec);
// var payoff = design[0];
// var r = design[1];
// var eu = design[2];

var A = [
    9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00
];

var B = [
    5.04, 5.60, 5.90, 6.56, 6.86, 7.22, 7.80, 8.04, 8.52, 8.62, 5.14, 5.46, 6.10, 6.32, 6.68, 7.38, 7.50, 8.06, 8.54, 8.66, 5.34, 5.48, 5.82, 6.48, 6.88, 7.14, 7.68, 8.02, 8.54, 8.74, 6.66, 7.12, 7.24, 7.60, 7.82, 8.16, 8.06, 8.50, 8.60, 8.88, 7.88, 8.10, 8.08, 8.30, 8.28, 8.54, 8.56, 8.74, 8.84, 8.92, 8.44, 8.48, 8.60, 8.70, 8.72, 8.74, 8.80, 8.90, 8.92, 8.98, 8.82, 8.92, 8.98, 8.94, 8.94, 8.96, 8.98, 8.94, 8.98, 8.98
];

var C = [
    6.90, 6.80, 6.94, 6.76, 6.86, 6.90, 6.90, 6.94, 6.98, 6.98, 6.18, 5.94, 6.16, 6.38, 6.54, 6.54, 6.68, 6.74, 6.90, 6.94, 5.14, 5.18, 5.32, 5.36, 5.74, 5.86, 6.40, 6.54, 6.76, 6.88, 5.00, 5.26, 5.42, 5.72, 5.88, 6.10, 6.22, 6.46, 6.62, 6.90, 5.12, 5.32, 5.44, 5.66, 5.84, 6.04, 6.34, 6.60, 6.72, 6.84, 5.14, 5.40, 5.52, 5.70, 5.86, 6.14, 6.40, 6.56, 6.66, 6.94, 5.04, 5.22, 5.52, 5.76, 5.90, 6.18, 6.28, 6.44, 6.76, 6.82
];

var D = [
    7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00, 7.00
];

var payoff = [A, A, C, B, B, C, D, D];

var r = [
    0.02463054, 0.05555556, 0.01898734, 0.08955224, 0.06140351, 0.05319149, 0.07692308, 0.05882353, 0.04000000, 0.05000000, 0.17521368, 0.23043478, 0.22459893, 0.18787879, 0.16546763, 0.22115385, 0.17582418, 0.21666667, 0.17857143, 0.15000000, 0.33695652, 0.34082397, 0.34567901, 0.39423077, 0.37278107, 0.38000000, 0.31250000, 0.31944444, 0.34285714, 0.31578947, 0.46082949, 0.48066298, 0.47305389, 0.47761194, 0.48695652, 0.51724138, 0.45348837, 0.51923077, 0.48717949, 0.45454545, 0.62666667, 0.65116279, 0.62903226, 0.65686275, 0.61702128, 0.67605634, 0.60000000, 0.60606061, 0.63636364, 0.66666667, 0.76859504, 0.75471698, 0.78723404, 0.81250000, 0.80281690, 0.76785714, 0.75000000, 0.81481481, 0.80952381, 0.75000000, 0.91588785, 0.95698925, 0.98666667, 0.95384615, 0.94827586, 0.95348837, 0.97297297, 0.90322581, 0.92307692, 0.90000000
];

var r_mean = [
    0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95
];

var eu = [
    6.951724, 6.922222, 6.979114, 6.960597, 6.991404, 7.011702, 7.061538, 7.061176, 7.060800, 7.081000, 6.674103, 6.645130, 6.797861, 6.872242, 6.947050, 7.084038, 7.087912, 7.229667, 7.275000, 7.249000, 6.440652, 6.481948, 6.592099, 6.795000, 6.955266, 7.053200, 7.212500, 7.325833, 7.528000, 7.549474, 6.843318, 7.057680, 7.113533, 7.286567, 7.399304, 7.600000, 7.480698, 7.778846, 7.779487, 7.854545, 7.551467, 7.716279, 7.679355, 7.853922, 7.789787, 8.041127, 7.936000, 8.054545, 8.170909, 8.280000, 8.106777, 8.116981, 8.259574, 8.381250, 8.380845, 8.336071, 8.350000, 8.548148, 8.554286, 8.485000, 8.666916, 8.837419, 8.953600, 8.850462, 8.839655, 8.868837, 8.926486, 8.752258, 8.827692, 8.782000
];

var n_game_r = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

var n_game = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70
];


downloadCSV = function (csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
};

var payFailQuiz1 = '0c';
var payFailQuiz2 = '500c';

/**************/
/** Constants */
/**************/
const nImageInst = 2;


// const feedback_duration = 3000;
const maxTimeChoice = 3000;
const feedbackDuration = 2000;

var subject_id = jsPsych.randomization.randomID(7);

/** load instructions images */
var instructions_images = [];
for (var i = 1; i <= 28; i++) {
    instructions_images.push('img/instructions/Slide' + i + '.png');
}

/** control questions images */
var control_images = [];
for (var i = 1; i < 3; i++){
    control_images.push('img/control/control_img_' + i + '.png');
}

/** load all the images, and remember to preload before starting the egitxperiment */
var instruct_img = [];
for (var i = 0; i < nImageInst; i++) {
    instruct_img.push('img/instruct' + i + '.png');
}






function makeSurveyCode(status) {
    uploadSubjectStatus(status);
    var prefix = { 'success': 'cg', 'failed': 'sb' }[status]
    return `${prefix}${subject_id}`;
}

function uploadSubjectStatus(status) {
    $.ajax({
        type: "POST",
        url: "/subject-status",
        data: JSON.stringify({ subject_id, status }),
        contentType: "application/json"
    });
}


/***********************/
/******** Trials *******/
/***********************/


var paymentInfo = {
    type: 'html-keyboard-response',
    stimulus: `<div> In order to receive payment for this study, you will need to provide Venmo/Paypal or Zelle information. <br/>
                <br><br/>
                When you are ready, press the SPACE BAR to continue. </div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],
};

var payment_options = ["Venmo",
                        "Paypal"];

var payment_data = [];
                        
var paymentQuestion = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "How would you like to be paid?", name: 'Payment', options: payment_options, required: true }
    ],
    on_finish: function (data) {
        payment_data.push(data);
    }
}

var personalInfoQuestion = {
    type: 'survey-text',
    questions: [
        { prompt: "What is your name?", rows: 1, columns: 50, required: true },
        { prompt: "What is the account name or email address associated with your Venmo/Paypal account? ", rows: 1, columns: 50, required: true },
    ],
    preamble: `<div>Please answer the following questions. </div>`,
};

var surveyQuestion = {
    type: 'survey-text',
    questions: [
        { prompt: "What's your age?", rows: 1, columns: 50, required: true },
        { prompt: "What's your gender?", rows: 1, columns: 50, require: true },
    ],
    preamble: `<div>Thanks for choosing our experiment! Please answer the following questions to begin today's study. </div>`,
};




/** full screen */
var fullscreenEnter = {
    type: 'fullscreen',
    message: `<div> Before we begin, please close any unnecessary programs or applications on your computer. <br/>
    This will help the study run more smoothly.    <br/>
    Also, please close any browser tabs that could produce popups or alerts that would interfere with the study.    <br/>
    Finally, once the study has started, <b>DO NOT EXIT</b> fullscreen mode or you will terminate the study and not receive any payment. <br/>   
    <br><br/>
    The study will switch to full screen mode when you press the button below.  <br/>
    When you are ready to begin, press the button.</div>`,
    fullscreen_mode: true,
    on_finish: function () {
        document.body.style.cursor = 'none'
    }
};

var experimentOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div> <font size=120%; font color = 'green';>Experiment Overview </font><br/>
                                                     <br><br/>
                          Now, we will begin with the study.<br/>
                                                        <br><br/>
                          When you are ready, press the  <b>SPACE BAR</b> to continue. </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/** choices */
var choice_count = 0;
var belief_count = 0;



var fixation1 = {
    type: 'html-keyboard-response',
    stimulus: '<span id="calibration_dot_instruction"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: getRandomFixDur(0.5,1.5)*1000,
    on_finish: () => document.body.style.cursor = 'pointer',
};



// no need to reshape the payoff anymore
var GameMatrices = payoff;

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

// randomize order of games
var n = GameMatrices[0].length;
function getRandomGameOrder(n){
    var nList = [];
    for (var i = 0; i < n; i++) {
        nList.push(i);
    }
    var randInd = jsPsych.randomization.shuffle(nList);
    return randInd;
}

var randIndChoice = getRandomGameOrder(n);
var randIndBelief = getRandomGameOrder(n);

// shuffle game matrices based on random order
function getShuffledGameMatrices(GameMatrices,randInd){
    var GameMatricesShuffled = [];
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < randInd.length; j++){
            GameMatricesShuffled.push(GameMatrices[i][randInd[j]])
        }
    }
    var GameMatricesShuffled = listToMatrix(GameMatricesShuffled,n);
    return GameMatricesShuffled;
}

var GameMatricesShuffledChoice = getShuffledGameMatrices(GameMatrices,randIndChoice);
var GameMatricesShuffledBelief = getShuffledGameMatrices(GameMatrices,randIndBelief);

function getShuffledGameParam(param,randInd){
    var paramShuffled = [];
    for(var j = 0; j < randInd.length; j++){
        paramShuffled.push(param[randInd[j]])
    }
    return paramShuffled
}

var rShuffledChoice = getShuffledGameParam(r,randIndChoice);
var rShuffledBelief = getShuffledGameParam(r,randIndBelief);
var r_meanShuffledChoice = getShuffledGameParam(r_mean,randIndChoice);
var r_meanShuffledBelief = getShuffledGameParam(r_mean,randIndBelief);
var euShuffledChoice = getShuffledGameParam(eu,randIndChoice);
var euShuffledBelief = getShuffledGameParam(eu,randIndBelief);
var n_gameShuffledChoice = getShuffledGameParam(n_game,randIndChoice);
var n_gameShuffledBelief = getShuffledGameParam(n_game,randIndBelief);
var n_game_rShuffledChoice = getShuffledGameParam(n_game_r,randIndChoice);
var n_game_rShuffledBelief = getShuffledGameParam(n_game_r,randIndBelief);

// randomize display of each action - choice phase
function getRandDisplayChoice(n){
    var multiplier = Math.ceil(n/4);
    var displayOrder = Array(multiplier).fill([0,1,2,3]).flat();
    var randDisplayOrder = jsPsych.randomization.shuffle(displayOrder);
    var selectedrandDisplayOrder = randDisplayOrder.slice(0, n);

    return selectedrandDisplayOrder
}

var randDisplayOrderChoice = getRandDisplayChoice(n);

// randomize display of each action - choice phase
function getRandDisplayBelief(randDisplayOrderChoice,randIndChoice,randIndBelief){
    var selectedrandDisplayOrder = [];
    for(var i = 0; i < randIndBelief.length; i++){
        selectedrandDisplayOrder.push(randDisplayOrderChoice[randIndChoice.indexOf(randIndBelief[i])])
    }

    return selectedrandDisplayOrder
}

// to display the game matrix for the belief task the way it was displayed in the choice task
var randDisplayOrderBelief = getRandDisplayBelief(randDisplayOrderChoice,randIndChoice,randIndBelief);

// get game matrix for a specific trial
function getGameMatrixTrial(choice_count, reshapedPayoff, randDisplayOrder){
    // 1 2 3 4 5 6 7 8 9
    // [aVec, aVec, cVec, bVec(b), bVec(b), cVec, dVec(d), dVec(d)]
    // var reshapedPayoffFinal = [];
    // var aTLSelf = [];
    // var aTLOther = [];
    // var cTRSelf = [];
    // var bTROther = [];
    // var bBLSelf = []; 
    // var cBLOther = [];
    // var dBRSelf = [];
    // var dBROther = [];
    // var GameMatrices = [];
    //     aTLSelf.push(reshapedPayoff[0][i]);
    //     aTLOther.push(reshapedPayoff[1][i]);
    //     cTRSelf.push(reshapedPayoff[2][i]);
    //     bTLOther.push(reshapedPayoff[3][i]);
    //     bBLSelf.push(reshapedPayoff[4][i]);
    //     cBLOther.push(reshapedPayoff[5][i]);
    //     dBRSelf.push(reshapedPayoff[6][i]);
    //     dBROther.push(reshapedPayoff[7][i]);
    var gameMatrix = [];
    var curPay = [];
    switch(randDisplayOrder[choice_count]) {
        case 0:
            var orderPayoffs = [1, 2, 3, 4, 5, 6, 7, 8]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(2))
            }
            break;
        case 1:
            var orderPayoffs = [5, 6, 7, 8, 1, 2, 3, 4]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(2))
            }
            break;
        case 2:
            var orderPayoffs = [7, 8, 5, 6, 3, 4, 1, 2]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(2))
            }
            break;
        case 3:
            var orderPayoffs = [3, 4, 1, 2, 7, 8, 5, 6]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(2))
            }
            break;
      }

    return gameMatrix;
}

// number of correct answers for control questions - choice task
function getAnswersChoiceQuiz(choice_quiz_data){
    var nCorrect = 0;
    var responses = choice_quiz_data[0].responses.slice(1,choice_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["9","8","7","5","TRUE","FALSE"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
        } else {
            nCorrect = nCorrect + 0;
        }
    }
    return nCorrect;
}

// number of correct answers for control questions - belief task
function getAnswersBeliefQuiz(belief_quiz_data){
    var nCorrect = 0;
    var responses = belief_quiz_data[0].responses.slice(1,belief_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["$5","$9","FALSE"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
        } else {
            nCorrect = nCorrect + 0;
        }
    }
    return nCorrect;
}


function getRandomFixDur(min,max) {
    return Math.random() * max + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getImgHTML(instructions){
    var imgHTMLInstructions = [];
    var startString = [`<img class = 'img_instructions' src="`];
    var endString = [`"></img>`];
    var elements = [];
    for (var i = 0; i <= instructions.length; i++){
        elements[i] = startString.concat(instructions[i],endString);
        imgHTMLInstructions.push(elements[i].join(' '));
    }
    return imgHTMLInstructions;
}

imgHTMLInstructions = getImgHTML(instructions_images);

// display instructions choice task
var choiceInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(0,8),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer'
    }
}

// quiz about the choice task with feedback
var question_choice_1_options = ["5",
                        "7",
                        "8",
                        "9"];
var question_choice_2_options = ["6",
                        "7",
                        "8",
                        "9"];
var question_choice_3_options = ["5",
                        "6",
                        "7",
                        "8"];
var question_choice_4_options = ["5",
                        "6",
                        "7",
                        "8"];
var question_choice_5_options = ["TRUE",
                        "FALSE"];
var question_choice_6_options = ["TRUE",
                        "FALSE"];

// highlight correct answer with green and provide explanation at the bottom
var questions_choice_data = [];
var feedback_question_choice_1 = [];
var feedback_question_choice_2 = [];
var feedback_question_choice_3 = [];
var feedback_question_choice_4 = [];
var feedback_question_choice_5 = [];
var feedback_question_choice_6 = [];


// question 1
var controlQuestionChoice1 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will you earn?", name: 'Q1', options: question_choice_1_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question.</div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("9")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice1Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_1 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_1){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will you earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            5 <br>
            7 <br>
            8 <br>
            9 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 9 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row T, then you end up in the UPPER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 9 </font> dollars. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// question 2
var controlQuestionChoice2 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will they earn?", name: 'Q2', options: question_choice_2_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("8")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice2Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_2 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_2){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will they earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            6 <br>
            7 <br>
            8 <br>
            9 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 8 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row T, then you end up in the UPPER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, they will earn <font color = 'green';> 8 </font> dollars. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// question 3
var controlQuestionChoice3 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will you earn?", name: 'Q3', options: question_choice_3_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("7")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice3Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_3 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_3){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will you earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            5 <br>
            7 <br>
            8 <br>
            9 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 7 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row B, then you end up in the LOWER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 7 </font> dollars. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// question 4
var controlQuestionChoice4 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will they earn?", name: 'Q4', options: question_choice_4_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("5")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice4Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_4 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_4){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will they earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            5 <br>
            7 <br>
            8 <br>
            9 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 5 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row B, then you end up in the LOWER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 5 </font> dollars. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}


// question 5
var controlQuestionChoice5 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 5: The participant with whom you are paired will be determined randomly.", name: 'Q5', options: question_choice_5_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("TRUE")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice5Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_5 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_5){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 5: The participant with whom you are paired will be determined randomly.</div>
            <br><br/>
            TRUE <br>
            FALSE <br>
            <br><br/>
            The correct answer is: <font color = 'green';> TRUE </font>.
            <br><br/>
            For each decision, you are paired randomly with another participant in the study.
            <br><br/>
            Therefore, the correct answer is <font color = 'green';> TRUE </font>. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// question 6
var controlQuestionChoice6 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 6: When you make your choice, you will be able to see what the COLUMN CHOOSER has chosen.", name: 'Q6', options: question_choice_6_options, required: true },
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_choice_data.push(data);
        if(data.responses.includes("FALSE")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestionChoice6Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_choice_6 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_choice_6){
          return `
          <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
          <br><br/> 
          <div>Question 6: When you make your choice, you will be able to see what the COLUMN CHOOSER has chosen.</div>
            <br><br/>
            TRUE <br>
            FALSE <br>
            <br><br/>
            The correct answer is: <font color = 'green';> FALSE </font>.
            <br><br/>
            You will not be able to see what the COLUMN CHOOSER did before you make your decision.
            <br><br/>
            Therefore, the correct answer is <font color = 'green';> FALSE </font>. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}



// quiz about the choice task


// still to finish
var passedQuiz1 = 1;
var choice_quiz_data = [];
var controlQuestionsChoice = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will you earn?", name: 'Q1', options: question_choice_1_options, required: true },
        { prompt: "Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many dollars will they earn?", name: 'Q2', options: question_choice_2_options, required: true },
        { prompt: "Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will you earn?", name: 'Q3', options: question_choice_3_options, required: true },
        { prompt: "Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many dollars will they earn?", name: 'Q4', options: question_choice_4_options, required: true },
        { prompt: "Question 5: The participant with whom you are paired will be determined randomly.", name: 'Q5', options: question_choice_5_options, required: true },
        { prompt: "Question 6: When you make your choice, you will be able to see what the COLUMN CHOOSER has chosen.", name: 'Q6', options: question_choice_6_options, required: true }
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following questions to begin today's study. Scroll down to see all questions.</div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        choice_quiz_data.push(data);
        document.body.style.cursor = 'none';
        nCorrectChoice = getAnswersChoiceQuiz(choice_quiz_data);
        if(nCorrectChoice<4){
            survey_code = makeSurveyCode('failed');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectChoice} questions correctly.  </br> Your survey code is: ${survey_code}${payFailQuiz1}. Thank you for signing up!`);
            passedQuiz1 = 0;
        }
    }
};



// choice overview
var choiceOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 1 Task </font><br/>
                                        <br><br/>
            Each round, you will see a table on the screen. <br/>      
            To select the top row of the table, press the <b><font color='green'>UP</font></b> key. <br/>
            To select the bottom row of the table, press  the <b><font color='green'>DOWN</font></b> key. <br/>
            After each choice, look at the red circle at the center of the screen.  <br/>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500
}


// trial - coordination game
var choice_data = [];
var game_choice = {
    timeline: [
        // if_node1,
        // if_node2,
        fixation1,
        {
            type: "binary-choice-game",
            stimulus: () => getGameMatrixTrial(choice_count, GameMatricesShuffledChoice,randDisplayOrderChoice), // list of 8 payoffs
            choices: ["uparrow", "downarrow"],
            stimulus_order: () => randIndChoice[choice_count],
            stimulus_display: () => randDisplayOrderChoice[choice_count],
            stimulus_r: () => rShuffledChoice[choice_count],
            stimulus_r_mean: () => r_meanShuffledChoice[choice_count],
            stimulus_eu: () => euShuffledChoice[choice_count],
            stimulus_n_game: () => n_gameShuffledChoice[choice_count],
            stimulus_n_game_r: () => n_game_rShuffledChoice[choice_count],
            realOrPrac: false,
            doEyeTracking: false,
            // stimulus_duration: 3000,
            on_finish: function (data) {
                choice_data.push(data);
                choice_count++;
            }
        }      
    ],
    loop_function: () => choice_count < 12 //r.length, // change this to 60 after uploading
};

/// break
var breaktime = {
    type: "html-keyboard-response",
    stimulus: `<div>You are about halfway done! Now you can take a short break if you want.</br>
                <br></br>
                When you are ready to continue the study, press the <b>SPACE BAR</b>.</div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
};



// display instructions belief task
var beliefInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(8,16),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer'
    }
}

// quiz about the belief task
var question_belief_1_options = ["$11",
                        "$9",
                        "$7",
                        "$5"];
var question_belief_2_options = ["$11",
                        "$9",
                        "$7",
                        "$5"];
var question_belief_3_options = ["TRUE",
                         "FALSE"];


var questions_belief_data = [];
var feedback_question_belief_1 = [];
var feedback_question_belief_2 = [];
var feedback_question_belief_3 = [];
                         
// question 1
var controlQuestionBelief1 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: Suppose you estimate that 60% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?", name: 'Q1', options: question_belief_1_options, required: true },
    ],
    preamble: `<div> 
    <br><br/>
    Please answer the following question. </div>
    <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>
    <br><br/>
    <div>Suppose that 80% of the participants in the study selected action L in the table above.</div>
    <br><br/>
    <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
    <div>
            <div>If your estimate is within 5% of the correct answer you earn $11</div>
            <div>If your estimate is between 5% and 10% of the correct answer you earn $9</div>
            <div>If your estimate is between 10% and 15% of the correct answer you earn $7</div>
            <div>Otherwise you earn $5</div>
    </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_belief_data.push(data);
        if(data.responses.includes("$5")){
            data.correct = true; // can add property correct by modify data object directly
        } else {
            data.correct = false;
        }
    }
};

var controlQuestionBelief1Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_belief_1 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_belief_1){
        return `
        <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
        <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
        `;
        } else {
        return `
        <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
        <br><br/> 
        <div>Question 1: Suppose you estimate that 60% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?</div>
        <br><br/> 
        <br><br/>
        <img class = 'img_questions' src="img/control/control_img_2.png"></img>
        <br><br/>
        <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
        <div>
                <div>If your estimate is within 5% of the correct answer you earn $11</div>
                <div>If your estimate is between 5% and 10% of the correct answer you earn $9</div>
                <div>If your estimate is between 10% and 15% of the correct answer you earn $7</div>
                <div>Otherwise you earn $5</div>
        </div>
            <br><br/>
            $11 <br>
            $9 <br>
            $7 <br>
            $5 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> $5 </font>.
            <br><br/>
            The error in your estimate is |80% - 60%| = 20%.
            <br><br/>
            Therefore, you earn <font color = 'green';> $5 </font>. 
            <br><br/>
        When you are ready, press the  <b>SPACE BAR</b> to continue. 
        <br><br/> 
        </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}
                         

// question 2
var controlQuestionBelief2 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 2: Suppose you estimate that 87% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?", name: 'Q2', options: question_belief_2_options, required: true },
    ],
    preamble: `<div> 
    <br><br/>
    Please answer the following question. </div>
    <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>
    <br><br/>
    <div>Suppose that 80% of the participants in the study selected action L in the table above.</div>
    <br><br/>
    <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
    <div>
            <div>If your estimate is within 5% of the correct answer you earn $11</div>
            <div>If your estimate is between 5% and 10% of the correct answer you earn $9</div>
            <div>If your estimate is between 10% and 15% of the correct answer you earn $7</div>
            <div>Otherwise you earn $5</div>
    </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_belief_data.push(data);
        if(data.responses.includes("$9")){
            data.correct = true; // can add property correct by modify data object directly
        } else {
            data.correct = false;
        }
    }
};

var controlQuestionBelief2Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_belief_2 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_belief_2){
        return `
        <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
        <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
        `;
        } else {
        return `
        <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
        <br><br/> 
        <div>Question 2: Suppose you estimate that 87% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?</div>
        <br><br/> 
        <br><br/>
        <img class = 'img_questions' src="img/control/control_img_2.png"></img>
        <br><br/>
        <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
        <div>
                <div>If your estimate is within 5% of the correct answer you earn $11</div>
                <div>If your estimate is between 5% and 10% of the correct answer you earn $9</div>
                <div>If your estimate is between 10% and 15% of the correct answer you earn $7</div>
                <div>Otherwise you earn $5</div>
        </div>
            <br><br/>
            $11 <br>
            $9 <br>
            $7 <br>
            $5 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> $9 </font>.
            <br><br/>
            The error in your estimate is |80% - 87%| = 7%.
            <br><br/>
            Therefore, you earn <font color = 'green';> $9 </font>. 
            <br><br/>
        When you are ready, press the  <b>SPACE BAR</b> to continue. 
        <br><br/> 
        </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}


// question 3
var controlQuestionBelief3 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 3: You will receive your payment for this part of the experiment immediately.", name: 'Q3', options: question_belief_3_options, required: true },
    ],
    preamble: `<div> 
    <br><br/>
    Please answer the following question. </div>
    </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_belief_data.push(data);
        if(data.responses.includes("FALSE")){
            data.correct = true; // can add property correct by modify data object directly
        } else {
            data.correct = false;
        }
    }
};

var controlQuestionBelief3Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_belief_3 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_belief_3){
        return `
        <div>Your answer was <font size=120%; font color = 'green';> correct </font>!</div>
        <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
        `;
        } else {
        return `
        <div>Your answer was <font size=120%; font color = 'red';> incorrect </font>!</div>
        <br><br/> 
        <div>Question 3: You will receive your payment for this part of the experiment immediately.</div>
        <br><br/> 
            The correct answer is: <font color = 'green';> FALSE </font>.
            <br><br/>
            We will send you the payment within 1 or 2 weeks.
            <br><br/>
            Therefore, the correct answer is <font color = 'green';> FALSE </font>. 
            <br><br/>
        When you are ready, press the  <b>SPACE BAR</b> to continue. 
        <br><br/> 
        </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}



// still to finish
var passedQuiz2 = 1;
var belief_quiz_data = [];
var controlQuestionsBelief = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: Suppose you estimate that 60% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?", name: 'Q1', options: question_belief_1_options, required: true },
        { prompt: "Question 2: Suppose you estimate that 87% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?", name: 'Q2', options: question_belief_2_options, required: true },
        { prompt: "Question 3: You will receive your payment for this part of the experiment immediately.", name: 'Q3', options: question_belief_3_options, required: true }
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following question. </div>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>
    <br><br/>
    <div>Suppose that 80% of the participants in the study selected action L in the table above.</div>
    <br><br/>
    <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
    <div>
            <div>If your estimate is within 5% of the correct answer you earn $11</div>
            <div>If your estimate is between 5% and 10% of the correct answer you earn $9</div>
            <div>If your estimate is between 10% and 15% of the correct answer you earn $7</div>
            <div>Otherwise you earn $5</div>
    </div>
    <br><br/>`,
    on_finish: function (data) {
        belief_quiz_data.push(data);
        document.body.style.cursor = 'none';
        nCorrectBelief = getAnswersBeliefQuiz(belief_quiz_data);
        if(nCorrectBelief<2){
            survey_code = makeSurveyCode('failed');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectBelief} questions correctly.  </br> You will receive  ${payFailQuiz2} for making it this far. Your survey code is: ${survey_code}${payFailQuiz2}. Thank you for signing up!`);
            passedQuiz2 = 0;
        }
    }
};



// belief overview
var beliefOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 2 Task </font><br/>
                                        <br><br/>
            Each round, you will see a table on the screen and a slider bar. <br/>  
            You can make your response by clicking on the slider bar. <br/>
            When you are sure of your response, you can click the <b><font color='green'>CONTINUE</font></b> button. <br/>
            After each choice, look at the red dot at the center of the screen.  <br/>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}


// belief elicitation
var belief_data = [];
var game_belief = {
    timeline: [
        fixation1,
        {
            type: "table-slider-response",
            stimulus: () => getGameMatrixTrial(belief_count, GameMatricesShuffledBelief,randDisplayOrderBelief), // list of 8 payoffs
            labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%','100%'],
            stimulus_order: () => randIndBelief[belief_count],
            stimulus_display: () => randDisplayOrderBelief[belief_count],
            stimulus_r: () => rShuffledBelief[belief_count],
            stimulus_r_mean: () => r_meanShuffledBelief[belief_count],
            stimulus_eu: () => euShuffledBelief[belief_count],
            stimulus_n_game: () => n_gameShuffledBelief[belief_count],
            stimulus_n_game_r: () => n_game_rShuffledBelief[belief_count],
            min: 0,
            max: 100,
            prompt: 'What percentage of participants choose action L ?',
            require_movement: true,
            start: () => getRandomInt(0, 100),
            response_ends_trial: true,
            on_finish: function (data) {
                belief_data.push(data);
                belief_count++;
            }
        }      
    ],
    loop_function: () => belief_count < 12 //r.length, // change this to length of array: 105 
};


// get risk task payments
function getPayRiskTask(risk_data){
    // concatenae all options into one array
    // var responselength = risk_data[0].responses.length;
    var responses = risk_data[0].responses;
    // var answers = [];
    var options = question_risk_1_options.concat(question_risk_2_options,
                                                question_risk_3_options,
                                                question_risk_4_options,
                                                question_risk_5_options,
                                                question_risk_6_options,
                                                question_risk_7_options,
                                                question_risk_8_options,
                                                question_risk_9_options,
                                                question_risk_10_options);      
    // select random choice to be paid
    var c = getRandomInt(1,10);
    var choiceOptions = [options[(c-1) + c], options[c + c]];
    var answersChoice = [];
    for(var i = 0; i < 2; i++){
        if(responses.includes(choiceOptions[i])){
            answersChoice.push(i+1);
        }
    }
    // select random outcome to be paid
    var p = getRandomInt(1,10);
    var amountPay = [];
    if(answersChoice[0]===1){
        // var posPay = [2, 1.6];
        if(p<=c){
            amountPay = 2;
        } else {
            amountPay = 1.6;
        }
    } else {
        // var posPay = [3.85, 0.10];
        if(p<=c){
            amountPay = 3.85;
        } else {
            amountPay = 0.10;
        }
    }
    return amountPay;
}

// function getRiskTaskChoices(risk_data){
//     // concatenae all options into one array
//     // var responselength = risk_data[0].responses.length;
//     var responses = risk_data[0].responses;
//     // var answers = [];
//     var options = question_risk_1_options.concat(question_risk_2_options,
//                                                 question_risk_3_options,
//                                                 question_risk_4_options,
//                                                 question_risk_5_options,
//                                                 question_risk_6_options,
//                                                 question_risk_7_options,
//                                                 question_risk_8_options,
//                                                 question_risk_9_options,
//                                                 question_risk_10_options);      
//     // select random choice to be paid
//     var c = getRandomInt(1,10);
//     var choiceOptions = [options[(c-1) + c], options[c + c]];
//     var answersChoice = [];
//     for(var i = 0; i < 2; i++){
//         if(responses.includes(choiceOptions[i])){
//             answersChoice.push(i+1);
//         }
//     }
//     return answersChoice;
// }

// get risk task payments
function getPayAmbiguityTask(ambiguity_data){
    // concatenate all options into one array
    // var responselength = risk_data[0].responses.length;
    var responses = ambiguity_data[0].responses;
    var options = question_ambiguity_1_options.concat(question_ambiguity_2_options,
        question_ambiguity_3_options,
        question_ambiguity_4_options,
        question_ambiguity_5_options,
        question_ambiguity_6_options,
        question_ambiguity_7_options,
        question_ambiguity_8_options,
        question_ambiguity_9_options,
        question_ambiguity_10_options,
        question_ambiguity_11_options,
        question_ambiguity_12_options,
        question_ambiguity_13_options,
        question_ambiguity_14_options,
        question_ambiguity_15_options,
        question_ambiguity_16_options,
        question_ambiguity_17_options,
        question_ambiguity_18_options,
        question_ambiguity_19_options,
        question_ambiguity_20_options);    
    // possible amounts option B
    var posAmountB = [1.64,1.72,1.80,1.88,1.96,2.04,2.12,2.20,2.28,2.36,2.44,2.52,2.60,2.68,2.76,2.84,2.94,3.00,3.08,3.16];  
    // select random choice to be paid
    var c = getRandomInt(1,20);
    var choiceOptions = [options[(c-1) + c], options[c + c]];
    var answersChoice = [];
    for(var i = 0; i < 2; i++){
        if(responses.includes(choiceOptions[i])){
            answersChoice.push(i+1); // option A or option B
        }
    }
    // select random outcome for each option
    var p_A = getRandomInt(1,10);
    var p_B = getRandomInt(1,10);
    var amountPay = [];
    if(answersChoice[0]===1){
        if(p_A<=5){
            amountPay = 2;
        } else {
            amountPay = 0;
        }
    } else {
        if(p_B<=5){
            amountPay = posAmountB[c-1];
        } else {
            amountPay = 0;
        }
    }
    return amountPay;
}

// function getAmbiguityTaskChoices(ambiguity_data){
//     // concatenate all options into one array
//     // var responselength = risk_data[0].responses.length;
//     var responses = ambiguity_data[0].responses;
//     var options = question_ambiguity_1_options.concat(question_ambiguity_2_options,
//         question_ambiguity_3_options,
//         question_ambiguity_4_options,
//         question_ambiguity_5_options,
//         question_ambiguity_6_options,
//         question_ambiguity_7_options,
//         question_ambiguity_8_options,
//         question_ambiguity_9_options,
//         question_ambiguity_10_options,
//         question_ambiguity_11_options,
//         question_ambiguity_12_options,
//         question_ambiguity_13_options,
//         question_ambiguity_14_options,
//         question_ambiguity_15_options,
//         question_ambiguity_16_options,
//         question_ambiguity_17_options,
//         question_ambiguity_18_options,
//         question_ambiguity_19_options,
//         question_ambiguity_20_options);    
//     // possible amounts option B
//     var posAmountB = [1.64,1.72,1.80,1.88,1.96,2.04,2.12,2.20,2.28,2.36,2.44,2.52,2.60,2.68,2.76,2.84,2.94,3.00,3.08,3.16];  
//     // select random choice to be paid
//     var c = getRandomInt(1,20);
//     var choiceOptions = [options[(c-1) + c], options[c + c]];
//     var answersChoice = [];
//     for(var i = 0; i < 2; i++){
//         if(responses.includes(choiceOptions[i])){
//             answersChoice.push(i+1); // option A or option B
//         }
//     }
//     return answersChoice;
// }

// display instructions risk task
var riskInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(16,21),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

// risk task overview
var riskOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 3 Task </font><br/>
            <br><br/>
            Please indicate which option you would prefer for each of the ten paired gambles.</div>
            <br><br/>
            At the end of the experiment, one of your choice will be randomly selected and the your payment will be determined. </br>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

var question_risk_1_options = ["10% chance of $2.00 and 90% chance of $1.60",
                          "10% chance of $3.85 and 90% chance of $0.10"];
var question_risk_2_options = ["20% chance of $2.00 and 80% chance of $1.60",
                          "20% chance of $3.85 and 80% chance of $0.10"];
var question_risk_3_options = ["30% chance of $2.00 and 70% chance of $1.60",
                          "30% chance of $3.85 and 70% chance of $0.10"];
var question_risk_4_options = ["40% chance of $2.00 and 60% chance of $1.60",
                          "40% chance of $3.85 and 60% chance of $0.10"];
var question_risk_5_options = ["50% chance of $2.00 and 50% chance of $1.60",
                          "50% chance of $3.85 and 50% chance of $0.10"];
var question_risk_6_options = ["60% chance of $2.00 and 40% chance of $1.60",
                          "60% chance of $3.85 and 40% chance of $0.10"];
var question_risk_7_options = ["70% chance of $2.00 and 30% chance of $1.60",
                          "70% chance of $3.85 and 30% chance of $0.10"];
var question_risk_8_options = ["80% chance of $2.00 and 20% chance of $1.60",
                          "80% chance of $3.85 and 20% chance of $0.10"];
var question_risk_9_options = ["90% chance of $2.00 and 10% chance of $1.60",
                          "90% chance of $3.85 and 10% chance of $0.10"];
var question_risk_10_options = ["100% chance of $2.00 and 0% chance of $1.60",
                          "100% chance of $3.85 and 0% chance of $0.10"];

// risk-aversion survey
var risk_data = [];
var risk_pay = []
var riskSurvey = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Q1: Please indicate your preference.", name: 'Q1', options: question_risk_1_options, required: true },
        { prompt: "Q2: Please indicate your preference.", name: 'Q2', options: question_risk_2_options, required: true },
        { prompt: "Q3: Please indicate your preference.", name: 'Q3', options: question_risk_3_options, required: true },
        { prompt: "Q4: Please indicate your preference.", name: 'Q4', options: question_risk_4_options, required: true },
        { prompt: "Q5: Please indicate your preference.", name: 'Q5', options: question_risk_5_options, required: true },
        { prompt: "Q6: Please indicate your preference.", name: 'Q6', options: question_risk_6_options, required: true },
        { prompt: "Q7: Please indicate your preference.", name: 'Q7', options: question_risk_7_options, required: true },
        { prompt: "Q8: Please indicate your preference.", name: 'Q8', options: question_risk_8_options, required: true },
        { prompt: "Q9: Please indicate your preference.", name: 'Q9', options: question_risk_9_options, required: true },
        { prompt: "Q10: Please indicate your preference.", name: 'Q10', options: question_risk_10_options, required: true }
    ],
    on_finish: function (data) {
        risk_data.push(data);
        risk_pay = getPayRiskTask(risk_data);
    }
};


// display instructions risk task
var ambiguityInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(21,27),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

// ambiguity task overview
var ambiguityOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 4 Task </font><br/>
            <br><br/>
            Please indicate which option you would prefer for each of the ten paired gambles.</div>
            <br><br/>
            At the end of the experiment, one of your choice will be randomly selected and the your payment will be determined. </br>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

var question_ambiguity_1_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $1.64 and ?% chance of $0"];
var question_ambiguity_2_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $1.72 and ?% chance of $0"];
var question_ambiguity_3_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $1.80 and ?% chance of $0"];
var question_ambiguity_4_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $1.88 and ?% chance of $0"];
var question_ambiguity_5_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $1.96 and ?% chance of $0"];
var question_ambiguity_6_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.04 and ?% chance of $0"];
var question_ambiguity_7_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.12 and ?% chance of $0"];
var question_ambiguity_8_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.20 and ?% chance of $0"];
var question_ambiguity_9_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.28 and ?% chance of $0"];
var question_ambiguity_10_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.36 and ?% chance of $0"];
var question_ambiguity_11_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.44 and ?% chance of $0"];
var question_ambiguity_12_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.52 and ?% chance of $0"];
var question_ambiguity_13_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.60 and ?% chance of $0"];
var question_ambiguity_14_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.68 and ?% chance of $0"];
var question_ambiguity_15_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.76 and ?% chance of $0"];
var question_ambiguity_16_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.84 and ?% chance of $0"];
var question_ambiguity_17_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $2.94 and ?% chance of $0"];
var question_ambiguity_18_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $3.00 and ?% chance of $0"];
var question_ambiguity_19_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $3.08 and ?% chance of $0"];
var question_ambiguity_20_options = ["50% chance of $2.00 and 50% chance of $0",
                                    "?% chance of $3.16 and ?% chance of $0"];

// risk-aversion survey
var ambiguity_data = [];
var ambiguity_pay = []
var ambiguitySurvey = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Q1: Please indicate your preference.", name: 'Q1', options: question_ambiguity_1_options, required: true },
        { prompt: "Q2: Please indicate your preference.", name: 'Q2', options: question_ambiguity_2_options, required: true },
        { prompt: "Q3: Please indicate your preference.", name: 'Q3', options: question_ambiguity_3_options, required: true },
        { prompt: "Q4: Please indicate your preference.", name: 'Q4', options: question_ambiguity_4_options, required: true },
        { prompt: "Q5: Please indicate your preference.", name: 'Q5', options: question_ambiguity_5_options, required: true },
        { prompt: "Q6: Please indicate your preference.", name: 'Q6', options: question_ambiguity_6_options, required: true },
        { prompt: "Q7: Please indicate your preference.", name: 'Q7', options: question_ambiguity_7_options, required: true },
        { prompt: "Q8: Please indicate your preference.", name: 'Q8', options: question_ambiguity_8_options, required: true },
        { prompt: "Q9: Please indicate your preference.", name: 'Q9', options: question_ambiguity_9_options, required: true },
        { prompt: "Q10: Please indicate your preference.", name: 'Q10', options: question_ambiguity_10_options, required: true },
        { prompt: "Q11: Please indicate your preference.", name: 'Q11', options: question_ambiguity_11_options, required: true },
        { prompt: "Q12: Please indicate your preference.", name: 'Q12', options: question_ambiguity_12_options, required: true },
        { prompt: "Q13: Please indicate your preference.", name: 'Q13', options: question_ambiguity_13_options, required: true },
        { prompt: "Q14: Please indicate your preference.", name: 'Q14', options: question_ambiguity_14_options, required: true },
        { prompt: "Q15: Please indicate your preference.", name: 'Q15', options: question_ambiguity_15_options, required: true },
        { prompt: "Q16: Please indicate your preference.", name: 'Q16', options: question_ambiguity_16_options, required: true },
        { prompt: "Q17: Please indicate your preference.", name: 'Q17', options: question_ambiguity_17_options, required: true },
        { prompt: "Q18: Please indicate your preference.", name: 'Q18', options: question_ambiguity_18_options, required: true },
        { prompt: "Q19: Please indicate your preference.", name: 'Q19', options: question_ambiguity_19_options, required: true },
        { prompt: "Q20: Please indicate your preference.", name: 'Q20', options: question_ambiguity_20_options, required: true },
    ],
    on_finish: function (data) {
        ambiguity_data.push(data);
        ambiguity_pay = getPayAmbiguityTask(ambiguity_data);
    }
};






// function getFinalPay(risk_pay,ambiguity_pay){
//     // select randomly part 3 or part 4 payment
//     var randIndPay = getRandomInt(1,2);
//     var payPart = [];
//     var finalPay = [];
//     if(randIndPay===1){
//         finalPay = risk_pay;
//         payPart = 3;
//         // return [finalPay,3]
//     } else {
//         finalPay = ambiguity_pay;
//         payPart = 4;
//         // return [finalPay,4]
//     }
//     return [finalPay,payPart];
// }


// var finalEarnings = function displayFinalPay(finalPay){
//     // select randomly part 3 or part 4 payment
//     var randIndPay = getRandomInt(1,2);
//     var payPart = [];
//     var finalPay = [];
//     if(randIndPay===1){
//         finalPay = risk_pay;
//         payPart = 3;
//         // return [finalPay,3]
//     } else {
//         finalPay = ambiguity_pay;
//         payPart = 4;
//         // return [finalPay,4]
//     }
//     html = ` <div> Part ${payPart} was selected for payment! </br>
//     Your earnings are ${finalPay} dollars. </br> 
//     <br></br>
//     We will send you ${finalPay} dollars for Part ${payPart} soon! </br> 
//     We will send you the bonus payments for Part 1 or Part 2 within the next 2 weeks. </br>
//     </div>`;
//     return html
// }

var successExp = false;
var success_guard = {
    type: 'call-function',
    func: () => { 
        successExp = true; 
    }
}


// // `<p>You have completed the task. The webcam will be closed when you close our browser.</p>`
//  var end = {
//    on_start: () => closeFullscreen(),
//   type: "html-keyboard-response",
//   stimulus: `<div>Thank you for your participation! You can close the browser to end the experiment now. </br>
//                   The webcam will turn off when you close the browser. </br>
//                   Your survey code is: ${makeSurveyCode('success')}. </br>
//                   We will send you $7 as your participant fee soon! </br> </div>`,

//  };

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}



var on_finish_callback = function () {
    // jsPsych.data.displayData();
    jsPsych.data.addProperties({
        browser_name: bowser.name,
        browser_type: bowser.version,
        subject: subject_id,
        pass_quiz_1: passedQuiz1,
        pass_quiz_2: passedQuiz2,
        interaction: jsPsych.data.getInteractionData().json(),
        windowWidth: screen.width,
        windowHight: screen.height
    });
    var data = JSON.stringify(jsPsych.data.get().values());
    $.ajax({
        type: "POST",
        url: "/data",
        data: data,
        contentType: "application/json"
    })
        .done(function () {
            // alert("your data has been saved!")
        })
        .fail(function () {
            // alert("problem occured while writing data to box.");
            // var csv = jsPsych.data.get().csv();
            // var filename = "coordination-game-test.csv";
            // downloadCSV(csv, filename);
        })
}

var trialcounter;






function startExperiment() {
    jsPsych.init({
        timeline: [
            paymentInfo,
            paymentQuestion,
            personalInfoQuestion,
            surveyQuestion,
            fullscreenEnter,
            experimentOverview,
            choiceInstructions,
            // controlQuestionChoice1,
            // controlQuestionChoice1Response,
            // controlQuestionChoice2,
            // controlQuestionChoice2Response,
            // controlQuestionChoice3,
            // controlQuestionChoice3Response,
            // controlQuestionChoice4,
            // controlQuestionChoice4Response,
            // controlQuestionChoice5,
            // controlQuestionChoice5Response,
            // controlQuestionChoice6,
            // controlQuestionChoice6Response,
            controlQuestionsChoice,
            choiceOverview,
            game_choice,
            breaktime,
            beliefInstructions,
            // controlQuestionBelief1,
            // controlQuestionBelief1Response,
            // controlQuestionBelief2,
            // controlQuestionBelief2Response,
            // controlQuestionBelief3,
            // controlQuestionBelief3Response,
            controlQuestionsBelief,
            beliefOverview,
            game_belief,
            // riskInstructions,
            // riskOverview,
            // riskSurvey,
            // ambiguityInstructions,
            // ambiguityOverview,
            // ambiguitySurvey,
            success_guard
        ],
        on_trial_finish: function () {
            trialcounter = jsPsych.data.get().count();
            if (successExp) {
                closeFullscreen()
                document.body.style.cursor = 'pointer'
                jsPsych.endExperiment(`<div>
                Thank you for your participation! You can close the browser to end the experiment now. </br>
                We will send you the payment for Part 1 or Part 2 within the next 2 weeks. </br>
                Your survey code is: ${makeSurveyCode('success')}. </br>
                </div>`);
            }
            if (trialcounter == 30) { 
                on_finish_callback();
                jsPsych.data.reset();
            }
        },
        preload_images: [instructions_images, control_images, instruct_img],
        on_finish: () => on_finish_callback(),
        on_close: () => on_finish_callback()

    });
};

function saveData() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            //   console.log(response.success);
        }
    };
    xhr.send(jsPsych.data.get().json());
}