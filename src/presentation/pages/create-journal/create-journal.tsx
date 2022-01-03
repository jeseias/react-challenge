import React, { useState } from 'react'
import { Box, Flex, Text,  } from "@chakra-ui/react"
import { CustomButton, TextField, LogoSVG } from 'presentation/components'
import { SaveJournal } from 'domain/usecases/save-journal'
import { useAuth } from 'presentation/modules/hooks'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from 'main/constants/page-routes'

type Props = {
  saveJournal: SaveJournal
}

const CreateJournal: React.FC<Props> = ({ saveJournal }: Props) => {
  const [name, setName] = useState('')
  const { account } = useAuth()
  const navigate = useNavigate()

  async function handleSaveJournal() {
    try {
      if (account?.user.id) {
        await saveJournal.save({ 
          title: name,
          userId: account.user.id,
          type: 'public' 
        })
        navigate(PageRoutes.JournalsList)
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
        <Text 
          fontSize="2.4rem" 
          fontWeight="bold" 
          fontFamily="Abhaya Libre" 
          lineHeight="2.8rem" 
          maxWidth="85%" 
        >
          {name}
        </Text>
      </Flex>
      <TextField 
        placeholder="journal title"
        onChange={e => setName(e.target.value)}
        fontSize="1.2rem"
        lineHeight="1.5rem"
        color="#804627 !important"
      />
      <CustomButton mt="4.2rem" onClick={handleSaveJournal}>Save journal</CustomButton>
    </Flex>
  )
}

export default CreateJournal