// importing packages
const fs = require("fs");
const xmlcsv = require("xml-csv");


// xml to csv conversion
xmlcsv({
    source: fs.createReadStream("./cd_catalog.xml"),
    rootXMLElement: "CD",
    headerMap: [
        ["TITLE", "TITLE", "string"],
        ["ARTIST", "ARTIST", "string"],
        ["COUNTRY", "COUNTRY", "string"],
        ["COMPANY", "COMPANY", "string"],
        ["PRICE", "PRICE", "string"],
        ["YEAR", "YEAR", "string"]
    ]
}).pipe(fs.createWriteStream("./cd_catalog.csv"));