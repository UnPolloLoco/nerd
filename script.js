function ID(x) {
  return document.getElementById(x);
};

/////

function polynomialSolve() {
  let polynomial = ID('polynomialSolve_polynomial').value;
  let xVal = ID('polynomialSolve_xValue').value;

  polynomial = polynomial.replaceAll(' ', '');
  polynomial = polynomial.replaceAll('+', '[SPLIT]');
  polynomial = polynomial.replaceAll('-', '[SPLIT]-');
  
  terms = polynomial.split('[SPLIT]');
  
  alert(JSON.stringify(terms));
};
