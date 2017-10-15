var getJSON = function (a, b) {
    var c = new XMLHttpRequest();
    c.open('GET', a, true);
    c.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    c.setRequestHeader(String.fromCharCode(67,108,105,101,110,116,45,73,68), '8jpk1xckf9ozds2164tw6da3wcrtx2');
    c.responseType = 'json';
    c.onload = function () {
        var status = c.status;
        if (status === 200) {
            b(null, c.response);
        } else {
            b(status, c.response);
        }
    };
    c.send();
};

var stremers = [
    {
        "name": "13angtv",
        "id": "38168037"
    },
    {
        "name": "aeonknight86",
        "id": "22408497"
    },
    {
        "name": "agayguyplays",
        "id": "55123057"
    },
    {
        "name": "alexandralive",
        "id": "118151020"
    },
    {
        "name": "annoying_killah",
        "id": "43711059"
    },
    {
        "name": "bigjimid",
        "id": "48301751"
    },
    {
        "name": "brozime",
        "id": "35833485"
    },
    {
        "name": "bwana",
        "id": "12519"
    },
    {
        "name": "captaintutu",
        "id": "39227123"
    },
    {
        "name": "ceratia",
        "id": "117257019"
    },
    {
        "name": "crazybikerdude",
        "id": "86036995"
    },
    {
        "name": "danielthedemon",
        "id": "64998532"
    },
    {
        "name": "dappadanman",
        "id": "60106331"
    },
    {
        "name": "darkslayer313",
        "id": "86858226"
    },
    {
        "name": "deejayknight",
        "id": "13220401"
    },
    {
        "name": "dimitriv2",
        "id": "73696152"
    },
    {
        "name": "djtechlive",
        "id": "39604685"
    },
    {
        "name": "dkdiamantes",
        "id": "23254521"
    },
    {
        "name": "dramakins",
        "id": "142965689"
    },
    {
        "name": "esp4him",
        "id": "37775607"
    },
    {
        "name": "flare_eyes",
        "id": "23396531"
    },
    {
        "name": "fromthe70s",
        "id": "137087800"
    },
    {
        "name": "frozenballz",
        "id": "39835167"
    },
    {
        "name": "gir8tacos",
        "id": "30368821"
    },
    {
        "name": "glitchygirl",
        "id": "39772500"
    },
    {
        "name": "goku_707",
        "id": "94484033"
    },
    {
        "name": "gorillawolfgaming",
        "id": "55058073"
    },
    {
        "name": "griddark",
        "id": "48000997"
    },
    {
        "name": "h3dsh0t",
        "id": "39549254"
    },
    {
        "name": "hydroxate",
        "id": "23620443"
    },
    {
        "name": "iflynn",
        "id": "74264786"
    },
    {
        "name": "inexpensivegamer",
        "id": "31733363"
    },
    {
        "name": "infraredmike",
        "id": "123760467"
    },
    {
        "name": "ivorysmoon",
        "id": "53408902"
    },
    {
        "name": "j3ubbleboy",
        "id": "102351915"
    },
    {
        "name": "jayneverwhere",
        "id": "48658481"
    },
    {
        "name": "joeyzerotv",
        "id": "67858881"
    },
    {
        "name": "kaoiji",
        "id": "41896003"
    },
    {
        "name": "krashomnis",
        "id": "41327847"
    },
    {
        "name": "littlenavi_",
        "id": "105678857"
    },
    {
        "name": "lokenplays",
        "id": "63758697"
    },
    {
        "name": "lovindatacos",
        "id": "53145783"
    },
    {
        "name": "makarimorph",
        "id": "22880697"
    },
    {
        "name": "memesage",
        "id": "135755302"
    },
    {
        "name": "mogamu",
        "id": "46912119"
    },
    {
        "name": "n00blshowtek",
        "id": "42570827"
    },
    {
        "name": "neoness007",
        "id": "62502182"
    },
    {
        "name": "nosympathyy",
        "id": "25530456"
    },
    {
        "name": "nyxx_tv",
        "id": "78260871"
    },
    {
        "name": "officialdogmandan",
        "id": "148240238"
    },
    {
        "name": "quietteshy",
        "id": "79498247"
    },
    {
        "name": "rageypoo",
        "id": "24590748"
    },
    {
        "name": "rippz0r",
        "id": "81960496"
    },
    {
        "name": "rlcgaming",
        "id": "56314500"
    },
    {
        "name": "rundas",
        "id": "6975368"
    },
    {
        "name": "s0lstep",
        "id": "64968967"
    },
    {
        "name": "sabaiguy",
        "id": "48608310"
    },
    {
        "name": "sabuuchi",
        "id": "94537451"
    },
    {
        "name": "sherparage",
        "id": "42227716"
    },
    {
        "name": "shul",
        "id": "117331838"
    },
    {
        "name": "skill_up_gg",
        "id": "111935835"
    },
    {
        "name": "slapsticklogic",
        "id": "71299765"
    },
    {
        "name": "smashley",
        "id": "40601000"
    },
    {
        "name": "tactical_potato_",
        "id": "91296568"
    },
    {
        "name": "tdefton",
        "id": "146096256"
    },
    {
        "name": "tgdm",
        "id": "22805282"
    },
    {
        "name": "thatreallygrossguy",
        "id": "58009848"
    },
    {
        "name": "tnl_official",
        "id": "104501767"
    },
    {
        "name": "tvsboh",
        "id": "36841405"
    },
    {
        "name": "tygastripe",
        "id": "70435047"
    },
    {
        "name": "volkeris5k",
        "id": "42649814"
    },
    {
        "name": "voltthehero",
        "id": "163044655"
    },
    {
        "name": "wgrates",
        "id": "26215896"
    },
    {
        "name": "wickedjecht",
        "id": "45916302"
    },
    {
        "name": "wobbzie",
        "id": "43108863"
    },
    {
        "name": "woxli",
        "id": "27407819"
    },
    {
        "name": "x3lplive",
        "id": "85080445"
    },
    {
        "name": "xandypants",
        "id": "103225763"
    },
    {
        "name": "xenogelion2",
        "id": "121265382"
    },
    {
        "name": "xiarose",
        "id": "116397612"
    },
    {
        "name": "zopney",
        "id": "6918440"
    },
    {
        "name": "zanagoth",
        "id": "102565388"
    }
]

