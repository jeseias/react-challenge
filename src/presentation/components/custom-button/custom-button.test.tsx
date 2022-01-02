import { ButtonProps } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react'
import CustomButton from './custom-button'

const makeSut = (props?: ButtonProps) => render(<CustomButton {...props}>Custom Button</CustomButton>)

describe(CustomButton.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Custom Button')).toBeInTheDocument()
  })

  it('Should accept clicks', () => {
    const click = jest.fn()
    makeSut({ onClick: click })
    fireEvent.click(screen.getByRole('button', { name: 'Custom Button' }))
    expect(click).toHaveBeenCalledTimes(1)
  })
});