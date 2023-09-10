const points = {
    "Саббета 1": [ 68.66455067163206, 73.52874755859375 ],
    "Саббета 2": [ 71.03303495416577, 73.7127685546875 ],
    "Саббета 3": [ 71.24435551310674, 72.2021484375 ],
    "Баренцево море": [ 76.2059670431415, 55.01953125 ],
}

const routes = {
    "С1-Бе": [
        [68.66455067163206, 73.52874755859375],
        // 14
        [70.9722375547307, 73.32275390625],
        // 12
        [71.30783606806223, 72.59765625],
        // 10
        [72.0739114882038, 72.92724609375],
        // 9
        [72.63337363853837, 74.02587890625],
        // 8
        [72.76406472320436, 73.125],
        // 7
        [73.77577986189993, 71.54296874999999],
        // 6
        [77.44694030325893, 68.90625],
        // 5
        [76.2059670431415, 55.01953125]
    ],
    "Бе-С1": [
        [76.2059670431415, 55.01953125],
        [77.44694030325893, 68.90625],
        [73.77577986189993, 71.54296874999999],
        [72.76406472320436, 73.125],
        [72.63337363853837, 74.02587890625],
        [72.0739114882038, 72.92724609375],
        [71.30783606806223, 72.59765625],
        [70.9722375547307, 73.32275390625],
        [68.66455067163206, 73.52874755859375],
    ],
    "С2-Бе": [
        [71.03303495416577, 73.7127685546875],
        // 13
        [70.9722375547307, 73.32275390625],
        // 12
        [71.30783606806223, 72.59765625],
        // 10
        [72.0739114882038, 72.92724609375],
        // 9
        [72.63337363853837, 74.02587890625],
        // 8
        [72.76406472320436, 73.125],
        // 7
        [73.77577986189993, 71.54296874999999],
        // 6
        [77.44694030325893, 68.90625],
        // 5
        [76.2059670431415, 55.01953125]
    ],
    "Бе-С2": [
        [76.2059670431415, 55.01953125],
        [77.44694030325893, 68.90625],
        [73.77577986189993, 71.54296874999999],
        [72.76406472320436, 73.125],
        [72.63337363853837, 74.02587890625],
        [72.0739114882038, 72.92724609375],
        [71.30783606806223, 72.59765625],
        [70.9722375547307, 73.32275390625],
        [71.03303495416577, 73.7127685546875],
    ],
    "С3-Бе": [
        [71.24435551310674, 72.2021484375],
        // 11
        [71.30783606806223, 72.59765625],
        // 10
        [72.0739114882038, 72.92724609375],
        // 9
        [72.63337363853837, 74.02587890625],
        // 8
        [72.76406472320436, 73.125],
        // 7
        [73.77577986189993, 71.54296874999999],
        // 6
        [77.44694030325893, 68.90625],
        // 5
        [76.2059670431415, 55.01953125]
    ],
    "Бе-С3": [
        [76.2059670431415, 55.01953125],
        [77.44694030325893, 68.90625],
        [73.77577986189993, 71.54296874999999],
        [72.76406472320436, 73.125],
        [72.63337363853837, 74.02587890625],
        [72.0739114882038, 72.92724609375],
        [71.30783606806223, 72.59765625],
        [71.24435551310674, 72.2021484375],
    ],
}

let utmzx = {
    43: 0.00030301,
    42: 0.00065849,
    41: 0.00030301,
    40: 0.00032641,
    39: 0.00020164,
}, utmox = {
    43: 295.2,
    42: 51.052,
    41: 162.947,
    40: 77.498,
    39: 68.1535,
}, utmzy = {
    43: -0.00030301,
    42: -0.00037131,
    41: -0.00030301,
    40: -0.00035936,
    39: -0.00031590,
}, utmoy = {
    43: 2760.3,
    42: 3296.6,
    41: 2760.3,
    40: 3206.6,
    39: 2848.1,
}; 
let a = 6378137, eccSquared = 0.00669438;
let eccPrimeSquared = (eccSquared) / (1 - eccSquared);

const toRadians = function (deg) {
    return deg * Math.PI / 180;
};

