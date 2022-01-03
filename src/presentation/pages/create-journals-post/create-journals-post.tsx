import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ChevronLeftSVG, CustomButton, TextField, LogoSVG, Title } from 'presentation/components'
import { SaveEntry } from '../../../domain/usecases/save-entry'
import { useLocation } from 'react-router-dom'

type Props = {
  saveEntry: SaveEntry
}

type LocationProps = {
  state: {
    id: string 
    title: string
  }
}

const CreateJournalsPost: React.FC<Props> = ({ saveEntry }: Props) => {
  const { state: { id, title } } = useLocation() as LocationProps
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSaveEntry = async () => {
    try {
      await saveEntry.save({
        title: name,
        content: content,
        journalId: id
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <LogoSVG />
      <Flex alignItems="center" mt="2.7rem" mb="4.494rem" p="0">
        <Box position="relative" left="-1rem">
          <ChevronLeftSVG />
        </Box>
        <Title>{title}</Title>
      </Flex>
      <Box mb="2.8rem">
        <TextField placeholder="title" onChange={e => setName(e.target.value)} />
      </Box>
      <TextField textArea placeholder="Write your note" h="37.9rem"  onChange={e => setContent(e.target.value)}  />
      <CustomButton m="3.7rem auto 0 auto" onClick={handleSaveEntry}>Save note</CustomButton>
    </Box>
  )
}

export default CreateJournalsPost