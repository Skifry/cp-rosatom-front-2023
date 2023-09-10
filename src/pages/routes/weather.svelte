<script>
    import {HeatmapChart} from "@carbon/charts-svelte";
    import weather from '../_components/weather.json'

    const options = {
        title: 'Сплоченность в баллах на отрезках маршрута на даты ближайшего месяца',
        axes: {
            bottom: {
                title: 'День месяца',
                mapsTo: 'day',
                scaleType: 'labels'
            },
            left: {
                title: 'Номер ребра',
                mapsTo: 'edge',
                scaleType: 'labels'
            }
        },
        heatmap: {
            colorLegend: {
                title: 'Коэффициент сплочённости льда'
            }
        },
        height: '400px'
    }
</script>

<HeatmapChart data={weather} {options} />