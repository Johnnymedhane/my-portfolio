import { Header } from "../components/Header"
import { useAppContext } from "../contexts/contextApi";
import { Main } from "../components/Main"
import { Hero } from "../components/Hero"

function HomePage() {
    const {selectedNav, setSelectedNav, showIndicator} = useAppContext();
    return (
        <div>
          <Header selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <Hero showIndicator={showIndicator} setSelectedNav={setSelectedNav} />
      <Main selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        </div>
    )
}

export default HomePage
