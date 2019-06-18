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
      } else if (Ascii >= 48 && Ascii <= 57 && offset >= 0) {
        let cipherCode = (Ascii - 48 + offset) % 10 + 48;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 33 && Ascii <= 43 && offset >= 0) {
        let cipherCode = (Ascii - 33 + offset) % 10 + 33;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 128 && Ascii <= 165 && offset >= 0) {
        let cipherCode = (Ascii - 128 + offset) % 38 + 128;
        letterEncode = String.fromCharCode(cipherCode);
      } else{
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
        let cipherCode = (Ascii - 90 - offset) % 26 + 90;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 97 && Ascii <= 122 && offset >= 0) {
        let cipherCode = (Ascii - 122 - offset) % 26 + 122;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 48 && Ascii <= 57 && offset >= 0) {
        let cipherCode = (Ascii - 57 - offset) % 10 + 57;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 33 && Ascii <= 43 && offset >= 0) {
        let cipherCode = (Ascii - 43 - offset) % 10 + 43;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 128 && Ascii <= 165 && offset >= 0) {
        let cipherCode = (Ascii - 165 - offset) % 110 + 165;
        letterEncode = String.fromCharCode(cipherCode);
      } else {
        let otherCaracter = String.fromCharCode(Ascii);
        letterEncode = otherCaracter;
      } textResult += letterEncode;
    } return textResult;
  }
}