/** to do list */

// test version

// couldn't make nice border as feedback after choice :(
// check if enough data displayed in the plugin
// decide on final payment based on average duration from pilot
// change game payoffs if needed and belief task payoffs (and instructions payoffs and control questions payoffs)
// (done) change trial number
// (done) correct choice quiz answer
// (done) simplify instructions - attach new instructions
// (done) check if commits are made with the right account
// (done) change the color of the table for the belief task
// (done) get rid of eyetracking code
// (done) add venmo payment question
// (done) stop camera from turnion on at the beginning
// arange one of each type of risk level game in the beginning?
// (done) include better payment variables

// generate payoffs
var rVec = [0.55, 0.6, 0.7, 0.8, 0.9, 0.95];
var min_payoff = 5;
generateDesign = function(min_payoff,rVec){
    // determine multiplier based on risk levels
    var xVec = [];
    for(var i = 0; i < rVec.length; i++){
        var m = rVec[i]/(1-rVec[i]);
        xVec.push(m);
    }
    var cVec = min_payoff;
    var dVec = Array(5).fill().map((element, index) => index + cVec);
    var bVec = Array(5).fill().map((element, index) => index + cVec);
    var aVec = [];
    var A = [];
    var B = [];
    var C = [];
    var D = [];
    var E = [];
    var R = [];
    for(var x = 0; x < xVec.length; x++){
        for(var d = 0; d < dVec.length; d++){
            for(var b = 0; b < bVec.length; b++){
                if(bVec[b]>=dVec[d] & dVec[d]>cVec & xVec[x]>1){
                    aVec = (dVec[d]-cVec)/xVec[x] + bVec[b];
                    r = (dVec[d]-cVec)/(dVec[d]-cVec+aVec-bVec[b]);
                    eu = r*aVec + (1-r)*cVec;
                    A.push(aVec);
                    B.push(bVec[b]);
                    C.push(cVec);
                    D.push(dVec[d]);
                    R.push(r);
                    E.push(eu);
                    aVec = [];
                }
            }
        }
    }
    var design = [A,A,C,B,B,C,D,D];
    return  [design,R,E];
}
var design = generateDesign(min_payoff,rVec);
var payoff = design[0];
var r = design[1];
var eu = design[2];

