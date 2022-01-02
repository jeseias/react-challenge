import { render, screen } from '@testing-library/react'
import { Entry as EntryProps } from 'domain/models/entry'
import React from 'react'
import Entry from './entry'

const props =  {
  title: 'Entry title'
} as EntryProps

const makeSut = () => render(
  <Entry {...props}>
    <p>Child Component</p>
  </Entry>
)

describe(Entry.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Entry title')).toBeInTheDocument()
  })
})