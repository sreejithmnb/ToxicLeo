var _0x36bddf=_0x3576;function _0x3576(_0x56ea9d,_0x261f7b){var _0x833240=_0x8332();return _0x3576=function(_0x357641,_0x2eccda){_0x357641=_0x357641-0xc1;var _0x516bd7=_0x833240[_0x357641];return _0x516bd7;},_0x3576(_0x56ea9d,_0x261f7b);}(function(_0x53ab39,_0x1c2211){var _0x1b949f=_0x3576,_0x242745=_0x53ab39();while(!![]){try{var _0x3f711e=-parseInt(_0x1b949f(0x128))/0x1+-parseInt(_0x1b949f(0x150))/0x2+-parseInt(_0x1b949f(0xc6))/0x3+-parseInt(_0x1b949f(0x155))/0x4+parseInt(_0x1b949f(0x11a))/0x5+-parseInt(_0x1b949f(0xcb))/0x6*(-parseInt(_0x1b949f(0xdd))/0x7)+parseInt(_0x1b949f(0xe4))/0x8;if(_0x3f711e===_0x1c2211)break;else _0x242745['push'](_0x242745['shift']());}catch(_0x23dff0){_0x242745['push'](_0x242745['shift']());}}}(_0x8332,0x5b592));const fs=require('fs'),path=require('path'),Jsl=require(_0x36bddf(0x11c)),chalk=require('chalk'),pino=require(_0x36bddf(0x137)),config=require('./config'),simpleGit=require(_0x36bddf(0xc2)),{default:makeWASocket,useSingleFileAuthState,MessageOptions,MessageType,Mimetype,Presence}=require(_0x36bddf(0xe9)),{Message,Image,Video}=require('./lib/'),{DataTypes}=require(_0x36bddf(0xf3)),{getMessage}=require(_0x36bddf(0x12d)),git=simpleGit(),axios=require('axios'),got=require(_0x36bddf(0x116)),{state}=useSingleFileAuthState(_0x36bddf(0xef)),WhatsAsenaDB=config[_0x36bddf(0x122)][_0x36bddf(0x106)](_0x36bddf(0xce),{'info':{'type':DataTypes['STRING'],'allowNull':![]},'value':{'type':DataTypes[_0x36bddf(0xe0)],'allowNull':![]}});fs[_0x36bddf(0xc1)](_0x36bddf(0x136))[_0x36bddf(0x100)](_0x2a0d37=>{var _0x2bdf9a=_0x36bddf;path[_0x2bdf9a(0xcf)](_0x2a0d37)[_0x2bdf9a(0xd4)]()==_0x2bdf9a(0x135)&&require(_0x2bdf9a(0x136)+_0x2a0d37);});const plugindb=require('./plugins/sql/plugin');var base=_0x36bddf(0xcd),PROP={'aredits':_0x36bddf(0xc5)},unlink='b08d353c10001f084dd90d1d84f04a41',PROP2={'kl11':_0x36bddf(0xc5)},string=base+'TURBOHYPER';String[_0x36bddf(0x129)]['format']=function(){var _0x3817f5=_0x36bddf,_0x503711=0x0,_0x9b72d9=arguments;return this[_0x3817f5(0x11f)](/{}/g,function(){return typeof _0x9b72d9[_0x503711]!='undefined'?_0x9b72d9[_0x503711++]:'';});};!Date[_0x36bddf(0x109)]&&(Date[_0x36bddf(0x109)]=function(){var _0x1a4e2a=_0x36bddf;return new Date()[_0x1a4e2a(0x141)]();});Array[_0x36bddf(0x129)][_0x36bddf(0x14a)]=function(){var _0x52b7b0=_0x36bddf,_0x1181e7,_0x4456d0=arguments,_0x21b2fd=_0x4456d0[_0x52b7b0(0x13d)],_0x493c1c;while(_0x21b2fd&&this['length']){_0x1181e7=_0x4456d0[--_0x21b2fd];while((_0x493c1c=this['indexOf'](_0x1181e7))!==-0x1){this['splice'](_0x493c1c,0x1);}}return this;};async function whatsAsena(){var _0x3174a9=_0x36bddf;let _0x1aa64e=makeWASocket({'logger':pino({'level':_0x3174a9(0xf4)}),'auth':state,'printQRInTerminal':!![]});console['log'](_0x1aa64e['ev']),_0x1aa64e['ev']['on'](_0x3174a9(0xc4),async _0x213684=>{var _0x52677d=_0x3174a9;const {connection:_0x4487b0,lastDisconnect:_0x22ef1d}=_0x213684;_0x4487b0===_0x52677d(0xee)&&console['log'](''+chalk[_0x52677d(0x139)][_0x52677d(0xfd)](_0x52677d(0x134))+chalk[_0x52677d(0x10a)][_0x52677d(0xfd)]('MD')+'\x0a\x20\x20\x20\x20'+chalk[_0x52677d(0x10a)]['italic'](_0x52677d(0xde)));_0x4487b0==='close'&&_0x22ef1d&&_0x22ef1d['error']&&_0x22ef1d[_0x52677d(0xe8)][_0x52677d(0xf2)]['statusCode']!=0x191&&whatsAsena();if(_0x4487b0===_0x52677d(0xfa)){_0x1aa64e['sendMessage'](_0x1aa64e[_0x52677d(0x138)]['id'],{'text':_0x52677d(0x132)}),console[_0x52677d(0x12c)](chalk[_0x52677d(0x139)][_0x52677d(0xfd)]('✅\x20Login\x20Successful!')),console[_0x52677d(0x12c)](chalk[_0x52677d(0xd6)][_0x52677d(0x133)](_0x52677d(0x108)));var _0x21b5bf=await plugindb[_0x52677d(0x12b)][_0x52677d(0xc3)]();_0x21b5bf[_0x52677d(0x114)](async _0x3cf5df=>{var _0x1b5b47=_0x52677d;if(!fs['existsSync']('./plugins/'+_0x3cf5df['dataValues'][_0x1b5b47(0x148)]+_0x1b5b47(0x135))){console[_0x1b5b47(0x12c)](_0x3cf5df['dataValues'][_0x1b5b47(0x148)]);var _0xb9a722=await got(_0x3cf5df[_0x1b5b47(0x107)][_0x1b5b47(0x142)]);_0xb9a722[_0x1b5b47(0x115)]==0xc8&&(fs[_0x1b5b47(0x113)](_0x1b5b47(0x151)+_0x3cf5df[_0x1b5b47(0x107)][_0x1b5b47(0x148)]+'.js',_0xb9a722[_0x1b5b47(0x10d)]),require('./plugins/'+_0x3cf5df[_0x1b5b47(0x107)][_0x1b5b47(0x148)]+_0x1b5b47(0x135)));}}),console[_0x52677d(0x12c)](chalk[_0x52677d(0xd6)]['italic'](_0x52677d(0x10b))),fs[_0x52677d(0xc1)](_0x52677d(0xd3))[_0x52677d(0x100)](_0x104f2e=>{var _0xf06db1=_0x52677d;path[_0xf06db1(0xcf)](_0x104f2e)[_0xf06db1(0xd4)]()==_0xf06db1(0x135)&&require(_0xf06db1(0x151)+_0x104f2e);}),console[_0x52677d(0x12c)](chalk[_0x52677d(0x139)][_0x52677d(0xfd)]('✅\x20Plugins\x20Installed!')),_0x1aa64e['ev']['on']('messages.upsert',async _0x609aac=>{var _0x448e44=_0x52677d;console[_0x448e44(0x12c)](_0x609aac[_0x448e44(0x14c)][0x0][_0x448e44(0xe2)]);var _0x363015=_0x582424;(function(_0x48818e,_0x1485af){var _0x4ff79c=_0x448e44,_0x3df59a=_0x582424,_0x470a9a=_0x48818e();while(!![]){try{var _0x4c2133=-parseInt(_0x3df59a(0x130))/0x1*(-parseInt(_0x3df59a(0x129))/0x2)+parseInt(_0x3df59a(0x126))/0x3*(parseInt(_0x3df59a(0x13a))/0x4)+-parseInt(_0x3df59a(0x124))/0x5+-parseInt(_0x3df59a(0x12b))/0x6+parseInt(_0x3df59a(0x128))/0x7*(parseInt(_0x3df59a(0x137))/0x8)+parseInt(_0x3df59a(0x12d))/0x9*(-parseInt(_0x3df59a(0x12e))/0xa)+-parseInt(_0x3df59a(0x12c))/0xb;if(_0x4c2133===_0x1485af)break;else _0x470a9a['push'](_0x470a9a[_0x4ff79c(0xfe)]());}catch(_0x206ab4){_0x470a9a[_0x4ff79c(0x11d)](_0x470a9a[_0x4ff79c(0xfe)]());}}}(_0x2df5f5,0xd244f));function _0x582424(_0x6cda28,_0x213238){var _0x1ff1cc=_0x2df5f5();return _0x582424=function(_0x4cf785,_0x22aff9){_0x4cf785=_0x4cf785-0x124;var _0x4c4995=_0x1ff1cc[_0x4cf785];return _0x4c4995;},_0x582424(_0x6cda28,_0x213238);}function _0x2df5f5(){var _0x50be53=_0x448e44,_0x3db38a=['41027bsfEsM',_0x50be53(0x13a),'{no\x20fake}',_0x50be53(0xdf),_0x50be53(0xe1),_0x50be53(0x14e),_0x50be53(0xd8),'key',_0x50be53(0x105),'message',_0x50be53(0xfb),_0x50be53(0x126),_0x50be53(0x11e),_0x50be53(0x118),_0x50be53(0xe3),_0x50be53(0x117),_0x50be53(0x131),'no\x20fake',_0x50be53(0x140),_0x50be53(0x101),_0x50be53(0x120),_0x50be53(0x103),_0x50be53(0x124),_0x50be53(0x123),_0x50be53(0x10c)];return _0x2df5f5=function(){return _0x3db38a;},_0x2df5f5();}if(msg[_0x363015(0x135)+_0x448e44(0x11e)]===0x1b||msg[_0x363015(0x135)+_0x363015(0x134)]===0x1f){const _0x3c0471=config[_0x448e44(0x145)],_0x5bd4d1=_0x3c0471[_0x448e44(0x13c)](0x2);let _0x1b7e7d=msg['messageStu'+_0x363015(0x13c)+'s'][0x0];var _0x12741f=_0x1b7e7d+(_0x448e44(0xda)+_0x363015(0x133)),_0x4aebfb='@'+_0x1b7e7d[_0x363015(0x132)]('@')[0x0],_0x473163=await getMessage(msg[_0x448e44(0xe5)][_0x363015(0x127)]),_0x343811=await takeMessage(msg[_0x448e44(0xe5)][_0x448e44(0x10c)]);_0x473163!==![]&&(_0x473163[_0x363015(0x131)][_0x363015(0x138)](_0x363015(0x12a))&&(_0x343811==![]&&(!_0x1b7e7d[_0x363015(0x13b)]('91')&&await _0x1aa64e[_0x363015(0x136)+'e'](msg[_0x363015(0x12f)]['remoteJid'],_0x5bd4d1+_0x363015(0x139),MessageType[_0x363015(0x125)],{'contextInfo':{'mentionedJid':[_0x1b7e7d]}})),_0x343811!==![]&&!_0x1b7e7d[_0x448e44(0x101)](_0x343811)&&await _0x1aa64e[_0x363015(0x136)+'e'](msg[_0x363015(0x12f)][_0x363015(0x127)],_0x5bd4d1+_0x363015(0x139),MessageType[_0x363015(0x125)],{'contextInfo':{'mentionedJid':[_0x1b7e7d]}})));}if(msg[_0x448e44(0x143)]===0x20||msg[_0x448e44(0x143)]===0x1c){var _0x137949=new Date()[_0x448e44(0xc7)]('HI',{'timeZone':_0x448e44(0x158)})[_0x448e44(0xfb)]('\x20')[0x1];const _0x22cb20={'weekday':'long','year':'numeric','month':_0x448e44(0x130),'day':_0x448e44(0xc9)};var _0x5aad54=new Date()[_0x448e44(0xf5)](_0x22cb20),_0xad340=_0x448e44(0xd2)+_0x137949+_0x448e44(0x144)+_0x5aad54+_0x448e44(0x12f),_0x49dfe8=await getMessage(msg['key']['remoteJid'],_0x448e44(0xf6));if(_0x49dfe8!==![]){if(_0x49dfe8['message'][_0x448e44(0x131)](_0x448e44(0x14d))){let _0x2a4cb8;try{_0x2a4cb8=await _0x1aa64e[_0x448e44(0x119)](msg[_0x448e44(0xfc)][0x0]);}catch{_0x2a4cb8=await _0x1aa64e[_0x448e44(0x119)]();}var _0x28b099=await _0x1aa64e[_0x448e44(0xe7)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]);const _0x346636='@'+msg['messageStubParameters'][0x0]['split']('@')[0x0];await axios[_0x448e44(0xdc)](_0x2a4cb8,{'responseType':_0x448e44(0x157)})[_0x448e44(0xf0)](async _0x5c0d35=>{var _0x540f7c=_0x448e44;await _0x1aa64e['sendMessage'](msg[_0x540f7c(0xe5)]['remoteJid'],_0x5c0d35[_0x540f7c(0xed)],MessageType[_0x540f7c(0x153)],{'caption':_0x49dfe8[_0x540f7c(0xe2)][_0x540f7c(0x11f)]('{pp}','')[_0x540f7c(0x11f)](_0x540f7c(0x146),_0x28b099[_0x540f7c(0x13b)])[_0x540f7c(0x11f)](_0x540f7c(0x154),_0x28b099[_0x540f7c(0xff)])[_0x540f7c(0x11f)]('{time}',_0xad340)[_0x540f7c(0x11f)]('{gpdesc}',_0x28b099[_0x540f7c(0xd7)])['replace'](_0x540f7c(0x14b),_0x1aa64e['user'][_0x540f7c(0x148)])[_0x540f7c(0x11f)](_0x540f7c(0xd5),_0x346636),'contextInfo':{'mentionedJid':[msg[_0x540f7c(0xfc)][0x0]]}});});}else{if(_0x49dfe8[_0x448e44(0xe2)][_0x448e44(0x131)]('{gif}')){var _0x28b099=await _0x1aa64e[_0x448e44(0xe7)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]);const _0x462933='@'+msg[_0x448e44(0xfc)][0x0]['split']('@')[0x0];var _0x1df68d=await axios[_0x448e44(0xdc)](config[_0x448e44(0xdb)],{'responseType':'arraybuffer'});await _0x1aa64e[_0x448e44(0x12a)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)],Buffer[_0x448e44(0x110)](_0x1df68d['data']),MessageType[_0x448e44(0x11b)],{'mimetype':Mimetype[_0x448e44(0xca)],'caption':_0x49dfe8[_0x448e44(0xe2)][_0x448e44(0x11f)](_0x448e44(0x127),'')[_0x448e44(0x11f)](_0x448e44(0xcc),_0xad340)[_0x448e44(0x11f)](_0x448e44(0x146),_0x28b099[_0x448e44(0x13b)])[_0x448e44(0x11f)]('{gpmaker}',_0x28b099[_0x448e44(0xff)])[_0x448e44(0x11f)](_0x448e44(0xf7),_0x28b099[_0x448e44(0xd7)])[_0x448e44(0x11f)](_0x448e44(0x14b),_0x1aa64e[_0x448e44(0x138)]['name'])[_0x448e44(0x11f)](_0x448e44(0xd5),_0x462933),'contextInfo':{'mentionedJid':[msg[_0x448e44(0xfc)][0x0]]}});}else{var _0x28b099=await _0x1aa64e[_0x448e44(0xe7)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]);const _0x679aec='@'+msg[_0x448e44(0xfc)][0x0]['split']('@')[0x0];await _0x1aa64e[_0x448e44(0x12a)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)],_0x49dfe8['message'][_0x448e44(0x11f)](_0x448e44(0x146),_0x28b099['subject'])[_0x448e44(0x11f)]('{gpmaker}',_0x28b099[_0x448e44(0xff)])[_0x448e44(0x11f)]('{gpdesc}',_0x28b099['desc'])[_0x448e44(0x11f)](_0x448e44(0xcc),_0xad340)[_0x448e44(0x11f)](_0x448e44(0x14b),_0x1aa64e[_0x448e44(0x138)][_0x448e44(0x148)])[_0x448e44(0x11f)](_0x448e44(0xd5),_0x679aec),MessageType['text'],{'contextInfo':{'mentionedJid':[msg[_0x448e44(0xfc)][0x0]]}});}}}return;}else{if(msg[_0x448e44(0x143)]===0x1b||msg[_0x448e44(0x143)]===0x1f){var _0x137949=new Date()[_0x448e44(0xc7)]('HI',{'timeZone':_0x448e44(0x158)})['split']('\x20')[0x1];const _0x5cf8b0={'weekday':_0x448e44(0x130),'year':'numeric','month':_0x448e44(0x130),'day':_0x448e44(0xc9)};var _0x5aad54=new Date()[_0x448e44(0xf5)](_0x5cf8b0),_0xad340='```⏱\x20Time\x20:'+_0x137949+_0x448e44(0x144)+_0x5aad54+_0x448e44(0x12f),_0x49dfe8=await getMessage(msg['key'][_0x448e44(0x10c)]);if(_0x49dfe8!==![]){if(_0x49dfe8['message'][_0x448e44(0x131)](_0x448e44(0x14d))){let _0x141a20;try{_0x141a20=await _0x1aa64e[_0x448e44(0x119)](msg[_0x448e44(0xfc)][0x0]);}catch{_0x141a20=await _0x1aa64e[_0x448e44(0x119)]();}var _0x28b099=await _0x1aa64e[_0x448e44(0xe7)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]);const _0x3ff7a9='@'+msg[_0x448e44(0xfc)][0x0]['split']('@')[0x0];await axios[_0x448e44(0xdc)](_0x141a20,{'responseType':_0x448e44(0x157)})[_0x448e44(0xf0)](async _0x124c18=>{var _0x3be154=_0x448e44;await _0x1aa64e[_0x3be154(0x12a)](msg['key'][_0x3be154(0x10c)],_0x124c18[_0x3be154(0xed)],MessageType[_0x3be154(0x153)],{'caption':_0x49dfe8[_0x3be154(0xe2)]['replace']('{pp}','')[_0x3be154(0x11f)](_0x3be154(0xcc),_0xad340)[_0x3be154(0x11f)](_0x3be154(0x146),_0x28b099[_0x3be154(0x13b)])[_0x3be154(0x11f)]('{gpmaker}',_0x28b099['owner'])[_0x3be154(0x11f)](_0x3be154(0xf7),_0x28b099[_0x3be154(0xd7)])[_0x3be154(0x11f)](_0x3be154(0x14b),_0x1aa64e[_0x3be154(0x138)][_0x3be154(0x148)])[_0x3be154(0x11f)](_0x3be154(0x13e),_0x1aa64e['user']['name'])[_0x3be154(0x11f)](_0x3be154(0xd5),_0x3ff7a9),'contextInfo':{'mentionedJid':[msg[_0x3be154(0xfc)][0x0]]}});});}else{if(_0x49dfe8[_0x448e44(0xe2)][_0x448e44(0x131)](_0x448e44(0x127))){var _0x1df68d=await axios[_0x448e44(0xdc)](config[_0x448e44(0xe6)],{'responseType':_0x448e44(0x157)});const _0x3350ba='@'+msg[_0x448e44(0xfc)][0x0][_0x448e44(0xfb)]('@')[0x0];await _0x1aa64e[_0x448e44(0x12a)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)],Buffer[_0x448e44(0x110)](_0x1df68d[_0x448e44(0xed)]),MessageType['video'],{'mimetype':Mimetype[_0x448e44(0xca)],'caption':_0x49dfe8[_0x448e44(0xe2)]['replace']('{gif}','')[_0x448e44(0x11f)](_0x448e44(0xcc),_0xad340)[_0x448e44(0x11f)](_0x448e44(0x146),_0x28b099[_0x448e44(0x13b)])[_0x448e44(0x11f)](_0x448e44(0x154),_0x28b099[_0x448e44(0xff)])['replace'](_0x448e44(0xf7),_0x28b099['desc'])[_0x448e44(0x11f)]('{owner}',_0x1aa64e[_0x448e44(0x138)]['name'])[_0x448e44(0x11f)](_0x448e44(0x13e),_0x1aa64e[_0x448e44(0x138)][_0x448e44(0x148)])[_0x448e44(0x11f)]('{mention}',_0x3350ba),'contextInfo':{'mentionedJid':[msg[_0x448e44(0xfc)][0x0]]}});}else{var _0x28b099=await _0x1aa64e[_0x448e44(0xe7)](msg[_0x448e44(0xe5)]['remoteJid']);const _0x187a39='@'+msg[_0x448e44(0xfc)][0x0][_0x448e44(0xfb)]('@')[0x0];await _0x1aa64e[_0x448e44(0x12a)](msg[_0x448e44(0xe5)]['remoteJid'],_0x49dfe8[_0x448e44(0xe2)][_0x448e44(0x11f)](_0x448e44(0x146),_0x28b099[_0x448e44(0x13b)])[_0x448e44(0x11f)](_0x448e44(0x154),_0x28b099['owner'])[_0x448e44(0x11f)](_0x448e44(0xf7),_0x28b099[_0x448e44(0xd7)])[_0x448e44(0x11f)](_0x448e44(0xcc),_0xad340)[_0x448e44(0x11f)](_0x448e44(0x14b),_0x1aa64e[_0x448e44(0x138)]['name'])[_0x448e44(0x11f)](_0x448e44(0x13e),_0x1aa64e['user'][_0x448e44(0x148)])['replace']('{mention}',_0x187a39),MessageType[_0x448e44(0x124)],{'contextInfo':{'mentionedJid':[msg[_0x448e44(0xfc)][0x0]]}});}}}return;}}if(config[_0x448e44(0x152)]!==![]){var _0x1444c5=config[_0x448e44(0x152)]['split'](',');if(msg[_0x448e44(0xe5)][_0x448e44(0x10c)][_0x448e44(0x131)]('-')?_0x1444c5[_0x448e44(0x131)](msg['key'][_0x448e44(0x10c)][_0x448e44(0xfb)]('@')[0x0]):_0x1444c5[_0x448e44(0x131)](msg[_0x448e44(0x10f)]?msg[_0x448e44(0x10f)][_0x448e44(0xfb)]('@')[0x0]:msg[_0x448e44(0xe5)][_0x448e44(0x10c)]['split']('@')[0x0]))return;}if(config[_0x448e44(0x104)]==_0x448e44(0xd0)){var _0x299e2a=config[_0x448e44(0x104)][_0x448e44(0xfb)](',');if(msg[_0x448e44(0xe5)]['remoteJid'][_0x448e44(0x131)]('-')?_0x299e2a['includes'](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]['split']('@')[0x0]):_0x299e2a[_0x448e44(0x131)](msg[_0x448e44(0x10f)]?msg[_0x448e44(0x10f)]['split']('@')[0x0]:msg['key'][_0x448e44(0x10c)]['split']('@')[0x0]))return;}if(config['SUPPORT2']=='917012074386-1631435717'){var _0x713a3b=config[_0x448e44(0x156)][_0x448e44(0xfb)](',');if(msg[_0x448e44(0xe5)][_0x448e44(0x10c)][_0x448e44(0x131)]('-')?_0x713a3b[_0x448e44(0x131)](msg['key'][_0x448e44(0x10c)][_0x448e44(0xfb)]('@')[0x0]):_0x713a3b[_0x448e44(0x131)](msg[_0x448e44(0x10f)]?msg[_0x448e44(0x10f)]['split']('@')[0x0]:msg[_0x448e44(0xe5)][_0x448e44(0x10c)][_0x448e44(0xfb)]('@')[0x0]))return;}if(config[_0x448e44(0x13f)]==_0x448e44(0xf9)){var _0x394acb=config[_0x448e44(0x13f)][_0x448e44(0xfb)](',');if(msg[_0x448e44(0xe5)][_0x448e44(0x10c)]['includes']('-')?_0x394acb[_0x448e44(0x131)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)][_0x448e44(0xfb)]('@')[0x0]):_0x394acb[_0x448e44(0x131)](msg[_0x448e44(0x10f)]?msg['participant'][_0x448e44(0xfb)]('@')[0x0]:msg['key'][_0x448e44(0x10c)][_0x448e44(0xfb)]('@')[0x0]))return;}if(config[_0x448e44(0xf1)]=='905511384572-1625319286'){var _0x394acb=config['SUPPORT4'][_0x448e44(0xfb)](',');if(msg[_0x448e44(0xe5)][_0x448e44(0x10c)][_0x448e44(0x131)]('-')?_0x394acb[_0x448e44(0x131)](msg[_0x448e44(0xe5)][_0x448e44(0x10c)]['split']('@')[0x0]):_0x394acb[_0x448e44(0x131)](msg[_0x448e44(0x10f)]?msg[_0x448e44(0x10f)][_0x448e44(0xfb)]('@')[0x0]:msg['key'][_0x448e44(0x10c)]['split']('@')[0x0]))return;}events[_0x448e44(0x121)][_0x448e44(0x114)](async _0x2d59b8=>{var _0x2ae35f=_0x448e44;if(msg[_0x2ae35f(0xe2)]&&msg[_0x2ae35f(0xe2)][_0x2ae35f(0x14f)]&&msg[_0x2ae35f(0xe2)][_0x2ae35f(0x14f)]['caption'])var _0x2a52d2=msg[_0x2ae35f(0xe2)]['imageMessage']['caption'];else{if(msg[_0x2ae35f(0xe2)]&&msg['message'][_0x2ae35f(0xeb)]&&msg[_0x2ae35f(0xe2)]['videoMessage'][_0x2ae35f(0x147)])var _0x2a52d2=msg[_0x2ae35f(0xe2)]['videoMessage'][_0x2ae35f(0x147)];else{if(msg[_0x2ae35f(0xe2)])var _0x2a52d2=msg[_0x2ae35f(0xe2)][_0x2ae35f(0x12e)]===null?msg['message']['conversation']:msg[_0x2ae35f(0xe2)][_0x2ae35f(0x12e)][_0x2ae35f(0x124)];else var _0x2a52d2=undefined;}}if(_0x2d59b8['on']!==undefined&&(_0x2d59b8['on']===_0x2ae35f(0x153)||_0x2d59b8['on']===_0x2ae35f(0x112))&&msg['message']&&msg['message'][_0x2ae35f(0x14f)]!==null&&(_0x2d59b8[_0x2ae35f(0x111)]===undefined||_0x2d59b8['pattern']!==undefined&&_0x2d59b8[_0x2ae35f(0x111)][_0x2ae35f(0xd9)](_0x2a52d2))||_0x2d59b8[_0x2ae35f(0x111)]!==undefined&&_0x2d59b8[_0x2ae35f(0x111)][_0x2ae35f(0xd9)](_0x2a52d2)||_0x2d59b8['on']!==undefined&&_0x2d59b8['on']===_0x2ae35f(0x124)&&_0x2a52d2||_0x2d59b8['on']!==undefined&&_0x2d59b8['on']==='video'&&msg[_0x2ae35f(0xe2)]&&msg['message'][_0x2ae35f(0xeb)]!==null&&(_0x2d59b8['pattern']===undefined||_0x2d59b8[_0x2ae35f(0x111)]!==undefined&&_0x2d59b8[_0x2ae35f(0x111)][_0x2ae35f(0xd9)](_0x2a52d2))){let _0x3cf255=![];var _0xf26ec3=_0x1aa64e[_0x2ae35f(0xf8)][_0x2ae35f(0xdc)](msg[_0x2ae35f(0xe5)][_0x2ae35f(0x10c)]);if(config[_0x2ae35f(0xec)]!==![]&&msg[_0x2ae35f(0xe5)][_0x2ae35f(0x125)]===![]&&_0x2d59b8[_0x2ae35f(0x125)]===!![]&&(msg[_0x2ae35f(0x10f)]&&config[_0x2ae35f(0xec)]['includes'](',')?config[_0x2ae35f(0xec)][_0x2ae35f(0xfb)](',')['includes'](msg[_0x2ae35f(0x10f)]['split']('@')[0x0]):msg[_0x2ae35f(0x10f)][_0x2ae35f(0xfb)]('@')[0x0]==config['SUDO']||config[_0x2ae35f(0xec)]['includes'](',')?config[_0x2ae35f(0xec)][_0x2ae35f(0xfb)](',')[_0x2ae35f(0x131)](msg[_0x2ae35f(0xe5)][_0x2ae35f(0x10c)][_0x2ae35f(0xfb)]('@')[0x0]):msg[_0x2ae35f(0xe5)][_0x2ae35f(0x10c)][_0x2ae35f(0xfb)]('@')[0x0]==config[_0x2ae35f(0xec)])||_0x2d59b8['fromMe']===msg[_0x2ae35f(0xe5)][_0x2ae35f(0x125)]||_0x2d59b8[_0x2ae35f(0x125)]===![]&&!msg[_0x2ae35f(0xe5)]['fromMe']){if(_0x2d59b8[_0x2ae35f(0x102)]&&_0xf26ec3[_0x2ae35f(0x149)]===undefined)return;if(!_0x2d59b8[_0x2ae35f(0xea)]===_0xf26ec3[_0x2ae35f(0xd1)]['includes']('-'))_0x3cf255=!![];else{if(_0x2d59b8[_0x2ae35f(0x10e)]===_0xf26ec3['jid'][_0x2ae35f(0x131)]('-'))_0x3cf255=!![];}}if(config['YAK']!==![]&&msg[_0x2ae35f(0xe5)][_0x2ae35f(0x125)]===![]&&_0x2d59b8['fromMe']===!![]&&(msg[_0x2ae35f(0x10f)]&&config[_0x2ae35f(0xc8)][_0x2ae35f(0x131)](',')?config['YAK'][_0x2ae35f(0xfb)](',')[_0x2ae35f(0x131)](msg['participant'][_0x2ae35f(0xfb)]('@')[0x0]):msg['participant'][_0x2ae35f(0xfb)]('@')[0x0]==config[_0x2ae35f(0xc8)]||config[_0x2ae35f(0xc8)][_0x2ae35f(0x131)](',')?config['YAK'][_0x2ae35f(0xfb)](',')['includes'](msg['key'][_0x2ae35f(0x10c)][_0x2ae35f(0xfb)]('@')[0x0]):msg[_0x2ae35f(0xe5)]['remoteJid']['split']('@')[0x0]==config['YAK'])||_0x2d59b8[_0x2ae35f(0x125)]===msg[_0x2ae35f(0xe5)]['fromMe']||_0x2d59b8[_0x2ae35f(0x125)]===![]&&!msg[_0x2ae35f(0xe5)]['fromMe']){if(_0x2d59b8[_0x2ae35f(0x102)]&&_0xf26ec3[_0x2ae35f(0x149)]===undefined)return;if(!_0x2d59b8[_0x2ae35f(0xea)]===_0xf26ec3[_0x2ae35f(0xd1)]['includes']('-'))_0x3cf255=!![];else{if(_0x2d59b8['onlyGroup']===_0xf26ec3[_0x2ae35f(0xd1)][_0x2ae35f(0x131)]('-'))_0x3cf255=!![];}}}});});}});}function _0x8332(){var _0x144198=['10oIhKjy','test','@s.whatsap','BYE_GIF','get','3303251GuLSpz','ℹ️\x20Connecting\x20to\x20WhatsApp...\x20Please\x20Wait.','2961894GzsgLP','TEXT','8925785pCksqr','message','sendMessag','9326152lKSbfq','key','WEL_GIF','groupMetadata','error','@adiwajshing/baileys','onlyPm','videoMessage','SUDO','data','connecting','./qr.json','then','SUPPORT4','output','sequelize','silent','toLocaleDateString','goodbye','{gpdesc}','chats','905511384572-1621015274','open','split','messageStubParameters','bold','shift','owner','forEach','startsWith','onlyPinned','2475360gzcRbx','SUPPORT','14075JnHKzp','define','dataValues','⬇️\x20Installing\x20external\x20plugins...','now','blue','⬇️Installing\x20plugins...','remoteJid','body','onlyGroup','participant','from','pattern','photo','writeFileSync','map','statusCode','got','1960HVhRse','messageStu','getProfilePicture','3015750spFtXW','video','./Jsl','push','bType','replace','bParameter','commands','DATABASE','229926iZFVVR','text','fromMe','p.net','{gif}','65934rcFCAh','prototype','sendMessage','PluginDB','log','./plugins/sql/greetings','extendedTextMessage','```','long','includes','Connected\x20✔✔','italic','Abu\x20Beta','.js','./plugins/sql/','pino','user','green','134LsiVoz','subject','charAt','length','{no\x20fake}','SUPPORT3','44OvUTBe','getTime','url','messageStubType','```\x0a```📅\x20Date\x20:','HANDLERS','{gphead}','caption','name','pin','remove','{owner}','messages','{pp}','5045517Ukgjyl','imageMessage','1391942MJkRhS','./plugins/','BLOCKCHAT','image','{gpmaker}','1662000VsxSMa','SUPPORT2','arraybuffer','Asia/Kolkata','readdirSync','simple-git','findAll','connection.update','917025994178,0','2067735RKIPtI','toLocaleString','YAK','numeric','gif','6hUYhfW','{time}','https://gist.github.com/','WhatsAsena','extname','905524317852-1612300121','jid','```⏱\x20Time\x20:','./plugins','toLowerCase','{mention}','blueBright','desc'];_0x8332=function(){return _0x144198;};return _0x8332();}whatsAsena();
