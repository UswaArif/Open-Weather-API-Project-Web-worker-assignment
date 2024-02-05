onmessage = function (event) {
    const processedData = processData(event.data);
    postMessage(`<div style="font-size: 40px; color: white;">${processedData.temperature}°C</div>
    <div style="color: white;">Temperature in ${event.data.name}</div>`);
};

function processData(data) {
    return {
        temperature: (data.main.temp - 273.15).toFixed(2), // Convert from Kelvin to Celsius
        // Add more processing logic as needed
    };
}
