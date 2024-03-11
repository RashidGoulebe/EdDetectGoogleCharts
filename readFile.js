// Funktion zum Einlesen einer CSV-Datei
function readCSVFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var contents = event.target.result;
      callback(contents);
    };
    reader.readAsText(file);
  }
  
  // Funktion zum Umwandeln der Daten in das gewünschte Format
  function convertDataToFormattedArray(data) {
    var lines = data.split('\n');
    var formattedData = [];
  
    for (var i = 1; i < lines.length; i++) {
      var values = lines[i].split(';');
      var row = values[0].split(',').concat(values.slice(1));
      formattedData.push(row);
    }
  
    return formattedData;
  }
  
  // Einlesen der CSV-Datei und Umwandeln der Daten
  var fileInput = document.getElementById('csv-file-input'); // Annahme: HTML-Element für Dateieingabe mit der ID "csv-file-input"
  fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    
    readCSVFile(file, function(contents) {
      var formattedData = convertDataToFormattedArray(contents);
      console.log(formattedData); // Ausgabe der umgewandelten Daten
      // Hier können Sie die umgewandelten Daten verwenden, z. B. für Google Charts
    });
  });
  