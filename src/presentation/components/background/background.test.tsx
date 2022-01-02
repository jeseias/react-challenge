import { render, screen } from '@testing-library/react'
import React from 'react'
import Background from './background'

const makeSut = () => render(
  <Background>
    <p>Child Component</p>
  </Background>
)

describe(Background.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})