import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const dureeOptions = [
  { key: '1', text: '1 Jour', value: '1' },
  { key: '7', text: '7 Jours', value: '7' },
  { key: '15', text: '15 Jours', value: '15' },
  { key: '30', text: '30 Jours', value: '30' },
]

const Dropdownduree = () => (
 <div className="categorie">
  <Dropdown
    button
    className
    floating
    labeled
    icon
    options={dureeOptions}
    search
    text='Durée'
  />
  </div>
)

export default Dropdownduree