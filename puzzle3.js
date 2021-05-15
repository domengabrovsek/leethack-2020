// const input = JSON.parse("{\"0\":0,\"1\":1,\"2\":4,\"3\":9,\"4\":16,\"5\":25,\"6\":36,\"7\":49,\"8\":64,\"9\":81,\"10\":100,\"11\":121,\"12\":144,\"13\":169,\"14\":196,\"15\":225,\"16\":256,\"17\":289,\"18\":324,\"19\":361,\"20\":400,\"21\":441,\"22\":484,\"23\":529,\"24\":576,\"25\":625,\"26\":676,\"27\":729,\"28\":784,\"29\":841,\"30\":900,\"31\":961,\"32\":1024,\"33\":1089,\"34\":1156,\"35\":1225,\"36\":1296,\"37\":1369,\"38\":1444,\"39\":1521,\"40\":1600,\"41\":1681,\"42\":1764,\"43\":1849,\"44\":1936,\"45\":2025,\"46\":2116,\"47\":2209,\"48\":2304,\"49\":2401,\"50\":2500,\"51\":2601,\"52\":2704,\"53\":2809,\"54\":2916,\"55\":3025,\"56\":3136,\"57\":3249,\"58\":3364,\"59\":3481,\"60\":3600,\"61\":3721,\"62\":3844,\"63\":3969,\"64\":4096,\"65\":4225,\"66\":4356,\"67\":4489,\"68\":4624,\"69\":4761,\"70\":4900,\"71\":5041,\"72\":5184,\"73\":5329,\"74\":5476,\"75\":5625,\"76\":5776,\"77\":5929,\"78\":6084,\"79\":6241,\"80\":6400,\"81\":6561,\"82\":6724,\"83\":6889,\"84\":7056,\"85\":7225,\"86\":7396,\"87\":7569,\"88\":7744,\"89\":7921,\"90\":8100,\"91\":8281,\"92\":8464,\"93\":8649,\"94\":8836,\"95\":9025,\"96\":9216,\"97\":9409,\"98\":9604,\"99\":9801,\"100\":10000,\"101\":10201,\"102\":10404,\"103\":10609,\"104\":10816,\"105\":11025,\"106\":11236,\"107\":11449,\"108\":11664,\"109\":11881,\"110\":12100,\"111\":12321,\"112\":12544,\"113\":12769,\"114\":12996,\"115\":13225,\"116\":13456,\"117\":13689,\"118\":13924,\"119\":14161,\"120\":14400,\"121\":14641,\"122\":14884,\"123\":15129,\"124\":15376,\"125\":15625,\"126\":15876,\"127\":16129,\"128\":16384,\"129\":16641,\"130\":16900,\"131\":17161,\"132\":17424,\"133\":17689,\"134\":17956,\"135\":18225,\"136\":18496,\"137\":18769,\"138\":19044,\"139\":19321,\"140\":19600,\"141\":19881,\"142\":20164,\"143\":20449,\"144\":20736,\"145\":21025,\"146\":21316,\"147\":21609,\"148\":21904,\"149\":22201}");

const timeInput = "87m,6365ms,121s,-2724ms,8388ms,718s,1647ms,88m,45m,8665ms,6h,-4h,200s,-4h,-186s,55ms,96m,1h,307ms,311s,4m,91m,81m,80s,354s,23m,5365ms,436s,4h,499s,-77m,7783ms,10h,301s,8747ms,-640ms,510s,53m,-8775ms,983s,6h,7630ms,6h,123s,1h,9h,537s,6692ms,122s,-2538ms,47s,5m,1304ms,9h,11m,526s,-3h,-715s,285s,370s,2926ms,1793ms,-956s,9626ms,-51s,8h,5h,8240ms,796s,7h,869s,3h,-9120ms,884s,55m,210s,15s,-5061ms,-6940ms,106ms,220s,5457ms,8m,473s,7h,18m,-1854ms,1h,-356s,-2h,4849ms,7h,1416ms,0h,779s,7h,-210s,58m,26m,438s";

const inputs = timeInput.split(',');

const dayjs = require('dayjs')

let start = dayjs('2019-01-25T00:00:00Z');

inputs.forEach(input => {

  const time = input.match(/^-?\d+/)[0];
  const unit = input.match(/[a-z]+/)[0]
  
  start = start.add(time, unit)

})

console.log(start);