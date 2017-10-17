var domLock = false; //document.evaluate requires page to be static so all async modifications must respect the lock.

var getElementsByXPath = function (element, xpath) {
    var snapshot = document.evaluate(xpath, element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var list = []
    for (var i = 0; i < snapshot.snapshotLength; i++) {
        list.push(snapshot.snapshotItem(i));
    }
    return list;
}

var select = function (selector) {
    var selectables = document.getElementsByClassName('selectable');
    for (var i = 0; i < selectables.length; i++) {
        if (selectables[i].className.includes(selector)) {
            selectables[i].className += ' active';
        } else {
            selectables[i].className = selectables[i].className.replace(' active', '');
        }
    }
}

var getJSON = function (url, callback, args) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    xhr.setRequestHeader(String.fromCharCode(67, 108, 105, 101, 110, 116, 45, 73, 68), '8jpk1xckf9ozds2164tw6da3wcrtx2'); //Obfuscated the first argument so it can't be searched for using the searchbar.
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response, args);
        } else {
            callback(status, xhr.response, args);
        }
    };
    xhr.send();
};

//A streamer consists of their name and their twitch id.
var streamers = [
    {
        'name': '13angTV',
        'id': '38168037'
    },
    {
        'name': 'AeonKnight86',
        'id': '22408497'
    },
    {
        'name': 'agayguyplays',
        'id': '55123057'
    },
    {
        'name': 'AlexandraLive',
        'id': '118151020'
    },
    {
        'name': 'Annoying_Killah',
        'id': '43711059'
    },
    {
        'name': 'BigJimID',
        'id': '48301751'
    },
    {
        'name': 'Brozime',
        'id': '35833485'
    },
    {
        'name': 'Bwana',
        'id': '12519'
    },
    {
        'name': 'CaptainTutu',
        'id': '39227123'
    },
    {
        'name': 'Ceratia',
        'id': '117257019'
    },
    {
        'name': 'CrazyBikerDude',
        'id': '86036995'
    },
    {
        'name': 'DanieltheDemon',
        'id': '64998532'
    },
    {
        'name': 'Dappadanman',
        'id': '60106331'
    },
    {
        'name': 'Darkslayer313',
        'id': '86858226'
    },
    {
        'name': 'DeejayKnight',
        'id': '13220401'
    },
    {
        'name': 'DimitriV2',
        'id': '73696152'
    },
    {
        'name': 'DjTechlive',
        'id': '39604685'
    },
    {
        'name': 'DKDiamantes',
        'id': '23254521'
    },
    {
        'name': 'Dramakins',
        'id': '142965689'
    },
    {
        'name': 'esp4him',
        'id': '37775607'
    },
    {
        'name': 'Flare_Eyes',
        'id': '23396531'
    },
    {
        'name': 'FromThe70s',
        'id': '137087800'
    },
    {
        'name': 'frozenballz',
        'id': '39835167'
    },
    {
        'name': 'GiR8Tacos',
        'id': '30368821'
    },
    {
        'name': 'GlitchyGirl',
        'id': '39772500'
    },
    {
        'name': 'GoKu_707',
        'id': '94484033'
    },
    {
        'name': 'GorillaWolfGaming',
        'id': '55058073'
    },
    {
        'name': 'griddark',
        'id': '48000997'
    },
    {
        'name': 'H3dsh0t',
        'id': '39549254'
    },
    {
        'name': 'Hydroxate',
        'id': '23620443'
    },
    {
        'name': 'iFlynn',
        'id': '74264786'
    },
    {
        'name': 'InexpensiveGamer',
        'id': '31733363'
    },
    {
        'name': 'InfraRedMike',
        'id': '123760467'
    },
    {
        'name': 'Ivorysmoon',
        'id': '53408902'
    },
    {
        'name': 'J3ubbleboy',
        'id': '102351915'
    },
    {
        'name': 'JayNeverwhere',
        'id': '48658481'
    },
    {
        'name': 'JoeyZeroTV',
        'id': '67858881'
    },
    {
        'name': 'Kaoiji',
        'id': '41896003'
    },
    {
        'name': 'KrashOmnis',
        'id': '41327847'
    },
    {
        'name': 'littlenavi_',
        'id': '105678857'
    },
    {
        'name': 'LokenPlays',
        'id': '63758697'
    },
    {
        'name': 'LovinDaTacos',
        'id': '53145783'
    },
    {
        'name': 'Makarimorph',
        'id': '22880697'
    },
    {
        'name': 'MemeSage',
        'id': '135755302'
    },
    {
        'name': 'Mogamu',
        'id': '46912119'
    },
    {
        'name': 'N00blShowtek',
        'id': '42570827'
    },
    {
        'name': 'NeoNess007',
        'id': '62502182'
    },
    {
        'name': 'NoSympathyy',
        'id': '25530456'
    },
    {
        'name': 'NyXx_tv',
        'id': '78260871'
    },
    {
        'name': 'OfficialDogManDan',
        'id': '148240238'
    },
    {
        'name': 'QuietteShy',
        'id': '79498247'
    },
    {
        'name': 'Rageypoo',
        'id': '24590748'
    },
    {
        'name': 'Rippz0r',
        'id': '81960496'
    },
    {
        'name': 'RLCGaming',
        'id': '56314500'
    },
    {
        'name': 'Rundas',
        'id': '6975368'
    },
    {
        'name': 's0lstep',
        'id': '64968967'
    },
    {
        'name': 'SabaiGuy',
        'id': '48608310'
    },
    {
        'name': 'Sabuuchi',
        'id': '94537451'
    },
    {
        'name': 'SherpaRage',
        'id': '42227716'
    },
    {
        'name': 'Shul',
        'id': '117331838'
    },
    {
        'name': 'Skill_Up_GG',
        'id': '111935835'
    },
    {
        'name': 'SlapstickLogic',
        'id': '71299765'
    },
    {
        'name': 'Smashley',
        'id': '40601000'
    },
    {
        'name': 'Tactical_Potato_',
        'id': '91296568'
    },
    {
        'name': 'TDefton',
        'id': '146096256'
    },
    {
        'name': 'TGDM',
        'id': '22805282'
    },
    {
        'name': 'thatreallygrossguy',
        'id': '58009848'
    },
    {
        'name': 'TNL_Official',
        'id': '104501767'
    },
    {
        'name': 'TVSBOH',
        'id': '36841405'
    },
    {
        'name': 'Tygastripe',
        'id': '70435047'
    },
    {
        'name': 'Volkeris5k',
        'id': '42649814'
    },
    {
        'name': 'VoltTheHero',
        'id': '163044655'
    },
    {
        'name': 'wgrates',
        'id': '26215896'
    },
    {
        'name': 'WickedJecht',
        'id': '45916302'
    },
    {
        'name': 'wobbzie',
        'id': '43108863'
    },
    {
        'name': 'WoxLi',
        'id': '27407819'
    },
    {
        'name': 'x3lplive',
        'id': '85080445'
    },
    {
        'name': 'XandyPants',
        'id': '103225763'
    },
    {
        'name': 'xenogelion2',
        'id': '121265382'
    },
    {
        'name': 'XiaRose',
        'id': '116397612'
    },
    {
        'name': 'zopney',
        'id': '6918440'
    },
    {
        'name': 'Zanagoth',
        'id': '102565388'
    },
    {
        'name': 'Spacebeastx',
        'id': '63648889'
    },
    {
        'name': 'Roy_Gaming',
        'id': '83587167'
    },
    {
        'name': 'zakguo',
        'id': '51519804'
    },
    {
        'name': 'NRDabears',
        'id': '79032121'
    },
    {
        'name': 'Vernoc',
        'id': '81882075'
    },
    {
        'name': 'CGs_Knackie',
        'id': '93588342'
    },
    {
        'name': 'GuideWarframeFR',
        'id': '89084332'
    },
    {
        'name': 'TheRavenNShow',
        'id': '128669993'
    },
    {
        'name': 'VVhite_Angel',
        'id': '29724997'
    },
    {
        'name': 'HM_Fuji',
        'id': '134068005'
    },
    {
        'name': 'vnorberto',
        'id': '152445930'
    },
    {
        'name': 'DESrpg',
        'id': '62162791'
    },
    {
        'name': 'AdikDarkCero',
        'id': '28367817'
    },
    {
        'name': 'infodiversao',
        'id': '141036124'
    },
    {
        'name': 'Mozetas',
        'id': '52221079'
    },
    {
        'name': 'PorongoGamer',
        'id': '146646035'
    },
    {
        'name': 'SlyckerSLK',
        'id': '159439281'
    },
    {
        'name': 'Aywi',
        'id': '65298222'
    },
    {
        'name': 'Gara_Bezimennii',
        'id': '162136645'
    },
    {
        'name': 'fluffy_miracle',
        'id': '147265949'
    },
    {
        'name': 'HotsHom',
        'id': '149232667'
    },
    {
        'name': 'KiWad',
        'id': '85441900'
    },
    {
        'name': 'Juno_y_Anya',
        'id': '72433158'
    },
    {
        'name': 'k0yi',
        'id': '60525695'
    },
    {
        'name': 'TANCHANcicuta',
        'id': '84413290'
    },
    {
        'name': 'TioMario',
        'id': '65083921'
    },
    {
        'name': 'BabychanTH',
        'id': '144902633'
    },
    {
        'name': 'UncleCatTH',
        'id': '146107779'
    },
    {
        'name': 'BBSChainWarden',
        'id': '90424075'
    },
    {
        'name': 'Hypercaptai',
        'id': '125279393'
    },
    {
        'name': 'RawSteelClan',
        'id': '172090048'
    },
    {
        'name': 'CaptWalker_1',
        'id': '45571800'
    },
    {
        'name': 'homiyt',
        'id': '138739379'
    }
]

