import { ClientList, DirectorList, Hero } from "../components/about"
import { FooterTop } from "../components/shared"

export const AboutPage = () => {
	return (
		<>
			<Hero />
			<DirectorList />
			<ClientList />
			<FooterTop />
		</>
	)
}
