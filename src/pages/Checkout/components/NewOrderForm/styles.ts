import styled from 'styled-components'

export const NewOrderFormContainer = styled.form`
  width: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Fieldset = styled.fieldset`
  width: 100%;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.base[100]};

  border: 0;
  border-radius: 6px;
`

interface FieldsetHeaderProps {
  $iconColor: 'yellow' | 'purple'
}

export const FieldsetHeader = styled.header<FieldsetHeaderProps>`
  margin-bottom: 3.2rem;

  display: flex;
  gap: 0.8rem;

  svg {
    font-size: 2.2rem;
    color: ${({ theme, $iconColor }) =>
      $iconColor === 'yellow'
        ? theme.colors.yellow[700]
        : $iconColor === 'purple' && theme.colors.purple[500]};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    legend {
      color: ${({ theme }) => theme.colors.base[700]};
    }

    p {
      font-size: ${({ theme }) => theme.sizes.sm};
    }
  }
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const FieldWrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 1.2rem;

  .input-cep,
  .input-number,
  .input-neighborhood {
    max-width: 20rem;
  }

  .input-city {
    flex: 10;
  }

  .input-state {
    flex: 2;
  }
`
