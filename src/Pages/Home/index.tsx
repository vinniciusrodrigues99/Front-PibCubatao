import { Container } from "../../Components/Container"	

export function Home() {
  return (
    <div>
      <Container>
        <h2 className="text-3xl font-bold text-blue-500"> Eventos </h2>
        <section className="bg-white p-4 rounded-lg w-full max-w-3x1 mx-auto flex justify-center items-center gap-2">
          <input
            className="w-full border-2 rounded-lg h-9 px-3"
            placeholder="Pesquisar"/>
          <button className="bg-blue-500 h-9 px-8 rounded-lg text-white font-medium text-lg"> 
            Buscar
          </button>
        </section>

        <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <section className="w-full bg-white p-4 rounded-lg">
            <img
              className="w=full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
              src=""
              alt="Descrição do evento" />
          </section>
        </main>
      </Container>
    </div>
  )
}