const latLongToMap = function (latitude, longitude) {
    let LongTemp = longitude;
    let LatRad = toRadians(latitude);
    let LongRad = toRadians(LongTemp);
    let ZoneNumber

    if (LongTemp >= 8 && LongTemp <= 13 && latitude > 54.5 && latitude < 58) {
        ZoneNumber = 32;
    } else if (latitude >= 56.0 && latitude < 64.0 && LongTemp >= 3.0 && LongTemp < 12.0) {
        ZoneNumber = 32;
    } else {
        ZoneNumber = Math.round(((LongTemp + 180) / 6) + 1);

        if (latitude >= 72.0 && latitude < 84.0) {
            if (LongTemp >= 0.0 && LongTemp < 9.0) {
                ZoneNumber = 31;
            } else if (LongTemp >= 9.0 && LongTemp < 21.0) {
                ZoneNumber = 33;
            } else if (LongTemp >= 21.0 && LongTemp < 33.0) {
                ZoneNumber = 35;
            } else if (LongTemp >= 33.0 && LongTemp < 42.0) {
                ZoneNumber = 37;
            }
        }
    }

    let LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3;
    let LongOriginRad = toRadians(LongOrigin);


    let N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
    let T = Math.tan(LatRad) * Math.tan(LatRad);
    let C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
    let A = Math.cos(LatRad) * (LongRad - LongOriginRad);

    let M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad
        - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad)
        + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad)
        - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

    let UTMEasting = (0.9996 * N * (A + (1 - T + C) * A * A * A / 6
        + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120)
        + 500000.0);

    let UTMNorthing = (0.9996 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24
        + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720)));
    if (latitude < 0) UTMNorthing += 10000000.0;

    return { x: (Math.round(UTMEasting) * utmzx[ZoneNumber] + utmox[ZoneNumber]), y: (Math.round(UTMNorthing) * utmzy[ZoneNumber] + utmoy[ZoneNumber]), zone: ZoneNumber }
}

const generateShortName = (pointFullName) => {
    return pointFullName.substring(0,1) + pointFullName.substring(pointFullName.length - 1)
}

const generateRouteName = (point1FullName, point2FullName) => {
    const point1ShortName = generateShortName(point1FullName);
    const point2ShortName = generateShortName(point2FullName);
    return `${point1ShortName}-${point2ShortName}`;
}

const calculateConventionalDistance = (lat1, lon1, lat2, lon2) => {
    const point1 = latLongToMap(lat1,lon1);
    const point2 = latLongToMap(lat2,lon2);
    return Math.pow((point1.x-point2.x), 2) + Math.pow((point1.y-point2.y), 2);
    //return Math.pow((lat1-lat2), 2) + Math.pow((lon1-lon2), 2);
}

const calculateEdgeSchedule = (originSchedule) => {
    const edgeSchedule = [];

    originSchedule.forEach(({tanker, startTime, endTime, startLine, endLine}) => {
        const routeName = generateRouteName(startLine, endLine);
        const route = routes[routeName];

        let totalLength = 0;
        let routeEdges = [];

        for(let i = 1; i < route.length; i++) {
            const [lat1, lon1] = route[i-1];
            const [lat2, lon2] = route[i];

            const edgeDistance = calculateConventionalDistance(
                lat1, lon1,
                lat2, lon2
            );

            totalLength += edgeDistance;
            routeEdges.push({
                edgeStartPoint: [lat1, lon1],
                edgeEndPoint: [lat2, lon2],
                edgeDistance
            });
        }

        const timeDelta = endTime - startTime;
        let deltaConsumed = 0;

        for(let i = 0; i < routeEdges.length; i++) {
            const {edgeStartPoint, edgeEndPoint, edgeDistance} = routeEdges[i];
            
            const delta = timeDelta * (edgeDistance / totalLength);
            const edgeStartTime = startTime + deltaConsumed;
            const edgeEndTime = edgeStartTime + delta;

            deltaConsumed += delta;

            edgeSchedule.push({
                edgeStartPoint,
                edgeEndPoint,
                edgeStartTime: Math.round(edgeStartTime),
                edgeEndTime: Math.round(edgeEndTime),
                imo: tanker.imo
            })
        }
    });

    return edgeSchedule;
}

export {points, routes, calculateEdgeSchedule}