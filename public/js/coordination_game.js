/** to do list */

// (done) change types of fails for survey code at the end
// (done) add question in the beginning about prolific ID - automatic
// (done) take out payment questions
// (done) warn them about exiting full screen mode - check code works
// add completion codes from prolific
// check if prolific id is saved


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

// // old coordination games
// var A = [
//     200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200
// ];

// var B = [
//     5,  23,  47,  69,  83, 105, 137, 144, 166, 184,  17,  23,  44,  76,  91, 119, 130, 157, 175, 184,  17,  21,  45,  61,  97, 117, 127, 146, 165, 186,  94, 121, 129, 144, 137, 159, 160, 177, 187, 195, 157, 162, 157, 161, 175, 180, 183, 181, 192, 195, 176, 172, 177, 187, 187, 190, 189, 193, 197, 198, 194, 198, 193, 198, 194, 197, 197, 197, 199, 199
// ];

// var C = [
//     80, 96, 89, 89, 93, 91, 97, 97, 98, 99, 57, 44, 69, 63, 73, 78, 83, 92, 93, 95, 13, 22, 16, 11, 51, 64, 56, 75, 82, 94,  3, 20, 30, 33, 41, 57, 63, 75, 89, 95,  0, 20, 25, 40, 46, 54, 69, 71, 83, 92,  1, 13, 28, 36, 42, 53, 62, 76, 83, 93,  9, 11, 21, 33, 41, 51, 70, 72, 81, 91
// ];

// var D = [
//     100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100
// ];

// var payoff = [A, A, C, B, B, C, D, D];

// var r = [
//     0.09302326, 0.02209945, 0.06707317, 0.07746479, 0.05645161, 0.08653846, 0.04545455, 0.05084746, 0.05555556, 0.05882353, 0.19026549, 0.24034335, 0.16577540, 0.22981366, 0.19852941, 0.21359223, 0.19540230, 0.15686275, 0.21875000, 0.23809524, 0.32222222, 0.30350195, 0.35146444, 0.39035088, 0.32236842, 0.30252101, 0.37606838, 0.31645570, 0.33962264, 0.30000000, 0.47783251, 0.50314465, 0.49645390, 0.54471545, 0.48360656, 0.51190476, 0.48051948, 0.52083333, 0.45833333, 0.50000000, 0.69930070, 0.67796610, 0.63559322, 0.60606061, 0.68354430, 0.69696970, 0.64583333, 0.60416667, 0.68000000, 0.61538462, 0.80487805, 0.75652174, 0.75789474, 0.83116883, 0.81690141, 0.82456140, 0.77551020, 0.77419355, 0.85000000, 0.77777778, 0.93814433, 0.97802198, 0.91860465, 0.97101449, 0.90769231, 0.94230769, 0.90909091, 0.90322581, 0.95000000, 0.90000000
// ];

// var r_mean = [
//     0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95
// ];

// var eu = [
//     91.16279,  98.29834,  96.44512,  97.59859,  99.04032, 100.43269, 101.68182, 102.23729, 103.66667, 104.94118,  84.20796,  81.49356,  90.71658,  94.48447,  98.21324, 104.05825, 105.86207, 108.94118, 116.40625, 120.00000,  73.25556,  76.02335,  80.66946,  84.77632,  99.03289, 105.14286, 110.15385, 114.55696, 122.07547, 125.80000,  97.13300, 110.56604, 114.39716, 123.96748, 117.89344, 130.20238, 128.83117, 140.10417, 139.87500, 147.50000, 139.86014, 142.03390, 136.22881, 136.96970, 151.26582, 155.75758, 153.60417, 148.93750, 162.56000, 158.46154, 161.17073, 154.46957, 158.35789, 172.31169, 171.07042, 174.21053, 169.02041, 172.00000, 182.45000, 176.22222, 188.18557, 195.84615, 185.43023, 195.15942, 185.32308, 191.40385, 188.18182, 187.61290, 194.05000, 189.10000
// ];

// var n_game_r = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ];

// var n_game = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70
// ];


