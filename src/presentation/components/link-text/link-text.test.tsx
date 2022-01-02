import {  screen } from '@testing-library/react'
import { __render } from 'presentation/modules/test-utils'
import React from 'react'
import LinkText from './link-text'

const makeSut = (props?: any) => __render(() =>
  <LinkText {...props}>
    create note
  </LinkText>
)

describe(LinkText.name, () => {
  it('Should as expected', () => {
    makeSut({ to: 'notes/create' })
    const text = screen.getByText('create note')
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle('font-size: 1.4rem')
    expect(text).not.toHaveStyle('font-weight: 600')
  })

  it('Should render with bold text', () => {
    makeSut({ to: 'notes/create', bold: true })
    const text = screen.getByText('create note')
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle('font-weight: 600')
  })
})