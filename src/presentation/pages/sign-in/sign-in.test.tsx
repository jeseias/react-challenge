import React from 'react'
import { mockAccountModel } from "domain/__mocks__/mock-account";
import { LocalStorageAdapter } from "infra/cache";
import { renderWithRouter } from "presentation/modules/test-utils";
import SignIn from './sign-in'
import { fireEvent, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Authentication } from 'domain/usecases';

class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Params
  callCounts = 0
  async auth(params: Authentication.Params): Promise<Authentication.Model> {
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
  authenticationSpy: AuthenticationSpy
  storageSpy: StorageSpy
  sut: () => RenderResult
}

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy()
  const storageSpy = new StorageSpy()
  const sut = () => renderWithRouter(<SignIn authentication={authenticationSpy} storage={storageSpy} />)

  return {
    sut, 
    authenticationSpy,
    storageSpy
  }
}

describe('SignIn Page Page', () => {
  it('Should render as expected', () => {
    makeSut().sut()

    expect(screen.getByText('Your username')).toBeInTheDocument()
    expect(screen.getByText('Your password')).toBeInTheDocument()
    expect(screen.getAllByText('Sign In')).toHaveLength(2)

    expect(screen.getByTestId('username-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
  })

  it('Should call authentication.auth with correct values', () => {
    const { sut, authenticationSpy } =  makeSut()
    sut()

    userEvent.type(screen.getByTestId('username-input'), 'any_username')
    userEvent.type(screen.getByTestId('password-input'), 'any_password')

    fireEvent.click(screen.getAllByText('Sign In')[1])

    expect(authenticationSpy.callCounts).toBe(1)
    expect(authenticationSpy.params).toEqual({
      username: 'any_username',
      password: 'any_password'
    })
  })
});