const CONTEXT = process.env.API_HOST;
const testZoneCode = 11010801;
const zoneCode = 320581000000;
/*接口*/
export const getMatterPackageList = CONTEXT + '/matter/package/list?zoneCode=' + zoneCode;
export const getCurrentPackageInfo = CONTEXT + '/matter/package/';
