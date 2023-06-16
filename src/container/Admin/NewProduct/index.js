import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

import { Button, ErrorMessage } from '../../../components/index'
import { Container, Label, Inputs, LabelUpload, ReactSelectS } from './styles'
import paths from '../../../constants/paths'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [category, setCategory] = useState(null)
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite um nome'),
    price: Yup.string().required('Digite um preço'),
    category_id: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      })
      .test('size', 'Carregue arquivos até 2mb', value => {
        return value[0]?.size <= 200000
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async newProduct => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', newProduct.name)
    productDataFormData.append('price', newProduct.price)
    productDataFormData.append('category_id', newProduct.category_id.id)
    productDataFormData.append('file', newProduct.file[0])

    try {
      await toast.promise(api.post('products', productDataFormData), {
        pending: 'Criando novo produto',
        success: 'Produto criado com sucesso',
        error: 'Falha ao criar produto'
      })

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
          <Inputs type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Inputs type="number" {...register('price')} />
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
                placeholder="Categorias"
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
              />
            )}
          />
          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </div>

        <Button style={{ width: '100%' }}>Adicionar Produto</Button>
      </form>
    </Container>
  )
}

export default NewProduct
