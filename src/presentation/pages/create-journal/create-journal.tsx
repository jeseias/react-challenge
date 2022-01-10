import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { CustomButton, TextField, LogoSVG, Title } from 'presentation/components'
import { SaveJournal } from 'domain/usecases/save-journal'
import { useNavigate, useParams } from 'react-router-dom'
import { PageRoutes } from 'main/constants/page-routes'

type Props = {
  saveJournal: SaveJournal
}

const CreateJournal: React.FC<Props> = ({ saveJournal }: Props) => {
  const [name, setName] = useState('')
  const { userId } = useParams() as { userId: string }
  const navigate = useNavigate()

  async function handleSaveJournal() {
    try {
      if (name) {
        await saveJournal.save({ 
          title: name,
          userId,
          type: 'public' 
        })
        navigate(`${PageRoutes.Journals}/${userId}`)
      }
    } catch (error) {
      console.error(error)  
    }
  }

  return (
    <Flex p="3.2rem 2.8rem 3.209rem 2.8rem" minHeight="100%" alignItems="center" flexDir="column">
      <Box alignSelf="self-start" mb="11.411rem">
        <LogoSVG aria-label="company logo" />
      </Box>
      <Flex 
        w="26.109rem"
        h="35.471rem"
        bg="light"
        boxShadow="inset 0px -4px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 2px rgba(0, 0, 0, 0.1)"
        borderRadius=" 2px 16px 16px 2px"
        position="relative"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        mb="2.369rem"
      >
        <Box 
          bg="light"  
          w="1.872rem"
          h="100%"
          position="absolute"
          top="0"
          left="0"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="2px 0px 0px 2px"
        />
        <Title maxWidth="85%">{name}</Title>
      </Flex> 
      <TextField 
        placeholder="journal title"
        bg="rgba(255,255,255,.42)" 
        color="primary.500"
        fontSize="1.2rem"
        fontWeight="600"
        fontFamily="Montserrat"
        lineHeight="1.463rem"
        border=" 1px solid rgba(157, 164, 166, 0.07)"
        borderRadius=".4rem"
        h="4rem"
        aria-label="input"
        focusBorderColor="none"
        onChange={e => setName(e.target.value)}
      /> 
      <CustomButton mt="4.2rem" onClick={handleSaveJournal}>Save journal</CustomButton>
    </Flex>
  )
}

export default CreateJournal