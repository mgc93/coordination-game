/*
 * a plugin for binary choices - two attributes
 * type for params: BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
 */

jsPsych.plugins["binary-choice-game"] = (function () {

  var plugin = {};

  plugin.info = {

    name: "binary-choice-game",
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'choices',
        default: ['F', 'J'], //jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      timing_response: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'timing_response',
        default: 0,
        description: 'timing_response.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_duration',
        default: null,
        description: 'Display time of stimulus, regardless of when choice is made'
      },
      stimulus_order: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_order',
        default: null,
        description: 'Game matrix number'
      },
      stimulus_display: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_display',
        default: null,
        description: 'Display type of the game matrix'
      },
      stimulus_r: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_r',
        default: null,
        description: 'Riskiness parameter of the game'
      },
      stimulus_type_game: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_type_game',
        default: null,
        description: 'Mean riskiness parameter of the game'
      },
      stimulus_eu: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_eu',
        default: null,
        description: 'Expected utility parameter of the game'
      },
      stimulus_n_game: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_n_game',
        default: null,
        description: 'Original Game Number'
      },
      stimulus_n_game_r: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'stimulus_n_game_r',
        default: null,
        description: 'Original game number within the same mean riskiness level'
      },
      doEyeTracking: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'eye-tracking',
        default: true,
        description: 'Whether to do the eye tracking during this trial.'
      },
      realOrPrac: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'eye-tracking',
        default: true,
        description: 'Whether it is a real choice, real- true'
      }
      }  
  };

  /**
   * trial method is responsible for running a single trial. 
   * parameters:
   * display_element: DOM element where jsPsych content is being generated --> HTML element
   * this parameter can change th content of the display: display_element.innerHTML = html_content;
   * trial: an object containing all the parameters specified in the correspnding TimelineNode. Need to call jsPsych.finishTrial() when it is done.
   */

  plugin.trial = function (display_element, trial) {
    // set default values for the parameters
    trial.choices = trial.choices || [];
    //trial.timing_stim = trial.timing_stim || -1;
    trial.timing_response = trial.timing_response || -1;
    // trial.display_time = trial.display_time || -1;
    // var selected_color = 'rgb(5, 157, 190)';
    var selected_color = 'rgb(255, 255, 255)';
    var setTimeoutHandlers = [];
    var keyboardListener;
   
    var response = {
      rt: -1,
      key: -1
    };

    // display stimuli
    var display_stage = function () {
      
      //console.log('display_stage');
    
      kill_timers();
      kill_listeners();

      display_element.innerHTML = '';
      var new_html = '';

      new_html += '<div class="container-multi-choice">';
      new_html += `<table class="tg">`;
      new_html += `<thead>`;
      new_html += `</thead>`;
      new_html += `<tbody>`;
      new_html += `  <tr>`;
      new_html += `    <td class="tg-0lax-other"></td>`;
      new_html += `    <td class="tg-baqh-other" colspan="2"><div class = "action-other" id = "action-other-left">L</div></td>`;
      new_html += `    <td class="tg-baqh-other" colspan="2"><div class = "action-other" id = "action-other-right">R</div></td>`;
      new_html += `  </tr>`;
      new_html += `  <tr class="row-1">`;
      new_html += `    <td class="container-multi-choice-column" id= "multiattribute-choices-stimulus-top" rowspan="2"><div class = "action-self" id = "action-self-top">T</div></td>`;
      new_html += `    <td class="tg-0lax-top"></td>`;
      new_html += `    <td class="tg-viqs"><div class = "points-other" id="points-top-other-left">${trial.stimulus[1]}</div></td>`;
      new_html += `    <td class="tg-0lax-top"></td>`;
      new_html += `    <td class="tg-viqs"><div class = "points-other" id="points-top-other-right">${trial.stimulus[3]}</div></td>`;
      new_html += `  </tr>`;
      new_html += `  <tr class="row-2">`;
      new_html += `    <td class="tg-ti2t"><div class = "points-self" id="points-top-self-left">${trial.stimulus[0]}</div></td>`;
      new_html += `    <td class="tg-0lax"></td>`;
      new_html += `    <td class="tg-ti2t"><div class = "points-self" id="points-top-self-right">${trial.stimulus[2]}</div></td>`;
      new_html += `    <td class="tg-0lax"></td>`;
      new_html += `  </tr>`;
      new_html += `  <tr class="row-3">`;
      new_html += `    <td class="container-multi-choice-column" id= "multiattribute-choices-stimulus-bottom" rowspan="2"><div class = "action-self" id = "action-self-bottom">B</div></td>`;
      new_html += `    <td class="tg-0lax-top"></td>`;
      new_html += `    <td class="tg-viqs"><div class = "points-other" id="points-bottom-other-left">${trial.stimulus[5]}</div></td>`;
      new_html += `    <td class="tg-0lax-top"></td>`;
      new_html += `    <td class="tg-viqs"><div class = "points-other" id="points-bottom-other-right">${trial.stimulus[7]}</div></td>`;
      new_html += `  </tr>`;
      new_html += `  <tr class="row-4">`;
      new_html += `    <td class="tg-ti2t"><div class = "points-self" id="points-bottom-self-left">${trial.stimulus[4]}</div></td>`;
      new_html += `    <td class="tg-0lax"></td>`;
      new_html += `    <td class="tg-ti2t"><div class = "points-self" id="points-bottom-self-right">${trial.stimulus[6]}</div></td>`;
      new_html += `    <td class="tg-0lax"></td>`;
      new_html += `  </tr>`;
      new_html += `</tbody>`;
      new_html += `</table>`;
      new_html += '<div id="binary-timeoutinfo"></div>';
      new_html += '</div>';

      display_element.innerHTML = new_html;
    };

    // to display a border around the chosen option
    var display_selection = function () {
      //var selected;
      if (jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(response.key) == trial.choices[0]) {
        display_element.querySelector('.row-1').className += '-responded';
        display_element.querySelector('.row-2').className += '-responded';
        //var selected = '#multiattribute-choices-stimulus-left';
      } else if(jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(response.key) == trial.choices[1]) {
        display_element.querySelector('.row-3').className += '-responded';
        display_element.querySelector('.row-4').className += '-responded';
        //var selected = '#multiattribute-choices-stimulus-right';
      }
      //$(selected).css('border', `6px solid ${selected_color}`);
    };

    var display_timeout = function () {
      $('binary-timeoutinfo').text('Time out!');
    };

    var kill_timers = function () {
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
    };


    var kill_listeners = function () {
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }
    };

    var start_response_listener = function () {
      if (trial.choices != jsPsych.NO_KEYS) {
        keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          valid_responses: trial.choices,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false,
          callback_function: function (info) {
            kill_listeners();
            kill_timers();
            response = info;
            display_selection();
            if (trial.stimulus_duration === null) {
              setTimeout(() => end_trial(false), 500);
            } else { 
              setTimeout(() => end_trial(false), trial.stimulus_duration - response.rt);
            }
          },
        });
      }
    };


    
    var display_stimuli = function () {
      kill_timers();
      kill_listeners();
      display_stage();
      start_response_listener();
  
      if (trial.timing_response > 0) {
        var response_timer = setTimeout(function () {
          kill_listeners();
          display_timeout();
          setTimeout(() => end_trial(true), 500); 
        }, trial.timing_response);
         setTimeoutHandlers.push(response_timer);
      }
    };

    
    


    var end_trial = function (timeout) {

   //   webgazer.pause();
   ///   clearInterval(eye_tracking_interval);
   if(trial.doEyeTracking) {
    webgazer.pause();
    clearInterval(eye_tracking_interval); }
      // data saving
      var trial_data = {
        "stimulus": trial.stimulus,
        "top_stimulus":trial.stimulus.slice(0,4),
        "bottom_stimulus": trial.stimulus.slice(4),
        "game_number": trial.stimulus_order,
        "display_order": trial.stimulus_display,
        "game_r": trial.stimulus_r,
        "game_type": trial.stimulus_type_game,
        "game_eu": trial.stimulus_eu,
        "n_game": trial.stimulus_n_game,
        "n_game_r": trial.stimulus_n_game_r,
        "rt": response.rt,
        "key_press": response.key,
        "choices": trial.choices,
        "eyeData": JSON.stringify(eyeData),
        "realtrial":  trial.realOrPrac
      };
      // console.log(trial_data);
      jsPsych.finishTrial(trial_data);
    };

    var eyeData = {history:[]};
    display_stimuli();
    if(trial.doEyeTracking) {
      webgazer.resume();
    webgazer.showVideo(false);
    webgazer.showFaceOverlay(false);
    webgazer.showFaceFeedbackBox(false);
    var starttime = performance.now();
    var eye_tracking_interval = setInterval(
      function() {
        var pos = webgazer.getCurrentPrediction();
        if (pos) {

          var relativePosX = pos.x/screen.width ;
          var relativePosY = pos.y/screen.height;
          var relativePosX2= pos.x/innerWidth ;
          var relativePosY2 = pos.y/innerHeight;
          eyeData.history.push({
           // 'x': pos.x,
          //  'y': pos.y,
            'relative-x': relativePosX,
            'relative-y': relativePosY,
            'relative-x2': relativePosX2,
            'relative-y2': relativePosY2,
            'elapse-time': performance.now() - starttime
          });
        }
      },20);
    }

    
  };

  return plugin;
})();