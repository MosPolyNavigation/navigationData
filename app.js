import NavData from "./NavData.js";


let plansData = new Map()
let start = Date.now()
console.log(plansData, Date.now()-start)
NavData.loadPlansDataAsync().then((r) => {
	plansData = r
	console.log(plansData, Date.now()-start)
})
