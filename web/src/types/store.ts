import {ITikuItem} from './common'
// 首页选中的选项
export interface IChooseItem {
  licenseType:string,
  subject:number
}

export interface ITikuState {
  subject: number;
  model: string;
  testType: string;
  tikuList?: ITikuItem[];
  isTesting: boolean;
  isLoading: boolean;
  duration: number;
  isEnd: boolean;
  licenseType:string;
}