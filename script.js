function ID(x) {
  return document.getElementById(x);
};

/////

function polynomialSolve() {
  let polynomial = ID('polynomialSolve_polynomial').value;
  let xValue = ID('polynomialSolve_xValue').value;

  // prep data collection
  
  polynomial = polynomial.replaceAll(' ', '');
  polynomial = polynomial.replaceAll('+', '[SPLIT]');
  polynomial = polynomial.replaceAll('-', '[SPLIT]-');
  
  terms = polynomial.split('[SPLIT]');
  termsByDegree = {};

  // sort terms by their exponent

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

  // find term with largest degree
  
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

  // create a list of coefficients

  let coefficientList = [];

  for (d = largestDegree; d >= 0; d--) {
    let c = termsByDegree[d];
    if (c == undefined) {
      c = 0;
    };
    coefficientList.push(c);
  };

  // do the actual solving

  let val = coefficientList[0];
  
  for (let i = 1; i < largestDegree + 1; i++) {
    val *= xValue;
    val += coefficientList[i];
  }; 
  
  alert(val);
};
