d3.json("data/data.json").then((response) => {

    let data = response
    data.sort(function(a,b){
        return parseFloat(b.miles) - parseFloat(a.miles)
    });

    data = data.slice(0,10)  // gets first 10 objects
    data = data.reverse()  // do this because of plotly requirement 

    let trace1 = {

        x: data.map(x => x.miles),
        y: data.map(x => x.license_plate),
        text: data.map(x => x.license_plate),
        name: "car miles",
        type: "bar",
        orientation: "h"

    };

    let chartData = [trace1]

    let layout = {

        title: "Car Miles for Employee-Used Cars",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }

    };

    Plotly.newPlot("plot", chartData, layout)

});