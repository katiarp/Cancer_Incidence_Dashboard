// window.addEventListener('DOMContentLoaded', event => {
//     // Simple-DataTables
//     // https://github.com/fiduswriter/Simple-DataTables/wiki

//     const datatablesSimple = document.getElementById('datatablesSimple');
//     if (datatablesSimple) {
//         new simpleDatatables.DataTable(datatablesSimple);
//     }
// });
d3.json("static/data/model_dataset.json").then((importedData) => {
    // const datatablesSimple = document.getElementById('datatablesSimple');
    // var dataTable;
    // if (datatablesSimple) {
    //     dataTable = new simpleDatatables.DataTable(datatablesSimple);
    // }
    const dataTable = new simpleDatatables.DataTable("#datatablesSimple",{
        searchable:false,
        sortable:false
    });
    
    dataTable.insert(importedData);
    // console.log("read csv");
    //console.log(importedData);
    // var data = importedData;
});