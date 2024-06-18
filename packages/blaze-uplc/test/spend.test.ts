import { UPLCDecoder } from "../src/index";

const sundae =
  "0100003323232323232322322323232253330083232323232323232323232323232323232323232323232323232325333023301F3024375404026464646464A666050604860526EA80044C8C94CCC0A8C048C0ACDD500089919192999816981418171BAA00113232323253330313371201A0022A6660626666022603860666EA80580740780804C8C94CCC0CCC0BCC0D0DD5000899299981A19BAF302C303637540026072607460746074606C6EA806454CCC0D0CDD7980F981B1BAA0014C107D87B9FD87980FF0015332330353371200864A66606C6062606E6EA8004520001375A607660706EA8004C94CCC0D8C0C4C0DCDD50008A6103D87A8000132330010013756607860726EA8008894CCC0EC004530103D87A80001323232533303B3007375C60780062603C6607E6EA00052F5C026600A00A0046EB4C0F0008C0FC008C0F4004C8CC004004DD59810181C1BAA00322533303A00114C103D87A80001323232533303A3006375C60760062603A6607C6E980052F5C026600A00A0046EACC0EC008C0F8008C0F000454CCC0D4C0C401854CCC0D4CDC38088028A99981A9919BAF374C6600204E910100374C6466002002660046EACC084C0E4DD5007A450022533303B00114BD6F7B6300991981E99BB037526EB8C0E8004DD319198008009BAB303C00222533303E00114BD6F7B6300991982019BB037526EB8C0F4004DD419B8148000DD6981F000998018019821001182000099801801981F801181E80091191980080080191299981E0008A5EB7BDB1804C8C8C8C94CCC0F4CDC7803801080189982099BB037520046E98004CC01801800CDD5981F0019BAE303C0023040002303E00114A22C2C26464646464A66607466EBCC0C8C0F0DD500119BA548008CC0F8DD4806A5EB8054CCC0E8CDD780219191919191918119982218228031982218228029982218228021982218228019982218228011982218228009982218229823000998221BA83370202003897AE030450013044001304300130420013041001303C37540202A66607466EBCDD30009BA63232323330010013756604E607E6EA8054C94CCC0F8C0E800452F5BDED8C0264646600200297ADEF6C6022533304400113304533760981014000374C00697ADEF6C601323232325333045300A3300B488100002133049337609801014000374C00E00A2A66608A602200426609266EC13001014000374C00E00626609266EC0DD48011BA6001330060060033756608C0066EB8C110008C120008C118004C8CC0040052F5BDED8C044A66608600226608866EC13001014000375000697ADEF6C60132323232533304430093300A488100002133048337609801014000375000E00A2A666088602000426609066EC13001014000375000E00626609066EC0DD48011BA800133006006003375A608A0066EB8C10C008C11C008C114004CDC0A4000032444A6660840042002264666008008608C0066644646600200200A44A66608E00226609066EC0DD48021BA60034BD6F7B630099191919299982418069980700400109982619BB037520106E9801C01454CCC120CDC78040010992999824982298251BAA00113304D337606EA4024C138C12CDD50008020802192999824A9998260008A5114A0298103D87A80001302C3304D374C00297AE032333001001008002222533304E0021001132333004004305200333223233001001005225333053001133054337606EA4010DD4001A5EB7BDB1804C8C8C8C94CCC150C064CC0680200084CC160CDD81BA9008375000E00A2A6660A866E3C0200084C94CCC154C144C158DD500089982C99BB0375201260B460AE6EA80040104010C94CCC154C144004530103D87A80001303833059375000297AE03370000E0022660B066EC0DD48011BA800133006006003375A60AA0066EB8C14C008C15C008C154004DD718268009BAD304E001305000213304C337606EA4008DD3000998030030019BAB3049003375C608E004609600460920026EB8C104004DD5982100098220011BAF4C103D879800022533303C33720004002298103D87980001533303C3371E0040022980103D87A800014C103D87B80001533303A3301B3758607E60806080608060806080608060786EA807C8CDD79812981E9BAA003301E3303F301E3303F0014BD7025EB805288B0B0B0B1BAB303E303F002303D0013039375460700046070002602E0506E3D2201001616163038303537540022C6602004A01866E04034C8CDC199B8200E375A606664A66606C60726072002266EC0C0E0004C0E0C0E400458DD61800981A1BAA017375A606864A66606C60726072002266EC0C0E0004C0E0C0E400458DD61800981A1BAA0172303730383038303830380011616375A606A606C606C606C606C606C0046EB4C0D0004C0D0C0D0C0C0DD50021BAE3032302F37540022C6048605C6EA8C090C0B8DD50021807800981798161BAA001163014302B3754002602460546EA8C0B4C0A8DD50008B1980280E9BAD302C302D002375A605600260560046EB4C0A4004C094DD50100992999812181018129BAA001132325333026300E30273754002264646464646464646464646464A666066600200A2A66606660020062A66606666EBC028C8C8C8C064CC0E8C0EC00CCC0E8C0EC008CC0E8C0EC004CC0E8DD40041981D1BA80063303A005303C303C303C303C001303B001303A0013035375401A264A6660686060606A6EA800454CCC0D0CCCC050C0E4C0D8DD50008100108118A99981A19BAF009302C30363754020266EBCDD3004180F181B1BAA01014A02C2C607060726072607260726072606A6EA803458585894CCC0CCCDC4A4000002266E2400520A09C0114A0606C606E0046EB4C0D4004C0D4008DD6981980098199819981998179BAA004375660626064004606000260586EA8C0AC008C0AC004C02806CC02C004C0ACC0A0DD50008B180818139BAA001300E302637546052604C6EA800458CC004064DD6981418129BAA0203001001222533302700214C103D87A80001323253330263022003130093302A0024BD70099980280280099B8000348004C0AC00CC0A40088888C8CC00400401488C94CCC09CC08C0044C8C8CC004004020894CCC0B4004528099299981599B8F375C606000400829444CC00C00C004C0C0004DD7181618149BAA002153330273022001132330010013758605A60546EA800C894CCC0B000452889929998151980300318178010998018018008A50302F00115333027300F0011330083758605860526EA80088CC01001000454CCC09CCDC3A400C00226466E24DD69816800991998008009BAC302E302F002480008894CCC0B800840044CCC00C00CC0C40094CCC0ACCC01C01CC0C00084CDC0000A4004200260526EA800854CCC09CCDC3A401000226464A666052604860546EA80044C94CCC0A8C94CCC0B8C0B400454CCC0ACC098C0B00045288A999815981398160008A5016163754602860586EA8C050C0B0DD5004099B890010031337100020066EB4C0B8C0ACDD50008A503020302A3754602460546EA8018DD6981618149BAA002153330273370E9005000899192999814981218151BAA001132533302A32533302E302D0011533302B3026302C00114A22A666056604E605800229405858DD5180A18161BAA3022302C3754010266E2400C0044CDC40018009BAD302E302B37540022940C080C0A8DD5181018151BAA006375A605860526EA80084C8C8CC004004018894CCC0B4004528099299981599BAF004302C303000214A2266006006002606000260146605666E9520023302B302C3029375400497AE04BD7018139BAA00122323300100100322533302600114A0264A6660486008605200429444CC00C00C004C0A40048C94CCC080C070C084DD5000899192999811180518119BAA0011323233760008004600E002604E60486EA800458C030C08CDD5000981298111BAA00116533302200114C103D87A8000130023302330240014BD701BA54800094CCC074C064C078DD5000899191919191919191919191919191919299981818198010991924C64A66605E605600226464A666068606E00426493180B8008B181A80098189BAA0071533302F302A001153330323031375400E2930B0B18179BAA00632323232375C60660066EB8C0C4008C8DD718190019BAE3030002323376060680026068606A0026EB0C0C0038C8CDD818198009819981A0009BAC302E00D16375A606200260620046EB4C0BC004C0BC008C0B4004C0B4008DD6981580098158011BAD30290013029002375A604E002604E00464A666048604E604E002266EC0C098004C098C09C00458DD6181280098128011BAE3023001301F37540022C6464646464A666046604C004264A66604266E3CDD7181100100F8A99981099BAF374C0029810BA14873657474696E677301001325333022300A3023375400226464004A666046603E60486EA80044C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C8C94CCC0F8C1040084C8C8C8C8C8C8C9263302A01123027001325333041303D0011323253330463049002132498CC0B00048DD70008B1BAC3047001304337540262A66608260780022A66608860866EA804C526161630413754024646EB4C108050DD69820009981100A181180A981000B181080B8B181F800981F8011BAD303D001303D002375A607600260760046EB4C0E4004C0E4008DD6981B800981B8011BAC3035001303500230330013033002325333030303330330011337606064002606460660022C6EB0C0C4004C0C4008C0BC004C0BC008C0B4004C0B4008C0AC004C0AC008C0A4004C094DD50008B181398121BAA00116300C302337540082C2C6EACC08800458C090004C090DD5980418101BAA0013007301F375460446EB0C08804894CCC074C064C078DD5000899191919299981218138010991924C64A666046603E00226464A6660506056004264931929998131811000899192999815981700109924C601A0022C605800260506EA800854CCC098C0840044C8C8C8C8C8C94CCC0BCC0C800852616375A606000260600046EB4C0B8004C0B8008DD6981600098141BAA00216302637540022C6052002604A6EA800C54CCC08CC07800454CCC098C094DD50018A4C2C2C60466EA8008C01800C58C094004C094008C08C004C07CDD50008B119299980E980C80089919299981118128010A4C2C6EB8C08C004C07CDD50010A99980E980C00089919299981118128010A4C2C6EB8C08C004C07CDD50010B180E9BAA00130010012232533301C30180011323253330213024002149858DD71811000980F1BAA0021533301C30170011323253330213024002132498CC01C0048CC01801800458DD61811000980F1BAA0021533301C30040011323253330213024002132498CC01C0048CC01801800458DD61811000980F1BAA0021533301C3370E90030008991919192999811981300109924C660120024660100100022C6EB0C090004C090008DD69811000980F1BAA0021533301C3370E900400089919299981098120010A4C2C6EB4C088004C078DD50010A99980E19B87480280044C8C94CCC084C09000852616375A6044002603C6EA800854CCC070CDC3A401800226464A66604260480042930B1BAE3022001301E37540042C60386EA8004DC3A400844646600200200644A66603C002293099198018019811001180198100009180E180E8009180D980E180E0009BAC3019301A002301800130180023756602C002602C602C0046EACC050004C050C050008DD61809000980900098088011BAC300F001300B3754600260166EA80088C038004526136563253330073003001132323232323253330103013002149858DD6980880098088011BAD300F001300F002375A601A00260126EA801054CCC01CC0080044C8C94CCC030C03C00852616375A601A00260126EA801058C01CDD50019B8748008DC3A40006EB80055CD2AB9D5573CAAE7D5D02BA157449811E581C6D9D7ACAC59A4469EC52BB207106167C5CBFA689008FFA6EE92ACC500001".toLowerCase();

