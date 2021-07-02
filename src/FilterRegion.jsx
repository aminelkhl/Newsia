import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'all', text: 'Tout', value: 'all' },
  { key: 'Afrique', text: 'Afrique', value: 'Afrique' },
  { key: 'Europe', text: 'Europe', value: 'Europe' },
  { key: 'Asie', text: 'Asie', value: 'Asie' },
  { key: 'Amerique', text: 'Amerique', value: 'Amerique' },
  { key: 'Australie', text: 'Australie', value: 'Australie' },
  { key: 'Moyen-Orient', text: 'Moyen-Orient', value: 'Moyen-Orient' },
]

const FilterRegion = (props) => (
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
    onChange={(e,{value})=> props.addFilter(value)}
  />
  </div>
)

export default FilterRegion