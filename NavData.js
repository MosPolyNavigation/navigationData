import {PlanData} from "./PlanData.js";

export default class NavData {
	static planDefinitions = [
		"./BS/N-3.js",
		"./BS/N-4.js",
	]
	
	static async loadPlansDataAsync() {
		let plansDataOuting = new Map()
		for (const planDefinition of this.planDefinitions) {
			let importedPlanData = await import(planDefinition)
			plansDataOuting.set(importedPlanData.default.planName, new PlanData(importedPlanData.default))
		}
		return plansDataOuting
	}
}

