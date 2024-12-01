import * as Fingerprint2 from 'fingerprintjs2'

let fingerprint = null;

export async function getFingerPrint(){
  if(fingerprint === null){
    const components = await Fingerprint2.default.getPromise();
    const values = components.map((component) => component.value);
    fingerprint = Fingerprint2.default.x64hash128(values.join(""), 31);
  }
  console.log(fingerprint);
  return fingerprint;
}