// // payoffs list
// var payoff = [
//     6.66666666666667,7.66666666666667,8.66666666666667,9.66666666666667,8.33333333333333,9.33333333333333,10.3333333333333,10,11,11.6666666666667,6.50000000000000,7.50000000000000,8.50000000000000,9.50000000000000,8,9,10,9.50000000000000,10.5000000000000,11,6.33333333333333,7.33333333333333,8.33333333333333,9.33333333333333,7.66666666666667,8.66666666666667,9.66666666666667,9,10,10.3333333333333,6.25000000000000,7.25000000000000,8.25000000000000,9.25000000000000,7.50000000000000,8.50000000000000,9.50000000000000,8.75000000000000,9.75000000000000,10,6.20000000000000,7.20000000000000,8.20000000000000,9.20000000000000,7.40000000000000,8.40000000000000,9.40000000000000,8.60000000000000,9.60000000000000,9.80000000000000,6.16666666666667,7.16666666666667,8.16666666666667,9.16666666666667,7.33333333333333,8.33333333333333,9.33333333333333,8.50000000000000,9.50000000000000,9.66666666666667,6.14285714285714,7.14285714285714,8.14285714285714,9.14285714285714,7.28571428571429,8.28571428571429,9.28571428571429,8.42857142857143,9.42857142857143,9.57142857142857,6.12500000000000,7.12500000000000,8.12500000000000,9.12500000000000,7.25000000000000,8.25000000000000,9.25000000000000,8.37500000000000,9.37500000000000,9.50000000000000,6.11111111111111,7.11111111111111,8.11111111111111,9.11111111111111,7.22222222222222,8.22222222222222,9.22222222222222,8.33333333333333,9.33333333333333,9.44444444444445,6.66666666666667,7.66666666666667,8.66666666666667,9.66666666666667,8.33333333333333,9.33333333333333,10.3333333333333,10,11,11.6666666666667,6.50000000000000,7.50000000000000,8.50000000000000,9.50000000000000,8,9,10,9.50000000000000,10.5000000000000,11,6.33333333333333,7.33333333333333,8.33333333333333,9.33333333333333,7.66666666666667,8.66666666666667,9.66666666666667,9,10,10.3333333333333,6.25000000000000,7.25000000000000,8.25000000000000,9.25000000000000,7.50000000000000,8.50000000000000,9.50000000000000,8.75000000000000,9.75000000000000,10,6.20000000000000,7.20000000000000,8.20000000000000,9.20000000000000,7.40000000000000,8.40000000000000,9.40000000000000,8.60000000000000,9.60000000000000,9.80000000000000,6.16666666666667,7.16666666666667,8.16666666666667,9.16666666666667,7.33333333333333,8.33333333333333,9.33333333333333,8.50000000000000,9.50000000000000,9.66666666666667,6.14285714285714,7.14285714285714,8.14285714285714,9.14285714285714,7.28571428571429,8.28571428571429,9.28571428571429,8.42857142857143,9.42857142857143,9.57142857142857,6.12500000000000,7.12500000000000,8.12500000000000,9.12500000000000,7.25000000000000,8.25000000000000,9.25000000000000,8.37500000000000,9.37500000000000,9.50000000000000,6.11111111111111,7.11111111111111,8.11111111111111,9.11111111111111,7.22222222222222,8.22222222222222,9.22222222222222,8.33333333333333,9.33333333333333,9.44444444444445,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,6,7,8,9,7,8,9,8,9,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9,6,6,6,6,7,7,7,8,8,9
//     // 2.66666666666667,3.66666666666667,4.66666666666667,5.66666666666667,4.33333333333333,5.33333333333333,6.33333333333333,6,7,7.66666666666667,2.50000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4,5,6,5.50000000000000,6.50000000000000,7,2.33333333333333,3.33333333333333,4.33333333333333,5.33333333333333,3.66666666666667,4.66666666666667,5.66666666666667,5,6,6.33333333333333,2.25000000000000,3.25000000000000,4.25000000000000,5.25000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4.75000000000000,5.75000000000000,6,2.20000000000000,3.20000000000000,4.20000000000000,5.20000000000000,3.40000000000000,4.40000000000000,5.40000000000000,4.60000000000000,5.60000000000000,5.80000000000000,2.16666666666667,3.16666666666667,4.16666666666667,5.16666666666667,3.33333333333333,4.33333333333333,5.33333333333333,4.50000000000000,5.50000000000000,5.66666666666667,2.14285714285714,3.14285714285714,4.14285714285714,5.14285714285714,3.28571428571429,4.28571428571429,5.28571428571429,4.42857142857143,5.42857142857143,5.57142857142857,2.12500000000000,3.12500000000000,4.12500000000000,5.12500000000000,3.25000000000000,4.25000000000000,5.25000000000000,4.37500000000000,5.37500000000000,5.50000000000000,2.11111111111111,3.11111111111111,4.11111111111111,5.11111111111111,3.22222222222222,4.22222222222222,5.22222222222222,4.33333333333333,5.33333333333333,5.44444444444445,2.66666666666667,3.66666666666667,4.66666666666667,5.66666666666667,4.33333333333333,5.33333333333333,6.33333333333333,6,7,7.66666666666667,2.50000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4,5,6,5.50000000000000,6.50000000000000,7,2.33333333333333,3.33333333333333,4.33333333333333,5.33333333333333,3.66666666666667,4.66666666666667,5.66666666666667,5,6,6.33333333333333,2.25000000000000,3.25000000000000,4.25000000000000,5.25000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4.75000000000000,5.75000000000000,6,2.20000000000000,3.20000000000000,4.20000000000000,5.20000000000000,3.40000000000000,4.40000000000000,5.40000000000000,4.60000000000000,5.60000000000000,5.80000000000000,2.16666666666667,3.16666666666667,4.16666666666667,5.16666666666667,3.33333333333333,4.33333333333333,5.33333333333333,4.50000000000000,5.50000000000000,5.66666666666667,2.14285714285714,3.14285714285714,4.14285714285714,5.14285714285714,3.28571428571429,4.28571428571429,5.28571428571429,4.42857142857143,5.42857142857143,5.57142857142857,2.12500000000000,3.12500000000000,4.12500000000000,5.12500000000000,3.25000000000000,4.25000000000000,5.25000000000000,4.37500000000000,5.37500000000000,5.50000000000000,2.11111111111111,3.11111111111111,4.11111111111111,5.11111111111111,3.22222222222222,4.22222222222222,5.22222222222222,4.33333333333333,5.33333333333333,5.44444444444445,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5
// ];

