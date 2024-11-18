import { FormHTMLAttributes } from 'react'

import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'

import { useCheckoutContext } from '@/hooks/useCheckoutContext'
import { useCartContext } from '@/hooks/useCartContext'

import {
  Fields,
  Fieldset,
  FieldsetHeader,
  FieldWrapper,
  NewOrderFormContainer
} from './styles'

import { TextField } from '@/components/TextField'
import { Radio } from '@/components/Radio'

const newOrderFormValidationSchema = z.object({
  cep: z
    .string()
    .min(8)
    .max(9)
    .regex(/^\d{5}-?\d{3}$/),
  street: z.string().min(3, 'Informe a rua'),
  number: z.number().int().positive().min(1, 'Informe o número'),
  fullAddress: z.string().min(3).optional(),
  city: z.string().min(3, 'Informe a cidade'),
  neighborhood: z.string().min(3, 'Informe a bairro'),
  state: z.string().length(2, 'Informe a UF').toUpperCase(),
  paymentMethod: z.enum(['credit-card', 'debit-card', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento'
  })
})

type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>

interface NewOrderFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function NewOrderForm({ ...rest }: NewOrderFormProps) {
  const { deliveryAddress, paymentMethod, updateCheckoutData } =
    useCheckoutContext()
  const { cleanCart } = useCartContext()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: deliveryAddress?.cep || '',
      street: deliveryAddress?.street || '',
      number: deliveryAddress?.number || 1,
      fullAddress: deliveryAddress?.fullAddress || '',
      city: deliveryAddress?.city || '',
      neighborhood: deliveryAddress?.neighborhood || '',
      state: deliveryAddress?.state || '',
      paymentMethod: paymentMethod || 'credit-card'
    }
  })
  const navigate = useNavigate()

  const { handleSubmit } = newOrderForm

  function handlePlaceNewOrder(data: NewOrderFormData) {
    data.cep = data.cep.replace('-', '')

    const { paymentMethod, ...deliveryAddress } = data
    updateCheckoutData({ deliveryAddress, paymentMethod })

    cleanCart()
    navigate('/checkout/success')
  }

  return (
    <FormProvider {...newOrderForm}>
      <NewOrderFormContainer
        onSubmit={handleSubmit(handlePlaceNewOrder)}
        {...rest}
      >
        <Fieldset>
          <FieldsetHeader $iconColor="yellow">
            <MapPinLine />
            <div>
              <legend>Endereço de Entrega</legend>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FieldsetHeader>
          <Fields>
            <FieldWrapper>
              <TextField
                name="cep"
                placeholder="CEP"
                required
                className="input-cep"
                list="cep-suggestions"
                onBlur={event => {
                  const cep = event.target.value
                  const maskedCEP = cep
                    .replace(/[\D]/g, '')
                    .replace(/^(\d{5})(\d{3}$)/, '$1-$2')

                  event.target.value = maskedCEP
                }}
              />
              {deliveryAddress && (
                <datalist id="cep-suggestions">
                  <option value={deliveryAddress.cep} />
                </datalist>
              )}
            </FieldWrapper>

            <FieldWrapper>
              <TextField
                name="street"
                placeholder="Rua"
                required
                className="input-street"
                list="street-suggestions"
              />
              {deliveryAddress && (
                <datalist id="street-suggestions">
                  <option value={deliveryAddress.street} />
                </datalist>
              )}
            </FieldWrapper>

            <FieldWrapper>
              <TextField
                name="number"
                placeholder="Número"
                required
                type="number"
                className="input-number"
                min={1}
              />

              <TextField
                name="fullAddress"
                placeholder="Complemento"
                className="input-fullAddress"
                list="fullAddress-suggestions"
              />
              {deliveryAddress && (
                <datalist id="fullAddress-suggestions">
                  <option value={deliveryAddress.fullAddress} />
                </datalist>
              )}
            </FieldWrapper>

            <FieldWrapper>
              <TextField
                name="neighborhood"
                placeholder="Bairro"
                required
                className="input-neighborhood"
                list="neighborhood-suggestions"
              />
              {deliveryAddress && (
                <datalist id="neighborhood-suggestions">
                  <option value={deliveryAddress.neighborhood} />
                </datalist>
              )}
              <TextField
                name="city"
                placeholder="Cidade"
                required
                className="input-city"
                list="city-suggestions"
              />
              {deliveryAddress && (
                <datalist id="city-suggestions">
                  <option value={deliveryAddress.city} />
                </datalist>
              )}
              <TextField
                name="state"
                placeholder="UF"
                required
                maxLength={2}
                className="input-state"
                list="state-suggestions"
                onChange={event => {
                  const upperCaseState = event.target.value.toLocaleUpperCase()

                  event.target.value = upperCaseState
                }}
              />
              {deliveryAddress && (
                <datalist id="state-suggestions">
                  <option value={deliveryAddress.state} />
                </datalist>
              )}
            </FieldWrapper>
          </Fields>
        </Fieldset>

        <Fieldset>
          <FieldsetHeader $iconColor="purple">
            <CurrencyDollar />
            <div>
              <legend>Pagamento</legend>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FieldsetHeader>

          <FieldWrapper>
            <Radio name="paymentMethod" value="credit-card">
              <CreditCard size={16} />
              cartão de crédito
            </Radio>
            <Radio name="paymentMethod" value="debit-card">
              <Bank size={16} />
              cartão de débito
            </Radio>
            <Radio name="paymentMethod" value="cash">
              <Money size={16} />
              dinheiro
            </Radio>
          </FieldWrapper>
        </Fieldset>
      </NewOrderFormContainer>
    </FormProvider>
  )
}
