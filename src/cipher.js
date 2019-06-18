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
      } else if (Ascii >= 33 && Ascii <= 47 && offset >= 0) {
        let cipherCode = (Ascii - 33 + offset) % 15 + 33;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 58 && Ascii <= 64 && offset >= 0) {
        let cipherCode = (Ascii - 58 + offset) % 7  + 58;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 91 && Ascii <= 96 && offset >= 0) {
        let cipherCode = (Ascii - 91 + offset) % 6  + 91;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 123 && Ascii <= 255 && offset >= 0) {
        let cipherCode = (Ascii - 123 + offset) % 133  + 123;
        letterEncode = String.fromCharCode(cipherCode);
      }else if(Ascii === 32 && offset >= 0){
        letterEncode = String.fromCharCode(Ascii);
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
      } else if (Ascii >= 33 && Ascii <= 47 && offset >= 0) {
        let cipherCode = (Ascii - 47 - offset) % 15 + 47;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 58 && Ascii <= 64 && offset >= 0) {
        let cipherCode = (Ascii - 64 - offset) % 7  + 64;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 91 && Ascii <= 96 && offset >= 0) {
        let cipherCode = (Ascii - 96 - offset) % 6  + 96;
        letterEncode = String.fromCharCode(cipherCode);
      } else if (Ascii >= 123 && Ascii <= 255 && offset >= 0) {
        let cipherCode = (Ascii - 255 - offset) % 133  + 255;
        letterEncode = String.fromCharCode(cipherCode);
       }else if(Ascii === 32 && offset >= 0){
        letterEncode = String.fromCharCode(Ascii);
      } textResult += letterEncode;
    } return textResult;
  }
}