import React from 'react'
import { render, screen } from '@testing-library/react'
import CreateJournalsPost from './create-journals-post'
import { SaveJournal } from 'domain/usecases/save-journal'
import { mockSaveJournalModel } from 'domain/__mocks__/mock-journal'
import { SaveEntry } from 'domain/usecases/save-entry'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({
    title: 'Journal Title HTML'
  })
}))

class CreateJournalsPostSpy implements SaveEntry {
  journal = mockSaveJournalModel()
  params: SaveJournal.Params
  callsCount = 0

  async save(params: SaveEntry.Params): Promise<SaveEntry.Model> {
    this.params = params
    this.callsCount++
    return this.journal
  }
}

type SutTypes = {
  createJournalsPostSpy: CreateJournalsPostSpy
}

const makeSut = (): SutTypes => {
  const createJournalsPostSpy = new CreateJournalsPostSpy()
  render(<CreateJournalsPost saveEntry={createJournalsPostSpy} />)

  return {
    createJournalsPostSpy
  }
}

describe('CreateJournalsPost Page', () => {
  it('Should render as expected', () => {
    makeSut()
    expect(screen.getByText('Journal Title HTML')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument()
    expect(screen.getByText('Save note')).toBeInTheDocument()
  })

  // it('Should call saveJournal.save with correct values', () => {
  //   const { createJournalsPostSpy } = makeSut()
  //   userEvent.type(screen.getByPlaceholderText('journal title'), 'HTML_')
  //   fireEvent.click(screen.getByText('Save note'))
  //   expect(createJournalsPostSpy.params).toEqual({
  //     title: 'HTML_',
  //     type: 'public'
  //   })
  // })


  // it('Should call saveJournal.save only once', () => {
  //   const { createJournalsPostSpy } = makeSut()
  //   fireEvent.click(screen.getByText('Save journal'))
  //   expect(createJournalsPostSpy.callsCount).toEqual(1)
  // })
});