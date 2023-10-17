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
  termsByDegree = {};

  for (termNum = 0; termNum < terms.length; termNum++) {
    let term = terms[termNum];
    
    if (term == '') {
      continue
    };

    if (term.includes('x')) {
      let coefficient = term.split('x')[0];
      if (coefficient == '') {
        coefficient = 1;
      };
      
      if (term.includes('^')) {
        // exponent >1
        let exp = term.split('^')[1];
        termsByDegree[exp] = coefficient;
      } else {
        // exponent =1
        termsByDegree[1] = coefficient;
      };
    } else {
      // exponent =0
      termsByDegree[0] = term;
    };
  };

  let keys = Object.keys(termsByDegree);
  let largestDegree = '...';

  for (k = 0; k < keys.length; k++) {
    let current = keys[k];
    
    if (largestDegree == '...') {
      largestDegree = current;
      continue
    };

    largestDegree = Math.max(current, largestDegree);
  };

  let coefficientList = [];

  for (d = 0; d <= largestDegree; d--) {

  };

  alert(JSON.stringify(termsByDegree));
};
