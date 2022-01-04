import React from 'react'
import { AddAccount } from "domain/usecases/add-account";
import { mockAccountModel } from "domain/__mocks__/mock-account";
import { LocalStorageAdapter } from "infra/cache";
import { renderWithRouter } from "presentation/modules/test-utils";
import SignUp from './sign-up'
import { fireEvent, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccount.Params
  callCounts = 0
  async  add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params
    this.callCounts++
    return this.account
  }
}

class StorageSpy implements LocalStorageAdapter {
  key: string
  value: object
  set (key: string, value: object): void {
    this.key = key
    this.value = value
    return
  }

  get (key: string): object {
    this.key = key
    return {}
  }
}

type SutTypes = {
  addAccountSpy: AddAccountSpy
  storageSpy: StorageSpy
  sut: () => RenderResult
}

const makeSut = (): SutTypes => {
  const addAccountSpy = new AddAccountSpy()
  const storageSpy = new StorageSpy()
  const sut = () => renderWithRouter(<SignUp addAccount={addAccountSpy} storage={storageSpy} />)

  return {
    sut, 
    addAccountSpy,
    storageSpy
  }
}

describe('SignUp Page Page', () => {
  it('Should render as expected', () => {
    makeSut().sut()

    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Already have an account')).toBeInTheDocument()
    expect(screen.getByText('Define a username')).toBeInTheDocument()
    expect(screen.getByText('Email (optional)')).toBeInTheDocument()
    expect(screen.getByText('Set your password')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()

    expect(screen.getByTestId('username-input')).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
  })

  it('Should call addAccount.add with correct values', () => {
    const { sut, addAccountSpy } =  makeSut()
    sut()

    userEvent.type(screen.getByTestId('username-input'), 'any_username')
    userEvent.type(screen.getByTestId('email-input'), 'any_email')
    userEvent.type(screen.getByTestId('password-input'), 'any_password')

    fireEvent.click(screen.getByText('Sign In'))

    expect(addAccountSpy.callCounts).toBe(1)
    expect(addAccountSpy.params).toEqual({
      username: 'any_username',
      email: 'any_email',
      password: 'any_password'
    })
  })
});