// replace r_mean with game type (1,2,3,4) and n_game_r with n_game_type also no need for eu
var A = [
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100
];

var B = [
    50,  50,  50,  50,  50,  50,  50,  50,  60,  60,  60,  60,  60,  60,  60,  60,  70,  70,  70,  70,  70,  70,  70,  70,  80,  80,  80,  80,  80,  80,  90,  90,  90,  90,  90,  90, 110, 110, 110, 110, 110, 110, 120, 120, 120, 120, 120, 120, 130, 130, 130, 130, 130, 130, 130, 130, 140, 140, 140, 140, 140, 140, 140, 140, 150, 150, 150, 150, 150, 150, 150, 150
];

var C = [
    10,  20,  30,  40,  60,  70,  80,  90,   0,  20,  30,  40,  60,  70,  80, 100,   0,  10,  30,  40,  60,  70,  90, 100,   0,  10,  20,  80,  90, 100,   0,  10,  20,  80,  90, 100,   0,  10,  20,  80,  90, 100,   0,  10,  20,  80,  90, 100,   0,  10,  30,  40,  60,  70,  90, 100,   0,  20,  30,  40,  60,  70,  80, 100,  10,  20,  30,  40,  60,  70,  80,  90
];

var D = [
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50
];

var payoff = [A, A, C, B, B, C, D, D];

var r = [
    0.4444444,  0.3750000,  0.2857143,  0.1666667, -0.2500000, -0.6666667, -1.5000000, -4.0000000,  0.5555556,  0.4285714,  0.3333333,  0.2000000, -0.3333333, -1.0000000, -3.0000000,  5.0000000,  0.6250000,  0.5714286,  0.4000000,  0.2500000, -0.5000000, -2.0000000,  4.0000000,  2.5000000,  0.7142857,  0.6666667,  0.6000000,  3.0000000,  2.0000000,  1.6666667,  0.8333333,  0.8000000,  0.7500000,  1.5000000,  1.3333333,  1.2500000,  1.2500000,  1.3333333,  1.5000000,  0.7500000,  0.8000000,  0.8333333,  1.6666667,  2.0000000,  3.0000000,  0.6000000,  0.6666667,  0.7142857,  2.5000000,  4.0000000, -2.0000000, -0.5000000,  0.2500000,  0.4000000,  0.5714286,  0.6250000,  5.0000000, -3.0000000, -1.0000000, -0.3333333,  0.2000000,  0.3333333,  0.4285714,  0.5555556, -4.0000000, -1.5000000, -0.6666667, -0.2500000,  0.1666667,  0.2857143,  0.3750000,  0.4444444
];

var type_game = [
    3.00, 3.00, 3.00, 3.00, 1.00, 1.00, 1.00, 1.00, 3.00, 3.00, 3.00, 3.00, 1.00, 1.00, 1.00, 1.00, 3.00, 3.00, 3.00, 3.00, 1.00, 1.00, 1.00, 1.00, 3.00, 3.00, 3.00, 1.00, 1.00, 1.00, 3.00, 3.00, 3.00, 1.00, 1.00, 1.00, 4.00, 4.00, 4.00, 2.00, 2.00, 2.00, 4.00, 4.00, 4.00, 2.00, 2.00, 2.00, 4.00, 4.00, 4.00, 4.00, 2.00, 2.00, 2.00, 2.00, 4.00, 4.00, 4.00, 4.00, 2.00, 2.00, 2.00, 2.00, 4.00, 4.00, 4.00, 4.00, 2.00, 2.00, 2.00, 2.00
];

