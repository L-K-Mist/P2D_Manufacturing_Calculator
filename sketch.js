var coffeeTinsWet = 8;
var cupsClay = 20;
var cupsLime = 16;
var cupsPortland = 16;
var cupsSand = 16;

var triangularPrism = {
    base: 27,
    height: 19,
    thickness: 8.5,
    area: function () {
        var calc = this.base * 0.5 * this.height;
        return calc;
    },
    volume: function () {
        var calc = this.area() * this.thickness;
        return calc;
    }
};

var calcCanvas;
var ingredientRatiosGUI;
var volumeInputsGUI;

function p5Gui_setup() {
    sliderRange(0, 30, 1);
    ingredientRatiosGUI = createGui('Ingredient Ratios');
    ingredientRatiosGUI.addGlobals('coffeeTinsWet', 'cupsClay', 'cupsLime', 'cupsPortland', 'cupsSand');
 
    
//    
//    sliderRange(1, 300, 5);
//    volumeInputsGUI = createGui('Volume Inputs');
//    volumeInputsGUI.addGlobals('base', 'height', 'thickness');
//    triangularPrism.base = base;
//    triangularPrism.height = height;
//    triangularPrism.thickness = thickness;


    noLoop();
}

var inputPanel;
var outputPanel;
var volumeString;
var areaString;

    var areaText;
    var volumeText;


function setInputVariables(){
    triangularPrism.base = inputPanel.getRangeValue('Triangle Base');
    console.log(triangularPrism.base + inputPanel.getRangeValue('Triangle Base'));
    
    triangularPrism.height = inputPanel.getRangeValue('Triangle Height');
    
    triangularPrism.thickness = inputPanel.getRangeValue('Triangle Thickness');
    

    
}

function quickSettings_setup() {
    
           areaText = triangularPrism.area();
    volumeText = triangularPrism.volume();
    //Volume Calculation Inputs
    // var base, height, thickness;

    inputPanel = QuickSettings.create(300, 100);
    inputPanel.addRange('Triangle Base', 5, 400, 1, setInputVariables);
    inputPanel.addRange('Triangle Height', 5, 400, 1, setInputVariables);
    inputPanel.addRange('Triangle Thickness', 5, 400, 1, setInputVariables);
    
 
    
    
    outputPanel = QuickSettings.create(300, 300, 'Volume Outputs');

    outputPanel.addText("Area is:");
    outputPanel.setText("Area is:", areaText);

    outputPanel.addText("Volume is:");
    outputPanel.setText("Volume is:", volumeText);
    
}

function setup() {
    //calcCanvas = createCanvas(windowWidth / 4, windowHeight);
    p5Gui_setup();
    quickSettings_setup();

}

//alert("The area of the triangle is: " +  triangularPrism.area() + " millimeters cubed.");
function draw() {

}
