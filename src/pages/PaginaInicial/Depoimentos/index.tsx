import styled from "styled-components"

const Container = styled.section`
width: 50%;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza)
`

export default function Depoimentos() {
    return (
        <Container>
            <Titulo>Depoimentos</Titulo>
            <Texto>Minha experiência na Clínica Voll foi incrível. A equipe é atenciosa e os profissionais são altamente qualificados. Senti-me confortável e bem cuidada durante todo o processo.</Texto>
            <Subtitulo>Maria Silva, 35 anos, Itaim/SP.</Subtitulo>
            <Linha />
            <Texto>Recomendo a Clínica Voll para todos que buscam um atendimento de qualidade. A estrutura é moderna, e o atendimento personalizado fez toda a diferença na minha jornada de cuidados com a saúde.</Texto>
            <Subtitulo>João Santos, 42 anos, São Paulo/SP.</Subtitulo>
            <Linha />
            <Texto>Estou muito satisfeita com os serviços da Clínica Voll. Desde a recepção até a consulta, fui tratada com respeito e profissionalismo. Encontrei exatamente o que precisava para minha saúde e bem-estar</Texto>
            <Subtitulo>Ana Oliveira, 28 anos, Osasco/SP.</Subtitulo>
            <Linha />
        </Container>
    )
}
