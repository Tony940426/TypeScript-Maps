import { User } from './User'
import { Company } from "./company";
import { CustomerMap } from './CustomerMaps';

const user = new User();
const company = new Company()
const customMap = new CustomerMap('map');

customMap.addUserMarker(user)
customMap.addCompanyMarker(company)