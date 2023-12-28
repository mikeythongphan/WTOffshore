import { createContext } from 'react';
import { isUoN } from 'src/app/@core/common';

/**
 * 
 */
class InitialModuleData {

  /**
   * 
   */
  constructor() {
    this.frmModel = null;
    this.searchText = '';
    this.page = 0;
    this.rowsPerPage = 25;
    this.comments = [];
    this.moduleGvData = [];
  }

  /**
   * 
   * @param {*} frmModel 
   */
  loadFormModel = frmModel => {
    this.frmModel = frmModel;
  }

}

/**
 * 
 */
class ModuleDataContext {

  frmModel = () => this.store.frmModel;

  /**
   * 
   * @param {*} val 
   * @returns 
   */
  moduleGvData = val => {
    if (isUoN(val)) return this.store.moduleGvData;
    this.setStore({ ...this.store, ...{ moduleGvData: [...val]} });
  }


  /**
   * 
   * @param {*} val 
   * @returns 
   */
  comments = val => {
    if (isUoN(val)) return this.store.comments;
    this.setStore({ ...this.store, ...{ comments: [...val]} });
  }

  /**
   * 
   * @param {*} val 
   * @returns 
   */
  rowsPerPage = val => {
    if (isUoN(val)) return this.store.rowsPerPage;
    this.setStore({ ...this.store, ...{ rowsPerPage: val} });
  }

  /**
   * 
   * @param {*} val 
   * @returns 
   */
  page = val => {
    if (isUoN(val)) return this.store.page;
    this.setStore({ ...this.store, ...{ page: val} });
  }

  /**
   * 
   * @param {*} val 
   * @returns 
   */
  searchText = val => {
    if (isUoN(val)) return this.store.searchText;
    this.setStore({ ...this.store, ...{ searchText: val} });
  }

  /**
   * 
   */
  constructor() {
    this.loadModelDataFunc = null;
  }

  /**
   * 
   * @param {*} store 
   * @param {*} setStore 
   */
  bootstrap(store, setStore) {
    this.store = store;
    this.setStore = setStore;
  }

}

export const initialModuleData = new InitialModuleData();
export const moduleDataContext = new ModuleDataContext();

export const ModuleContext = createContext({});