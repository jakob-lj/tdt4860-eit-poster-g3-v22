let lastText = "";

const lastWordIs = (word: string, callback: () => void) => {
  const _w = word.toLowerCase();
  if (lastText.includes(_w)) {
    lastText = "";
    callback();
  }
};

const keylistener = (e: KeyboardEvent) => {
  if (lastText.length > 1000) {
    lastText = "";
  }

  lastText += e.key;

  lastWordIs("styrk", () => {
    alert("MASKIN!");
  });

  lastWordIs("astrid", () => {
    window.location.href =
      "https://www.audi.no/no/web/no/bilmodeller/audi-tron/audi-e-tron.html?gclid=CjwKCAjwjZmTBhB4EiwAynRmD1B5Ow2NfaPE_JTmEat0SiJloPvQtpbzXyNN1KD6y1RNDQedUuRdFhoCWEcQAvD_BwE&gclsrc=aw.ds";
  });

  lastWordIs("kenneth", () => {
    alert("Romerikets store sønn");
  });

  lastWordIs("vegard", () => {
    alert("FÅ PÅ DET KAMERAET!");
  });

  lastWordIs("Filip", () => {
    window.location.href = "https://www.youtube.com/watch?v=4rflpug1L5Q";
  });
};

export { keylistener };
