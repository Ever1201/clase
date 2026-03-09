function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Si es la primera fila, crear encabezados automáticamente
  if(sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Fecha", "Nombre", "Calificación /100", "Correctas", "Incorrectas", 
      "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10",
      "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18", "P19", "P20"
    ]);
  }

  try {
    var data = JSON.parse(e.postData.contents);
    var row = [
      new Date(),
      data.nombre,
      data.calificacion,
      data.correctas,
      data.incorrectas,
      data["P1"], data["P2"], data["P3"], data["P4"], data["P5"], 
      data["P6"], data["P7"], data["P8"], data["P9"], data["P10"],
      data["P11"], data["P12"], data["P13"], data["P14"], data["P15"],
      data["P16"], data["P17"], data["P18"], data["P19"], data["P20"]
    ];
    sheet.appendRow(row);
    
    // Retornar éxito
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("El Web App está funcionando correctamente.");
}
