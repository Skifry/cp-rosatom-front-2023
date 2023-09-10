<script>
    export let timetable, onGanttRender;

    let elem, ctx
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let zoom = 100, ox = 0, oy = 0;
    let width = 1000;

    let toY = 50;
    let oftX = 20;
    let ofttX = 200;
    let oftsX = 110;
    let fS = 6;
    let zoomMs = 60 * 1000;

    let zoomScalePlus = 1.25; // приближение
    let zoomScaleMinus = 0.85; // отдаление

    let ts = Date.now()

    export const renderGantt = function () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        let tY = (toY / 2) - oy;
        ctx.fillStyle = "#777"

        Object.keys(timetable).forEach(entryName => {
            tY += toY;
            timetable[entryName].time.forEach(timeEntry => {
                let x1 = ((timeEntry.startTime - ts) / zoomMs / zoom * oftsX) - ox + ofttX
                let x2 = ((timeEntry.endTime - ts) / zoomMs / zoom * oftsX) - ox + ofttX
                ctx.fillRect(x1, tY - (toY / 4), x2 - x1, toY / 2)
            })
            ctx.beginPath()
            ctx.moveTo(0, tY + (toY / 2))
            ctx.lineTo(ctx.canvas.width, tY + (toY / 2))
            ctx.strokeStyle = "#e0e0e0"
            ctx.stroke()
        })

        tY = toY / 2;
        ctx.fillStyle = "#bbb"
        ctx.fillRect(0, 0, ctx.canvas.width, toY);
        ctx.fillStyle = "#000"

        let writeTime = new Date()
        for (let dateX = oftsX - (ox % oftsX); dateX < ctx.canvas.width; dateX += oftsX) {
            const time = (((dateX + ox - ofttX) / oftsX) * zoom) * zoomMs;
            writeTime = new Date(ts + time)
            if (zoom < 1000) {
                ctx.fillText(writeTime.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                }), dateX, tY + fS)
            } else {
                ctx.fillText(writeTime.toLocaleDateString(navigator.language, {
                    day: '2-digit',
                    month: '2-digit',
                }), dateX, tY + fS)
            }
            ctx.beginPath()
            ctx.moveTo(dateX + (oftsX*2/3), 0)
            ctx.lineTo(dateX + (oftsX*2/3), ctx.canvas.height)
            ctx.strokeStyle = "#e0e0e0"
            ctx.stroke()
        }

        tY = (toY / 2) - oy;
        ctx.fillStyle = "#e0e0e0"
        ctx.fillRect(0, toY, ofttX, ctx.canvas.height);
        ctx.fillStyle = "#000"
        Object.keys(timetable).forEach(entryName => {
            ctx.fillText(entryName, oftX, fS + (tY += toY))
        });
        tY = toY / 2
        ctx.fillStyle = "#aaa"
        ctx.fillRect(0, 0, ofttX, toY)
        ctx.fillStyle = "#000"
        ctx.fillText(writeTime.toLocaleDateString(navigator.language), oftX, fS + tY)

        ctx.fillStyle = "#f00"
        ctx.fillRect(ctx.canvas.width / 2, 0, 1, ctx.canvas.height)
        if(onGanttRender) onGanttRender(getGanttTime())
    }

    const mouseDownHandler = function (e) {
        pos = {
            left: ox,
            top: oy,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        if (elem) elem.style.cursor = 'grabbing';
    };

    const changeOffset = function (nox, noy) {
        //let pix = dockWidth - (width / zoom);
        //ox = Math.max(0, Math.min(pix, nox))
        ox = nox
        let piy = ((Object.keys(timetable).length + 2) * toY) - ctx.canvas.height;
        oy = Math.max(0, Math.min(piy, noy))
    }

    const mouseMoveHandler = function (e) {
        const dx = (e.clientX - pos.x);
        const dy = (e.clientY - pos.y);
        let nox = pos.left - dx;
        let noy = pos.top - dy;
        changeOffset(nox, noy);
        renderGantt()
    };

    const mouseUpHandler = function () {
        if (elem) elem.style.cursor = 'grab';
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    export const getGanttTime = function () {
        return ((((ctx.canvas.width / 2) + ox - ofttX) / oftsX) * zoom) * zoomMs + ts;
    }

    export const zoomGantt = function (time) {
        changeOffset(((time - ts) / zoomMs / zoom * oftsX) - (ctx.canvas.width / 2) + ofttX, oy)
    }

    const wheelHandler = function (e) {
        e.preventDefault();
        const time = (((e.offsetX + ox - ofttX) / oftsX) * zoom) * zoomMs;
        if (e.deltaY < 0 && zoom * zoomScaleMinus >= 1) {
            zoom *= zoomScaleMinus
        } else if (e.deltaY > 0 && zoom * zoomScalePlus <= 10000) {
            zoom *= zoomScalePlus
        }
        changeOffset((time / zoomMs / zoom * oftsX) - e.offsetX + ofttX, oy)
        renderGantt()
    };

    const onCanvas = function(e) {
        elem = e
        elem.addEventListener('mousedown', mouseDownHandler);
        elem.addEventListener('wheel', wheelHandler);

        elem.width = width = elem.clientWidth; elem.height = elem.clientHeight
        ctx = elem.getContext('2d');
        ctx.font = "14px IBM Plex Sans"
        renderGantt()
    }
</script>

<canvas bind:this={elem} on:mousedown={mouseDownHandler} on:touchstart={mouseDownHandler} on:wheel={wheelHandler}
    use:onCanvas>
</canvas>

<style>
    canvas {
        width: 100%;
        height: 100%;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        cursor: grab;
    }
</style> 