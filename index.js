export function capitalize(str) {
    if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

export function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
    
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
    
        // Lowercase letters
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
    
        // Other characters remain unchanged
        return char;
      }).join('');
}

export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return {};

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    return {
      average: sum / length,
      min,
      max,
      length
    };
}