import { useContext, useMemo } from 'react'
import I18nContext from './context'

export default function useCommonProps<T = any>(): { common: T } {
  const ctx = useContext(I18nContext)
  return useMemo(() => ({ common: ctx.cProps }), [ctx])
}
