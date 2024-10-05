export type Tags =
  | 'TRADICIONAL'
  | 'GELADO'
  | 'COM LEITE'
  | 'ESPECIAL'
  | 'ALCOÓlICO'

export interface Product {
  id: string
  name: string
  price: number
  imageURL: string
  description?: string
  tags: Tags[]
}
