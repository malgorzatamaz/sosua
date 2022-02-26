import styled from 'styled-components/native'

export const AvatarWraper = styled.View`
	flex-direction: row;
	align-items: center;
`

export const AvatarImage = styled.View`
	margin-right: 10px;
	border-radius: 50%;
	overflow: hidden;
`

export const AvatarContent = styled.View`
	
`

export const Subtitle = styled.Text`
	color: ${(props)=>props.theme.colors.headings};
	font-size: 12px;
	font-weight: 300;
`

export const Title = styled.Text`
	color: ${(props)=>props.theme.colors.headings};
	font-weight: 400;
	font-size: 16px;
`