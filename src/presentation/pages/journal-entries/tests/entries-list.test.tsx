import { mockEntryModel } from 'domain/__mocks__/mock-entries';
import React from 'react'
import { render, screen } from '@testing-library/react'
import { EntriesList } from '../entries-list'

const entries = [
  mockEntryModel(),
  mockEntryModel(),
  mockEntryModel(),
]

const makeSut = () => render(<EntriesList entries={entries} />)

describe('EntriesList Component', () => {
  it.each(entries)('Should render as expected', (data) => {
    makeSut()
    expect(screen.getByText(data.title)).toBeInTheDocument()
  })
});