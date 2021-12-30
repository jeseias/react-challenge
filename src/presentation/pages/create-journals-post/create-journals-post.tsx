import React, { } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ChevronLeftSVG, CustomButton, LogoSVG, Title } from 'presentation/components'

const CreateJournalsPost: React.FC = () => {
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <LogoSVG />
      <Flex alignItems="center">
        <ChevronLeftSVG />
        <Title>HTML</Title>
      </Flex>
      <form action="">
        <CustomButton>Save note</CustomButton>
      </form>
    </Box>
  )
}

export default CreateJournalsPost