import { screen } from '@testing-library/react'
import { Journal as JournalProps } from 'domain/models'
import { renderWithRouter } from 'presentation/modules/test-utils'
import React from 'react'
import Journal from './journal'

const props = {
  title: 'journal title'
} as JournalProps

const makeSut = () => renderWithRouter(<Journal {...props} />)

describe('Journal Component', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByLabelText('journal')).toBeInTheDocument()
    expect(screen.getByText('journal title')).toBeInTheDocument()
  }) 
});