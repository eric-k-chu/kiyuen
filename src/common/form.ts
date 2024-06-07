import { FormEvent } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

export type FormOutput<T extends FieldValues> = {
  form: UseFormReturn<T>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
