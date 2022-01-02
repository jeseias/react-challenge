import { render, screen } from '@testing-library/react';
import React from 'react'
import AuthTitle from './auth-title'

const makeSut = () => render(<AuthTitle>Auth Title</AuthTitle>)

describe(AuthTitle.name, () => {
  it('Should render children', () => {
    makeSut()
    expect(screen.getByText('Auth Title')).toBeInTheDocument()
  })
});