var watching = [];
var baseTime = new Date("2017-10-15T04:35:00.000Z"); //2017-10-15 04:45 UTC
var dayLength = 1000*60*150; // milliseconds
var table = document.createElement('table');
function main2() {
    document.body = document.createElement('body');
    var blah = document.createElement('p');
    blah.id = 'time';
    blah.setAttribute('style', 'font-size: 28pt; margin: 20pt');
    document.body.appendChild(blah);
    setInterval(function() {
        var dayMoon = Math.floor(((new Date() - baseTime) % (1000*60*150)) / 60000);
        blah.innerText = dayMoon < 100 ? (100 - dayMoon) + " minutes left in the day." : (150 - dayMoon) + " minutes left in the night.";
    }, 1000);
    table.id = 'streamers';
    document.body.appendChild(table);
    var d = document.createElement('tr');
    var e = document.createElement('td');
    e.innerText = "Streamer ID";
    d.appendChild(e);
    e = document.createElement('td');
    e.innerText = "Url";
    d.appendChild(e);
    table.appendChild(d);
    d = document.createElement('button');
    d.setAttribute('onclick',"check()");
    d.innerText = "Update";
    document.body.appendChild(d);
    d = document.createElement('p');
    d.innerText = "Streamer ID is listed because I track what streamers I have open by id. Nothing nepharious going on here.";
    document.body.appendChild(d);

    stremers.forEach(function (v) {
        var f = 'https://api.twitch.tv/kraken/streams/' + v.id;
        setTimeout(function () {
            getJSON(f, function (g, h) {
                if (h['stream'] != null && h['stream']['game'] == "Warframe") {
                    var i = document.createElement('tr');
                    var j = document.createElement('td');
                    var k = document.createElement('td');
                    var l = document.createElement('a');
                    l.setAttribute('href', 'https://www.twitch.tv/' + v.name);
                    l.text = v.name;
                    j.innerHTML = v.id;
                    i.appendChild(j);
                    k.appendChild(l);
                    i.appendChild(k);
                    table.appendChild(i);
                }
            });
        }, 2000);
    });
}
main2();

function check() {
    main2();
    if (watching == null) { return; }
    var temp, temp2, changes;
    if (document.getElementById('check') != null) {
        document.getElementById('check').innerHTML = "";
    } else {
        (temp = document.createElement('table')).id = 'check';
        temp.setAttribute('cellpadding', '10');
        document.body.appendChild(temp);
    }
    changes = document.getElementById('check');
    stremers.forEach(function (v) {
        var url = 'https://api.twitch.tv/kraken/streams/' + v.id;
        setTimeout(function () {
            getJSON(url, function (err, data) {
                var indx = watching.indexOf(v.id);
                if (data['stream'] == null && indx > -1) {
                    watching.splice(indx, 1);
                    temp = document.createElement('tr');
                    (temp2 = document.createElement('td')).innerText = 'Remove';
                    temp.appendChild(temp2);
                    (temp2 = document.createElement('td')).innerHTML = "<a href=https://www.twitch.tv/" + v.name + ">" + v.name + "<\a>";
                    temp.appendChild(temp2);
                    (temp2 = document.createElement('td')).innerText = v.id;
                    temp.appendChild(temp2);
                    changes.appendChild(temp);
                }
                if (data['stream'] != null && indx == -1 && data['stream']['game'] == "Warframe") {
                    watching.push(v.id);
                    temp = document.createElement('tr');
                    (temp2 = document.createElement('td')).innerText = 'Add  ';
                    temp.appendChild(temp2);
                    (temp2 = document.createElement('td')).innerHTML = "<a href=https://www.twitch.tv/" + v.name + ">" + v.name + "<\a>";
                    temp.appendChild(temp2);
                    (temp2 = document.createElement('td')).innerText = v.id;
                    temp.appendChild(temp2);
                    changes.appendChild(temp);
                }
            });
        }, 2000);
    });
}