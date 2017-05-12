var coffeeTinsWet = 8;
var cupsClay = 20;
var cupsLime = 16;
var cupsPortland = 16;
var cupsSand = 16;


//Trapezoid (US)
//Trapezium (UK)
//Area = ½(a+b) × h
//h = vertical height


function trapezoidalPrism(longLength, shortLength, height) {
    this.longLength = longLength;
    this.shortLength = shortLength;
    this.height = height;
    this.area = function () {
        var calc = 0.5 * (this.longLength + this.longLength)*this.height;
        return calc;
        

    }
}


function triangularPrism(base, height, thickness) {
    this.base = base;
    this.height = height;
    this.thickness = thickness;
    this.area = function () {
        var calc = this.base * 0.5 * this.height;
        return calc;
    };

    this.volume = function () {
        var calc = this.area() * this.thickness;
        return calc;
    };

}

//Person.prototype.name = function() {
//    return this.firstName + " " + this.lastName;
//};




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

var prism;

function setInputVariables() {





}

function upateCalcs() {
    var base = inputPanel.getRangeValue('Triangle Base');


    var height = inputPanel.getRangeValue('Triangle Height');

    var thickness = inputPanel.getRangeValue('Triangle Thickness');

    prism = new triangularPrism(base, height, thickness);
    //    prism = new triangularPrism(inputPanel.getRangeValue('Triangle Base'), inputPanel.getRangeValue('Triangle Height'), inputPanel.getRangeValue('Triangle Thickness'));

    console.log(prism.area());
    console.log(prism.volume());

    areaText = new String(prism.area());
    volumeText = new String(prism.volume());



    outputPanel.setText("Area is:", areaText);
    outputPanel.setText("Volume is:", volumeText);

}

function quickSettings_setup() {


    //Volume Calculation Inputs
    // var base, height, thickness;

    inputPanel = QuickSettings.create(300, 100, 'Triangle Attributes');
    inputPanel.addHTML('Tips', 'For fine tuning, nudge the active slider with your keyboard left and right arrows');
    inputPanel.addRange('Triangle Base', 5, 400, 1, setInputVariables);
    inputPanel.addRange('Triangle Height', 5, 400, 1, setInputVariables);
    inputPanel.addRange('Triangle Thickness', 5, 400, 1, setInputVariables);
    inputPanel.addButton('Calculate', upateCalcs);

    outputPanel = QuickSettings.create(300, 600, 'Volume Outputs');
    outputPanel.addText("Area is:");


    outputPanel.addText("Volume is:");


}

function setup() {

    var testing = new triangularPrism(20, 30, 40);
    console.log(testing.area());
    //calcCanvas = createCanvas(windowWidth / 4, windowHeight);
    p5Gui_setup();
    quickSettings_setup();
    upateCalcs();
}

//alert("The area of the triangle is: " +  triangularPrism.area() + " millimeters cubed.");
function draw() {

}
