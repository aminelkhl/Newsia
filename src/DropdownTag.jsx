import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Politique', text: 'Politique', value: 'Politique' },
  { key: 'Europe', text: 'Europe', value: 'Europe' },
  { key: 'Sport', text: 'Sport', value: 'Sport' },
  { key: 'Finance', text: 'Finance', value: 'Finance' },
  { key: 'Technologie', text: 'Technologie', value: 'Technologie' },
  { key: 'Santé', text: 'Santé', value: 'Santé' },
]

const DropdownTag = () => (
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
  />
  </div>
)

export default DropdownTag