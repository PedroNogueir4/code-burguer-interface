import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

import { Button, ErrorMessage } from '../../../components/index'
import {
  Container,
  Label,
  Inputs,
  LabelUpload,
  ReactSelectS,
  ContainerOffer
} from './styles'
import paths from '../../../constants/paths'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [category, setCategory] = useState(null)
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log(state)
  const schema = Yup.object().shape({
    name: Yup.string(),
    price: Yup.string(),
    category_id: Yup.object(),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async newProduct => {
    console.log(newProduct.category_id)
    const productDataFormData = new FormData()
    productDataFormData.append('name', newProduct.name)
    productDataFormData.append('price', newProduct.price)
    productDataFormData.append('category_id', newProduct.category_id.id)
    productDataFormData.append('file', newProduct.file[0])
    productDataFormData.append('offer', newProduct.offer)

    try {
      await toast.promise(
        api.put(`products/${state.id}`, productDataFormData),
        {
          pending: 'Editando produto',
          success: 'Produto editado com sucesso',
          error: 'Falha ao editar produto'
        }
      )

      setTimeout(() => {
        navigate(paths.ProductsList)
      }, 1000)
    } catch (error) {
      toast.error('Falha no sistema!,Tente novamente')
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategory(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Inputs type="text" {...register('name')} defaultValue={state.name} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Inputs
            type="number"
            {...register('price')}
            defaultValue={state.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            <>
              <CloudUploadOutlinedIcon />
              {fileName || 'Carregue a imagem do produto'}
            </>
            <input
              {...register('file')}
              type="file"
              accept="imagem/png, imagem/jpeg"
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category_id"
            control={control}
            render={({ field }) => (
              <ReactSelectS
                {...field}
                options={category}
                placeholder="Selecione a categoria"
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
              />
            )}
          />
          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </div>
        <ContainerOffer>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={state.offer}
          />
          <Label>Produto em oferta?</Label>
        </ContainerOffer>
        <Button style={{ width: '100%' }}>Editar Produto</Button>
      </form>
    </Container>
  )
}

export default EditProduct
