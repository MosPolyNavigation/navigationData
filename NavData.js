import { PlanData } from "./PlanData.js";

export default class NavData { //класс для того чтобы экспортировать данные с сервера
	static campusesDefinitions = [ //ссылки на данные кампусов
		"./BS/CAMPUS-BS.js",
	]

	static async loadCampusesDataAsync() { //динамическая загрузка данных по кампусам
		let campuses = new Map() //тут будут хранится данные кампусов (BS->{данные})
		for (const campusDefinition of this.campusesDefinitions) {
			let importedCampus = await import(campusDefinition) //импорт кампуса по ссылке
			campuses.set(importedCampus.default.id, importedCampus.default) //добавляем, default - то что в дефоулт экспорте
		}
		let plans = new Map() //nen будут хранится данные по планам
		for (const [campusId, campus] of campuses)
			for (let corpusID in campus.corpuses) {
				for (let planLink of campus.corpuses[corpusID].planLinks) { //итерация по всем ссылкам всех корпусов всех кампусов
					console.log(planLink);
					let importedPlan = await import(planLink) //импорт данных планов
					plans.set(importedPlan.default.planName, new PlanData(importedPlan.default))
				}
			}
		return { campuses, plans }
	}
}