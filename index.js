const Jsl_0x54af6f=Jsl_0x2882;(function(_0x25843b,_0xd07c7){const _0x41e96c=Jsl_0x2882,_0xfdf55d=_0x25843b();while(!![]){try{const _0x29a8fc=parseInt(_0x41e96c(0x15e))/0x1+parseInt(_0x41e96c(0x184))/0x2*(-parseInt(_0x41e96c(0x15d))/0x3)+-parseInt(_0x41e96c(0x15f))/0x4+parseInt(_0x41e96c(0x161))/0x5+parseInt(_0x41e96c(0x172))/0x6+-parseInt(_0x41e96c(0x163))/0x7*(-parseInt(_0x41e96c(0x170))/0x8)+-parseInt(_0x41e96c(0x148))/0x9;if(_0x29a8fc===_0xd07c7)break;else _0xfdf55d['push'](_0xfdf55d['shift']());}catch(_0xffdd1f){_0xfdf55d['push'](_0xfdf55d['shift']());}}}(Jsl_0x420a,0x28887));const {default:makeWASocket,useSingleFileAuthState,Browsers}=require(Jsl_0x54af6f(0x177)),fs=require('fs'),{serialize}=require(Jsl_0x54af6f(0x153)),{Message,Image,Video}=require(Jsl_0x54af6f(0x162)),pino=require('pino'),path=require(Jsl_0x54af6f(0x179)),{MakeSession}=require(Jsl_0x54af6f(0x17f)),{events,command}=require(Jsl_0x54af6f(0x16b)),got=require('got'),config=require('./config'),ssid=config[Jsl_0x54af6f(0x183)],{PluginDB}=require(Jsl_0x54af6f(0x16c)),Greetings=require('./lib/Greetings'),{decodeJid}=require(Jsl_0x54af6f(0x176));function Jsl_0x2882(_0x23bf0c,_0x2492bc){const _0x420a84=Jsl_0x420a();return Jsl_0x2882=function(_0x288286,_0x748737){_0x288286=_0x288286-0x147;let _0x464c82=_0x420a84[_0x288286];return _0x464c82;},Jsl_0x2882(_0x23bf0c,_0x2492bc);}function Jsl_0x420a(){const _0xe5deb=['fromMe','parse','error','pattern','statusCode','isSelf','user','69054DCGKhv','316537KmnKwQ','80208nKjspL','Abu\x20MD\x20V\x202.0.1','1148890tEotKI','./lib/Base','3899TbmVWe','.js','Session\x20Restored\x20✅!','slice','notify','imageMessage','split','./plugins/','./lib/utils','./lib/sql/plugins','output','connection.update','body','1520ociUGs','log','1534032zUQDAl','messages.upsert','payload','sync','./lib','@adiwajshing/baileys','forEach','path','./session.json','photo','text','✅\x20Plugins\x20Installed!','creds.update','./lib/session','group-participants.update','sendMessage','message','SESSION_ID','24EsqZsF','trim','map','test','name','DATABASE','image','./plugins','open','4009734hsiZHm','function','dataValues','extname','findAll','readdirSync','stringify','\x0a\x0a\x0a\x0a\x0a','commands','type','SUDO','./lib/serialize','Desktop','sender'];Jsl_0x420a=function(){return _0xe5deb;};return Jsl_0x420a();}!fs['existsSync'](Jsl_0x54af6f(0x17a))&&MakeSession(ssid);async function Bot(){const _0x36dbea=Jsl_0x54af6f;await config[_0x36dbea(0x189)][_0x36dbea(0x175)]();const {state:_0x3c2214,saveState:_0x1bda01}=useSingleFileAuthState(ssname,pino({'level':'silent'}));let _0x30ada8=makeWASocket({'logger':pino({'level':'silent'}),'auth':_0x3c2214,'browser':Browsers['macOS'](_0x36dbea(0x154)),'downloadHistory':![],'syncFullHistory':![]});_0x30ada8['ev']['on'](_0x36dbea(0x16e),async _0x433d3d=>{const _0x3bd99b=_0x36dbea,{connection:_0x17b244,lastDisconnect:_0x503d38}=_0x433d3d;_0x17b244==='connecting'&&console[_0x3bd99b(0x171)](_0x3bd99b(0x160));_0x17b244==='close'&&_0x503d38&&_0x503d38['error']&&_0x503d38['error'][_0x3bd99b(0x16d)]['statusCode']!=0x191&&(console['log'](_0x503d38[_0x3bd99b(0x158)][_0x3bd99b(0x16d)][_0x3bd99b(0x174)]),Bot());if(_0x17b244===_0x3bd99b(0x147)){console[_0x3bd99b(0x171)](_0x3bd99b(0x165)),console[_0x3bd99b(0x171)]('Plugins\x20Installing..✅.');let _0x4f8a53=await PluginDB[_0x3bd99b(0x14c)]();_0x4f8a53[_0x3bd99b(0x186)](async _0x58f383=>{const _0x1e5e65=_0x3bd99b;if(!fs['existsSync']('./plugins/'+_0x58f383[_0x1e5e65(0x14a)]['name']+_0x1e5e65(0x164))){console[_0x1e5e65(0x171)](_0x58f383[_0x1e5e65(0x14a)][_0x1e5e65(0x188)]);var _0x490e1b=await got(_0x58f383[_0x1e5e65(0x14a)]['url']);_0x490e1b[_0x1e5e65(0x15a)]==0xc8&&(fs['writeFileSync']('./plugins/'+_0x58f383[_0x1e5e65(0x14a)][_0x1e5e65(0x188)]+_0x1e5e65(0x164),_0x490e1b[_0x1e5e65(0x16f)]),require(_0x1e5e65(0x16a)+_0x58f383[_0x1e5e65(0x14a)][_0x1e5e65(0x188)]+'.js'));}}),fs[_0x3bd99b(0x14d)](_0x3bd99b(0x18b))[_0x3bd99b(0x178)](_0x4e7521=>{const _0xe984dc=_0x3bd99b;path[_0xe984dc(0x14b)](_0x4e7521)['toLowerCase']()==_0xe984dc(0x164)&&require(_0xe984dc(0x16a)+_0x4e7521);}),console[_0x3bd99b(0x171)](_0x3bd99b(0x17d)),_0x30ada8[_0x3bd99b(0x181)](_0x30ada8[_0x3bd99b(0x15c)]['id'],{'text':'💗\x20ᴀʙᴜ\x20ᴍᴅ\x20ᴡᴏʀᴋɪɴɢ..\x0a\x20ʜᴀɴᴅʟᴇʀ\x20:\x20.\x0a\x20ᴄᴏᴍᴍᴀɴᴅ\x20:\x20.ʜᴇʟᴘ\x20.ᴍᴇɴᴜ\x20.ʟɪsᴛ\x0a\x20ᴠᴇʀsɪᴏɴ\x20:\x202.1.0'});try{_0x30ada8['ev']['on'](_0x3bd99b(0x17e),_0x1bda01),_0x30ada8['ev']['on'](_0x3bd99b(0x180),async _0x5b0449=>{Greetings(_0x5b0449,_0x30ada8);}),_0x30ada8['ev']['on'](_0x3bd99b(0x173),async _0x5a281e=>{const _0x470262=_0x3bd99b;if(_0x5a281e[_0x470262(0x151)]!==_0x470262(0x167))return;let _0x13baee=_0x5a281e['messages'][0x0],_0x3c7e37=await serialize(JSON[_0x470262(0x157)](JSON[_0x470262(0x14e)](_0x13baee)),_0x30ada8);if(!_0x3c7e37['message'])return;let _0xd5b846=_0x3c7e37[_0x470262(0x16f)];if(_0xd5b846)console[_0x470262(0x171)](_0xd5b846);events[_0x470262(0x150)][_0x470262(0x186)](async _0xbc1520=>{const _0x196418=_0x470262;if(_0xbc1520[_0x196418(0x156)]&&!config[_0x196418(0x152)][_0x196418(0x169)](',')['includes'](_0x3c7e37[_0x196418(0x155)][_0x196418(0x169)]('@')[0x0]||!_0x3c7e37[_0x196418(0x15b)]))return;if(_0xbc1520['pattern']&&_0xbc1520[_0x196418(0x159)][_0x196418(0x187)](_0xd5b846)){var _0x4158e7=_0xd5b846[_0x196418(0x185)]()[_0x196418(0x169)](/ +/)[_0x196418(0x166)](0x1)['join']('\x20');whats=new Message(_0x30ada8,_0x3c7e37,_0x13baee),_0xbc1520[_0x196418(0x149)](whats,_0x4158e7,_0x3c7e37,_0x30ada8);}else{if(_0xbc1520['on']===_0x196418(0x17c))whats=new Message(_0x30ada8,_0x3c7e37,_0x13baee),_0xbc1520[_0x196418(0x149)](whats,_0xd5b846,_0x3c7e37,_0x30ada8);else(_0xbc1520['on']===_0x196418(0x18a)||_0xbc1520['on']===_0x196418(0x17b))&&_0x3c7e37[_0x196418(0x151)]===_0x196418(0x168)&&(whats=new Image(_0x30ada8,_0x3c7e37,_0x13baee),_0xbc1520[_0x196418(0x149)](whats,_0xd5b846,_0x3c7e37,_0x30ada8));}});});}catch(_0x553f28){console[_0x3bd99b(0x171)](_0x553f28+_0x3bd99b(0x14f)+JSON[_0x3bd99b(0x14e)](msg));}}}),process['on']('uncaughtException',_0x2f1a9a=>{const _0x5d7849=_0x36dbea;let _0x36fafb=_0x2f1a9a[_0x5d7849(0x182)];_0x30ada8[_0x5d7849(0x181)](_0x30ada8[_0x5d7849(0x15c)]['id'],{'text':_0x36fafb}),console[_0x5d7849(0x171)](_0x2f1a9a);});}Bot();
