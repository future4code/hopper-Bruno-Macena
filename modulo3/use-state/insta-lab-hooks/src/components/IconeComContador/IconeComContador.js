import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(iconeCurtida) {
	return <IconeContainer>
		<img alt={'Icone'} src={iconeCurtida.icone} onClick={iconeCurtida.onClickIcone}/>
		<p>{iconeCurtida.valorContador}</p>
	</IconeContainer>
}

export default IconeComContador