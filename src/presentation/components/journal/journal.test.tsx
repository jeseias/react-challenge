import { render, screen } from '@testing-library/react'
import { Journal as JournalProps } from 'domain/models/journal'
import React from 'react'
import Journal from './journal'

const props =  {
  title: 'Journal title'
} as JournalProps

const makeSut = () => render(
  <Journal {...props} />
)

describe(Journal.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Journal title')).toBeInTheDocument()
  })
})