var newDoucument=app.documents.add(1080, 1080, 300, "New Document", NewDocumentMode.RGB);
var layers = newDoucument.artLayers;
var newLayer = layers.add();
newLayer.name = "New Layer";
var imagePath= new File("C:/Users/tomir/Documents/repók/photoshop_white_frame/teszt_fekvő.jpg");
if(imagePath.exists) 
    {
        placeFile(imagePath);
    }
else
    {
        alert("File not found");
    }

newDoucument.flatten();
newDoucument.print();

function placeFile(placeFile) {  

    var desc21 = new ActionDescriptor();  
    
    desc21.putPath( charIDToTypeID('null'), new File(placeFile) );  
    
    desc21.putEnumerated( charIDToTypeID('FTcs'), charIDToTypeID('QCSt'), charIDToTypeID('Qcsa') );  
    
    var desc22 = new ActionDescriptor();  
    
    desc22.putUnitDouble( charIDToTypeID('Hrzn'), charIDToTypeID('#Pxl'), 0.000000 );  
    
    desc22.putUnitDouble( charIDToTypeID('Vrtc'), charIDToTypeID('#Pxl'), 0.000000 );  
    
    desc21.putObject( charIDToTypeID('Ofst'), charIDToTypeID('Ofst'), desc22 );  
    
    executeAction( charIDToTypeID('Plc '), desc21, DialogModes.NO );  
    
}