// // r list
// var r = [
//     0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.750000000000000,0.750000000000001,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.833333333333333,0.833333333333334,0.833333333333334,0.833333333333334,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.857142857142857,0.857142857142856,0.857142857142858,0.857142857142858,0.857142857142858,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000
//     // 0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.857142857142857,0.857142857142858,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000
// ];

// // eu list
// var eu = [
//     6,6.60000000000000,7.20000000000000,7.80000000000000,7,7.60000000000000,8.20000000000000,8,8.60000000000000,9,6,6.66666666666667,7.33333333333333,8,7,7.66666666666667,8.33333333333333,8,8.66666666666667,9,6,6.75000000000000,7.50000000000000,8.25000000000000,7.00000000000000,7.75000000000000,8.50000000000000,8,8.75000000000000,9,6,6.80000000000000,7.60000000000000,8.40000000000000,7,7.80000000000000,8.60000000000000,8,8.80000000000000,9,6,6.83333333333334,7.66666666666667,8.50000000000000,7,7.83333333333333,8.66666666666667,8,8.83333333333333,9,6,6.85714285714286,7.71428571428572,8.57142857142857,7.00000000000000,7.85714285714286,8.71428571428571,8,8.85714285714286,9,6,6.87500000000000,7.75000000000000,8.62500000000000,7.00000000000000,7.87500000000000,8.75000000000000,8,8.87500000000000,9,6,6.88888888888889,7.77777777777778,8.66666666666667,7,7.88888888888889,8.77777777777778,8,8.88888888888889,9,6,6.90000000000000,7.80000000000000,8.70000000000000,7.00000000000000,7.90000000000000,8.80000000000000,8,8.90000000000000,9
//     // 2,2.60000000000000,3.20000000000000,3.80000000000000,3,3.60000000000000,4.20000000000000,4.00000000000000,4.60000000000000,5,2,2.66666666666667,3.33333333333333,4,3,3.66666666666667,4.33333333333333,4,4.66666666666667,5.00000000000000,2,2.75000000000000,3.50000000000000,4.25000000000000,3.00000000000000,3.75000000000000,4.50000000000000,4,4.75000000000000,5.00000000000000,2,2.80000000000000,3.60000000000000,4.40000000000000,3,3.80000000000000,4.60000000000000,4,4.80000000000000,5.00000000000000,2,2.83333333333333,3.66666666666667,4.50000000000000,3,3.83333333333333,4.66666666666667,4.00000000000000,4.83333333333333,5,2,2.85714285714286,3.71428571428571,4.57142857142857,3.00000000000000,3.85714285714286,4.71428571428571,4.00000000000000,4.85714285714286,5.00000000000000,2,2.87500000000000,3.75000000000000,4.62500000000000,3,3.87500000000000,4.75000000000000,4.00000000000000,4.87500000000000,5,2,2.88888888888889,3.77777777777778,4.66666666666667,3,3.88888888888889,4.77777777777778,4,4.88888888888889,5,2,2.90000000000000,3.80000000000000,4.70000000000000,3,3.90000000000000,4.80000000000000,4,4.90000000000000,5
// ];


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

var payFailQuiz1 = '75c';
var payFailQuiz2 = '300c';

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
                        "Paypal",
                        "Zelle"];

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
        { prompt: "What is the account name or email address associated with your Venmo/Paypal/Zelle account? ", rows: 1, columns: 50, required: true },
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
var euShuffledChoice = getShuffledGameParam(eu,randIndChoice);
var euShuffledBelief = getShuffledGameParam(eu,randIndBelief);

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
    var correctAnswers = ["10","10","9","5","TRUE","TRUE"];
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

// quiz about the choice task
var question_choice_1_options = ["10",
                        "9",
                        "8",
                        "5"];
var question_choice_2_options = ["10",
                        "9",
                        "8",
                        "5"];
