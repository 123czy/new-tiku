import { Commit } from 'vuex'
import {IChooseItem,ITikuState} from '@/types'

const state:IChooseItem = {
  licenseType:'c1',
  subject:1,
  time:60
}

const mutations = {
  setSubject(state: ITikuState, subject: number){
    state.subject = subject
  },
  setLicenseType(state: ITikuState, licenseType: string){
    state.licenseType = licenseType
  }
}

const actions = {
  set_Subject({ commit }: { commit: Commit }, subject: number){
     commit('setSubject',subject)
  },
  set_LicenseType({ commit }: { commit: Commit }, licenseType: string){
     commit('setSubject',licenseType)
  }
}

const tikuModule = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default tikuModule;