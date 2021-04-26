function pilih_kota() {
    var pilihan_kota = document.getElementById('pilihan_kota');
    var kota = pilihan_kota.value;

    if (kota == 1) {
        // geo = [-7.0247246, 110.3470243, 12];
        // timezone = +7
        var ramadanDate = 15;

        const jadwal = [{
            "tanggal": "Selasa, 13\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:42",
            "ashar": "15:01",
            "maghrib": "17:41",
            "isya": "18:50",
            "date": 1
        }, {
            "tanggal": "Rabu, 14\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:42",
            "ashar": "15:00",
            "maghrib": "17:40",
            "isya": "18:50",
            "date": 2
        }, {
            "tanggal": "Kamis, 15\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:42",
            "ashar": "15:00",
            "maghrib": "17:40",
            "isya": "18:49",
            "date": 3
        }, {
            "tanggal": "Jumat, 16\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:42",
            "ashar": "15:00",
            "maghrib": "17:40",
            "isya": "18:49",
            "date": 4
        }, {
            "tanggal": "Sabtu, 17\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:39",
            "isya": "18:49",
            "date": 5
        }, {
            "tanggal": "Minggu, 18\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:39",
            "isya": "18:48",
            "date": 6
        }, {
            "tanggal": "Senin, 19\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:38",
            "isya": "18:48",
            "date": 7
        }, {
            "tanggal": "Selasa, 20\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:38",
            "isya": "18:48",
            "date": 8
        }, {
            "tanggal": "Rabu, 21\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:38",
            "isya": "18:47",
            "date": 9
        }, {
            "tanggal": "Kamis, 22\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:37",
            "isya": "18:47",
            "date": 10
        }, {
            "tanggal": "Jumat, 23\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:37",
            "isya": "18:47",
            "date": 11
        }, {
            "tanggal": "Sabtu, 24\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:47",
            "date": 12
        }, {
            "tanggal": "Minggu, 25\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:46",
            "date": 13
        }, {
            "tanggal": "Senin, 26\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:46",
            "date": 14
        }, {
            "tanggal": "Selasa, 27\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:35",
            "isya": "18:46",
            "date": 15
        }, {
            "tanggal": "Rabu, 28\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:35",
            "isya": "18:46",
            "date": 16
        }, {
            "tanggal": "Kamis, 29\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:36",
            "dhuha": "06:04",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:35",
            "isya": "18:45",
            "date": 17
        }, {
            "tanggal": "Jumat, 30\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:04",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:35",
            "isya": "18:45",
            "date": 18
        }, {
            "tanggal": "Sabtu, 01\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 19
        }, {
            "tanggal": "Minggu, 02\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 20
        }, {
            "tanggal": "Senin, 03\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 21
        }, {
            "tanggal": "Selasa, 04\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 22
        }, {
            "tanggal": "Rabu, 05\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 23
        }, {
            "tanggal": "Kamis, 06\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 24
        }, {
            "tanggal": "Jumat, 07\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 25
        }, {
            "tanggal": "Sabtu, 08\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 26
        }, {
            "tanggal": "Minggu, 09\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 27
        }, {
            "tanggal": "Senin, 10\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 28
        }, {
            "tanggal": "Selasa, 11\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:06",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 29
        }, {
            "tanggal": "Rabu, 12\/05\/2021",
            "imsak": "04:12",
            "subuh": "04:22",
            "terbit": "05:37",
            "dhuha": "06:06",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 30
        }];

        var today = ramadanDate - 1;
        var imsak = document.querySelector("#imsak span");
        var subuh = document.querySelector("#subuh span");
        var dzuhur = document.querySelector("#dzuhur span");
        var ashar = document.querySelector("#ashar span");
        var magrib = document.querySelector("#magrib span");
        var isya = document.querySelector("#isya span");

        imsak.innerHTML = jadwal[today].imsak;
        subuh.innerHTML = jadwal[today].subuh;
        dzuhur.innerHTML = jadwal[today].dzuhur;
        ashar.innerHTML = jadwal[today].ashar;
        magrib.innerHTML = jadwal[today].maghrib;
        isya.innerHTML = jadwal[today].isya;

    } else if (kota == 2) {
        // geo = [-6.9034443, 107.5731166, 12];
        // timezone = +7
        var ramadanDate = 15;

        const jadwal = [{
            "tanggal": "Selasa, 13\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:54",
            "ashar": "15:12",
            "maghrib": "17:56",
            "isya": "19:02",
            "date": 1
        }, {
            "tanggal": "Rabu, 14\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:54",
            "ashar": "15:12",
            "maghrib": "17:56",
            "isya": "19:01",
            "date": 2
        }, {
            "tanggal": "Kamis, 15\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:53",
            "ashar": "15:12",
            "maghrib": "17:56",
            "isya": "19:01",
            "date": 3
        }, {
            "tanggal": "Jumat, 16\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:53",
            "ashar": "15:12",
            "maghrib": "17:55",
            "isya": "19:01",
            "date": 4
        }, {
            "tanggal": "Sabtu, 17\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:53",
            "ashar": "15:12",
            "maghrib": "17:55",
            "isya": "19:00",
            "date": 5
        }, {
            "tanggal": "Minggu, 18\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:53",
            "ashar": "15:12",
            "maghrib": "17:54",
            "isya": "19:00",
            "date": 6
        }, {
            "tanggal": "Senin, 19\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:53",
            "ashar": "15:12",
            "maghrib": "17:54",
            "isya": "19:00",
            "date": 7
        }, {
            "tanggal": "Selasa, 20\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:52",
            "ashar": "15:12",
            "maghrib": "17:54",
            "isya": "18:59",
            "date": 8
        }, {
            "tanggal": "Rabu, 21\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:52",
            "ashar": "15:11",
            "maghrib": "17:53",
            "isya": "18:59",
            "date": 9
        }, {
            "tanggal": "Kamis, 22\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:52",
            "ashar": "15:11",
            "maghrib": "17:53",
            "isya": "18:59",
            "date": 10
        }, {
            "tanggal": "Jumat, 23\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:52",
            "ashar": "15:11",
            "maghrib": "17:53",
            "isya": "18:58",
            "date": 11
        }, {
            "tanggal": "Sabtu, 24\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:52",
            "ashar": "15:11",
            "maghrib": "17:52",
            "isya": "18:58",
            "date": 12
        }, {
            "tanggal": "Minggu, 25\/04\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:52",
            "isya": "18:58",
            "date": 13
        }, {
            "tanggal": "Senin, 26\/04\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:52",
            "isya": "18:58",
            "date": 14
        }, {
            "tanggal": "Selasa, 27\/04\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:51",
            "isya": "18:57",
            "date": 15
        }, {
            "tanggal": "Rabu, 28\/04\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:51",
            "isya": "18:57",
            "date": 16
        }, {
            "tanggal": "Kamis, 29\/04\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:51",
            "isya": "18:57",
            "date": 17
        }, {
            "tanggal": "Jumat, 30\/04\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:51",
            "ashar": "15:11",
            "maghrib": "17:50",
            "isya": "18:57",
            "date": 18
        }, {
            "tanggal": "Sabtu, 01\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:50",
            "isya": "18:57",
            "date": 19
        }, {
            "tanggal": "Minggu, 02\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:50",
            "isya": "18:57",
            "date": 20
        }, {
            "tanggal": "Senin, 03\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:50",
            "isya": "18:56",
            "date": 21
        }, {
            "tanggal": "Selasa, 04\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:49",
            "isya": "18:56",
            "date": 22
        }, {
            "tanggal": "Rabu, 05\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:49",
            "isya": "18:56",
            "date": 23
        }, {
            "tanggal": "Kamis, 06\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:11",
            "maghrib": "17:49",
            "isya": "18:56",
            "date": 24
        }, {
            "tanggal": "Jumat, 07\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:16",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:49",
            "isya": "18:56",
            "date": 25
        }, {
            "tanggal": "Sabtu, 08\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:17",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:49",
            "isya": "18:56",
            "date": 26
        }, {
            "tanggal": "Minggu, 09\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:17",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:48",
            "isya": "18:56",
            "date": 27
        }, {
            "tanggal": "Senin, 10\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:17",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:48",
            "isya": "18:56",
            "date": 28
        }, {
            "tanggal": "Selasa, 11\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:44",
            "dhuha": "06:17",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:48",
            "isya": "18:56",
            "date": 29
        }, {
            "tanggal": "Rabu, 12\/05\/2021",
            "imsak": "04:24",
            "subuh": "04:34",
            "terbit": "05:45",
            "dhuha": "06:17",
            "dzuhur": "11:50",
            "ashar": "15:10",
            "maghrib": "17:48",
            "isya": "18:56",
            "date": 30
        }];

        var today = ramadanDate - 1;
        var imsak = document.querySelector("#imsak span");
        var subuh = document.querySelector("#subuh span");
        var dzuhur = document.querySelector("#dzuhur span");
        var ashar = document.querySelector("#ashar span");
        var magrib = document.querySelector("#magrib span");
        var isya = document.querySelector("#isya span");

        imsak.innerHTML = jadwal[today].imsak;
        subuh.innerHTML = jadwal[today].subuh;
        dzuhur.innerHTML = jadwal[today].dzuhur;
        ashar.innerHTML = jadwal[today].ashar;
        magrib.innerHTML = jadwal[today].maghrib;
        isya.innerHTML = jadwal[today].isya;
    } else if (kota == 3) {
        // geo = [-7.2756141, 112.6426428, 12];
        // timezone = +7
        var ramadanDate = 15;

        const jadwal = [{
            "tanggal": "Selasa, 13\/04\/2021",
            "imsak": "04:06",
            "subuh": "04:16",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:33",
            "ashar": "14:51",
            "maghrib": "17:31",
            "isya": "18:41",
            "date": 1
        }, {
            "tanggal": "Rabu, 14\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:33",
            "ashar": "14:51",
            "maghrib": "17:31",
            "isya": "18:40",
            "date": 2
        }, {
            "tanggal": "Kamis, 15\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:33",
            "ashar": "14:51",
            "maghrib": "17:31",
            "isya": "18:40",
            "date": 3
        }, {
            "tanggal": "Jumat, 16\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:32",
            "ashar": "14:51",
            "maghrib": "17:30",
            "isya": "18:40",
            "date": 4
        }, {
            "tanggal": "Sabtu, 17\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:32",
            "ashar": "14:51",
            "maghrib": "17:30",
            "isya": "18:39",
            "date": 5
        }, {
            "tanggal": "Minggu, 18\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:32",
            "ashar": "14:51",
            "maghrib": "17:29",
            "isya": "18:39",
            "date": 6
        }, {
            "tanggal": "Senin, 19\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:32",
            "ashar": "14:51",
            "maghrib": "17:29",
            "isya": "18:39",
            "date": 7
        }, {
            "tanggal": "Selasa, 20\/04\/2021",
            "imsak": "04:05",
            "subuh": "04:15",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:32",
            "ashar": "14:51",
            "maghrib": "17:29",
            "isya": "18:38",
            "date": 8
        }, {
            "tanggal": "Rabu, 21\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:31",
            "ashar": "14:51",
            "maghrib": "17:28",
            "isya": "18:38",
            "date": 9
        }, {
            "tanggal": "Kamis, 22\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:31",
            "ashar": "14:51",
            "maghrib": "17:28",
            "isya": "18:38",
            "date": 10
        }, {
            "tanggal": "Jumat, 23\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:31",
            "ashar": "14:51",
            "maghrib": "17:27",
            "isya": "18:37",
            "date": 11
        }, {
            "tanggal": "Sabtu, 24\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:31",
            "ashar": "14:51",
            "maghrib": "17:27",
            "isya": "18:37",
            "date": 12
        }, {
            "tanggal": "Minggu, 25\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:31",
            "ashar": "14:50",
            "maghrib": "17:27",
            "isya": "18:37",
            "date": 13
        }, {
            "tanggal": "Senin, 26\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:26",
            "isya": "18:37",
            "date": 14
        }, {
            "tanggal": "Selasa, 27\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:26",
            "isya": "18:36",
            "date": 15
        }, {
            "tanggal": "Rabu, 28\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:26",
            "isya": "18:36",
            "date": 16
        }, {
            "tanggal": "Kamis, 29\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:27",
            "dhuha": "05:55",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:25",
            "isya": "18:36",
            "date": 17
        }, {
            "tanggal": "Jumat, 30\/04\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:28",
            "dhuha": "05:55",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:25",
            "isya": "18:36",
            "date": 18
        }, {
            "tanggal": "Sabtu, 01\/05\/2021",
            "imsak": "04:04",
            "subuh": "04:14",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:25",
            "isya": "18:36",
            "date": 19
        }, {
            "tanggal": "Minggu, 02\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:25",
            "isya": "18:35",
            "date": 20
        }, {
            "tanggal": "Senin, 03\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:30",
            "ashar": "14:50",
            "maghrib": "17:24",
            "isya": "18:35",
            "date": 21
        }, {
            "tanggal": "Selasa, 04\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:24",
            "isya": "18:35",
            "date": 22
        }, {
            "tanggal": "Rabu, 05\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:24",
            "isya": "18:35",
            "date": 23
        }, {
            "tanggal": "Kamis, 06\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:24",
            "isya": "18:35",
            "date": 24
        }, {
            "tanggal": "Jumat, 07\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:35",
            "date": 25
        }, {
            "tanggal": "Sabtu, 08\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:35",
            "date": 26
        }, {
            "tanggal": "Minggu, 09\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:56",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:35",
            "date": 27
        }, {
            "tanggal": "Senin, 10\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:57",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:34",
            "date": 28
        }, {
            "tanggal": "Selasa, 11\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:57",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:34",
            "date": 29
        }, {
            "tanggal": "Rabu, 12\/05\/2021",
            "imsak": "04:03",
            "subuh": "04:13",
            "terbit": "05:28",
            "dhuha": "05:57",
            "dzuhur": "11:29",
            "ashar": "14:50",
            "maghrib": "17:23",
            "isya": "18:34",
            "date": 30
        }];

        var today = ramadanDate - 1;
        var imsak = document.querySelector("#imsak span");
        var subuh = document.querySelector("#subuh span");
        var dzuhur = document.querySelector("#dzuhur span");
        var ashar = document.querySelector("#ashar span");
        var magrib = document.querySelector("#magrib span");
        var isya = document.querySelector("#isya span");

        imsak.innerHTML = jadwal[today].imsak;
        subuh.innerHTML = jadwal[today].subuh;
        dzuhur.innerHTML = jadwal[today].dzuhur;
        ashar.innerHTML = jadwal[today].ashar;
        magrib.innerHTML = jadwal[today].maghrib;
        isya.innerHTML = jadwal[today].isya;
    } else if (kota == 4) {
        // geo = [-7.803249, 110.3398253, 13];
        // timezone = +7
        var ramadanDate = 15;

        const jadwal = [{
            "tanggal": "Selasa, 13\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:38",
            "dhuha": "06:05",
            "dzuhur": "11:43",
            "ashar": "15:01",
            "maghrib": "17:41",
            "isya": "18:50",
            "date": 1
        }, {
            "tanggal": "Rabu, 14\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:42",
            "ashar": "15:01",
            "maghrib": "17:40",
            "isya": "18:49",
            "date": 2
        }, {
            "tanggal": "Kamis, 15\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:42",
            "ashar": "15:01",
            "maghrib": "17:40",
            "isya": "18:49",
            "date": 3
        }, {
            "tanggal": "Jumat, 16\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:42",
            "ashar": "15:01",
            "maghrib": "17:39",
            "isya": "18:49",
            "date": 4
        }, {
            "tanggal": "Sabtu, 17\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:42",
            "ashar": "15:01",
            "maghrib": "17:39",
            "isya": "18:48",
            "date": 5
        }, {
            "tanggal": "Minggu, 18\/04\/2021",
            "imsak": "04:15",
            "subuh": "04:25",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:41",
            "ashar": "15:01",
            "maghrib": "17:38",
            "isya": "18:48",
            "date": 6
        }, {
            "tanggal": "Senin, 19\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:38",
            "isya": "18:48",
            "date": 7
        }, {
            "tanggal": "Selasa, 20\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:38",
            "isya": "18:47",
            "date": 8
        }, {
            "tanggal": "Rabu, 21\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:37",
            "isya": "18:47",
            "date": 9
        }, {
            "tanggal": "Kamis, 22\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:41",
            "ashar": "15:00",
            "maghrib": "17:37",
            "isya": "18:47",
            "date": 10
        }, {
            "tanggal": "Jumat, 23\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:46",
            "date": 11
        }, {
            "tanggal": "Sabtu, 24\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:46",
            "date": 12
        }, {
            "tanggal": "Minggu, 25\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:36",
            "isya": "18:46",
            "date": 13
        }, {
            "tanggal": "Senin, 26\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:35",
            "isya": "18:46",
            "date": 14
        }, {
            "tanggal": "Selasa, 27\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:35",
            "isya": "18:45",
            "date": 15
        }, {
            "tanggal": "Rabu, 28\/04\/2021",
            "imsak": "04:14",
            "subuh": "04:24",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:40",
            "ashar": "15:00",
            "maghrib": "17:35",
            "isya": "18:45",
            "date": 16
        }, {
            "tanggal": "Kamis, 29\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 17
        }, {
            "tanggal": "Jumat, 30\/04\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 18
        }, {
            "tanggal": "Sabtu, 01\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:05",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:34",
            "isya": "18:45",
            "date": 19
        }, {
            "tanggal": "Minggu, 02\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:37",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 20
        }, {
            "tanggal": "Senin, 03\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 21
        }, {
            "tanggal": "Selasa, 04\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 22
        }, {
            "tanggal": "Rabu, 05\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:33",
            "isya": "18:44",
            "date": 23
        }, {
            "tanggal": "Kamis, 06\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 24
        }, {
            "tanggal": "Jumat, 07\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 25
        }, {
            "tanggal": "Sabtu, 08\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:39",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:44",
            "date": 26
        }, {
            "tanggal": "Minggu, 09\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:06",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:43",
            "date": 27
        }, {
            "tanggal": "Senin, 10\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:07",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:32",
            "isya": "18:43",
            "date": 28
        }, {
            "tanggal": "Selasa, 11\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:07",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:31",
            "isya": "18:43",
            "date": 29
        }, {
            "tanggal": "Rabu, 12\/05\/2021",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:38",
            "dhuha": "06:07",
            "dzuhur": "11:38",
            "ashar": "14:59",
            "maghrib": "17:31",
            "isya": "18:43",
            "date": 30
        }];

        var today = ramadanDate - 1;
        var imsak = document.querySelector("#imsak span");
        var subuh = document.querySelector("#subuh span");
        var dzuhur = document.querySelector("#dzuhur span");
        var ashar = document.querySelector("#ashar span");
        var magrib = document.querySelector("#magrib span");
        var isya = document.querySelector("#isya span");

        imsak.innerHTML = jadwal[today].imsak;
        subuh.innerHTML = jadwal[today].subuh;
        dzuhur.innerHTML = jadwal[today].dzuhur;
        ashar.innerHTML = jadwal[today].ashar;
        magrib.innerHTML = jadwal[today].maghrib;
        isya.innerHTML = jadwal[today].isya;
    } else if (kota == 5) {
        // geo = [-6.1333, 106.75, 10];
        // timezone = +7
        var ramadanDate = 15;

        const jadwal = [{
            "tanggal": "Selasa, 13\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:51",
            "dhuha": "06:18",
            "dzuhur": "11:57",
            "ashar": "15:14",
            "maghrib": "17:56",
            "isya": "19:05",
            "date": 1
        }, {
            "tanggal": "Rabu, 14\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:51",
            "dhuha": "06:18",
            "dzuhur": "11:56",
            "ashar": "15:14",
            "maghrib": "17:55",
            "isya": "19:05",
            "date": 2
        }, {
            "tanggal": "Kamis, 15\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:56",
            "ashar": "15:14",
            "maghrib": "17:55",
            "isya": "19:04",
            "date": 3
        }, {
            "tanggal": "Jumat, 16\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:56",
            "ashar": "15:14",
            "maghrib": "17:55",
            "isya": "19:04",
            "date": 4
        }, {
            "tanggal": "Sabtu, 17\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:56",
            "ashar": "15:14",
            "maghrib": "17:54",
            "isya": "19:04",
            "date": 5
        }, {
            "tanggal": "Minggu, 18\/04\/2021",
            "imsak": "04:28",
            "subuh": "04:38",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:56",
            "ashar": "15:14",
            "maghrib": "17:54",
            "isya": "19:03",
            "date": 6
        }, {
            "tanggal": "Senin, 19\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:55",
            "ashar": "15:14",
            "maghrib": "17:53",
            "isya": "19:03",
            "date": 7
        }, {
            "tanggal": "Selasa, 20\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:55",
            "ashar": "15:14",
            "maghrib": "17:53",
            "isya": "19:03",
            "date": 8
        }, {
            "tanggal": "Rabu, 21\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:55",
            "ashar": "15:14",
            "maghrib": "17:53",
            "isya": "19:02",
            "date": 9
        }, {
            "tanggal": "Kamis, 22\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:55",
            "ashar": "15:14",
            "maghrib": "17:52",
            "isya": "19:02",
            "date": 10
        }, {
            "tanggal": "Jumat, 23\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:55",
            "ashar": "15:14",
            "maghrib": "17:52",
            "isya": "19:02",
            "date": 11
        }, {
            "tanggal": "Sabtu, 24\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:52",
            "isya": "19:02",
            "date": 12
        }, {
            "tanggal": "Minggu, 25\/04\/2021",
            "imsak": "04:27",
            "subuh": "04:37",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:51",
            "isya": "19:01",
            "date": 13
        }, {
            "tanggal": "Senin, 26\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:51",
            "isya": "19:01",
            "date": 14
        }, {
            "tanggal": "Selasa, 27\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:51",
            "isya": "19:01",
            "date": 15
        }, {
            "tanggal": "Rabu, 28\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:50",
            "isya": "19:01",
            "date": 16
        }, {
            "tanggal": "Kamis, 29\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:54",
            "ashar": "15:14",
            "maghrib": "17:50",
            "isya": "19:01",
            "date": 17
        }, {
            "tanggal": "Jumat, 30\/04\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:14",
            "maghrib": "17:50",
            "isya": "19:00",
            "date": 18
        }, {
            "tanggal": "Sabtu, 01\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:14",
            "maghrib": "17:50",
            "isya": "19:00",
            "date": 19
        }, {
            "tanggal": "Minggu, 02\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:14",
            "maghrib": "17:49",
            "isya": "19:00",
            "date": 20
        }, {
            "tanggal": "Senin, 03\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:14",
            "maghrib": "17:49",
            "isya": "19:00",
            "date": 21
        }, {
            "tanggal": "Selasa, 04\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:14",
            "maghrib": "17:49",
            "isya": "19:00",
            "date": 22
        }, {
            "tanggal": "Rabu, 05\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:49",
            "isya": "19:00",
            "date": 23
        }, {
            "tanggal": "Kamis, 06\/05\/2021",
            "imsak": "04:26",
            "subuh": "04:36",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:49",
            "isya": "19:00",
            "date": 24
        }, {
            "tanggal": "Jumat, 07\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "19:00",
            "date": 25
        }, {
            "tanggal": "Sabtu, 08\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "19:00",
            "date": 26
        }, {
            "tanggal": "Minggu, 09\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "18:59",
            "date": 27
        }, {
            "tanggal": "Senin, 10\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:18",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "18:59",
            "date": 28
        }, {
            "tanggal": "Selasa, 11\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:19",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "18:59",
            "date": 29
        }, {
            "tanggal": "Rabu, 12\/05\/2021",
            "imsak": "04:25",
            "subuh": "04:35",
            "terbit": "05:50",
            "dhuha": "06:19",
            "dzuhur": "11:53",
            "ashar": "15:13",
            "maghrib": "17:48",
            "isya": "18:59",
            "date": 30
        }];

        var today = ramadanDate - 1;
        var imsak = document.querySelector("#imsak span");
        var subuh = document.querySelector("#subuh span");
        var dzuhur = document.querySelector("#dzuhur span");
        var ashar = document.querySelector("#ashar span");
        var magrib = document.querySelector("#magrib span");
        var isya = document.querySelector("#isya span");

        imsak.innerHTML = jadwal[today].imsak;
        subuh.innerHTML = jadwal[today].subuh;
        dzuhur.innerHTML = jadwal[today].dzuhur;
        ashar.innerHTML = jadwal[today].ashar;
        magrib.innerHTML = jadwal[today].maghrib;
        isya.innerHTML = jadwal[today].isya;
    }

}

function widget_jadwal_sholat() {
    pilih_kota();

}

var initialDate = new Date(2021, 3, 12);
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);
document.getElementById('days_ramadhan').innerHTML = daysSince;
