window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script87 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script88 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script89 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script90 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script91 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script92 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script93 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

window.Script94 = function()
{
  var input = document.createElement("input");
input.type = "file";

input.onchange = function(event) {
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var base64File = reader.result.split(",")[1];  // Convertir archivo a Base64

        // Enviar archivo al LMS usando SCORM
        var scorm = window.parent;
        if (scorm && scorm.SetDataChunk) {  // Para SCORM 2004
            scorm.SetDataChunk(base64File);
            alert("Archivo guardado en el LMS con SCORM 2004.");
        } else if (scorm && scorm.SetValue) {  // Para SCORM 1.2
            scorm.SetValue("cmi.suspend_data", base64File);
            scorm.Commit("");
            alert("Archivo guardado en el LMS con SCORM 1.2.");
        } else {
            alert("Error: No se encontró la API SCORM.");
        }
    };
    reader.readAsDataURL(file);  // Leer archivo en formato Base64
};

input.click();
}

};
