var zhTable = {
    '你': [0x00,0x00,0xC0,0xF0,0x0E,0x80,0x40,0x30,0x1E,0x10,0x90,0x10,0x10,0x50,0x30,0x00,
           0x02,0x01,0x00,0xFF,0x00,0x20,0x18,0x06,0x80,0x00,0xFF,0x00,0x02,0x0C,0x30,0x00],
    '好': [0x20,0x20,0xE0,0x3E,0x20,0xE0,0x00,0x00,0x04,0x04,0xC4,0x24,0x14,0x0C,0x00,0x00,
           0x80,0x44,0x2B,0x10,0x2C,0xC3,0x00,0x01,0x81,0x01,0xFF,0x01,0x01,0x01,0x01,0x00],
};

module.exports = {
    'table': zhTable,
    'width': 16,
    'height': 16,
    'length': 32
};
