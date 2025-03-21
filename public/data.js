const DATA = {
  students: [
    { givenName: "Rudolf", surname: "Schraml", userId: "rschraml"} ,
    {givenName: "Larissa", surname: "Spitz", userId: "lspitz"},
    {givenName: "Irmhild", surname: "Nussbaum", userId: "inussbaum"},
    {givenName: "Larissa", surname: "Plank", userId: "lplank"},
    {givenName: "Alexander", surname: "Moore", userId: "amoore"},
    {givenName: "Achim", surname: "Jahn", userId: "ajahn"},
    {givenName: "Emmy", surname: "Eckstein", userId: "eeckstein"},
    {givenName: "Gregor", surname: "Herriot", userId: "gherriot"},
    {givenName: "Leo", surname: "Fosse", userId: "lfosse"},
    {givenName: "Hedy", surname: "Bergmüller", userId: "hbergmueller"},
    {givenName: "Gudrun", surname: "Drake", userId: "gdrake"}
  ],
  depts: [
    { name: "Artificial Inteligence and Human Interfaces", code: "AIHI" },
    { name: "Geoinformatics", code: "GI" },
    { name: "Computer Science", code: "CS" },
    { name: "Mathematics", code: "M" }
  ],
  ects: {
    rschraml: 175,
    lspitz: 160,
    inussbaum:80,
    lplank: 160,
    amoore:185,
    ajahn:140,
    eeckstein: 180,
    gherriot:50,
    lfosse: 20,
    hbergmueller: 95,
    gdrake:120
  }
};
window.DATA = DATA;
export default DATA;
