import { mockEntryModel } from 'domain/__mocks__/mock-entries';
import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import JournalEntries from '../journal-entries'
import { LoadEntries } from 'domain/usecases/load-entries';
import { renderWithRouter } from 'presentation/modules/test-utils';

class LoadEntriesSpy implements LoadEntries {
  entries =  [
    mockEntryModel(),
    mockEntryModel(),
    mockEntryModel(),
  ]
  callCounts = 0
  
  async  load(): Promise<LoadEntries.Model> {
    this.callCounts++
    return this.entries
  }
}

type SutTypes = {
  loadEntriesSpy: LoadEntriesSpy
  sut: () => RenderResult
}

const makeSut = (): SutTypes => {
  const loadEntriesSpy = new LoadEntriesSpy()
  const sut = () => renderWithRouter(<JournalEntries loadEntries={loadEntriesSpy} />)
  return {
    loadEntriesSpy,
    sut
  }
}

describe('JournalEntries Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should render as expected', async () => {
    makeSut().sut()
    expect(screen.getByLabelText('company logo')).toBeInTheDocument()
  })

  it('Should render Add Note Button', async () => {
    makeSut().sut()
    expect(screen.getByText('Add Note')).toBeInTheDocument()
  })

  // it('Should not render Add Note Button', () => {
  //   const { loadEntriesSpy, sut } = makeSut()
  //   // jest.spyOn(loadEntriesSpy, 'load').mockResolvedValueOnce(null as any)
  //   act(() => {
  //     sut()
  //   })
  //   expect(screen.queryByRole('button', { name: 'Add Note' })).not.toBeInTheDocument()
  // })

  it('Should render NoEntries Component', () => {
    const { loadEntriesSpy, sut } = makeSut()
    jest.spyOn(loadEntriesSpy, 'load').mockResolvedValueOnce(null as any)
    sut()
    expect(screen.getByLabelText('no entries')).toBeInTheDocument()
  })

  // it('Should call loadEntries.load only once', () => {
  //   const { loadEntriesSpy } = makeSut()
  //   expect(loadEntriesSpy.callCounts).toBe(1)
  // })
});