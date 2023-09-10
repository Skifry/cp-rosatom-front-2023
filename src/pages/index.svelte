<script>
    import { TextInput } from "carbon-components-svelte";
    import { api } from "./api";

    import Maps from "./_components/Maps.svelte";

    import stopIcon from "./_components/assets/gtfs/stop-icon.svg";
    import shipIcon from "./_components/assets/gtfs/ship-icon.svg";
    import Gantt from "./_components/Gantt.svelte";

    let addDockLatLon, zoomToLatLon, addShipLatLon, addShipXY, clearShips, addLineLatLon, getGanttTime, zoomGantt, renderGantt, latLongToMap;

    let timetable = {}

    let lines = [
        [
            [46.142578125, 69.93030017617484],
            [57.74414062500001, 70.4367988185464],
        ],
        [
            [57.74414062500001, 70.4367988185464],
            [66.20361328125, 73.53462847039683],
        ],
        [
            [66.20361328125, 73.53462847039683],
            [71.54296874999999, 73.77577986189993],
        ],
        [
            [46.142578125, 69.93030017617484],
            [55.01953125, 76.2059670431415],
        ],
        [
            [55.01953125, 76.2059670431415],
            [68.90625, 77.44694030325893],
        ],
        [
            [68.90625, 77.44694030325893],
            [71.54296874999999, 73.77577986189993],
        ],
        [
            [71.54296874999999, 73.77577986189993],
            [73.125, 72.76406472320436],
        ],
        [
            [73.125, 72.76406472320436],
            [74.02587890625, 72.63337363853837],
        ],
        [
            [74.02587890625, 72.63337363853837],
            [72.92724609375, 72.0739114882038],
        ],
        [
            [72.92724609375, 72.0739114882038],
            [72.59765625, 71.30783606806223],
        ],
        [
            [72.59765625, 71.30783606806223],
            [72.2021484375, 71.24435551310674],
        ],
        [
            [72.59765625, 71.30783606806223],
            [73.32275390625, 70.9722375547307],
        ],
        [
            [73.32275390625, 70.9722375547307],
            [73.7127685546875, 71.03303495416577],
        ],
        [
            [73.32275390625, 70.9722375547307],
            [73.52874755859375, 68.66455067163206],
        ],
    ];

    import {onMount} from 'svelte';
    import {calculateEdgeSchedule, points} from './_components/animation'

    const onMapLoad = () => {
        lines.forEach((line) => {
            addLineLatLon(line[0][1], line[0][0], line[1][1], line[1][0], );
        });

        Object.keys(points).forEach(pointName => {
            let [lat, lon] = points[pointName]
            addDockLatLon(lat, lon, pointName);
        })
    };

    let scheduleList = [], schedule = [];
    
    onMount(async () => {
        scheduleList = (await api.schedule.listList()).data.items;
        schedule = calculateEdgeSchedule(scheduleList);

        let minStartTime = 100000000000;
        scheduleList.forEach(item => {
            if (item.startTime < minStartTime) minStartTime = item.startTime;
            if (!timetable[item.tanker.name]) timetable[item.tanker.name] = {time: []}
            timetable[item.tanker.name].time.push({
                startTime: item.startTime * 1000,
                endTime: item.endTime * 1000
            })
        })
        zoomGantt(minStartTime * 1000)
        renderGantt()
    });

    const onGanttRender = (time) => {
        if (clearShips) clearShips()
        schedule.forEach(item => {
            if (item.edgeStartTime * 1000 <= time && item.edgeEndTime * 1000 >= time) {
                let td = (time - item.edgeStartTime * 1000) / (item.edgeEndTime * 1000 - item.edgeStartTime * 1000);
                let coordsStart = latLongToMap(item.edgeStartPoint[0], item.edgeStartPoint[1])
                let coordsEnd = latLongToMap(item.edgeEndPoint[0], item.edgeEndPoint[1])
                let coordsX = coordsStart.x + td*(coordsEnd.x - coordsStart.x)
                let coordsY = coordsStart.y + td*(coordsEnd.y - coordsStart.y)
                let rot = Math.atan2(coordsEnd.y-coordsStart.y, coordsEnd.x-coordsStart.x);
                addShipXY(item.imo, coordsX, coordsY, rot)
            }
        })
    }
</script>

<div class="w-full" style="height: 600px;">
        <div class="map-refer">
            <Maps
                bind:addDockLatLon
                bind:zoomToLatLon
                bind:clearShips
                bind:addShipLatLon
                bind:addShipXY
                bind:addLineLatLon
                bind:latLongToMap
                onLoad={onMapLoad}
            />
        </div>
</div>

<div class="w-full mb-32" style="height: 600px;">
    <Gantt {timetable} bind:renderGantt bind:zoomGantt {onGanttRender}/>
</div>

<style>
    .map-refer {
        width: 100%;
        height: 100%;

        /* background: url('/static/german-map.jpeg'); */
        /* background-size: cover; */
        background: #bbe2c6;
    }

    .item-icon {
        width: 22px;
        height: 22px;
        padding: 2px;
        box-sizing: border-box;
    }

    .item-icon.stop-icon {
        background-color: #0085ff;
    }
    .item-icon.ship-icon {
        background-color: #12848c;
    }

    .item-container {
        display: flex;
        height: 56px;
        align-items: center;
        transition: 0.3s;
        padding: 0 16px;
        background-color: rgba(0, 0, 0, 0);
    }

    .item-container:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }

    .item-container .item-title {
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;
        margin: 0 16px;
    }

    .item-container .item-data {
        margin-left: auto;
        display: flex;
        flex-direction: column;
    }

    .item-wrapper {
        position: relative;
        overflow-y: auto;
        max-height: 24rem;
        margin-left: -16px;
        margin-right: -16px;
    }
</style>
