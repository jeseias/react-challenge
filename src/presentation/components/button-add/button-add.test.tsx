import {  screen } from '@testing-library/react'
import { __render } from 'presentation/modules/test-utils'
import React from 'react'
import ButtonAdd from './button-add'

const makeSut = () => __render(() =>
  <ButtonAdd to="journal/create">
    Add Journal
  </ButtonAdd>
)

describe(ButtonAdd.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByLabelText('plus icon')).toBeInTheDocument()
    expect(screen.getByText('Add Journal')).toBeInTheDocument()
  })
})