var eu = [
    5.000000,   5.000000,   5.000000,   5.000000,   5.000000,   5.000000,   5.000000,   5.000000,   5.555556,   5.428571,   5.333333,   5.200000,   4.666667,   4.000000,   2.000000,  10.000000,   6.250000,   6.142857,   5.800000,   5.500000,   4.000000,   1.000000,  13.000000,  10.000000,   7.142857,   7.000000,   6.800000,  14.000000,  11.000000,  10.000000,   8.333333,   8.200000,   8.000000,  11.000000,  10.333333,  10.000000,  12.500000,  13.000000,  14.000000,   9.500000,   9.800000,  10.000000,  16.666667,  19.000000,  26.000000,   9.200000,   9.666667,  10.000000,  25.000000,  37.000000, -11.000000,   1.000000,   7.000000,   8.200000,   9.571429,  10.000000,  50.000000, -22.000000,  -4.000000,   2.000000,   6.800000,   8.000000,   8.857143,  10.000000, -35.000000, -10.000000,  -1.666667,   2.500000,   6.666667,   7.857143,   8.750000,   9.444444
];

var n_game_r = [
    1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 14, 15, 13, 14, 15, 16, 17, 18, 16, 17, 18, 1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 16, 17, 18, 15, 16, 17, 18
];

var n_game = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72
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

var payFailQuiz1 = '50c';
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





// only success and failed
// function makeSurveyCode(status) {
//     uploadSubjectStatus(status);
//     var prefix = { 'success': 'cg', 'failed': 'sb' }[status]
//     return `${prefix}${subject_id}`;
// }

