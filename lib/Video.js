const _0x2636fa=_0x4c2c;(function(_0x5ab14f,_0x68965e){const _0x511d2b=_0x4c2c,_0x461e36=_0x5ab14f();while(!![]){try{const _0x46161f=-parseInt(_0x511d2b(0x1f0))/0x1+-parseInt(_0x511d2b(0x1e4))/0x2+parseInt(_0x511d2b(0x1e5))/0x3*(parseInt(_0x511d2b(0x1d9))/0x4)+parseInt(_0x511d2b(0x1da))/0x5+-parseInt(_0x511d2b(0x1dd))/0x6+-parseInt(_0x511d2b(0x1d6))/0x7*(parseInt(_0x511d2b(0x1e6))/0x8)+parseInt(_0x511d2b(0x1ee))/0x9;if(_0x46161f===_0x68965e)break;else _0x461e36['push'](_0x461e36['shift']());}catch(_0x50e730){_0x461e36['push'](_0x461e36['shift']());}}}(_0x48d4,0x427fd));const Jsl=require('../utils'),got=require('got'),tts=require(_0x2636fa(0x1e0));async function TTS(_0x2f0273,_0x4096cb='en'){const _0x2c53de=_0x2636fa;let _0x37ae37=new String();if(_0x2f0273['length']<=0xc8)_0x37ae37=tts[_0x2c53de(0x1ed)](_0x2f0273,{'lang':_0x4096cb,'slow':![]});else _0x37ae37=new Error(_0x2c53de(0x1d8));return _0x37ae37;}function _0x4c2c(_0x2db454,_0x3dc1a8){const _0x48d46d=_0x48d4();return _0x4c2c=function(_0x4c2cfd,_0x439349){_0x4c2cfd=_0x4c2cfd-0x1d4;let _0x5c8eef=_0x48d46d[_0x4c2cfd];return _0x5c8eef;},_0x4c2c(_0x2db454,_0x3dc1a8);}async function chatBot(_0x248997=_0x2636fa(0x1e7),_0x579727='en'){const _0x3dea43=_0x2636fa,_0x431c16=encodeURI(_0x248997),_0x24996d=await got('https://api.simsimi.net/v2/?text='+_0x431c16+_0x3dea43(0x1db)+_0x579727),_0x137de0=JSON[_0x3dea43(0x1e9)](_0x24996d[_0x3dea43(0x1d5)]);return{'msg':_0x137de0[_0x3dea43(0x1de)],'lang':_0x137de0[_0x3dea43(0x1dc)],'json':_0x137de0};};async function chatting(_0x3dc64a,_0x2f72e2){const _0x118573=_0x2636fa;try{if(_0x3dc64a[_0x118573(0x1f2)])return;let _0x5b271a=await(await chatBot(_0x3dc64a['client'][_0x118573(0x1d4)]))['msg'];if(_0x3dc64a[_0x118573(0x1e3)]&&typeof Jsl[_0x118573(0x1e1)][_0x118573(0x1ec)][_0x118573(0x1ef)][_0x118573(0x1f1)]==_0x118573(0x1d7)&&Jsl['config'][_0x118573(0x1ec)][_0x118573(0x1ef)][_0x118573(0x1f1)]==!![])await _0x2f72e2[_0x118573(0x1e2)](_0x3dc64a[_0x118573(0x1eb)],{'text':_0x5b271a},{'quoted':_0x3dc64a});else _0x3dc64a[_0x118573(0x1e3)]&&typeof Jsl[_0x118573(0x1e1)]['auto'][_0x118573(0x1ef)]['group']==_0x118573(0x1d7)&&Jsl[_0x118573(0x1e1)][_0x118573(0x1ec)][_0x118573(0x1ef)][_0x118573(0x1f3)]==!![]&&await _0x2f72e2['sendMessage'](_0x3dc64a[_0x118573(0x1eb)],{'text':_0x5b271a},{'quoted':_0x3dc64a});}catch(_0xd27049){return await _0x2f72e2[_0x118573(0x1df)](_0x3dc64a['from'],_0x118573(0x1f4)+_0xd27049,_0x3dc64a[_0x118573(0x1e8)],_0x3dc64a);}}function _0x48d4(){const _0x1101da=['12djQELw','2117725UrwUsS','&lc=','location','2821416BfinKf','success','sendErrorMessage','google-tts-api','config','sendMessage','isGroup','181682UnXBpg','231273vSitOt','502760fGXZps','hey','key','parse','exports','from','auto','getAudioUrl','4049928IvmUtt','chat','82817dIkeZU','inbox','fromMe','group','From\x20auto\x20chat\x20-\x20','displayText','body','21UYZEpb','boolean','Text\x20is\x20to\x20long.\x20can\x20not\x20convert\x20your\x20text'];_0x48d4=function(){return _0x1101da;};return _0x48d4();}module[_0x2636fa(0x1ea)]={'TTS':TTS,'chatBot':chatBot,'chatting':chatting};