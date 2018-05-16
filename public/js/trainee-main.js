import GymRepo from './gym-repo.js';
import TraineesRenderer from './trainees-renderer.js';
import EventHandler from './events-handler.js';

let gymRepo = new GymRepo();
let traineesRenderer = new TraineesRenderer();
let eventHandler = new EventHandler(gymRepo, traineesRenderer);

eventHandler.handleRemoveTrainee();
var getTrainees = gymRepo.getTrainees();
getTrainees.then(function(data) {
    traineesRenderer.renderTrainees(data)
});




// eventHandler.handleRenderTrainees();
// eventHandler.handleAddTrainee();
// eventHandler.handleRemoveTrainee();
// eventHandler.HandleEditTrainee();
