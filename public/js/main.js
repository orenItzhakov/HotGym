import GymRepo from './gym-repo.js';
import TraineesRenderer from './trainees-renderer.js';
import EventHandler from './events-handler.js';
import MasterJs from './master.js'

let gymRepo = new GymRepo();
let traineesRenderer = new TraineesRenderer();
let MasterJs = new MasterJs();
let eventHandler = new EventHandler(gymRepo, traineesRenderer, MasterJs);



var getTrainees = gymRepo.getTrainees();
getTrainees.then(function(data) {
    traineesRenderer.renderTrainees(data)
});

MasterJs.loadToggleImage()

// eventHandler.handleRenderTrainees();
// eventHandler.handleAddTrainee();
// eventHandler.handleRemoveTrainee();
// eventHandler.HandleEditTrainee();
