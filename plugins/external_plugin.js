var Jsl_0x34723d=Jsl_0x344f;function Jsl_0x344f(_0xc1b0ea,_0x5ebb7a){var _0x1ecfd4=Jsl_0x1ecf();return Jsl_0x344f=function(_0x344fba,_0x44a23a){_0x344fba=_0x344fba-0xd3;var _0x547de6=_0x1ecfd4[_0x344fba];return _0x547de6;},Jsl_0x344f(_0xc1b0ea,_0x5ebb7a);}function Jsl_0x1ecf(){var _0x445de4=['```','plugin\x20list','trim','/raw','./plugins/','join','_Invalid\x20Url_','plugin','sendMessage','host','../lib/db/plugins','map','21822eqDqCN','36696yeCKed','Invalid\x20Plugin\x0a\x20```','cache','_Plugin\x20not\x20found_','writeFileSync','8492SEyogj','length','_New\x20plugin\x20installed\x20:\x20','```:\x20','528dyhKLG','name','body','gist.githubusercontent.com','.js','2583740GFAPEN','8998960RXyrZJ','unlinkSync','9038545fASCIk','url','replace','user','_Send\x20a\x20plugin\x20url_','Plugin\x20','toString','/Abu-MD/plugins/','Remove\x20external\x20plugins','2128wRvWqY','10880EpUXhA','findAll','gist.github.com','1MMhnFd','9442071uinmVv','resolve','dataValues'];Jsl_0x1ecf=function(){return _0x445de4;};return Jsl_0x1ecf();}(function(_0x3afba9,_0x335b4e){var _0x54fe3a=Jsl_0x344f,_0x357ec4=_0x3afba9();while(!![]){try{var _0x437115=-parseInt(_0x54fe3a(0xfc))/0x1*(-parseInt(_0x54fe3a(0xec))/0x2)+parseInt(_0x54fe3a(0xde))/0x3*(parseInt(_0x54fe3a(0xe7))/0x4)+-parseInt(_0x54fe3a(0xef))/0x5+parseInt(_0x54fe3a(0xdd))/0x6*(-parseInt(_0x54fe3a(0xf8))/0x7)+parseInt(_0x54fe3a(0xed))/0x8+-parseInt(_0x54fe3a(0xfd))/0x9+-parseInt(_0x54fe3a(0xf9))/0xa*(-parseInt(_0x54fe3a(0xe3))/0xb);if(_0x437115===_0x335b4e)break;else _0x357ec4['push'](_0x357ec4['shift']());}catch(_0x4ce616){_0x357ec4['push'](_0x357ec4['shift']());}}}(Jsl_0x1ecf,0xdde18));const {bot,getUrl}=require('../lib'),got=require('got'),fs=require('fs'),{PluginDB,installPlugin}=require(Jsl_0x34723d(0xdb));bot({'pattern':'install\x20?(.*)','fromMe':!![],'desc':'Installs\x20External\x20plugins','type':Jsl_0x34723d(0xf2)},async(_0x19923a,_0x25a74c)=>{var _0x5772a7=Jsl_0x34723d;if(!_0x25a74c)return await _0x19923a[_0x5772a7(0xd9)](_0x5772a7(0xf3));for(let _0x579d81 of getUrl(_0x25a74c)){try{var _0x57e2c9=new URL(_0x579d81);}catch{return await _0x19923a[_0x5772a7(0xd9)](_0x5772a7(0xd7));}_0x57e2c9[_0x5772a7(0xda)]===_0x5772a7(0xfb)?(_0x57e2c9[_0x5772a7(0xda)]=_0x5772a7(0xea),_0x57e2c9=_0x57e2c9[_0x5772a7(0xf5)]()+_0x5772a7(0xd4)):_0x57e2c9=_0x57e2c9[_0x5772a7(0xf5)]();var _0x165eb3,_0x10dc56=await got(_0x57e2c9);if(_0x10dc56['statusCode']==0xc8){var _0x172077=_0x10dc56[_0x5772a7(0xe9)]['match'](/(?<=pattern:)(.*)(?=\?(.*))/g)[_0x5772a7(0xdc)](_0x33555e=>_0x33555e[_0x5772a7(0xd3)]()[_0x5772a7(0xf1)](/"|'|`/,''));_0x165eb3=_0x172077[0x0]||_0x165eb3[0x1]||'__'+Math['random']()[_0x5772a7(0xf5)](0x24)['substring'](0x8),fs[_0x5772a7(0xe2)](_0x5772a7(0xd5)+_0x165eb3+_0x5772a7(0xeb),_0x10dc56[_0x5772a7(0xe9)]);try{require('./'+_0x165eb3);}catch(_0x98da08){return fs[_0x5772a7(0xee)](_0x5772a7(0xf6)+_0x165eb3+_0x5772a7(0xeb)),await _0x19923a['sendMessage'](_0x5772a7(0xdf)+_0x98da08+_0x5772a7(0x100));}await installPlugin(_0x57e2c9,_0x165eb3),await _0x19923a[_0x5772a7(0xd9)](_0x5772a7(0xe5)+_0x172077[_0x5772a7(0xd6)](',')+'_');}}}),bot({'pattern':Jsl_0x34723d(0xd8),'fromMe':!![],'desc':Jsl_0x34723d(0x101),'type':Jsl_0x34723d(0xf2)},async(_0x57bd44,_0x4e2bfa)=>{var _0x365d28=Jsl_0x34723d,_0xea5d8f='',_0x4bc84c=await PluginDB[_0x365d28(0xfa)]();return _0x4bc84c[_0x365d28(0xe4)]<0x1?await _0x57bd44[_0x365d28(0xd9)]('_No\x20external\x20plugins\x20installed_'):(_0x4bc84c['map'](_0x4a2a39=>{var _0x45e501=_0x365d28;_0xea5d8f+=_0x45e501(0x100)+_0x4a2a39['dataValues'][_0x45e501(0xe8)]+_0x45e501(0xe6)+_0x4a2a39[_0x45e501(0xff)][_0x45e501(0xf0)]+'\x0a';}),await _0x57bd44[_0x365d28(0xd9)](_0xea5d8f));}),bot({'pattern':'remove(?:\x20|$)(.*)','fromMe':!![],'desc':Jsl_0x34723d(0xf7),'type':'user'},async(_0x44f7b6,_0x1b55e6)=>{var _0x53cf94=Jsl_0x34723d;if(!_0x1b55e6)return await _0x44f7b6[_0x53cf94(0xd9)]('_Need\x20a\x20plugin\x20name_');var _0x52700e=await PluginDB[_0x53cf94(0xfa)]({'where':{'name':_0x1b55e6}});if(_0x52700e[_0x53cf94(0xe4)]<0x1)return await _0x44f7b6['sendMessage'](_0x53cf94(0xe1));else await _0x52700e[0x0]['destroy'](),delete require[_0x53cf94(0xe0)][require[_0x53cf94(0xfe)]('./'+_0x1b55e6+_0x53cf94(0xeb))],fs[_0x53cf94(0xee)]('./plugins/'+_0x1b55e6+_0x53cf94(0xeb)),await _0x44f7b6[_0x53cf94(0xd9)](_0x53cf94(0xf4)+_0x1b55e6+'\x20deleted');});