var question_choice_3_options = ["10",
                        "9",
                        "8",
                        "5"];
var question_choice_4_options = ["10",
                        "9",
                        "8",
                        "5"];
var question_choice_5_options = ["TRUE",
                        "FALSE"];
var question_choice_6_options = ["TRUE",
                        "FALSE"];

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
        Thanks for choosing our experiment! Please answer the following questions to begin today's study.</div>
        <br><br/>
        <div>The following questionnaire is meant to test your understanding of the instructions.</div>
        <br><br/>
        <div>If you answer less than 4 of the 6 questions correct, you will not be able to participate in the study and will receive a payment of ${payFailQuiz1}.</div>
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
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectChoice} questions correctly.  </br> You will receive ${payFailQuiz1} for making it this far. Your survey code is: ${survey_code}${payFailQuiz1}. Thank you for signing up!`);
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
            stimulus_eu: () => euShuffledChoice[choice_count],
            realOrPrac: false,
            doEyeTracking: false,
            // stimulus_duration: 3000,
            on_finish: function (data) {
                choice_data.push(data);
                choice_count++;
            }
        }      
    ],
    loop_function: () => choice_count < 15// r.length, // change this to 60 after uploading
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
        Please answer the following questions to begin today's study.</div>
        <br><br/>
        <div>The following questionnaire is meant to test your understanding of the instructions.</div>
        <br><br/>
        <div>If you answer less than 2 of the 3 questions correct, you will not be able to participate in the study and will receive a payment of ${payFailQuiz2}.</div>
        <br><br/>
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
            stimulus_r: () => randIndBelief[belief_count],
            stimulus_eu: () => randIndBelief[belief_count],
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
    loop_function: () => belief_count < 15 // r.length, // change this to length of array: 105 
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
            In this experiment you will be presented with a series of lottery choices. </br>
            <br><br/>
            Your job is to indicate which option you would prefer for each of the ten paired lottery choices.</div>
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
            In this experiment you will be presented with a series of lottery choices. </br>
            <br><br/>
            Your job is to indicate which option you would prefer for each of the ten paired lottery choices.</div>
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






function getFinalPay(risk_pay,ambiguity_pay){
    // select randomly part 3 or part 4 payment
    var randIndPay = getRandomInt(1,2);
    var payPart = [];
    var finalPay = [];
    if(randIndPay===1){
        finalPay = risk_pay;
        payPart = 3;
        // return [finalPay,3]
    } else {
        finalPay = ambiguity_pay;
        payPart = 4;
        // return [finalPay,4]
    }
    return [finalPay,payPart];
}


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

var finalPay = [0, 0];
var successExp = false;
var success_guard = {
    type: 'call-function',
    func: () => { 
        successExp = true; 
        finalPay = getFinalPay(risk_pay,ambiguity_pay);
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
        subject: subject_id,
        interaction: jsPsych.data.getInteractionData().json(),
        pass_quiz_1: passedQuiz1,
        pass_quiz_2: passedQuiz2,
        payment: finalPay[0],
        payment_part: finalPay[1],
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
            controlQuestionsChoice,
            choiceOverview,
            game_choice,
            breaktime,
            beliefInstructions,
            controlQuestionsBelief,
            beliefOverview,
            game_belief,
            riskInstructions,
            riskOverview,
            riskSurvey,
            ambiguityInstructions,
            ambiguityOverview,
            ambiguitySurvey,
            success_guard
        ],
        on_trial_finish: function () {
            trialcounter = jsPsych.data.get().count();
            if (successExp) {
                closeFullscreen()
                document.body.style.cursor = 'pointer'
                jsPsych.endExperiment(`<div>
                Thank you for your participation! You can close the browser to end the experiment now. </br>
                Part ${finalPay[1]} was selected for payment! </br>
                Your earnings are ${finalPay[0]} dollars. </br> 
                <br></br>
                We will send you ${finalPay[0]} dollars for Part ${finalPay[1]} soon! </br> 
                We will send you the bonus payments for Part 1 or Part 2 within the next 2 weeks. </br>
                The webcam will turn off when you close the browser. </br>
                Your survey code is: ${makeSurveyCode('success')}${finalPay[0]*100}. </br>
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