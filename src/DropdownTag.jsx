import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Politique', text: 'Politique', value: 'Politique' },
  { key: 'Technologie', text: 'Technologie', value: 'Technologie' },
  { key: 'Sport', text: 'Sport', value: 'Sport' },
  { key: 'Sante', text: 'Santé', value: 'Sante' },
  { key: 'Economie', text: 'Economie', value: 'Economie' },
  { key: 'Biologie', text: 'Biologie', value: 'Biologie' },
  { key: 'Astronomie', text: 'Astronomie', value: 'Astronomie' },
  { key: 'Cinema', text: 'Cinema', value: 'Cinema' },
  { key: 'Art', text: 'Art', value: 'Art' },
  { key: 'Culture', text: 'Culture', value: 'Culture' },
  { key: 'Medecine', text: 'Medecine', value: 'Medecine' },
]

const DropdownTag = (props) => (
  <div className="categorie">
  <Dropdown
    button
    className
    floating
    labeled
    icon
    options={languageOptions}
    search
    text='Tag'
    onChange={props.onChange}
  />
  </div>
)

export default DropdownTag