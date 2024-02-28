document.addEventListener("DOMContentLoaded", function () {

    const convertButton = document.getElementById("conv");
    convertButton.addEventListener("click", convertLength);

    function convertLength() {
        const lengthInput = parseFloat(document.getElementById("lengthInput").value);
        const fromUnit = parseInt(document.getElementById("unitSelect").value);
        const toUnit = parseInt(document.getElementById("conversionUnitSelect").value);

        if (isNaN(lengthInput) || fromUnit === 0 || toUnit === 0) {
            alert("Please enter a valid length and select units for conversion.");
            return;
        }

        const convertedLength = performConversion(lengthInput, fromUnit, toUnit);

        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `${lengthInput} ${getUnitName(fromUnit)} is equal to ${convertedLength} ${getUnitName(toUnit)}.`;
    }

    function performConversion(length, fromUnit, toUnit) {
        const conversionFactors = [
            1,          // Unit
            1000,       // Kilometer to Meter
            1,          // Meter to Meter
            0.01,       // Centimeter to Meter
            0.001,      // Millimeter to Meter
            1e-6,       // Micrometer to Meter
            1e-9,       // Nanometer to Meter
            1609.34,    // Mile to Meter
            0.9144,     // Yard to Meter
            0.3048,     // Foot to Meter
            0.0254      // Inches to Meter
        ];

        const convertedLength = length * conversionFactors[fromUnit] / conversionFactors[toUnit];
        return convertedLength.toFixed(4); 
    }

    function getUnitName(unit) {
        const unitNames = [
            "Unit",
            "Kilometer",
            "Meter",
            "Centimeter",
            "Millimeter",
            "Micrometer",
            "Nanometer",
            "Mile",
            "Yard",
            "Foot",
            "Inches"
        ];

        return unitNames[unit];
    }
});


