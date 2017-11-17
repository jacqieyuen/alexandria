export class CounterService {
	inactiveToActiveCoutner = 0;
	activeToInactiveCounter = 0;

	incrementActiveToInactive(){
		this.activeToInactiveCounter++;
		console.log("Increment Active To Inactive: ",this.activeToInactiveCounter);
	}
	incrementInactiveToActive(){
		this.inactiveToActiveCoutner++;
		console.log("Increment Inactive To Active: ", this.inactiveToActiveCoutner);
	}

}