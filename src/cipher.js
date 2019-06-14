window.cipher = {

  encode: (offset, string) => {
    let textResult = '';
    let letterEncode = '';

    for (let i = 0; i < string.length; i++) {
      const Ascii = string.charCodeAt(i);

      if (Ascii >= 65 && Ascii <= 90 && offset >= 0) {
        let cipherCode = (Ascii - 65 + offset) % 26 + 65;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 97 && Ascii <= 122 && offset >= 0) {
        let cipherCode = (Ascii - 97 + offset) % 26 + 97;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 33 && Ascii <= 64 && offset >= 0) {
        let cipherCode = (Ascii - 33 + offset) % 32 + 33;
        letterEncode = String.fromCharCode(cipherCode);
      } else {
        let otherCaracter = String.fromCharCode(Ascii);
        letterEncode = otherCaracter;
      } textResult += letterEncode;
    } return textResult;
  },

  decode: (offset, string) => {
    let textResult = '';
    let letterEncode = '';

    for (let i = 0; i < string.length; i++) {
      const Ascii = string.charCodeAt(i);

      if (Ascii >= 65 && Ascii <= 90 && offset >= 0) {
        let cipherCode = (Ascii - offset + 65) % 26 + 65;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 97 && Ascii <= 122 && offset >= 0) {
        let cipherCode = (Ascii - offset + 33) % 26 + 97;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 33 && Ascii <= 64 && offset >= 0) {
        let cipherCode = (Ascii - offset - 1) % 32 + 33;
        letterEncode = String.fromCharCode(cipherCode);
      } else {
        let otherCaracter = String.fromCharCode(Ascii);
        letterEncode = otherCaracter;
      } textResult += letterEncode;
    } return textResult;
  }
}