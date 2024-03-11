google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawStuff);

var data = $.csv.toObjects("eddetect_output_advanced2.csv");

function drawStuff() {
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('programmatic_dashboard_div'));
};