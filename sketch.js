var coffeeTinsWet = 8;
var cupsClay = 20;
var cupsLime = 16;
var cupsPortland = 16;
var cupsSand = 16;



var prism = {
    type: "Like trapezoidPrism, triangularPri",
    create: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    thickness: 50,
    unitOfMeasurement: ["millimeters"],

    sayType: function () {
        console.log(this.type);
    }

};

var triangular = prism.create({
    type: "Triangular Prism",
    base: 50,
    height: 60,
    thickness: 70,
    area: function () {
        return this.base * 0.5 * this.height;

    },
    volume: function () {
        return this.area() * this.thickness;
    }
});

var trapezoidal = prism.create({
    type: "Trapezoidal Prism",
    longLength: 50,
    shortLength: 60,
    height: 70,
    area: function () {
        return 0.5 * this.height * (this.longLength + this.shortLength);

    },
    volume: function () {
        return this.area() * this.thickness;
    },

});

var reactorWallBrick = trapezoidal.create({
    longLength: 270,
    shortLength: 240,
    height: 80,
    thickness: 90,
    showArea: function () {
        console.log(this.area());
    },
    showVolume: function () {
        console.log(
            this.volume()
        );
    }
});


//trying the other method
var innerTriangleBrick = triangular.create({
    //TODO later simplify with checks
    //Choosing to test setting variables here, but functions using dot notation
    base: 240,
    height: 160,
    thickness: 90,
});

innerTriangleBrick.showArea = function () {
    console.log("Area is: ", innerTriangleBrick.area());

};
innerTriangleBrick.showVolume = function () {
    console.log("Volume is:", innerTriangleBrick.volume());
};


function setup() {



    console.log(reactorWallBrick.showArea());
    console.log(reactorWallBrick.area());
    console.log(reactorWallBrick.longLength);
    console.log(reactorWallBrick.volume());

    innerTriangleBrick.showArea();
    innerTriangleBrick.showVolume();




}







var calcCanvas;
var ingredientRatiosGUI;
var volumeInputsGUI;

function p5Gui_setup() {
    sliderRange(0, 30, 1);
    ingredientRatiosGUI = createGui('Ingredient Ratios');
    ingredientRatiosGUI.addGlobals('coffeeTinsWet', 'cupsClay', 'cupsLime', 'cupsPortland', 'cupsSand');

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

    function updateTriangleCalcs() {
        var base = inputPanel.getRangeValue('Triangle Base');
        var height = inputPanel.getRangeValue('Triangle Height');
        var thickness = inputPanel.getRangeValue('Triangle Thickness');

        prism = new triangularPrism(base, height, thickness);
        //    prism = new triangularPrism(inputPanel.getRangeValue('Triangle Base'), inputPanel.getRangeValue('Triangle Height'), inputPanel.getRangeValue('Triangle Thickness'));

        console.log(prism.area());
        console.log(prism.volume());

        new String(prism.area());
        volumeText =
            new String(prism.volume());

        outputPanel.setText("Area is:", areaText);
        outputPanel.setText("Volume is:", volumeText);
    }


    function updateTrapezoidCalcs() {
        var longLength = inputPanel.getRangeValue('Trapezoidal Long Length');
        var shortLength = inputPanel.getRangeValue('Trapezoidal Short Length');
        var height = inputPanel.getRangeValue('Trapezoidal Height');
        var thickness = inputPanel.getRangeValue('Trapezoidal Thickness');

        prism = new trapezoidalPrism();

        console.log(prism.area());
        console.log(prism.volume());

    }
}
var triangleInputsPanel, trapezoidalInputsPanel;

function quickSettings_setup() {
    //Having difficulty here. How did I get it right before
    function makeRadioBehaviour() {
        var isTrapActive = trapezoidalInputsPanel.getBoolean('Make Trapezoid Active?');
        var isTriActive = triangleInputsPanel.getBoolean('Make Triangle Active?');
        //        console.log('Trap is' + trapezoidalInputsPanel.getBoolean('Make Trapezoid Active?'));
        //        console.log('Tri is' + triangleInputsPanel.getBoolean('Make Triangle Active?'));
        if (isTrapActive == true) {
            triangleInputsPanel.setBoolean('Make Triangle Active?', false);

            //TODO NEXT above works so do similar visa versa and such 
        } else if (isTrapActive == false) {
            triangleInputsPanel.setBoolean('Make Triangle Active?', true);
        }

        if (isTriActive == true) {
            trapezoidalInputsPanel.setBoolean('Make Trapezoid Active?', false);
        } else if (isTriActive == false) {
            trapezoidalInputsPanel.setBoolean('Make Trapesoid Active?', true);
        }


    }

    triangleInputsGUI();
    trapezoidalInputsGUI();
    //Volume Calculation Inputs
    // var base, height, thickness;



    function triangleInputsGUI() {
        triangleInputsPanel = QuickSettings.create(300, 100, 'Triangle Attributes');
        triangleInputsPanel.addBoolean('Make Triangle Active?', true, makeRadioBehaviour);

        triangleInputsPanel.addHTML('Tips', 'For fine tuning, nudge the active slider with your keyboard left and right arrows');
        triangleInputsPanel.addRange('Triangle Base', 5, 400, 1, setInputVariables);
        triangleInputsPanel.addRange('Triangle Height', 5, 400, 1, setInputVariables);
        triangleInputsPanel.addRange('Triangle Thickness', 5, 400, 1, setInputVariables);
        triangleInputsPanel.addButton('Calculate', upateCalcs);
    }




    function trapezoidalInputsGUI() {
        trapezoidalInputsPanel = QuickSettings.create(600, 100, 'Trapezoidal Attributes');
        trapezoidalInputsPanel.addBoolean('Make Trapezoid Active?', false, makeRadioBehaviour);

        trapezoidalInputsPanel.addHTML('Tips', 'For fine tuning, nudge the active slider with your keyboard left and right arrows');
        trapezoidalInputsPanel.addRange('Trapezoidal longLength', 5, 400, 1, setInputVariables);
        trapezoidalInputsPanel.addRange('Trapezoidal shortLength', 5, 400, 1, setInputVariables);
        trapezoidalInputsPanel.addRange('Trapezoidal Thickness', 5, 400, 1, setInputVariables);
        trapezoidalInputsPanel.addButton('Calculate', upateCalcs);
    }

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
function draw() {}
