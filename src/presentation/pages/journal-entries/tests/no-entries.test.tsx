import React from 'react'
import { screen } from '@testing-library/react'
import NoEntries from '../no-entries'
import { __render } from 'presentation/modules/test-utils';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    state: {
      id: 'journal12',
      title: 'HTML_'
    }
  })
}))

const makeSut = () => __render(() => <NoEntries  />)

describe('EntriesList Component', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByText('HTML_')).toBeInTheDocument()
    expect(screen.getByText('Create a note')).toBeInTheDocument()
  })
});