import React, { } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ChevronLeftSVG, CustomButton, TextField, LogoSVG, Title } from 'presentation/components'
import { SaveEntry } from '../../../domain/usecases/save-entry'
import { useParams } from 'react-router-dom'

type Props = {
  saveEntry: SaveEntry
}

const CreateJournalsPost: React.FC<Props> = ({  }: Props) => {
  const { title } = useParams()
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <LogoSVG />
      <Flex alignItems="center" mt="2.7rem" mb="4.494rem" p="0">
        <Box position="relative" left="-1rem">
          <ChevronLeftSVG />
        </Box>
        <Title>{title}</Title>
      </Flex>
      <form action="">
        <Box mb="2.8rem">
          <TextField placeholder="title" />
        </Box>
        <TextField textArea placeholder="Write your note" h="37.9rem"  />
        <CustomButton m="3.7rem auto 0 auto">Save note</CustomButton>
      </form>
    </Box>
  )
}

export default CreateJournalsPost