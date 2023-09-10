let lastListener;

const importCSV = (apiCallback, pageCallback) => {
    const el = document.getElementById('inputFile');

    console.log('lastlistener', lastListener)
    if(lastListener != null) {
        el.removeEventListener('change', lastListener);
        el.value = null;
    }

    lastListener = (event) => {
        if(event.target.files.length === 1) {
            const file = event.target.files[0];
            el.value = null;

            apiCallback({dataset: file}).then((response) => {
                pageCallback();
            })
        }
    };

    el.addEventListener('change', lastListener);
    el.click();
}

const exportJSON = (apiCallback) => {
    apiCallback().then((response) => {
        const el = document.getElementById('outputFile');

        console.log(response)
        const file = new Blob([response.data], { type: "text/csv" });
        const url = window.URL.createObjectURL(file);

        el.setAttribute('href', url);
        el.setAttribute('download', "export.csv");
        console.log('export', el);
        el.click();
    });
}

export { importCSV, exportJSON }