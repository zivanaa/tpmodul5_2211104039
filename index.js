const HaloGeneric = require('./haloGeneric');
const DataGeneric = require('./dataGeneric');

function main() {
    const halo = new HaloGeneric();
    halo.SapaUser("Zivan");

    const data = new DataGeneric("2211104039");
    data.PrintData();
}

main();
