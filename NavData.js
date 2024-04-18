import { PlanData } from "./PlanData.js";
import { campusesLinks } from "./campusesLinks.js"

export default class NavData { //класс для того чтобы экспортировать данные с сервера
	// static campusesLinks = [ //ссылки на данные кампусов
	// 	"./BS/CAMPUS-BS.js",
	// ]
	static campusesLinks = campusesLinks

	static async loadCampusesDataAsync() { //динамическая загрузка данных по кампусам
		let campuses = new Map() //тут будут хранится данные кампусов (BS->{данные})
		for (const campusLink of this.campusesLinks) {
			let importedCampus = await import(campusLink) //импорт кампуса по ссылке
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