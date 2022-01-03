import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CreateJournalsEntry from './create-journals-entry'
import { SaveEntry } from 'domain/usecases/save-entry'
import userEvent from '@testing-library/user-event'
import { mockEntryModel } from 'domain/__mocks__/mock-entries'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    state: {
      id: 'journal2',
      title: 'Journal Title HTML'
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
  render(<CreateJournalsEntry saveEntry={saveEntrySpy} />)
  return {
    saveEntrySpy
  }
}

describe('CreateJournalsEntry Page', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByText('Journal Title HTML')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your note')).toBeInTheDocument()
    expect(screen.getByText('Save note')).toBeInTheDocument()
  })

  it('Should call saveEntry.save with correct values', () => {
    const { saveEntrySpy } = makeSut()
    userEvent.type(screen.getByPlaceholderText('title'), 'The article element')
    userEvent.type(screen.getByPlaceholderText('Write your note'), 'The article element content')
    fireEvent.click(screen.getByText('Save note'))
    expect(saveEntrySpy.params).toEqual({
      title: 'The article element',
      content: 'The article element content',
      journalId: 'journal2'
    })
  })


  it('Should call saveEntry.save only once', () => {
    const { saveEntrySpy } = makeSut()
    fireEvent.click(screen.getByText('Save note'))
    expect(saveEntrySpy.callsCount).toEqual(1)
  })
});