const fs = require('fs')

const escrita = fs.createWriteStream('007/output.txt')

escrita.write('o meu texto.\n')