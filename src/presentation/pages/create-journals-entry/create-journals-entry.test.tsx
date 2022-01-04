import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import CreateJournalsEntry from './create-journals-entry'
import { SaveEntry } from 'domain/usecases/save-entry'
import userEvent from '@testing-library/user-event'
import { mockEntryModel } from 'domain/__mocks__/mock-entries'
import { renderWithRouter } from 'presentation/modules/test-utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    state: {
      title: 'Journal Title'
    }
  })
}))

class SaveEntrySpy implements SaveEntry {
  entry = mockEntryModel()
  params: SaveEntry.Params
  callsCount = 0

  async save(params: SaveEntry.Params): Promise<SaveEntry.Model> {
    this.params = params
    this.callsCount++
    return this.entry
  }
}

type SutTypes = {
  saveEntrySpy: SaveEntrySpy
}

const makeSut = (): SutTypes => {
  const saveEntrySpy = new SaveEntrySpy()
  renderWithRouter(<CreateJournalsEntry saveEntry={saveEntrySpy} />)
  return {
    saveEntrySpy
  }
}

describe('CreateJournalsEntry Page', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByText('Journal Title')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Title')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Write your note')).toBeInTheDocument()
    expect(screen.getByText('Save note')).toBeInTheDocument()
  })

  it('Should call saveEntry.save with correct values', () => {
    const { saveEntrySpy } = makeSut()
    userEvent.type(screen.getByPlaceholderText('title'), 'The article element')
    userEvent.type(screen.getByPlaceholderText('Write your note'), 'The article element content')
    fireEvent.click(screen.getByText('Save note'))
    expect(saveEntrySpy.params).toEqual({
      title: 'The article element',
      content: 'The article element content'
    })
  })


  it('Should call saveEntry.save only once', () => {
    const { saveEntrySpy } = makeSut()
    fireEvent.click(screen.getByText('Save note'))
    expect(saveEntrySpy.callsCount).toEqual(1)
  })
});