describe("Script Deserialisation", () => {
  it("Should be able to parse the spec example", () => {
    const spend = "0500023371C911071A5F783625EE8C004838B40181".toLowerCase();
    const AST = UPLCDecoder.decodeFromHex(spend);
    expect(AST).toBeTruthy();
  });

  it("Should be able to parse the spec example", () => {
    const spend = "010000480081".toLowerCase();
    const AST = UPLCDecoder.decodeFromHex(spend);
    expect(AST).toBeTruthy();
  });

  it("Should be able to parse the optimised spend validator", () => {
    const spend =
      "01000032323232322222323330010010053756601260146014601460146014601460106EA8C024C020DD5001111299980419BAF3009300B00100214984CCC00C00C008C0300055CD2AB9D5573CAE855D11".toLowerCase();
    const AST = UPLCDecoder.decodeFromHex(spend);
    expect(AST).toBeTruthy();
  });

  it("Should be able to parse the Sundae validator", () => {
    const AST = UPLCDecoder.decodeFromHex(sundae);
    expect(AST).toBeTruthy();
  });
});

describe("Parsing benchmark", () => {
  it("Should be able to parse the Sundae validator", () => {
    const startTime = Date.now();
    for (let i = 0; i < 100; i++) {
      const AST = UPLCDecoder.decodeFromHex(sundae);
      expect(AST).toBeTruthy();
    }
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Parsing 100 times took ${duration} milliseconds.`);
  });
});
