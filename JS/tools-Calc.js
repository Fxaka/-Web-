document.addEventListener('DOMContentLoaded', (event) => {  
    const nonNegativeIntOrFloatRegex = /^\d+(\.\d+)?$/; //  Define regular expressions to validate non-negative integers or floating-point numbers   
  
    const hardwareForm = document.getElementById('hardwareForm');  
    hardwareForm.addEventListener('submit', function(event) {  
        event.preventDefault(); 
  
        // Get all price entry fields  
        const priceInputs = document.querySelectorAll('input[name^="CPU-P"], input[name^="Coller-P"], input[name^="Chassis-P"], input[name^="Memory-P"], input[name^="MB-P"], input[name^="PS-P"], input[name^="Mouse-P"], input[name^="Monitor-P"], input[name^="Key-P"]');  
  
        // Validate each input field  
        let isValid = true;  
        priceInputs.forEach(function(input) {  
            // If the input field is not empty and does not conform to the regular expression, it is marked as invalid  
            if (input.value.trim() !== '' && !nonNegativeIntOrFloatRegex.test(input.value)) {  
                isValid = false;  
                alert('Invalid input in ' + input.name + '. Please enter a valid number.');  
            }  
        });  
  
        if (isValid) {  
            calculateTotals();  
        }  
    });  
  
    function calculateTotals() {  
        // Get the price and quantity of all hardware and calculate the total price  
        let cpuPrice = parseFloat((document.querySelector('input[name="CPU-P"]').value || '0').trim()) || 0;  
        let cpuQuantity = parseInt((document.querySelector('select[name="CPU-Q"]').value || '1').trim()) || 1;  
        let cpuTotal = cpuPrice * cpuQuantity;  
  
        let coolerPrice = parseFloat((document.querySelector('input[name="Coller-P"]').value || '0').trim()) || 0;  
        let coolerQuantity = parseInt((document.querySelector('select[name="Coller-Q"]').value || '1').trim()) || 1;  
        let coolerTotal = coolerPrice * coolerQuantity;  
  
        let chassisPrice = parseFloat((document.querySelector('input[name="Chassis-P"]').value || '0').trim()) || 0;  
        let chassisQuantity = parseInt((document.querySelector('select[name="Chassis-Q"]').value || '1').trim()) || 1;  
        let chassisTotal = chassisPrice * chassisQuantity;  
  
        let memoryPrice = parseFloat((document.querySelector('input[name="Memory-P"]').value || '0').trim()) || 0;  
        let memoryQuantity = parseInt((document.querySelector('select[name="Memory-Q"]').value || '1').trim()) || 1;  
        let memoryTotal = memoryPrice * memoryQuantity;  
  
        let motherboardPrice = parseFloat((document.querySelector('input[name="MB-P"]').value || '0').trim()) || 0;  
        let motherboardQuantity = parseInt((document.querySelector('select[name="MB-Q"]').value || '1').trim()) || 1;  
        let motherboardTotal = motherboardPrice * motherboardQuantity;  
  
        let powerSupplyPrice = parseFloat((document.querySelector('input[name="PS-P"]').value || '0').trim()) || 0;  
        let powerSupplyQuantity = parseInt((document.querySelector('select[name="PS-Q"]').value || '1').trim()) || 1;  
        let powerSupplyTotal = powerSupplyPrice * powerSupplyQuantity;  
  
        // Calculate the total hardware price  
        let hardwareTotal = cpuTotal + coolerTotal + chassisTotal + memoryTotal + motherboardTotal + powerSupplyTotal;  
  
        // Get the price of all peripherals and calculate the total price  
        let mousePrice = parseFloat((document.querySelector('input[name="Mouse-P"]').value || '0').trim()) || 0;  
        let monitorPrice = parseFloat((document.querySelector('input[name="Monitor-P"]').value || '0').trim()) || 0;  
        let keyboardPrice = parseFloat((document.querySelector('input[name="Key-P"]').value || '0').trim()) || 0;  
  
        let externalDeviceTotal = mousePrice + monitorPrice + keyboardPrice;  
  
        // Calculate the total total price  
        let grandTotal = hardwareTotal + externalDeviceTotal;  
  
        // Displays the total price  
        document.querySelector('p[id="hardwareTotal"]').textContent = `Total of Hardware: $${hardwareTotal.toFixed(2)}`;  
        document.querySelector('p[id="externalDeviceTotal"]').textContent = `Total of External Device: $${externalDeviceTotal.toFixed(2)}`;  
        document.querySelector('p[id="grandTotal"]').textContent = `Total of all above: $${grandTotal.toFixed(2)}`;  
    }  
});