import { createContext } from 'react';
import { isUoN } from "src/app/@core/common";
import { DrillWellApi } from "src/app/@domain/services/api/drillWell.api";
import { DrillWellCommentApi } from "src/app/@domain/services/api/drillWellComment.api";
import { ProjectListCommentApi } from "src/app/@domain/services/api/projectListComment.api";
import { ProjectListApi } from "src/app/@domain/services/api/projectList.api";
import { FormDataApi } from "src/app/@domain/services/api/formData.api";
import { DropdownItem } from "src/app/@domain/models/dropdown-item";

/**
 * 
 */
class InitialDomainData {

  /**
   * 
   */
  constructor() {
    this.spinner = { visible: false };
    this.errorOverlay = { hasError: false, message: '' };
    this.dropdown = {};
  }

}

/**
 * 
 */
class DomainDataContext {

  /**
   * 
   */
  constructor() {

    this.api = {
      formDataApi: new FormDataApi(this),
      drillWellApi: new DrillWellApi(this),
      drillWellCommentApi: new DrillWellCommentApi(this),
      projectListApi: new ProjectListApi(this),
      projectListCommentApi: new ProjectListCommentApi(this)
    };

    this.loadDropdrownItems();

  }

  /**
   * 
   * @param {*} store 
   * @param {*} setStore 
   */
  bootstrap(store, setStore) {
    this.store = store;
    this.setStore = setStore
  }

  /**
   * 
   */
  loadDropdrownItems = () => {

    this.api.formDataApi.getInitialData()
      .then(result => {

        if (isUoN(result)) return;

        const dropdownItemsBuilder = new DropdownItem(result.dropDownItems);

        const store = { ...this.store };
        store.dropdown.projectStatuses = dropdownItemsBuilder.projectStatuses();
        store.dropdown.areas = dropdownItemsBuilder.areas();
        store.dropdown.responsibleParties = dropdownItemsBuilder.responsibleParties();
        store.dropdown.geologists = dropdownItemsBuilder.geologists();
        store.dropdown.budgetYears = dropdownItemsBuilder.budgetYears();
        store.dropdown.budgetCategories = dropdownItemsBuilder.budgetCategories();
        store.dropdown.projectClassifications = dropdownItemsBuilder.projectClassifications();
        store.dropdown.projectMaturities = dropdownItemsBuilder.projectMaturities();
        store.dropdown.reservoirEngineers = dropdownItemsBuilder.reservoirEngineers();
        store.dropdown.wellStatuses = dropdownItemsBuilder.wellStatuses();
        store.dropdown.operators = dropdownItemsBuilder.operators();

        this.setStore(store)

      })

  }

  /**
   * 
   * @returns 
   */
  dropdown = () => this.store.dropdown;

  /**
   * 
   */
  errorOverlay = {

    /**
     * 
     * @returns
     */
    hasError: () => this.store.errorOverlay.hasError,

    /**
     * 
     * @returns
     */
    message: () => this.store.errorOverlay.message,

    /**
     * 
     */
    hide: () => {
      const store = { ...this.store };
      store.errorOverlay.hasError = false;
      this.setStore(store)
    },

    /**
     * 
     * @param {*} message 
     */
    show: message => {
      const store = { ...this.store };
      store.errorOverlay.hasError = true;
      store.errorOverlay.message = message;
      this.setStore(store)
    }
  }

  /**
   * 
   */
  spinner = {

    /**
     * 
     * @returns 
     */
    visible: () => this.store.spinner.visible,

    /**
     * 
     */
    hide: () => {
      const store = { ...this.store };
      store.spinner.visible = false;
      this.setStore(store)
    },

    /**
     * 
     */
    show: () => {
      const store = { ...this.store };
      store.spinner.visible = true;
      this.setStore(store)
    }
  }

}

export const initiaDomainlData = new InitialDomainData();
export const doaminDataContext = new DomainDataContext();

export const DomainContext = createContext({});