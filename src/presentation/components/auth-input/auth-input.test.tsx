import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import AuthInput from "./auth-input";
import { InputProps } from '@chakra-ui/react';

const makeSut = (props?: InputProps) => render(<AuthInput label="name" {...props}  />)

describe(AuthInput.name, () => {
  it('Should render as expected', () => {
   makeSut({ placeholder: 'name' })

   const input = screen.getByPlaceholderText('name')
   const label = screen.getByText('name')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()

    expect(label).not.toHaveStyle('color: grey')
    expect(label).toHaveStyle(`
      top: 1.1rem;
      left: 1.276rem;
      font-size: 1.2rem;
      font-weight: 600;
    `)
  })

  it('Should render input in focus state', () => {
    makeSut({ placeholder: 'name' })

    const input = screen.getByPlaceholderText('name')
    fireEvent.focus(input)

    expect(screen.getByText('name')).toHaveStyle(`
      top: .4rem;
      left: .7rem;
      font-size: .9rem;
      font-weight: normal;
      color: grey
    `)
  })
});