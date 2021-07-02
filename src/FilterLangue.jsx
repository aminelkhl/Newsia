import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const languageOptions = [
    { key: 'all', text: 'Tout', value: 'all' },
  { key: 'Arabe', text: 'Arabe', value: 'Arabe' },
  { key: 'Anglais', text: 'Anglais', value: 'Anglais' },
  { key: 'Français', text: 'Français', value: 'Français' },
]

const FilterLangue = props => (
 <div className="categorie">
  <Dropdown
    button
    className
    floating
    labeled
    icon
    options={languageOptions}
    search
    text='Langue'
    onChange={(e,{value})=> props.addFilter(value)}
  />
  </div>
)

export default FilterLangue