import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../landing/components/shared"
import { AboutPage, ContactPage, HomePage } from "../landing/pages"

export const AppRouter = () => {
	return (
		<>
			<Header />

			{/* Aquí van las rutas */}
			<Routes>

				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />

				<Route path='*' element={<Navigate to ='/' />} />

			</Routes>

		</>
	)
}
