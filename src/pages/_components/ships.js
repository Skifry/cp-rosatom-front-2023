// NoIceClass, Ice1, Ice2, Ice3, Arc4, Arc5, Arc6, Arc7, Arc8, Arc9
import countries from './countries.json'

const iceClasses = {
    "NoIceClass": "No ice class",
    "Ice1": "Ice1",
    "Ice2": "Ice2",
    "Ice3": "Ice3",
    "Arc4": "Arc4",
    "Arc5": "Arc5",
    "Arc6": "Arc6",
    "Arc7": "Arc7",
    "Arc8": "Arc8",
    "Arc9": "Arc9",
}

const getCountryByCode = (code) => {
    return countries[code.toUpperCase()];
}

export {iceClasses, getCountryByCode};