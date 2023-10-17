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
  termByDegree = {};

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
        termByDegree[exp] = coefficient;
      } else {
        // exponent =1
        termByDegree[1] = coefficient;
      };
    } else {
      // exponent =0
      termByDegree[0] = term;
    };
  };

  alert(JSON.stringify(termByDegree));
};
