'use server'

export async function generateMetadata({ params }) {
    return {
      title: 'Tipo de Curso'
    };
  }

export default async function Page(){
    return(
        <>
            <h2>Tipo de Curso</h2>
            <h4>Exemplo de CRUD para Tipo de Curso</h4>
        </>
    )
}