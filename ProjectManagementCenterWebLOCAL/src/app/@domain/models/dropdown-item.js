import { itemTypeConst } from "../consts/item-type.consts";

export class DropdownItem {

  /**
   * 
   * @param {*} items 
   */
  constructor(items) {
    this._items = items;
  }

  areas = () => this._items.filter(x => x.itemTypeId === itemTypeConst.area);
  budgetCategories = () => this._items.filter(x => x.itemTypeId === itemTypeConst.budgetCategory);
  budgetYears = () => this._items.filter(x => x.itemTypeId === itemTypeConst.budgetYear);
  fieldProspects = () => this._items.filter(x => x.itemTypeId === itemTypeConst.fieldProspect);
  geologists = () => this._items.filter(x => x.itemTypeId === itemTypeConst.geologistName);
  operators = () => this._items.filter(x => x.itemTypeId === itemTypeConst.operator);
  projectClassifications = () => this._items.filter(x => x.itemTypeId === itemTypeConst.projectClassification);
  projectMaturities = () => this._items.filter(x => x.itemTypeId === itemTypeConst.projectMaturity);
  projectStatuses = () => this._items.filter(x => x.itemTypeId === itemTypeConst.projectStatus);
  reservoirEngineers = () => this._items.filter(x => x.itemTypeId === itemTypeConst.reservoirEngineer);
  responsibleParties = () => this._items.filter(x => x.itemTypeId === itemTypeConst.responsibleParty);
  responsiblePartyRoles = () => this._items.filter(x => x.itemTypeId === itemTypeConst.responsiblePartyRole);
  wellStatuses = () => this._items.filter(x => x.itemTypeId === itemTypeConst.wellStatus);
  

}