//Update in game time
var offset = 1980000;
var dayLength = 1000 * 60 * 150; // milliseconds
var clockStart = function () {
    var time = document.getElementById('time');
    var dayMoon = Math.floor(((new Date() - offset) % (1000 * 60 * 150)) / 60000);
    time.innerText = dayMoon < 100 ? (100 - dayMoon) + ' minutes left in the day.' : (150 - dayMoon) + ' minutes left in the night.';
    setInterval(function () {
        var time = document.getElementById('time');
        var dayMoon = Math.floor(((new Date() - offset) % (1000 * 60 * 150)) / 60000);
        time.innerText = dayMoon < 100 ? (100 - dayMoon) + ' minutes left in the day.' : (150 - dayMoon) + ' minutes left in the night.';
    }, 30000);
}

function generateTables() {
    var parentDiv = document.getElementById('content');
    var currentTable = document.getElementById('currentWatching');
    var previousTable = document.getElementById('previousWatching');

    //Set previous list of streamers to current list.
    if (previousTable != null)
        previousTable.remove();
    previousTable.innerHTML = currentTable.innerHTML;
    parentDiv.appendChild(previousTable);

    //Update current streamers.
    getElementsByXPath(currentTable, '/html/body/div/div/table[@id="currentWatching"]/tbody/tr').forEach(function (item) {
        item.remove();
    });

    var streamHandlerPromises = [];
    streamers.forEach(function (streamer) {
        var apiRequest = 'https://api.twitch.tv/kraken/streams/' + streamer.id;
        streamHandlerPromises.push(new Promise(function (resolve, reject) {
            setTimeout(function () {
                getJSON(apiRequest, then, { 'streamer': streamer, 'resolve': resolve, 'reject': reject });
            }, 2000); // 2 seconds per request to stay well withing api rate limits of 1 request per second.
        }));
    });
    function then(err, data, params) {
        //Handle twitch response;
        if (data['stream'] != null && data['stream']['game'] == 'Warframe') {
            var tbody = currentTable.getElementsByTagName('tbody')[0],
                tr = document.createElement('tr'),
                twitchId = document.createElement('td'),
                twitchUrl = document.createElement('td'),
                twitchDescription = document.createElement('td'),
                link = document.createElement('a');
            link.setAttribute('href', 'https://www.twitch.tv/' + params.streamer.name);
            link.text = params.streamer.name;
            twitchId.innerHTML = params.streamer.id;
            tr.appendChild(twitchId);
            twitchUrl.appendChild(link);
            tr.appendChild(twitchUrl);
            twitchDescription.innerText = data['stream']['channel']['status'];
            tr.appendChild(twitchDescription);
            tbody.appendChild(tr);
        }
        params.resolve();
    }
    //Execute then statement when all twitch streamers have been handled.
    Promise.all(streamHandlerPromises).then(function () {
        //Set add colors to streamers that have come online and streamers that went offline.
        var currentRows = getElementsByXPath(currentTable, '/html/body/div/div/table[@id="currentWatching"]/tbody/tr');
        var previousRows = getElementsByXPath(previousTable, '/html/body/div/div/table[@id="previousWatching"]/tbody/tr');;

        for (var i = 0; i < previousRows.length; i++) {
            var prevStreamerID = previousRows[i].children[0]['innerText'];
            var found = false;
            for (var j = 0; j < currentRows.length; j++) {
                var currStreamerID = currentRows[j].children[0]['innerText'];
                if (currStreamerID == prevStreamerID) {
                    found = true;
                    break;
                }
            }
            previousRows[i].className = previousRows[i].className.replace(' addedStream', '');
            if (!found) {
                previousRows[i].className += " removedStream";
            } else {
                previousRows[i].className = previousRows[i].className.replace(' addedStream', '')
            }
        }
        for (var i = 0; i < currentRows.length; i++) {
            var currStreamerID = currentRows[i].children[0]['innerText'];
            var found = false;
            for (var j = 0; j < previousRows.length; j++) {
                var prevStreamerID = previousRows[j].children[0]['innerText'];
                if (currStreamerID == prevStreamerID) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                currentRows[i].className += " addedStream";
            }
        }
    });
}
//Run generateTables() when html finishes loading.
document.addEventListener('DOMContentLoaded', generateTables, false);
document.addEventListener('DOMContentLoaded', clockStart, false);