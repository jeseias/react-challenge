import { render, screen } from '@testing-library/react';
import React from 'react'
import Title from './title'

const makeSut = () => render(<Title>Title</Title>)

describe(Title.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
});