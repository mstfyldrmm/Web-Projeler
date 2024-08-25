 function calculateSquare(input) {
    const n = parseInt(input, 2);
    const result = n * n;
    return result.toString(2);
  }
  
  // Örnek kullanım
  const input = '1101';
  const result = calculateSquare(input);
  console.log(result);
  