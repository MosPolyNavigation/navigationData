export class PlanData {
	planName = ''
	svgLink = ''
	campus = ''
	corpus = ''
	floor = 0
	entrances = []
	graph = []
	spaces = []
	
	constructor(planData) {
		for (const key in planData) {
			this[key] = planData[key]
		}
	}
}