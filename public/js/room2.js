function copy() {
    let copyText = window.location.href;
    navigator.clipboard.writeText(copyText);
    alert("URL Copied");
}

let chart = new Highcharts.chart('peers', {
    chart: {
        type: 'networkgraph',
        // color: 'rgba(255, 255, 255, 0)'
    },
    title: {
        text: 'Peer graph',
        color: '#ccc'
    },
    plotOptions: {
        networkgraph: {
            layoutAlgorithm: {
                enableSimulation: true
            }
        }
    },

    series: [{
        dataLabels: {
            enabled: true,
            // linkTextPath: {
            //     attributes: {
            //         dy: 12
            //     }
            // },
            linkFormat: '',
            textPath: {
                enabled: true,
                attributes: {
                    dy: 14,
                    startOffset: '45%',
                    textLength: 80
                }
            },
            format: 'Node: {point.name}'
        },
        marker: {
            radius: 35
        },
        data: []
    }]
});