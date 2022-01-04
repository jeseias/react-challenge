import { Box, Flex, Text } from '@chakra-ui/react'
import { Journal as JournalProps } from 'domain/models/journal'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Journal: React.FC<JournalProps> = ({ title, id }) => {
  const navigate = useNavigate()
  const { userId } = useParams()
  console.log('The user id is', userId)
  return (
    <Flex 
      justifyContent="center" 
      alignItems="center" 
      position="relative" 
      overflow="hidden" 
      boxShadow="inset 0px -4px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 2px rgba(0, 0, 0, 0.1)"
      borderRadius="2px 16px 16px 2px"
      bg="#B8E5E3"
      h="20.1rem"
      color="black"
      _even={{ bg: '#3B4E8D', color: 'white' }}
      cursor="pointer"
      transition="all ease-in-out .25s"
      onClick={() => navigate(`/journals/${userId}/entries/${id}`, { state: { title } })}
    >
      <Box 
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        position="absolute"
        bg="#5091D6"
        top="0"
        left="0"
        h="100%"
        w="1.1rem"
      />
      <Text fontSize="2.4rem" fontFamily="Abhaya Libre" lineHeight="2.8rem">{title}</Text>
    </Flex>
  )
}

export default Journal