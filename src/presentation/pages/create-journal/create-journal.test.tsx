import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CreateJournal from './create-journal'
import userEvent from '@testing-library/user-event'
import { SaveJournal } from 'domain/usecases/save-journal'
import { mockSaveJournalModel } from 'domain/__mocks__/mock-journal'

class SaveJournalSpy implements SaveJournal {
  journal = mockSaveJournalModel()
  params: SaveJournal.Params
  callsCount = 0

  async save(params: SaveJournal.Params): Promise<SaveJournal.Model> {
    this.params = params
    this.callsCount++
    return this.journal
  }
}

type SutTypes = {
  saveJournalSpy: SaveJournalSpy
}

const makeSut = (): SutTypes => {
  const saveJournalSpy = new SaveJournalSpy()
  render(<CreateJournal saveJournal={saveJournalSpy} />)

  return {
    saveJournalSpy
  }
}

describe('CreateJournal Page', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByLabelText('company logo')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('journal title')).toBeInTheDocument()
    expect(screen.getByText('Save journal')).toBeInTheDocument()
  })

  it('Should call saveJournal.save with correct values', () => {
    const { saveJournalSpy } = makeSut()
    userEvent.type(screen.getByPlaceholderText('journal title'), 'HTML_')
    fireEvent.click(screen.getByText('Save journal'))
    expect(saveJournalSpy.params).toEqual({
      title: 'HTML_',
      type: 'public'
    })
  })


  it('Should call saveJournal.save only once', () => {
    const { saveJournalSpy } = makeSut()
    fireEvent.click(screen.getByText('Save journal'))
    expect(saveJournalSpy.callsCount).toEqual(1)
  })
});