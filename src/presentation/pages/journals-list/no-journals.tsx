import { Box } from '@chakra-ui/react'
import { EmptySVG, LinkText } from 'presentation/components'
import React from 'react'
import { useParams } from 'react-router-dom'

export const NoJournals: React.FC = () => {
  const { userId } = useParams()
  return (
    <>
      <Box mt="24.6rem" mb="7.936rem">
        <EmptySVG />
      </Box>
      <LinkText 
        to={`/journals/${userId}/create`} 
        mb="14.8rem" 
        textAlign="center"
      >
        Create a journal
      </LinkText>
    </>
  )
}