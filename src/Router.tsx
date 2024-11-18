import { Navigate, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
