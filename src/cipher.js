window.cipher = {

  encode: (offset, string) => {
    let textResult = '';
    for (let i = 0; i < string.length; i++) {
      const Ascii = string.charCodeAt(i);
      let cipherCode = (Ascii - 65 + offset) % 26 + 65;
      const letterEncode = String.fromCharCode(cipherCode);
      textResult += letterEncode;
    } return textResult;
  },

  decode: (offset, string) => {
    let textResult = '';
    for (let i = 0; i < string.length; i++) {
      const Ascii = string.charCodeAt(i);
      let cipherCode = (Ascii - 65 - offset) % 26 + 65;
      const letterDecode = String.fromCharCode(cipherCode);
      textResult += letterDecode;
    } return textResult;
  }
}