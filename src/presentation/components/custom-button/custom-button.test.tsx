import { render, screen } from '@testing-library/react';
import React from 'react'
import CustomButton from './custom-button'

const makeSut = () => render(<CustomButton>Custom Button</CustomButton>)

describe(CustomButton.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Custom Button')).toBeInTheDocument()
  })
});