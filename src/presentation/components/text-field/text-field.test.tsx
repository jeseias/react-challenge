import React from 'react'
import { render, screen } from "@testing-library/react";
import TextField from "./text-field";

const makeSut = (props?: any) => render(<TextField {...props}  />)

describe(TextField.name, () => {
  it('Should render as expected', () => {
    makeSut({ placeholder: 'name' })
    expect(screen.queryByLabelText('textarea')).not.toBeInTheDocument()
    expect(screen.getByLabelText('input')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
  })

  it('Should render text area', () => {
    makeSut({ placeholder: 'message', textArea: true })
    expect(screen.getByLabelText('textarea')).toBeInTheDocument()
    expect(screen.queryByLabelText('input')).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText('message')).toBeInTheDocument()
  })
});