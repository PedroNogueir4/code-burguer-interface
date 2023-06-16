import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import paths from '../../constants/paths'

import { Button, ErrorMessage } from '../../components'
import {
  ContainerLeft,
  Container,
  ContainerMain,
  Label,
  Inputs,
  SignupLInk
} from './styles'

import registerImg from '../../assets/ImgCadastro.png'
import logo from '../../assets/logo.png'
import { toast } from 'react-toastify'

export function Cadastro() {
  const navigate = useNavigate()
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
    admin: Yup.boolean()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 200 || status === 201) {
        toast.success('Cadastro Realizado com Sucesso!')
        navigate(paths.Login)
      } else if (status === 409) {
        toast.error('Email ja cadastrado,faça login para continuar!')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema!,Tente novamente')
    }
  }

  return (
    <Container>
      <ContainerLeft>
        <img src={registerImg} />
      </ContainerLeft>
      <ContainerMain>
        <img src={logo} />
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Primeiro Nome</Label>
          <Inputs
            type="text"
            {...register('name')}
            error={errors.name?.message}
          ></Inputs>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Email</Label>
          <Inputs
            type="email"
            {...register('email')}
            error={errors.email?.message}
          ></Inputs>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Inputs
            type="password"
            {...register('password')}
            error={errors.password?.message}
          ></Inputs>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label>Confirmar Senha</Label>
          <Inputs
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          ></Inputs>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 15 }}>
            Sign Up
          </Button>
        </form>
        <SignupLInk>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to={paths.Login}>
            Sign In
          </Link>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}
