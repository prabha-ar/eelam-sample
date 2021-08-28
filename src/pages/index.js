import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-lightD2"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex="1 1 auto" />
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 112px/1.2 &quot;Catamaran&quot;, sans-serif"
				md-font="--headline2"
				color="--dark"
				display="flex"
			>
				மாவீரர் உரைகள்{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/612510d129a0a1001e6c5809/images/selvinnellai87-1430499922780983296-1.jpg?v=2021-08-28T18:51:57.052Z" />
		</Section>
		<Stack
			margin-top="40px"
			flex-wrap="wrap"
			align-items="center"
			justify-content="center"
			display="flex"
			grid-auto-rows="2"
			grid-auto-flow="2"
			margin="0px 20px 0 20px"
		>
			<StackItem lg-width="50%" sm-width="100%" width="25%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
					padding="0px 0px 20px 0px"
					width="100%"
				/>
				<Image height="300px" src="https://uploads.quarkly.io/612510d129a0a1001e6c5809/images/leadersinthanai-1428989123726090240-1.jpg?v=2021-08-28T19:29:36.009Z" object-fit="cover" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong>
						மாவீரர் உரை 2008
					</Strong>
				</Text>
				<Components.QuarklycommunityKitAudio src="https://prod.store.digiboxx.com:9000/0b95d9fc0015469d/456825_2008-1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aazxcdklmnghfg%2F20210828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210828T191923Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe2901e56fc9dc47cad307e6129134b260ec822e38c4637793e6f2efde96af4d" padding="20px 0px 0px 0px" />
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="25%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
					padding="0px 0px 20px 0px"
					width="100%"
				/>
				<Image height="300px" src="https://uploads.quarkly.io/612510d129a0a1001e6c5809/images/eelapparavaikal-1426875341591793664-1.jpg?v=2021-08-28T19:30:22.762Z" object-fit="cover" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						மாவீரர் உரை 2007
					</Strong>
				</Text>
				<Components.QuarklycommunityKitAudio src="https://prod.store.digiboxx.com:9000/0b95d9fc0015469d/456825_2008-1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aazxcdklmnghfg%2F20210828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210828T191923Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe2901e56fc9dc47cad307e6129134b260ec822e38c4637793e6f2efde96af4d" padding="20px 0px 0px 0px" />
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="25%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
					padding="0px 0px 20px 0px"
					width="100%"
				/>
				<Image height="300px" src="https://uploads.quarkly.io/612510d129a0a1001e6c5809/images/5praba1-1428241860338716678-1.jpg?v=2021-08-28T19:25:04.063Z" object-fit="cover" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						மாவீரர் உரை 2006
					</Strong>
				</Text>
				<Components.QuarklycommunityKitAudio src="https://prod.store.digiboxx.com:9000/0b95d9fc0015469d/456825_2008-1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aazxcdklmnghfg%2F20210828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210828T191923Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe2901e56fc9dc47cad307e6129134b260ec822e38c4637793e6f2efde96af4d" padding="20px 0px 0px 0px" />
			</StackItem>
		</Stack>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"612510d129a0a1001e6c5807"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});