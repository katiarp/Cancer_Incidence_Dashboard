d3.json("static/data/model_dataset.json").then((importedData) => {
    var dataTable = new DataTable("#datatablesSimple", {
        scrollX: true,
        ordering: false,
        searching: false,
        lengthMenu: [5, 10, 25, 50, 75, 100 ],
        data: importedData,
        "columns" : [
            { "data" : "FIPS" },
            { "data" : "recent_trend" },
            { "data" : "PM25_max_pred" },
            { "data" : "PM25_med_pred" },
            { "data" : "PM25_mean_pred" },
            { "data" : "O3_max_pred" },
            { "data" : "O3_med_pred" },
            { "data" : "O3_mean_pred" },
            { "data" : "PM25_max_pred_2001" },
            { "data" : "PM25_max_pred_2002" },
            { "data" : "PM25_max_pred_2003" },
            { "data" : "PM25_max_pred_2004" },
            { "data" : "PM25_max_pred_2005" },
            { "data" : "PM25_max_pred_2006" }]
    });
});