const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');

const host = '127.0.0.1';
const port = 3002;

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "RAMA"
    let uang = 10000;
    let jajan = 5000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang tersimpan')
    });

    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();

    function checkCPU() {
        let myCPU = [];
        jumlahCPU.map((cpu, i) => {
            myCPU.push(cpu.model);
        })
        return myCPU[0];
    }   
    const hasil = `

    <head>
        <title>${nama}</title>
    </head>
    <body>
    <h1 style='background: black;color: white;padding:20px; text-align:center'>NODE JS UANG JAJAN</h1>
    <p>hi nama ku ${nama}. Saya jajan ${jajan}, uang saya tadi ${uang}, sisa menjadi ${sisa}. </p>
    <h5>sisa RAM My Computer: ${sisaRAM}</h5>
    <h5>Merk CPU My Computer: ${checkCPU()}</h5>
    </body>
    `
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`Server berhasil menyala di ${host}:${port}`);
});