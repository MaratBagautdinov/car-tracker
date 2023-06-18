import drivers_data from '../db/drivers-data.json'
import { driverT } from '../src/types'

export default (driverID: driverT['id']): driverT => 
    drivers_data.find(driver => driver.id === driverID) || {
        id: 0,
        name: 'Driver',
        phoneNumber: 0
    }
