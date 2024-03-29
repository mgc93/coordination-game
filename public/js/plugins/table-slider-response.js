/**
 * jspsych-image-slider-response
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['table-slider-response'] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('table-slider-response', 'stimulus', 'image');

  plugin.info = {
    name: 'table-slider-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The table to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
      start: {
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: 'Slider starting value',
				default: 50,
				description: 'Sets the starting value of the slider',
			},
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 1,
        description: 'Sets the step of the slider'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: [],
        array: true,
        description: 'Labels of the slider.',
      },
      slider_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name:'Slider width',
        default: null,
        description: 'Width of the slider in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: false,
        description: 'If true, the participant will have to move the slider before continuing.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
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
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    var html = '<div id="jspsych-image-slider-response-wrapper">';
    // html += '<button type="button" id = "dislike-button" class="jspsych-btn"  margin = "4px 2px" '+ (trial.require_movement ? "disabled" : "") + '>' + 'DISLIKE</button>';
    // html += '<br></br>';
    html += '<br></br>';
    // html += '<div id="jspsych-image-slider-response-stimulus">';
    // html += '<img src="'+trial.stimulus+'" style="';
    // if(trial.stimulus_height !== null){
    //   html += 'height:'+trial.stimulus_height+'px; '
    //   if(trial.stimulus_width == null && trial.maintain_aspect_ratio){
    //     html += 'width: auto; ';
    //   }
    // }
    // if(trial.stimulus_width !== null){
    //   html += 'width:'+trial.stimulus_width+'px; '
    //   if(trial.stimulus_height == null && trial.maintain_aspect_ratio){
    //     html += 'height: auto; ';
    //   }
    // }
    // html += '"></img>';
    html += `<table class="tb" id="jspsych-image-slider-response-stimulus">`;
    html += `<thead>`;
    html += `</thead>`;
    html += `<tbody>`;
    html += `  <tr>`;
    html += `    <td class="tb-0lax-other"></td>`;
    html += `    <td class="tb-baqh-other" colspan="2"><div class = "action-other" id = "action-other-left">L</div></td>`;
    html += `    <td class="tb-baqh-other" colspan="2"><div class = "action-other" id = "action-other-right">R</div></td>`;
    html += `  </tr>`;
    html += `  <tr>`;
    html += `    <td class="container-multi-choice-column" id= "multiattribute-choices-stimulus-top" rowspan="2"><div class = "action-self" id = "action-self-top">T</div></td>`;
    html += `    <td class="tb-0lax-top"></td>`;
    html += `    <td class="tb-viqs"><div class = "points-other" id="points-top-other-left">${trial.stimulus[1]}</div></td>`;
    html += `    <td class="tb-0lax-top"></td>`;
    html += `    <td class="tb-viqs"><div class = "points-other" id="points-top-other-right">${trial.stimulus[3]}</div></td>`;
    html += `  </tr>`;
    html += `  <tr>`;
    html += `    <td class="tb-ti2t"><div class = "points-self" id="points-top-self-left">${trial.stimulus[0]}</div></td>`;
    html += `    <td class="tb-0lax"></td>`;
    html += `    <td class="tb-ti2t"><div class = "points-self" id="points-top-self-right">${trial.stimulus[2]}</div></td>`;
    html += `    <td class="tb-0lax"></td>`;
    html += `  </tr>`;
    html += `  <tr>`;
    html += `    <td class="container-multi-choice-column" id= "multiattribute-choices-stimulus-bottom" rowspan="2"><div class = "action-self" id = "action-self-bottom">B</div></td>`;
    html += `    <td class="tb-0lax-top"></td>`;
    html += `    <td class="tb-viqs"><div class = "points-other" id="points-bottom-other-left">${trial.stimulus[5]}</div></td>`;
    html += `    <td class="tb-0lax-top"></td>`;
    html += `    <td class="tb-viqs"><div class = "points-other" id="points-bottom-other-right">${trial.stimulus[7]}</div></td>`;
    html += `  </tr>`;
    html += `  <tr>`;
    html += `    <td class="tb-ti2t"><div class = "points-self" id="points-bottom-self-left">${trial.stimulus[4]}</div></td>`;
    html += `    <td class="tb-0lax"></td>`;
    html += `    <td class="tb-ti2t"><div class = "points-self" id="points-bottom-self-right">${trial.stimulus[6]}</div></td>`;
    html += `    <td class="tb-0lax"></td>`;
    html += `  </tr>`;
    html += `</tbody>`;
    html += `</table>`;
    // html += '</div>';
    html += '<div class="jspsych-image-slider-response-container"';
    // if(trial.slider_width !== null){
    //   html += 'width:'+trial.slider_width+'px;';
    // }
    html += '>';
    //html += '<br></br>';
    html += '<input type="range" value="'+trial.start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" style="width: 100%;" id="jspsych-image-slider-response-response"></input>';
    html += '<div>'
    for(var j=0; j < trial.labels.length; j++){
      var width = 100/(trial.labels.length-1);
      var left_offset = (j * (100 /(trial.labels.length - 1))) - (width/2);
      html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<p id = "display_prompt">';

    if (trial.prompt !== null){
      html += trial.prompt;
    }
    html += '</p>';
    // add submit button
    html +=   '<div display ="inline-block">';
  //  html += '<button type="button" id = "dislike-button" class="jspsych-btn"  margin = "4px 2px" '+ (trial.require_movement ? "disabled" : "") + '>' + 'DISLIKE</button>';
    html += '<button id="jspsych-image-slider-response-next" class="jspsych-btn" '+ (trial.require_movement ? "disabled" : "") + '>'+trial.button_label+'</button>';
    html += '</div>';
    display_element.innerHTML = html;

    var response = {
      rt: null,
      response: null
    };

    if(trial.require_movement){
    //   display_element.querySelector("#dislike-button").disabled  = false;
      display_element.querySelector('#jspsych-image-slider-response-response').addEventListener('change', function(){
        display_element.querySelector('#jspsych-image-slider-response-next').disabled = false;
      })
    }

    display_element.querySelector('#jspsych-image-slider-response-response').addEventListener('change', function() {
    //   display_element.querySelector("#dislike-button").disabled  = true;
    });




    // display_element.querySelector("#dislike-button").addEventListener('click',function() {

    //    // measure response time
    //    var endTime = performance.now();
    //    response.rt = endTime - startTime;
    //    response.response = -1;
    //    if(trial.response_ends_trial){
    //     end_trial();
    //   } else {
    //     display_element.querySelector('#jspsych-image-slider-response-next').disabled = true;
    //   }

    // });
    

    display_element.querySelector('#jspsych-image-slider-response-next').addEventListener('click', function() {
      // measure response time
      var endTime = performance.now();
      response.rt = endTime - startTime;
      response.response = display_element.querySelector('#jspsych-image-slider-response-response').value;

      if(trial.response_ends_trial){
        end_trial();
      } else {
        display_element.querySelector('#jspsych-image-slider-response-next').disabled = true;
      }

    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        "stimulus": trial.stimulus,
        "top_stimulus":trial.stimulus.slice(0,4),
        "bottom_stimulus": trial.stimulus.slice(4),
        "rt": response.rt,
        "rating": response.response,
        "game_number": trial.stimulus_order,
        "display_order": trial.stimulus_display,
        "game_r": trial.stimulus_r,
        "game_type": trial.stimulus_type_game,
        "game_eu": trial.stimulus_eu,
        "n_game": trial.stimulus_n_game,
        "n_game_r": trial.stimulus_n_game_r,
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-slider-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    var startTime = performance.now();
  };

  return plugin;
})();
