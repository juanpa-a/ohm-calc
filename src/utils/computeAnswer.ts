import { IOhmValueCalculator } from './../app/ICalculator';

export const BusinessLogic:IOhmValueCalculator  = {
  calculateOhmValues(bandA: String, bandB: String, bandC: String, bandD: String)  {
    let a = parseInt(bandA.split(',')[1]) || 0
    let b = parseInt(bandB.split(',')[1]) || 0
    let c = parseInt(bandC.split(',')[1]) || 0
    // let d = parseInt(bandD.split(',')[1]) || 0 !! not used here
    const ans = ((a * 10) + b) * c;
    return ans;
  }
}
