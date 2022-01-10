import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ChevronLeftSVG, CustomButton, TextField, LogoSVG, Title } from 'presentation/components'
import { SaveEntry } from '../../../domain/usecases/save-entry'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

type Props = {
  saveEntry: SaveEntry
}

type LocationProps = {
  state: {
    title: string
  }
}

const CreateJournalsEntry: React.FC<Props> = ({ saveEntry }: Props) => {
  const { state: { title } } = useLocation() as LocationProps
  const { userId, entryId } = useParams()
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleGoBack = () => navigate(`/journals/${userId}/entries/${entryId}`, { state: { title } })

  const handleSaveEntry = async () => {
    try {
      if (name && content) {
        const result = await saveEntry.save({
          title: name,
          content: content,
        })
        if (result.entry) handleGoBack()
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <LogoSVG />
      <Flex alignItems="center" mt="2.7rem" mb="4.494rem" p="0">
        <Box 
          position="relative" 
          left="-1rem" 
          onClick={handleGoBack} 
          cursor="pointer"
        >
          <ChevronLeftSVG />
        </Box>
        <Title>{title}</Title>
      </Flex>
      <Box mb="2.8rem">
        <TextField 
          placeholder="title" 
          defaultValue="Title"
          onChange={e => setName(e.target.value)}
        />
      </Box>
      <TextField 
        textArea 
        placeholder="Write your note" h="37.9rem" 
        defaultValue="Write your note"
        onChange={e => setContent(e.target.value)} 
      />
      <CustomButton m="3.7rem auto 0 auto" onClick={handleSaveEntry}>Save note</CustomButton>
    </Box>
  )
}

export default CreateJournalsEntry