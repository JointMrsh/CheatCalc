function calculate() {
	// Get the input equation
	const input = document.getElementById("input").value;
	
	// Use the Sympy library to simplify the equation and get step-by-step solutions
	const result = sympy.simplify(input, {steps: true});
	
	// Display the result
	const output = document.getElementById("output");
	output.innerHTML = "<h2>Result:</h2><p>" + result.expr + "</p><h2>Steps:</h2>";
	
	for (const step of result.steps) {
		output.innerHTML += "<p>" + step.expr + "</p>";
	}
}
