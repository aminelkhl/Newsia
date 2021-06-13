import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Afrique', text: 'Afrique', value: 'Afrique' },
  { key: 'Europe', text: 'Europe', value: 'Europe' },
  { key: 'Asie', text: 'Asie', value: 'Asie' },
  { key: 'Amerique', text: 'Amerique', value: 'Amerique' },
  { key: 'Australie', text: 'Australie', value: 'Australie' },
  { key: 'Moyen-Orient', text: 'Moyen-Orient', value: 'Moyen-Orient' },
]

const DropdownRegion = () => (
 <div className="categorie">
  <Dropdown
    button
    className
    floating
    labeled
    icon
    options={languageOptions}
    search
    text='Region'
  />
  </div>
)

export default DropdownRegion