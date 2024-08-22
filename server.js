const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx'); // Use regular xlsx first to debug basic functionality
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const fileName = 'data.xlsx';
let workbook;
let worksheet;

if (fs.existsSync(fileName)) {
    workbook = XLSX.readFile(fileName);
    worksheet = workbook.Sheets['Sheet1'];
} else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([[
        "NAME", "SEX", "DATE OF BIRTH", 
        "QUALIFICATION", "RANK", "AREA of SPECIALIZATION",
        "TEACHING SUBJECT", "M.O.E", "PHONE NUMBER", 
        "DURATION", "RESPONSIBILITY", "L.G.A", "G.L"
    ]]);

    // Save the Excel file without styling first
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, fileName);
}

app.post('/submit', (req, res) => {
    const data = req.body;

    const newRow = [
        data.name, data.sex, data.dob, 
        data.qualification, data.rank, data.area_of_specialization,
        data.teaching_subject, data.moe, data.phoneNumber,
        data.duration, data.responsibilty, data.lga, data.gl
    ];

    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    XLSX.writeFile(workbook, fileName);

    res.json({ message: 'Data saved successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
