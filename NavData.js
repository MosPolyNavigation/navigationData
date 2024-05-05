export default class NavData { //класс для того чтобы экспортировать данные с сервера

	static async loadCampusesDataAsync() { //динамическая загрузка данных по кампусам

		let campusesLinks =
			[
				'./BS/CAMPUS-BS.json',
			]

		let campuses = new Map() //тут будут хранится данные кампусов (BS->{данные})
		for (const campusLink of campusesLinks) {
			let importedCampus = await parseJSONFromUrl(campusLink) //импорт кампуса по ссылке
			campuses.set(importedCampus.id, importedCampus) //добавляем, default - то что в дефоулт экспорте
		}


		let plansCount = 0
		let plans = new Map() //nen будут хранится данные по планам
		for (const campus of campuses.values()) {
			for (let corpusID in campus['corpuses']) {
				for (let planLink of campus['corpuses'][corpusID]['planLinks']) { //итерация по всем ссылкам всех корпусов всех кампусов
					plansCount++
					parseJSONFromUrl(planLink).then(importedPlan => {
						plans.set(importedPlan.planName, new PlanData(importedPlan))
					}).catch((reason) => {
						console.log('Ошибка загрузки с ', planLink, reason)
					}
					)
				}
			}
		}

		async function waitPlans() {
			await new Promise((resolve) => {
				setTimeout(() => resolve(1), 10)
			}).then()
			if (plansCount === plans.size)
				return true
			else
				await waitPlans()
		}

		await waitPlans()
		return { campuses, plans }
	}
}

async function parseJSONFromUrl(link) {
	let response = await fetch('https://mospolynavigation.github.io/navigationData/' + link)
	// let response = await fetch('http://127.0.0.1:5500/' + link)
	// console.log(response);
	return await response.json()
}

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
		this.planName = planData.planName
		this.svgLink = planData.svgLink
		this.campus = planData.campus
		this.corpus = planData.corpus
		this.floor = planData.floor
		this.entrances = planData.entrances
		this.graph = planData.graph
		this.spaces = planData.spaces
	}
}