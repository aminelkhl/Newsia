import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const languageOptions = [

  { key: 'Arabe', text: 'Arabe', value: 'Arabe' },
  { key: 'Anglais', text: 'Anglais', value: 'Anglais' },
  { key: 'Français', text: 'Français', value: 'Français' },
]

const DropdownLanguage = props => (
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
    onChange={props.onChange}
  />
  </div>
)

export default DropdownLanguage