import GymRepo from './gym-repo.js';
import TraineesRenderer from './trainees-renderer.js';
import EventHandler from './events-handler.js';

let gymRepo = new GymRepo();
let traineesRenderer = new TraineesRenderer();
let eventHandler = new EventHandler(gymRepo, traineesRenderer);

eventsHandler.HandlerGetTrainees();
eventsHandler.HandlerAddTrainee();
eventsHandler.HandlerRemoveTrainee();
eventsHandler.HandlerEditTrainee();

var getTrainees = gymRepo.getTrainees();
getTrainee.then(function(data) {
    traineesRenderer.renderTrainees(data)
});