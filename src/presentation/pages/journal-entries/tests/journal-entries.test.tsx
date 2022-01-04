import { mockEntryModel } from 'domain/__mocks__/mock-entries';
import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import JournalEntries from '../journal-entries'
import { LoadEntries } from 'domain/usecases/load-entries';
import { renderWithRouter } from 'presentation/modules/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    state: {
      title: 'title'
    }
  })
}))

class LoadEntriesSpy implements LoadEntries {
  entries =  [
    mockEntryModel(),
    mockEntryModel(),
    mockEntryModel(),
  ]
  response = {
    entries: this.entries 
  }
  callCounts = 0
  
  async load(): Promise<LoadEntries.Model> {
    this.callCounts++
    return this.response
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

  it('Should render as expected', () => {
    makeSut().sut()
    expect(screen.getByLabelText('company logo')).toBeInTheDocument()
  })

  it('Should render NoEntries Component', () => {
    const { loadEntriesSpy, sut } = makeSut()
    jest.spyOn(loadEntriesSpy, 'load').mockResolvedValueOnce(null as any)
    sut()
    expect(screen.getByLabelText('no entries')).toBeInTheDocument()
  })

  it('Should call loadEntries.load only once', () => {
    const { loadEntriesSpy, sut } = makeSut()
    sut()
    expect(loadEntriesSpy.callCounts).toBe(1)
  })
});