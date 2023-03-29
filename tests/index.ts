import type {Weather} from "./types"

const forecast: Weather = {
    temperature: 68,
    chanceOfRain: 2,
    conditions: "clear",
}

console.log(forecast)

const hello = () => {
    const subject = "world"
    console.log(`Hello ${subject}!`)
}

const goodbye = () => {
    const subject = "world"
    console.log(`Hello ${subject}!`)
}

hello()
goodbye()
