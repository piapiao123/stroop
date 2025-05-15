/*************** 
 * Stroop *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'stroop';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const strooptrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(strooptrialsLoopBegin(strooptrialsLoopScheduler));
flowScheduler.add(strooptrialsLoopScheduler);
flowScheduler.add(strooptrialsLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stroop1.xlsx', 'path': 'stroop1.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var instructiontext;
var key_resp;
var experimenttrialClock;
var polygon;
var response;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instructiontext = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructiontext',
    text: '欢迎参加颜色命名任务！\n\n前5题为熟悉练习题，后面20题为正式测试。\n\n当你看到红色方框时，请按"F"键；\n看到绿色方框时，请按"J"键。\n\n每道题目间隔3秒，如果3秒内没有回应将自动跳转到下一题。\n\n准备好了吗？按任意键开始。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "experimenttrial"
  experimenttrialClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionMaxDurationReached;
var _key_resp_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instructiontext);
    instructionComponents.push(key_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructiontext* updates
    if (t >= 0.0 && instructiontext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructiontext.tStart = t;  // (not accounting for frame time here)
      instructiontext.frameNStart = frameN;  // exact frame index
      
      instructiontext.setAutoDraw(true);
    }
    
    
    // if instructiontext is active this frame...
    if (instructiontext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var strooptrials;
function strooptrialsLoopBegin(strooptrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    strooptrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stroop1.xlsx',
      seed: undefined, name: 'strooptrials'
    });
    psychoJS.experiment.addLoop(strooptrials); // add the loop to the experiment
    currentLoop = strooptrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStrooptrial of strooptrials) {
      snapshot = strooptrials.getSnapshot();
      strooptrialsLoopScheduler.add(importConditions(snapshot));
      strooptrialsLoopScheduler.add(experimenttrialRoutineBegin(snapshot));
      strooptrialsLoopScheduler.add(experimenttrialRoutineEachFrame());
      strooptrialsLoopScheduler.add(experimenttrialRoutineEnd(snapshot));
      strooptrialsLoopScheduler.add(strooptrialsLoopEndIteration(strooptrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function strooptrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(strooptrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function strooptrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var experimenttrialMaxDurationReached;
var _response_allKeys;
var experimenttrialMaxDuration;
var experimenttrialComponents;
function experimenttrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experimenttrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    experimenttrialClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    experimenttrialMaxDurationReached = false;
    // update component parameters for each repeat
    polygon.setFillColor(new util.Color(color));
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('experimenttrial.started', globalClock.getTime());
    experimenttrialMaxDuration = null
    // keep track of which components have finished
    experimenttrialComponents = [];
    experimenttrialComponents.push(polygon);
    experimenttrialComponents.push(response);
    
    for (const thisComponent of experimenttrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function experimenttrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experimenttrial' ---
    // get current time
    t = experimenttrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= 0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      response.tStop = t;  // not accounting for scr refresh
      response.frameNStop = frameN;  // exact frame index
      // update status
      response.status = PsychoJS.Status.FINISHED;
      frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        response.tStop = t;  // not accounting for scr refresh
        response.frameNStop = frameN;  // exact frame index
        // update status
        response.status = PsychoJS.Status.FINISHED;
        response.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if response is active this frame...
      if (response.status === PsychoJS.Status.STARTED) {
        let theseKeys = response.getKeys({keyList: ['f','j'], waitRelease: false});
        _response_allKeys = _response_allKeys.concat(theseKeys);
        if (_response_allKeys.length > 0) {
          response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
          response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
          response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
          // was this correct?
          if (response.keys == correctanswer) {
              response.corr = 1;
          } else {
              response.corr = 0;
          }
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of experimenttrialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function experimenttrialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'experimenttrial' ---
      for (const thisComponent of experimenttrialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('experimenttrial.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (response.keys === undefined) {
        if (['None','none',undefined].includes(correctanswer)) {
           response.corr = 1;  // correct non-response
        } else {
           response.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(response.corr, level);
      }
      psychoJS.experiment.addData('response.keys', response.keys);
      psychoJS.experiment.addData('response.corr', response.corr);
      if (typeof response.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('response.rt', response.rt);
          psychoJS.experiment.addData('response.duration', response.duration);
          }
      
      response.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (experimenttrialMaxDurationReached) {
          experimenttrialClock.add(experimenttrialMaxDuration);
      } else {
          experimenttrialClock.add(3.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