function makeSurveyCode(status) {
    uploadSubjectStatus(status);
    var prefix = { 'success': 'cg', 'failed_quiz_game': 'fg', 'failed_quiz_belief': 'fb' }[status]
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
    stimulus: `<div> In order to receive payment for this study, you will need to provide Venmo or Paypal information. <br/>
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


var should_be_in_fullscreen = false;

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
    on_start: function() {
        should_be_in_fullscreen = true; // once this trial starts, the participant should be in fullscreen
    },
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
    on_finish: () => document.body.style.cursor = 'pointer',
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
var type_gameShuffledChoice = getShuffledGameParam(type_game,randIndChoice);
var type_gameShuffledBelief = getShuffledGameParam(type_game,randIndBelief);
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

//var randDisplayOrderChoice = getRandDisplayChoice(n);

// randomize for each subject top and bottom actions
// choose either display 0 or 3 for each subject throught the experiment
var order = getRandomInt(0,3);
if (order==0){
    var randDisplayOrderChoice = Array(n).fill([0]).flat();
} else if (order==1){
    var randDisplayOrderChoice = Array(n).fill([1]).flat();
} else if (order==2){
    var randDisplayOrderChoice = Array(n).fill([2]).flat();
} else if (order==3){
    var randDisplayOrderChoice = Array(n).fill([3]).flat();
}

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
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(0))
            }
            break;
        case 1:
            var orderPayoffs = [5, 6, 7, 8, 1, 2, 3, 4]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(0))
            }
            break;
        case 2:
            var orderPayoffs = [7, 8, 5, 6, 3, 4, 1, 2]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(0))
            }
            break;
        case 3:
            var orderPayoffs = [3, 4, 1, 2, 7, 8, 5, 6]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(parseFloat(reshapedPayoff[orderPayoffs[i]-1][choice_count]).toFixed(0))
            }
            break;
      }

    return gameMatrix;
}

// number of correct answers for control questions - choice task
function getAnswersChoiceQuiz(choice_quiz_data){
    var nCorrect = 0;
    var responses = [];
    for(var i = 0; i <choice_quiz_data.length; i++){
        responses.push(choice_quiz_data[i].responses)
    }
    // var responses = choice_quiz_data[0].responses.slice(1,choice_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["200","150","100",`"0`,"TRUE","FALSE"];
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
    var responses = [];
    for(var i = 0; i <belief_quiz_data.length; i++){
        responses.push(belief_quiz_data[i].responses)
    }
    // var responses = belief_quiz_data[0].responses.slice(1,belief_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["$8","TRUE","FALSE"];
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
var question_choice_1_options = ["0",
                        "100",
                        "150",
                        "200"];
var question_choice_2_options = ["50",
                        "100",
                        "150",
                        "200"];
var question_choice_3_options = ["0",
                        "50",
                        "100",
                        "150"];
var question_choice_4_options = ["0",
                        "50",
                        "100",
                        "150"];
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

var passedQuiz1 = 1;

// question 1
var controlQuestionChoice1 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will you earn?", name: 'Q1', options: question_choice_1_options, required: true },
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
        if(data.responses.includes("200")){
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
          <div>Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will you earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            0 <br>
            100 <br>
            150 <br>
            200 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 200 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row T, then you end up in the UPPER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 200 </font> points. 
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
        { prompt: "Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will they earn?", name: 'Q2', options: question_choice_2_options, required: true },
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
        if(data.responses.includes("150")){
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
          <div>Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will they earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            50 <br>
            100 <br>
            150 <br>
            200 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 150 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row T, then you end up in the UPPER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, they will earn <font color = 'green';> 150 </font> points. 
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
        { prompt: "Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will you earn?", name: 'Q3', options: question_choice_3_options, required: true },
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
        if(data.responses.includes("100")){
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
          <div>Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will you earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            0 <br>
            100 <br>
            150 <br>
            200 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 100 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row B, then you end up in the LOWER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 100 </font> points. 
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
        { prompt: "Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will they earn?", name: 'Q4', options: question_choice_4_options, required: true },
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
        if(data.responses.includes(`"0`)){
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
          <div>Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will they earn?</div>
          <br><br/> 
          <br><br/>
          <img class = 'img_questions' src="img/control/control_img_1.png"></img>
          <br><br/>
            <br><br/>
            0 <br>
            100 <br>
            150 <br>
            200 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> 0 </font>.
            <br><br/>
            If the COLUMN CHOOSER selects the column L and you select the row B, then you end up in the LOWER-LEFT cell of the table.
            <br><br/>
            Your payoff is represented in GREEN.<br>
            The COLUMN CHOOSER'S payoff is represented in RED. <br>
            Therefore, you will earn <font color = 'green';> 0 </font> points. 
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
    on_finish: function (data) {
        document.body.style.cursor = 'none';
        nCorrectChoice = getAnswersChoiceQuiz(questions_choice_data);
        if(nCorrectChoice<4){
            should_be_in_fullscreen = false;
            survey_code = makeSurveyCode('failed_quiz_game');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectChoice} questions correctly.</br> 
            <br><br/>
            Your completion code is <span style="color:cyan;">CIEDTT4P</span>.<br/>
            Make sure you copy this code in order to get paid!
            <br><br/>
            Thank you for signing up!`);
            passedQuiz1 = 0;
        }
    }

}



// quiz about the choice task



//var passedQuiz1 = 1;
var choice_quiz_data = [];
var controlQuestionsChoice = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will you earn?", name: 'Q1', options: question_choice_1_options, required: true },
        { prompt: "Question 2: If the COLUMN CHOOSER selects the column L and you select the row T, how many points will they earn?", name: 'Q2', options: question_choice_2_options, required: true },
        { prompt: "Question 3: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will you earn?", name: 'Q3', options: question_choice_3_options, required: true },
        { prompt: "Question 4: If the COLUMN CHOOSER selects the column L and you select the row B, how many points will they earn?", name: 'Q4', options: question_choice_4_options, required: true },
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
            You will make a total of <font size=105%; font color = 'white';>72 </font>decision in this part. <br/>
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
            stimulus_type_game: () => type_gameShuffledChoice[choice_count],
            stimulus_eu: () => euShuffledChoice[choice_count],
            stimulus_n_game: () => n_gameShuffledChoice[choice_count],
            stimulus_n_game_r: () => n_game_rShuffledChoice[choice_count],
            realOrPrac: false,
            doEyeTracking: false,
            //stimulus_duration: 500,
            on_finish: function (data) {
                choice_data.push(data);
                choice_count++;
            }
        }      
    ],
    loop_function: () => choice_count < r.length, // change this to max after uploading
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
var question_belief_1_options = ["$10",
                        "$8",
                        "$6",
                        "$4"];
var question_belief_2_options = ["TRUE",
                        "FALSE"];
var question_belief_3_options = ["TRUE",
                         "FALSE"];


var questions_belief_data = [];

var feedback_question_belief_1 = [];
var feedback_question_belief_2 = [];
var feedback_question_belief_3 = [];
                         
var passedQuiz2 = 1;

// question 1
var controlQuestionBelief1 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: Suppose you estimate that 58% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?", name: 'Q1', options: question_belief_1_options, required: true },
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
    <div>Recall that you lose $0.50 for every 5% away you are from the correct answer.</div>
    <div>If you are within 5% of the correct answer, you earn $10.</div>
    <br><br/>`,
    on_finish: function (data) {
        questions_belief_data.push(data);
        if(data.responses.includes("$8")){
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
        <div>Question 1: Suppose you estimate that 58% of the other participants selected column L in this round. What will you earn if this decision is selected for payment?</div>
        <br><br/> 
        <br><br/>
        <img class = 'img_questions' src="img/control/control_img_2.png"></img>
        <br><br/>
        <div>Recall that you lose $0.50 for every 5% away you are from the correct answer.</div>
        <div>If you are within 5% of the correct answer, you earn $10.</div>
            <br><br/>
            $10 <br>
            $8 <br>
            $6 <br>
            $4 <br>
            <br><br/>
            The correct answer is: <font color = 'green';> $8 </font>.
            <br><br/>
            The error in your estimate is |80% - 58%| = 22%.
            <br><br/>
            Therefore, you earn $10 - $2 = <font color = 'green';> $8 </font>. 
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
        { prompt: "Question 2: The closer your estimate is to the true answer the more you earn.", name: 'Q2', options: question_belief_2_options, required: true },
    ],
    preamble: `<div> 
    <br><br/>
    Please answer the following question. </div>
    <br><br/>`,
    on_finish: function (data) {
        questions_belief_data.push(data);
        if(data.responses.includes("TRUE")){
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
        <div>Question 2: The closer your estimate is to the true answer the more you earn.</div>
        <br><br/> 
            The correct answer is: <font color = 'green';> TRUE </font>.
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
    on_finish: function (data) {
        document.body.style.cursor = 'none';
        nCorrectBelief = getAnswersBeliefQuiz(questions_belief_data);
        if(nCorrectBelief<2){
            should_be_in_fullscreen = false;
            survey_code = makeSurveyCode('failed_quiz_belief');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectBelief} questions correctly.  </br> 
            You will receive  ${payFailQuiz2} for making it this far. </br>
            <br><br/>
            Your completion code is <span style="color:cyan;">C1EQA4GP</span>.<br/>
            Make sure you copy this code in order to get paid!
            <br><br/>
            Thank you for signing up!`);
            passedQuiz2 = 0;
        }
    }
}



// old version - without feedback
//var passedQuiz2 = 1;
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
            <div>If your estimate is within 5% of the correct answer you earn $8</div>
            <div>If your estimate is between 5% and 10% of the correct answer you earn $6</div>
            <div>If your estimate is between 10% and 15% of the correct answer you earn $4</div>
            <div>Otherwise you earn $2</div>
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
            You will make a total of <font size=105%; font color = 'white';>72 </font>decision in this part. <br/>
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
            stimulus_type_game: () => type_gameShuffledBelief[belief_count],
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
    loop_function: () => belief_count < r.length, // change this to length of array: 105 
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

var fullscreenExit = {
    type: 'call-function',
    func: () => { 
      should_be_in_fullscreen = false; // once this trial starts, the participant is no longer required to stay in fullscreen
    }
};

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

// get prolific ID from subjects

// capture info from Prolific
var prolific_subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var prolific_study_id = jsPsych.data.getURLVariable('STUDY_ID');
var prolific_session_id = jsPsych.data.getURLVariable('SESSION_ID');

var on_finish_callback = function () {
    // jsPsych.data.displayData();
    jsPsych.data.addProperties({
        browser_name: bowser.name,
        browser_type: bowser.version,
        subject: subject_id,
        pass_quiz_1: passedQuiz1,
        pass_quiz_2: passedQuiz2,
        prolific_subject_id: prolific_subject_id,
        prolific_study_id: prolific_study_id,
        prolific_session_id: prolific_session_id,
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
            // paymentInfo,
            // paymentQuestion,
            // personalInfoQuestion,
            // surveyQuestion,
            fullscreenEnter,
            experimentOverview,
            choiceInstructions,
            controlQuestionChoice1,
            controlQuestionChoice1Response,
            controlQuestionChoice2,
            controlQuestionChoice2Response,
            controlQuestionChoice3,
            controlQuestionChoice3Response,
            controlQuestionChoice4,
            controlQuestionChoice4Response,
            controlQuestionChoice5,
            controlQuestionChoice5Response,
            controlQuestionChoice6,
            controlQuestionChoice6Response,
                //controlQuestionsChoice,
            choiceOverview,
            game_choice,
            breaktime,
            beliefInstructions,
            controlQuestionBelief1,
            controlQuestionBelief1Response,
            controlQuestionBelief2,
            controlQuestionBelief2Response,
            controlQuestionBelief3,
            controlQuestionBelief3Response,
                //controlQuestionsBelief,
            beliefOverview,
            game_belief,
                // riskInstructions,
                // riskOverview,
                // riskSurvey,
                // ambiguityInstructions,
                // ambiguityOverview,
                // ambiguitySurvey,
            fullscreenExit,
            success_guard
        ],
        on_trial_finish: function () {
            trialcounter = jsPsych.data.get().count();
            if (successExp) {
                closeFullscreen();
                survey_code = makeSurveyCode('success');
                //Your survey code is: ${makeSurveyCode('success')}. </br>
                document.body.style.cursor = 'pointer'
                jsPsych.endExperiment(`<div>
                Thank you for your participation!</br>
                We will send you the payment for Part 1 or Part 2 soon. </br>
                <br></br>
                Your completion code is <span style="color:cyan;">CQB85KI2</span>.<br/>
                Make sure you copy this code in order to get paid! </br>
                <br></br>
                You can close the browser to end the experiment now. </br>
                </div>`);
            }
            if (trialcounter == 40) { 
                on_finish_callback();
                jsPsych.data.reset();
            }
        },
        // on_interaction_data_update: function(data){
        //     if(data.event == 'fullscreenexit'){
        //         on_finish_callback();
        //         jsPsych.endExperiment('You have exited out of fullscreen mode.</br>  Unfortunately, we cannot continue with the study.</br> <br></br> Your completion code is <span style="color:cyan;">CIEDTT4P</span>.'); 
        //     }
        // },
        on_interaction_data_update: function(data){
            if(data.event == 'fullscreenexit' && should_be_in_fullscreen){
              console.log('exited fullscreen');
              // hide the contents of the current trial
              jsPsych.getDisplayElement().style.visibility = 'hidden';
              // add a div that contains a message and button to re-enter fullscreen
              jsPsych.getDisplayElement().insertAdjacentHTML('beforebegin',
              '<div id="message-div" style="margin: auto; width: 100%; text-align: center; position: absolute; top: 40%;">'+
              '<p>Please remain in fullscreen mode during the task.</p>'+
              '<p>When you click the button below, you will enter fullscreen mode.</p>'+
              '<button id="jspsych-fullscreen-btn" class="jspsych-btn">Continue</button></div>');
              // call the request fullscreen function when the button is clicked
              document.querySelector('#jspsych-fullscreen-btn').addEventListener('click', function() {
                var element = document.documentElement;
                if (element.requestFullscreen) {
                  element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                  element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                  element.msRequestFullscreen();
                }
              });
            }
            if(data.event == 'fullscreenenter'){
              console.log('entered fullscreen');
              // when entering fullscreen, check to see if the participant is re-entering fullscreen, 
              // i.e. the 'please enter fullscreen' message is on the page
              var msg_div = document.querySelector('#message-div');
              if (msg_div !== null) {
                // remove the message
                msg_div.remove(); 
                // show the contents of the current trial again
                jsPsych.getDisplayElement().style.visibility = 'visible';
              }
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